<?php

namespace App\Controller;

use App\Entity\User;
use App\Enum\FederationUnit;
use App\Enum\RegistryType;
use App\Enum\Roles;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\RouterInterface;

final class AdminController extends AbstractController
{
  #[Route('/admin/usuarios', name: 'admin_users')]
  public function index(
    UserRepository $userRepository
  ): Response
  {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');
    // Get all users
    $users = $userRepository->findAll();

    return $this->render(
      'config/users.html.twig',
      ['users' => $users]
    );
  }

  #[Route('/admin/usuarios/novo', name: 'admin_users_new')]
  public function user_new(): Response
  {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    return $this->render(
      'config/users/new.html.twig',
      [
        'registryTypes' => RegistryType::cases(),
        'federationUnits' => FederationUnit::cases(),
        'roles' => Roles::cases()
      ]
    );
  }

  #[Route('/admin/usuarios/novo/salvar', name: 'admin_users_new_save')]
  public function user_new_save(
    EntityManagerInterface $entityManager,
    MailerInterface $mailer,
    Request $request,
    RouterInterface $router,
    UserPasswordHasherInterface $passwordHasher
  ): JsonResponse {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Get user data
    $username = $request->query->get('username');
    $firstName = $request->query->get('firstName');
    $lastName = $request->query->get('lastName');
    $registryType = $request->query->get('registryType');
    $registryState = $request->query->get('registryState');
    $registryNumber = $request->query->get('registryNumber');
    $email = $request->query->get('email');
    $phone = $request->query->get('phone');
    $roles = $request->query->get('roles');
    // (Post-)Process data
    // > Trim whitespaces
    $username = trim($username);
    $firstName = trim($firstName);
    $lastName = trim($lastName);
    // > Sanitize strings not otherwise validated
    $firstName = htmlspecialchars($firstName);
    $lastName = htmlspecialchars($lastName);
    // > Cast as integer
    $registryNumber = intval($registryNumber);
    // > Phone number set?
    if ($phone != '') {
      // > Remove phone's excess characters
      $phone = preg_replace('/[\(\)\- ]/', '', $phone);
      // > Add Brazil international code if none is set
      preg_match('/(\+\d{2})?(\d{2})(\d{8,9})/', $phone, $matches);
      if ($matches[1] == '') {
        $phone = "+55$phone";
      }
    }

    // Check data validity
    // > Username must contain only alphanumeric non-accented characters
    if (preg_match('/^[A-z0-9]+$/', $username) != 1) {
      return $this->json([
        'success' => false,
        'msg' => 'Nome de Usuário inválido'
      ]);
    }
    // > Registries' Type and State must be valid
    // > > Types
    $types = array_map(fn($v): string => $v->value, RegistryType::cases());
    if (in_array($registryType, $types)) {
      $registryType = RegistryType::from($registryType);
    } else {
      return $this->json([
        'success' => false,
        'msg' => 'Tipo de registro inválido'
      ]);
    }
    // > > States
    $ufs = array_map(fn($v): string => $v->value, FederationUnit::cases());
    if (in_array($registryState, $ufs)) {
      $registryState = FederationUnit::from($registryState);
    } else {
      return $this->json([
        'success' => false,
        'msg' => 'Unidade Federativa do registro inválida'
      ]);
    }
    // > Roles are valid
    $rs = array_map(fn($v): string => $v->value, Roles::cases());
    if (in_array($roles, $rs)) {
      $roles = json_decode($roles);
    } else {
      return $this->json([
        'success' => false,
        'msg' => 'Função inválida'
      ]);
    }
    // > Email validity
    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      return $this->json([
        'success' => false,
        'msg' => 'Email inválido'
      ]);
    }

    // Get list of all routes
    $routes = $router->getRouteCollection()->all();
    // Map only 'module_*' routes
    $routes = array_map(
      function($v): ?array {
        if (preg_match('/^module_[a-z_]+/', $v) === 1) {
          return [
            str_replace('module_', '', $v),
            1
          ];
        } else {
          return null;
        }
      },
      array_keys($routes)
    );
    // Filter out null elements
    $routes = array_filter($routes);

    // Create random password
    $pw_chars = '0123456789';
    $pw_chars .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $pw_chars .= 'abcdefghijklmnopqrstuvwxyz';
    $pw_chars .= '!@#$%&*()-_=+/?';
    $pw = substr(str_shuffle($pw_chars), 1, 16);

    // Create invite email
    $invite = (new TemplatedEmail())
      ->subject('Bem vinde!')
      ->to(new Address($email, $firstName . ' ' . $lastName))
      ->htmlTemplate('emails/invite.html.twig')
      ->textTemplate('emails/invite.txt.twig')
      ->context([
        'app' => $_ENV['APP_NAME'],
        'name' => $firstName . ' ' . $lastName,
        'username' => $username,
        'pw' => $pw
      ]);

    // Create new user
    $user = new User();
    $user->setUsername($username);
    $user->setFirstName($firstName);
    $user->setLastName($lastName);
    $user->setRegistryType($registryType);
    $user->setRegistryState($registryState);
    $user->setRegistryNumber($registryNumber);
    $user->setEmail($email);
    $user->setPhone($phone);
    $user->setRoles($roles);
    $user->setHeader('');
    $user->setModules($routes);
    $user->setInactiveModules([]);
    $user->setMiscRows(2);
    $user->setOutputRows(10);
    // Hash password and set it
    $hashedPw = $passwordHasher->hashPassword(
      $user,
      $pw
    );
    $user->setPassword($hashedPw);
    // Persist it
    $entityManager->persist($user);
    $entityManager->flush();

    // Try to send email
    // But only AFTER persisting the user
    try {
      $mailer->send($invite);
    } catch (TransportExceptionInterface $e) {
      $msg = 'Erro no envio de convite';
      if ($_ENV['APP_ENV'] == 'dev') {
        $msg .= '<br>' . $e->getMessage();
      }
      return $this->json([
        'success' => false,
        'msg' => $msg
      ]);
    }

    return $this->json([
      'success' => true,
      'msg' => 'Usuário convidade com sucesso'
    ]);
  }

  #[Route('/admin/usuario/{user}', name: 'admin_users_edit')]
  public function user_edit(
    User $user
  ): Response
  {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    return $this->render(
      'config/users/edit.html.twig',
      [
        'user' => $user,
        'registryTypes' => RegistryType::cases(),
        'federationUnits' => FederationUnit::cases(),
        'roles' => Roles::cases()
      ]
    );
  }

  #[Route('/admin/usuarios/editar/salvar/{user}', name: 'admin_users_edit_save')]
  public function user_edit_save(
    EntityManagerInterface $entityManager,
    MailerInterface $mailer,
    Request $request,
    User $user
  ): JsonResponse {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Get new data
    $username = $request->query->get('username');
    $firstName = $request->query->get('firstName');
    $lastName = $request->query->get('lastName');
    $registryType = $request->query->get('registryType');
    $registryState = $request->query->get('registryState');
    $registryNumber =  $request->query->get('registryNumber');
    $email = $request->query->get('email');
    $roles = $request->query->get('roles');
    // Get old (corresponding) data
    $old_username = $user->getUsername();
    $old_firstName = $user->getfirstName();
    $old_lastName = $user->getLastName();
    $old_registryType = $user->getRegistryType();
    $old_registryState = $user->getRegistryState();
    $old_registryNumber = $user->getRegistryNumber();
    $old_email = $user->getEmail();
    $old_roles = json_encode($user->getRoles());

    // (Post-)Process data
    // > Trim whitespaces
    $username = trim($username);
    $firstName = trim($firstName);
    $lastName = trim($lastName);
    // > Sanitize strings not otherwise validated
    $firstName = htmlspecialchars($firstName);
    $lastName = htmlspecialchars($lastName);
    // > Cast as integer
    $registryNumber = intval($registryNumber);

    // Check new data validity
    // > Username must contain only alphanumeric non-accented characters
    if (preg_match('/^[A-z0-9]+$/', $username) != 1) {
      return $this->json([
        'success' => false,
        'msg' => 'Nome de Usuário inválido'
      ]);
    }
    // > Registries' Type and State must be valid
    // > > Types
    $types = array_map(fn($v): string => $v->value, RegistryType::cases());
    if (in_array($registryType, $types)) {
      $registryType = RegistryType::from($registryType);
    } else {
      return $this->json([
        'success' => false,
        'msg' => 'Tipo de registro inválido'
      ]);
    }
    // > > States
    $ufs = array_map(fn($v): string => $v->value, FederationUnit::cases());
    if (in_array($registryState, $ufs)) {
      $registryState = FederationUnit::from($registryState);
    } else {
      return $this->json([
        'success' => false,
        'msg' => 'Unidade Federativa do registro inválida'
      ]);
    }
    // > Roles are valid
    $rs = array_map(fn($v): string => $v->value, Roles::cases());
    if (!in_array($roles, $rs)) {
      return $this->json([
        'success' => false,
        'msg' => 'Função inválida'
      ]);
    }
    // > Email validity
    if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      return $this->json([
        'success' => false,
        'msg' => 'Email inválido'
      ]);
    }

    // Are there changes?
    if (
      $old_username == $username &&
      $old_email == $email &&
      $old_roles == $roles &&
      $old_firstName == $firstName &&
      $old_lastName == $lastName &&
      $old_registryType == $registryType &&
      $old_registryState == $registryState &&
      $old_registryNumber == $registryNumber
    ) {
      return $this->json([
        'success' => false,
        'msg' => 'Para alterar o usuário, é necessário alterar alguma coisa...'
      ]);
    }
    // Compile changes
    $changes = [];
    // > If new username
    if ($old_username != $username) {
      $changes[] = ['Usuário', $username];
    }
    // > If new Primeiro Nome
    if ($old_firstName != $firstName) {
      $changes[] = ['Primeiro Nome', $firstName];
    }
    // > If new Sobrenome
    if ($old_lastName != $lastName) {
      $changes[] = ['Sobrenome', $lastName];
    }
    // > If new Tipo de Registro
    if ($old_registryType != $registryType) {
      $changes[] = ['Tipo de Registro', $registryType->value];
    }
    // > If new UF do Registro
    if ($old_registryState != $registryState) {
      $changes[] = ['UF do Registro', $registryState->value];
    }
    // > If new Nº do Registro
    if ($old_registryNumber != $registryNumber) {
      $changes[] = ['Nº do Registro', $registryNumber];
    }
    // > If new email
    if ($old_email != $email) {
      $changes[] = ['Email', $email];
    }
    // > If new roles
    if (strlen($old_roles) < strlen($roles)) {
      $changes[] = ['Funções', 'você ganhou funções'];
    } elseif (strlen($old_roles) > strlen($roles)) {
      $changes[] = ['Funções', 'você perdeu funções'];
    }

    // Create changes' email
    $mail = (new TemplatedEmail())
      ->subject('Atualizações')
      ->to(new Address($email, $user->getFirstName() . ' ' . $user->getLastName()))
      ->htmlTemplate('emails/changes.html.twig')
      ->textTemplate('emails/changes.txt.twig')
      ->context([
        'app' => $_ENV['APP_NAME'],
        'name' => $user->getFirstName(),
        'changes' => $changes
      ]);
    // If new email, create a warning one
    if ($old_email != $email) {
      $old_mail = (new TemplatedEmail())
        ->subject('Atualização')
        ->to($old_email)
        ->htmlTemplate('emails/emailchange.html.twig')
        ->textTemplate('emails/emailchange.txt.twig')
        ->context([
          'app' => $_ENV['APP_NAME'],
          'name' => $user->getFirstName()
        ]);
    }

    // Set user data to the new ones
    $user->setUsername($username);
    $user->setFirstName($firstName);
    $user->setLastName($lastName);
    $user->setRegistryType($registryType);
    $user->setRegistryState($registryState);
    $user->setRegistryNumber($registryNumber);
    $user->setEmail($email);
    $user->setRoles(json_decode($roles));
    // Persist it
    $entityManager->persist($user);
    $entityManager->flush();

    // Try to send the emails
    // But only AFTER persisting the changes!
    try {
      $mailer->send($mail);
      if ($old_email != $email) {
        $mailer->send($old_mail);
      }
    } catch (TransportExceptionInterface $e) {
      $msg = 'Erro no envio de email de mudança';
      if ($_ENV['APP_ENV'] == 'dev') {
        $msg .= '<br>' . $e->getMessage();
      }
      return $this->json([
        'success' => false,
        'msg' => $msg
      ]);
    }

    return $this->json([
      'success' => true,
      'msg' => 'Mudanças salvas com sucesso'
    ]);
  }

  #[Route('/admin/usuarios/novasenha/{user}', name: 'admin_users_pwreset')]
  public function user_reset_pw(
    EntityManagerInterface $entityManager,
    MailerInterface $mailer,
    User $user,
    UserPasswordHasherInterface $passwordHasher
  ): JsonResponse {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Create new random password
    $pw_chars = '0123456789';
    $pw_chars .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $pw_chars .= 'abcdefghijklmnopqrstuvwxyz';
    $pw_chars .= '!@#$%&*()-_=+/?';
    $pw = substr(str_shuffle($pw_chars), 1, 16);

    // Create password change email
    $pw_change = (new TemplatedEmail())
      ->subject('Mudança de Senha')
      ->to(new Address($user->getEmail(), $user->getFirstName() . ' ' . $user->getLastName()))
      ->htmlTemplate('emails/new_pw.html.twig')
      ->textTemplate('emails/new_pw.txt.twig')
      ->context([
        'app' => $_ENV['APP_NAME'],
        'name' => $user->getFirstName(),
        'pw' => $pw
      ]);

    // Hash password and set it
    $hashedPw = $passwordHasher->hashPassword(
      $user,
      $pw
    );
    $user->setPassword($hashedPw);
    // Persist it
    $entityManager->persist($user);
    $entityManager->flush();

    // Try to send email
    // But only AFTER persisting the user
    try {
      $mailer->send($pw_change);
    } catch (TransportExceptionInterface $e) {
      $msg = 'Erro no envio do email de mudança de senha';
      if ($_ENV['APP_ENV'] == 'dev') {
        $msg .= '<br>' . $e->getMessage();
      }
      return $this->json([
        'success' => false,
        'msg' => $msg
      ]);
    }

    return $this->json([
      'success' => true,
      'msg' => 'Senha mudada com sucesso'
    ]);
  }

  #[Route('/admin/usuarios/remover/{user}', name: 'admin_users_remove')]
  public function user_delete(
    EntityManagerInterface $entityManager,
    MailerInterface $mailer,
    Request $request,
    User $user
  ): JsonResponse {
    // Deny non-admin users
    $this->denyAccessUnlessGranted('ROLE_ADMIN');
    // Don't remove owners
    if (in_array('ROLE_OWNER', $user->getRoles())) {
      return $this->json([
        'success' => false,
        'msg' => 'Este usuário não pode ser deletado'
      ]);
    }
    // To remove admins, you must be an owner
    if (in_array('ROLE_ADMIN', $user->getRoles())) {
      $this->denyAccessUnlessGranted('ROLE_OWNER');
    }

    // Fetch reason
    $reason = $request->query->get('reason');
    // Process reason
    $reason = trim($reason);
    $reason = htmlspecialchars($reason);

    // Create removal email
    $removal = (new TemplatedEmail())
      ->subject('Remoção')
      ->to(new Address($user->getEmail(), $user->getFirstName() . ' ' . $user->getLastName()))
      ->htmlTemplate('emails/bai.html.twig')
      ->textTemplate('emails/bai.txt.twig')
      ->context([
        'app' => $_ENV['APP_NAME'],
        'name' => $user->getFirstName(),
        'username' => $user->getUsername(),
        'reason' => $reason
      ]);

    // Remove it
    $entityManager->remove($user);
    $entityManager->flush();

    // Try to send email
    // But only AFTER removing the user
    try {
      $mailer->send($removal);
    } catch (TransportExceptionInterface $e) {
      $msg = 'Erro no envio do email de mudança de senha';
      if ($_ENV['APP_ENV'] == 'dev') {
        $msg .= '<br>' . $e->getMessage();
      }
      return $this->json([
        'success' => false,
        'msg' => $msg
      ]);
    }

    return $this->json([
      'success' => true,
      'msg' => 'Usuário removido com sucesso'
    ]);
  }
}

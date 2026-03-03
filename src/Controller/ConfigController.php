<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Place;
use App\Entity\Text;
use App\Enum\FederationUnit;
use App\Enum\RegistryType;
use App\Repository\TextRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class ConfigController extends AbstractController
{
  /********************************************/
  /*               Config Home                */
  /********************************************/
  #[Route('/painel', name: 'config_home')]
  public function index(): Response
  {
    return $this->render('config/index.html.twig',
    [
      'registryTypes' => RegistryType::cases(),
      'federationUnits' => FederationUnit::cases()
    ]);
  }

  #[Route('/painel/salvar', name: 'config_home_save')]
  public function index_save(
    EntityManagerInterface $entityManager,
    Request $request
  ): JsonResponse
  {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

    /** @var User */
    $user = $this->getUser();
    // Get new user data
    $phone = $request->query->get('phone');

    // Update user entity
    $user->setPhone($phone);
    // Persist changes
    $entityManager->persist($user);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Configurações salvas com sucesso.'
    ]);
  }

  #[Route('/painel/senha', name: 'config_change_password')]
  public function change_password(
    EntityManagerInterface $entityManager,
    Request $request,
    UserPasswordHasherInterface $passwordHasher
  ): JsonResponse {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED_REMEMBERED');

    /** @var User */
    $user = $this->getUser();
    // Get password data
    $oldPw = $request->query->get('oldPw');
    $newPw = $request->query->get('newPw');
    // Confirm old password
    if (!$passwordHasher->isPasswordValid($user, $oldPw)) {
      // Invalid old password
      return $this->json([
        'success' => false,
        'msg' => 'Senha atual incorreta.'
      ]);
    } else {
      // Valid old password
      // Change to new password
      $hashedPassword = $passwordHasher->hashPassword(
        $user,
        $newPw
      );
      $user->setPassword($hashedPassword);
      // Persist changes
      $entityManager->persist($user);
      $entityManager->flush();

      // Return success
      return $this->json([
        'success' => true,
        'msg' => 'Senha alterada com sucesso.'
      ]);
    }
  }

  /********************************************/
  /*              Config Places               */
  /********************************************/
  #[Route('/painel/locais', name: 'config_places')]
  public function places(): Response
  {
    return $this->render('config/places.html.twig');
  }

  #[Route('/painel/local/novo', name: 'config_place_new')]
  public function place_new(): Response
  {
    return $this->render(
      'config/place.html.twig',
      [ 'place' => new Place() ]
    );
  }

  #[Route('/painel/local/novo/salvar', name: 'config_place_new_save')]
  public function place_save(
    EntityManagerInterface $entityManager,
    Request $request
  ): JsonResponse
  {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Get place data
    $name = $request->query->get('name');
    $cnes = $request->query->get('cnes');
    $phone = $request->query->get('phone');
    $address = $request->query->get('address');
    // Parse data
    // > Remove excess characters
    $phone = preg_replace('/[\(\)\- ]/', '', $phone);
    // > Add Brazil international code if none is set
    preg_match('/(\+\d{2})?(\d{2})(\d{8,9})/', $phone, $matches);
    if ($matches[1] == '') {
      $phone = "+55$phone";
    }

    // Check data validity
    // > CNES
    if (preg_match('/^\d{7}$/', $cnes) == 0) {
      return $this->json([
        'success' => false,
        'msg' => 'CNES inválido'
      ]);
    }
    // > Phone
    if (preg_match('/^\+\d{1,3}\d{2}\d{8,9}$/', $phone) == 0) {
      return $this->json([
        'success' => false,
        'msg' => 'Telefone inválido'
      ]);
    }

    // Create new place
    $place = new Place();
    $place->setName($name);
    $place->setCnes($cnes);
    $place->setPhone($phone);
    $place->setAddress($address);
    $place->setOwner($this->getUser());
    // Persist it
    $entityManager->persist($place);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Local criado com sucesso'
    ]);
  }

  #[Route('/painel/local/{place}', name: 'config_place_edit')]
  public function place_edit(
    Place $place
  ): Response
  {
    return $this->render(
      'config/place.html.twig',
      ['place' => $place]
    );
  }

  #[Route('/painel/local/novo/salvar/{place}', name: 'config_place_edit_save')]
  public function place_edit_save(
    EntityManagerInterface $entityManager,
    Place $place,
    Request $request
  ): JsonResponse {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Get place data
    $name = $request->query->get('name');
    $cnes = $request->query->get('cnes');
    $phone = $request->query->get('phone');
    $address = $request->query->get('address');
    // Parse data
    // > Remove excess characters
    $phone = preg_replace('/[\(\)\- ]/', '', $phone);
    // > Add Brazil international code if none is set
    preg_match('/(\+\d{2})?(\d{2})(\d{8,9})/', $phone, $matches);
    if ($matches[1] == '') {
      $phone = "+55$phone";
    }

    // Check data validity
    // > CNES
    if (preg_match('/^\d{7}$/', $cnes) == 0) {
      return $this->json([
        'success' => false,
        'msg' => 'CNES inválido'
      ]);
    }
    // > Phone
    if (preg_match('/^\+\d{1,3}\d{2}\d{8,9}$/', $phone) == 0) {
      return $this->json([
        'success' => false,
        'msg' => 'Telefone inválido'
      ]);
    }

    // Edit place with new data
    $place->setName($name);
    $place->setCnes($cnes);
    $place->setPhone($phone);
    $place->setAddress($address);
    $place->setOwner($this->getUser());
    // Persist it
    $entityManager->persist($place);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Local editado com sucesso'
    ]);
  }

  #[Route('/painel/remover/{place}', name: 'config_place_remove')]
  public function place_remove(
    EntityManagerInterface $entityManager,
    Place $place
  ): JsonResponse
  {
    // Remove given place
    $entityManager->remove($place);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Local deletado com sucesso'
    ]);
  }

  #[Route('/painel/selecionar/{place}', name: 'config_place_select')]
  public function place_select(
    EntityManagerInterface $entityManager,
    Place $place
  ): JsonResponse
  {
    /** @var User */
    $user = $this->getUser();
    // Change current place
    $user->setPlace($place);
    // Persist it
    $entityManager->persist($user);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Local selecionado com sucesso'
    ]);
  }

  /********************************************/
  /*              Config Header               */
  /********************************************/
  #[Route('/painel/cabecalho', name: 'config_header')]
  public function header(): Response
  {
    return $this->render('config/header.html.twig');
  }

  #[Route('/painel/cabecalho/salvar', name: 'config_header_save')]
  public function header_save(
    EntityManagerInterface $entityManager,
    Request $request
  ): JsonResponse
  {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('ROLE_ADMIN');

    // Get new header
    $header = $request->query->get('header');
    // Get user
    /** @var User */
    $user = $this->getUser();

    // Check new header
    if ($header == "") {
      return $this->json([
        'success' => false,
        'msg' => 'Cabeçalho deve conter texto'
      ]);
    }
    if (strlen($header) > 64) {
      return $this->json([
        'success' => false,
        'msg' => 'Cabeçalho deve ter, no máximo, 64 caracteres'
      ]);
    }

    // Change current header
    $user->setHeader($header);
    // Persist it
    $entityManager->persist($user);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Cabeçalho atualizado com sucesso'
    ]);
  }

  /********************************************/
  /*             Config Fast Texts            */
  /********************************************/
  #[Route('/painel/textos', name: 'config_fasts')]
  public function fasts(
    TextRepository $textRepository
  ): Response
  {
    // Get user
    /** @var User */
    $user = $this->getUser();
    // Get user's texts
    $texts = $textRepository->findBy(['owner' => $user]);

    return $this->render(
      'config/texts.html.twig',
      ['texts' => $texts]
    );
  }

  #[Route('/painel/textos/novo', name: 'config_text_new')]
  public function text_new(): Response
  {
    return $this->render(
      'config/text.html.twig',
      ['text' => new Text()]
    );
  }

  #[Route('/painel/textos/remove/{text}', name: 'config_text_remove')]
  public function text_remove(
    EntityManagerInterface $entityManager,
    Text $text
  ): JsonResponse
  {
    // Get user
    /** @var User */
    $user = $this->getUser();

    // Check if text is owned by user
    if ($text->getOwner() != $user) {
      return $this->json([
        'success' => false,
        'msg' => 'Texto com este ID não te pertence'
      ]);
    }

    // Remove text
    $entityManager->remove($text);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Texto deletado com sucesso'
    ]);
  }

  #[Route('/painel/textos/novo/salvar', name: 'config_text_new_save')]
  public function text_save(
    EntityManagerInterface $entityManager,
    Request $request
  ): JsonResponse
  {
    // Get place data
    $name = $request->query->get('name');
    $txt = $request->query->get('text');
    // Remove excess characters
    $name = trim($name);
    $txt = trim($txt);
    // Check data validity
    // > Name
    if ($name == '') {
      return $this->json([
        'success' => false,
        'msg' => 'Nome não pode estar vazio'
      ]);
    }
    // > Text
    if ($txt == '') {
      return $this->json([
        'success' => false,
        'msg' => 'Texto não pode estar vazio'
      ]);
    }

    // Create new text
    $text = new Text();
    $text->setName($name);
    $text->setText($txt);
    $text->setOwner($this->getUser());
    // Persist it
    $entityManager->persist($text);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Texto criado com sucesso'
    ]);
  }

  #[Route('/painel/textos/salvar/{text}', name: 'config_text_edit_save')]
  public function text_edit_save(
    EntityManagerInterface $entityManager,
    Text $text,
    Request $request
  ): JsonResponse {
    // Get user
    /** @var User */
    $user = $this->getUser();
    // Get place data
    $name = $request->query->get('name');
    $txt = $request->query->get('txt');
    // Remove excess characters
    $name = trim($name);
    $txt = trim($txt);

    // Check data validity
    // > Name
    if ($name == '') {
      return $this->json([
        'success' => false,
        'msg' => 'Nome não pode estar vazio'
      ]);
    }
    // > Text
    if ($txt == '') {
      return $this->json([
        'success' => false,
        'msg' => 'Texto não pode estar vazio'
      ]);
    }
    // > User owns this text
    if ($text->getOwner() != $user) {
      return $this->json([
        'success' => false,
        'msg' => 'Você não possui o texto em questão'
      ]);
    }

    // Edit text with new data
    $text->setName($name);
    $text->setText($txt);
    // Persist it
    $entityManager->persist($text);
    $entityManager->flush();

    return $this->json([
      'success' => true,
      'msg' => 'Texto editado com sucesso'
    ]);
  }
}

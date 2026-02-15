<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Place;
use App\Enum\FederationUnit;
use App\Enum\RegistryType;
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
    $firstName = $request->get('firstName');
    $lastName = $request->get('lastName');
    $registryType = $request->get('registryType');
    $registryState = $request->get('registryState');
    $registryNumber = $request->get('registryNumber');
    $phone = $request->get('phone');

    // Update user entity
    $user->setFirstName($firstName);
    $user->setLastName($lastName);
    $user->setRegistryType(RegistryType::from($registryType));
    $user->setRegistryState(FederationUnit::from($registryState));
    $user->setRegistryNumber($registryNumber);
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
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED');

    /** @var User */
    $user = $this->getUser();
    // Get password data
    $oldPw = $request->get('oldPw');
    $newPw = $request->get('newPw');
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
    $name = $request->get('name');
    $cnes = $request->get('cnes');
    $phone = $request->get('phone');
    $address = $request->get('address');
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
    $name = $request->get('name');
    $cnes = $request->get('cnes');
    $phone = $request->get('phone');
    $address = $request->get('address');
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
    $header = $request->get('header');
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
}

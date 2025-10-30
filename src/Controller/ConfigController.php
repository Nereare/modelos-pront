<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Place;
use App\Enum\FederationUnit;
use App\Enum\RegistryType;
use App\Repository\PlaceRepository;
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

  #[Route('/painel/save', name: 'config_home_save')]
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

  #[Route('/painel/local/salvar', name: 'config_place_save')]
  public function place_save(
    Request $request
  ): JsonResponse
  {
    // Check if user is logged in
    $this->denyAccessUnlessGranted('IS_AUTHENTICATED');

    // Get place data
    $id = intval($request->get('id'));
    $name = $request->get('name');
    $cnes = $request->get('cnes');
    $phone = $request->get('phone');
    $address = $request->get('address');

    return $this->json([
      'success' => false,
      'msg' => 'Funcionalidade desativada temporariamente.'
    ]);
  }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class MainController extends AbstractController
{
  #[Route('/', name: 'home')]
  public function index(): Response
  {
    return $this->render('main/index.html.twig');
  }

  // Metafile routes

  #[Route('/sobre', name: 'about')]
  public function meta_about(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../md/ABOUT.md')
    ]);
  }

  #[Route('/cookies', name: 'cookies')]
  public function meta_cookies(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../md/COOKIES.md')
    ]);
  }

  #[Route('/privacidade', name: 'privacy')]
  public function meta_privacy(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../md/PRIVACY.md')
    ]);
  }

  #[Route('/uso', name: 'usage')]
  public function meta_usage(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../md/USAGE.md')
    ]);
  }

  // Security routes

  #[Route('/entrar', name: 'login')]
  public function login(AuthenticationUtils $authenticationUtils): Response
  {
    $lastUsername = $authenticationUtils->getLastUsername();
    return $this->render('login.html.twig', [
      'last_username' => $lastUsername
    ]);
  }

  #[Route('/sair', name: 'logout')]
  public function logout(): void {}
}

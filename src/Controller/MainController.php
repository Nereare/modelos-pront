<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class MainController extends AbstractController
{
  #[Route('/', name: 'home')]
  public function index(
    RouterInterface $router
  ): Response
  {
    // Get list of all routes
    $modules = $router->getRouteCollection()->all();
    // Map only 'module_*' routes
    $modules = array_map(
      function($v): ?string {
        if (preg_match('/^module_[a-z_]+/', $v) === 1) {
          return str_replace('module_', '', $v);
        } else {
          return null;
        }
      },
      array_keys($modules)
    );
    // Filter out null elements
    $modules = array_filter($modules);

    // Do not show new module message, by default
    $new_modules = false;

    if ($this->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
      /** @var User */
      $user = $this->getUser();
      // Compile all categorized modules
      $activeModules = array_map(
        fn($v) => $v[0],
        $user->getModules()
      );
      $inactiveModules = $user->getInactiveModules();
      $categorizedModules = array_merge($activeModules, $inactiveModules);
      // Check if there are uncategorized modules
      $new_modules = array_diff($modules, $categorizedModules);
      $new_modules = (count($new_modules) > 0) ? true : false;
      $modules = $user->getModules();
    } else {
      $modules = array_map(
        fn($v) => [$v, 1],
        $modules
      );
    }

    // Return page
    return $this->render(
      'main/index.html.twig',
      [
        'new_modules' => $new_modules,
        'modules' => $modules
      ]
    );
  }

  // Metafile routes

  #[Route('/sobre', name: 'about')]
  public function meta_about(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../Markdown/ABOUT.md')
    ]);
  }

  #[Route('/cookies', name: 'cookies')]
  public function meta_cookies(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../Markdown/COOKIES.md')
    ]);
  }

  #[Route('/privacidade', name: 'privacy')]
  public function meta_privacy(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../Markdown/PRIVACY.md')
    ]);
  }

  #[Route('/uso', name: 'usage')]
  public function meta_usage(): Response
  {
    return $this->render('main/markdown.html.twig',[
      'contents' => file_get_contents(__DIR__ . '/../Markdown/USAGE.md')
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

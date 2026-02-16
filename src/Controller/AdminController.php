<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AdminController extends AbstractController
{
  #[Route('/admin/usuarios', name: 'admin_users')]
  public function index(): Response
  {
    return $this->render(
      'config/users.html.twig',
      ['controller_name' => 'AdminController']
    );
  }
}

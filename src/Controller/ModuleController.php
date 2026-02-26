<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ModuleController extends AbstractController
{
  #[Route('/m/hospital', name: 'module_hospital')]
  public function index(): Response
  {
    return $this->render('module/index.html.twig', [
      'controller_name' => 'ModuleController',
    ]);
  }
}

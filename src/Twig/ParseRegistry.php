<?php

namespace App\Twig;

use App\Entity\User;
use Twig\Attribute\AsTwigFilter;

class ParseRegistry
{
  #[AsTwigFilter('parse_registry')]
  public function parseRegistry(
    User $user
  ): string
  {
    // Add thousands separator to registry number
    $number = number_format(
      (float)$user->getRegistryNumber(),
      0,
      '',
      '.'
    );
    // Build register array
    $registry = [
      strtoupper($user->getRegistryType()->name),
      '/',
      $user->getRegistryState()->name,
      ' ',
      $number
    ];

    return implode('', $registry);
  }
}

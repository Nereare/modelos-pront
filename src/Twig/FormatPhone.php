<?php

namespace App\Twig;

use Twig\Attribute\AsTwigFilter;

class FormatPhone
{
  #[AsTwigFilter('format_phone')]
  public function formatPhone(?string $phone): string
  {
    $phone = is_null($phone) ? '' : $phone;
    preg_match('/^(\+\d{1,3})(\d{2})(\d{5})(\d{4})$/', $phone, $phone);

    return implode(' ', array_slice($phone, 1));
  }
}

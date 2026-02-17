<?php

namespace App\Enum;

enum Roles: string
{
  case Owner = '[\'ROLE_OWNER\', \'ROLE_ADMIN\']';
  case Admin = '[\'ROLE_ADMIN\']';
  case Geral = '[]';
}

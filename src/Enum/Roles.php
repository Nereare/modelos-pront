<?php

namespace App\Enum;

enum Roles: string
{
  case Owner = '["ROLE_OWNER", "ROLE_ADMIN", "ROLE_USER"]';
  case Admin = '["ROLE_ADMIN", "ROLE_USER"]';
  case Geral = '["ROLE_USER"]';
}

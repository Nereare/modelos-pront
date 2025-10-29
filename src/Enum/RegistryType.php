<?php

namespace App\Enum;

enum RegistryType: string
{
  case Crm = 'CRM';
  case CorenEnf = 'Coren ENF';
  case CorenTech = 'Coren TE';
  case CorenAux = 'Coren AE';
  case CorenObst = 'Coren OBST';
  case CorenPar = 'Coren PAR';
}

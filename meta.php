<?php
define("APP_NAME", "Modelo de Prontuários");
define("APP_AUTHOR", "Igor Padoim");
define("APP_YEAR", "2021-2022");
define("APP_LICENSE_NAME", "Licença Hipocrática");
define("APP_LICENSE_URI", "https://firstdonoharm.dev/");
define("APP_VERSION", "2.4.11-r4");

define("MODELS", [
  "sr" => [
    "sr",
    "sr.php",
    "sr.svg",
    "Um vírus circular com espículas terminadas em representações circulares de antígenos",
    "Sintomáticos Respiratórios v3",
    "Fluxo de atendimento de pacientes com suspeita de infecção por SARS-CoV-2, incluindo sintomas, início e condutas, além de lembrar sempre a imbecilidade do \"tratamento precoce\" defendido por negacionistas de ciência."
  ],
  "hospital" => [
    "hospital",
    "hospital.php",
    "hospital.svg",
    "Um prédio com três torres conjuntas, a torre central, mais alta, expões uma cruz referente à saúde",
    "Exame Físico",
    "Exames físicos bem-descritos e sem abreviações regionalescas levam um tempo significativo para se anotar, mas não com este modelo de exame físico, que inclui as partes mais comuns de um exame físico genérico de adultos não-gestantes."
  ],
  "pn" => [
    "pn",
    "pn.php",
    "pn.svg",
    "Mulher gestante parada, olhando para direita",
    "Pré-Natal",
    "Modelo de atendimento pré-natal suficiente para preencher as requisições mínimas (e algo a mais) definidas pelo Programa Mãe Paulistana, da Secretaria Municipal de Saúde do município de São Paulo."
  ],
  "pueri" => [
    "pueri",
    "pueri.php",
    "pueri.svg",
    "Um carrinho de bebê com protetor contra sol",
    "Puericultura",
    "Modelo de atendimento para crianças de até 4 anos e 11 meses, o qual fornece não só modelos de anamnese mínima e exame físico extenso para crianças pequenas, como também calcula Z-Escores segundo dados da OMS."
  ],
  "sadt" => [
    "sadt",
    "sadt.php",
    "sadt.svg",
    "Um tubo de ensaio com conteúdo até três-quartos, o qual borbulha suavemente",
    "SADTs",
    "Ferramenta de geração de formulário de solicitação de exames vigente no município de São Paulo, o qual inclui alguns modelos de pedidos de exames mais comuns, baseados nas indicações da USPSTF, ADA e AHA."
  ],
  "psico" => [
    "psico",
    "psico.php",
    "psico.svg",
    "Perfil de uma cabeça olhando à esquerda",
    "Exame Psíquico",
    "Ferramenta de geração de exame psíquico com os componentes mais comuns deste, além de modelos pré-definidos, para facilidade de preenchimento, de alterações (e normalidade) de cada campo avaliado."
  ],
  "implanon" => [
    "implanon",
    "implanon.php",
    "implanon.svg",
    "Carrinho de bebê com um traço diagonal do canto superior esquerdo ao canto inferior direito",
    "Requisição Implanon",
    "Modelo de requisição de dispositivo intradérmico de liberação de etonogestrel, segundo critérios disponíveis para tal dispensação definidos pelo Relatório de Recomendação Nº 599 de abril/2021 da Conitec."
  ],
  "diu" => [
    "diu",
    "diu.php",
    "diu.svg",
    "Representação gráfica de um dispositivo intrauterino, com seu corpo mais espesso devido ao princípio ativo nele depositado, e os dois braços de fixação estendidos lateralmente do topo do corpo",
    "Passagem de DIU",
    "Modelo de evolução de consulta específica para passagem de Dispositivo Intrauterino, incluindo exame físico ginecológico, parâmetros de testagem uterina (histerometria), além de parâmetro quanto ao DIU."
  ],
  "meds" => [
    "meds",
    "meds.php",
    "meds.svg",
    "Cápsula de medicação a 45°",
    "Prescrições",
    "Gerador de prescrições para prontuários em que a prescrição é digitada manualmente, incluindo modelos para algumas condições em que sintomáticos e/ou tratamentos são padronizados ou protocolados."
  ]
]);
?>

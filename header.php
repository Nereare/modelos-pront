<?php
require "meta.php";
session_start();

/* Remove session variables and cookies
setcookie("accept_cookies", time() - 3600);
unset($_SESSION['cookies']);
unset($_SESSION["ethics"]);
*/

/**
 * Checks which page the user is currently in, for setting the CSS class.
 * @param  string  $link    The slug for the page linked in the anchor.
 * @param  string  $page    The current page. Use the $page variable set!
 * @return void
 */
function is_selected($link, $page) {
  if ($link === $page) {
    echo " is-active";
  }
}

$menu = [
  ["hospital"],
  ["psico", "pn", "pueri"],
  ["sadt", "sr2", "diu"],
  ["implanon", null, null],
  [null, null, null],
  [null, null, null]
];
if ( isset($_SESSION["cookies"]) ) {
  if ( $_SESSION["cookies"] ) {
    if ( isset($_COOKIES["menu"]) ) {
      $menu = $_COOKIES["menu"];
    } else {
      setcookie("menu", $menu, time() + 30*24*60*60);
    }
  } else {
    if ( isset($_SESSION["menu"]) ) {
      $menu = $_SESSION["menu"];
    } else {
      $_SESSION["menu"] = $menu;
    }
  }
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title><?php echo constant("APP_NAME"); ?></title>

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#1565c0">
    <link rel="shortcut icon" href="favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#1565c0">
    <meta name="msapplication-config" content="favicon/browserconfig.xml">
    <meta name="theme-color" content="#1565c0">

    <link href="node_modules/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet" type="text/css">
    <link href="node_modules/typeface-montserrat/index.css" rel="stylesheet" type="text/css">
    <link href="node_modules/typeface-roboto-mono/index.css" rel="stylesheet" type="text/css">
    <link href="node_modules/normalize.css/normalize.css" rel="stylesheet" type="text/css">
    <link href="style/pront.css" rel="stylesheet" type="text/css">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/clipboard/dist/clipboard.min.js"></script>
    <script src="js/base.js"></script>
    <?php if ( !in_array($page, ["index", "about", "usage", "cookies", "privacy"]) ) { ?>
    <script src="js/<?php echo $page; ?>.js"></script>
    <?php } ?>
  </head>

  <body>
    <header class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="index.php">
                <img src="assets/index-logo.svg" alt="Logo">
              </a>
              <span class="navbar-burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item<?php is_selected('index', $page); ?>" href="index.php">Início</a>
                <a class="navbar-item<?php is_selected('about', $page); ?>" href="about.php">Sobre</a>
                <a class="navbar-item<?php is_selected('usage', $page); ?>" href="usage.php">Termos de Uso</a>
                <a class="navbar-item<?php is_selected('cookies', $page); ?>" href="cookies.php">Política de Cookies</a>
                <a class="navbar-item<?php is_selected('privacy', $page); ?>" href="privacy.php">Política de Privacidade</a>
                <a class="navbar-item<?php is_selected('config', $page); ?>" href="config.php">
                  <span class="icon">
                    <i class="mdi mdi-cog mdi-24px"></i>
                  </span>
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted" href="https://github.com/Nereare/modelos-pront">
                    <span class="icon">
                      <i class="mdi mdi-github mdi-24px"></i>
                    </span>
                    <span>Código-Fonte</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <?php
          if ( isset($subtitle) ) {
          ?>
          <p class="title">
            <?php echo $subtitle; ?>
          </p>
          <p class="subtitle">
            <?php echo constant("APP_NAME"); ?> &bull; v<?php echo constant("APP_VERSION"); ?>
          </p>
          <?php } else { ?>
          <p class="title">
            <?php echo constant("APP_NAME"); ?>
          </p>
          <p class="subtitle">
            Versão <?php echo constant("APP_VERSION"); ?>
          </p>
          <?php } ?>
        </div>
      </div>
    </header>

    <?php if ( !isset($_SESSION["ethics"]) ) { ?>
    <section class="section">
      <div class="container">
        <article class="message is-warning">
          <div class="message-header">
            <p>
              <span class="icon-text">
                <span class="icon">
                  <i class="mdi mdi-alert-circle mdi-24px"></i>
                </span>
                <span>Aviso!</span>
              </span>
            </p>
          </div>
          <div class="message-body">
            <p>Esse projeto não substitui acompanhamento com um profissional capacitado e registrado em seu respectivo conselho de classe.</p>
            <p><strong>Este projeto e seus membros não se responsabilizam por qualquer informação contida em seus materiais ou uso inadequado desses.</strong> Qualquer inacurácia ou desatualização devem ser remediados por estudo do próprio profissional, o qual, ao usar esses guias, assume responsabilidade para si no caso de uso de informação desatualizada ou inacurada, uma vez que sua conduta pessoal é exclusivamente de sua resposabilidade.</p>
            <p>A continuidade do uso deste projeto implica aceitação das responsabilidades acima.</p>
            <p class="has-text-centered">
              <button class="button is-warning" id="ethics-accept">Aceito e desejo continuar</button>
              <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_self" class="button">Não aceito</a>
            </p>
          </div>
        </article>
      </div>
    </section>
    <?php } ?>
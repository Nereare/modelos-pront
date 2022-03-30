<?php
require 'meta.php';

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

/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = 'index';
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
    <link href="node_modules/typeface-source-code-pro/index.css" rel="stylesheet" type="text/css">
    <link href="node_modules/normalize.css/normalize.css" rel="stylesheet" type="text/css">
    <link href="style/pront.css" rel="stylesheet" type="text/css">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="js/base.js"></script>
  </head>

  <body>
    <header class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
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
                <a class="navbar-item<?php is_selected('about', $page); ?>">Sobre</a>
                <a class="navbar-item<?php is_selected('usage', $page); ?>" href="usage.html">Termos de Uso</a>
                <a class="navbar-item<?php is_selected('privacy', $page); ?>" href="privacy.html">Política de Privacidade</a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted" href="https://github.com/Nereare/modelos-pront">
                    <span class="icon">
                      <i class="mdi mdi-github mdi-24px"></i>
                    </span>
                    <span>Download</span>
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
          <p class="title">
            <?php echo constant("APP_NAME"); ?>
          </p>
          <p class="subtitle">
            Versão <?php echo constant("APP_VERSION"); ?>
          </p>
        </div>
      </div>
    </header>

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.</p>
            <p class="has-text-centered">
              <button class="button is-warning">Aceito e desejo continuar</button>
              <button class="button">Não aceito</button>
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Line -->
        <div class="columns">
          <div class="column">
            <!-- CARD -->
            <div class="card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="assets/sr.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">John Smith</p>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </p>
                </div>
              </div>
            </div>
            <!-- /CARD -->
          </div>
          <div class="column">
            <!-- CARD -->
            <div class="card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="assets/sr.svg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">John Smith</p>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </p>
                </div>
              </div>
            </div>
            <!-- /CARD -->
          </div>
          <div class="column">
            <!-- CARD -->
            <div class="card">
              <div class="card-image">
                <a href="#">
                  <figure class="image is-16by9">
                    <img src="assets/sr.svg" alt="Placeholder image">
                  </figure>
                </a>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">
                      <a href="#">John Smith</a>
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                  </p>
                </div>
              </div>
            </div>
            <!-- /CARD -->
          </div>
        </div>
      </div>
    </section>

    <main>
      <article class="wide">
        <a href="sr2.html" target="_self">
          <img src="assets/sr.svg" alt="">
          <h2>Sintomáticos Respiratórios v2</h2>
        </a>
      </article>

      <article>
        <a href="hospital.html" target="_self">
          <img src="assets/hospital.svg" alt="">
          <h2>Exame Físico</h2>
        </a>
      </article>

      <article>
        <a href="pn.html" target="_self">
          <img src="assets/pn.svg" alt="">
          <h2>Pré-Natal</h2>
        </a>
      </article>

      <article>
        <a href="pueri.html" target="_self">
          <img src="assets/pueri.svg" alt="">
          <h2>Puericultura</h2>
        </a>
      </article>

      <article>
        <a href="new_pueri.html" target="_self">
          <img src="assets/new_pueri.svg" alt="">
          <h2>Primeira Puericultura</h2>
        </a>
      </article>

      <article>
        <a href="sadt.html" target="_self">
          <img src="assets/sadt.svg" alt="">
          <h2>SADTs</h2>
        </a>
      </article>

      <article>
        <a href="psico.html" target="_self">
          <img src="assets/psico.svg" alt="">
          <h2>Exame Psíquico</h2>
        </a>
      </article>

      <article>
        <a href="implanon.html" target="_self">
          <img src="assets/implanon.svg" alt="">
          <h2>Requisição Implanon</h2>
        </a>
      </article>

      <article>
        <a href="diu.html" target="_self">
          <img src="assets/diu.svg" alt="">
          <h2>Passagem de DIU</h2>
        </a>
      </article>
    </main>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong><?php echo constant("APP_NAME"); ?></strong> por <a href="https://nereare.com"><?php echo constant("APP_AUTHOR"); ?></a>.
          O código-fonte está licenciado sob a
          <a href="https://firstdonoharm.dev/">Licença Hipocrática</a>
          .
        </p>
        <p>Feito com lógica e evidências científicas &#128211;</p>
      </div>
    </footer>

    <div class="modal is-active" id="cookie-consent">
      <div class="modal-background"></div>
      <div class="modal-content">
        <article class="message is-warning">
          <div class="message-header">
            <p>
              <span class="icon-text">
                <span class="icon">
                  <i class="mdi mdi-cookie-alert mdi-24px"></i>
                </span>
                <span>Alerta de Cookies</span>
              </span>
            </p>
          </div>
          <div class="message-body">
            <p>Este site usa <em>cookies</em> para oferecer a melhor experiência possível a seus usuários.</p>
            <p>Ao continuar o uso deste site, você concorda com o uso destes.</p>
            <p>Para mais informações, leia nossa <a href="cookies.php">Política de Cookies</a>.</p>
            <p class="has-text-centered">
              <a class="button is-success">Condordo</a>
              <a class="button" href="">Não concordo</a>
            </p>
          </div>
        </article>
      </div>
    </div>
  </body>
</html>

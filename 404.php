<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "404";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box has-text-centered">
      <h2 class="title is-4">Página Não Encontrada</h2>
      <p>Oops... A página requisitada não foi encontrada... &#128534;</p>
      <p class="help">(<code>Erro 404</code>)</p>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

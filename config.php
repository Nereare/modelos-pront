<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = 'config';

require_once "header.php";
?>

<section class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-3">Configurações</h2>
      <form class="">
        <h3 class="title is-4">Ordem dos Menus</h3>

        <div>
          <h4 class="title is-5">Linha 1</h4>
          <div class="field">
            <input class="switch is-rounded" id="line1-wide" type="checkbox">
            <label for="line1-wide">Menu largo</label>
          </div>
          <div class="field">
            <div class="select menu-select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
</section>

<?php
require_once "footer.php";
?>

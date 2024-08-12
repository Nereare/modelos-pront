<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "meds";
$subtitle = "Prescrições";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Predefinidas</h2>

      <?php if ( isset( $_GET["pre"] ) ) { ?>
      <input type="hidden" id="get-predefined" value="<?php echo $_GET["pre"]; ?>">
      <?php } ?>

      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="predefineds">
              <option value="" selected disabled>Predefinidas...</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-success add-item" data-position="start">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-plus"></i>
              </span>
              <span>Adicionar</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <button class="button is-fullwidth is-danger clear-items">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-delete-sweep"></i>
              </span>
              <span>Limpar</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="mb-5" id="prescription">
    </div>

    <div class="box">
      <div class="field has-addons">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-success add-item" data-position="end">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-plus"></i>
              </span>
              <span>Adicionar</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <button class="button is-fullwidth is-danger clear-items">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-delete-sweep"></i>
              </span>
              <span>Limpar</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <button class="button is-fullwidth" id="copy">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-content-copy"></i>
              </span>
              <span>Copiar</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require_once "footer.php"; ?>

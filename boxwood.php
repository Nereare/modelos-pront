<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "boxwood";
$subtitle = "Buxo";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-success is-fullwidth" id="add-start">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-account-plus"></i>
              </span>
              <span>Adicionar</span>
            </span>
          </button>
        </div>
      </div>

      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>HD</th>
            <th>Pendências</th>
          </tr>
        </thead>
        <tbody id="todos">
        </tbody>
      </table>
    </div>

    <div class="box">
      <div class="field has-addons">
        <div class="control is-expanded">
          <a class="button is-link is-fullwidth" id="export-json" href="#">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-download"></i>
              </span>
              <span>Exportar JSON</span>
            </span>
          </a>
        </div>

        <div class="control">
          <button class="button is-danger" id="clear-todos">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-delete"></i>
              </span>
              <span>Limpar</span>
            </span>
          </button>
        </div>

        <div class="control is-expanded">
          <button class="button is-fullwidth" id="import-json">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-upload"></i>
              </span>
              <span>Importar JSON</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</main>
<table id="printable-todos">
  <thead>
    <tr>
      <th>Paciente</th>
      <th>HD</th>
      <th>Notas</th>
      <th>Pendências</th>
    </tr>
  </thead>
  <tbody id="printable-todos-container">
  </tbody>
</table>

<!-- Add patient/To-Do -->
<div class="modal" id="add-modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-account-plus"></i>
          </span>
          <span>Adicionar Paciente</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input type="text" class="input" id="add-name" placeholder="Nome...">
        </div>
        <div class="control">
          <input type="number" class="input" id="add-age" placeholder="Idade...">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="add-class-i">
              <option value="" selected disabled>Classif inicial...</option>
              <option value="blue" class="has-text-info">Azul</option>
              <option value="green" class="has-text-success">Verde</option>
              <option value="yellow" class="has-text-warning">Amarelo</option>
              <option value="orange" class="has-text-warning-dark">Laranja</option>
              <option value="red" class="has-text-danger">Vermelho</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="add-class-f">
              <option value="" selected disabled>...e final</option>
              <option value="blue" class="has-text-info">Azul</option>
              <option value="green" class="has-text-success">Verde</option>
              <option value="yellow" class="has-text-warning">Amarelo</option>
              <option value="orange" class="has-text-warning-dark">Laranja</option>
              <option value="red" class="has-text-danger">Vermelho</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <input type="text" class="input" id="add-dx" placeholder="HD...">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <textarea class="textarea has-fixed-size" id="add-notes" placeholder="Notas..."></textarea>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <input type="tags" class="input" id="add-todos" placeholder="Pendências...">
        </div>
      </div>

    </section>
    <footer class="modal-card-foot field has-addons">
      <div class="control is-expanded">
        <button class="button is-success is-fullwidth" id="add-new">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-content-save"></i>
            </span>
            <span>Adicionar</span>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <button class="button is-fullwidth" id="add-cancel">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-cancel"></i>
            </span>
            <span>Cancelar</span>
          </span>
        </button>
      </div>
    </footer>
  </div>
</div>

<!-- Upload To-Dos -->
<div class="modal" id="upload-modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-upload"></i>
          </span>
          <span>Importar JSON</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <p>Cole (<code>Ctrl+V</code>) os conteúdos do backup abaixo:</p>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <textarea class="textarea has-fixed-size" id="upload-content" placeholder="Cole aqui..."></textarea>
        </div>
      </div>
    </section>
    <footer class="modal-card-foot field has-addons">
      <div class="control is-expanded">
        <button class="button is-success is-fullwidth" id="confirm-upload">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-upload"></i>
            </span>
            <span>Importar</span>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <button class="button is-fullwidth" id="cancel-upload">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-cancel"></i>
            </span>
            <span>Cancelar</span>
          </span>
        </button>
      </div>
    </footer>
  </div>
</div>

<!-- Confirm clear To-Dos -->
<div class="modal" id="clear-modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-delete"></i>
          </span>
          <span>Limpar</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <p>Tem certeza que deseja remover <strong>todas as pendências atuais</strong>?</p>
        <p>Esta ação é <strong>irreversível</strong>.</p>
        <p>Sugerimos, <strong>antes</strong> exportar um arquivo <code>JSON</code> de <em>backup</em>.</p>
      </div>
    </section>
    <footer class="modal-card-foot field has-addons">
      <div class="control is-expanded">
        <button class="button is-danger is-fullwidth" id="confirm-clear">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-delete"></i>
            </span>
            <span>Remover</span>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <button class="button is-fullwidth" id="cancel-clear">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-cancel"></i>
            </span>
            <span>Cancelar</span>
          </span>
        </button>
      </div>
    </footer>
  </div>
</div>

<?php require_once "footer.php"; ?>

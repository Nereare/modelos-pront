<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "saintpauline";
$subtitle = "Controle Atendimentos";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">
            <span class="icontext">
              <span class="icon">
                <i class="mdi mdi-account"></i>
              </span>
              <span>Nominho</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="input-physician">
        </div>
      </div>
    </div>

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
            <th>&num;Atend</th>
            <th>Desfecho</th>
          </tr>
        </thead>
        <tbody id="atends">
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
<div id="printable-atends">
  <!-- Tabela Identificação -->
  <table>
    <tbody>
      <tr>
        <td colspan="4">CONTROLE DO NÚMERO DE ATENDIMENTOS</td>
      </tr>
      <tr>
        <td colspan="4">Nome do médico(a): <span id="print-physician"></span></td>
      </tr>
      <tr>
        <td>Data: <span id="print-date"></span></td>
        <td>Horário entrada: <span id="print-time-in"></span></td>
        <td>Horário saída: <span id="print-time-out"></span></td>
        <td>Fluxo: <span id="print-flow"></span></td>
      </tr>
    </tbody>
  </table>

  <!-- Tabela Atendimentos -->
  <table>
    <thead>
      <tr>
        <th>&num;</th>
        <th>Atend</th>
        <th>Desfecho</th>
      </tr>
    </thead>
    <tbody id="printable-atends-container">
    </tbody>
  </table>
</div>

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
          <input type="number" class="input" id="add-atend" placeholder="# Atendimento">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="add-outcome">
              <option value="" selected disabled>Desfecho...</option>
              <option value="discharge">Atend &larr; Alta</option>
              <option value="neweval">Atend &larr; Reaval</option>
              <option value="reeval">Reaval</option>
              <option value="inpatient">IH</option>
            </select>
          </div>
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

<?php require_once "footer.php"; ?>

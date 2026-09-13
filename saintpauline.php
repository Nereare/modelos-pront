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
      <!-- 1st Line -->
      <div class="columns">
        <!-- Physician name -->
        <div class="column is-8">
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

        <!-- Working flow -->
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-waves-arrow-left"></i>
                  </span>
                  <span>Fluxo</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="input-flow">
                  <optgroup label="Atuais">
                    <option value="Volante" selected>&#x26ab; Volante</option>
                    <option value="Rápido">&#x1f7e2; Rápido</option>
                  </optgroup>
                  <optgroup label="Antigos">
                    <option value="Laranja">&#x1f7e0; Laranja</option>
                    <option value="Reaval">&#x1f501; Reaval</option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2nd Line -->
      <div class="columns">
        <!-- Today's date -->
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-calendar"></i>
                  </span>
                  <span>Data</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="input-date" readonly>
            </div>
            <div class="control">
              <button class="button is-danger" id="reset-call">
                <span class="icon">
                  <i class="mdi mdi-calendar-refresh"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Shift start -->
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-timer-sand-empty"></i>
                  </span>
                  <span>Entrada</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="input-start">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">h</button>
            </div>
          </div>
        </div>

        <!-- Shift end -->
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-timer-sand-complete"></i>
                  </span>
                  <span>Entrada</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="input-end">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">h</button>
            </div>
          </div>
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
            <th>Idd/Sexo</th>
            <th>Class.</th>
            <th>Tipo Atend.</th>
            <th>Desfecho</th>
          </tr>
        </thead>
        <tbody id="atends">
        </tbody>
      </table>
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
        <th>Classificação</th>
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
          <span>Adicionar Atendimento</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">
            <span class="icontext">
              <span class="icon">
                <i class="mdi mdi-pound"></i>
              </span>
              <span>Atendimento</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="add-atend" placeholder="#">
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-account-supervisor"></i>
                  </span>
                  <span>Idade</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="add-age" placeholder="#">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-gender-transgender"></i>
                  </span>
                  <span>Sexo Biól.</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="add-sex">
                  <option value="F" selected>Feminino</option>
                  <option value="M">Masculino</option>
                  <option value="O">Outro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">
            <span class="icontext">
              <span class="icon">
                <i class="mdi mdi-gradient-vertical"></i>
              </span>
              <span>Classificação</span>
            </span>
          </button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="add-class">
              <option value="Branco">&#x26aa; Branco</option>
              <option value="Azul">&#x1f535; Azul</option>
              <option value="Verde">&#x1f7e2; Verde</option>
              <option value="Amarelo">&#x1f7e1; Amarelo</option>
              <option value="Laranja">&#x1f7e0; Laranja</option>
              <option value="Vermelho">&#x1f534; Vermelho</option>
            </select>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-stethoscope"></i>
                  </span>
                  <span>Tipo Atend.</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="add-type">
                  <option value="1º Atendimento">1º Atendimento</option>
                  <option value="Reaval">Reaval</option>
                  <option value="NRC">NRC</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">
                <span class="icontext">
                  <span class="icon">
                    <i class="mdi mdi-walk"></i>
                  </span>
                  <span>Desfecho</span>
                </span>
              </button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="add-outcome">
                  <option value="Alta">Alta</option>
                  <option value="Reaval">Reaval</option>
                  <option value="Internação">Internação</option>
                  <option value="Evasão">Evasão</option>
                  <option value="Emergência">Emergência</option>
                </select>
              </div>
            </div>
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

<!-- Reset data -->
<div class="modal" id="reset-modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-calendar-refresh"></i>
          </span>
          <span>Resetar Atendimentos</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <p>Você tem certeza que deseja resetar todos os dados de atendimento?</p>
        <p>Isso apagará todos os dados prévios <strong>irreversivelmente</strong>!</p>
      </div>
    </section>
    <footer class="modal-card-foot field has-addons">
      <div class="control is-expanded">
        <button class="button is-danger is-fullwidth" id="reset-do">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-refresh"></i>
            </span>
            <span>Resetar</span>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <button class="button is-fullwidth" id="reset-cancel">
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

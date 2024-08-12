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

<div class="modal" id="wizard">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-auto-fix"></i>
          </span>
          <span>Gerar Subscrito</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <!-- Target input -->
      <input type="hidden" id="wizard-target">
      <!-- Subscript Generator -->
      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-act">
              <option value="Tomar" selected>Tomar</option>
              <option value="Dar">Dar</option>
              <option value="Aplicar">Aplicar</option>
              <option value="Dissolver sob a língua">Dissolver SL</option>
              <option value="Inalar">Inalar</option>
              <option value="Pingar">Pingar</option>
              <option value="Lavar cada narina com">Lavar (narina)</option>
              <option value="Aplicar, em cada narina,">Aplicar (narina)</option>
              <option value="Usar">Usar</option>
              <option value="Aplicar fina camada">Aplicar (fina, tópica)</option>
              <option value="Aplicar camada espessa">Aplicar (grossa, tópica)</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="wizard-cps" min="1" step="1" placeholder="#">
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-unity">
              <option value="" disabled>--- Comuns ---</option>
              <option value="cp|cps" selected>cp(s)</option>
              <option value="mL|mL">mL</option>
              <option value="gota|gotas">gota(s)</option>
              <option value="jato|jatos">jato(s)</option>
              <option value="puff|puffs">puff(s)</option>
              <option value="UI|UI">UI</option>
              <option value="" disabled>--- Incomuns ---</option>
              <option value="aplicador|aplicadores">aplicador(es)</option>
              <option value="" disabled>--- Outros ---</option>
              <option value="adesivo|adesivos">adesivo(s)</option>
              <option value="ampola|ampolas">ampola(s)</option>
              <option value="anel|anéis">anel(s)</option>
              <option value="bisnaga|bisnagas">bisnaga(s)</option>
              <option value="bolsa|bolsas">bolsa(s)</option>
              <option value="caixa|caixas">caixa(s)</option>
              <option value="caneta|canetas">caneta(s)</option>
              <option value="cápsula|cápsulas">cápsula(s)</option>
              <option value="comprimido|comprimidos">comprimido(s)</option>
              <option value="depot|depots">depot(s)</option>
              <option value="drágea|drágeas">drágea(s)</option>
              <option value="frasco|frascos">frasco(s)</option>
              <option value="goma|gomas">goma(s)</option>
              <option value="implante|implantes">implante(s)</option>
              <option value="kit|kits">kit(s)</option>
              <option value="óvulo|óvulos">óvulo(s)</option>
              <option value="pastilha|pastilhas">pastilha(s)</option>
              <option value="supositório|supositórios">supositório(s)</option>
              <option value="unidade|unidades">unidade(s)</option>
            </select>
          </div>
        </div>
        <div class="control">
          <div class="select">
            <select id="wizard-frequency">
              <option value="a cada" selected>a cada</option>
              <option value="N vezes por X">N vezes por X</option>
              <option value="toda/o X">toda/o X</option>
              <option value="DU">DU</option>
            </select>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">A cada</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="wizard-interval" min="1" step="1" placeholder="#">
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-interval-time">
              <option value="minuto|minutos">min</option>
              <option value="hora|horas" selected>h</option>
              <option value="dia|dias">d</option>
              <option value="semana|semanas">sem</option>
              <option value="mês|meses">mês</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <input type="number" class="input" id="wizard-N-times" min="1" step="1" placeholder="#" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">vezes por</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-times-per-X" disabled>
              <option value="dia|dias" selected>dia</option>
              <option value="semana|semanas">semana</option>
              <option value="mês|meses">mês</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Toda/o</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-every-X" disabled>
              <option value="toda manhã" selected>manhã</option>
              <option value="toda tarde">tarde</option>
              <option value="toda noite">noite</option>
              <option value="todas manhã e noite">manhã/noite</option>
              <option value="todas manhã e tarde">manhã/tarde</option>
              <option value="todas tarde e noite">tarde/noite</option>
              <option value="todas manhã, tarde e noite">manhã/tarde/noite</option>
            </select>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Se...</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="wizard-if" placeholder="condição...">
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Por</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="wizard-during" placeholder="#">
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="wizard-during-time">
              <option value="dia|dias" selected>d</option>
              <option value="semana|semanas">sem</option>
              <option value="mês|meses">mês</option>
            </select>
          </div>
        </div>
      </div>
      <!-- /Subscript Generator -->
    </section>
    <footer class="modal-card-foot field has-addons">
      <div class="control is-expanded">
        <button class="button is-success is-fullwidth" id="wizard-save">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-content-save"></i>
            </span>
            <span>Salvar</span>
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <button class="button is-fullwidth" id="wizard-cancel">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-cancel"></i>
            </span>
            <span>Descartar</span>
          </span>
        </button>
      </div>
    </footer>
  </div>
</div>

<?php require_once "footer.php"; ?>

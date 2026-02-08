<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "lay";
$subtitle = "Repouso no Leito";

function getPhysician()
{
  if (isset($_COOKIE["physician"])) {
    $data = json_decode($_COOKIE["physician"]);
  } elseif (isset($_SESSION["physician"])) {
    $data = $_SESSION["physician"];
  } else {
    $data = ["", "", "SP"];
  }

  return $data[0];
}

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <!-- Physician name -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Médica(o)</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="assistant" placeholder="Nome da médica assistente..." value="<?= getPhysician() ?>" required>
        </div>
      </div>

      <!-- Patient name -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Paciente</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="patient" placeholder="Nome do paciente..." required>
        </div>
        <div class="control">
          <input type="number" class="input" id="age" placeholder="Idade...">
        </div>
      </div>

      <!-- Request type -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Solicitação</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="type" required>
              <option selected disabled>Tipo de solicitação...</option>
              <option value="lay">Repouso no leito</option>
              <option value="inpatient">Internação</option>
            </select>
          </div>
        </div>
      </div>

      <!-- External transfer? -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Transferência?</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="external" required>
              <option selected disabled>Elegível?</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="external-why" placeholder="Se não, por quê..." disabled>
        </div>
      </div>

      <!-- Homebound treatment? -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">PEC?</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="pec" required>
              <option selected disabled>Elegível?</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Diagnosis -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">HD</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="dx" placeholder="Hipótese diagnóstica..." required>
        </div>
      </div>

      <!-- Priority -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Prioridade</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="priority" required>
              <option selected disabled>Prioridade</option>
              <option value="low">Não urgente</option>
              <option value="mid">Pode aguardar</option>
              <option value="high">Urgente</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Notes -->
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Obs</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="notes" placeholder="Observações...">
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Resultado</h2>

      <div class="field is-expanded">
        <div class="control is-expanded">
          <button id="button-run" class="button is-primary is-fullwidth" disabled>Gerar</button>
        </div>
      </div>
      <div class="field is-expanded">
        <div class="control">
          <textarea id="output-o" class="textarea has-fixed-size" placeholder="Mensagem para o grupo..." rows="10" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button id="button-o" class="button is-fullwidth copybtn" data-clipboard-target="#output-o">Copiar Labs</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require_once "footer.php"; ?>

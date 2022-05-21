<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "implanon";
$subtitle = "Requisição de Implanon";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Dados</h2>

      <h3 class="title is-5">Identificação</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Nome</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="name" placeholder="Nome completo da paciente">
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Nascimento</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="birth">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Prontuário</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="pront" placeholder="Prontuário">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">CNS</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="cns" placeholder="Cartão SUS">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">CPF</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="cpf" placeholder="CPF">
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Antecedentes Obstétricos</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">G</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-g" placeholder="G">
        </div>
        <div class="control">
          <button class="button is-static">P</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pn" placeholder="Pn">
        </div>
        <div class="control">
          <button class="button is-static">C</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pc" placeholder="Pc">
        </div>
        <div class="control">
          <button class="button is-static">A</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-a" placeholder="A">
        </div>
      </div>

      <h3 class="title is-5">Critérios</h3>

      <div class="field">
        <div class="control">
          <input type="checkbox" class="is-checkradio" id="crit1" name="crits" value="teen">
          <label for="crit1">Adolescente</label>
          <input type="checkbox" class="is-checkradio" id="crit2" name="crits" value="drug">
          <label for="crit2">Usuária de SPA</label>
          <input type="checkbox" class="is-checkradio" id="crit3" name="crits" value="homeless">
          <label for="crit3">Situação de Rua</label>
          <input type="checkbox" class="is-checkradio" id="crit4" name="crits" value="hiv">
          <label for="crit4">Vivendo com HIV</label>
          <input type="checkbox" class="is-checkradio" id="crit5" name="crits" value="talidomide">
          <label for="crit5">Uso de Talidomida</label>
          <input type="checkbox" class="is-checkradio" id="crit6" name="crits" value="prison">
          <label for="crit6">Privada de Liberdade</label>
          <input type="checkbox" class="is-checkradio" id="crit7" name="crits" value="sex">
          <label for="crit7">Trabalhadora do Sexo</label>
          <input type="checkbox" class="is-checkradio" id="crit8" name="crits" value="tb">
          <label for="crit8">Tratamento de Tuberculose</label>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Resultado</h2>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-primary" id="button-run">Gerar</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output" placeholder="Requisição" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="class is-expanded">
          <button id="button" class="button is-fullwidth copybtn" data-clipboard-target="#output">Copiar Requisição</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "sadt";
$subtitle = "SADTs";

require_once "header.php";

function getUnit($line = 3) {
  if ( isset($_COOKIE["place"]) ) { return $_COOKIE["place"]; }
  elseif ( isset($_SESSION["place"]) ) { return $_SESSION["place"]; }
  else { $line = 3; }

  if ( $line > 2 ) { return "&nbsp;"; }
  else { return $data[ $line ]; }
}
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Identificação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome Completo</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="name" placeholder="Nome completo">
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Prontuário</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="pront" placeholder="#">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Diagnóstico</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="dx" placeholder="Diagnóstico, Justificativa ou CID-10">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nascimento</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="birth" placeholder="Data de Nascimento">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <label for="urgent" class="button">
                <span class="icon">
                  <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                </span>
                <input type="checkbox" class="is-hidden checkbutton" id="urgent" value="true">
              </label>
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth" tabindex="-1">Coleta Urgente</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Modelos</h2>

      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="presets">
              <option value="" disabled selected>escolha um modelo...</option>
              <option value="screening1">Rastreio (sem PSOF)</option>
              <option value="screening2">Rastreio (com PSOF)</option>
              <option value="has1">Hipertensão / Diabetes (sem PSOF)</option>
              <option value="has2">Hipertensão / Diabetes (com PSOF)</option>
              <option value="ckd">DRC (sem PSOF)</option>
              <option value="preg1">Gestação 1º Trimestre / Abertura PN</option>
              <option value="preg23">Gestação 2/3º Trimestre (SEM Toxoplasmose)</option>
              <option value="preg23toxo">Gestação 2/3º Trimestre (COM Toxoplasmose)</option>
              <option value="preg2428">Gestação TOTG (24-28sem)</option>
              <option value="pegb">Gestação PEGB (35-36sem)</option>
              <option value="tb1">Tuberculose (Início de Tratamento, não inclui Rx)</option>
              <option value="tb2">Tuberculose (Seguimento)</option>
              <option value="infert_f1">Infertilidade (&female;, Pág. 1/2)</option>
              <option value="infert_f2">Infertilidade (&female;. Pág. 2/2)</option>
              <option value="infert_m1">Infertilidade (&male;, Pág. 1/2)</option>
              <option value="infert_m2">Infertilidade (&male;, Pág. 2/2)</option>
              <option value="pcos">SOP</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">SADT 1</h2>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab1-1" placeholder="Exames (1º SADT, 1ª Linha)">
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab1-2" placeholder="Exames (1º SADT, 2ª Linha)">
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab1-3" placeholder="Exames (1º SADT, 3ª Linha)">
        </div>
      </div>

      <h2 class="title is-4">SADT 1</h2>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab2-1" placeholder="Exames (2º SADT, 1ª Linha)">
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab2-2" placeholder="Exames (2º SADT, 2ª Linha)">
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <input type="text" class="input" id="lab2-3" placeholder="Exames (2º SADT, 3ª Linha)">
        </div>
      </div>
    </div>
  </div>
</main>

<div id="sadt-print">
  <table class="sadt-header">
    <tr>
      <td>
        <p class="print-urgent">URGENTE</p>
      </td>
      <td>
        <ul>
          <li>Análises Clínicas</li>
          <li>Radiologia</li>
          <li>Outros</li>
        </ul>
      </td>
      <td>
        <p class="top">Guia de Encaminhamento</p>
        <p class="top">SADT</p>
        <p class="pront">
          Pront. Nº:
          <span class="print-pront">&nbsp;</span>
        </p>
      </td>
    </tr>
  </table>

  <table class="sadt">
    <tr>
      <td colspan="6" label="Nome">
        <span class="print-name">&nbsp;</span>
      </td>
      <td colspan="2" label="Data de Nasc"><span class="print-birth">&nbsp;</span></td>
      <td colspan="3" label="Identificação"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="6" label="Endereço"><span>&nbsp;</span></td>
      <td colspan="2" label="Município"><span>&nbsp;</span></td>
      <td colspan="1" label="UF"><span>&nbsp;</span></td>
      <td colspan="2" label="Telefone"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Hipótese Diagnóstica"><span class="print-dx">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Área e/ou seguimento anatômico a ser examinado"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Exames ou serviços solicitados"><span class="print-lab1-1">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span class="print-lab1-2">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span class="print-lab1-3">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="3" rowspan="2" label="Assinatura CRM e Carimbo"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></td>
      <td colspan="3" label="Data Emissão"><span>&nbsp;</span></td>
      <td colspan="5" label="Unidade Solicitante"><span class="has-text-right pr-2"><?php echo getUnit(0); ?></span></td>
    </tr>

    <tr>
      <td colspan="8" label="Encaminhado para"><span class="has-text-right pr-2"><?php echo getUnit(1); ?></span></td>
    </tr>

    <tr>
      <td colspan="3" rowspan="2" label="Carimbo de Autorização"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></td>
      <td colspan="8" label="Endereço"><span class="has-text-right pr-2"><?php echo getUnit(2); ?></span></td>
    </tr>

    <tr>
      <td colspan="8" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>

  <hr>

  <table class="sadt-header">
    <tr>
      <td>
        <p class="print-urgent">URGENTE</p>
      </td>
      <td>
        <ul>
          <li>Análises Clínicas</li>
          <li>Radiologia</li>
          <li>Outros</li>
        </ul>
      </td>
      <td>
        <p class="top">Guia de Encaminhamento</p>
        <p class="top">SADT</p>
        <p class="pront">
          Pront. Nº:
          <span class="print-pront">&nbsp;</span>
        </p>
      </td>
    </tr>
  </table>

  <table class="sadt">
    <tr>
      <td colspan="6" label="Nome">
        <span class="print-name">&nbsp;</span>
      </td>
      <td colspan="2" label="Data de Nasc"><span class="print-birth">&nbsp;</span></td>
      <td colspan="3" label="Identificação"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="6" label="Endereço"><span>&nbsp;</span></td>
      <td colspan="2" label="Município"><span>&nbsp;</span></td>
      <td colspan="1" label="UF"><span>&nbsp;</span></td>
      <td colspan="2" label="Telefone"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Hipótese Diagnóstica"><span class="print-dx">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Área e/ou seguimento anatômico a ser examinado"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="Exames ou serviços solicitados"><span class="print-lab2-1">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span class="print-lab2-2">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="11" label="&nbsp;"><span class="print-lab2-3">&nbsp;</span></td>
    </tr>

    <tr>
      <td colspan="3" rowspan="2" label="Assinatura CRM e Carimbo"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></td>
      <td colspan="3" label="Data Emissão"><span>&nbsp;</span></td>
      <td colspan="5" label="Unidade Solicitante"><span class="has-text-right pr-2"><?php echo getUnit(0); ?></span></td>
    </tr>

    <tr>
      <td colspan="8" label="Encaminhado para"><span class="has-text-right pr-2"><?php echo getUnit(1); ?></span></td>
    </tr>

    <tr>
      <td colspan="3" rowspan="2" label="Carimbo de Autorização"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></td>
      <td colspan="8" label="Endereço"><span class="has-text-right pr-2"><?php echo getUnit(2); ?></span></td>
    </tr>

    <tr>
      <td colspan="8" label="&nbsp;"><span>&nbsp;</span></td>
    </tr>

    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>

<?php
require_once "footer.php";
?>

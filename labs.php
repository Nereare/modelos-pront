<?php

/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "labs";
$subtitle = "Lista Labs";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <!-- Função Renal -->
    <div class="box">
      <h2 class="title is-4">Função Renal</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Ur/Cr</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="urea" min="0" step="0.1" placeholder="Ur">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="creatinine" min="0" step="0.01" placeholder="Cr">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">eGFR</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="egfr-method">
              <option value="" selected>&empty;</option>
              <option value="ckdepi">CKD-EPI</option>
              <option value="cockroft">Cockroft</option>
            </select>
          </div>
        </div>
        <div class="control">
          <div class="select">
            <select id="egfr-sex" disabled>
              <option value="f" selected>&female;</option>
              <option value="m">&male;</option>
            </select>
          </div>
        </div>
        <div class="control">
          <div class="select">
            <select id="egfr-ethnicity" disabled>
              <option value="true">Negre</option>
              <option value="false" selected>NÃO-Negre</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="egfr-age" min="1" step="1" placeholder="Idade" disabled>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="egfr-weight" min="1" step="1" placeholder="Peso" disabled>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="egfr-result" placeholder="eGFR" disabled readonly>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Na<sup>+</sup>/K<sup>+</sup></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="na" min="0" step="1" placeholder="Na">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="k" min="0" step="0.1" placeholder="K">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Ca<sup>2+</sup><sub>iônico</sub>/Mg<sup>2+</sup></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="ca" min="0" step="0.01" placeholder="Ca">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="mg" min="0" step="0.1" placeholder="Mg">
        </div>
      </div>
    </div>

    <!-- Barrigograma -->
    <div class="box">
      <h2 class="title is-4">Barrigograma</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">TGO/TGP</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="tgo" min="0" step="1" placeholder="TGO">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="tgp" min="0" step="1" placeholder="TGP">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">FA/&gamma;GT</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="fa" min="0" step="1" placeholder="FA">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="ggt" min="0" step="1" placeholder="GGT">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">BT/D/I</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="bt" min="0" step="0.1" placeholder="BT">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="bd" min="0" step="0.1" placeholder="BD">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="bi" min="0" step="0.1" placeholder="BI">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Amilase/Lipase</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="amilase" min="0" step="1" placeholder="Amilase">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="lipase" min="0" step="1" placeholder="Lipase">
        </div>
      </div>

      <!-- -->
    </div>

    <!-- Urina -->
    <div class="box">
      <h2 class="title is-4">Urina I</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Aspecto</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="ui-aspect" placeholder="Aspecto">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Cristais</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="ui-crystals" placeholder="Cristais">
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nitrito</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="ui-nitrite">
                  <option value="">N/A</option>
                  <option value="POSITIVO">&plus;</option>
                  <option value="negativo">&ndash;</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Bactérias</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="ui-bact" min="0" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">&plus;</button>
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Hematúria</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="ui-hemac" min="0" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">&times;10<sup>3</sup></button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Leucocitúria</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="ui-leuco" min="0" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">&times;10<sup>3</sup></button>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Misc</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="ui-misc" placeholder="Outras alterações">
        </div>
      </div>

      <h2 class="title is-4">Urocultura</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Resultado</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="uroc">
              <option value="">N/A</option>
              <option value="não solicitada">não solicitada</option>
              <option value="não colhida (apesar de solicitada)">não colhida</option>
              <option value="em análise">em análise</option>
              <option value="parcial negativo">parc. negativo</option>
              <option value="negativo">negativo</option>
              <option value="PARCIAL POSITIVO para ">parc. POSITIVO p/</option>
              <option value="POSITIVO para ">POSITIVO p/</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="uroc-result" placeholder="Resultado" disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Sensível</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="uroc-sens" placeholder="Antibióticos" disabled>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Resistente</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="uroc-resist" placeholder="Antibióticos" disabled>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Intermediário</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="uroc-interm" placeholder="Antibióticos" disabled>
        </div>
      </div>
    </div>

    <!-- Hemograma -->
    <div class="box">
      <h2 class="title is-4">Hemograma</h2>

      <h3 class="title is-5">Série Vermelha</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Dx</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hmg-red-dx" placeholder="Diagnóstico">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Hb</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-hb" min="0" step="0.1" placeholder="Hb">
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Ht</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-ht" min="0" step="0.1" placeholder="Ht">
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">VCM</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-vcm" min="0" step="1" placeholder="VCM">
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">HCM</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-hcm" min="0" step="1" placeholder="HCM">
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">RDW</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-rdw" min="0" step="0.1" placeholder="RDW">
        </div>
      </div>

      <h3 class="title is-5">Série Branca</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Dx</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hmg-white-dx" placeholder="Diagnóstico">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Leuco</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-leuco" min="0" step="1" placeholder="Leuco">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Neutro</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-neutro-percent" min="0" step="0.1" placeholder="Neutro (%)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-neutro-abs" min="0" step="1" placeholder="Neutro (abs)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>
      <div class="field has-addons ml-5">
        <div class="control">
          <button class="button is-static" tabindex="-1">Segmentados</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-segm-percent" min="0" step="0.1" placeholder="Segmentados (%)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-segm-abs" min="0" step="1" placeholder="Segmentados (abs)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>
      <div class="field has-addons ml-5">
        <div class="control">
          <button class="button is-static" tabindex="-1">Jovens</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-young-percent" min="0" step="0.1" placeholder="Jovens (%)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-young-abs" min="0" step="1" placeholder="Jovens (abs)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Linfo</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-linfo-percent" min="0" step="0.1" placeholder="Linfo (%)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-linfo-abs" min="0" step="1" placeholder="Linfo (abs)">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Diferencial</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hmg-diff" placeholder="Diferencial (descreva alterações)">
        </div>
      </div>

      <h3 class="title is-5">Plaquetas</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Dx</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hmg-platelets-dx" placeholder="Diagnóstico">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Plaq</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="hmg-plat" min="0" step="1" placeholder="Plaq">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">&times;10<sup>3</sup></button>
        </div>
      </div>
    </div>

    <!-- Gasometria -->
    <div class="box">
      <h2 class="title is-4">Gasometria</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Origem</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="gaso-origin">
              <option value="Arterial">Arterial</option>
              <option value="Venosa">Venosa</option>
              <option value="'Arterial' (pO2 incompatível com origem arterial)">Arterial de mentirinha</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="gaso-dx" placeholder="Diagnóstico">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">pH</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-ph" min="7" step="0.001" placeholder="pH">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">pCO<sub>2</sub></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-pco2" min="0" step="1" placeholder="pCO2">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">pO<sub>2</sub></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-po2" min="0" step="1" placeholder="pO2">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">sO<sub>2</sub></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-so2" min="0" step="0.1" placeholder="sO2">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">HCO<sub>3</sub><sup>&ndash;</sup></button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-bic" min="0" step="0.1" placeholder="Bic">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">BE</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-be" step="0.1" placeholder="BE">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Lac</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gaso-lac" min="0" step="0.1" placeholder="Lac">
        </div>
      </div>
    </div>

    <!-- Miocárdio -->
    <div class="box">
      <h2 class="title is-4">Miocárdio</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Troponina</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="tropo-fast" min="0" step="0.01" placeholder="Tropo FAST">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Troponina I</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="tropo-us" min="0" step="0.001" placeholder="Tropo Ultrassensível">
        </div>
      </div>
    </div>

    <!-- Miscelânea -->
    <div class="box">
      <h2 class="title is-4">Miscelânea</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">PCR/VHS</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="pcr" min="0" step="0.01" placeholder="PCR">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="vhs" min="0" step="1" placeholder="VHS">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Dímero D</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="dd" min="0" step="0.1" placeholder="DD">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Glicose</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="glucose" min="0" step="1" placeholder="Glic">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">CPK</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="cpk" min="0" step="1" placeholder="CPK">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">DHL</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="dhl" min="0" step="1" placeholder="DHL">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">BNP</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="bnp" min="0" step="0.1" placeholder="BNP">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">INR</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="inr" step="0.01" placeholder="INR">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="uselessness" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="uselessness" value="true">
          </label>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Demais labs: nada digno de nota</button>
        </div>
      </div>

      <!-- -->
    </div>

    <!-- Resultado -->
    <div class="box">
      <h2 class="title is-4">Resultado</h2>

      <div class="field is-expanded">
        <div class="control is-expanded">
          <button id="button-run" class="button is-primary is-fullwidth">Gerar</button>
        </div>
      </div>
      <div class="field is-expanded">
        <div class="control">
          <textarea id="output-o" class="textarea has-fixed-size" placeholder="Labs" rows="10" readonly></textarea>
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

<?php
require_once "footer.php";
?>

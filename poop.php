<?php

/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "poop";
$subtitle = "GECA";

require_once "header.php";

if (isset($_COOKIE["sr_header"])) {
  $sr_header = $_COOKIE["sr_header"];
} elseif (isset($_SESSION["sr_header"])) {
  $sr_header = $_SESSION["sr_header"];
} else {
  $sr_header = "SR";
}
?>

<main class="section">
  <div class="container">
    <div class="box">
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select name="pronouns" id="pronouns">
              <option value="e" selected>Declinação de Gênero...</option>
              <option value="a">Ela/Dela</option>
              <option value="o">Ele/Dele</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Subjetivo</h2>

      <input type="text" class="is-hidden" id="sr-header" value="<?php echo $sr_header; ?>">

      <div class="field has-addons">
        <div class="control">
          <label for="companion" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="companion" value="true">
          </label>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">Acompanhante</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="companion-name" placeholder="Nome" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control">
          <input type="text" class="input" id="companion-relation" placeholder="Relação" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Fonte</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="companion-font" disabled>
              <option value="própri[[PRONOUN]] paciente" selected>paciente</option>
              <option value="acompanhante">acompanhante</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Sintomas</h3>

      <div class="columns">
        <div class="column is-half">
          <div class="field has-addons">
            <div class="control">
              <label for="symp-poop" class="button">
                <span class="icon">
                  <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                </span>
                <input type="checkbox" class="is-hidden checkbutton" id="symp-poop" value="true">
              </label>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">Diarreia</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="poop-consistency" disabled>
                  <option value="amolecida" selected>amolecida</option>
                  <option value="semilíquida">semilíquida</option>
                  <option value="líquida">líquida</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="poop-warn" disabled>
                  <option value="sem sinais de alarme">&empty; Alarme</option>
                  <option value="com sangramento orificial associado mas sem produtos patológicos">Sangue Orificial</option>
                  <option value="com sangue misturado ao bolo fecal">Hematoquezia</option>
                  <option value="com muco misturado ao bolo fecal">Muco</option>
                  <option value="com sangue e muco misturados ao bolo fecal">Sangue+Muco</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Desde</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="poop-start" disabled>
            </div>
          </div>
        </div>

        <div class="column is-half">
          <div class="field has-addons">
            <div class="control">
              <label for="symp-fever" class="button">
                <span class="icon">
                  <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                </span>
                <input type="checkbox" class="is-hidden checkbutton" id="symp-fever" value="true">
              </label>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">Febre</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth" disabled>
                <select id="fever-measure" disabled>
                  <option value="não aferida" selected>não aferida</option>
                  <option value="não aferida, mas associada a calafrios">não afer + calafrios</option>
                  <option value="aferida, de até ">aferida</option>
                </select>
              </div>
            </div>
            <div class="control">
              <div class="select">
                <select id="fever-freq" disabled>
                  <option value="com pico único" selected>pico único</option>
                  <option value="com alguns picos desde seu início">alguns picos</option>
                  <option value="diariamente desde seu início">diariamente</option>
                  <option value="algumas vezes por dia">mais de 1x/d</option>
                  <option value="com picos emendando uns nos outros">contínua</option>
                  <option value="apenas vespertina">vespertina</option>
                  <option value="a cada 48 horas (febre terçã benigna)">terçã benig</option>
                  <option value="a cada 36 a 48 horas (febre terção maligna)">terçã malig</option>
                  <option value="a cada 72 horas (febre quartã)">quartã</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">De até</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="fever-max" min="32" step="0.1" placeholder="#" disabled>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">°C</button>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">desde</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="fever-start" disabled>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-1" value="náuseas">
            <label for="symp-1">Náuseas</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-2" value="vômitos">
            <label for="symp-2">Vômitos</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-3" value="astenia">
            <label for="symp-3">Astenia</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-4" value="fraqueza">
            <label for="symp-4">Fraqueza</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-5" value="tosse">
            <label for="symp-5">Tosse</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-6" value="coriza">
            <label for="symp-6">Coriza</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-7" value="congestão nasal">
            <label for="symp-7">Congestão Nasal</label>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-8" value="mialgia">
            <label for="symp-8">Mialgia</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-9" value="artralgia">
            <label for="symp-9">Artralgia</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-10" value="dorsalgia">
            <label for="symp-10">Dorsalgia</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-11" value="dor em membros superiores">
            <label for="symp-11">Dor MMSS</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-12" value="dor em membros inferiores">
            <label for="symp-12">Dor MMII</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-13" value="exantema">
            <label for="symp-13">Exantema</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio symps" id="symp-14" value="equimoses">
            <label for="symp-14">Equimoses</label>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Outros</h3>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="symp-misc" placeholder="Inclua aqui outros dados da anamnese. Esse texto será incluído sem alterações em Subjetivo." rows="3"></textarea>
        </div>
      </div>

      <h3 class="title is-5">Início</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Início do 1º Sintoma</button>
        </div>
        <div class="control is-expanded">
          <input type="date" class="input" id="symp-start">
        </div>
      </div>

      <h3 class="title is-5">Antecedentes Pessoais</h3>

      <div class="columns">
        <div class="column">
          <h4 class="title is-6">Comorbidades</h4>

          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-1" name="comorbidities" value="HAS">
            <label for="comorb-1">HAS</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-2" name="comorbidities" value="DM">
            <label for="comorb-2">DM</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-3" name="comorbidities" value="Asma">
            <label for="comorb-3">Asma</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-4" name="comorbidities" value="DPOC">
            <label for="comorb-4">DPOC</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-5" name="comorbidities" value="DRC">
            <label for="comorb-5">DRC</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-6" name="comorbidities" value="IC">
            <label for="comorb-6">IC</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="comorb-7" name="comorbidities" value="Obesidade">
            <label for="comorb-8">Obesidade</label>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="comorb-other" placeholder="Inclua aqui outras comorbidades, separadas por VÍRGULA." rows="2"></textarea>
            </div>
          </div>
        </div>

        <div class="column">
          <h4 class="title is-6">Gestação</h4>

          <div class="field has-addons">
            <div class="control">
              <label for="pregnancy" class="button">
                <span class="icon">
                  <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                </span>
                <input type="checkbox" class="is-hidden checkbutton" id="pregnancy" value="true">
              </label>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">Gestante de</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="preg-w" min="0" step="1" placeholder="#" disabled>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">sem e</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="preg-d" min="0" step="1" max="6" placeholder="#" disabled>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">d</button>
            </div>
          </div>

          <h4 class="title is-6">Alergias</h4>

          <div class="field has-text-centered">
            <input type="radio" class="is-checkradio" id="allergy-yes" name="allergy" value="true">
            <label for="allergy-yes">Sim</label>

            <input type="radio" class="is-checkradio" id="allergy-no" name="allergy" value="false" checked>
            <label for="allergy-no">Não</label>
          </div>

          <div>
            <div>
              <textarea class="textarea has-fixed-size" id="allergy-drug" placeholder="Medicações a que é alérgice" rows="2" disabled></textarea>
            </div>
          </div>

          <h3 class="title is-5 mt-4">Trabalho</h3>

          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="work">
                  <option value="" selected>Sem resposta</option>
                  <option value="nega trabalhar">Não trabalha</option>
                  <option value="aposentad[[PRONOUN]]">Aposentade</option>
                  <option value="nega estudar">Não estuda</option>
                  <option value="estuda">Estuda</option>
                  <option value="estuda e trabalha">Estuda + Trabalha</option>
                  <option value="trabalha com vínculo celetista">Trabalha com carteira assinada</option>
                  <option value="trabalha como funcionári[[PRONOUN]] públic[[PRONOUN]]">Trabalha como funcionárie</option>
                  <option value="trabalha por conta própria">Trabalha por conta</option>
                  <option value="trabalha sem vínculo formal ou direito de ausência justificada/remunerada">"Trabalho" uberizado/semi-escravo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Objetivo</h2>

      <h3 class="title is-5">Estado Geral</h3>

      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select name="status" id="status">
              <option value="B" selected>BEG</option>
              <option value="R">REG</option>
              <option value="M">MEG</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <input class="is-checkradio is-success" type="radio" id="color-normal" name="color" value="Corade" checked>
        <label for="color-normal">Corade</label>
        <input class="is-checkradio is-warning" type="radio" id="color-one" name="color" value="1">
        <label for="color-one">&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="color-two" name="color" value="2">
        <label for="color-two">&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="color-three" name="color" value="3">
        <label for="color-three">&plus;&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="color-four" name="color" value="4">
        <label for="color-four">&plus;&plus;&plus;&plus;</label>
      </div>

      <div class="field">
        <input class="is-checkradio is-success" type="radio" id="hydro-normal" name="hydro" value="hidratade" checked>
        <label for="hydro-normal">Hidratade</label>
        <input class="is-checkradio is-warning" type="radio" id="hydro-one" name="hydro" value="1">
        <label for="hydro-one">&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="hydro-two" name="hydro" value="2">
        <label for="hydro-two">&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="hydro-three" name="hydro" value="3">
        <label for="hydro-three">&plus;&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="hydro-four" name="hydro" value="4">
        <label for="hydro-four">&plus;&plus;&plus;&plus;</label>
      </div>

      <div class="field">
        <input class="is-checkradio is-success" type="radio" id="cyanose-normal" name="cyanose" value="acianótice" checked>
        <label for="cyanose-normal">Acianótice</label>
        <input class="is-checkradio is-warning" type="radio" id="cyanose-one" name="cyanose" value="1">
        <label for="cyanose-one">&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="cyanose-two" name="cyanose" value="2">
        <label for="cyanose-two">&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="cyanose-three" name="cyanose" value="3">
        <label for="cyanose-three">&plus;&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="cyanose-four" name="cyanose" value="4">
        <label for="cyanose-four">&plus;&plus;&plus;&plus;</label>
      </div>

      <div class="field">
        <input class="is-checkradio is-success" type="radio" id="icter-normal" name="icter" value="anictérice" checked>
        <label for="icter-normal">Anictérice</label>
        <input class="is-checkradio is-warning" type="radio" id="icter-one" name="icter" value="1">
        <label for="icter-one">&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="icter-two" name="icter" value="2">
        <label for="icter-two">&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="icter-three" name="icter" value="3">
        <label for="icter-three">&plus;&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="icter-four" name="icter" value="4">
        <label for="icter-four">&plus;&plus;&plus;&plus;</label>
      </div>

      <div class="field">
        <input class="is-checkradio is-success" type="radio" id="fever-none" name="fever" value="afebril" checked>
        <label for="fever-none">Afebril</label>
        <input class="is-checkradio is-danger" type="radio" id="fever-yes" name="fever" value="febril">
        <label for="fever-yes">Febril</label>
        <input class="is-checkradio is-danger" type="radio" id="fever-hypo" name="fever" value="hipotérmice">
        <label for="fever-hypo">Hipotérmice</label>
      </div>

      <div class="field has-addons">
        <div class="control">
          <input class="is-checkradio is-success" type="radio" id="breathe-normal" name="breathe" value="eupneice" checked>
          <label for="breathe-normal">Eupneice</label>
        </div>
        <div class="control">
          <input class="is-checkradio is-danger" type="radio" id="breathe-abnormal" name="breathe" value="dispneice">
          <label for="breathe-abnormal">Dispneice</label>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="breathe-abnormal-desc" disabled>
              <option value="" selected>&ndash;</option>
              <option value="taqui">taqui</option>
              <option value="bradi">bradi</option>
              <option value="taquidis">taqui + dispneice</option>
              <option value="bradidis">bradi + dispneice</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field mb-5 mt-0">
        <input class="is-checkradio" type="checkbox" id="breathe-really-normal">
        <label for="breathe-really-normal"><strong>ENFATICAMENTE</strong> eupneice</label>
      </div>

      <h3 class="title is-5">Sinais Vitais</h3>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Sat O<sub>2</sub></button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-sat" class="input" min="0" max="100" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">%</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="ssvv-sat-type">
                  <option value="em ar ambiente" selected>aa</option>
                  <option value="em cateter nasal de O2">CN O2</option>
                  <option value="em máscara não-reinalante">Másc+Reserv</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Pulso</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pulse" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">bpm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">PA</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pas" class="input" min="1" step="2" placeholder="PAS">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pad" class="input" min="1" step="2" placeholder="PAD">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">mmHg</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">FR</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-fr" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">irpm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Dextro</button>
            </div>
            <div class="control">
              <input type="number" id="ssvv-glucose" class="input" min="1" step="1" placeholder="# (HI > 400)">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">mg/dL</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="ssvv-glucose-time">
                  <option value="alimentação desconhecida" selected>Desconhecida</option>
                  <option value="pré-prandial">PRÉ-Prandial</option>
                  <option value="pós-prandial">PÓS-Prandial</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Temp</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-temp" class="input" min="1" step="0.1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">°C</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="ssvv-temp-desc">
                  <option value="infravermelho de testa" selected>testa</option>
                  <option value="axilar">axila</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Peso</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="ssvv-weight-eq">
                  <option value="~" selected>~</option>
                  <option value="=">=</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-weight" class="input" min="0" step="0.1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">kg</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Alt</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-height" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">IMC</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-bmi" class="input" placeholder="#" readonly>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">kg/m<sup>2</sup></button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Dor (EVA)</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="ssvv-pain">
                  <option value="" selected>N/A</option>
                  <option value="0">&empty;</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Consciência</h3>

      <div class="field has-addons">
        <div class="control">
          <button type="button" class="button is-static" tabindex="-1">GCS</button>
        </div>
        <div class="control">
          <button type="button" class="button is-static" tabindex="-1">AO</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="neuro-gcs-eye">
              <option value="" selected>NT</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0 NT</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button type="button" class="button is-static" tabindex="-1">RV</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="neuro-gcs-speech">
              <option value="" selected>NT</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0 NT</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button type="button" class="button is-static" tabindex="-1">RM</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="neuro-gcs-muscle">
              <option value="" selected>NT</option>
              <option value="6">6</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0 NT</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Orientação Tempo-Espacial</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="orientation-time">
              <option value="" selected>Tempo</option>
              <option value="Orientad">Orientade</option>
              <option value="DESorientad">DESorientade</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="orientation-space">
              <option value="" selected>Espaço</option>
              <option value="Orientad">Orientade</option>
              <option value="DESorientad">DESorientade</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Colaboração</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="collaboration">
              <option value="" selected>NT</option>
              <option value="Colaborativ((PRO))">Colaborative</option>
              <option value="Pouco colaborativ((PRO))">&darr;Colaborative</option>
              <option value="Agressiv((PRO))">Agressive</option>
              <option value="Hipoativ((PRO)) | Hiporreativ((PRO))">Hipo- Ative/Reative</option>
              <option value="Catatonic((PRO))">Catatonice</option>
              <option value="Evasiv((PRO))">Evasive</option>
              <option value="Aparente Hipomania">Hipomania</option>
              <option value="Aparente Mania">Mania</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Deambulação</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="walking">
              <option value="" selected>NT</option>
              <option value="Deambulando sem apoios, sem claudicações e sem dificuldades">&empty;Apoios/Claud/Dificuldades</option>
              <option value="Deambulando sem apoios">&empty;Apoios</option>
              <option value="Claudicação" data-desc="true">Claudicação...</option>
              <option value="Usando" data-desc="true">C/ Órtese (usando...)</option>
              <option value="Em cadeirda de rodas">Cadeira Rodas</option>
              <option value="Em maca">Maca</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="walking-desc" placeholder="Complemento" disabled>
        </div>
      </div>

      <h3 class="title is-5 mt-5">Geral</h3>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-face" class="is-checkradio">
            <label for="exam-face">
              <span class="icon">
                <i class="mdi mdi-emoticon-neutral mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Fácies</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="face">
                  <option value="atípica" selected>normal</option>
                  <option value="acromegálica">Acromegálica</option>
                  <option value="adenoidiana">Adenoidiana</option>
                  <option value="cushingoide (ou 'moonface')">Cushingoide</option>
                  <option value="esclerodérmica">Esclerodérmica</option>
                  <option value="leonina">Leonina</option>
                  <option value="miastênica (ou de Hutchinson)">Miastênica</option>
                  <option value="parkinsoniana">Parkinsoniana</option>
                  <option value="renal">Renal</option>
                  <option value="sindrômica">Sindrômica</option>
                  <option value="tireotóxica (ou basedowiana)">Tireotóxica</option>
                  <option value="other">Outra...</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="face-other" placeholder="Descreva aqui..." disabled>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-abdomen" class="is-checkradio">
            <label for="exam-abdomen">
              <span class="icon">
                <i class="mdi mdi-stomach mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Abdome</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen">
                  <option value="plano" selected>Plano</option>
                  <option value="globoso">Globoso</option>
                  <option value="em batráquio">Batráquio</option>
                  <option value="escavado">Escavado</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-rha">
                  <option value="presentes e normoativos">RHA +/nl</option>
                  <option value="presentes e aumentados">RHA +/&uarr;</option>
                  <option value="presentes e aumentados, com ruídos metálicos">RHA +/&uarr;&uarr;&uarr;</option>
                  <option value="presentes mas hipoativos">RHA +/&darr;</option>
                  <option value="ausentes">RHA&ndash;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-tension">
                  <option value="flácido">Flácido</option>
                  <option value="tenso">Tenso</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-percussion">
                  <option value="globalmente timpânica">timp</option>
                  <option value="com macicez percutível em ">maciço em...</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="text" id="abdomen-percussion-mass" class="input" placeholder="Descreva localização da(s) macicez..." disabled>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Traube</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-traube">
                  <option value="livre" selected>livre</option>
                  <option value="ocupado">ocupado</option>
                </select>
              </div>
            </div>
          </div>

          <p class="help">Valores negativos = acima de RCD, positivos = abaixo de RCD</p>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Hepatimetria</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="abdomen-hepatimetry" min="-10" max="10" step="1" value="0" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Macicez Móvel</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-mobilemass">
                  <option value="" selected>NT</option>
                  <option value="ausente">&ndash;</option>
                  <option value="presente">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Skoda</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-skoda">
                  <option value="" selected>NT</option>
                  <option value="ausente">&ndash;</option>
                  <option value="presente a ">+</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="number" id="abdomen-skoda-cm" class="input" min="0" step="1" placeholder="#" disabled>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm da c. umbilical</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Piparote</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-fillip">
                  <option value="" selected>NT</option>
                  <option value="ausente">&ndash;</option>
                  <option value="presente">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Massas</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="abdomen-stuff">
                  <option value="sem massas palpáveis superficial ou profundamente" selected>&empty;</option>
                  <option value="com ">com...</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="abdomen-stuff-desc" placeholder="descrição de massa/s palpável/is" disabled>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">DB</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="abdomen-peritonitis">
                  <option value="" selected>NT</option>
                  <option value="ausente">&ndash;</option>
                  <option value="PRESENTE">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Murphy</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="murphy">
                  <option value="" selected>NT</option>
                  <option value="negativo">&ndash;</option>
                  <option value="POSITIVO">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">McBurney</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mcburney">
                  <option value="" selected>NT</option>
                  <option value="negativo">&ndash;</option>
                  <option value="POSITIVO">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Giordano</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="giordano">
                  <option value="" selected>NT</option>
                  <option value="negativo">&ndash;</option>
                  <option value="POSITIVO">+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="abdomen-other" placeholder="Descreva outros achados..." rows="2"></textarea>
            </div>
          </div>

        </div>
      </div>

      <h3 class="title is-5">Periferia</h3>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-skin" class="is-checkradio">
            <label for="exam-skin">
              <span class="icon">
                <i class="mdi mdi-fingerprint mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="skin" rows="6"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-mmss" class="is-checkradio">
            <label for="exam-mmss">
              <span class="icon">
                <i class="mdi mdi-hand-front-left mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Pulsos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmsspulse-strength">
                  <option value="" selected>N/A</option>
                  <option value="cheios">cheios</option>
                  <option value="fracos">&darr;</option>
                  <option value="em martelo d'água">&uarr;</option>
                  <option value="ausentes até aa. axilares">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmsspulse-simmetry" disabled>
                  <option value="simétricos" selected>simétricos</option>
                  <option value="diminuídos à direita">&darr;D</option>
                  <option value="diminuídos à esquerda">&darr;E</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">a partir de aa.</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmsspulse-artery" disabled>
                  <option value="radiais" selected>radiais</option>
                  <option value="ulnares">ulnares</option>
                  <option value="braquiais">braquiais</option>
                  <option value="axilares">axilares</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Turgor Cutâneo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmssturgor">
                  <option value="" selected>N/A</option>
                  <option value="adequado">Normal</option>
                  <option value="diminuído (prega cutânea persistente)">Desidratação</option>
                  <option value="aumentado (prega cutânea não formável por edema)">Edema</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">TEC</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="mmsstec" min="1" step="1" placeholder="# segundos">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">s</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Edema</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmss-oedema">
                  <option value="" selected>N/A</option>
                  <option value="Ausência de edemas" plurality="">&empty;</option>
                  <option value="Edema bilateral e simétrico" plurality="s">bilat</option>
                  <option value="Edema bilateral, maior à direita" plurality="s">bilat D&gt;E</option>
                  <option value="Edema bilateral, maior à esquerda" plurality="s">bilat D&lt;E</option>
                  <option value="Edema exclusivo à direita" plurality="">D apenas</option>
                  <option value="Edema exclusivo à esquerda" plurality="">E apenas</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmss-oedema-level" disabled>
                  <option value="" disabled selected>Até</option>
                  <option value="">N/A</option>
                  <option value=", apenas em quirodáctilo\{\{plural\}\}">Dedo(s)</option>
                  <option value=", quirodáctilo\{\{plural\}\} e mão\{\{plural\}\}">Mão(s)</option>
                  <option value=", até antebraço\{\{plural\}\}">Antebraço(s)</option>
                  <option value=", até braço\{\{plural\}\}">Braço(s)</option>
                  <option value=", até ombro\{\{plural\}\}">Ombro(s)</option>
                </select>
              </div>
            </div>
            <div class="control">
              <div class="select">
                <select id="mmss-oedema-inflamation" disabled>
                  <option value="" disabled selected>Flogos?</option>
                  <option value="">N/A</option>
                  <option value=", sem sinais flogísticos detectáveis">&empty;</option>
                  <option value=", discretamente hiperemiado e quente ao toque">&half;</option>
                  <option value=", moderadamente hiperemiado e quente ao toque">1&plus;</option>
                  <option value=", intensamente hiperemiado e quente ao toque">1.000&plus;</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Misc</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="mmss-misc" placeholder="Outros dados...">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Avaliação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">GECA</button>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" id="dx" tabindex="-1">?</button>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">sinais de alarme</button>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Condutas</h2>

      <div class="content eval-first">
        <ol>
          <h3 class="title is-5">Medicações</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-0" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-0" value="Otimizo sintomáticos + SRO para casa">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Sintomáticos + SRO</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-1" value="">
                </label>
              </div>
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">ATB</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select class="plan-changer" data-target="plan-1">
                    <option value="ciprofloxacino por 05d">Cipro 5d</option>
                    <option value="metronidazol por 05d">Metro 5d</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-2" value="">
                </label>
              </div>
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">ATB</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select class="plan-changer" data-target="plan-2">
                    <option value="Prescrevo ivermectina 12mg em dose única para casa">Ivermec (DU)</option>
                    <option value="Prescrevo albendazol dose única para casa">Albendazol (DU)</option>
                    <option value="Prescrevo nitazoxanida por 03d para casa">Annita (3d)</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-3" value="x">
                </label>
              </div>
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">Prescrevo</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input plan-changer" data-target="plan-3" data-prefix="Prescrevo " placeholder="Item prescrito...">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-4" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-4" value="x">
                </label>
              </div>
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">Prescrevo</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input plan-changer" data-target="plan-4" data-prefix="Prescrevo " placeholder="Item prescrito...">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-5" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton check-plan" id="plan-5" value="x">
                </label>
              </div>
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">Prescrevo</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input plan-changer" data-target="plan-5" data-prefix="Prescrevo " placeholder="Item prescrito...">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Outros</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-misc-dx" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-misc-dx" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento HD + História natural</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-misc-dx" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-misc-dx" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento sinais de alarme</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-misc-doubts" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-misc-doubts" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Tiro dúvidas</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-bai" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-misc-reeval" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Alta</button>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div class="content eval-reeval is-hidden">
        <ol>
          <h3 class="title is-5">Medicações</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-symptomatics" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-symptomatics" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Sintomáticos</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="symptomatics">
                    <option value="Prescrevo sintomáticos" selected>Prescrevo</option>
                    <option value="Oriento uso de sintomáticos já em posse do paciente">Oriento uso</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <a class="button is-link" id="got-to-meds" href="meds.php?pre=<?php echo urlencode("Dengue"); ?>" target="_blank">Ir p/ Prescrições</a>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-med1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-med1" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med1" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med1-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-med2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-med2" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med2" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med2-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-med3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-med3" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med3" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="out-med3-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Atestado</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-leave" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-leave" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Paciente</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="leave" min="1" step="1" value="5">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-leaverefuse" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-leaverefuse" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Recusa atestado</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-leavehours" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-leavehours" value="true">
                </label>
              </div>
              <div class="control">
                <div class="select">
                  <select id="leave-leavehours-what">
                    <option value="Oriento onde obter">Oriento</option>
                    <option value="Redijo">Redijo</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">comprovante de horas</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Orientações</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-warnsigns" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-warnsigns" value="true" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Sinais de alarme</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-aine" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-aine" value="true" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1"><strong>NÃO UTILIZIAR ANTIINFLAMATÓRIOS</strong>&nbsp;esteroidais ou não</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-hydro" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-hydro" value="true" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Hidratação VO intensificada</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-repellent" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-repellent" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Utilizar repelente</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Resultados</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-labresults" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-labresults" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento resultados exames</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Finalização</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-followup" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-followup" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Retorno em</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="followup" value="2" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="followup-where">
                    <option value="amb">Ambulatório</option>
                    <option value="ps">PS</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-out-whut" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-whut" value="true" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Tiro dúvivas</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static is-fullwidth" tabindex="-1">Finalização</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="plan-out-bai">
                    <option value="Alta do episódio" selected>Alta</option>
                    <option value="Solicito internação hospitalar para cuidados à pessoa com Dengue">Internação Hospitalar</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Resultado</h2>

      <div class="field is-expanded">
        <div class="control is-expanded">
          <button id="button-run" class="button is-primary is-fullwidth">Gerar</button>
        </div>
      </div>
      <div class="field is-expanded">
        <div class="control">
          <textarea id="output" class="textarea has-fixed-size" placeholder="Resultado" rows="10" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button id="button-o" class="button is-fullwidth copybtn" data-clipboard-target="#output">Copiar</button>
        </div>
      </div>
    </div>

  </div>
</main>

<div class="notification is-info has-text-centered eval-first" id="day-notice">
  <p>
    <span class="icon-text">
      <span class="icon">
        <i class="mdi mdi-calendar"></i>
      </span>
      <span>Hoje</span>
    </span>
  </p>
  <p>
    <strong>
      D
      <span id="day">x</span>
    </strong>
  </p>
</div>

<div class="modal" id="emergency">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text is-danger">
          <span class="icon">
            <i class="mdi mdi-alert"></i>
          </span>
          <span>EMERGÊNCIA</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <p>
          Pelos dados clínicos fornecidos, o paciente apresenta <strong>INSTABILIDADE CLÍNICA</strong>
          e necessita ser transferido à Sala de Emergência <strong>IMEDIATAMENTE</strong>.
        </p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-fullwidth is-danger" id="emergency-done">Paciente na Emergência</button>
    </footer>
  </div>
</div>

<?php require_once "footer.php"; ?>

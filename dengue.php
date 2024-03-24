<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "dengue";
$subtitle = "Dengue";

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

      <div class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="is-active" id="time-first">
            <a>
              <span class="icon is-small">
                <i class="mdi mdi-numeric-1-circle" aria-hidden="true"></i>
              </span>
              <span>1ª Avaliação</span>
            </a>
          </li>
          <li id="time-reeval">
            <a>
              <span class="icon is-small">
                <i class="mdi mdi-refresh" aria-hidden="true"></i>
              </span>
              <span>Reavaliação</span>
            </a>
          </li>
        </ul>
      </div>

      <input type="text" class="is-hidden" id="time-current" value="first">
      <input type="text" class="is-hidden" id="sr-header" value="<?php echo $sr_header; ?>">
      <input type="text" class="is-hidden" id="emergency-dx">

      <div class="eval-first mb-4">
        <div class="mb-4">
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
            <div class="control">
              <div class="select">
                <select id="companion-func" disabled>
                  <option value="acompanhad[[PRONOUN]]" selected>acompanha</option>
                  <option value="trazid[[PRONOUN]]">traz</option>
                </select>
              </div>
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
        </div>

        <h3 class="title is-5">Sintomas</h3>

        <div class="columns">
          <div class="column is-half">
            <div class="field has-addons">
              <div class="control">
                <label for="symp-headache" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="symp-headache" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Cefaleia</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="headache-desc" disabled>
                    <option value="mal-caracterizada" selected>mal-caracterizada</option>
                    <option value="peso">peso</option>
                    <option value="pressão">pressão</option>
                    <option value="pulsátil">pulsátil</option>
                    <option value="facada">facada</option>
                    <option value="fisgada">fisgada</option>
                    <option value="tensão">tensão</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="headache-location" disabled>
                    <option value="frontal">frontal</option>
                    <option value="temporal">temporal</option>
                    <option value="parietal">parietal</option>
                    <option value="occipital">occipital</option>
                    <option value="---" disabled>---</option>
                    <option value="holocraniana">holocraniana</option>
                    <option value="---" disabled>---</option>
                    <option value="frontotemporal">frontotemporal</option>
                    <option value="temporoparietal">temporoparietal</option>
                    <option value="parietoccipital">parietoccipital</option>
                    <option value="---" disabled>---</option>
                    <option value="frontotemporoparietal">frontotemporoparietal</option>
                    <option value="temporoparietoccipital">temporoparietoccipital</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="headache-side" disabled>
                    <option value="bilateral" selected>bilat.</option>
                    <option value="à direita">D</option>
                    <option value="à esquerda">E</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="headache-eye" disabled>
                    <option value="" selected>&empty;Retroorb</option>
                    <option value=", acometendo também região retroorbital">Retroorb</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="headache-fono" disabled>
                    <option value="false" selected>&empty;Fonofobia</option>
                    <option value="true">Fonofobia</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="headache-foto" disabled>
                    <option value="false" selected>&empty;Fotofobia</option>
                    <option value="true">Fotofobia</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Desde</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="headache-start" disabled>
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
                    <option value="a cada ~48 horas (febre terçã benigna)">terçã benig</option>
                    <option value="a cada ~36 a ~48 horas (febre terção maligna)">terçã malig</option>
                    <option value="a cada ~72 horas (febre quartã)">quartã</option>
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
            </div>
            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="fever-other" disabled>
                    <option value="" selected>sem outros achados</option>
                    <option value=" associada a sudorese fria">com suor</option>
                    <option value=" associada a sudorese fria e calafrios">com suor/calafrios</option>
                    <option value=" associada a delírios sensoperceptivos">com delírios</option>
                    <option value=" associada a crise convulsiva">com convulsão</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">De</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="fever-start" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">a</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="fever-end" disabled>
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-1" name="symps" value="mialgia">
              <label for="symp-1">Mialgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-2" name="symps" value="artralgia">
              <label for="symp-2">Artralgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-3" name="symps" value="dorsalgia">
              <label for="symp-3">Dorsalgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-4" name="symps" value="dor em membros superiores">
              <label for="symp-4">Dor MMSS</label>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-5" name="symps" value="dor em membros inferiores">
              <label for="symp-5">Dor MMII</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-6" name="symps" value="náuseas">
              <label for="symp-6">Náuseas</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-7" name="symps" value="vômitos">
              <label for="symp-7">Vômitos</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-8" name="symps" value="diarreia">
              <label for="symp-8">Diarreia</label>
            </div>
          </div>
          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-9" name="symps" value="astenia">
              <label for="symp-9">Astenia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-10" name="symps" value="fraqueza">
              <label for="symp-10">Fraqueza</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-11" name="symps" value="exantema">
              <label for="symp-11">Exantema</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-12" name="symps" value="equimoses">
              <label for="symp-12">Equimoses</label>
            </div>
          </div>
        </div>

        <h3 class="title is-5">Sinais de Alarme</h3>

        <div class="columns">
          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Dor Abdominal</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-abdpain">
                    <option value="nega" selected>Nega</option>
                    <option value="leve">Leve</option>
                    <option value="PERSISTENTE">PERSISTENTE</option>
                    <option value="REFRATÁRIA A ANALGESIA">REFRATÁRIA</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Vômitos Persistentes</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-emesis">
                    <option value="nega" selected>Nega</option>
                    <option value="REFERE">REFERE</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Edema/Anasarca</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-oedema">
                    <option value="ausente" selected>Ausente</option>
                    <option value="PRESENTE">PRESENTE</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Pré-Síncope</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-lipotimia">
                    <option value="nega" selected>Nega</option>
                    <option value="REFERE">REFERE</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Hepatomegalia</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-liver">
                    <option value="ausente" selected>Ausente</option>
                    <option value="PRESENTE">PRESENTE</option>
                    <option value="não avaliada">N/A</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Sangramentos Mucocutâneos</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-bleed">
                    <option value="nega" selected>Nega</option>
                    <option value="EPISTAXIS">Epistaxis</option>
                    <option value="GENGIVAL">GENGIVAL</option>
                    <option value="UROFECAL">UROFECAL</option>
                    <option value="EQUIMOSES">EQUIMOSES</option>
                    <option value="MÚLTIPLOS">MÚLTIPLOS</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Letargia</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-letargy">
                    <option value="ausente" selected>Ausente</option>
                    <option value="PRESENTE">PRESENTE</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Aumento Ht</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="alarm-ht">
                    <option value="desconhecido" selected>Desconhecido</option>
                    <option value="ausente">Ausente</option>
                    <option value="PRESENTE">PRESENTE</option>
                  </select>
                </div>
              </div>
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
      </div>

      <div class="is-hidden eval-reeval">
        <h3 class="title is-5">Evolução</h3>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Paciente refere</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="evol">
                <option value="resolução completa dos sintomas">resolução dos sintomas</option>
                <option value="melhora dos sintomas" selected>melhora dos sintomas</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="eval-first">
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
              <input type="checkbox" class="is-checkradio" id="comorb-8" name="comorbidities" value="Lactante">
              <label for="comorb-8">Lactante</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-age" name="comorbidities">
              <label for="comorb-9">&gt;65a</label>
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
                <textarea class="textarea has-fixed-size" id="allergy-drug" placeholder="Medicações a que é alérgice" disabled></textarea>
              </div>
            </div>

            <h3 class="title is-5 mt-4">Trabalho</h3>

            <div class="field has-addons">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="work">
                    <option value="" selected>Sem resposta</option>
                    <option value="nega trabalhar">Não trabalha</option>
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
    </div>

    <div class="box">
      <h2 class="title is-4">Objetivo</h2>

      <div class="eval-reeval is-hidden">
        <h3 class="title is-5">Função Renal</h3>

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

        <h3 class="title is-5">Hepatograma</h3>

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
          <div class="control">
            <button class="button is-danger" id="btf-clear">
              <span class="icon">
                <i class="mdi mdi-delete"></i>
              </span>
            </button>
          </div>
        </div>

        <h3 class="title is-5">Hemograma</h3>

        <h4 class="title is-6">Série Vermelha</h4>

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

        <h4 class="title is-6">Série Branca</h4>

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
            <button class="button is-static" tabindex="-1">Blastos</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-blast-percent" min="0" step="0.1" placeholder="Blastos (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-blast-abs" min="0" step="1" placeholder="Blastos (abs)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">)</button>
          </div>
        </div>
        <div class="field has-addons ml-5">
          <div class="control">
            <button class="button is-static" tabindex="-1">Mieloblastos</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-myeloblast-percent" min="0" step="0.1" placeholder="Mieloblastos (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-myeloblast-abs" min="0" step="1" placeholder="Mieloblastos (abs)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">)</button>
          </div>
        </div>
        <div class="field has-addons ml-5">
          <div class="control">
            <button class="button is-static" tabindex="-1">Promieloblastos</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-promyelocyst-percent" min="0" step="0.1" placeholder="Promieloblastos (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-promyelocyst-abs" min="0" step="1" placeholder="Promieloblastos (abs)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">)</button>
          </div>
        </div>
        <div class="field has-addons ml-5">
          <div class="control">
            <button class="button is-static" tabindex="-1">Mielócitos</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-myelocyst-percent" min="0" step="0.1" placeholder="Mielócitos (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-myelocyst-abs" min="0" step="1" placeholder="Mielócitos (abs)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">)</button>
          </div>
        </div>
        <div class="field has-addons ml-5">
          <div class="control">
            <button class="button is-static" tabindex="-1">Metamielócitos</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-metamyelocyst-percent" min="0" step="0.1" placeholder="Metamielócitos (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-metamyelocyst-abs" min="0" step="1" placeholder="Metamielócitos (abs)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">)</button>
          </div>
        </div>
        <div class="field has-addons ml-5">
          <div class="control">
            <button class="button is-static" tabindex="-1">Bastonetes</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-bast-percent" min="0" step="0.1" placeholder="Bastonetes (%)">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">(</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="hmg-bast-abs" min="0" step="1" placeholder="Bastonetes (abs)">
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

        <h4 class="title is-6">Plaquetas</h4>

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

        <h3 class="title is-5">Miscelânea</h3>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">PCR</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="pcr" min="0" step="0.01" placeholder="PCR">
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
            <button class="button is-static" tabindex="-1">Prot. Total</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="prot-total" step="0.1" placeholder="Prot. Total">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">Alb</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="prot-alb" step="0.1" placeholder="Albumina">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">Glob</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="prot-glob" step="0.1" placeholder="Globulinas">
          </div>
        </div>

        <h3 class="title is-5">T. Dengue</h3>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Dengue</button>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">NS1</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="dengue-ns1">
                <option value="" selected>NT</option>
                <option value="não reagente">-</option>
                <option value="REAGENTE">&plus;</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">IgM</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="dengue-igm">
                <option value="" selected>NT</option>
                <option value="não reagente">-</option>
                <option value="não realizado">NR</option>
                <option value="REAGENTE">&plus;</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">IgG</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="dengue-igg">
                <option value="" selected>NT</option>
                <option value="não reagente">-</option>
                <option value="não realizado">NR</option>
                <option value="REAGENTE">&plus;</option>
              </select>
            </div>
          </div>
        </div>

        <div class="divider">
          <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>
      </div>

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

      <h3 class="title is-5">Sinais Vitais</h4>

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
                  <option value="em cateter nasal de O2">CN O<sub>2</sub></option>
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
              <button class="button is-static" tabindex="-1">PAM</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pam" class="input" min="1" step="2" placeholder="#" readonly>
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
                  <option value="axilar">axila</option>
                  <option value="infravermelho de testa">testa</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Peso</button>
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
          <button class="button is-static" tabindex="-1">Orientação - Tempo</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="orientation-time">
              <option value="" selected>NT</option>
              <option value="Orientad">Orientade</option>
              <option value="DESorientad">DESorientade</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Orientação - Espaço</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="orientation-space">
              <option value="" selected>NT</option>
              <option value="Orientad">Orientade</option>
              <option value="DESorientad">DESorientade</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Geral</h3>

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
            <input type="checkbox" id="exam-lungs" class="is-checkradio">
            <label for="exam-lungs">
              <span class="icon">
                <i class="mdi mdi-lungs mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">MV</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lung">
                  <option value="presentes bilateralmente" selected>&plus;</option>
                  <option value="diminuídos em bases bilateralmente">&darr; base bilat</option>
                  <option value="diminuídos em base direita">&darr; base D</option>
                  <option value="diminuídos em base esquerda">&darr; base E</option>
                  <option value="diminuídos em hemitórax direito">&darr; D</option>
                  <option value="diminuídos em hemitórax esquerdo">&darr; E</option>
                  <option value="diminuídos globalmente">&darr; global</option>
                  <option value="ausentes (tórax silencioso)">&ndash; (!!!)</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">RA</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lung-sounds">
                  <option value="sem ruídos adventícios" selected>&empty;</option>
                  <option value="com raros roncos difusamente">alguns roncos</option>
                  <option value="com roncos de transmissão nasal">roncos nasais</option>
                  <option value="com sibilos expiratórios">sibilos exp</option>
                  <option value="com sibilos inspiratórios e expiratórios">sibilos ins/exp</option>
                  <option value="com crepitação estertorante em ">crepitação</option>
                  <option value="com sopro cavernoso em ">sopro cavernoso</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Alteração até</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lung-crept" disabled>
                  <option value="base direita" selected>base D</option>
                  <option value="base esquerda">base E</option>
                  <option value="mesotórax direito">meso D</option>
                  <option value="mesotórax esquerdo">meso E</option>
                  <option value="ápice direito">ápice D</option>
                  <option value="ápice esquerdo">ápice E</option>
                  <option value="bases bilateralmente">base bilat</option>
                  <option value="mesotórax bilateralmente">meso bilat</option>
                  <option value="ápices bilateralmente">ápice bilat</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Percussão</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lung-tap">
                  <option value="" selected>N/A</option>
                  <option value="Percussão claro-pulmonar em todos os campos pulmonares">Normal</option>
                  <option value="Macicez percutível em ">Macicez em...</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control is-expanded">
              <input type="text" class="input" id="lung-tap-desc" placeholder="Descreva localização da(s) macicez..." disabled>
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
            <input type="checkbox" id="exam-heart" class="is-checkradio">
            <label for="exam-heart">
              <span class="icon">
                <i class="mdi mdi-heart-pulse mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">B</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="heart-rhythm">
                  <option value="rítmicas" selected>R</option>
                  <option value="arrítmicas">arrít.</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="heart-sounds">
                  <option value="normofonéticas" selected>NF</option>
                  <option value="hipofonéticas">&darr;fonese</option>
                  <option value="hiperfonéticas por estalido metálico">&uarr;fonese (metal)</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="heart-times">
                  <option value="dois tempos" selected>2T</option>
                  <option value="dois tempos com desdobramento de B1">2T B1&times;</option>
                  <option value="dois tempos com desdobramento de B2">2T B2&times;</option>
                  <option value="dois tempos com desdobramento de B1 e B2">2T B1/B2&times;</option>
                  <option value="três tempos com presença de B3">3T B3</option>
                  <option value="três tempos com presença de B4">3T B4</option>
                  <option value="quatro tempos com presença de B3 e B4">4T B3+B4</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="heart-murmur">
                  <option value="sem sopros" selected>SS</option>
                  <option value="com sopro">sopro...</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="text" id="heart-murmur-desc" class="input" placeholder="Descreva o sopro..." disabled>
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
              <button class="button is-static" tabindex="-1">Misc</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="mmss-misc" placeholder="Outros dados...">
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
            <input type="checkbox" id="exam-mmii" class="is-checkradio">
            <label for="exam-mmii">
              <span class="icon">
                <i class="mdi mdi-foot-print mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Edema</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="oedema">
                  <option value="" selected>N/A</option>
                  <option value="Ausência de edemas">&empty;</option>
                  <option value="Edema bilateral e simétrico">bilat</option>
                  <option value="Edema bilateral, maior à direita">bilat D&gt;E</option>
                  <option value="Edema bilateral, maior à esquerda">bilat D&lt;E</option>
                  <option value="Edema exclusivo à direita">D apenas</option>
                  <option value="Edema exclusivo à esquerda">E apenas</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="oedema-grade1" disabled>
                  <option value="1+/4+" data-qtt="1+" selected>1+</option>
                  <option value="2+/4+" data-qtt="2+">2+</option>
                  <option value="3+/4+" data-qtt="3+">3+</option>
                  <option value="4+/4+" data-qtt="4+">4+</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="oedema-grade2" disabled>
                  <option value="1+/4+" selected>1+ (E)</option>
                  <option value="2+/4+">2+ (E)</option>
                  <option value="3+/4+">3+ (E)</option>
                  <option value="4+/4+">4+ (E)</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Empastamento Panturrilhas</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="calf">
                  <option value="" selected>N/A</option>
                  <option value="ausente">&empty;</option>
                  <option value="PRESENTE bilateralmente">Bilat</option>
                  <option value="PRESENTE à direita">D</option>
                  <option value="PRESENTE à esquerda">E</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Circ. Panturrilhas</button>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">D</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="calf-right" min="1" step="0.5" placeholder="# cm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">E</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="calf-left" min="1" step="0.5" placeholder="# cm">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Pulsos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmiipulse-strength">
                  <option value="" selected>N/A</option>
                  <option value="cheios">cheios</option>
                  <option value="fracos">&darr;</option>
                  <option value="em martelo d'água">&uarr;</option>
                  <option value="ausentes até aa. femorais">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmiipulse-simmetry" disabled>
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
                <select id="mmiipulse-artery" disabled>
                  <option value="pediosas" selected>pediosas</option>
                  <option value="tibiais posteriores">tibiais post</option>
                  <option value="poplíteas">poplíteas</option>
                  <option value="femorais">femorais</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Varizes</button>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">D</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="varicose-right">
                  <option value="" data-degree="x" select>N/A</option>
                  <option value="ausente(s) à direita (C0)" data-degree="0">&empty;</option>
                  <option value="presente(s) à direita em grau C1 (varizes de pequeno calibre)" data-degree="1">C1 (pqnas)</option>
                  <option value="presente(s) à direita em grau C2 (varizes de grande calibre)" data-degree="2">C2 (gdes)</option>
                  <option value="presente(s) à direita em grau C3 (varizes com edema)" data-degree="3">C3 (edema)</option>
                  <option value="presente(s) à direita em grau C4 (varizes e eczema de estase)" data-degree="4">C4 (eczema)</option>
                  <option value="presente(s) à direita em grau C5 (úlcera varicosa cicatrizada)" data-degree="5">C5 (úlcera cic)</option>
                  <option value="presente(s) à direita em grau C6 (úlcera varicosa ativa)" data-degree="6">C6 (úlcera ativa)</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">E</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="varicose-left">
                  <option value="" data-degree="y" select>N/A</option>
                  <option value="ausente(s) à esquerda (C0)" data-degree="0">&empty;</option>
                  <option value="presente(s) à esquerda em grau C1 (varizes de pequeno calibre)" data-degree="1">C1 (pqnas)</option>
                  <option value="presente(s) à esquerda em grau C2 (varizes de grande calibre)" data-degree="2">C2 (gdes)</option>
                  <option value="presente(s) à esquerda em grau C3 (varizes com edema)" data-degree="3">C3 (edema)</option>
                  <option value="presente(s) à esquerda em grau C4 (varizes e eczema de estase)" data-degree="4">C4 (eczema)</option>
                  <option value="presente(s) à esquerda em grau C5 (úlcera varicosa cicatrizada)" data-degree="5">C5 (úlcera cic)</option>
                  <option value="presente(s) à esquerda em grau C6 (úlcera varicosa ativa)" data-degree="6">C6 (úlcera ativa)</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Misc</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="mmii-misc" placeholder="Outros dados...">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box eval-reeval is-hidden">
      <h2 class="title is-4">Avaliação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Dengue</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="dx">
              <option value="A" selected>A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Condutas</h2>

      <div  class="content eval-first">
        <ol>
          <h3 class="title is-5">Medicações</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-symptomatics" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-symptomatics" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Sintomáticos agora</button>
              </div>
            </div>
          </li>
          <p class="help">Lembre-se: <strong>NÃO PRESCREVER ANTIINFLAMATÓRIOS</strong>, esteroidais ou não, enaquanto Dengue fôr sequer uma <strong>POSSIBILIDADE</strong>.</p>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-expansion" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-expansion" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Expansão volêmica agressiva agora</button>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">(<span id="plan-now-expansion-volume">1.500</span>mL)</button>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-othermeds1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-othermeds1">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="plan-now-othermeds1-what" placeholder="Outras medicações...">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-othermeds2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-othermeds2">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="plan-now-othermeds2-what" placeholder="Outras medicações...">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-othermeds3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-othermeds3">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="plan-now-othermeds3-what" placeholder="Outras medicações...">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Exames</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-dengue" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-dengue" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Teste para Dengue / NS1</button>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-hmg" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-hmg" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">HMG (para avaliar Ht e Plaq)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-liver" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-liver" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Marcadores de necrose hepatocítica</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-btf" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-btf" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Bilirrubinas total e frações</button>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-kidney" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-kidney">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Função renal</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-gaso" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-gaso">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Gasometria&nbsp;<strong>ARTERIAL</strong></button>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-radiography" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-radiography">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Rx Tórax</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-lab-abdomen" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-lab-abdomen">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">USG Abdome Superior</button>
              </div>
            </div>
          </li>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-labs-other1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-labs-other1">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="plan-now-labs-other1-what" placeholder="Outros labs...">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-now-labs-other2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-labs-other2">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="plan-now-labs-other2-what" placeholder="Outros labs...">
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
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento HD</button>
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
                <label for="plan-now-misc-reeval" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-now-misc-reeval" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Reaval após</button>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div  class="content eval-reeval is-hidden">
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
                <a class="button is-link" id="got-to-meds" href="meds.php?pre=<?php echo urlencode("Dengue (dip)"); ?>" target="_blank">Ir p/ Prescrições</a>
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
                <label for="plan-out-repellent" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-out-repellent" value="true" checked>
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
                <input type="number" class="input" id="followup" value="5" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias</button>
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

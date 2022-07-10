<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "sr";
$subtitle = "Sintomáticos Respiratórios v3";

require_once "header.php";

function getPhysician($index = 3) {
  if ( isset($_COOKIE["physician"]) ) { $data = json_decode( $_COOKIE["physician"] ); }
  elseif ( isset($_SESSION["physician"]) ) { $data = $_SESSION["physician"]; }
  else { $data = ["", "", "SP"]; }

  if ( $index > 2 ) { return ""; }
  else { return $data[ $index ]; }
}
if ( isset($_COOKIE["sr_header"]) ) { $sr_header = $_COOKIE["sr_header"]; }
elseif ( isset($_SESSION["sr_header"]) ) { $sr_header = $_SESSION["sr_header"]; }
else { $sr_header = "# CM #"; }
?>

<main class="section">
  <div class="container">
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

      <div class="eval-first mb-4">
        <h3 class="title is-5">Sintomas-Chave</h3>

        <div class="columns">
          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <label for="symp-cough" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="symp-cough" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Tosse</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="cough-desc" disabled>
                    <option value="seca" selected>seca</option>
                    <option value="produtiva">produtiva</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Tosse prévia</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-disabled is-fullwidth">
                  <select id="cough-prev" disabled>
                    <option value="" selected>N/A</option>
                    <option value="seca">seca</option>
                    <option value="produtiva">produtiva</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">, agora</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cough-diff" disabled>
                    <option value="igual ao basal" selected>igual</option>
                    <option value="com quantidade aumentada em relação ao basal">qtd&uarr;</option>
                    <option value="com aspecto pior que o basal">aspecto pior</option>
                    <option value="com quantidade aumentada e aspecto pior que o basal">qtd&uarr;/aspec. pior</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="cough-other" disabled>
                    <option value="" selected>sem outros achados</option>
                    <option value=" com alguns laivos de sangue eventuais">com laivos sg</option>
                    <option value=" com hemoptise franca">com hemoptise</option>
                    <option value=" com episódios de apneia associados">com apneia</option>
                    <option value=" com episódios de cianose associados">com cianose</option>
                    <option value=" com piora importante à noite a ao se deitar">pior em decúbito</option>
                    <option value=", apenas à noite">apenas noturna</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Desde</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="cough-start" disabled>
              </div>
            </div>
          </div>

          <div class="column">
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
                <button class="button is-static" tabindex="-1">desde/em</button>
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
              <input type="checkbox" class="is-checkradio" id="symp-key-1" name="symps-key" value="coriza">
              <label for="symp-key-1">Coriza</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-2" name="symps-key" value="odinofagia">
              <label for="symp-key-2">Odinofagia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-3" name="symps-key" value="cefaleia">
              <label for="symp-key-3">Cefaleia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-4" name="symps-key" value="calafrios">
              <label for="symp-key-4">Calafrios</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-5" name="symps-key" value="anosmia">
              <label for="symp-key-5">Anosmia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-6" name="symps-key" value="disosmia">
              <label for="symp-key-6">Disosmia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-7" name="symps-key" value="ageusia">
              <label for="symp-key-7">Ageusia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-8" name="symps-key" value="disgeusia">
              <label for="symp-key-8">Disgeusia</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-9" name="symps-key" value="dispneia">
              <label for="symp-key-9">Dispneia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-10" name="symps-key" value="confusão mental">
              <label for="symp-key-10">Confusão Mental</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-11" name="symps-key" value="rebaixamento do nível de consciência">
              <label for="symp-key-11">&darr;GCS</label>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <h4 class="title is-6">Apenas Crianças</h4>

            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-12" name="symps-key" value="congestão nasal">
              <label for="symp-key-12">Congestão Nasal</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-13" name="symps-key" value="hipoatividade">
              <label for="symp-key-13">Hipoatividade</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-17" name="symps-key" value="anúria">
              <label for="symp-key-17">Anúria</label>
            </div>
          </div>

          <div class="column">
            <h4 class="title is-6">Apenas Idosos</h4>

            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-16" name="symps-key" value="hiporexia importante">
              <label for="symp-key-16">Hiporexia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-key-18" name="symps-key" value="anorexia">
              <label for="symp-key-18">Anorexia</label>
            </div>
          </div>
        </div>

        <h3 class="title is-5">Outros Sintomas</h3>

        <div class="columns">
          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-1" name="symps-other" value="artralgia">
              <label for="symp-other-1">Artralgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-2" name="symps-other" value="astenia">
              <label for="symp-other-2">Astenia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-3" name="symps-other" value="cervicalgia">
              <label for="symp-other-3">Cervicalgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-4" name="symps-other" value="congestão nasal">
              <label for="symp-other-4">Congestão Nasal (adultos)</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-5" name="symps-other" value="diarreia">
              <label for="symp-other-5">Diarreia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-6" name="symps-other" value="dor abdominal">
              <label for="symp-other-6">Dor Abdominal</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-7" name="symps-other" value="dor de membros inferiores">
              <label for="symp-other-7">Dor de MMII</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-8" name="symps-other" value="dor em membros superiores">
              <label for="symp-other-8">Dor de MMSS</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-9" name="symps-other" value="dor no pescoço">
              <label for="symp-other-9">Dor no Pescoço</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-10" name="symps-other" value="dorsalgia">
              <label for="symp-other-10">Dorsalgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-11" name="symps-other" value="espirros">
              <label for="symp-other-11">Espirros</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-12" name="symps-other" value="inapetência">
              <label for="symp-other-12">Inapetência</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-13" name="symps-other" value="irritação na garganta">
              <label for="symp-other-13">Irritação na Garganta</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-14" name="symps-other" value="irritação ocular">
              <label for="symp-other-14">Irritação Ocular</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-15" name="symps-other" value="lipotimia">
              <label for="symp-other-15">Lipotimia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-16" name="symps-other" value="mialgia">
              <label for="symp-other-16">Mialgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-17" name="symps-other" value="náuseas">
              <label for="symp-other-17">Náuseas</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-18" name="symps-other" value="otalgia">
              <label for="symp-other-18">Otalgia</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-19" name="symps-other" value="otorreia">
              <label for="symp-other-19">Otorreia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-20" name="symps-other" value="secreção ocular">
              <label for="symp-other-20">Secreção Ocular</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-21" name="symps-other" value="toracalgia">
              <label for="symp-other-21">Toracalgia</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-22" name="symps-other" value="vertigem">
              <label for="symp-other-22">Vertigem</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="symp-other-23" name="symps-other" value="vômitos">
              <label for="symp-other-23">Vômitos</label>
            </div>
          </div>
        </div>

        <h3 class="title is-5">Medo</h3>

        <div class="columns">
          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="fear-contact">
              <label for="fear-contact">Veio porque teve contato com alguém positivo</label>
            </div>
          </div>

          <div class="column">
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="fear-fear">
              <label for="fear-fear">Veio porque tem medo de estar com COVID</label>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <textarea class="textarea has-fixed-size" id="symp-misc" placeholder="Inclua aqui outros dados da anamnese. Esse texto será incluído sem alterações em Subjetivo." rows="3"></textarea>
          </div>
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
                <option value="melhora dos sintomas, mantendo: " selected>melhora dos sintomas</option>
                <option value="piora dos sintomas, em especial: ">piora dos sintomas</option>
              </select>
            </div>
          </div>
        </div>

        <div id="reeval-symps">
          <h4 class="title is-6" id="reeval-symps-title">Mantém:</h4>

          <div class="columns">
            <div class="column">
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-1" name="symps-keeping" value="ageusia">
                <label for="symp-keeping-1">Ageusia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-2" name="symps-keeping" value="anorexia">
                <label for="symp-keeping-2">Anorexia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-3" name="symps-keeping" value="anosmia">
                <label for="symp-keeping-3">Anosmia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-4" name="symps-keeping" value="anúria">
                <label for="symp-keeping-4">Anúria</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-5" name="symps-keeping" value="artralgia">
                <label for="symp-keeping-5">Artralgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-6" name="symps-keeping" value="astenia">
                <label for="symp-keeping-6">Astenia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-7" name="symps-keeping" value="calafrios">
                <label for="symp-keeping-7">Calafrios</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-8" name="symps-keeping" value="cefaleia">
                <label for="symp-keeping-8">Cefaleia</label>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-9" name="symps-keeping" value="cervicalgia">
                <label for="symp-keeping-9">Cervicalgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-10" name="symps-keeping" value="confusão mental">
                <label for="symp-keeping-10">Confusão Mental</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-11" name="symps-keeping" value="congestão nasal">
                <label for="symp-keeping-11">Congestão Nasal</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-12" name="symps-keeping" value="coriza">
                <label for="symp-keeping-12">Coriza</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-13" name="symps-keeping" value="diarreia">
                <label for="symp-keeping-13">Diarreia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-14" name="symps-keeping" value="disgeusia">
                <label for="symp-keeping-14">Disgeusia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-15" name="symps-keeping" value="disosmia">
                <label for="symp-keeping-15">Disosmia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-16" name="symps-keeping" value="dispneia">
                <label for="symp-keeping-16">Dispneia</label>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-17" name="symps-keeping" value="dor abdominal">
                <label for="symp-keeping-17">Dor Abdominal</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-18" name="symps-keeping" value="dor de membros inferiores">
                <label for="symp-keeping-18">Dor de MMII</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-19" name="symps-keeping" value="dor em membros superiores">
                <label for="symp-keeping-19">Dor de MMSS</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-20" name="symps-keeping" value="dor no pescoço">
                <label for="symp-keeping-20">Dor no Pescoço</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-21" name="symps-keeping" value="dorsalgia">
                <label for="symp-keeping-21">Dorsalgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-22" name="symps-keeping" value="espirros">
                <label for="symp-keeping-22">Espirros</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-23" name="symps-keeping" value="febre">
                <label for="symp-keeping-23">Febre</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-24" name="symps-keeping" value="hipoatividade">
                <label for="symp-keeping-24">Hipoatividade</label>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-25" name="symps-keeping" value="hiporexia importante">
                <label for="symp-keeping-25">Hiporexia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-26" name="symps-keeping" value="inapetência">
                <label for="symp-keeping-26">Inapetência</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-27" name="symps-keeping" value="irritação na garganta">
                <label for="symp-keeping-27">Irritação na Garganta</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-28" name="symps-keeping" value="lipotimia">
                <label for="symp-keeping-28">Lipotimia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-29" name="symps-keeping" value="mialgia">
                <label for="symp-keeping-29">Mialgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-30" name="symps-keeping" value="náuseas">
                <label for="symp-keeping-30">Náuseas</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-31" name="symps-keeping" value="odinofagia">
                <label for="symp-keeping-31">Odinofagia</label>
              </div>
            </div>

            <div class="column">
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-32" name="symps-keeping" value="otalgia">
                <label for="symp-keeping-32">Otalgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-33" name="symps-keeping" value="otorreia">
                <label for="symp-keeping-33">Otorreia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-34" name="symps-keeping" value="rebaixamento do nível de consciência">
                <label for="symp-keeping-34">&darr;GCS</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-35" name="symps-keeping" value="toracalgia">
                <label for="symp-keeping-35">Toracalgia</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-36" name="symps-keeping" value="tosse">
                <label for="symp-keeping-36">Tosse</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-37" name="symps-keeping" value="vertigem">
                <label for="symp-keeping-37">Vertigem</label>
              </div>
              <div class="field">
                <input type="checkbox" class="is-checkradio" id="symp-keeping-38" name="symps-keeping" value="vômitos">
                <label for="symp-keeping-38">Vômitos</label>
              </div>
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
              <input type="checkbox" class="is-checkradio" id="comorb-1" name="comorbidities" value="hipertensão arterial sistêmica">
              <label for="comorb-1">HAS</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-2" name="comorbidities" value="diabete mélito">
              <label for="comorb-2">DM</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-3" name="comorbidities" value="asma">
              <label for="comorb-3">Asma</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-4" name="comorbidities" value="doença pulmonar obstrutiva crônica (DPOC)">
              <label for="comorb-4">DPOC</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-5" name="comorbidities" value="insuficiência renal crônica">
              <label for="comorb-5">IRC</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-6" name="comorbidities" value="infarto agudo de miocárdio prévio">
              <label for="comorb-6">IAM</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-7" name="comorbidities" value="acidente vascular cerebral prévio">
              <label for="comorb-7">AVC</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-8" name="comorbidities" value="obesidade">
              <label for="comorb-8">Obesidade</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-9" name="comorbidities" value="infecção pelo HIV">
              <label for="comorb-9">PVHIV</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-11" name="comorbidities" value="infecção pelo HIV com critérios para Aids">
              <label for="comorb-11">PVHIV + Aids</label>
            </div>
            <div class="field">
              <input type="checkbox" class="is-checkradio" id="comorb-12" name="comorbidities" value="paralisia cerebral">
              <label for="comorb-12">PC</label>
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

            <h4 class="title is-6">COVID Prévio</h4>

            <div class="field has-addons">
              <div class="control">
                <label for="covid-before" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="covid-before" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Última infecção por SARS-CoV-2 em</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="covid-before-date" disabled>
              </div>
            </div>

            <h4 class="title is-6">Alergias</h4>

            <div class="field has-text-centered">
              <input type="radio" class="is-checkradio" id="allergy-yes" name="allergy" value="true">
              <label for="allergy-yes">Sim</label>

              <input type="radio" class="is-checkradio" id="allergy-no" name="allergy" value="false" checked>
              <label for="allergy-no">Não</label>
            </div>

            <input type="text" class="input" id="allergy-drug" placeholder="Medicações a que é alérgice" disabled>

            <h4 class="title is-6 mt-4">Vacinas</h4>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">COVID</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="vax-covid" min="0" step="1" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">doses</button>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Influenza</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="vax-influenza">
                    <option value="" selected>...</option>
                    <option value="true">tomou</option>
                    <option value="false">NÃO tomou</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Varíola?</button>
              </div>
              <div class="control is-expanded">
                <button class="button is-fullwidth" tabindex="-1" disabled>
                  &#x1F631;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5 mt-4">Ambiente Sócio-Laboral</h3>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Trabalho</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="work">
                  <option value="" selected>Sem resposta</option>
                  <option value="não trabalha">Não trabalha</option>
                  <option value="não estuda">Não estuda</option>
                  <option value="estuda">Estuda</option>
                  <option value="trabalha com vínculo celetista">Trabalha com carteira assinada</option>
                  <option value="trabalha por conta própria">Trabalha por conta</option>
                  <option value="trabalha sem condições mínimas de manutenção de seus direitos humanos fundamentais (incluindo direito de ausência remunerada, neste caso)">"Trabalho" uberizado/semi-escravo</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Domicílio</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="family">
                  <option value="" selected>Sem resposta</option>
                  <option value="sozinho">Mora sozinho</option>
                  <option value="com outras pessoas que NÃO têm necessidade de afastamento de familiares">Coabitantes NÃO precisam de afastamento</option>
                  <option value="com outras pessoas que têm necessidade de afastamento de familiares">Coabitantes PRECISAM de afastamento</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title is-6">Profissional Específico</h4>

      <div class="field has-addons">
        <div class="control">
          <div class="select">
            <select id="work-special">
              <option value="" selected>N/A</option>
              <option value="profissional da saúde">Saúde</option>
              <option value="segurança pública">Segurança Pública</option>
              <option value="educação">Educação</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">na função de</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="work-special-function" placeholder="cargo que a pessoa ocupa" disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Exames</h2>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">COVID</button>
            </div>
            <div class="control">
              <input type="date" class="input" id="exam-covid-date">
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-covid">
                  <option value="" selected>N/A</option>
                  <option value="RT-PCR para SARS-CoV-2">RT-PCR</option>
                  <option value="Sorologia para anticorpos IgM e IgG contra SARS-CoV-2">Sorol IgM/IgG</option>
                  <option value="Sorologia Conjugada IgM+IgG contra SARS-CoV-2">Sorol Ig Total</option>
                  <option value="Teste Rápido Sorológico IgM e IgG para SARS-CoV-2">TR IgM/IgG</option>
                  <option value="Teste Rápido Sorológico Conjugado IgM+IgG para SARS-CoV-2">TR Ig Total</option>
                  <option value="Teste Rápido Nasal para detecção de Antígeno de SARS-CoV-2">TR-Ag</option>
                  <option value="Auto-Teste Rápido Nasal para detecção de Antígeno de SARS-CoV-2">Auto TR-Ag</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-covid-res">
                  <option value="" selected disabled>escolha...</option>
                  <option value="" disabled>-- PCR / TR-Ag --</option>
                  <option value="NÃO detectado">não detectado</option>
                  <option value="DETECTADO">detectado</option>
                  <option value="" disabled>-- Sorol Conj --</option>
                  <option value="NÃO reagente">não reagente</option>
                  <option value="REAGENTE">reagente</option>
                  <option value="" disabled>-- Sorol Discr --</option>
                  <option value="IgM e IgG NÃO reagentes">IgM NR e IgG NR</option>
                  <option value="IgM REAGENTE e IgG NÃO reagente">IgM+ e IgG NR</option>
                  <option value="IgM NÃO reagente e IgG REAGENTE">IgM NR e IgG+</option>
                  <option value="IgM e IgG REAGENTES">IgM+ e IgG+</option>
                  <option value="" disabled>-- Outro --</option>
                  <option value="em análise">em análise</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Influenza</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="exam-influenza-date">
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-influenza">
                  <option value="" selected>N/A</option>
                  <option value="Teste Rápido para Influenza A/B">TR</option>
                  <option value="PCR para Influenza">PCR</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-influenza-res">
                  <option value="" selected>N/A</option>
                  <option value="não reagente para A e B">NR</option>
                  <option value="REAGENTE para A, não reagente para B">A+</option>
                  <option value="não reagente para A, REAGENTE para B">B+</option>
                  <option value="REAGENTE para A e B">A+B+</option>
                  <option value="não realizado por falta de material">&empty; / falta</option>
                  <option value="não realizado por infactibilidade de realizá-lo em face da falta de tempo e dos riscos à integridade física da equipe caso matenhamos UBS aberta apenas para tal">&empty; / tempo</option>
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
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Se Criança</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="child-activity">
              <option value="" selected>N/A</option>
              <option value="ative">ative</option>
              <option value="hipoative">hipoative</option>
              <option value="inative">inative</option>
              <option value="hiperative">hiperative</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="child-reactivity">
              <option value="" selected>N/A</option>
              <option value="reative">reative</option>
              <option value="hiporreative">hiporreative</option>
              <option value="arreative">arreative</option>
            </select>
          </div>
        </div>
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
        </div>
      </div>

      <h3 class="title is-5">Geral</h3>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-eye" class="is-checkradio">
            <label for="exam-eye">
              <span class="icon">
                <i class="mdi mdi-eye mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Conjuntiva</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="eye-white">
                  <option value="sem alterações" selected>normal</option>
                  <option value="com hiperemia leve">hipermia leve</option>
                  <option value="com hiperemia moderada">hipermia moderada</option>
                  <option value="com hiperemia intensa">hipermia intensa</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Secreções</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="eye-secr">
                  <option value="ausentes">&empty;</option>
                  <option value="presentes">&plus;</option>
                  <option value="presentes, de aspecto purulento">&plus; / pus</option>
                </select>
              </div>
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
            <input type="checkbox" id="exam-neck" class="is-checkradio">
            <label for="exam-neck">
              <span class="icon">
                <i class="mdi mdi-head mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Tireoide</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="thyroid">
                  <option value="" selected>N/A</option>
                  <option value="não palpável">&empty;</option>
                  <option value="palpável topicamente, sem alterações de volume ou de superfície palpáveis">Normal</option>
                  <option value="palpável topicamente, levemente aumentada mas sem alterações palpáveis de superfície">&uarr;Vol</option>
                  <option value="palpável topicamente, bastante aumentada mas sem alterações palpáveis de superfície">&uarr;&uarr;&uarr;Vol</option>
                  <option value="palpável topicamente, volume aumentado às custas de nódulo único">&uarr;Vol/Nód único</option>
                  <option value="palpável topicamente, volume aumentado às custas de diversos nódulos">&uarr;Vol/Nóds</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Linfonodos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lymph">
                  <option value="" selected>N/A</option>
                  <option value="Sem linfonodomegalias cervicais, periauriculares ou supraclávicas palpáveis">Normal</option>
                  <option value="Presença de alguns linfonodos palpáveis, menores que 05mm">&plus;&lt;5mm</option>
                  <option value="Presença de algumas linfonodomegalias">&plus;&ge;5mm</option>
                  <option value="Presença de inúmeros linfonodos palpáveis, todos menores que 05mm">&plus;&plus;&lt;5mm</option>
                  <option value="Presença de inúmeras linfonodomegalias palpáveis">&plus;&plus;&ge;5mm</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">de aspecto</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="lymph-desc">
                  <option value="" selected>&empty;</option>
                  <option value=", fibroelásticos, móveis, não-aderidos a planos profundos e dolorosos">reacional</option>
                  <option value=", endurados, coalescidos, aderidos a planos profundos e indolores">maligno</option>
                </select>
              </div>
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
                  <option value="com raros roncos">alguns roncos</option>
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

      <h3 class="title is-5">ORL</h3>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" id="exam-oto" class="is-checkradio">
            <label for="exam-oto">
              <span class="icon">
                <i class="mdi mdi-ear-hearing mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">MTD</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-d-membrane" id="oto-d-membrane">
                  <option value="observável" selected>+</option>
                  <option value="não observável">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-d-retromembrane" id="oto-d-retromembrane">
                  <option value="sem alterações, abaulamentos ou conteúdos retrotimpânicos" selected>nl</option>
                  <option value="levemente opacificada">&half;opaca</option>
                  <option value="levemente hiperemiada, mas sem abaulamentos ou conteúdos retrotimpânicos">&half;hiperem</option>
                  <option value="hiperemiada, abaulada e com conteúdo retrotimpânico seroso">hiperem+abaul/seroso</option>
                  <option value="hiperemiada, abaulada e com conteúdo retrotimpânico purulento">hiperem+abaul/pus</option>
                  <option value="com rotura">rotura</option>
                  <option value="mas ausente">ausente</option>
                  <option value="por cerume impactado em conduto">cerume</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">Conduto</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-d-canal" id="oto-d-canal">
                  <option value="sem alterações" selected>nl</option>
                  <option value="com hiperemia importante mas sem secreções">hiperem</option>
                  <option value="com hiperemia importante e secreção purulenta">hiperem+pus</option>
                  <option value="com cerume impactado">cerume</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">MTE</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-e-membrane" id="oto-e-membrane">
                  <option value="observável" selected>+</option>
                  <option value="não observável">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-e-retromembrane" id="oto-e-retromembrane">
                  <option value="sem alterações, abaulamentos ou conteúdos retrotimpânicos" selected>nl</option>
                  <option value="levemente opacificada">&half;opaca</option>
                  <option value="levemente hiperemiada, mas sem abaulamentos ou conteúdos retrotimpânicos">&half;hiperem</option>
                  <option value="hiperemiada, abaulada e com conteúdo retrotimpânico seroso">hiperem+abaul/seroso</option>
                  <option value="hiperemiada, abaulada e com conteúdo retrotimpânico purulento">hiperem+abaul/pus</option>
                  <option value="com rotura">rotura</option>
                  <option value="mas ausente">ausente</option>
                  <option value="por cerume impactado em conduto">cerume</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">Conduto</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="oto-e-canal" id="oto-e-canal">
                  <option value="sem alterações" selected>nl</option>
                  <option value="com hiperemia importante mas sem secreções">hiperem</option>
                  <option value="com hiperemia importante e secreção purulenta">hiperem+pus</option>
                  <option value="com cerume impactado">cerume</option>
                </select>
              </div>
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
            <input type="checkbox" id="exam-oro" class="is-checkradio">
            <label for="exam-oro">
              <span class="icon">
                <i class="mdi mdi-tooth mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Oroscopia</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-oro-pharynx" name="exam-oro-pharynx">
                  <option value="sem hiperemia" selected>&empty;hiperem</option>
                  <option value="levemente hiperemiada">&half;hiperem</option>
                  <option value="muito hiperemiada">+hiperem</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Tonsilas</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-oro-tonsils" name="exam-oro-tonsils">
                  <option value="ausentes, como esperado para idade,">&empty;idade</option>
                  <option value="ausentes">&empty;</option>
                  <option value="grau 1 de Brodsky" selected>g1</option>
                  <option value="grau 2 de Brodsky">g2</option>
                  <option value="grau 3 de Brodsky">g3</option>
                  <option value="grau 4 de Brodsky">g4</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-oro-tonsilcover" name="exam-oro-tonsilcover">
                  <option value="sem placas purulentas ou caseicas" selected>nl</option>
                  <option value="com cáseos">cáseo</option>
                  <option value="com placas purulentas à direita">pus/D</option>
                  <option value="com placas purulentas à esquerda">pus/E</option>
                  <option value="com placas purulentas bilateralmente">pus/bilat</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Palato</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-oro-palate" name="exam-oro-palate">
                  <option value="centralizado, sem desvio" selected>nl</option>
                  <option value="com desvio à direita">desvio D</option>
                  <option value="com desvio à esquerda">desvio E</option>
                </select>
              </div>
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
            <input type="checkbox" id="exam-naso" class="is-checkradio">
            <label for="exam-naso">
              <span class="icon">
                <i class="mdi mdi-face-woman-profile mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Mucosa</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="naso-skin" id="naso-skin">
                  <option value="de aspecto normal" selected>nl</option>
                  <option value="levemente enantematosa">&half;hiperem</option>
                  <option value="bastante enantematosa">+hiperem</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Cornetos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="naso-shells" id="naso-shells">
                  <option value="sem hipertrofias" selected>nl</option>
                  <option value="hipertrofiados bilateralmente">&uarr;bilat</option>
                  <option value="hipertrofiados bilateralmente, pior à esquerda">&uarr;bilat/&uarr;E</option>
                  <option value="hipertrofiados bilateralmente, pior à direita">&uarr;bilat/&uarr;D</option>
                  <option value="com hipertrofia apenas à esquerda">&uarr;E</option>
                  <option value="com hipertrofia apenas à direita">&uarr;D</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Septo Nasal</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="naso-sept" id="naso-sept">
                  <option value="sem desvio aparente de septo nasal" selected>nl</option>
                  <option value="desvio leve de septo nasal para esquerda">desvio &half;E</option>
                  <option value="desvio moderado de septo nasal para esquerda">desvio &frac34;E</option>
                  <option value="desvio importante de septo nasal para esquerda">desvio +E</option>
                  <option value="desvio leve de septo nasal para direita">desvio &half;D</option>
                  <option value="desvio moderado de septo nasal para direita">desvio &frac34;D</option>
                  <option value="desvio importante de septo nasal para direita">desvio +D</option>
                </select>
              </div>
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
            <input type="checkbox" id="exam-mmii" class="is-checkradio">
            <label for="exam-mmii">
              <span class="icon">
                <i class="mdi mdi-shoe-print mdi-24px"></i>
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
                  <option value="sem edemas" selected>&empty;</option>
                  <option value="com edema bilateral e simétrico">bilat</option>
                  <option value="com edema bilateral, maior à direita">bilat D&gt;E</option>
                  <option value="com edema bilateral, maior à esquerda">bilat D&lt;E</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="oedema-grade">
                  <option value="1+/4+" selected>1+</option>
                  <option value="2+/4+">2+</option>
                  <option value="3+/4+">3+</option>
                  <option value="4+/4+">4+</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Pulsos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmiipulse-strength">
                  <option value="cheios" selected>cheios</option>
                  <option value="fracos">&darr;</option>
                  <option value="em martelo d'água">&uarr;</option>
                  <option value="ausentes até aa. femorais">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmiipulse-simmetry">
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
                <select id="mmiipulse-artery">
                  <option value="pediosas" selected>pediosas</option>
                  <option value="tibiais posteriores">tibiais post</option>
                  <option value="poplíteas">poplíteas</option>
                  <option value="femorais">femorais</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Avaliação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Diagnóstico</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="icd-search">
              <option value="" selected disabled>Outro...</option>
              <option value="J00">Resfriado Comum</option>
              <option value="J11.1">Sd. Gripal</option>
              <option value="J03.9">Faringotonsilite Viral</option>
              <option value="J03.0">Faringotonsilite possivelmente Bacteriana</option>
              <option value="J03.0">faringotonsilite provavelmente Bacteriana</option>
              <option value="J15.4">Pneumonia Adquirida em Comunidade</option>
              <option value="J15.9">Pneumonia por germe Hospitalar</option>
              <option value="J01.9">Sinusite Viral</option>
              <option value="J01.9">Sinusite possivelmente Bacteriana</option>
              <option value="U07.2">COVID Presumido</option>
              <option value="U07.1">COVID Confirmado</option>
              <option value="J10.1">Influenza Confirmado</option>
              <option value="Z20.8">Contato com Infecção Respiratória</option>
              <option value="Z71.1">Medo de Infecção Respiratória</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="dx-final" placeholder="Preencha diagnóstico aqui...">
        </div>
        <div class="control">
          <input type="text" class="input" id="icd-result" placeholder="CID" readonly>
        </div>
      </div>

      <div class="content">
        <p>Se você não souber esse baseado nas anamnese e exame físico, volte para a faculdade, por favor. &#128077;</p>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Plano / Condutas</h2>

      <div class="content">
        <ol>
          <h3 class="title is-5">Exame</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-labcovid" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-labcovid" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">COVID</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="labcovid">
                    <option value="Swab para RT-PCR" selected>PCR</option>
                    <option value="Sorologia">Sorologia</option>
                    <option value="Teste Rápido para pesquisa nasal de Antígeno">TR-Ag</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">(</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="labcovid-refusal">
                    <option value="" selected>coleta externa</option>
                    <option value="">coletado</option>
                    <option value=" (paciente ou seu responsável legal recusam coleta deste exame)">RECUSA</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-labflu" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-labflu" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Influenza</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="labflu">
                    <option value="Swab para PCR" selected>PCR</option>
                    <option value="Teste Rápido para pesquisa nasal de Antígeno">TR-Ag</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">(</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="labflu-refusal">
                    <option value="" selected>coleta externa</option>
                    <option value="">coletado</option>
                    <option value=" (paciente ou seu responsável legal recusam coleta deste exame)">RECUSA</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-labnone" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-labnone" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento que&nbsp;<strong>não está nos grupos de coleta</strong>&nbsp;da SMS</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Atestado</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-leave" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-leave" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Paciente</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="leave" min="1" step="1" value="5">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias (</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="leave-reason">
                    <option value="" selected>N/A</option>
                    <option value=" até resultado de exame">até exame</option>
                    <option value=" até completar 5 dias do início dos sintomas">até 5d de D0</option>
                    <option value=" até completar 7 dias do início dos sintomas">até 7d de D0</option>
                    <option value=" até completar 10 dias do início dos sintomas">até 10d de D0</option>
                    <option value=" até completar 14 dias do início dos sintomas">até 14d de D0</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-familyleave" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-familyleave" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Familiares</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="familyleave">
                    <option value="Redijo afastamento de familiares, tal qual previsto nas Portaria N° 356 e 454 do Ministério da Saúde, de 11 e 20 de março de 2020, respectivamente">Redijo afastamento de familiares</option>
                    <option value="Paciente nega afastamento de familiares" selected>Paciente nega afastamento de familiares</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-link" id="make-family-leave">Gerar Afastamento de Familiares</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Prescrições</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-symptomatics" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-symptomatics" value="true">
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
                <a class="button is-link" id="got-to-meds" href="meds.php?pre=<?php echo urlencode("Resfriado/Gripe (dip+parac)"); ?>" target="_blank">Ir p/ Prescrições</a>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-ln" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-ln" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1"><strong>LN</strong>&nbsp;c/ SF</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-syrups" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-syrups" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento&nbsp;<strong>inutilidade</strong>&nbsp;de xaropes "para tosse"</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-honey" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-honey" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1"><strong>Mel</strong>&nbsp;antes de dormir p/ tosse</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-tamiflu" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-tamiflu" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1"><strong>Oseltamivir</strong></button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-atb" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-atb" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Antibiótico</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="atb">
                    <option value="" disabled>Sem TP aqui, satanás</option>
                    <option value="" disabled>-- Adultos --</option>
                    <option value="amoxicilina 500mg 8/8h" selected>Amoxi</option>
                    <option value="amoxicilina 500mg 8/8h mais claritromicina 500mg/d">Amoxi+Claritro</option>
                    <option value="cefalexina 500mg 6/6h">Cefalexina</option>
                    <option value="cefalexina 1.000mg 6/6h">Cefalexina&times;2</option>
                    <option value="ciprofloxacino 500mg 12/12h mais clindamicina 300mg 8/8h">Cipro+Clinda</option>
                    <option value="ciprofloxacino 500mg 12/12h mais clindamicina 600mg 8/8h">Cipro+Clinda&times;2</option>
                    <option value="penicilina G benzatina 1.200.000UI IM em dose única">Peni 1,2MUI DU</option>
                    <option value="penicilina G benzatina 2.400.000UI/sem IM">Peni 2,4MUI/sem</option>
                    <option value="ceftriaxona 1.000mg + claritromicina 1.000mg">Cef+Claritro (ataque)</option>
                    <option value="ceftriaxona 500mg + claritromicina 500mg">Cef+Claritro (manut)</option>
                    <option value="ceftriaxona 1.000mg + azitromicina 1.000mg">Cef+Azitro (ataque)</option>
                    <option value="ceftriaxona 500mg + azitromicina 500mg">Cef+Azitro (manut)</option>
                    <option value="nitrofurantoína 100mg 6/6h">Nitrofurantoína</option>
                    <option value="" disabled>-- Pediatria --</option>
                    <option value="amoxicilina 50mg/kg/d 8/8h">Amoxi (50mg/kg/d)</option>
                    <option value="amoxicilina 90mg/kg/d 8/8h">Amoxi&times;2 (90mg/kg/d)</option>
                    <option value="amoxicilina 45mg/kg/d mais clavulanato 90mg/kg/d 8/8h">Clavulin (45+90mg/kg/d)</option>
                    <option value="cefuroxima 30mg/kg/d 12/12h">Cefuro (30mg/kg/d 12)</option>
                    <option value="clindamicina 40mg/kg/d 8/8h">Clina (40mg/kg/d 8)</option>
                    <option value="eritromicina 50mg/kg/d 6/6h">Eritro (50mg/kg/d 6)</option>
                    <option value="claritromicina 15mg/kg/d 12/12h">Claritro (15mg/kg/d 12)</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="atb-reason">
                    <option value=" para faringotonsilite possivelmente bacteriana (Strep Score > 2) pela ausência de teste rápido para GAS">Amidalite Poss Bact (Strep S &gt; 2)</option>
                    <option value=" para faringotonsilite bacteriana de altíssima probabilidade pré-teste (Strep Score &ge; 4)">Amidalite Prov Bact (Strep S &ge; 4)</option>
                    <option value=" para pneumonia adquirida em comunidade não-complicada">Pneumonia</option>
                    <option value=" para pneumonia adquirida em comunidade em que não se pode excluir clinicamente germes atípicos">Pneumonia G. Atípicos</option>
                    <option value=" para pneumonia por germe hospitalar pois paciente é institucionalizado">Pneumonia Institucionalizado</option>
                    <option value=" para sinusite com evolução clínica desfávoral, que sugere etiologia bacteriana pela história clínica">Sinusite Bact DE VERDADE</option>
                    <option value=" para cistite">Cistite</option>
                    <option value=" para erisipela">Erisipela</option>
                    <option value=" para celulite">Celulite</option>
                    <option value=" para infecção cutânea">Infec Cutânea</option>
                    <option value=" para Sífilis">Sífilis</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">por</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="atb-days" min="1" step="1" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">d</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-med1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-med1" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med1" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med1-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-med2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-med2" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med2" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med2-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-med3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-med3" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Outro</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med3" placeholder="Nome, dose e posologia">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="med3-reason" placeholder="razão da prescrição">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Orientações</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-warnsigns" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-warnsigns" value="true" checked>
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
                <label for="plan-delusion" class="button is-primary">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-marked mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-delusion" value="true" checked>
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">"Tratamento prococe" é um&nbsp;<strong>delírio</strong></button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-isolation" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-isolation" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Isolamento social</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-quarantine" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-quarantine" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Quarentena de comunicantes</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Sem Critérios</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-criterianotmet" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-criterianotmet" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Ausência de critérios p/ coleta (SMS)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-whenseek" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-whenseek" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Sinais p/ retornar ao SR</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-whenseeker" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-whenseeker" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Sinais p/ buscar PS</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-er-restrictions" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-er-restrictions" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Funções/Restrições PS</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">CLT</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-cltonus" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-cltonus" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">NR7 Art. 7.3.1</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Resultados</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-labresults" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-labresults" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento resultados labs</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-labwait" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-labwait" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Oriento que exame está pendente</button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Retorno</h3>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-followup" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-followup" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Retorno em</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="followup" value="5" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias para</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="followup-reason">
                    <option value="reavaliação e avaliação de exame acima" selected>reaval + resultado exame</option>
                    <option value="reavaliação clínica">reaval</option>
                    <option value="reavaliação em atendimento de livre-demanda se não apresentar sintomas de melhora">reaval se não melhorar</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="plan-bai" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="plan-bai" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">Alta do episódio</button>
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

      <div class="tabs is-centered">
        <ul>
          <li class="is-active">
            <a id="show-unified">
              <span class="icon"><i class="mdi mdi-crop-square" aria-hidden="true"></i></span>
              <span>Unificado</span>
            </a>
          </li>
          <li>
            <a id="show-soap">
              <span class="icon"><i class="mdi mdi-grid-large" aria-hidden="true"></i></span>
              <span>SOAP</span>
            </a>
          </li>
        </ul>
      </div>

      <div id="output-unified">
        <div class="field">
          <div class="control">
            <textarea id="output-uni" class="textarea has-fixed-size" placeholder="Prontuário..." rows="12" readonly></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded">
            <button id="button-uni" class="button is-fullwidth copybtn" data-clipboard-target="#output-uni">Copiar Prontuário</button>
          </div>
        </div>
        <input type="text" class="is-hidden" id="sr-header" value="<?php echo $sr_header; ?>">
      </div>

      <div class="is-hidden" id="output-soap">
        <div class="field">
          <div class="control">
            <textarea id="output-s" class="textarea has-fixed-size" placeholder="Subjetivo" rows="4" readonly></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded">
            <button id="button-s" class="button is-fullwidth copybtn" data-clipboard-target="#output-s">Copiar Subjetivo</button>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <textarea id="output-o" class="textarea has-fixed-size" placeholder="Objetivo" rows="4" readonly></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded">
            <button id="button-o" class="button is-fullwidth copybtn" data-clipboard-target="#output-o">Copiar Objetivo</button>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <textarea id="output-p" class="textarea has-fixed-size" placeholder="Plano" rows="4" readonly></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded">
            <button id="button-p" class="button is-fullwidth copybtn" data-clipboard-target="#output-p">Copiar Plano</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<div class="notification is-info has-text-centered" id="day-notice">
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

<div class="modal" id="family-leave-form">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Afastamento de Familiares</p>
      <button class="delete" aria-label="close"></button>
    </header>

    <section class="modal-card-body">
      <h3 class="title is-5">Dados Pessoais/Responsável</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Quem assina?</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="flf-signer">
              <option value="self" selected>Próprie paciente</option>
              <option value="other">Terceiro/Responsável</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome Paciente</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="flf-name" placeholder="...">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome Responsável</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="flf-name-other" placeholder="..." disabled>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">RG</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-rg" placeholder="##.###.###-@">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CPF</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-cpf" placeholder="###.###.###-##">
            </div>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Residência</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">End.</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="flf-address" placeholder="...">
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Cidade</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-city" placeholder="...">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">UF</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="flf-uf">
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP" selected>SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Bairro</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-shire" placeholder="...">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CEP</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-cep" placeholder="#####-###">
            </div>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Afastamento</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1"># Dias</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="flf-days" min="1" step="1" max="14" placeholder="#">
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Local</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="flf-place">
                  <option value="domiciliar" selected>domiciliar</option>
                  <option value="domiciliar">parque de diversões</option>
                  <option value="domiciliar">mundo da Lua</option>
                  <option value="domiciliar">Terra Média</option>
                  <option value="domiciliar">nos planos de Horror dos Antigos Deuses que residem no vazio das estrelas</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Tipo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="flf-type">
                  <option value="isolamento" selected>Isolamento (p/ doente ou suspeito de)</option>
                  <option value="quarentena">Quarentena (p/ comunicantes)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Parentesco (Responsável)</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="flf-parentage">
              <option value="Sem parentesco (mora junto)" selected>Sem (mora junto)</option>
              <option value="Mãe">Mãe</option>
              <option value="Responsável Legal">Responsável Legal</option>
              <option value="Pai">Pai</option>
              <option value="Filhe">Filhe</option>
              <option value="Avó">Avó</option>
              <option value="Avô">Avô</option>
              <option value="Cônjuge">Cônjuge</option>
              <option value="Amasiade">Amasiade</option>
              <option value="">Outro</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="flf-parentage-other" placeholder="..." disabled>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Comunicantes</h3>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="flf-people" placeholder="Nome das pessoas que moram na mesma casa, separados por vírgula. Exemplo: 'Fulano de Tal, Ciclano da Cilva, Cher'"></textarea>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Signatárie Médice</h3>

      <div class="columns">
        <div class="column is-two-thirds">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nome</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="flf-physician" placeholder="..." value="<?php echo getPhysician(0); ?>">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CRM</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="flf-crm" placeholder="###.###" min="1" step="1" value="<?php echo getPhysician(1); ?>">
            </div>
            <div class="control">
              <div class="select">
                <select id="flf-crm-uf">
                  <option value="AC"<?php echo ( getPhysician(2) == "AC" ) ? " selected" : ""; ?>>AC</option>
                  <option value="AL"<?php echo ( getPhysician(2) == "AL" ) ? " selected" : ""; ?>>AL</option>
                  <option value="AP"<?php echo ( getPhysician(2) == "AP" ) ? " selected" : ""; ?>>AP</option>
                  <option value="AM"<?php echo ( getPhysician(2) == "AM" ) ? " selected" : ""; ?>>AM</option>
                  <option value="BA"<?php echo ( getPhysician(2) == "BA" ) ? " selected" : ""; ?>>BA</option>
                  <option value="CE"<?php echo ( getPhysician(2) == "CE" ) ? " selected" : ""; ?>>CE</option>
                  <option value="DF"<?php echo ( getPhysician(2) == "DF" ) ? " selected" : ""; ?>>DF</option>
                  <option value="ES"<?php echo ( getPhysician(2) == "ES" ) ? " selected" : ""; ?>>ES</option>
                  <option value="GO"<?php echo ( getPhysician(2) == "GO" ) ? " selected" : ""; ?>>GO</option>
                  <option value="MA"<?php echo ( getPhysician(2) == "MA" ) ? " selected" : ""; ?>>MA</option>
                  <option value="MT"<?php echo ( getPhysician(2) == "MT" ) ? " selected" : ""; ?>>MT</option>
                  <option value="MS"<?php echo ( getPhysician(2) == "MS" ) ? " selected" : ""; ?>>MS</option>
                  <option value="MG"<?php echo ( getPhysician(2) == "MG" ) ? " selected" : ""; ?>>MG</option>
                  <option value="PA"<?php echo ( getPhysician(2) == "PA" ) ? " selected" : ""; ?>>PA</option>
                  <option value="PB"<?php echo ( getPhysician(2) == "PB" ) ? " selected" : ""; ?>>PB</option>
                  <option value="PR"<?php echo ( getPhysician(2) == "PR" ) ? " selected" : ""; ?>>PR</option>
                  <option value="PE"<?php echo ( getPhysician(2) == "PE" ) ? " selected" : ""; ?>>PE</option>
                  <option value="PI"<?php echo ( getPhysician(2) == "PI" ) ? " selected" : ""; ?>>PI</option>
                  <option value="RJ"<?php echo ( getPhysician(2) == "RJ" ) ? " selected" : ""; ?>>RJ</option>
                  <option value="RN"<?php echo ( getPhysician(2) == "RN" ) ? " selected" : ""; ?>>RN</option>
                  <option value="RS"<?php echo ( getPhysician(2) == "RS" ) ? " selected" : ""; ?>>RS</option>
                  <option value="RO"<?php echo ( getPhysician(2) == "RO" ) ? " selected" : ""; ?>>RO</option>
                  <option value="RR"<?php echo ( getPhysician(2) == "RR" ) ? " selected" : ""; ?>>RR</option>
                  <option value="SC"<?php echo ( getPhysician(2) == "SC" ) ? " selected" : ""; ?>>SC</option>
                  <option value="SP"<?php echo ( getPhysician(2) == "SP" ) ? " selected" : ""; ?>>SP</option>
                  <option value="SE"<?php echo ( getPhysician(2) == "SE" ) ? " selected" : ""; ?>>SE</option>
                  <option value="TO"<?php echo ( getPhysician(2) == "TO" ) ? " selected" : ""; ?>>TO</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Resultados</h3>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-primary is-fullwidth" id="flf-run">Gerar</button>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="output-flf-454" placeholder="Afastamento de Familiares (Portaria N° 454)" rows="6" readonly></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <button class="button is-fullwidth copybtn" id="copy-flf-454" data-clipboard-target="#output-flf-454">Copiar Afastamento</button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="output-flf-356" placeholder="Termo de Consentimento Livre e Esclarecido (Portaria N° 356)" rows="6" readonly></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <button class="button is-fullwidth copybtn" id="copy-flf-356" data-clipboard-target="#output-flf-356">Copiar TCLE</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="modal-card-foot">
      <p class="help">Baseado nos: Anexo I da
        <a href="https://www.in.gov.br/en/web/dou/-/portaria-n-454-de-20-de-marco-%20de-2020-249091587">Portaria N° 454, de 20 de março de 2020</a>
        (também disponível na sua versão oficial certificada no
        <a href="http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?data=20/03/2020&jornal=613&pagina=1">DOU</a>)
        ; e Anexo I da
        <a href="https://www.in.gov.br/en/web/dou/-/portaria-n-356-de-11-de-marco-de-2020-247538346">Portaria N° 356, de 11 de março de 2020</a>
        (também disponível na sua versão oficial certificada no
        <a href="http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?data=12/03/2020&jornal=515&pagina=185">DOU</a>).
        <br>
        Tanto a
        <a href="https://legislacao.presidencia.gov.br/atos/?tipo=PRT&numero=454&ano=2020&ato=904UTSU5EMZpWT3dc">Portaria N° 454</a>
        como a
        <a href="https://legislacao.presidencia.gov.br/atos/?tipo=PRT&numero=356&ano=2020&ato=462UzYE5EMZpWT958">Portaria N° 356</a>
        não apresentam revogações expressas, segundo averiguação em 26 de maio de 2022. Note que isto é passível de mudança, conforme a progressão das medidas do (des)governo birolirolista.
        <a href="https://twitter.com/TheEconomist/status/1246019795998388224">#elenão</a>
      </p>
    </footer>
  </div>
</div>

<div class="modal" id="go-science-go">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <span class="icon-text">
          <span class="icon">
            <i class="mdi mdi-alert"></i>
          </span>
          <span>Aqui, nós defendemos Ciência!</span>
        </span>
      </p>
    </header>
    <section class="modal-card-body">
      <div class="content">
        <p>
          Não, essa opção <strong>não pode ser desselecionada</strong> pois é sua <strong>OBRIGAÇÃO ÉTICA</strong> (Cap. III, Art. 20, <a href="https://cem.cfm.org.br/#Cap3">Código de Ética Médica, CFM, 2018</a>)
          aderir e orientar paciente das melhores condutas baseadas em evidência científica, e você <em>deveria</em> saber que querer prescrever "Tratamento Precoce" é um ato baseado ou na sua ignorância sobre o
          imenso corpo de literatura contraindicando uso do "kit COVID", ou em sua má-fé para com o bem-estar da população.
        </p>
        <p>
          Se você quiser usar essa ferramenta, essa caixa se manterá selecionada.
        </p>
        <p>
          Se você quiser seguir com o seu delírio esquizofrênico e <strong>privar a população</strong> sob seu cuidado de uma prática baseada nas melhores e mais sólidas evidências científicas disponíveis até o
          momento, <a href="https://www.istoedinheiro.com.br/mpf-defende-que-cfm-seja-obrigado-a-suspender-parecer-a-favor-de-kit-covid/">a porta da</a>
          <a href="https://www12.senado.leg.br/noticias/materias/2021/04/19/especialistas-defendem-comunicacao-ciencia-e-vacina-contra-pandemia">rua é serventia</a>
          <a href="https://www.correiobraziliense.com.br/brasil/2021/10/4953373-cfm-pode-ter-que-pagar-rs-60-mi-por-ajudar-a-disseminar-kit-covid.html"> deste projeto</a>.
        </p>
      </div>

      <figure class="image mx-auto" style="width: 50%;">
        <img src="https://imgs.xkcd.com/comics/science.jpg">
      </figure>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success is-fullwidth" id="accept-science">Vou mitigar minha ignorância</button>
      <a class="button is-fullwidth" href="https://www.jogosgratisparacriancas.com/" target="_self">Quero continuar sendo imbecil</a>
    </footer>
  </div>
</div>

<?php
require_once "footer.php";
?>

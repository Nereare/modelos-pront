<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "pueri";
$subtitle = "Puericultura";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Identificação</h2>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Idade</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="age-years" min="0" max="4" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">a</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="age-months" min="0" max="11" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">m</button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Fenótipo Sexual</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="bio-sex">
                  <option value="" selected>Escolha...</option>
                  <option value="f">Feminino</option>
                  <option value="m">Masculino</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Acompanhante</button>
        </div>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="peer">
              <option value="mãe">Mãe</option>
              <option value="pai">Pai</option>
              <option value="mãe e pai">Mãe e pai</option>
              <option value="avó">Avó</option>
              <option value="tia">Tia</option>
              <option value="cuidador">Cuidador</option>
              <option value="outro">Outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input peer-wtf" id="peer-name" placeholder="Nome do acompanhante" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input peer-wtf" id="peer-relation" placeholder="Relação" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Subjetivo</h2>

      <h3 class="title is-5">Alimentação</h3>

      <div class="columns">
        <div class="column">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-lm" name="feeding">
            <label for="feeding-lm">LM</label>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-formula" name="feeding">
            <label for="feeding-formula">FL</label>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-food" name="feeding">
            <label for="feeding-food">Alimentos</label>
          </div>
        </div>
      </div>

      <div class="is-hidden" id="feeding-lm-difficulty">
        <h3 class="title is-5">Dificuldades LM</h3>

        <div class="field">
          <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-lm" id="feeding-difficulty-lm-suck" name="feeding-difficulty" value="técnica de pega do seio durante mamadas">
          <label for="feeding-difficulty-lm-suck">Pega</label>
        </div>
        <div class="field">
          <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-lm" id="feeding-difficulty-lm-sleep" name="feeding-difficulty" value="criança dorme durante mamadas">
          <label for="feeding-difficulty-lm-sleep">Dorme</label>
        </div>
        <div class="field">
          <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-lm" id="feeding-difficulty-lm-pain" name="feeding-difficulty" value="dor nos seios durante mamadas">
          <label for="feeding-difficulty-lm-pain">Dor</label>
        </div>
      </div>

      <div class="columns is-hidden" id="feeding-fl">
        <div class="column">
          <h3 class="title is-5">Fórmulas</h3>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-nan" name="feeding-amp">
            <label for="feeding-amp-nan">NAN</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-aptamil" name="feeding-amp">
            <label for="feeding-amp-aptamil">Aptamil</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-milupa" name="feeding-amp">
            <label for="feeding-amp-milupa">Milupa</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-nestogeno" name="feeding-amp">
            <label for="feeding-amp-nestogeno">Nestogeno</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-ninho" name="feeding-amp">
            <label for="feeding-amp-ninho">Ninho</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="feeding-amp-lv" name="feeding-amp">
            <label for="feeding-amp-lv">LV</label>
          </div>
        </div>

        <div class="column">
          <h3 class="title is-5">Dificuldades FL</h3>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-danger" id="feeding-amp-thick" name="feeding-amp-thick">
            <label for="feeding-amp-thick"><strong>Usa engrossantes?</strong></label>
          </div>

          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-fl" id="feeding-difficulty-fl-constipation" name="feeding-difficulty" value="criança está ressecada com FL atual">
            <label for="feeding-difficulty-fl-constipation">Constipação</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-fl" id="feeding-difficulty-fl-diarrhea" name="feeding-difficulty" value="criança apresenta amolecimento das fezes com FL atual">
            <label for="feeding-difficulty-fl-diarrhea">Diarreia</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-fl" id="feeding-difficulty-fl-cramps" name="feeding-difficulty" value="criança apresenta cólicas após tomar FL atual">
            <label for="feeding-difficulty-fl-cramps">Cólicas</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-fl" id="feeding-difficulty-fl-thick" name="feeding-difficulty" value="criança não aceita FL sem engrossantes">
            <label for="feeding-difficulty-fl-thick">Cobra engrossantes</label>
          </div>
        </div>
      </div>

      <div class="columns is-hidden" id="feeding-other">
        <div class="column">
          <h3 class="title is-5">Comidas</h3>

          <div class="field">
            <input type="radio" class="is-checkradio" id="feeding-other-papasalgok" name="feeding-other" value="papinha salgada com todos os macronutrientes indicados">
            <label for="feeding-other-papasalgok">Papinha Salgada Adequada</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio" id="feeding-other-papasalgmeh" name="feeding-other" value="papinha salgada com apenas parte dos macronutrientes indicados">
            <label for="feeding-other-papasalgmeh">Papinha Salgada Inadequada</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio" id="feeding-other-papadoce" name="feeding-other" value="apenas papinha doce">
            <label for="feeding-other-papadoce">Papinha Doce Apenas</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio" id="feeding-other-comidapedacos" name="feeding-other" value="comida com pedaços">
            <label for="feeding-other-comidapedacos">Comida com Pedaços</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio" id="feeding-other-comidacasa" name="feeding-other" value="comida de casa">
            <label for="feeding-other-comidacasa">Comida de Casa</label>
          </div>
        </div>

        <div class="column">
          <h3 class="title is-5">Dificuldades Comida</h3>

          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-other" id="feeding-difficulty-other-picky" name="feeding-difficulty" value="criança é bastante seletiva com seus alimentos">
            <label for="feeding-difficulty-other-picky">Seletiva</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-other" id="feeding-difficulty-other-noveg" name="feeding-difficulty" value="criança não aceita comer vegetais">
            <label for="feeding-difficulty-other-noveg">Sem vegetais</label>
          </div>
          <div class="field">
            <input type="checkbox" class="is-checkradio is-warning feeding-difficulty-other" id="feeding-difficulty-other-bored" name="feeding-difficulty" value="criança se recusa a comer comida de verdade e leva parentes a lhe oferecerem lanches e doces no lugar de alimentos">
            <label for="feeding-difficulty-other-bored">"Não come" + come tranqueiras</label>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Dispositivos</h3>

      <div class="field">
        <input type="checkbox" class="is-checkradio is-warning" id="device1" name="devices" value="chupeta">
        <label for="device1">Chupeta</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio is-warning" id="device2" name="devices" value="mamadeira">
        <label for="device2">Mamadeira</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio is-success" id="device3" name="devices" value="copinho">
        <label for="device3">Copinho</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio is-danger" id="device4" name="devices" value="andador">
        <label for="device4">Andador</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio is-warning" id="device5" name="devices" value="celular">
        <label for="device5">Celular</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio is-warning" id="device6" name="devices" value="tablet">
        <label for="device6">Tablet</label>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Fraldas</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="diaper">
              <option value="continuamente" selected>24/7</option>
              <option value="apenas para dormir e sair para consultas">Para dormir</option>
              <option value="eventualmente, passando a maior parte do tempo sem fraldas">Eventualmente</option>
              <option value="cessado">Cessou</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Extra-Domiciliar</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Escola</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="school">
              <option value="nega que paciente frequente creche ou escola" selected>Não frequenta</option>
              <option value="refere que paciente está frequentando creche (CEI)">CEI</option>
              <option value="refere que paciente está frequentando escola infantil (EMEI/EEEI)">EMEI</option>
              <option value="refere que paciente está frequentando escola">Escola</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">no</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="school-year" min="1" max="9" step="1" placeholder="#" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">ano</button>
        </div>
      </div>

      <h4 class="title is-6">Outras Atividades</h4>

      <div class="field">
        <input type="checkbox" class="is-checkradio" id="not-school1" name="not-school" value="atividades esportivas">
        <label for="not-school1">Esportes</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio" id="not-school2" name="not-school" value="atividades coletivas de artes plásticas">
        <label for="not-school2">Artes</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio" id="not-school3" name="not-school" value="aulas de música/instrumentos musicais">
        <label for="not-school3">Música</label>
      </div>
      <div class="field">
        <input type="checkbox" class="is-checkradio" id="not-school4" name="not-school" value="brincadeiras de rua com amigos">
        <label for="not-school4">Brinca na rua</label>
      </div>

      <h3 class="title is-5">Anamnese</h3>

      <div class="field">
        <input type="checkbox" class="is-checkradio" id="symp1" name="symps" value="soluços">
        <label for="symp1">Soluços</label>
        <input type="checkbox" class="is-checkradio" id="symp2" name="symps" value="bolinhas na pele">
        <label for="symp2">Bolinhas na Pele</label>
        <input type="checkbox" class="is-checkradio" id="symp3" name="symps" value="refluxo sem tosse ou engasgos">
        <label for="symp3">Refluxo Fisiológico</label>
        <input type="checkbox" class="is-checkradio" id="symp4" name="symps" value="cólica sem sinais de alarme">
        <label for="symp4">Cólicas Fisiológicas</label>
        <input type="checkbox" class="is-checkradio" id="symp5" name="symps" value="gases">
        <label for="symp5">Gases</label>
        <input type="checkbox" class="is-checkradio" id="symp6" name="symps" value="constipação">
        <label for="symp6">Constipação</label>
        <input type="checkbox" class="is-checkradio" id="symp7" name="symps" value="cólicas eventuais manifestadas como contrações físicas com pouco ou nenhum choro">
        <label for="symp7">Cólicas benignas</label>
        <input type="checkbox" class="is-checkradio" id="symp8" name="symps" value="cólicas recorrentes com dor importante e choro incoercível">
        <label for="symp8">Cólicas c/ alarme</label>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="othersymps" placeholder="Insira outros sintomas aqui. O texto aqui inserido não será processado." rows="4"></textarea>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Exame Físico</h2>

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

      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="activity">
              <option value="Ative" selected>Ative</option>
              <option value="Hipoative">Hipoative</option>
              <option value="Sonolente">Sonolente</option>
              <option value="Comatose">Comatose</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">e</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="reactivity">
              <option value="reative" selected>reative</option>
              <option value="hiporreative">hiporreative</option>
              <option value="arreative">arreative</option>
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

      <h3 class="title is-5">Fontanelas</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Anterior</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="fontanelle-ant">
              <option value="aberta" selected>aberta</option>
              <option value="fechada">fechada</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="fontanelle-ant-width" min="1" step="1" placeholder="Largura">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">cm) e</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="fontanelle-ant-tension">
              <option value="normotensa" selected>normotensa</option>
              <option value="abaulada">abaulada</option>
              <option value="funda">funda</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Posterior</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="fontanelle-post">
              <option value="aberta">aberta</option>
              <option value="fechada" selected>fechada</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="fontanelle-post-width" min="1" step="1" placeholder="Largura" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">cm) e</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="fontanelle-post-tension">
              <option value="normotensa" selected>normotensa</option>
              <option value="abaulada">abaulada</option>
              <option value="funda">funda</option>
            </select>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-eye mdi-24px"></i>
            </span>
          </p>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Estrabismo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="eyes">
                  <option value="Sem sinais de estrabismo" selected>ausente</option>
                  <option value="Observa-se estrabismo">presente</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Estrabismo</button>
            </div>
            <div class="control">
              <div class="select">
                <select class="eyes-strab" id="eyes-strab-plane" disabled>
                  <option value="horizontal" selected>horiz</option>
                  <option value="vertical">vert</option>
                </select>
              </div>
            </div>
            <div class="control">
              <div class="select">
                <select class="eyes-strab" id="eyes-strab-type" disabled>
                  <option value="convergente" selected>conv</option>
                  <option value="divergente">div</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">,</button>
            </div>
            <div class="control">
              <div class="select">
                <select class="eyes-strab" id="eyes-strab-fix" disabled>
                  <option value="fixo" selected>fixo</option>
                  <option value="posição-dependente">posição-dep.</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">e</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select class="eyes-strab" id="eyes-strab-side" disabled>
                  <option value="simétrico" selected>simétrico</option>
                  <option value="pior à direita">D > E</option>
                  <option value="pior à esquerda">D < E</option>
                </select>
              </div>
            </div>
          </div>

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

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-fingerprint mdi-24px"></i>
            </span>
          </p>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Hidratação</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="skin-hydro">
                  <option value="com hidratação preservada" selected>adequada</option>
                  <option value="levemente xeratótica">levemente xeratótica</option>
                  <option value="com xeratose moderada">moderadamente xeratótica</option>
                  <option value="intensamente xeratótica mas sem feridas">muito xeratótica, sem feridas</option>
                  <option value="intensamente xeratótica com lesões secundárias de coçadura">muito xeratótica, coçadura</option>
                  <option value="intensamente xeratótica com lesões secundárias de coçadura além de feridas com quebra de barreira cutânea">Muito xeratótica, coçadura + feridas</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Descamação</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="skin-desquamation">
                  <option value="descamação ausente" selected>ausente</option>
                  <option value="descamação leve">leve</option>
                  <option value="descamação moderada">moderada</option>
                  <option value="descamação intensa">intensa</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Mancha mongólica</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="skin-mongolic">
                  <option value="" selected>ausente</option>
                  <option value="presença de mancha mongólica">PRESENTE</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Lanugo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="skin-lanugo">
                  <option value="" selected>ausente</option>
                  <option value="presença de lanugo">PRESENTE</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="skin-other" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-lungs mdi-24px"></i>
            </span>
          </p>
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

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Tiragens</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="disconfort">
                  <option value="ausentes" selected>ausentes</option>
                  <option value="presentes subcostalmente">presentes subcostalmente</option>
                  <option value="subcostal e intercostal">subcostal e intercostal</option>
                  <option value="sobcostal, intercostal e de fúrcula">sobcostal, intercostal e de fúrcula</option>
                  <option value="sobcostal, intercostal, de fúrcula e batimento de asas de nariz">sobcostal, intercostal, de fúrcula e batimento de asas de nariz</option>
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
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-heart-pulse mdi-24px"></i>
            </span>
          </p>
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
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-stomach mdi-24px"></i>
            </span>
          </p>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Abdome</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="tummy-format">
                  <option value="plano">Plano</option>
                  <option value="semigloboso" selected>Semigloboso</option>
                  <option value="globoso">Globoso</option>
                  <option value="em batráquio">Batráquio</option>
                  <option value="escavado">Escavado</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">,</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="tummy-tension">
                  <option value="flácido" selected>Flácido</option>
                  <option value="tenso">Tenso</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">e</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="tummy-pain">
                  <option value="indolor" selected>indolor</option>
                  <option value="levemente doloroso">levemente doloroso</option>
                  <option value="doloroso e com defesa">doloroso e com defesa</option>
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
                <select id="tummy-tumors">
                  <option value="sem massas palpáveis superficial ou profundamente" selected>&empty;</option>
                  <option value="com ">com...</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="tummy-tumor-desc" placeholder="descrição de massa/s palpável/is" disabled>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Lojas renais</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="tummy-kidneys">
                  <option value="livres" selected>livres</option>
                  <option value="com massa à esquerda">com massa à esquerda</option>
                  <option value="com massa à direita">com massa à direita</option>
                  <option value="com massas bilateralmente">com massas bilateralmente</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Coto Umbilical</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="tummy-cord">
                  <option value="com coto umbilical presente e úmido">presente e úmido</option>
                  <option value="com coto umbilical presente e mumificado">presente e mumificado</option>
                  <option value="sem coto umbilical" selected>ausente</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Cicatriz Umbilical</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select class="tummy-button-misc" id="tummy-button-desc">
                  <option value="sem hérnia umbilical palpável">sem hérnia</option>
                  <option value="com anel herniário palpável de" selected>com hérnia de</option>
                </select>
              </div>
            </div>
            <div class="control">
              <input type="number" class="input tummy-button-misc" id="tummy-button-width" min="1" step="0.5" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea class="textarea has-fixed-size" id="abdomen-other" placeholder="Descreva outros achados..." rows="2"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="columns is-vcentered">
        <div class="column is-1">
          <p>
            <span class="icon">
              <i class="mdi mdi-download mdi-24px"></i>
            </span>
          </p>
        </div>

        <div class="column">
          <div class="level perineum-notice">
            <p class="level-item has-text-centered has-text-weight-medium">
              Escolha o fenótipo sexual em Identificação!
            </p>
          </div>

          <div class="field has-addons is-hidden perineum-m">
            <div class="control">
              <button class="button is-static" tabindex="-1">Testículos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="perineum-m-testies">
                  <option value="tópicos" selected>tópicos</option>
                  <option value="direito tópico e esquerdo ectópico">direito tópico e esquerdo ectópico</option>
                  <option value="direito ectópico e esquerdo tópico">direito ectópico e esquerdo tópico</option>
                  <option value="ambos ectópicos">ambos ectópicos</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons is-hidden perineum-m">
            <div class="control">
              <button class="button is-static" tabindex="-1">Fimose</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="perineum-m-phimosis">
                  <option value="presente" selected>presente</option>
                  <option value="ausente">ausente</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons is-hidden perineum-f">
            <div class="control">
              <button class="button is-static" tabindex="-1">Sinéquias</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="perineum-f-sineq">
                  <option value="ausentes" selected>ausentes</option>
                  <option value="presentes">presentes</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons is-hidden perineum-both">
            <div class="control">
              <button class="button is-static" tabindex="-1">Dermatite</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="perineum-other">
                  <option value="Sem sinais de dermatite" selected>ausente</option>
                  <option value="Com dermatite urêmica leve">urêmica leve</option>
                  <option value="Com dermatite urêmica moderada">urêmica moderada</option>
                  <option value="Com dermatite urêmica intensa">urêmica intensa</option>
                  <option value="Com vesículas de conteúdo seroso e halo hiperemiado">herpes ativa</option>
                  <option value="Com lesão descamativa hiperemiada, com bordas mais hiperemiadas e centro mais descamativo">tínea de períneo</option>
                  <option value="outro">com...</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="perineum-other-desc" placeholder="Descreva lesão perineal..." disabled>
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
                <select id="exam-oro-pharynx">
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
                <select id="exam-oro-tonsils">
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
                <select id="exam-oro-tonsilcover">
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
                <select id="exam-oro-palate">
                  <option value="centralizado, sem desvio" selected>nl</option>
                  <option value="com desvio à direita">desvio D</option>
                  <option value="com desvio à esquerda">desvio E</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Gengivas</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="exam-teeth-gums">
                  <option value="sem hiperemia" selected>sem hiperemia</option>
                  <option value="com hiperemia sugestiva de erupção dentária">com hiperemia por erupção dentária</option>
                  <option value="com hiperemia não sugestiva de erupção dentária">com hiperemia outra</option>
                </select>
              </div>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">,</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-teeth-teeth">
                  <option value="dentes ausentes" selected>dentes ausentes</option>
                  <option value="alguns dentes presentes">alguns dentes presentes</option>
                  <option value="vários dentes presentes">vários dentes presentes</option>
                  <option value="arcada dentária infantil completa">arcada dentária infantil completa</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Estado Dentário</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="exam-teeth-cavity" disabled>
                  <option value="" selected>escolha estado dentário...</option>
                  <option value=", com dentes em bom aspecto de conservação">conservação adequada</option>
                  <option value=", com aspecto de conservação comprometido mas sem sinais de cariação">conservação comprometida / sem cariação</option>
                  <option value=", com aspecto de conservação comprometido e sinais de cariação">conservação comprometida / COM cariação</option>
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

      <h3 class="title is-5">Antropometria</h3>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Peso</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="weight" placeholder="# g" required>
            </div>
            <div>
              <button class="button is-static" tabindex="-1">g</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Estatura</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="height" placeholder="# cm" required>
            </div>
            <div>
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">IMC</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="bmi" placeholder="# kg/m²" readonly required>
            </div>
            <div>
              <button class="button is-static" tabindex="-1">kg/m²</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">PC</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="pc" placeholder="# cm" required>
            </div>
            <div>
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">z-Escore (Peso)</button>
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth has-text-weight-medium" id="z-weight" tabindex="-1">...</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">z-Escore (Estatura)</button>
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth has-text-weight-medium" id="z-height" tabindex="-1">...</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">z-Escore (IMC)</button>
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth has-text-weight-medium" id="z-bmi" tabindex="-1">...</button>
            </div>
          </div>
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">z-Escore (PC)</button>
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth has-text-weight-medium" id="z-pc" tabindex="-1">...</button>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title is-6">Crescimento</h4>

      <div class="columns is-vcentered">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Última Consulta</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="last-weight-date">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Último Peso</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="last-weight" min="0" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">g</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Vacinas</h2>

      <table class="table is-striped is-hoverable is-fullwidth" id="vax-table">
        <thead>
          <tr>
            <th>Idade</th>
            <th>Penta</th>
            <th>VIP</th>
            <th>Pneumo 10V</th>
            <th>Rota</th>
            <th>Meningo C</th>
            <th>FA</th>
            <th>SCR</th>
            <th>Varicela</th>
            <th>HAV</th>
            <th>HPV</th>
            <th>ACWY</th>
          </tr>
        </thead>
        <tbody>
          <tr class="vax 2">
            <td>2m</td>
            <td>1ª</td>
            <td>1ª</td>
            <td>1ª</td>
            <td>1ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 3">
            <td>3m</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 4">
            <td>4m</td>
            <td>2ª</td>
            <td>2ª</td>
            <td>2ª</td>
            <td>2ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 5">
            <td>5m</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>2ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 6">
            <td>6m</td>
            <td>3ª</td>
            <td>3ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 9">
            <td>9m</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 12">
            <td>1a</td>
            <td></td>
            <td></td>
            <td>Ref</td>
            <td></td>
            <td>Ref</td>
            <td></td>
            <td>2ª</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 15">
            <td>1 <sup>3</sup>/<sub>12</sub> a</td>
            <td>DTP</td>
            <td>VOP</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Ref</td>
            <td>1ª</td>
            <td>1ª</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 48">
            <td>4a</td>
            <td>DTP</td>
            <td>VOP</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>2ª</td>
            <td>Ref</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="vax 60">
            <td>5 a 6a</td>
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
            <td>DU</td>
          </tr>
          <tr class="vax 108">
            <td>9 ou 11a</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>2 Doses</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box">
      <h2 class="title is-4">Avaliação</h2>

      <div class="content">
        <ol>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Crescimento</button>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  <strong id="growth-adequacy">(preencha dados de crescimento acima, em Objetivo!)</strong>
                </button>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">(<span id="growth-rate">...</span>g/d)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Estatura</button>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" id="stature-adequacy" tabindex="-1">
                  (preencha dados de estatura acima, em Objetivo!)
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Vacinação</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="vaxx">
                    <option value="em dia" selected>em dia</option>
                    <option value="ATRASADA">atrasada</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">desde os</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="vaxx-late-month" min="0" step="1" placeholder="#" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">meses</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Alimentação</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="feeding-adequacy">
                    <option value="adequada" selected>adequada</option>
                    <option value="sob vigilância">sob vigilância</option>
                    <option value="INADEQUADA">inadequada</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">(</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="feeding-adequacy-why" placeholder="Qual a inadequação?" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">DNPM</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="dnpm">
                    <option value="adequado" selected>adequado</option>
                    <option value="com ATRASO">com atraso</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Ambiente</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="context">
                    <option value="adequado" selected>adequado</option>
                    <option value="sob vigilância">sob vigilância</option>
                    <option value="INADEQUADO">inadequado</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">(</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="context-why" placeholder="Qual a inadequação?" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">)</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field">
              <div class="control">
                <textarea class="textarea has-fixed-size" id="dx" placeholder="Inclua aqui outros diagnósticos, separados por VÍRGULA." rows="2"></textarea>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Condutas</h2>

      <div class="content">
        <ol>
          <h3 class="title is-5">Prescrições</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med1" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Adtil
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med2" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Pomada de assadura
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med3" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  FeSO<sub>4</sub>
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med4" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med4" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="p-medother" placeholder="Outras medicações">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Vacinas</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-vax" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-vax" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Levo para&nbsp;<strong>atualizar</strong>&nbsp;vacinas
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-vaxori" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-vaxori" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Oriento procurar sala de vacina
                </button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Exames</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labs" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labs" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Solicito</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="p-labs-what" placeholder="Quais exames">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">para</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="p-labs-why" placeholder="Justificativa">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Orientações Alimentares</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed1" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Reforço AME
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed2" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Reforço AM mesmo com outros alimentos
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed3" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Oriento preparo de LV
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed4" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed4" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Oriento FLs
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed5" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed5" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Oriento cortar engrossantes
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed6" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed6" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Composição e preparo de papinhas
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-feed7" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-feed7" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Alimentos de risco
                </button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Orientações</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori1" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori1" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Hidratação cutânea
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori2" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori2" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Sinais para busca de acolhimento
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori3" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori3" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Sinais para busca de SR
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori4" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori4" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  LN com SF 0,9%
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori5" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori5" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Maizena/Pasta D'Água para assadura
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori6" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori6" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Medidas ambientais para prevenção de picadas de insetos
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori7" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori7" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Prevenção 4<sup>ternária</sup>&nbsp;sobre exames
                </button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Atestados</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-leave" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-leave" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Atesto para</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="p-leave-days" min="1" step="1" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias</button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-leave-wpeer" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-leave-wpeer" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Atesto para</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="p-leave-wpeer-days" min="1" step="1" placeholder="#">
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">dias, incluindo responsável</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="p-leave-peer" placeholder="Nome do responsável">
              </div>
            </div>
          </li>

          <h3 class="title is-5">Outros</h3>

          <li>
            <div class="field">
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Tiro dúvidas
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Retorno em</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="p-return-num" min="1" step="1" placeholder="#" value="1">
              </div>
              <div class="control">
                <div class="select">
                  <select id="return-time">
                    <option value="dia(s)">dias</option>
                    <option value="semana(s)">semanas</option>
                    <option value="mês(es)" selected>meses</option>
                    <option value="ano(s)">anos</option>
                    <option value="após pandemia">após pandemia</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">com</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="return-who">
                    <option value="comigo">comigo</option>
                    <option value="com equipe" selected>com equipe</option>
                    <option value="com equipe de referência para retomada de seguimento">com equipe de referência</option>
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

      <div class="field">
        <div class="control">
          <button class="button is-primary is-fullwidth" id="button-run">Gerar</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-s" placeholder="Subjetivo" rows="6"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-fullwidth copybtn" id="button-s" data-clipboard-target="#output-s">Copiar Subjetivo</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-o" placeholder="Objetivo" rows="6"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-fullwidth copybtn" id="button-o" data-clipboard-target="#output-o">Copiar Objetivo</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-a" placeholder="Avaliação" rows="6"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-fullwidth copybtn" id="button-a" data-clipboard-target="#output-a">Copiar Avaliação</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-p" placeholder="Plano" rows="6"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-fullwidth copybtn" id="button-p" data-clipboard-target="#output-p">Copiar Plano</button>
        </div>
      </div>
    </div>

    <div class="box is-hidden" id="leave-form">
      <h2 class="title is-4">Atestado</h2>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nome Paciente</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="lf-name" placeholder="Nome do paciente">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nome Acompanhante</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="lf-peer" placeholder="Responsável" readonly>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CNS Paciente</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="lf-cns" placeholder="CNS">
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Dias</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="lf-days" placeholder="Dias" readonly>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary is-fullwidth" id="lf-run">Gerar</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-lf" placeholder="Atestado com Responsável" rows="6" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-fullwidth copybtn" id="copy-lf" data-clipboard-target="#output-lf">Copiar Atestado</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

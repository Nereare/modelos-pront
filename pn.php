<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "pn";
$subtitle = "Pré-Natal";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Identificação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Idade</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="age" placeholder="#" required autofocus>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">anos</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">G</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-g" placeholder="#" required>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">P</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pn" placeholder="#" required>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">C</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pc" placeholder="#" required>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">A</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-a" placeholder="#" required>
        </div>
      </div>

      <h3 class="title is-5">IG</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">DUM</button>
        </div>
        <div class="control is-expanded">
          <input type="date" class="input" id="lmp" required>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">1º USG</button>
        </div>
        <div class="control is-expanded">
          <input type="date" class="input" id="usg-date">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">IG USG</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="usg-weeks" min="1" step="1" placeholder="# sem">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">+</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="usg-days" min="0" max="6" step="1" placeholder="# d">
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="level">
        <p class="level-item has-text-centered" id="ig-pelem">
          <strong><span id="w">X</span></strong>
          <strong><sup id="d">Y</sup></strong>/<sub>7</sub>
          sem
          <span class="is-hidden" id="errodedata">
            <img src="assets/errodata.svg" alt="Erro de Data">
          </span>
        </p>
      </div>
      <p class="is-hidden" id="ig"></p><p class="is-hidden" id="ig-dx"></p>
    </div>

    <div class="box">
      <h2 class="title is-4">Subjetivo</h2>

      <h3 class="title is-5">Sintomas Comuns</h3>

      <div class="field">
        <div class="control">
          <input type="checkbox" class="is-checkradio" id="minsymp1" name="minsymps" value="enjoos">
          <label for="minsymp1">Enjoos</label>
          <input type="checkbox" class="is-checkradio" id="minsymp2" name="minsymps" value="azia">
          <label for="minsymp2">Azia</label>
          <input type="checkbox" class="is-checkradio" id="minsymp3" name="minsymps" value="cefaleia">
          <label for="minsymp3">Cefaleia</label>
          <input type="checkbox" class="is-checkradio" id="minsymp4" name="minsymps" value="lombalgia">
          <label for="minsymp4">Lombalgia</label>
          <input type="checkbox" class="is-checkradio" id="minsymp5" name="minsymps" value="dor em pés">
          <label for="minsymp5">Dor em pés</label>
          <input type="checkbox" class="is-checkradio" id="minsymp6" name="minsymps" value="dor em pernas">
          <label for="minsymp6">Dor em pernas</label>
          <input type="checkbox" class="is-checkradio" id="minsymp7" name="minsymps" value="inchaço em pés">
          <label for="minsymp7">Inchaço em pés</label>
          <input type="checkbox" class="is-checkradio" id="minsymp8" name="minsymps" value="inchaço em pernas">
          <label for="minsymp8">Inchaço em pernas</label>
          <input type="checkbox" class="is-checkradio" id="minsymp9" name="minsymps" value="inchaço em mãos">
          <label for="minsymp9">Inchaço em mãos</label>
          <input type="checkbox" class="is-checkradio" id="minsymp10" name="minsymps" value="cólicas">
          <label for="minsymp10">Cólicas</label>
          <input type="checkbox" class="is-checkradio" id="minsymp11" name="minsymps" value="contrações">
          <label for="minsymp11">Contrações</label>
          <input type="checkbox" class="is-checkradio" id="minsymp12" name="minsymps" value="hemorroidas">
          <label for="minsymp12">Hemorroidas</label>
          <input type="checkbox" class="is-checkradio" id="minsymp13" name="minsymps" value="dor anal">
          <label for="minsymp13">Dor Anal</label>
          <input type="checkbox" class="is-checkradio" id="minsymp14" name="minsymps" value="varizes">
          <label for="minsymp14">Varizes</label>
          <input type="checkbox" class="is-checkradio" id="minsymp15" name="minsymps" value="estrias">
          <label for="minsymp15">Estrias</label>
          <input type="checkbox" class="is-checkradio" id="minsymp16" name="minsymps" value="constipação">
          <label for="minsymp16">Constipação</label>
        </div>
      </div>

      <div class="notification is-info is-light is-hidden" id="cramps-desc">
        <h4 class="title is-6">Contrações</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Frequência</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="cramps">
                <option value="esparsas e poucas vezes por dia" id="cramps-null" selected>Esparsas</option>
                <option value="irregulares, com espaço de horas entre elas, mas várias vezes por dia">Algumas horas de intervalo</option>
                <option value="de hora em hora">A cada hora</option>
                <option value="rítmicas e próximas, a cada ">Rítmicas e próximas</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons is-hidden" id="cramps-time-desc">
          <div class="control">
            <button class="button is-static" tabindex="-1">Intervalo</button>
          </div>
          <div class="control is-expanded">
            <input type="number" class="input" id="cramps-time" min="1" max="60" placeholder="#">
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">min</button>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Sintomas Outros</h3>

      <div class="field">
        <div class="control">
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp1" name="medsymps" value="vômitos recorrentes">
          <label for="medsymp1">Vômitos recorrentes</label>
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp2" name="medsymps" value="perda de líquido claro">
          <label for="medsymp2">Perda de líquido claro</label>
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp3" name="medsymps" value="contrações frequentes">
          <label for="medsymp3">Contrações frequentes</label>
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp4" name="medsymps" value="que feto não se move">
          <label for="medsymp4">Feto não se move</label>
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp5" name="medsymps" value="inchaço em rosto">
          <label for="medsymp5">Inchaço em rosto</label>
          <input type="checkbox" class="is-checkradio is-warning" id="medsymp6" name="medsymps" value="disúria">
          <label for="medsymp6">Disúria</label>
        </div>
      </div>

      <h3 class="title is-5">Sintomas de Alarme</h3>

      <div class="field">
        <div class="control">
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp1" name="redsymps" value="sangramento vaginal">
          <label for="redsymp1">Sangramento vaginal</label>
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp2" name="redsymps" value="perda de partes fetais">
          <label for="redsymp2">Perda de partes fetais</label>
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp3" name="redsymps" value="escotomas visuais">
          <label for="redsymp3">Escotomas visuais</label>
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp4" name="redsymps" value="vômitos incoercíveis">
          <label for="redsymp4">Vômitos incoercíveis</label>
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp5" name="redsymps" value="dor abdominal atípica">
          <label for="redsymp5">Dor abdominal atípica</label>
          <input type="checkbox" class="is-checkradio is-danger" id="redsymp6" name="redsymps" value="parada de movimentação fetal há mais de 24 horas">
          <label for="redsymp6">Parada de MF &gt;24h</label>
        </div>
      </div>

      <h3 class="title is-5">Corrimentos</h3>

      <div class="columns is-vcentered">
        <div class="column is-1">
          <input type="checkbox" class="is-checkradio" id="disch" value="true">
          <label for="disch"></label>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Corrimento</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="disch-desc" disabled>
                  <option value="fisiológico">fisiológico</option>
                  <option value="pruriginoso">pruriginoso</option>
                  <option value="com odor fétido">com odor fétido</option>
                  <option value="pruriginoso e com odor fétido">pruriginoso e com odor fétido</option>
                  <option value="com aspecto de tampão mucoso">com aspecto de tampão mucoso</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Outros Sintomas</h3>

      <textarea class="textarea has-fixed-size" id="othersymps" placeholder="Adicionar outros dados clínicos. Estes dados clínicos serão incluídos sem processamento!" rows="6"></textarea>
    </div>

    <div class="box">
      <h2 class="title is-4">Objetivo / Exame Físico</h2>

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
        <input class="is-checkradio is-success" type="radio" id="oedema-normal" name="oedema" value="sem edema" checked>
        <label for="oedema-normal">Sem Edema</label>
        <input class="is-checkradio is-success" type="radio" id="oedema-one" name="oedema" value="1">
        <label for="oedema-one">&plus;</label>
        <input class="is-checkradio is-warning" type="radio" id="oedema-two" name="oedema" value="2">
        <label for="oedema-two">&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="oedema-three" name="oedema" value="3">
        <label for="oedema-three">&plus;&plus;&plus;</label>
        <input class="is-checkradio is-danger" type="radio" id="oedema-four" name="oedema" value="4">
        <label for="oedema-four">&plus;&plus;&plus;&plus;</label>
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

      <h3 class="title is-5">Antropometria</h3>

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
              <input type="number" id="pas" class="input" min="1" step="2" placeholder="PAS" required>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded has-icons-right">
              <input type="number" id="pad" class="input" min="1" step="2" placeholder="PAD" required>
              <span class="icon is-right">
                <i class="mdi mdi-help-circle mdi-24px"></i>
              </span>
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
              <input type="number" id="weight" class="input" min="0" step="0.1" placeholder="#" required>
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
              <input type="number" id="height" class="input" min="1" step="1" placeholder="#" required>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">IMC</button>
            </div>
            <div class="control is-expanded has-icons-right">
              <input type="number" id="bmi" class="input" placeholder="#" readonly>
              <span class="icon is-right">
                <i class="mdi mdi-help-circle mdi-24px"></i>
              </span>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">kg/m<sup>2</sup></button>
            </div>
          </div>
        </div>
      </div>

      <p class="is-hidden" id="bmi-dx"></p>

      <h3 class="title is-5">Obstétrico</h3>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">AU</button>
            </div>
            <div class="control is-expanded has-icons-right">
              <input type="number" class="input" id="obs-au" min="1" step="1" placeholder="#">
              <span class="icon is-right">
                <i class="mdi mdi-help-circle mdi-24px"></i>
              </span>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">cm</button>
            </div>
          </div>

          <span class="is-hidden" id="obs-au-dx"></span>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">BCF</button>
            </div>
            <div class="control is-expanded has-icons-right">
              <input type="number" class="input" id="obs-bcf" min="1" step="1" placeholder="#">
              <span class="icon is-right">
                <i class="mdi mdi-help-circle mdi-24px"></i>
              </span>
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">bpm</button>
            </div>
          </div>
        </div>

        <span class="is-hidden" id="obs-bcf-dx"></span>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Apres.</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="obs-pos">
                  <option value="indiferente" selected>indiferente</option>
                  <option value="cefálica">cefálica</option>
                  <option value="pélvica">pélvica</option>
                  <option value="córmica">córmica</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="obs-side">
                  <option value="" selected>indiferente</option>
                  <option value=" esquerda">esquerda</option>
                  <option value=" direita">direita</option>
                  <option value=" posterior">posterior</option>
                  <option value=" anterior">anterior</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">MF</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="obs-mf">
                  <option value="presente" selected>presente</option>
                  <option value="ausente">ausente</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Geral</h3>

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

      <h3 class="title is-5">Ginecológico</h3>

      <div class="columns is-vcentered">
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="exam-gyn-insp">
            <label for="exam-gyn-insp">
              <span class="icon">
                <i class="mdi mdi-eye mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Trofismo e Pilificação</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-insp-troph" id="gyn-insp-troph">
                  <option value="adequados" selected>adequados</option>
                  <option value="diminuídos">diminuídos</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">para idade</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Introito Vaginal</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-insp-hyperemia" id="gyn-insp-hyperemia">
                  <option value="Ausência de hiperemia" selected>ausência de hiperemia</option>
                  <option value="Hiperemia leve">hiperemia leve</option>
                  <option value="Hiperemia moderada">hiperemia moderada</option>
                  <option value="Hiperemia intensa">hiperemia intensa</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-insp-fluids" id="gyn-insp-fluids">
                  <option value="Sem saída de fluidos" selected>sem saída de fluidos</option>
                  <option value="Saída de mínima quatidade de secreção fisiológia">com saída de mínima quatidade de secreção fisiológia</option>
                  <option value="Saída de moderada quatidade de secreção fisiológia">com saída de moderada quatidade de secreção fisiológia</option>
                  <option value="Saída de sangue">com saída de sangue</option>
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
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="exam-gyn-spec">
            <label for="exam-gyn-spec">
              <span class="icon">
                <i class="mdi mdi-alphabet-aurebesh mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Trofismo e Vilificação</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-troph" id="gyn-spec-troph">
                  <option value="adequados" selected>adequados</option>
                  <option value="diminuídos">diminuídos</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1"> para idade</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-hyperemia" id="gyn-spec-hyperemia">
                  <option value="Ausência de hiperemia" selected>Ausência de hiperemia</option>
                  <option value="Hiperemia leve">Hiperemia leve</option>
                  <option value="Hiperemia moderada">Hiperemia moderada</option>
                  <option value="Hiperemia intensa">Hiperemia intensa</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">de canal vaginal</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Secreções</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-fluids" id="gyn-spec-fluids">
                  <option value="Presença de mínima quantidade de secreção" selected>mínima</option>
                  <option value="Presença de moderada quantidade de secreção">moderada</option>
                  <option value="Presença de grande quantidade de secreção">volumosa</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">de secreção</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-fluids-desc" id="gyn-spec-fluids-desc">
                  <option value="fisiológica" selected>fisiológica</option>
                  <option value="líquida e translúcida">líquida e translúcida</option>
                  <option value="branco-grumosa">branco-grumosa</option>
                  <option value="purulenta">purulenta</option>
                  <option value="purulenta acinzentada">purulenta acinzentada</option>
                  <option value="purulenta com bolhas">purulenta com bolhas</option>
                  <option value="purulenta acinzentada e com bolhas">purulenta acinzentada e com bolhas</option>
                  <option value="sanguinolenta">sanguinolenta</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">em fundo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-fluids-exit" id="gyn-spec-fluids-exit">
                  <option value="sem saída por orifício externo de colo uterino observável ao exame" selected>SEM saída por OEC</option>
                  <option value="e observa-se saída ativa dessa secreção por oríficio externo de colo uterino ao exame">COM saída por OEC</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Colo Uterino</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-spec-cervix" id="gyn-spec-cervix">
                  <option value="observável e posteriorizado">observável e posteriorizado</option>
                  <option value="observável e medianizado">observável e medianizado</option>
                  <option value="observável e anteriorizado">observável e anteriorizado</option>
                  <option value="não observável">não observável</option>
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
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="exam-gyn-touch">
            <label for="exam-gyn-touch">
              <span class="icon">
                <i class="mdi mdi-cursor-pointer mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Colo</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-cervixthick" id="gyn-touch-cervixthick">
                  <option value="grosso" selected>grosso</option>
                  <option value="parcialmente amolecido">&half; amolecido</option>
                  <option value="totalmente amolecido">amolecido</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-cervixpos" id="gyn-touch-cervixpos">
                  <option value="posterior" selected>posterior</option>
                  <option value="medianizado">mediano</option>
                  <option value="anteriorizado">anterior</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">OIC</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-cervixwidth" id="gyn-touch-cervixwidth">
                  <option value="impérvio" selected>impérvio</option>
                  <option value="pérvio a 1cm">1cm</option>
                  <option value="pérvio a 2cm">2cm</option>
                  <option value="pérvio a 3cm">3cm</option>
                  <option value="pérvio a 4cm">4cm</option>
                  <option value="pérvio a 5cm">5cm</option>
                  <option value="pérvio a 6cm">6cm</option>
                  <option value="pérvio a 7cm">7cm</option>
                  <option value="pérvio a 8cm">8cm</option>
                  <option value="pérvio a 9cm">9cm</option>
                  <option value="com dilatação total">dilatação total</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">superfície</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-cervixsurface" id="gyn-touch-cervixsurface">
                  <option value="sem alterações tocáveis" selected>normal</option>
                  <option value="com nódulo tocável">nódulo</option>
                  <option value="com cisto tocável">cisto</option>
                  <option value="áspera ao toque">áspero</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Colo Uterino</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-cervixpain" id="gyn-touch-cervixpain">
                  <option value="indolor à mobilização" selected>indolor</option>
                  <option value="doloroso à mobilização">doloroso</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">à mobilização</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Anexos</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-annex" id="gyn-touch-annex">
                  <option value="não palpáveis" selected>não palpáveis</option>
                  <option value="com ambos os ovários palpáveis">palpáveis</option>
                  <option value="com ovário direito palpável e esquerdo não palpável">D&plus; E&ndash;</option>
                  <option value="com ovário direito não palpável e esquerdo palpável">D&ndash; E&plus;</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">volumes</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-annexvol" id="gyn-touch-annexvol">
                  <option value="" selected>N/A</option>
                  <option value=" com volumes subjetivamente normais ao toque">normais</option>
                  <option value=" com ovário direito de volume aumentado e esquerdo de volume subjetivamente normal">D&uarr; E nl</option>
                  <option value=" com ovário direito de volume subjetivamente normal e esquerdo de volume aumentado">D nl E&uarr;</option>
                  <option value=" com volumes de ambos os ovários aumentados">ambos&uarr;</option>
                </select>
              </div>
            </div>
            <div class="control">
               <button class="button is-static" tabindex="-1">superfície</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-annexsurf" id="gyn-touch-annexsurf">
                  <option value="" selected>N/A</option>
                  <option value=", superfícies ovarianas tocáveis sem alterações perceptíveis">normais</option>
                  <option value=", com nódulo tocável em ovário direito">nódulo D</option>
                  <option value=", com nódulo tocável em ovário esquerdo">nódulo E</option>
                  <option value=", com nódulos tocáveis em ambos os ovários">nódulos bilat</option>
                  <option value=", com cisto tocável em ovário direito">cisto D</option>
                  <option value=", com cisto tocável em ovário esquerdo">cisto E</option>
                  <option value=", com cistos tocáveis em ambos os ovários">cistos bilat</option>
                  <option value=", com superfície irregular de ovário direito">irregular D</option>
                  <option value=", com superfície irregular de ovário esquerdo">irregular E</option>
                  <option value=", com superfícies irregulares de ambos os ovários">irregular bilat</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
               <button class="button is-static" tabindex="-1">Região Anexial</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-touch-annexpain" id="gyn-touch-annexpain">
                  <option value="indolor à palpação" selected>indolor</option>
                  <option value="dolorosa à palpação à direita">dolorosa à D</option>
                  <option value="dolorosa à palpação à esquerda">dolorosa à E</option>
                  <option value="dolorosa à palpação difusamente">dolorosa bilateral</option>
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
        <div class="column is-2">
          <div class="field">
            <input type="checkbox" class="is-checkradio" id="exam-gyn-baby">
            <label for="exam-gyn-baby">
              <span class="icon">
                <i class="mdi mdi-baby mdi-24px"></i>
              </span>
            </label>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Concepto</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-baby-head" id="gyn-baby-head">
                  <option value="polo cefálico" selected>polo cefálico</option>
                  <option value="glúteo">glúteo</option>
                  <option value="cotovelo">cotovelo</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-baby-height" id="gyn-baby-height">
                  <option value="não tocável" selected>não tocável</option>
                  <option value="alto">alto</option>
                  <option value="em plano -2 de De Lee">em plano -2 de De Lee</option>
                  <option value="em plano -1 de De Lee">em plano -1 de De Lee</option>
                  <option value="em plano 0 de De Lee">em plano 0 de De Lee</option>
                  <option value="em plano +1 de De Lee">em plano +1 de De Lee</option>
                  <option value="em plano +2 de De Lee">em plano +2 de De Lee</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-baby-flex" id="gyn-baby-flex">
                  <option value="" selected>flexão N/A</option>
                  <option value=", fletido">fletido</option>
                  <option value=", defletido de I grau">defletido de I grau</option>
                  <option value=", defletido de II grau">defletido de II grau</option>
                  <option value=", defletido de III grau">defletido de III grau</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-baby-present" id="gyn-baby-present">
                  <option value="" selected>apresentação N/A</option>
                  <option value=" e apresentação transversa direita">transversa D</option>
                  <option value=" e apresentação transversa esquerda">transversa E</option>
                  <option value=" e apresentação oblíqua superior direita">oblíqua Sup D</option>
                  <option value=" e apresentação oblíqua superior esquerda">oblíqua Sup E</option>
                  <option value=" e apresentação oblíqua inferior direita">oblíqua Inf D</option>
                  <option value=" e apresentação oblíqua inferior esquerda">oblíqua Inf E</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Bolsa das águas</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select name="gyn-baby-water" id="gyn-baby-water">
                  <option value="" selected>não se aplica</option>
                  <option value="tocável e íntegra">tocável e íntegra</option>
                  <option value="não tocável">não tocável</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Diagnósticos Obstétricos</h2>

      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_dheg1" name="obsdx" value="Doença Hipertensiva Específica da Gestação com Proteinúria Significativa">
              <label for="dx_dheg1">DHEG com Proteinúria (<code>O14</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_dheg2" name="obsdx" value="Doença Hipertensiva Específica da Gestação com Proteinúria Significativa">
              <label for="dx_dheg2">DHEG sem Proteinúria (<code>O13</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_hac" name="obsdx" value="Hipertensão Arterial Sistêmica Pré-Gestacional">
              <label for="dx_hac">HAC (<code>O10</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_p_ecl" name="obsdx" value="Pré-Eclâmpsia">
              <label for="dx_p_ecl">Pré-Eclâmpsia (<code>O14.9</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_r_eclr" name="obsdx" value="Risco Aumentado para Pré-Eclâmpsia">
              <label for="dx_r_eclr">Risco de Pré-Eclâmpsia (<code>O14.9</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_dmg" name="obsdx" value="Diabete Mélito Gestacional">
              <label for="dx_dmg">DMG (<code>O24</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_dm2" name="obsdx" value="Diabete Mélito Tipo 2 pré-gestacional">
              <label for="dx_dm2">DM2 (<code>E11</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_dm1" name="obsdx" value="Diabete Mélito Tipo 1 pré-gestacional">
              <label for="dx_dm1">DM1 (<code>E10</code>)</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_obe" name="obsdx" value="Obesidade">
              <label for="dx_obe">Obesidade (<code>E66</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_reest" name="obsdx" value="Reestreia Funcional">
              <label for="dx_reest">Reestreia Funcional (<code>O99.8</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_drug" name="obsdx" value="Uso de Substâncias Psicoativas">
              <label for="dx_drug">Uso de dorgas (<code>Z72.2</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_siph" name="obsdx" value="SÍFILIS GESTACIONAL">
              <label for="dx_siph"><strong>SÍFILIS</strong> (<code>O98.1</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_high" name="obsdx" value="Gestação de Alto Risco com seguimento no PNAR">
              <label for="dx_high">PNAR (<code>Z35</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_rheum" name="obsdx" value="Febre Reumática prévia adequadamente diagnosticada">
              <label for="dx_rheum">FR (<code>I01.8</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_cerv" name="obsdx" value="Incompetência Ístmo-Cervical">
              <label for="dx_cerv">Incomp. Cervical (<code>O34.3</code>)</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_rciu" name="obsdx" value="Restrição de Crescimento Fetal Intra-Uterino">
              <label for="dx_rciu">RCIU (<code>O36.5</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_exp" name="obsdx" value="Exposição durante a gestação a drogas potencialmente teratogênicas">
              <label for="dx_exp">Risco de Teratogenicidade (<code>Y57</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_itu" name="obsdx" value="Cistite">
              <label for="dx_itu">ITU (<code>N30</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_ituas" name="obsdx" value="Bacteriúria Assintomática">
              <label for="dx_ituas">Bacteriúria (<code>O23</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_nausea" name="obsdx" value="Hiperemese gravídica">
              <label for="dx_nausea">Hiperemese (<code>O21</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_hypotir" name="obsdx" value="Hipotireoidismo">
              <label for="dx_hypotir">Hipotireoidismo (<code>E03</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_negrh" name="obsdx" value="Gestante Rh-Negativo">
              <label for="dx_hypotir">Rh-Negativo (<code>O36.0</code>)</label>
            </div>
          </div>
          <div class="field">
            <div class="control is-expanded">
              <input type="checkbox" class="is-checkradio" id="dx_fabs" name="obsdx" value="Artrogripose Múltipla Congênita">
              <label for="dx_fabs">Artrogripose Múltipla Congênita (<code>Q74.3</code>)</label>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Outros Diagnósticos</h3>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="diag" placeholder="Insira os diagnósticos aqui, separados por VÍRGULA.&#10;Gestação, trimestre e paridade são automaticamente gerados." rows="2" required></textarea>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Plano</h2>

      <div class="content">
        <ol>
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
                <button class="button is-static" tabindex="-1">Solicito labs de</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-labs-sem">
                    <option value="1º">1º Tri</option>
                    <option value="2º" selected>2º Tri</option>
                    <option value="3º">3º Tri</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labcoombs" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labcoombs" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito PAI/Coombs Indireto
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labvdrl" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labvdrl" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito VDRL para seguimento mensal
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labs-other" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labs-other" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Solicito outros labs</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input"  id="p-labs-otherlab" placeholder="Outros exames">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labnow-run" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labnow-run" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Coleta&nbsp;<strong>agora</strong>&nbsp;(não-colaboração)
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labnow-critic" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labnow-critic" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Coleta&nbsp;<strong>agora</strong>&nbsp;(exame crítico)
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labtr" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labtr" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito TRs
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labtotg" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labtotg" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito TOTG (24-28sem)
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-labpegb" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-labpegb" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Colho PEGB
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-usg" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-usg" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito USG Obstétrico
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-usg-morph" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-usg-morph" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Solicito USG Morfo</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-usg-morph-trim">
                    <option value="1º">1º Tri</option>
                    <option value="2º" selected>2º Tri</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">devido a</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-usg-morph-why">
                    <option value="tem idade maior ou igual a 35 anos">idade &ge;35a</option>
                    <option value="tem diabete mélito">DM</option>
                    <option value="carrega gestação múltipla">Gemelaridade</option>
                    <option value="tem infecção aguda que pode repercutir em feto">Zika/Sífilis/Toxo/CMV</option>
                    <option value="utilizou drogas potencialmente teratogênicas">Med. Teratogênicas</option>
                    <option value="utilizou/utiliza drogas com potencial teratogênico">SPA Teratogênicas</option>
                    <option value="realizou USG Obstétrico que sugeriu malformação fetal">USG Obst com Malformação</option>
                    <option value="realizou USG Obstétrico que sugeriu Restrição de Crescimento Intrauterino">USG Obst com RCIU</option>
                    <option value="teve gestação prévia com malformação fetal">Malformação Fetal Prévia</option>
                    <option value="tem histórico familiar de malformação fetal">AF de Malformação Fetal</option>
                    <option value="apresentou diversos episódios de abortamento prévios">Aborto Habitual</option>
                    <option value="tem histórico prévio de óbito fetal ou neonatal sem etiologia definida">AP de Óbito Perinatal NE</option>
                  </select>
                </div>
              </div>
            </div>
          </li>

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
                  Ác. fólico
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
                  FeSO<sub>4</sub>
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
                  CaCO<sub>3</sub>&nbsp;protocolar
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
                <button class="button is-static is-fullwidth" tabindex="-1">
                  CaCO<sub>3</sub>&nbsp;para Pré-Eclâmpsia
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med5" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med5" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Paracetamol
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med6" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med6" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Dipirona
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med7" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med7" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Buscopam composto
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med8" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med8" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="p-medother" placeholder="Outras medicações">
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-med9" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-med9" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Rhogam
                </button>
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
                <label for="p-vaxnew" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-vaxnew" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Levo para&nbsp;<strong>reiniciar</strong>&nbsp;vacinas
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
                  Alterações fisiológicas da gestação
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
                  Sinais para acolhimento/PSO
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
                  Alimentação para náuseas gravídicas
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
                  Alongamento para cãimbras
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
                  Sinais de TP
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
                  Exercícios para acelerar TP
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-ori8" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-ori8" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Exercícios para diminuir dor de contrações
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
                <label for="p-pregleave" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-pregleave" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Licença maternidade
                </button>
              </div>
            </div>
          </li>

          <h3 class="title is-5">Outros</h3>

          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-pregreport" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-pregreport" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Relatório Médico de Z34
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <label for="p-implanon" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="p-implanon" value="true">
                </label>
              </div>
              <div class="control is-expanded">
                <button class="button is-static is-fullwidth" tabindex="-1">
                  Solicito Implanon
                </button>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
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
                <input type="number" class="input" id="p-return-num" min="1" step="1" placeholder="#" value="2">
              </div>
              <div class="control">
                <div class="select">
                  <select id="return-time">
                    <option value="dia(s)">dias</option>
                    <option value="semana(s)" selected>semanas</option>
                    <option value="mês(es)">meses</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="return-who" name="return-who">
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
      <h2 class="title is-4">Plano</h2>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-primary is-fullwidth" id="button-run">Gerar</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-s" placeholder="Subjetivo" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-s" data-clipboard-target="#output-s">Copiar Subjetivo</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-o" placeholder="Objetivo" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-o" data-clipboard-target="#output-o">Copiar Objetivo</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-a" placeholder="Avaliação" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-a" data-clipboard-target="#output-a">Copiar Avaliação</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-p" placeholder="Plano" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-p" data-clipboard-target="#output-p">Copiar Plano</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "hospital";
$subtitle = "Exame Físico";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Estado Geral</h2>

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
    </div>

    <div class="box">
      <h2 class="title is-4">Sinais Vitais</h2>

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
    </div>

    <div class="box">
      <h2 class="title is-4">Consciência</h2>

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
              <option value="Orientade">Orientade</option>
              <option value="DESORIENTADE">DESorientade</option>
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
              <option value="Orientade">Orientade</option>
              <option value="DESORIENTADE">DESorientade</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Geral</h2>

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
    </div>

    <div class="box">
      <h2 class="title is-4">ORL</h2>

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
    </div>

    <div class="box">
      <h2 class="title is-4">Periferia</h2>

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
                  <option value="cheios" selected>cheios</option>
                  <option value="fracos">&darr;</option>
                  <option value="em martelo d'água">&uarr;</option>
                  <option value="ausentes até aa. axilares">&empty;</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="mmsspulse-simmetry">
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
                <select id="mmsspulse-artery">
                  <option value="radiais" selected>radiais</option>
                  <option value="ulnares">ulnares</option>
                  <option value="braquiais">braquiais</option>
                  <option value="axilares">axilares</option>
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
      <h2 class="title is-4">Neuro</h2>

      <div class="is-hidden" id="neuro">
        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="neuro-cincinnati" class="is-checkradio">
              <label for="neuro-cincinnati">
                <span class="icon">
                  <i class="mdi mdi-ambulance mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">Supercílios</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="neuro-cincinnati-eyebrow">
                    <option value="abduz ambos os supercílios simetricamente" selected>Normal</option>
                    <option value="não abduz supercílio direito">&empty;Direito</option>
                    <option value="não abduz supercílio esquerdo">&empty;Esquerda</option>
                    <option value="não abduz nenhum dos supercílios">&empty;Bilateral</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">Rima</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="neuro-cincinnati-mouth">
                    <option value="sem desvio de rima" selected>Normal</option>
                    <option value="desvio de rima à direita">Desvio à Dir</option>
                    <option value="desvio de rima à esquerda">Desvio à Esq</option>
                    <option value="não sorri">Ausência</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">MMSS</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="neuro-cincinnati-mmss">
                    <option value="sem queda de membros superiores" selected>Normal</option>
                    <option value="queda parcial de membro superior direito">&darr;Direito</option>
                    <option value="queda parcial de membro superior esquerdo">&darr;Esquerdo</option>
                    <option value="queda parcial de ambos os membros superiores">&darr;Bilateral</option>
                    <option value="queda total e rápida de membro superior direito">&darr; Rápida Direito</option>
                    <option value="queda total e rápida de membro superior esquerdo">&darr; Rápida Esquerdo</option>
                    <option value="queda total e rápida de ambos os membros superiores">&darr; Rápida Bilateral</option>
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
              <input type="checkbox" id="neuro-main" class="is-checkradio">
              <label for="neuro-main">
                <span class="icon">
                  <i class="mdi mdi-brain mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">RASS</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="neuro-rass">
                    <option value="" selected>N/A</option>
                    <option value="+4">+4 (Combativo)</option>
                    <option value="+3">+3 (Muito agitado)</option>
                    <option value="+2">+2 (Agitado)</option>
                    <option value="+1">+1 (Inquieto)</option>
                    <option value="0">0 (Alerta e calmo)</option>
                    <option value="-1">-1 (Torporoso)</option>
                    <option value="-2">-2 (Sedado leve)</option>
                    <option value="-3">-3 (Sedado moderado)</option>
                    <option value="-4">-4 (Sedado profundamente)</option>
                    <option value="-5">-5 (Coma)</option>
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
              <input type="checkbox" id="neuro-speech" class="is-checkradio">
              <label for="neuro-speech">
                <span class="icon">
                  <i class="mdi mdi-account-voice mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">Linguagem</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="neuro-speech-desc">
                    <option value="sem alterações" selected>Normal</option>
                    <option value="afasia de Broca">Broca</option>
                    <option value="afasia de Wernicke">Wernicke</option>
                    <option value="afasia de condução">Condução</option>
                    <option value="afasia global">Global</option>
                    <option value="ecolalia">Ecolalia</option>
                    <option value="disartria">Disartria</option>
                    <option value="outro">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="neuro-speech-other" placeholder="Descreva alteração de linguagem" disabled>
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
              <input type="checkbox" id="neuro-walk" class="is-checkradio">
              <label for="neuro-walk">
                <span class="icon">
                  <i class="mdi mdi-walk mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">Marcha</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="neuro-walk-desc">
                    <option value="sem alterações" selected>Normal</option>
                    <option value="espástica">Espástica</option>
                    <option value="escarvante">Escarvante</option>
                    <option value="atáxica cerebelar">Atáxica Cerebelar/Ebriosa</option>
                    <option value="atáxica sensitiva">Atáxica Sensitiva</option>
                    <option value="parkinsoniana">Parkinsoniana</option>
                    <option value="ceifante">Ceifante</option>
                    <option value="anserina">Anserina</option>
                    <option value="tabética">Tabética</option>
                    <option value="vestibular">Vestibular</option>
                    <option value="claudicante">Claudicante</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="neuro-walk-other" placeholder="Descreva alteração de marcha" disabled>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button type="button" class="button is-static" tabindex="-1">Romberg</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="neuro-romberg">
                    <option value="" selected>NT</option>
                    <option value="ausência de sinal de Romberg">Ausente (Normal)</option>
                    <option value="pseudo-sinal de Romberg">Pseudo-Presente</option>
                    <option value="sinal de Romberg PRESENTE (verdadeiro)">Presente</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="neuro-walk-other" placeholder="Descreva alteração de marcha" disabled>
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
              <input type="checkbox" id="neuro-strength" class="is-checkradio">
              <label for="neuro-strength">
                <span class="icon">
                  <i class="mdi mdi-arm-flex mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <table class="table is-hoverable is-fullwidth has-text-centered">
              <thead>
                <tr>
                  <th></th>
                  <th>Dir</th>
                  <th>Esq</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Flexão Quirodáctilos</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-fingers-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Quirodáctilos" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-fingers-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-fingers-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Quirodáctilos" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-fingers-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Extensão Quirodáctilos</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-fingers-extension-right" min="0" step="1" max="5" data-side="Dir" data-name="Extensão Quirodáctilos" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-fingers-extension-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-fingers-extension-left" min="0" step="1" max="5" data-side="Esq" data-name="Extensão Quirodáctilos" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-fingers-extension-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Flexão Punho</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-hand-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Punho" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-hand-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-hand-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Punho" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-hand-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Extensão Punho</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-hand-extension-right" min="0" step="1" max="5" data-side="Dir" data-name="Extensão Punho" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-hand-extension-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-hand-extension-left" min="0" step="1" max="5" data-side="Esq" data-name="Extensão Punho" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-hand-extension-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Flexão Antebraço</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-forearem-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Antebraço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-forearem-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-forearem-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Antebraço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-forearem-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Extensão Antebraço</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-forearm-extension-right" min="0" step="1" max="5" data-side="Dir" data-name="Extensão Antebraço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-forearm-extension-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-forearm-extension-left" min="0" step="1" max="5" data-side="Esq" data-name="Extensão Antebraço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-forearm-extension-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Abdução Braço</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-arm-abduction-right" min="0" step="1" max="5" data-side="Dir" data-name="Abdução Braço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-arm-abduction-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-arm-abduction-left" min="0" step="1" max="5" data-side="Esq" data-name="Abdução Braço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-arm-abduction-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Adução Braço</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-arm-aduction-right" min="0" step="1" max="5" data-side="Dir" data-name="Adução Braço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-arm-aduction-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-arm-aduction-left" min="0" step="1" max="5" data-side="Esq" data-name="Adução Braço" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-arm-aduction-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Flexão Plantar</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-foot-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Plantar" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-foot-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-foot-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Plantar" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-foot-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Dorsiflexão</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-foot-dorsiflexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Dorsiflexão" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-foot-dorsiflexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-foot-dorsiflexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Dorsiflexão" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-foot-dorsiflexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Extensão Perna</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-leg-extension-right" min="0" step="1" max="5" data-side="Dir" data-name="Extensão Perna" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-leg-extension-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-leg-extension-left" min="0" step="1" max="5" data-side="Esq" data-name="Extensão Perna" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-leg-extension-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Flexão Perna</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-leg-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Perna" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-leg-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-leg-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Perna" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-leg-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Extensão Coxa</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-thigh-extension-right" min="0" step="1" max="5" data-side="Dir" data-name="Extensão Coxa" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-thigh-extension-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-thigh-extension-left" min="0" step="1" max="5" data-side="Esq" data-name="Extensão Coxa" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-thigh-extension-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Flexão Coxa</th>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-thigh-flexion-right" min="0" step="1" max="5" data-side="Dir" data-name="Flexão Coxa" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-thigh-flexion-right-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input type="number" class="input neuro-strength-param" id="neuro-strength-thigh-flexion-left" min="0" step="1" max="5" data-side="Esq" data-name="Flexão Coxa" placeholder="Força">
                      </div>
                      <div class="control">
                        <div class="select">
                          <select id="neuro-strength-thigh-flexion-left-mod">
                            <option value="" selected>...</option>
                            <option value="+">&plus;</option>
                            <option value="-">&ndash;</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="neuro-coord" class="is-checkradio">
              <label for="neuro-coord">
                <span class="icon">
                  <i class="mdi mdi-gymnastics mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <table class="table is-hoverable is-fullwidth has-text-centered">
              <thead>
                <tr>
                  <th></th>
                  <th>Dir</th>
                  <th>Esq</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Disdiadococinesia</th>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-dysdiadochokinesis-right">
                            <option value="ausente" selected>Ausente</option>
                            <option value="PRESENTE">Presente</option>
                            <option value="">NT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-dysdiadochokinesis-left">
                            <option value="ausente" selected>Ausente</option>
                            <option value="PRESENTE">Presente</option>
                            <option value="">NT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Índex-Nariz</th>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-indexnaso-right">
                            <option value="bem coordenado com e sem abolição visual" selected>Normal</option>
                            <option value="descoordenação apenas à abolição visual">Alterado SÓ sem visão</option>
                            <option value="descoordenação com e sem abolição visual">Alterado</option>
                            <option value="descoordenação que piora à abolição visual">Alterado PIOR sem visão</option>
                            <option value="">NT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-indexnaso-left">
                            <option value="bem coordenado com e sem abolição visual" selected>Normal</option>
                            <option value="descoordenação apenas à abolição visual">Alterado SÓ sem visão</option>
                            <option value="descoordenação com e sem abolição visual">Alterado</option>
                            <option value="descoordenação que piora à abolição visual">Alterado PIOR sem visão</option>
                            <option value="">NT</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Calcanhar-Joelho</th>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-leg-right">
                            <option value="" selected>NT</option>
                            <option value="bem coordenado com e sem abolição visual">Normal</option>
                            <option value="descoordenação apenas à abolição visual">Alterado SÓ sem visão</option>
                            <option value="descoordenação com e sem abolição visual">Alterado</option>
                            <option value="descoordenação que piora à abolição visual">Alterado PIOR sem visão</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-leg-left">
                            <option value="" selected>NT</option>
                            <option value="bem coordenado com e sem abolição visual">Normal</option>
                            <option value="descoordenação apenas à abolição visual">Alterado SÓ sem visão</option>
                            <option value="descoordenação com e sem abolição visual">Alterado</option>
                            <option value="descoordenação que piora à abolição visual">Alterado PIOR sem visão</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Rechaço</th>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-defense-right">
                            <option value="" selected>NT</option>
                            <option value="ausente">Ausente</option>
                            <option value="presente">Presente</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-coord-defense-left">
                            <option value="" selected>NT</option>
                            <option value="ausente">Ausente</option>
                            <option value="presente">Presente</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="neuro-reflex" class="is-checkradio">
              <label for="neuro-reflex">
                <span class="icon">
                  <i class="mdi mdi-seat-legroom-extra mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <table class="table is-hoverable is-fullwidth has-text-centered">
              <thead>
                <tr>
                  <th></th>
                  <th>Dir</th>
                  <th>Esq</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Patelar
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-patella-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-patella-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Aquileu
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-aquileu-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-aquileu-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Radial
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-radius-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-radius-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Bicipital
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-biceps-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-biceps-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Tricipital
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-triceps-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-triceps-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="EXALTADO">Exaltado</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    Cutâneo-Plantar
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-plantar-right">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="SINAL DE BABINSKI">Babinski</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select id="neuro-reflex-plantar-left">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="ausente">Ausente</option>
                            <option value="AUSENTE mesmo com sensibilização">Ausente c/ Manobra</option>
                            <option value="SINAL DE BABINSKI">Babinski</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="neuro-feel" class="is-checkradio">
              <label for="neuro-feel">
                <span class="icon">
                  <i class="mdi mdi-gesture-tap-hold mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <table class="table is-hoverable is-fullwidth has-text-centered">
              <thead>
                <tr>
                  <th></th>
                  <th>Dir</th>
                  <th>Esq</th>
                </tr>
              </thead>
              <tbody id="neuro-feel-container">
                <!-- Example:
                <tr class="neuro-feel-item" id="fcc38733-dc06-41f4-af46-4cda4353e6b6">
                  <td>
                    <div class="field has-addons">
                      <div class="control">
                        <button type="button" class="button is-danger" id="delete-fcc38733-dc06-41f4-af46-4cda4353e6b6">
                          <span class="icon">
                            <i class="mdi mdi-delete"></i>
                          </span>
                        </button>
                      </div>
                      <div class="control">
                        <div class="select">
                          <select class="type" id="type-fcc38733-dc06-41f4-af46-4cda4353e6b6">
                            <option value="Epicrítica" selected>Epicrítica</option>
                            <option value="Proprioceptiva">Proprioceptiva</option>
                          </select>
                        </div>
                      </div>
                      <div class="control is-expanded">
                        <input type="text" class="input topography" id="topography-fcc38733-dc06-41f4-af46-4cda4353e6b6" placeholder="Topografia">
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select class="right" id="right-fcc38733-dc06-41f4-af46-4cda4353e6b6">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="diminuída">Diminuída</option>
                            <option value="AUSENTE">Ausente</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="field">
                      <div class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select class="left" id="left-fcc38733-dc06-41f4-af46-4cda4353e6b6">
                            <option value="" selected>NT</option>
                            <option value="presente">Presente</option>
                            <option value="diminuída">Diminuída</option>
                            <option value="AUSENTE">Ausente</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                -->
              </tbody>
            </table>

            <div class="field">
              <div class="control is-expanded">
                <button type="button" class="button is-fullwidth" id="neuro-feel-add">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="mdi mdi-plus-box"></i>
                    </span>
                    <span>Adicionar</span>
                  </span>
                </button>
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
              <input type="checkbox" id="neuro-other" class="is-checkradio">
              <label for="neuro-other">
                <span class="icon">
                  <i class="mdi mdi-head-snowflake mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="mb-5" id="neuro-other-container">
              <!-- Example:
              <div class="field has-addons neuro-other-item" id="fcc38733-dc06-41f4-af46-4cda4353e6b6">
                <div class="control">
                  <button type="button" class="button is-danger" id="delete-fcc38733-dc06-41f4-af46-4cda4353e6b6">
                    <span class="icon">
                      <i class="mdi mdi-delete"></i>
                    </span>
                  </button>
                </div>
                <div class="control">
                  <input type="text" class="input" id="title-fcc38733-dc06-41f4-af46-4cda4353e6b6" placeholder="Subtítulo">
                </div>
                <div class="control">
                  <button type="button" class="button is-static" tabindex="-1">:</button>
                </div>
                <div class="control is-expanded">
                  <input type="text" class="input" id="desc-fcc38733-dc06-41f4-af46-4cda4353e6b6" placeholder="Descreva achado">
                </div>
                <div class="control">
                  <button type="button" class="button is-static" tabindex="-1">.</button>
                </div>
              </div>
              -->
            </div>

            <div class="field">
              <div class="control is-expanded">
                <button type="button" class="button is-fullwidth" id="neuro-other-add">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="mdi mdi-plus-box"></i>
                    </span>
                    <span>Adicionar</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button type="button" class="button is-fullwidth" id="neuro-show">
            <span class="text-icon">
              <span class="icon">
                <i class="mdi mdi-eye"></i>
              </span>
              <span class="text">Mostrar</span>
            </span>
          </button>
        </div>
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
          <textarea id="output-o" class="textarea has-fixed-size" placeholder="EF" rows="10" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control is-expanded">
          <button id="button-o" class="button is-fullwidth copybtn" data-clipboard-target="#output-o">Copiar EF</button>
        </div>
      </div>
    </div>

  </div>
</main>

<?php
require_once "footer.php";
?>

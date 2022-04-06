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
              <button class="button is-static">Sat O<sub>2</sub></button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-sat" class="input" min="0" max="100" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">%</button>
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
              <button class="button is-static">Pulso</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pulse" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">bpm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">PA</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pas" class="input" min="1" step="2" placeholder="PAS">
            </div>
            <div class="control">
              <button class="button is-static">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-pad" class="input" min="1" step="2" placeholder="PAD">
            </div>
            <div class="control">
              <button class="button is-static">mmHg</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">FR</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-fr" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">irpm</button>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Temp</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-temp" class="input" min="1" step="0.1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">°C</button>
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
              <button class="button is-static">Peso</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-weight" class="input" min="0" step="0.1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">kg</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Alt</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-height" class="input" min="1" step="1" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">cm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">IMC</button>
            </div>
            <div class="control is-expanded">
              <input type="number" id="ssvv-bmi" class="input" placeholder="#" readonly>
            </div>
            <div class="control">
              <button class="button is-static">kg/m<sup>2</sup></button>
            </div>
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
              <button class="button is-static">Conjuntiva</button>
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
              <button class="button is-static">Secreções</button>
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
              <button class="button is-static">Tireoide</button>
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
              <button class="button is-static">Linfonodos</button>
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
              <button class="button is-static">de aspecto</button>
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
              <button class="button is-static">MV</button>
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
              <button class="button is-static">RA</button>
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
              <button class="button is-static">Alteração até</button>
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
              <button class="button is-static">B</button>
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
              <button class="button is-static">Abdome</button>
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
              <button class="button is-static">Traube</button>
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
              <button class="button is-static">Hepatimetria</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="abdomen-hepatimetry" min="-10" max="10" step="1" value="0" placeholder="#">
            </div>
            <div class="control">
              <button class="button is-static">cm</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Macicez Móvel</button>
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
              <button class="button is-static">Skoda</button>
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
              <button class="button is-static">cm da c. umbilical</button>
            </div>
          </div>

          <div class="field has-addons">
            <div class="control">
              <button class="button is-static">Piparote</button>
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
              <button class="button is-static">Massas</button>
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
              <button class="button is-static">DB</button>
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
              <button class="button is-static">Murphy</button>
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
              <button class="button is-static">McBurney</button>
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
              <button class="button is-static">Giordano</button>
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
              <button class="button is-static">MTD</button>
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
              <button class="button is-static">Conduto</button>
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
              <button class="button is-static">MTE</button>
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
              <button class="button is-static">Conduto</button>
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
              <button class="button is-static">Oroscopia</button>
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
              <button class="button is-static">Tonsilas</button>
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
              <button class="button is-static">Palato</button>
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
              <button class="button is-static">Mucosa</button>
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
              <button class="button is-static">Cornetos</button>
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
              <button class="button is-static">Septo Nasal</button>
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
              <button class="button is-static">Edema</button>
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
              <button class="button is-static">Pulsos</button>
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
              <button class="button is-static">a partir de aa.</button>
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

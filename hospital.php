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
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select name="pronouns" id="pronouns">
              <option value="e" selected>Declinação de Gênero...</option>
              <option value="o">Ele/Dele</option>
              <option value="a">Ela/Dela</option>
            </select>
          </div>
        </div>
      </div>
    </div>

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
              <option value="taquidis">taqui + dispneice</option>
              <option value="bradidis">bradi + dispneice</option>
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
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-head" data-target="collapsable-head">
        <label for="c-head">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-head mdi-36px"></i>
            </span>
            <span><strong>Cabeça</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-head">
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
                    <option value="atípica" selected>Normal</option>
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
                    <option value="dolorosa">Dolorosa</option>
                    <option value="dolorosa">Entristecida</option>
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
                  <select id="thyroid-volume">
                    <option value="" selected>Vol N/A</option>
                    <option value="não palpável">&empty;</option>
                    <option value="palpável topicamente, sem alterações de volume ou de superfície palpáveis">Normal</option>
                    <option value="palpável topicamente, levemente aumentada mas sem alterações palpáveis de superfície e sem nódulos individualizáveis à palpação">&uarr;Vol</option>
                    <option value="palpável topicamente, bastante aumentada mas sem alterações palpáveis de superfície e sem nódulos individualizáveis à palpação">&uarr;&uarr;&uarr;Vol</option>
                    <option value="palpável topicamente, volume aumentado às custas de nódulo único">&uarr;Vol/Nód único</option>
                    <option value="palpável topicamente, volume aumentado às custas de diversos nódulos">&uarr;Vol/Nóds</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="thyroid-nodule-loc" disabled>
                    <option value="" selected disabled>Loc Nód</option>
                    <option value=" em topografia de lobo direito">Lobo D</option>
                    <option value=" em topografia de lobo esquerdo">Lobo E</option>
                    <option value=" em topografia de istmo">Ístmo</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="thyroid-margins">
                    <option value="" selected>Marg N/A</option>
                    <option value="margens superior e inferior bem caracterizáveis à palpação">normal</option>
                    <option value="margem superior aparentemente ACIMA de topografia esperada, e inferior bem caracterizável à palpação">Sup&uarr; / Inf nl</option>
                    <option value="margem superior aparentemente ACIMA de topografia esperada, e inferior NÃO caracterizável à palpação">Sup&uarr; / Inf&uarr;</option>
                    <option value="margem superior aparentemente na topografia esperada, e inferior NÃO caracterizável à palpação">Sup nl / Inf&uarr;</option>
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
                    <option value="Sem linfonodomegalias cervicais, periauriculares ou supraclávicas palpáveis">&empty;</option>
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

            <div class="columns is-hidden" id="lymph-locs">
              <div class="column">
                <h4 class="title is-6 has-text-centered">Dir</h4>

                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-retroaur" value="retroauricular direita">
                    <label for="lymph-right-retroaur">Retroauric</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-anterioraur" value="auricular anterior direita">
                    <label for="lymph-right-anterioraur">Auric Ant</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-i" value="I direita">
                    <label for="lymph-right-i">I</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-ii" value="II direita">
                    <label for="lymph-right-ii">II</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-iii" value="III direita">
                    <label for="lymph-right-iii">III</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-iv" value="IV direita">
                    <label for="lymph-right-iv">IV</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-v" value="V direita">
                    <label for="lymph-right-v">V</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-vi" value="VI direita">
                    <label for="lymph-right-vi">VI</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-right-vii" value="VII direita">
                    <label for="lymph-right-vii">VII</label>
                  </div>
                </div>
              </div>

              <div class="column">
                <h4 class="title is-6 has-text-centered">Esq</h4>

                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-retroaur" value="retroauricular esquerda">
                    <label for="lymph-left-retroaur">Retroauric</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-anterioraur" value="auricular anterior esquerda">
                    <label for="lymph-left-anterioraur">Auric Ant</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-i" value="I esquerda">
                    <label for="lymph-left-i">I</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-ii" value="II esquerda">
                    <label for="lymph-left-ii">II</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-iii" value="III esquerda">
                    <label for="lymph-left-iii">III</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-iv" value="IV esquerda">
                    <label for="lymph-left-iv">IV</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-v" value="V esquerda">
                    <label for="lymph-left-v">V</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-vi" value="VI esquerda">
                    <label for="lymph-left-vi">VI</label>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input type="checkbox" class="is-checkradio lymph-loc" id="lymph-left-vii" value="VII esquerda">
                    <label for="lymph-left-vii">VII</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-orl" data-target="collapsable-orl">
        <label for="c-orl">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-ear-hearing mdi-36px"></i>
            </span>
            <span><strong>ORL</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-orl">
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

        <div>
          <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="exam-hints" class="is-checkradio">
              <label for="exam-hints">
                <span class="icon">
                  <i class="mdi mdi-weather-hurricane mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1"><em title="Avalição de Reflexo Vestibulo-Ocular, ou VOR em inglês.">Head Impulse</em></button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="hints-hi">
                    <option value="SEM ALTERAÇÕES" data-pt="1" selected>Normal</option>
                    <option value="latência à direita" data-pt="0">Atraso à D</option>
                    <option value="latência à esquerda" data-pt="0">Atraso à E</option>
                    <option value="latência a ambos os lados" data-pt="0">Atraso bilateral</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Nistagmo</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="hints-n">
                    <option value="ausente" data-pt="0" selected>Ausente</option>
                    <option value="horizontal unilateral" data-pt="0">Horizontal Unilat.</option>
                    <option value="torcional" data-pt="0">Torcional</option>
                    <option value="horizontal COM MUDANÇA DE LATERALIDADE" data-pt="1">Horizontal COM MUDANÇA DE LADO</option>
                    <option value="VERTICAL para cima" data-pt="1">Upbeat</option>
                    <option value="VERTICAL para baixo" data-pt="1">Downbeat</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Teste de&nbsp;<em>Skew</em></button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="hints-ts">
                    <option value="ausente" data-pt="0" selected>Ausente</option>
                    <option value="PRESENTE" data-pt="1">PRESENTE</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- -->
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-thorax" data-target="collapsable-thorax">
        <label for="c-thorax">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-tshirt-crew mdi-36px"></i>
            </span>
            <span><strong>Tórax</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-thorax">
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
      </div>
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-abdomen" data-target="collapsable-abdomen">
        <label for="c-abdomen">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-human mdi-36px"></i>
            </span>
            <span><strong>Abdomen</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-abdomen">
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

        <div>
          <div class="divider">&bull;&nbsp;&bull;&nbsp;&bull;</div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="exam-rectum" class="is-checkradio">
              <label for="exam-rectum">
                <span class="icon">
                  <i class="mdi mdi-seat-legroom-reduced mdi-rotate-270 mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="mb-6">
              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Plicomas</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="plicoma">
                      <option value="ausentes" selected>Ausentes</option>
                      <option value="presente às 12h">12h</option>
                      <option value="presente às 06h">06h</option>
                      <option value="presentes às 12 e 06h">12+06h</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Hemorroidas Ext.</button>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="hemorrhoids-external">
                      <option value="ausentes" selected>Ausentes</option>
                      <option value="presente(s)">Presentes</option>
                    </select>
                  </div>
                </div>
                <div class="control is-expanded">
                  <input type="text" class="input" id="hemorrhoids-external-desc" placeholder="Descreva localização e achados..." disabled>
                </div>
              </div>

              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Hemorroidas Int.</button>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="hemorrhoids-internal">
                      <option value="ausentes" selected>Ausentes</option>
                      <option value="presente(s)">Presentes</option>
                    </select>
                  </div>
                </div>
                <div class="control is-expanded">
                  <input type="text" class="input" id="hemorrhoids-internal-desc" placeholder="Descreva localização e achados..." disabled>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea class="textarea has-fixed-size" id="perineumscopy-other" placeholder="Descreva outros achados da perineoscopia, separados por vírgula..." rows="2"></textarea>
                </div>
              </div>
            </div>

            <div>
              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Tônus Retal</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="rectum-tonus">
                      <option value="normal" selected>Normal</option>
                      <option value="reduzido">Reduzido</option>
                      <option value="aumentado">Aumentado</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Ampola Retal</button>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="rectum-content">
                      <option value="sem conteúdos tocáveis" selected>Vazia</option>
                      <option value="com bolo fecal fisiológico">Fezes Normais</option>
                      <option value="com fecaloma pétreo">Fecaloma</option>
                      <option value="com massa">Massa</option>
                      <option value="com">Com...</option>
                    </select>
                  </div>
                </div>
                <div class="control is-expanded">
                  <input type="text" class="input" id="rectum-content-desc" placeholder="Descreva..." disabled>
                </div>
              </div>

              <div class="field has-addons">
                <div class="control">
                  <button class="button is-static" tabindex="-1">Dedo Luva</button>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="rectum-finger">
                      <option value="sem nada digno de nota" selected>Ndn</option>
                      <option value="com fezes">Fezes</option>
                      <option value="com sangue">Sangue</option>
                      <option value="com fezes entremeadas com sangue">Fezes+Sangue</option>
                      <option value="com">Com...</option>
                    </select>
                  </div>
                </div>
                <div class="control is-expanded">
                  <input type="text" class="input" id="rectum-finger-desc" placeholder="Descreva..." disabled>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea class="textarea has-fixed-size" id="rectum-other" placeholder="Descreva outros achados do toque, separados por vírgula..." rows="2"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-periphery" data-target="collapsable-periphery">
        <label for="c-periphery">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-arm-flex mdi-36px"></i>
            </span>
            <span><strong>Periferia</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-periphery">
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
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-neuro" data-target="collapsable-neuro">
        <label for="c-neuro">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-brain mdi-36px"></i>
            </span>
            <span><strong>Neuro</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-neuro">
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
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-invasions" data-target="collapsable-invasions">
        <label for="c-invasions">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-needle mdi-36px"></i>
            </span>
            <span><strong>Invasões</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-invasions">
        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="exam-invasions-cvd" class="is-checkradio">
              <label for="exam-invasions-cvd">
                <span class="icon">
                  <i class="mdi mdi-toilet mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">CVD Últ. Troca</button>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="cvd-last-change">
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvd-last-change-desc">
                    <option value="self" selected>Referida</option>
                    <option value="other">Em pront</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Últ. Esvaziamento</button>
              </div>
              <div class="control is-expanded">
                <input type="datetime-local" class="input" id="cvd-last-empty">
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Coletor</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="cvd-collector-volume" placeholder="Volume (mL)" min="0" step="50">
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvd-collector-aspect">
                    <option value="" selected>N/A</option>
                    <option value="límpido">Límpido</option>
                    <option value="ligeiramente turvo">Lig. Turvo</option>
                    <option value="turvo">Turvo</option>
                    <option value="piúrico">Piúrico</option>
                    <option value="francamente purulento">Pus</option>
                    <option value="hematúrico">Hematúria</option>
                    <option value="colúrico">Colúria</option>
                    <option value="false">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="cvd-collector-aspect-desc" placeholder="Descreva" disabled>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Extravasamento</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvd-overflow">
                    <option value="" selected>N/A</option>
                    <option value="ausente">Ausente</option>
                    <option value="urinário presente">Urinário</option>
                    <option value="ausente, mas com sangramento por ósteo uretral">Sangramento</option>
                    <option value="purulento">Pus</option>
                    <option value="false">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="cvd-overflow-desc" placeholder="Descreva..." disabled>
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
              <input type="checkbox" id="exam-invasions-cvc" class="is-checkradio">
              <label for="exam-invasions-cvc">
                <span class="icon">
                  <i class="mdi mdi-iv-bag mdi-24px"></i>
                </span>
              </label>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Tipo CVC</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-type">
                    <option value="" selected>N/A</option>
                    <option value="catéter de Shiley">Shiley</option>
                    <option value="Permacath">Permacath</option>
                    <option value="Portacath">Portacath</option>
                    <option value="PICC">PICC</option>
                    <option value="catéter oculto sob curativo opaco">Sob Curativo</option>
                    <option value="false">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="cvc-type-desc" placeholder="Descreva..." disabled>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">CVC</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-change-start">
                    <option value="passado" selected>Passado</option>
                    <option value="trocado">Trocado</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="date" class="input" id="cvc-when">
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvd-when-desc">
                    <option value="self" selected>Referida</option>
                    <option value="other">Em pront</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Curativo</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-cover">
                    <option value="" selected>Transparência N/A</option>
                    <option value="translúcido">Translúcido</option>
                    <option value="opaco">Opaco</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-cover-dirtyness">
                    <option value="" selected>Sujidade N/A</option>
                    <option value="limpo">Limpo</option>
                    <option value="úmido de substância sérica">&darr;Qtd Sérico</option>
                    <option value="embebido de substância sérica">&uarr;Qtd Sérico</option>
                    <option value="com pequena quantidade de sangue">&darr;Sangue</option>
                    <option value="embebido em sangue">&uarr;Sangue</option>
                    <option value="com pequena quantidade de pus">&darr;Pus</option>
                    <option value="embebido em pus">&uarr;Pus</option>
                    <option value="false">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="cvc-cover-dirtyness-desc" placeholder="Descreva..." disabled>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Óstio</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-entrance">
                    <option value="" selected>N/A</option>
                    <option value="não avaliável">Oculto</option>
                    <option value="sem alterações">Normal</option>
                    <option value="com leve hiperemia perióstio">&darr;Hiperemia</option>
                    <option value="com hiperemia perióstio intensa">&uarr;Hiperemia</option>
                    <option value="com necrose perióstio discreta">&darr;Necrose</option>
                    <option value="com necrose perióstio extensa">&uarr;Necrose</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="cvc-entrance-secretions">
                    <option value="" selected>Secreções N/A</option>
                    <option value="sem secreções">Limpo</option>
                    <option value="com secreção sérica em pequena quantidade">&darr;Qtd Sérico</option>
                    <option value="com grande quantidade de secreção sérica">&uarr;Qtd Sérico</option>
                    <option value="com saída de pus">Pus</option>
                    <option value="com saída de sangue em pequena quantidade">&darr;Sangue</option>
                    <option value="com grande quantidade de saída de sangue">&darr;Sangue</option>
                    <option value="false">Outro...</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="cvc-entrance-secretions-desc" placeholder="Descreva..." disabled>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Tampas</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="cvc-stopper">
                    <option value="" selected>N/A</option>
                    <option value="presentes e bem fechadas">Presentes / Bem-fechada</option>
                    <option value="presentes mas mal fechadas">Presentes / Mal-fechada</option>
                    <option value="ausentes">Ausentes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <input type="checkbox" class="switch is-rounded is-large collapsable" id="c-scores" data-target="collapsable-scores">
        <label for="c-scores">
          <span class="icon-text">
            <span class="icon is-medium">
              <i class="mdi mdi-calculator-variant mdi-36px"></i>
            </span>
            <span><strong>Escores</strong></span>
          </span>
        </label>
      </div>

      <div class="is-hidden" id="collapsable-scores">
        <div class="columns is-vcentered">
          <div class="column is-2">
            <div class="field">
              <input type="checkbox" id="score-abcd2" class="is-checkradio collapsable" data-target="sub-collapsable-abcd2">
              <label for="score-abcd2"><strong>ABCD²</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-abcd2">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Idade</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="abcd2-age" placeholder="Idade">
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Neuro</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="abcd2-features">
                    <option value="0" selected>Sem déficits</option>
                    <option value="1">Disartria/Afasia</option>
                    <option value="2">Hemiparesia</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Duração</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="abcd2-duration">
                    <option value="0" selected>&lt;10min</option>
                    <option value="1">&ge;10min e &lt;60min</option>
                    <option value="2">&ge;60min</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">DM</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="abcd2-dm">
                    <option value="0" selected>Ausente</option>
                    <option value="1">Presente</option>
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
              <input type="checkbox" id="score-wells-dvt" class="is-checkradio collapsable" data-target="sub-collapsable-wells-dvt">
              <label for="score-wells-dvt"><strong>TVP (Well's)</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-wells-dvt">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Câncer ativo (&le;6 meses)?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-1">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Acamado &gt;3d OU Cx gde porte (&le;12sem)?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-2">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Edema assimétrico &gt;3cm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-3">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Veias sup. colaterais?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-4">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Edema de todo o membro?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-5">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Edema respeitando sistema venoso prof?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-6">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Godet unilateral?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-7">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Imobilização/Paresia recente?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-8">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">TVP prévia?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-9">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Dx alternativo tão ou mais provável?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-dvt-10">
                    <option value="0">Não</option>
                    <option value="-2" selected>Sim</option>
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
              <input type="checkbox" id="score-wells-pe" class="is-checkradio collapsable" data-target="sub-collapsable-wells-pe">
              <label for="score-wells-pe"><strong>TEP (Well's)</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-wells-pe">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Suspeita de TVP?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-1">
                    <option value="0" selected>Não</option>
                    <option value="3">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">TEP é a 1ª HD?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-2">
                    <option value="0" selected>Não</option>
                    <option value="3">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">FC&gt;100bpm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-3">
                    <option value="0" selected>Não</option>
                    <option value="1.5">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Acamado &gt;3d OU Cx gde porte (&le;12sem)?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-4">
                    <option value="0" selected>Não</option>
                    <option value="1.5">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">TVP ou TEP prévio?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-5">
                    <option value="0" selected>Não</option>
                    <option value="1.5">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Hemoptise?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-6">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Câncer ativo (&le;6 meses)?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-7">
                    <option value="0" selected>Não</option>
                    <option value="1">Sim</option>
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
              <input type="checkbox" id="score-pesi" class="is-checkradio collapsable" data-target="sub-collapsable-pesi">
              <label for="score-pesi"><strong>PESI</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-pesi">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Idade</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="pesi-1" placeholder="#" min="1" step="1">
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Sexo Biológico</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-2">
                    <option value="0" selected>Fêmea</option>
                    <option value="10">Macho</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Câncer ativo?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-3">
                    <option value="0" selected>Não</option>
                    <option value="30">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">IC?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-4">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">DPOC?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-5">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">FC&ge;110bpm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-6">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">PAS&lt;100mmHg?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-7">
                    <option value="0" selected>Não</option>
                    <option value="30">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">FR&ge;30irpm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-8">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Temp&lt;36°C?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-9">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Alt. de Estado Mental?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-10">
                    <option value="0" selected>Não</option>
                    <option value="60">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">SO2&lt;90%?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="wells-pe-11">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
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
              <input type="checkbox" id="score-mascc" class="is-checkradio collapsable" data-target="sub-collapsable-mascc">
              <label for="score-mascc"><strong>MASCC</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-mascc">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Severidade de Sintomas</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-1">
                    <option value="5" selected>Nenhum ou Leve</option>
                    <option value="3">Moderada</option>
                    <option value="0">Severa</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">PAS&lt;90mmHg</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-2">
                    <option value="5" selected>Não</option>
                    <option value="0">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">DPOC / DVO / Supl O<sub>2</sub></button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-3">
                    <option value="4" selected>Não</option>
                    <option value="0">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Tipo de Tumor</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-4">
                    <option value="4" selected>TU Sólido</option>
                    <option value="4">Hematológico / Sem infec. fúngica prévia</option>
                    <option value="0">Hematológico / COM infec. fúngica prévia</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Necessidade de Exp. Volêmica</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-5">
                    <option value="3" selected>Não</option>
                    <option value="0">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Febre iniciada...</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="mascc-6">
                    <option value="3" selected>Ambulatorialmente</option>
                    <option value="0">Internado</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Idade</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="mascc-7" placeholder="#" min="1" step="1">
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
              <input type="checkbox" id="score-port" class="is-checkradio collapsable" data-target="sub-collapsable-port">
              <label for="score-port"><strong>PORT</strong></label>
            </div>
          </div>

          <div class="column is-hidden" id="sub-collapsable-port">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Idade</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="port-1" placeholder="#" min="1" step="1">
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Sexo Biológico</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-2">
                    <option value="-10" selected>Fêmea</option>
                    <option value="0">Macho</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">ILP?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-3">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Câncer ativo?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-4">
                    <option value="0" selected>Não</option>
                    <option value="30">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Doença hepática?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-5">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">IC?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-6">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">AVC/AIT?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-7">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">DRC?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-8">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Alt. estado mental?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-9">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">FR&ge;30irpm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-10">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">PAS&lt;90mmHg?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-11">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Temp&lt;35°C OU &ge;40°C?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-12">
                    <option value="0" selected>Não</option>
                    <option value="15">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">FC&ge;125bpm?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-13">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">pH&lt;7.35?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-14">
                    <option value="0" selected>Não</option>
                    <option value="30">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Ureia &ge;30mg/dL?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-15">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Na &lt;130mmol/L?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-16">
                    <option value="0" selected>Não</option>
                    <option value="20">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Glic &ge;250mg/dL?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-17">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Ht &lt;30%?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-18">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">pO<sub>2</sub> &lt;60mmHg?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-19">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Derrame pleural?</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="port-20">
                    <option value="0" selected>Não</option>
                    <option value="10">Sim</option>
                  </select>
                </div>
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

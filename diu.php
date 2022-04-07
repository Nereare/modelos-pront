<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "diu";
$subtitle = "Passagem de DIU";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Subjetivo</h2>

      <h3 class="title is-5">Antecedentes Ginecológicos e Obstétricos</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Menarca</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="ago-firstmenses" min="0" max="50" placeholder="#">
        </div>
        <div class="control">
          <button class="button is-static">anos</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Coitarca</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="ago-firstsex" min="0" max="50" placeholder="#">
        </div>
        <div class="control">
          <button class="button is-static">anos</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control is-expanded">
          <input type="number" class="input" id="ago-partners" min="0" max="50" placeholder="#">
        </div>
        <div class="control">
          <button class="button is-static">parceiros no último ano</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Última relação sexual há</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="ago-lastsex" min="0" max="50" placeholder="#">
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="ago-lastsex-time" name="ago-lastsex-time">
              <option value="dia(s)" selected>dias</option>
              <option value="semana(s)">semanas</option>
              <option value="mes(es)">meses</option>
              <option value="ano(s)">anos</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">G</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-g" placeholder="G">
        </div>
        <div class="control">
          <button class="button is-static">P</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pn" placeholder="Pn">
        </div>
        <div class="control">
          <button class="button is-static">C</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-pc" placeholder="Pc">
        </div>
        <div class="control">
          <button class="button is-static">A</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="parity-a" placeholder="A">
        </div>
      </div>

      <h3 class="title is-5">Menstruação</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Ciclos</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="menses-pause" min="0" placeholder="Intervalo">
        </div>
        <div class="control">
          <button class="button is-static">/</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="menses-flow" min="0" placeholder="Fluxo">
        </div>
        <div class="control">
          <button class="button is-static">dias</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Fluxo</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="menses-volume" name="menses-volume">
              <option value="subjetivamente normal" selected>normal</option>
              <option value="aumentado">aumentado</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static">e</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="menses-coag" name="menses-coag">
              <option value="sem coágulos" selected>sem coágulos</option>
              <option value="COM coágulos">com coágulos</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Dismenorreia</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="menses-cramps" name="menses-cramps">
              <option value="ausente" selected>ausente</option>
              <option value="presente, mas leve-a-moderada">presente e tolerável</option>
              <option value="presente e intensa">intensa</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Métodos Contraceptivos Em Uso</h3>

      <div class="field">
        <div class="control">
          <input type="checkbox" class="is-checkradio" id="mac1" name="macs" value="ACO de levonorgestrel/estradiol">
          <label for="mac1">Ciclo 21</label>
          <input type="checkbox" class="is-checkradio" id="mac2" name="macs" value="ACO de noretisterona">
          <label for="mac2">Minipílula</label>
          <input type="checkbox" class="is-checkradio" id="mac3" name="macs" value="ACO de desogestrel">
          <label for="mac3">Desogestrel</label>
          <input type="checkbox" class="is-checkradio" id="mac4" name="macs" value="AC injetável de noretisterona/estradiol">
          <label for="mac4">Mesigyna</label>
          <input type="checkbox" class="is-checkradio" id="mac5" name="macs" value="AC injetável de medroxiprogesterona">
          <label for="mac5">Depoprovera</label>
          <input type="checkbox" class="is-checkradio" id="mac6" name="macs" value="condom">
          <label for="mac6">Condom</label>
          <input type="checkbox" class="is-checkradio" id="mac7" name="macs" value="coito interrompido/ejaculação externa">
          <label for="mac7">Coito interrompido</label>
          <input type="checkbox" class="is-checkradio" id="mac8" name="macs" value="tabelinha">
          <label for="mac8">Tabelinha</label>
          <input type="checkbox" class="is-checkradio" id="mac9" name="macs" value="aspecto do corrimento vaginal">
          <label for="mac9">Corrimento vaginal</label>
          <input type="checkbox" class="is-checkradio" id="mac10" name="macs" value="DIU de Cobre">
          <label for="mac10">DIU de Cobre</label>
          <input type="checkbox" class="is-checkradio" id="mac11" name="macs" value="SIU liberador de levonorgestrel">
          <label for="mac11">DIU com LNG</label>
          <input type="checkbox" class="is-checkradio" id="mac12" name="macs" value="dispositivo subcutâneo de etonogestrel">
          <label for="mac12">Implanon</label>
          <input type="checkbox" class="is-checkradio" id="mac13" name="macs" value="laqueadura tubária">
          <label for="mac13">Laqueadura</label>
          <input type="checkbox" class="is-checkradio" id="mac14" name="macs" value="laqueadura com salpingectomia">
          <label for="mac14">Salpingectomia</label>
          <input type="checkbox" class="is-checkradio" id="mac15" name="macs" value="vasectomia do parceiro">
          <label for="mac15">Vasectomia</label>
          <input type="checkbox" class="is-checkradio" id="mac16" name="macs" value="pílula do dia seguinte após relações desprotegidas">
          <label for="mac16">Pílula do Dia Seguinte</label>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <textarea class="textarea has-fixed-size" id="mac-other" rows="2" placeholder="Insira outros MACs aqui, separados por vírgula"></textarea>
        </div>
      </div>

      <h3 class="title is-5">Outros dados de Anamnese</h3>

      <div class="field">
        <div class="control is-expanded">
          <textarea class="textarea has-fixed-size" id="othersymps" rows="6" placeholder="Oe/nEstes dados clínicos serão incluídos sem processamento!"></textarea>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Objetivo</h2>

      <h3 class="title is-5">Exame Físico</h3>

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

      <h3 class="title is-5">Ginecológico</h3>

      <h4 class="title is-6">Inspeção</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Trofismo e Pilificação</button>
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
          <button class="button is-static">para idade</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Introito Vaginal</button>
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

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="gyn-insp-desc" rows="3" placeholder="Descreva lesões cutâneo-mucosas, se presentes..."></textarea>
        </div>
      </div>

      <h4 class="title is-6">Especular</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Trofismo e Vilificação</button>
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
          <button class="button is-static"> para idade</button>
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
          <button class="button is-static">de canal vaginal</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Secreções</button>
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
          <button class="button is-static">de secreção</button>
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
          <button class="button is-static">em fundo</button>
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
          <button class="button is-static">Colo Uterino</button>
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

      <h4 class="title is-6">Toque Vaginal</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Colo</button>
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
          <button class="button is-static">OIC</button>
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
          <button class="button is-static">superfície</button>
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
          <button class="button is-static">Colo Uterino</button>
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
          <button class="button is-static">à mobilização</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Anexos</button>
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
          <button class="button is-static">volumes</button>
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
          <button class="button is-static">superfície</button>
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
          <button class="button is-static">Região Anexial</button>
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

      <h4 class="title is-6">Histerometria</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Histerometria</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="gyn-hysterometry" min="0" placeholder="#">
        </div>
        <div class="control">
          <button class="button is-static">cm</button>
        </div>
        <div class="control">
          <button class="button is-static">Obtida</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="gyn-hysterometry-difficulty" name="gyn-hysterometry-difficulty">
              <option value="sem resistências" selected>sem resistências</option>
              <option value="com resistência leve, sem intercorrências ou dor">com resistência leve, sem intercorrências</option>
              <option value="com dor importante">com dor importante</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">DIU</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Modelo</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="iud-model" value="DIU de Cobre Optima 380A">
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Lote</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="iud-lot" placeholder="Número/ID de Lote">
        </div>
      </div>

      <h3 class="title is-5">Teste Rápido de Gravidez</h4>

      <div class="field has-addons">
        <div class="control">
          <input type="checkbox" class="is-checkradio" id="preg" value="true">
          <label for="preg">
            TR realizado hoje, resultado <strong>NEGATIVO</strong>.
          </label>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Avaliação</h2>

      <div class="content">
        <p class="has-text-centered">
          <span id="dx">Passagem de Dispositivo Intrauterino</span>
        </p>
        <p class="has-text-centered">
          <strong>CID-10</strong> Z30.1
        </p>
        <p class="has-text-centered">
          <strong>PSUS</strong> 0301040141
        </p>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Plano</h2>

      <div class="content">
        <ol>
          <h4>Pré-Procedimento</h4>
          <li>
            Oriento MACs disponíveis na rede pública;
          </li>
          <li>
            Paciente ciente, escolhe DIU de Cobre;
          </li>
          <li>
            Oriento efeitos colaterais;
          </li>
          <li>
            Tiro dúvidas quanto aos método contraceptivo e passagem de DIU;
          </li>
          <li>
            Discuto termo de passagem de DIU de Cobre;
          </li>
          <h4>Analgesia Pré-Procedimento</h4>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">Analgesia</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-painkillers">
                    <option value="false" selected>não</option>
                    <option value="true">feita</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <div class="select">
                  <select id="p-painkillers-via" disabled>
                    <option value="via oral" selected>VO</option>
                    <option value="parenteral">IV/IM</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static">com</button>
              </div>
              <div class="content is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-painkillers-med" disabled>
                    <option value="dipirona" selected>Dipirona</option>
                    <option value="paracetamol">Paracetamol</option>
                    <option value="dipirona + escopolamina">Buscopam</option>
                    <option value="ibuprofeno">Ibuprofeno</option>
                    <option value="cetoprofeno">Cetoprofeno</option>
                    <option value="naproxeno">Naproxeno</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <h4>Preparo do Procedimento</h4>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">Decúbito Dorsal</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-elevation">
                    <option value="com elevação de cabeceira a 30°">cabiceira a 30°</option>
                    <option value="sem elevação de cabeceira">plano</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            Ex Gin normal, sem ISTs;
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">Assepsia com</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-asepsis">
                    <option value="iodopovidona" selected>povidine</option>
                    <option value="clorexedina aquosa">clorex aquoso</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">Bloqueio</button>
              </div>
              <div class="control">
                <div class="select">
                  <select id="p-block">
                    <option value="false">não</option>
                    <option value="true">feito</option>
                  </select>
                </div>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-block-method" disabled>
                    <option value="paracervical" selected>paracervical</option>
                    <option value="de n. pudendo">de pudendo</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            Insiro DIU com técnica estéril;
          </li>
          <h4>Pós-Procedimento</h4>
          <li>
            Tiro dúvidas / <em>debriefing</em>;
          </li>
          <li>
            Prescrevo analgesia com AINE;
          </li>
          <li>
            Oriento cuidados locais;
          </li>
          <li>
            Oriento efeitos adversos da passagem de DIU;
          </li>
          <li>
            Oriento sinais de alarme;
          </li>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">USG TV</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="p-usg">
                    <option value="false" selected>não solicitado</option>
                    <option value="true">solicitado</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li>
            Retorno após fim da próxima menstruação;
          </li>
          <li>
            Oriento método de barreira pelos próximos 30 dias;
          </li>
          <h4>Retorno</h4>
          <li>
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static">Troca em</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="return-month" name="return-month">
                    <option value="1" selected>janeiro</option>
                    <option value="2">fevereiro</option>
                    <option value="3">março</option>
                    <option value="4">abril</option>
                    <option value="5">maio</option>
                    <option value="6">junho</option>
                    <option value="7">julho</option>
                    <option value="8">agosto</option>
                    <option value="9">setembro</option>
                    <option value="10">outubro</option>
                    <option value="11">novembro</option>
                    <option value="12">dezembro</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button class="button is-static">/</button>
              </div>
              <div class="control is-expanded">
                <input type="number" class="input" id="return-year" min="2021" placeholder="AAAA">
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Resultado</h2>

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
          <button id="button-s" class="button is-fullwidth copybtn" data-clipboard-target="#output-s">Copiar Subjetivo</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-o" placeholder="Objetivo" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button id="button-o" class="button is-fullwidth copybtn" data-clipboard-target="#output-o">Copiar Objetivo</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-a" placeholder="Avaliação" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button id="button-a" class="button is-fullwidth copybtn" data-clipboard-target="#output-a">Copiar Avaliação</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output-p" placeholder="Plano" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button id="button-p" class="button is-fullwidth copybtn" data-clipboard-target="#output-p">Copiar Plano</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

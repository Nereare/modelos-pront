<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "psico";
$subtitle = "Exame Psíquico";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Apresentação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Aparência</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="present-appearence" name="present-appearence">
              <option value="adequada para contexto e expectativas sociais" selected>adequada</option>
              <option value="asseio diminuído">asseio diminuído</option>
              <option value="asseio bastante comprometido">asseio ausente</option>
              <option value="roupas hipersexualizadas e inapropriadas para contexto e expectativas sociais">hipersexualizada e inapropriadas</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="present-appearence-other" placeholder="Descreva aparência..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Expressão Facial</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="present-expression" name="present-expression">
              <option value="desolada">desolada</option>
              <option value="chorosa">chorosa</option>
              <option value="entristecida">entristecida</option>
              <option value="atípica" selected>atípica</option>
              <option value="preocupada">preocupada</option>
              <option value="ansiosa">ansiosa</option>
              <option value="irada">irada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="present-expression-other" placeholder="Descreva expressão facial aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Postura</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="present-posture" name="present-posture">
              <option value="fechada e ensimesmada, sem aberturas">fechada e sem aberturas</option>
              <option value="fechada e evitando contato visual">fechada e evitante</option>
              <option value="fechada">fechada</option>
              <option value="atípica" selected>atípica</option>
              <option value="expansiva">expansiva</option>
              <option value="expansiva e com contatos inadequados para contexto">expansiva e contatos inadequados</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="present-posture-other" placeholder="Descreva postura aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Interação/Cooperação</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="present-interaction" name="present-interaction">
              <option value="ausente, por paciente não estar sem comunicando (catatonia)">catatonia</option>
              <option value="diminuída e com aspectos de desconfiança">diminuída e desconfiante</option>
              <option value="diminuída">diminuída</option>
              <option value="adequada" selected>adequada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="present-interaction-other" placeholder="Descreva interação/cooperação aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Linguagem e Pensamento</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Característica da Fala</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-characteristic" name="language-characteristic">
              <option value="espontânea e atípica" selected>normal</option>
              <option value="logorreica">logorreica</option>
              <option value="com pressão de discurso">pressão de discurso</option>
              <option value="lentificada">lentificada</option>
              <option value="paciente não se comunica durante todo o exame, não sendo possível analizar linguagem">ausente</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-characteristic-other" placeholder="Descreva característica da fala aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Fluxo da Fala</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-flow" name="language-flow">
              <option value="com velocidade e linearidade preservadas" selected>normal e linear</option>
              <option value="acelerado">acelerado</option>
              <option value="acelerado e com descarrilhamento do trem de pensamento">acelerado + descarrilhamentos</option>
              <option value="lentificado">lentificado</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-flow-other" placeholder="Descreva fluxo da fala aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Forma</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-form" name="language-form">
              <option value="articulada e estruturada" selected>articulada e estruturada</option>
              <option value="arborizante e com fugas do tópico em discussão frequentes">arborizante</option>
              <option value="passiva e reativa, com respostas monossilábicas às perguntas dirigidas, paciente não inicia conversa ou traz tópicos seus para discussão">reativa e monossilábica</option>
              <option value="desorganizada e com pouca linearidade">desorganizada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-form-other" placeholder="Descreva forma aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Conteúdo</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-contents" name="language-contents">
              <option value="depressivo e com ideação suicida estruturada">depressivo + ideação suicida estruturada</option>
              <option value="depressivo e com ideação suicida não-estruturada">depressivo + ideação suicida</option>
              <option value="depressivo e com pensamentos em morte">depressivo + morte</option>
              <option value="negativo e autodepreciativo">negativo e autodepreciativo</option>
              <option value="negativo">negativo</option>
              <option value="empobrecido">empobrecido</option>
              <option value="adequado para contexto" selected>adequado</option>
              <option value="ansioso e com excesso de preocupações e medos">ansioso e preocupado</option>
              <option value="delirante e com certa desconexão da realidade">delirante e desconectado</option>
              <option value="delirante e com autoimportância exaltada">delirante e com autoimportância&uarr;</option>
              <option value="com delírios persecutórios sobressalentes">delírios persecutórios</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-contents-other" placeholder="Descreva conteúdo aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente a como as informações dadas pelo paciente fazem sentido dentro do discurso. Um paciente em franco delírio persecutório pode ter lógica interna preservada pois seu discurso mantém nexo interno de verossimilhança, apesar de as informações não corresponderem com a realidade externa.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Lógica Interna</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-internallogic" name="language-internallogic">
              <option value="nexo interno do discurso preservado" selected>preservada</option>
              <option value="ausência de nexo interno de alguns pontos do discurso">parcial</option>
              <option value="discurso sem nexo interno">ausente</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-internallogic-other" placeholder="Descreva lógica interna aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente a como as informações dadas pelo paciente fazem sentido em face da realidade em que o paciente está inserido. Geralmente alterada em alucinações e delírios.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Lógica Externa</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-externallogic" name="language-externallogic">
              <option value="preservada, mantendo uma percepção verossímil da realidade" selected>preservada</option>
              <option value="presença de algumas interpretações distorcidas da realidade em meio à uma percepção de outro modo preservada">parcial</option>
              <option value="discurso do paciente demonstra desconexão com a realidade externa">ausente</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-externallogic-other" placeholder="Descreva lógica externa aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Capacidade de Abstração</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="language-abstraction" name="language-abstraction">
              <option value="preservada" selected>preservada</option>
              <option value="diminuída, com dificuldade de compreensão de conceitos abstratos mais complexos">diminuída</option>
              <option value="francamente diminuída, com dificuldade de compreensão mesmo de conceitos abstratos simples e corriqueiros">muito diminuída</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="language-abstraction-other" placeholder="Descreva capacidade de abstração aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Sensopercepção</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Alucinações Visuais</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="hallucinations" id="hallucinations-visual" name="hallucinations-visual">
              <option value="ausentes" selected>ausentes</option>
              <option value="presentes e se manifestando por ">presentes</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hallucinations-visual-desc" placeholder="Descreva a manifestação dessa alucinação..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Alucinações Auditivas</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="hallucinations" id="hallucinations-hearing" name="hallucinations-hearing">
              <option value="ausentes" selected>ausentes</option>
              <option value="presentes e se manifestando por ">presentes</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hallucinations-hearing-desc" placeholder="Descreva a manifestação dessa alucinação..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Alucinações Tácteis</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="hallucinations" id="hallucinations-tactile" name="hallucinations-tactile">
              <option value="ausentes" selected>ausentes</option>
              <option value="presentes e se manifestando por ">presentes</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hallucinations-tactile-desc" placeholder="Descreva a manifestação dessa alucinação..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Afeto e Humor</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Tonalidade</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="mood-tone" name="mood-tone">
              <option value="catatônica">catatônica</option>
              <option value="depressiva">depressiva</option>
              <option value="hipotímica">hipotímica</option>
              <option value="eutímica" selected>eutímica</option>
              <option value="eufórica">eufórica</option>
              <option value="hipomaníaca">hipomaníaca</option>
              <option value="maníaca">maníaca</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="mood-tone-other" placeholder="Descreva tonalidade aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Modulação</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="mood-modulation" name="mood-modulation">
              <option value="hipermodulante">hipermodulante</option>
              <option value="normomodulante" selected>normomodulante</option>
              <option value="hipomodulante">hipomodulante</option>
              <option value="humor embotado, mantendo-se em mesmo patamar de humor sem qualquer variação">embotado</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="mood-modulation-other" placeholder="Descreva modulação aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Ressonância</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="mood-resonance" name="mood-resonance">
              <option value="adequada" selected>adequada</option>
              <option value="diminuída, respondendo muito pouco a variações dos tom e humor da anamnese">diminuída</option>
              <option value="ausente, não respondendo a variações dos tom e humor da anamnese">ausente</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="mood-resonance-other" placeholder="Descreva ressonância aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Associação Pensamento-Afeto</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="mood-moodthought" name="mood-moodthought">
              <option value="preservada" selected>preservada</option>
              <option value="fragmentada, com respostas de humor bastante distoantes daquelas esperadas para o desencadeante">dissociada</option>
              <option value="framentada devido ao embotamento de humor e hipoexpressão, dificultando a sondagem do afeto">difícil avaliação por embotamento</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="mood-moodthought-other" placeholder="Descreva associação pensamento-afeto aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <p class="help">Baseado no modelo de Sohlberg e Mateer (1987, 1989).</p>
      <h2 class="title is-4">Atenção e Concentração</h2>

      <p class="help">Referente ao nível basal de atenção e de alerta, independente do nível de consciência.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Espontânea</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-spontaneous" name="attention-spontaneous">
              <option value="preservada" selected>preservada</option>
              <option value="diminuída e demandando estímulos frequentes para manutenção">diminuída</option>
              <option value="aumentada, com quês de persecutoriedade">aumentada e persecutória</option>
              <option value="não testada">não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-spontaneous-other" placeholder="Descreva atenção espontânea aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente à capacidade de manter foco em um estímulo específico.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Focada</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-focused" name="attention-focused">
              <option value="preservada" selected>preservada</option>
              <option value="diminuída e demandando estímulos frequentes para manutenção">diminuída</option>
              <option value="não testada">não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-focused-other" placeholder="Descreva atenção focada aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente à capacidade de manter foco em um estímulo específico por longos períodos de tempo.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Sustentada</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-sustained" name="attention-sustained">
              <option value="preservada" selected>preservada</option>
              <option value="diminuída e demandando estímulos frequentes para manutenção">diminuída</option>
              <option value="não testada">não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-sustained-other" placeholder="Descreva atenção sustentada aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente à capacidade de focar em um estímulo específico quando em face de diversos estímulos concomitantes.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Seletiva</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-selective" name="attention-selective">
              <option value="preservada">preservada</option>
              <option value="diminuída e alternando não intencionalmente entre os diversos estímulos">diminuída</option>
              <option value="não testada" selected>não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-selective-other" placeholder="Descreva atenção seletiva aqui" disabled>
        </div>
      </div>

      <p class="help">Referente à capacidade de intercalar foco em diferentes estímulos.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Alternante</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-alternating" name="attention-alternating">
              <option value="preservada">preservada</option>
              <option value="diminuída e alternando não intencionalmente entre os diversos estímulos">diminuída</option>
              <option value="não testada" selected>não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-alternating-other" placeholder="Descreva atenção alternante aqui..." disabled>
        </div>
      </div>

      <p class="help">Referente à capacidade de dedicar foco a mais de um estímulo ao mesmo tempo.</p>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Atenção Dividida</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="attention-divided" name="attention-divided">
              <option value="preservada">preservada</option>
              <option value="diminuída e perdendo foco em estímulos não premeditadamente">diminuída</option>
              <option value="não testada" selected>não testada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="attention-divided-other" placeholder="Descreva atenção dividida aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Memória</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Memória</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="memory" name="memory">
              <option value="não testada formalmente, mas sem acometimentos aparentes, com paciente referindo própria história com nexo temporal e sem dificuldades" selected>não testada mas ok</option>
              <option value="não testada">não testada</option>
              <option value="com paciente referindo lapsos de memória fortemente associados a déficit de atenção, sem acomentimento de memória aparente">preocupação subjetiva, mas ok</option>
              <option value="testada com Mini Exame do Estado Mental resultando em ">Mini Mental de...</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="memory-other" placeholder="Descreva memória aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Mini-Mental</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="memory-minimental-grade" placeholder="Escore" disabled>
        </div>
        <div class="control">
          <button class="button is-static">/</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="memory-minimental-aim" name="memory-minimental-aim" disabled>
              <option value="20 (0 anos de estudo)" selected>20 (0</option>
              <option value="25 (1 a 4 anos de estudo)">25 (1 a 4</option>
              <option value="26 (5 a 8 anos de estudo)">26 (5 a 8</option>
              <option value="28 (9 a 11 anos de estudo)">28 (9 a 11</option>
              <option value="29 (mais de 11 anos de estudo)">29 (mais de 11</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth">anos de estudo)</button>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Orientação</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Tempo</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="orientation-time" name="orientation-time">
              <option value="paciente orientade no tempo" selected>orientado</option>
              <option value="desorientade no tempo">desorientado</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="orientation-time-other" placeholder="Descreva orientação no tempo aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Espaço</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="orientation-space" name="orientation-space">
              <option value="paciente orientade no espaço" selected>orientado</option>
              <option value="desorientade no espaço">desorientado</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="orientation-space-other" placeholder="Descreva orientação no espaço aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Outros</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Consciência</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="conscience" name="conscience">
              <option value="preservada" selected>preservada</option>
              <option value="fala incongruente e paciente sonolente">GCS 14</option>
              <option value="sonolência importante">sonolento</option>
              <option value="estado crepuscular">estado crepuscular</option>
              <option value="paciente comatose">coma</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="conscience-other" placeholder="Descreva consciência aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Inteligência</button>
        </div>
        <div class="control">
          <div class="select">
            <select class="otherable" id="intelligence" name="intelligence">
              <option value="não testada, mas sem acometimentos aparentes" selected>não testada mas ok</option>
              <option value="não testada">não testada</option>
              <option value="aparentemente comprometida de algum grau">reduzida</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="intelligence-other" placeholder="Descreva inteligência aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static">Crítica</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="critic" name="critic">
              <option value="preservada" selected>preservada</option>
              <option value="levemente comprometida">levemente comprometida</option>
              <option value="muito comprometida">muito comprometida</option>
              <option value="ausente">ausente</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Riscos</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-danger" disabled>Autoagressão</button>
        </div>
        <div class="control">
          <div class="select is-danger">
            <select class="otherable" id="risks-self" name="risks-self">
              <option value="nega ideação ou planejamento autoagressivo" selected>Sem ideação/plano</option>
              <option value="refere pensamentos em morte, sem ideação autoagressiva">Pensamentos em morte</option>
              <option value="refere pensamento em se automutilar como meio para lidar com a dor, sem ideação suicida">Mutilação sem ideação</option>
              <option value="refere ideação suicida sem um plano claro">Ideação não-estruturada</option>
              <option value="refere ideação suicida, tendo um plano de ação, modo como pretende se matar, a que horas e já tendo feito planos de como se preparar">Ideação estruturada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input is-danger" id="risks-self-other" placeholder="Descreva risco de autoagressão aqui..." disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-danger" disabled>Heteroagressão</button>
        </div>
        <div class="control">
          <div class="select is-danger">
            <select class="otherable" id="risks-other" name="risks-other">
              <option value="nega ideação ou planejamento heteroagressivo">Sem ideação/planos</option>
              <option value="refere desejo de agredir outras pessoas, em especial quem a irrita, mas nega achar que irá agir em tal desejo">Agressividade habitual</option>
              <option value="refere que acredita que pode perder o controle sobre si e agredir outrém">Risco de agressão</option>
              <option value="refere que não só acredita que pode perder o controle sobre si, como que já perdeu e agrediu pessoas ao seu redor">Agressividade manifesta</option>
              <option value="se mostra agressive em relação à equipe, a ponto de nos botar em risco de agressão">Agressividade presenciada</option>
              <option value="outro">outro...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input is-danger" id="risks-other-other" placeholder="Descreva risco de heteroagressão aqui..." disabled>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-primary" id="button-run">Gerar</button>
        </div>
      </div>

      <div class="field">
        <textarea class="textarea has-fixed-size" id="output-o" placeholder="Objetivo" rows="15" readonly></textarea>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-o" data-clipboard-target="#output-o">Copiar Objetivo</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

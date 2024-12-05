<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "rx";
$subtitle = "Laudos de Rx";

require_once "header.php";
?>

<main class="section">
  <div class="container">
      <div class="tabs is-centered is-toggle">
        <ul>
          <li>
            <a class="report-type" id="report-default" data-type="thorax" data-laterality="false">
              <span class="icon is-small">
                <i class="mdi mdi-lungs"></i>
              </span>
              <span>Tórax</span>
            </a>
          </li>
          <li>
            <a class="report-type" data-type="abdomen" data-laterality="false">
              <span class="icon is-small">
                <i class="mdi mdi-stomach"></i>
              </span>
              <span>Abdome</span>
            </a>
          </li>
          <li>
            <a class="report-type" data-type="column" data-laterality="false">
              <span class="icon is-small">
                <i class="mdi mdi-pillar"></i>
              </span>
              <span>Colunas</span>
            </a>
          </li>
          <li>
            <a class="report-type" data-type="sinuses" data-laterality="false">
              <span class="icon is-small">
                <i class="mdi mdi-skull-scan"></i>
              </span>
              <span>Seios Face</span>
            </a>
          </li>
        </ul>
      </div>

    <div class="box">
      <h2 class="title is-4">Meta</h2>

      <input type="hidden" id="type">

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Data</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="date-type">
              <option value="" selected>Hoje</option>
              <option value="ontem">Ontem</option>
              <option value="foo">Outra...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="date" class="input" id="date" disabled>
        </div>
        <div class="control">
          <button class="button is-danger" id="date-clear">
            <span class="icon">
              <i class="mdi mdi-calendar-remove mdi-18px"></i>
            </span>
          </button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Lateralidade</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="side">
              <option value="" selected>N/A</option>
              <option value="D">Direita</option>
              <option value="E">Esquerda</option>
            </select>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Técnica Geral</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Penetração</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="adequability-exposure">
              <option value="Pouco penetrado">&#x1f53b;Baixa</option>
              <option value="ok" selected>&#x2705;Adequada</option>
              <option value="Muito penetrado">&#x1f53a;Excessiva</option>
              <option value="Penetração excessiva, ao ponto de inviabilizar análise fidedigna das estruturas de interesse">&#x1f53a;&#x1f53a;Radioterêutica Ablativa</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Sem Superimposições</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="adequability-technique" data-wrong="Presença de sobreposição de estruturas outras interferindo na adequada avaliação das estruturas de interesse">
              <option value="ok" selected>Adequado</option>
              <option value="shat">Inadequado</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Incidência Ortogonal</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="adequability-orthogonal" data-wrong="Ausência de incidência ortogonal para exclusão de imagens de somação">
              <option value="ok" selected>Presente</option>
              <option value="shat">Ausente</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Paciente</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Colaboração</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="adequability-collaboration">
              <option value="ok" selected>Adequada</option>
              <option value="shat">Inadequada</option>
            </select>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Técnica Específica</h3>

      <div class="technique-box" id="technique-box-thorax">
        <h4 class="title is-6">Tórax PA+Perfil</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Projeção Póstero&rarr;Anterior</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique thorax" data-wrong="Projeção sagital invertida podendo alargar área cardíaca artefatualmente e/ou minimizar imagens retrocardíacas">
                <option value="ok" selected>Adequada</option>
                <option value="shat">Inadequada</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Centrado Plano Axial</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique thorax" data-wrong="Rodado no plano axial com possível movimentações horizontais artefatuais de estruturas">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Centrado Plano Sagital</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique thorax" data-wrong="Rodado no plano sagital com possível movimentações verticais artefatuais de estruturas">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Bem Inspirado</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique thorax" data-wrong="Inspiração insuficiente aumentando atenuações de todas as estruturas pulmonares anatômicas ou não">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">MMSS Abduzidos/Extendidos</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique thorax" data-wrong="MMSS pouco removidos dos campos de avaliação radiográfica de interesse">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="technique-box" id="technique-box-abdomen">
        <h4 class="title is-6">Abdome Agudo</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Inclui Diafragma&harr;Pelve</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique column" data-wrong="Imagem não inclui das cúpulas diafragmáticas até a pelve">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="technique-box" id="technique-box-sinuses">
        <h4 class="title is-6">Seios da Face</h4>

        <div class="content">
          <p>O que se avaliar da técnica de um exame irrelevante para PS?</p>
        </div>
      </div>

      <div class="technique-box" id="technique-box-column">
        <h4 class="title is-6">Colunas</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Centrado Plano Sagital</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique column" data-wrong="Rodado no plano sagital com superposição artefatual de corpos vertebrais e dificuldade de delimitação de seus limites">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Centrado Plano Coronal</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select class="adequability-technique column" data-wrong="Rodado no plano coronal com superposição artefatual de corpos vertebrais e dificuldade de delimitação de seus limites">
                <option value="ok" selected>Adequado</option>
                <option value="shat">Inadequado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- end of meta box -->
    </div>

    <div class="box">
      <h3 class="title is-5">Avaliação</h3>

      <div class="eval-box" id="eval-box-thorax">
        <!-------------------------------------------->
        <!--                 Thorax                 -->
        <!-------------------------------------------->
        <h4 class="title is-6">Coração</h4>

        <div class="columns">
          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <button class="button is-static" tabindex="-1">Área Cardíaca</button>
              </div>
              <div class="control is-expanded">
                <div class="select is-fullwidth">
                  <select id="heart-area">
                    <option value="dentro dos limites da normalidade" selected>Normal</option>
                    <option value="próxima do limite superior da normalidade (não configurando cardiomegalia)">Limítrofe</option>
                    <option value="aumentada">Aumentada</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <input type="number" class="input" id="heart-width" min="1" step="1" placeholder="# mm" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">/</button>
              </div>
              <div class="control">
                <input type="number" class="input" id="heart-hemithorax-width" min="1" step="1" placeholder="# mm" disabled>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">&cong;</button>
              </div>
              <div class="control">
                <input type="text" class="input" id="heart-ratio" placeholder="# %" readonly disabled>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Rotação</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="heart-side">
                <option value="normal" selected>Esquerda</option>
                <option value="Dextrocardia (situs inversus totalis)">DIREITA</option>
                <option value="Coração centrado">CENTRAL</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Mediastino</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Botão Aórtico</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="mediastinum-aorta">
                <option value="sem particularidades ao método" selected>Ndn</option>
                <option value="discretamente alargado">&half;Aumentado</option>
                <option value="alargado">Aumentado</option>
              </select>
            </div>
          </div>
          <div class="control">
            <div class="select">
              <select id="mediastinum-aorta-calcium">
                <option value="" selected>SEM calcificações</option>
                <option value=", com imagens semilunares sugestivas de aumento de índice de cálcio e/ou ateroesclerose">Ateromas</option>
                <option value=", com silhueta aórtica bem determinável mesmo ao método altamente inespecífico para tal definição">Sombra Aórtica</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Botão Pulmonar</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="mediastinum-pulmonary">
                <option value="normal" selected>Ndn</option>
                <option value="discretamente alargado">&half;Aumentado</option>
                <option value="alargado">Aumentado</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Timo</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="mediastinum-thymus">
                <option value="" selected>Ndn</option>
                <option value="Silhueta tímica com área aumentada">Aumentada</option>
                <option value="Silhueta tímica com área aumentada, SINAL DA VELA observável">Aumentada + Vela</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Carina</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="mediastinum-carina">
                <option value="centrada" selected>Centrada</option>
                <option value="desviada à esquerda">Desvio Esq</option>
                <option value="desviada à direita">Desvio Dir</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Campos Pulmonares</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Hilo Pulmonar</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="lung-hilum">
                <option value="normal" selected>Normal</option>
                <option value="discretamente hiperatenuados">&darr;Infiltrado</option>
                <option value="moderadamente hiperatenuados">&half;Infiltrado</option>
                <option value="intensamente hiperatenuados">&uarr;Infiltrado</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="lung-hilum-sides" disabled>
                <option value="bilateral e simetricamente" selected>Simétrico</option>
                <option value="principalmente à esquerda">&uarr;Esq</option>
                <option value="principalmente à direita">&uarr;Dir</option>
              </select>
            </div>
          </div>
          <div class="control">
            <div class="select">
              <select id="lung-hilum-hyper" disabled>
                <option value="sem predomínios" selected>&empty;Predomínios</option>
                <option value="com predomínio de ramos superiores">Superior</option>
                <option value="com predomínio de ramos inferiores">Inferior</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Campos Pulmonares</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="lung-pneumonia">
                <option value="" selected>Ausentes</option>
                <option value="nódulo|nódulos">Nódulo</option>
                <option value="massa|massas">Massa</option>
                <option value="cavitação|cavitações">Cavitação</option>
                <option value="consolidação|consolidações">Consolidação</option>
                <option value="consolidação com broncograma aéreo|consolidações com broncogramas aéreos">Consolidações+Broncograma</option>
              </select>
            </div>
          </div>
        </div>

        <div class="columns ml-5 mr-5 is-hidden" id="lung-pneumonia-desc">
          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-right-top" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-right-top" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">LSD</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-right-top-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-right-middle" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-right-middle" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">LMD</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-right-middle-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-right-bottom" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-right-bottom" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">LID</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-right-bottom-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
          </div>

          <div class="column">
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-left-top" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-left-top" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">LSE</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-left-top-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-left-retrocardiac" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-left-retrocardiac" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">Retrocardíaco</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-left-retrocardiac-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
            <div class="field has-addons">
              <div class="control">
                <label for="lung-pneumonia-left-bottom" class="button">
                  <span class="icon">
                    <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                  </span>
                  <input type="checkbox" class="is-hidden checkbutton" id="lung-pneumonia-left-bottom" value="true">
                </label>
              </div>
              <div class="control">
                <button class="button is-static" tabindex="-1">LIE</button>
              </div>
              <div class="control is-expanded">
                <input type="text" class="input" id="lung-pneumonia-left-bottom-size" min="1" step="1" placeholder="# mm">
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Seios Costofrênicos</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="lung-effusion">
                <option value="normal" selected>Livres</option>
                <option value="com derrame pleural à direita">Ocupado Dir</option>
                <option value="com derrame pleural à esquerda">Ocupado Esq</option>
                <option value="com derrame pleural bilateralmente">Ocupado Bilat</option>
              </select>
            </div>
          </div>
          <div class="control">
            <input type="number" class="input" id="lung-effusion-right" placeholder="Dir: # mm" disabled>
          </div>
          <div class="control">
            <input type="number" class="input" id="lung-effusion-left" placeholder="Esq: # mm" disabled>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Cúpulas Diafragmáticas</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="lung-diaphragm">
                <option value="" selected>N/A</option>
                <option value="sem retificações observáveis">SEM retificações</option>
                <option value="com retificação à direita">Retificada Dir</option>
                <option value="com retificação à esquerda">Retificada Esq</option>
                <option value="retificadas bilateralmente">Retificadas Bilat</option>
                <option value="com rechaço superior à direita">Elevada Dir</option>
                <option value="com rechaço superior à esquerda">Elevada Esq</option>
                <option value="com rechaço superior bilateral">Elevada Bilat</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Pleuras</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="lung-pleura">
                <option value="" selected>SEM alterações</option>
                <option value="shat">ALTERADAS</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">com</button>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="lung-pleura-desc" placeholder="alterações aqui..." disabled>
          </div>
        </div>

        <h4 class="title is-6">Abdome</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Bolha Gástrica</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdome-stomach">
                <option value="" selected>N/A</option>
                <option value="observável">Presente</option>
                <option value="NÃO observável">Ausente</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">à</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdome-stomach-side">
                <option value=" à esquerda">Esquerda</option>
                <option value=" à DIREITA">DIREITA</option>
                <option value="">N/A</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Fígado</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdome-liver">
                <option value="" selected>Sem pneumoperitônio</option>
                <option value="shat">COM pneumoperitônio</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Partes Moles</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Clavículas</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="soft-clavicules">
                <option value="">sem alterações</option>
                <option value="com ">ALTERADAS</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">com</button>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="soft-clavicules-desc" placeholder="alterações aqui..." disabled>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Arcos Costais</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="soft-ribs">
                <option value="">sem alterações</option>
                <option value="shat">ALTERADOS</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">com</button>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="soft-ribs-desc" placeholder="alterações aqui..." disabled>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Enfisema Subcutâneo</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="soft-emphisema">
                <option value="">ausente</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">em</button>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="soft-emphisema-desc" placeholder="topografia(s)..." disabled>
          </div>
        </div>
      </div>

      <div class="eval-box" id="eval-box-sinuses">
        <!-------------------------------------------->
        <!--                Sinuses                 -->
        <!-------------------------------------------->
        <div class="content">
          <p>A não ser que você tenha pedido esse exame para avaliar padrão de "crânio em sal e pimenta", lembre-se que <a target="_blank" href="https://aborlccf.org.br/wp-content/uploads/2022/09/TemasAtualizacaoRinologia4.pdf"><strong>a própria ABORL</strong> o considera inútil no diagnóstico de sinusite desde 1998</a>! &#x1f600;</p>
          <p>(Em específico, note página 23, sob <em>Diagnóstico radiológico</em>.)</p>
        </div>
      </div>

      <div class="eval-box" id="eval-box-column">
        <!-------------------------------------------->
        <!--                Cervical                -->
        <!-------------------------------------------->
        <div class="field">
          <input type="checkbox" class="switch is-rounded" id="column-cervical">
          <label for="column-cervical"><strong>Cervical</strong></label>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Escoliose</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-scoliosis">
                <option value="ok" selected>ausente</option>
                <option value="meh">mínima</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">de ~</button>
          </div>
          <div class="control">
            <input type="number" class="input" id="column-cervical-scoliosis-angle" placeholder="#°..." disabled>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">° à</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="column-cervical-scoliosis-side" disabled>
                <option value="esquerda">Esq</option>
                <option value="direita">Dir</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Dorso/Anterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-listhesis-sagital" data-target="column-cervical-listhesis-sagital-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-listhesis-sagital-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- C1 through C4 -->
            <div class="column">
              <!-- C1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c1-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c1-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- C2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c2-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c2-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- C3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c3-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c3-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- C4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c4-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c4-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- C5 through C7 -->
            <div class="column">
              <!-- C5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c5-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c5-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- C6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c6-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c6-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- C7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-sagital-c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-sagital-c7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-sagital-c7-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-sagital-c7-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-1-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-1-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-1-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-1-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Laterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-listhesis-lateral" data-target="column-cervical-listhesis-lateral-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-listhesis-lateral-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- C1 through C4 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c1-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c1-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c2-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c2-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c3-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c3-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c4-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c4-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- C5 through C7 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c5-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c5-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c6-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c6-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-listhesis-lateral-c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-listhesis-lateral-c7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-listhesis-lateral-c7-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-listhesis-lateral-c7-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-2-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-2-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-2-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-2-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Osteófitos</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-ostheophites" data-target="column-cervical-ostheophites-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-ostheophites-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- C1 through C4 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c1">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C1</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C2</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C3</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C4</button>
                </div>
              </div>
            </div>
            <!-- C5 through C7 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C5</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c6">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C6</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ostheophites-c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ostheophites-c7">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C7</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Reduções Discais</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-ddd" data-target="column-cervical-ddd-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-ddd-container">
          <!-- Intervertebra -->
          <div class="columns">
            <!-- C1-C2 through C3-C4 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c1c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c1c2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C1-C2</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c2c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c2c3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C2-C3</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c3c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c3c4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C3-C4</button>
                </div>
              </div>
            </div>
            <!-- C4-C5 through C6-C7 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c4c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c4c5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C4-C5</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c5c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c5c6">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C5-C6</button>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-ddd-c6c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-ddd-c6c7">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">C6-C7</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Fx Fragilidade</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-fx" data-target="column-cervical-fx-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-fx-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- C1 through C4 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c1-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c1-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c1-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c2-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c2-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c2-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c3-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c3-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c3-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c4-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c4-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c4-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- C5 through C7 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c5-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c5-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c5-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c6-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c6-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c6-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-fx-c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-fx-c7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-fx-c7-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c7-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-fx-c7-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Lesões</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-cervical-lesion" data-target="column-cervical-lesion-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-cervical-lesion-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- C1 through C4 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c1-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c1-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c2-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c2-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c3-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c3-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c4-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c4-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- C5 through C7 -->
            <div class="column">
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c5-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c5-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c6-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c6-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <label for="column-cervical-lesion-c7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-cervical-lesion-c7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-cervical-lesion-c7-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-cervical-lesion-c7-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-------------------------------------------->
        <!--                Torácica                -->
        <!-------------------------------------------->
        <div class="field">
          <input type="checkbox" class="switch is-rounded" id="column-thorax">
          <label for="column-thorax"><strong>Torácica</strong></label>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Escoliose</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-scoliosis">
                <option value="ok" selected>ausente</option>
                <option value="meh">mínima</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">de ~</button>
          </div>
          <div class="control">
            <input type="number" class="input" id="column-thorax-scoliosis-angle" placeholder="#°..." disabled>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">° à</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="column-thorax-scoliosis-side" disabled>
                <option value="esquerda">Esq</option>
                <option value="direita">Dir</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Cifose</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-ciphosis">
                <option value="ok" selected>Normal</option>
                <option value="retificação da cifose fisiológica">Retificada</option>
                <option value="hipercifose">Hipercifose</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Dorso/Anterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-listhesis-sagital" data-target="column-thorax-listhesis-sagital-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-listhesis-sagital-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- T1 through T6 -->
            <div class="column">
              <!-- T1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t1-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t1-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t2-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t2-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t3-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t3-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t4-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t4-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t5-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t5-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t6-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t6-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- T7 through T12 -->
            <div class="column">
              <!-- T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t7-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t7-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t8">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T8</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t8-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t8-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t9">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T9</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t9-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t9-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t10">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T10</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t10-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t10-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t11">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T11</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t11-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t11-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-sagital-t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-sagital-t12">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T12</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-sagital-t12-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-sagital-t12-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-3-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-3-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-3-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-3-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Laterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-listhesis-lateral" data-target="column-thorax-listhesis-lateral-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-listhesis-lateral-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- T1 through T6 -->
            <div class="column">
              <!-- T1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t1-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t1-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t2-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t2-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t3-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t3-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t4-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t4-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t5-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t5-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t6-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t6-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- T7 through T12 -->
            <div class="column">
              <!-- T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t7-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t7-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t8">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C8</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t8-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t8-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t9">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C9</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t9-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t9-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t10">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C10</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t10-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t10-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t11">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C11</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t11-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t11-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-listhesis-lateral-t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-listhesis-lateral-t12">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">C12</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-listhesis-lateral-t12-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-listhesis-lateral-t12-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-4-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-4-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-4-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-4-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Osteófitos</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-ostheophites" data-target="column-thorax-ostheophites-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-ostheophites-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- T1 through T6 -->
            <div class="column">
              <!-- T1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t1">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T1</button>
                </div>
              </div>
              <!-- T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T2</button>
                </div>
              </div>
              <!-- T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T3</button>
                </div>
              </div>
              <!-- T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T4</button>
                </div>
              </div>
              <!-- T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T5</button>
                </div>
              </div>
              <!-- T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t6">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T6</button>
                </div>
              </div>
            </div>
            <!-- T7 through T12 -->
            <div class="column">
              <!-- T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t7">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T7</button>
                </div>
              </div>
              <!-- T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t8">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T8</button>
                </div>
              </div>
              <!-- T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t9">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T9</button>
                </div>
              </div>
              <!-- T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t10">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T10</button>
                </div>
              </div>
              <!-- T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t11">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T11</button>
                </div>
              </div>
              <!-- T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ostheophites-t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ostheophites-t12">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T12</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Reduções Discais</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-ddd" data-target="column-thorax-ddd-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-ddd-container">
          <!-- Intervertebra -->
          <div class="columns">
            <!-- T1-T2 through T6-C7 -->
            <div class="column">
              <!-- T1-T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t1t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t1t2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T1-T2</button>
                </div>
              </div>
              <!-- T2-T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t2t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t2t3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T2-T3</button>
                </div>
              </div>
              <!-- T3-T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t3t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t3t4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T3-T4</button>
                </div>
              </div>
              <!-- T4-T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t4t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t4t5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T4-T5</button>
                </div>
              </div>
              <!-- T5-T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t5t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t5t6">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T5-T6</button>
                </div>
              </div>
              <!-- T6-T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t6t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t6t7">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T6-T7</button>
                </div>
              </div>
            </div>
            <!-- T7-T8 through T12-L1 -->
            <div class="column">
              <!-- T7-T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t7t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t7t8">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T7-T8</button>
                </div>
              </div>
              <!-- T8-T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t8t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t8t9">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T8-T9</button>
                </div>
              </div>
              <!-- T9-T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t9t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t9t10">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T9-T10</button>
                </div>
              </div>
              <!-- T10-T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t10t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t10t11">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T10-T11</button>
                </div>
              </div>
              <!-- T11-T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t11t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t11t12">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T11-T12</button>
                </div>
              </div>
              <!-- T12-L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-ddd-t12l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-ddd-t12l1">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">T12-L1</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Fx Fragilidade</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-fx" data-target="column-thorax-fx-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-fx-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- T1 through T6 -->
            <div class="column">
              <!-- T1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t1-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t1-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t1-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t2-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t2-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t2-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t3-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t3-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t3-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t4-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t4-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t4-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t5-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t5-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t5-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t6-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t6-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t6-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- T7 through T12 -->
            <div class="column">
              <!-- T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t7-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t7-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t7-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t8">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T8</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t8-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t8-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t8-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t9">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T9</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t9-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t9-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t9-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t10">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T10</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t10-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t10-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t10-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t11">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T11</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t11-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t11-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t11-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-fx-t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t12">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T12</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-fx-t12-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t12-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-fx-t12-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Lesões</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-thorax-lesion" data-target="column-thorax-lesion-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-thorax-lesion-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- T1 through T6 -->
            <div class="column">
              <!-- T1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t1-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t1-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t2-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t2-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t3-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t3-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t4-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t4-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t5-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t5-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T6 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t6" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t6">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T6</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t6-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t6-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- T7 through T12 -->
            <div class="column">
              <!-- T7 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t7" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t7">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T7</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t7-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t7-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T8 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t8" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t8">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T8</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t8-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t8-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T9 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t9" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t9">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T9</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t9-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t9-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T10 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t10" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t10">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T10</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t10-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t10-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T11 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t11" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t11">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T11</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t11-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t11-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- T12 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-thorax-lesion-t12" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-thorax-fx-t12">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">T12</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-thorax-lesion-t12-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-thorax-lesion-t12-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Thorax end -->

        <!-------------------------------------------->
        <!--                 Lombar                 -->
        <!-------------------------------------------->
        <div class="field">
          <input type="checkbox" class="switch is-rounded" id="column-lumbar">
          <label for="column-lumbar"><strong>Lombar</strong></label>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Escoliose</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-scoliosis">
                <option value="ok" selected>ausente</option>
                <option value="meh">mínima</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">de ~</button>
          </div>
          <div class="control">
            <input type="number" class="input" id="column-lumbar-scoliosis-angle" placeholder="#°..." disabled>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">° à</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="column-lumbar-scoliosis-side" disabled>
                <option value="esquerda">Esq</option>
                <option value="direita">Dir</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Lordose</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-ciphosis">
                <option value="ok" selected>Normal</option>
                <option value="retificação da lordose fisiológica">Retificada</option>
                <option value="hiperlordose">Hiperlordose</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Dorso/Anterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-listhesis-sagital" data-target="column-lumbar-listhesis-sagital-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-listhesis-sagital-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- L1 through L3 -->
            <div class="column">
              <!-- L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-sagital-l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-sagital-l1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-sagital-l1-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-sagital-l1-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-sagital-l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-sagital-l2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-sagital-l2-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-sagital-l2-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-sagital-l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-sagital-l3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-sagital-l3-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-sagital-l3-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- L4 through L5 -->
            <div class="column">
              <!-- L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-sagital-l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-sagital-l4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-sagital-l4-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-sagital-l4-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-sagital-l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-sagital-l5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-sagital-l5-direction">
                      <option value="anterolistese" selected>Ant</option>
                      <option value="retrolistese">Post</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-sagital-l5-grade">
                      <option value="" selected>N/A</option>
                      <option value=" grau I">I</option>
                      <option value=" grau II">II</option>
                      <option value=" grau III">III</option>
                      <option value=" grau IV">IV</option>
                      <option value=" grau V">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-5-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-5-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-5-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-5-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Laterolisteses</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-listhesis-lateral" data-target="column-lumbar-listhesis-lateral-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-listhesis-lateral-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- L1 through L3 -->
            <div class="column">
              <!-- L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-lateral-l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-lateral-l1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-lateral-l1-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-lateral-l1-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-lateral-l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-lateral-l2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-lateral-l2-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-lateral-l2-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-lateral-l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-lateral-l3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-lateral-l3-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-lateral-l3-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- L4 through L5 -->
            <div class="column">
              <!-- L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-lateral-l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-lateral-l4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-lateral-l4-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-lateral-l4-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-listhesis-lateral-l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-listhesis-lateral-l5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-listhesis-lateral-l5-direction">
                      <option value="esquerda" selected>Esq</option>
                      <option value="direita">Dir</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-listhesis-lateral-l5-grade">
                      <option value="" selected>N/A</option>
                      <option value="grau I ">I</option>
                      <option value="grau II ">II</option>
                      <option value="grau III ">III</option>
                      <option value="grau IV ">IV</option>
                      <option value="grau V ">V</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Meyerding calculator -->
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Class. Meyerding</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-6-a" min="0" placeholder="A mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">/</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="meyerding-6-b" min="0" placeholder="B mm">
            </div>
            <div class="control">
              <button class="button is-static" tabindex="-1">=</button>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-6-res" placeholder="%" readonly>
            </div>
            <div class="control">
              <input type="text" class="input" id="meyerding-6-grade" placeholder="Grau" readonly>
            </div>
            <div class="control">
              <a class="button is-link" target="_blank" href="assets/class_meyerding.jpg">
                <span class="icon">
                  <i class="mdi mdi-open-in-new"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Osteófitos</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-ostheophites" data-target="column-lumbar-ostheophites-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-ostheophites-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- L1 through L3 -->
            <div class="column">
              <!-- L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ostheophites-l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ostheophites-l1">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L1</button>
                </div>
              </div>
              <!-- L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ostheophites-l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ostheophites-l2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L2</button>
                </div>
              </div>
              <!-- L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ostheophites-l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ostheophites-l3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L3</button>
                </div>
              </div>
            </div>
            <!-- L4 through L5 -->
            <div class="column">
              <!-- L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ostheophites-l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ostheophites-l4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L4</button>
                </div>
              </div>
              <!-- L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ostheophites-l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ostheophites-l5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L5</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Reduções Discais</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-ddd" data-target="column-lumbar-ddd-container">
                <option value="ok">ausentes</option>
                <option value="meh">EM...</option>
                <option value="shat">GENERALIZADOS</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-ddd-container">
          <!-- Intervertebra -->
          <div class="columns">
            <!-- L1-L2 through L3-L4 -->
            <div class="column">
              <!-- L1-L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ddd-l1l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ddd-l1l2">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L1-L2</button>
                </div>
              </div>
              <!-- L2-L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ddd-l2l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ddd-l2l3">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L2-L3</button>
                </div>
              </div>
              <!-- L3-L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ddd-l3l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ddd-l3l4">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L3-L4</button>
                </div>
              </div>
            </div>
            <!-- L4-L5 through L5-S1 -->
            <div class="column">
              <!-- L4-L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ddd-l4l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ddd-l4l5">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L4-L5</button>
                </div>
              </div>
              <!-- L5-S1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-ddd-l5s1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-ddd-l5s1">
                  </label>
                </div>
                <div class="control is-expanded">
                  <button class="button is-fullwidth is-static" tabindex="-1">L5-S1</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Fx Fragilidade</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-fx" data-target="column-lumbar-fx-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-fx-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- L1 through L3 -->
            <div class="column">
              <!-- L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-fx-l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-fx-l1-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l1-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l1-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-fx-l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-fx-l2-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l2-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l2-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-fx-l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-fx-l3-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l3-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l3-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- L4 through L5 -->
            <div class="column">
              <!-- L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-fx-l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-fx-l4-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l4-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l4-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-fx-l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-fx-l5-location">
                      <option value="central" selected>Centro</option>
                      <option value="anterior">Ant</option>
                      <option value="posterior">Post</option>
                      <option value="anterior e posterior">Ant+Post</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l5-time">
                      <option value="" selected>&Delta;t</option>
                      <option value=" de aspecto antigo">Velha</option>
                      <option value=" de aspecto recente">Nova</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-fx-l5-linebreak">
                      <option value="" selected>Cortical</option>
                      <option value=" (COM descontinuidade cortical observável)">DESCONT.</option>
                      <option value=" (sem descontinuidade cortical observável)">Contínua</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Lesões</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="column-lumbar-lesion" data-target="column-lumbar-lesion-container">
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>
        <div class="ml-6 mb-3 is-hidden" id="column-lumbar-lesion-container">
          <!-- Vertebra -->
          <div class="columns">
            <!-- L1 through L3 -->
            <div class="column">
              <!-- L1 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-lesion-l1" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l1">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L1</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-lesion-l1-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-lesion-l1-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L2 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-lesion-l2" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l2">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L2</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-lesion-l2-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-lesion-l2-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L3 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-lesion-l3" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l3">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L3</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-lesion-l3-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-lesion-l3-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- L4 through L5 -->
            <div class="column">
              <!-- L4 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-lesion-l4" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l4">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L4</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-lesion-l4-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-lesion-l4-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- L5 -->
              <div class="field has-addons">
                <div class="control">
                  <label for="column-lumbar-lesion-l5" class="button">
                    <span class="icon">
                      <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
                    </span>
                    <input type="checkbox" class="is-hidden checkbutton" id="column-lumbar-fx-l5">
                  </label>
                </div>
                <div class="control">
                  <button class="button is-static" tabindex="-1">L5</button>
                </div>
                <div class="control is-expanded">
                  <div class="select is-fullwidth">
                    <select id="column-lumbar-lesion-l5-type">
                      <option value="osteolítica" selected>Lítica</option>
                      <option value="osteoblástica">Blástica</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                  <div class="select">
                    <select id="column-lumbar-lesion-l5-qtt">
                      <option value="lesão única" selected>Única</option>
                      <option value="múltiplas lesões">Várias</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Lumbar end -->
      </div>

      <div class="eval-box" id="eval-box-abdomen">
        <!-------------------------------------------->
        <!--                 Abdomen                -->
        <!-------------------------------------------->
        <h4 class="title is-6"><strong>A</strong>r</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Pneumoperitôneo</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-a-pneumoperitoneum">
                <option value="ok" selected>ausente</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-a-pneumoperitoneum-sign" disabled>
                <option value="ar entre silhueta hepática e cúpula diafragmática direita" selected>ar > fígado</option>
                <option value="sinal de Rigler">Rigler</option>
                <option value="ar entre silhueta hepática e cúpula diafragmática direita E sinal de Rigler">fígado + Rigler</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Aerobilia</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-a-pneumobilia">
                <option value="" selected>N/A</option>
                <option value="ok">ausente</option>
                <option value="shat">PRESENTE</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Intestinos (<em>Bowel</em>)</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Int. Delgado</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-smallbowel">
                <option value="central e com atenuação habitual" selected>Normal</option>
                <option value="central, mas com aumento da quantidade de gás dentro de alças">&uarr;Gás</option>
                <option value="central, mas com grande quantidade de ar em alças, distensão gasosa destas, e sinal de 'empilhamento de moedas'">&uarr;&uarr;&uarr;Gás</option>
                <option value="não detectável por ausência de gás mesoabdominal digno de nota">&empty;Gás</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-smallbowel-liquid">
                <option value="" selected>N/A</option>
                <option value=", sem nível hidroaéreo detectável">Sem Nvl Hidroaéreo</option>
                <option value=", COM nível hidroaéreo observável">COM Nvl Hidroaéreo</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Cólon</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-colon">
                <option value="com atenuação habitual" selected>Normal</option>
                <option value="com aumento de gás em suas luzes">&uarr;Gás</option>
                <option value="com grande quantidade de gás intraluminal associado a haustrações evidentes">&uarr;&uarr;&uarr;Gás</option>
                <option value="não detectáveis ao método por ausência de gás em topografia compatível">&empty;Gás</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-colon-liquid">
                <option value="" selected>N/A</option>
                <option value=", sem nível hidroaéreo detectável">Sem Nvl Hidroaéreo</option>
                <option value=", COM nível hidroaéreo observável">COM Nvl Hidroaéreo</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Sigmoide</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-sigmoid">
                <option value="com atenuação habitual" selected>Normal</option>
                <option value="com aumento de gás em sua luz">&uarr;Gás</option>
                <option value="com grande quantidade de gás intraluminal associado a haustrações evidentes">&uarr;&uarr;&uarr;Gás</option>
                <option value="com SINAIS DE VOLVO DE SIGMOIDE">VOLVO!!</option>
                <option value="não detectável ao método por ausência de gás em topografia compatível">&empty;Gás</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-sigmoid-sign" disabled>
                <option value="" selected>N/A</option>
                <option value=", com presença de sinal do grão-de-café">Grão-de-Café</option>
                <option value=", com presença de sinal de Frimann-Dahl">Frimann-Dahl</option>
                <option value=", com presença de sinais do grão-de-café E de Frimann-Dahl">Grão-de-Café + Frimann</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Fezes</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-b-feces">
                <option value="" selected>N/A</option>
                <option value="não observáveis">Ausentes</option>
                <option value="com imagem de 'miolo-de-pão' em quantidade habitual em topografia de ampola retal">Normal</option>
                <option value="com imagem de 'miolo-de-pão' até cólon esquerdo">Cólon Esq.</option>
                <option value="com imagem de 'miolo-de-pão' até cólon transverso">Cólon Transv.</option>
                <option value="com imagem de 'miolo-de-pão' até cólon DIREITO">Cólon DIR!</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Estruturas <strong>D</strong>ensas</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Ossos</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-d-bones">
                <option value="ok" selected>ndn</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="abdomen-d-bones-shat" placeholder="Descreva alterações..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Cálculos Biliares</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-d-gallbladder">
                <option value="ok" selected>ausentes</option>
                <option value="1">PRESENTE / Único</option>
                <option value="2">PRESENTE / Múltiplos</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Cálculos Urinários</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-d-uroliths">
                <option value="ok" selected>ausentes</option>
                <option value="shat1">PRESENTE / único</option>
                <option value="shat2">PRESENTES</option>
              </select>
            </div>
          </div>
          <div class="control">
            <button class="button is-static" tabindex="-1">em</button>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="abdomen-d-uroliths-shat" placeholder="Descreva..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Silhueta Ao</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-d-aorta">
                <option value="ok" selected>N/A</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="abdomen-d-aorta-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>

        <h4 class="title is-6"><strong>Ó</strong>rgãos</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Bolha Gástrica</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-o-stomach">
                <option value="" selected>N/A</option>
                <option value="ok">normal</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div class="control is-expanded">
            <input type="text" class="input" id="abdomen-o-stomach-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Bexigoma</button>
          </div>
          <div class="control is-expanded">
            <div class="select is-fullwidth">
              <select id="abdomen-o-bladder">
                <option value="" selected>N/A</option>
                <option value="ok">ausentes</option>
                <option value="shat">PRESENTES</option>
              </select>
            </div>
          </div>
        </div>

        <h4 class="title is-6">Objetos E<strong>X</strong>ternos</h4>

        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Ponta SNE</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-x-sne">
                <option value="" selected>N/A</option>
                <option value="ok">Normal</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" class="input" id="abdomen-x-sne-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Ponta CVC</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-x-cvc">
                <option value="" selected>N/A</option>
                <option value="ok">Normal</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" class="input" id="abdomen-x-cvc-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Balão CVD</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-x-cvd">
                <option value="" selected>N/A</option>
                <option value="ok">Normal</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" class="input" id="abdomen-x-cvd-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>
        <div class="field has-addons">
          <div class="control">
            <button class="button is-static" tabindex="-1">Duplo-J</button>
          </div>
          <div class="control">
            <div class="select">
              <select id="abdomen-x-jj">
                <option value="" selected>N/A</option>
                <option value="ok">Normal</option>
                <option value="shat">COM...</option>
              </select>
            </div>
          </div>
          <div>
            <input type="text" class="input" id="abdomen-x-jj-shat" placeholder="Descreva alteração..." disabled>
          </div>
        </div>
      </div>

      <h4 class="title is-6 mt-3">Miscelânea</h4>

      <div class="mb-3" id="misc-container">
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-success is-fullwidth" id="misc-add">
            <span class="icon">
              <i class="mdi mdi-plus-box mdi-24px"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Resultado</h2>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-primary" id="button-run">Gerar</button>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="output" placeholder="Laudo" rows="15" readonly></textarea>
        </div>
      </div>

      <div class="field">
        <div class="class is-expanded">
          <button id="button" class="button is-fullwidth copybtn" data-clipboard-target="#output">Copiar Laudo</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

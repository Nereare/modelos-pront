<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "report";
$subtitle = "Laudos de Rx Tórax";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Dados</h2>

      <h3 class="title is-5">Técnica</h3>

      <div class="field has-text-centered">
        <input type="checkbox" class="switch" id="adequability-check" checked>
        <label for="adequability-check">Adequado</label>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-projection" checked disabled>
            <label for="adequability-projection">Projeção Póstero&rarr;Anterior</label>
          </div>
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-centering" checked disabled>
            <label for="adequability-centering">Centrado</label>
          </div>
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-rotation" checked disabled>
            <label for="adequability-rotation">Não-Rodado</label>
          </div>
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-inspiration" checked disabled>
            <label for="adequability-inspiration">Bem Inspirado</label>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-abduction" checked disabled>
            <label for="adequability-abduction">MMSS Abduzidos</label>
          </div>
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-superinpositions" checked disabled>
            <label for="adequability-superinpositions">Sem Superimposições</label>
          </div>
          <div class="field">
            <input type="checkbox" class="switch is-warning" id="adequability-lateral" checked disabled>
            <label for="adequability-lateral">Perfil Presente</label>
          </div>
        </div>
        <div class="column">
          <h4 class="title is-6 mb-2">Penetração</h4>

          <div class="field">
            <input type="radio" class="is-checkradio is-warning" name="adequability-exposure" id="adequability-exposure-low" value="pouco penetrado" disabled>
            <label for="adequability-exposure-low">Baixa</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio is-success" name="adequability-exposure" id="adequability-exposure-adequate" value="adequadamente penetrado" checked disabled>
            <label for="adequability-exposure-adequate">Adequada</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio is-warning" name="adequability-exposure" id="adequability-exposure-hyper" value="muito penetrado" disabled>
            <label for="adequability-exposure-hyper">Excessiva</label>
          </div>
          <div class="field">
            <input type="radio" class="is-checkradio is-danger" name="adequability-exposure" id="adequability-exposure-toxic" value="penetração extrema, inviabilizando análise mesmo que tangencial de estruturas" disabled>
            <label for="adequability-exposure-toxic">Radioterêutica Ablativa</label>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Avaliação</h3>

      <p class="help">Deixar data em branco, caso exame tenha sido realizado hoje.</p>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Realizado</button>
        </div>
        <div class="control is-expanded">
          <input type="date" class="input" id="date">
        </div>
        <div class="control">
          <button class="button is-danger" id="date-clear">
            <span class="icon">
              <i class="mdi mdi-calendar-remove mdi-18px"></i>
            </span>
          </button>
        </div>
      </div>

      <h4 class="title is-6">Coração</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Área Cardíaca</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="heart-area">
              <option value="dentro dos limites da normalidade" selected>Normal</option>
              <option value="aumentada">Aumentada</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">(</button>
        </div>
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
        <div class="control">
          <button class="button is-static" tabindex="-1">)</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Rotação</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="heart-side">
              <option value="levocardia (situs solitus)" selected>Esquerda</option>
              <option value="dextrocardia (situs inversus totalis)">DIREITA</option>
              <option value="coração centrado (possível isomerismo atrial?)">CENTRAL</option>
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
              <option value="dentro dos limites da normalidade" selected>Ndn</option>
              <option value="aumentada">Aumentada</option>
            </select>
          </div>
        </div>
        <div class="control">
          <div class="select">
            <select id="mediastinum-aorta-calcium">
              <option value="" selected>SEM calcificações</option>
              <option value=", com calcificações observáveis mesmo à técnica radiográfica">COM calcificações</option>
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
              <option value="dentro dos limites da normalidade" selected>Ndn</option>
              <option value="aumentada">Aumentada</option>
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
              <option value="silhoueta tímica com área aumentada">Aumentada</option>
              <option value="silhoueta tímica com área aumentada, SINAL DA VELA observável">Aumentada + Vela</option>
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
              <option value="sem alterações observáveis" selected>Normal</option>
              <option value="hiperatenuado (infiltrado)">Infiltrado</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">predomínio</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="lung-hilum-hyper" disabled>
              <option value="sem predomínios" selected>&empty;</option>
              <option value="com predomínio de hiperatenuação superior">Superior</option>
              <option value="com predomínio de hiperatenuação inferior">Inferior</option>
              <option value="com predomínio de hiperatenuação esquerda">Esq</option>
              <option value="com predomínio de hiperatenuação direita">Dir</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Consolidações</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="lung-pneumonia">
              <option value="false" selected>Ausentes</option>
              <option value="true">PRESENTE(s)</option>
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
              <button class="button is-static" tabindex="-1">Lobo Sup Dir</button>
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
              <button class="button is-static" tabindex="-1">Lobo Médio Dir</button>
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
              <button class="button is-static" tabindex="-1">Lobo Inf Dir</button>
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
              <button class="button is-static" tabindex="-1">Lobo Sup Esq</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="lung-pneumonia-left-top-size" min="1" step="1" placeholder="# mm">
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
              <button class="button is-static" tabindex="-1">Lobo Inf Esq</button>
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
              <option value="livres bilateralmente" selected>Livres</option>
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
              <option value="não observáveis ao método" selected>SEM alterações</option>
              <option value="com ">ALTERADAS</option>
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
              <option value="observável" selected>Presente</option>
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
              <option value=" em situs solitus">Esquerda</option>
              <option value=" À DIREITA">DIREITA</option>
              <option value="">N/A</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Fígado</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="abdome-liver">
              <option value="fígado em situs solitus " selected>à direita</option>
              <option value="fígado em situs inversus totalis ">à ESQUERDA</option>
              <option value="fígado com hiperatenuação hepática presente bilateral e simetricamente ">BILATERAL</option>
              <option value="">N/A</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="abdome-pneumoperitonium">
              <option value="sem gás acima de silhoueta hepática" selected>Sem pneumoperitônio</option>
              <option value="COM PNEUMOPERITÔNIO (gás observável acima de silhoueta hepática)">COM pneumoperitônio</option>
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
              <option value="sem alterações observáveis">sem alterações</option>
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
              <option value="sem alterações observáveis">sem alterações</option>
              <option value="com ">ALTERADOS</option>
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
              <option value="ausente">ausente</option>
              <option value="PRESENTE em ">PRESENTE</option>
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

      <h4 class="title is-6">Miscelânea</h4>

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
          <textarea class="textarea has-fixed-size" id="output" placeholder="Laudo" readonly></textarea>
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

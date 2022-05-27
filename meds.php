<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "meds";
$subtitle = "Prescrições";

require_once "header.php";
?>

<main class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-4">Inscrito</h2>

      <div class="field has-addons ui-widget">
        <div class="control">
          <button class="button is-static" tabindex="-1">Medicação</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="med-search" placeholder="Comece digitando o nome da medicação aqui" autofocus>
        </div>
      </div>

      <div>
        <div class="divider">Ou</div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="med-name" placeholder="Nome do princípio ativo">
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="med-concentration" placeholder="Posologia da medicação">
        </div>
      </div>

      <div class="divider">
        <div>E</div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Via</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="med-via">
                  <option value="Oral" selected>VO</option>
                  <option value="Sublingual">SL</option>
                  <option value="Oral Inalatória">Oral Inalat.</option>
                  <option value="Nasal">VN</option>
                  <option value="Oftalmológica">Ocular</option>
                  <option value="Otológica">Otológ.</option>
                  <option value="Intravenosa">IV</option>
                  <option value="Intramuscular">IM</option>
                  <option value="Intradérmica">Dermatóclise</option>
                  <option value="Subcutânea">SC</option>
                  <option value="Retal">Retal</option>
                  <option value="Vaginal">Vaginal</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Dispensar</button>
            </div>
            <div class="control">
              <input type="number" class="input" id="med-qtt" min="0" step="1" placeholder="# (opcional)">
            </div>
            <div class="control is-expanded">
              <button class="button is-static is-fullwidth" id="btn-unity" tabindex="-1">cp(s)</button>
            </div>
          </div>
        </div>
      </div>

      <h2 class="title is-4">Subscrito</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Ação</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="med-act">
              <option value="Tomar" selected>Tomar</option>
              <option value="Dar">Dar</option>
              <option value="Aplicar">Aplicar</option>
              <option value="Dissolver sob a língua">Dissolver SL</option>
              <option value="Inalar">Inalar</option>
              <option value="Pingar">Pingar</option>
              <option value="Lavar cada narina com">Lavar (narina)</option>
              <option value="Usar">Usar</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="med-cps" min="1" step="1" placeholder="#" required>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="med-unity">
              <option value="" disabled>--- Comuns ---</option>
              <option value="cp(s)" selected>cp(s)</option>
              <option value="mL">mL</option>
              <option value="jato(s)">jato(s)</option>
              <option value="puff(s)">puff(s)</option>
              <option value="UI">UI</option>
              <option value="" disabled>--- Outros ---</option>
              <option value="adesivo(s)">adesivo(s)</option>
              <option value="ampola(s)">ampola(s)</option>
              <option value="anel(s)">anel(s)</option>
              <option value="bisnaga(s)">bisnaga(s)</option>
              <option value="bolsa(s)">bolsa(s)</option>
              <option value="caixa(s)">caixa(s)</option>
              <option value="caneta(s)">caneta(s)</option>
              <option value="cápsula(s)">cápsula(s)</option>
              <option value="comprimido(s)">comprimido(s)</option>
              <option value="depot(s)">depot(s)</option>
              <option value="drágea(s)">drágea(s)</option>
              <option value="frasco(s)">frasco(s)</option>
              <option value="goma(s)">goma(s)</option>
              <option value="implante(s)">implante(s)</option>
              <option value="kit(s)">kit(s)</option>
              <option value="óvulo(s)">óvulo(s)</option>
              <option value="pastilha(s)">pastilha(s)</option>
              <option value="supositório(s)">supositório(s)</option>
              <option value="unidade(s)">unidade(s)</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">a cada</button>
        </div>
        <div class="control">
          <input type="number" class="input" id="med-interval" min="1" step="1" placeholder="#" required>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="med-interval-time">
              <option value="minuto(s)">min</option>
              <option value="hora(s)" selected>h</option>
              <option value="dia(s)">d</option>
              <option value="semana(s)">sem</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Por</button>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="med-duration" min="1" step="1" placeholder="# (opcional)">
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="med-duration-time">
              <option value="dose única">DU</option>
              <option value="dia(s)" selected>d</option>
              <option value="semana(s)">sem</option>
              <option value="mês(es)">mês</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Se</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="med-if" placeholder="condição (opcional) aqui">
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">.</button>
        </div>
      </div>

      <h2 class="title is-4">Orientações</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Orientações Pré-Definidas</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="med-defaultguides">
              <option value="" selected disabled>Escolher...</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="med-guide" rows="6"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-success is-fullwidth" id="add">Incluir Medicação</button>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Prescrição</h2>

      <div class="field" id="prescription">
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="copy">Copiar</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php
require_once "footer.php";
?>

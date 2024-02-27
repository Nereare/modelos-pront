<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = "sharps";
require_once "header.php";

if (isset($_COOKIE["sr_header"])) {
  $sr_header = $_COOKIE["sr_header"];
} elseif (isset($_SESSION["sr_header"])) {
  $sr_header = $_SESSION["sr_header"];
} else {
  $sr_header = "SR";
}
?>

<main class="section">
  <div class="container">
    <div class="box notification is-warning content">
      <button class="delete"></button>
      <h4>Antes do Atendimento</h4>
      <p>
        <strong>Antes</strong> do atendimento o acidentado deve colher seu sangue (e o do caso-fonte, se
        conhecido) no setor de trabalho, identificar as amostras, e levar as amostras ela(e) mesmo no
        Laboratório Central (4º andar) junto de <strong>pedido verde</strong> de <code>Sorologias para
        Acidente Pérfuro</code>, um deles <code>Acidentado</code> e outro, caso conhecido, <code>Caso-Fonte</code>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Acidentado</th>
            <th>Caso-Fonte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>2</strong> tubos secos (amarelos)
            </td>
            <td>
              <strong>2</strong> tubos secos (amarelos) +
              <br>
              <strong>1</strong> tubo EDTA (roxo)
            </td>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="box notification is-info is-light content">
      <button class="delete"></button>
      <h4>Começo do Atendimento</h4>
      <p>O atendimento começa:</p>
      <ol>
        <li><em>Se caso-fonte conhecido</em>, quando <strong>resultado</strong> de HIV da fonte estiver disponível no sistema; ou</li>
        <li><em>Se caso-fonte DESconhecido</em>, assim que acidentado colher exames e retornar ao PS.</li>
      </ol>
    </div>

    <div class="box">
      <h2 class="title is-4">Serviço</h2>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hospital-name" placeholder="Nome do serviço..." required>
        </div>
        <input type="text" class="is-hidden" id="sr-header" value="<?php echo $sr_header; ?>">
      </div>

      <div class="columns">
        <div class="column is-4">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Estado</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="hospital-state" required>
                  <option value="" selected disabled>Escolha...</option>
                  <option value="SP">SP</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Município</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="hospital-city" placeholder="Nome da cidade do serviço..." required>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">CNES</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="hospital-cnes" placeholder="Cadastro Nacional de Estabelecimento de Saúde do serviço...">
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Envolvidos</h2>

      <!-- Source data -->
      <h3 class="title is-5">Fonte</h3>

      <div class="field">
        <div class="control is-expanded has-text-centered">
          <input type="checkbox" class="switch" id="source-known">
          <label for="source-known">Fonte conhecida</label>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="source-name" placeholder="Nome do caso-fonte" value="DESCONHECIDO" disabled required>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Prontuário</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="source-pront" placeholder="Prontuário do caso-fonte" disabled>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">TR HIV</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="source-hiv" disabled>
              <option value="" selected disabled>Resultado...</option>
              <option value="1">Positivo</option>
              <option value="2">Negativo</option>
            </select>
          </div>
        </div>
      </div>
      <!-- / Source data -->

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <!-- Patient data -->
      <h3 class="title is-5">Acidentado</h3>

      <h4 class="title is-6">Identificação</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="patient-name" placeholder="Nome do paciente" required>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Pront</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-pront" placeholder="Prontuário do paciente" required>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nascimento</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="patient-dob" placeholder="Data Nascimento" required>
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Mãe</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-mother" placeholder="Nome da mãe do paciente" required>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CPF</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-cpf" placeholder="CPF (apenas números)" pattern="[0-9]{11}" required>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-3">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-bio_sex" required>
                  <option value="" selected disabled>Sexo Biol.</option>
                  <option value="F">Fem</option>
                  <option value="M">Masc</option>
                  <option value="I">Outro</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-preg" required>
                  <option value="" selected disabled>Gestação</option>
                  <option value="5">Não</option>
                  <option value="6">N/A</option>
                  <option value="1">1º Trim</option>
                  <option value="2">2º Trim</option>
                  <option value="3">3º Trim</option>
                  <option value="4">IG Desc</option>
                  <option value="9">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-race" required>
                  <option value="" selected disabled>Raça/Cor</option>
                  <option value="1">Branca</option>
                  <option value="2">Preta</option>
                  <option value="3">Amarela</option>
                  <option value="4">Parda</option>
                  <option value="5">Indígena</option>
                  <option value="9">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title is-6">Endereço</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Endereço</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="patient-address" placeholder="Logradouro" required>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Número</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-address-number" placeholder="Número" required>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Compl.</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-address-extra" placeholder="Complemento">
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column is-6">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Cidade</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-address-city" placeholder="Município" required>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-address-state" required>
                  <option value="" selected disabled>Estado...</option>
                  <option value="SP">SP</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-address-zone" required>
                  <option value="" selected disabled>Zona...</option>
                  <option value="1">Urbana</option>
                  <option value="2">Rural</option>
                  <option value="3">Periurbana</option>
                  <option value="9">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Bairro</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-address-shire" placeholder="Bairro">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CEP</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-address-cep" placeholder="CEP" required>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Telefone</button>
        </div>
        <div class="control">
          <input type="text" class="input" id="patient-phone-ddd" placeholder="DDD" size="4" required>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="patient-phone-number" placeholder="Telefone" required>
        </div>
      </div>

      <h4 class="title is-6">Ocupação</h4>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Cargo</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="patient-occupation-job" placeholder="Função" required>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Empresa</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="patient-occupation-company" placeholder="Empresa contratadora" required>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-school" required>
                  <option value="" disabled selected>Escolaridade...</option>
                  <option value="0">Analfabeto</option>
                  <option value="1">1ª a 4ª série incompleta</option>
                  <option value="2">4ª série completa</option>
                  <option value="3">5ª à 8ª série incompleta</option>
                  <option value="4">Fundamental completo</option>
                  <option value="5">Médio incompleto</option>
                  <option value="6">Médio completo</option>
                  <option value="7">Superior incompleto</option>
                  <option value="8">Superior completo</option>
                  <option value="9">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns mb-0">
        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-occupation-status" required>
                  <option value="">Vínculo...</option>
                  <option value="01">Celetista</option>
                  <option value="02">Não Registrado</option>
                  <option value="03">Autônomo</option>
                  <option value="04">Servidor Estatutário</option>
                  <option value="05">Servidor CLT</option>
                  <option value="06">Aposentado</option>
                  <option value="07">Desempregado</option>
                  <option value="08">Temporário</option>
                  <option value="09">Cooperativo</option>
                  <option value="10">Avulso</option>
                  <option value="11">Empregador</option>
                  <option value="12">Outros</option>
                  <option value="99">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Tempo</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="patient-occupation-time" min="1" step="1" placeholder="#" required>
            </div>
            <div class="control">
              <div class="select">
                <select id="patient-occupation-t_unit" required>
                  <option value="1">h</option>
                  <option value="2">d</option>
                  <option value="3">mês</option>
                  <option value="4" selected>a</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-occupation-out" required>
                  <option value="" selected disabled>Terceirizado?</option>
                  <option value="1">Sim</option>
                  <option value="2">Não</option>
                  <option value="3">N/A</option>
                  <option value="4">Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title is-6">Status Sorológico-Vacinais</h4>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Hep B</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-hepb" required>
                  <option value="" selected disabled>Escolha...</option>
                  <option value="11">Vacinado (3+ doses)</option>
                  <option value="12">Soroconvertido vacinal (Anti-HBs+ E HBcAg-)</option>
                  <option value="23">Não-vacinado (&lt;3 doses)</option>
                  <option value="24">Não sabe</option>
                  <option value="25">Não-soroconvertido (&gt;3 doses E Anti-HBs-)</option>
                  <option value="96">Contato/PV com HBV</option>
                  <option value="97">Outro/Ignorado</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">dT</button>
            </div>
            <div class="control">
              <div class="select">
                <select id="patient-dt">
                  <option value="" selected disabled>Escolha...</option>
                  <option value="true">Última há...</option>
                  <option value="false">Desconhecido</option>
                </select>
              </div>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="patient-dt-time" placeholder="# anos" min="0" step="1" disabled>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">HIV</button>
            </div>
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select id="patient-hiv">
                  <option value="" selected disabled>Escolha...</option>
                  <option value="desconhecido">Desconhecido</option>
                  <option value="refere teste recente negativo">Negativo</option>
                  <option value="refere ser PVHIV">PVHIV</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="title is-6">Alergias</h4>

      <div class="field has-text-centered">
        <input type="radio" class="is-checkradio" id="allergy-yes" name="allergy" value="true">
        <label for="allergy-yes">Sim</label>

        <input type="radio" class="is-checkradio" id="allergy-no" name="allergy" value="false" checked>
        <label for="allergy-no">Não</label>
      </div>
      <input type="text" class="input" id="allergy-drug" placeholder="Medicações a que é alérgice" disabled>
      <!-- / Patient data -->
    </div>

    <div class="box">
      <h2 class="title is-4">Acidente</h2>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Data</button>
            </div>
            <div class="control is-expanded">
              <input type="date" class="input" id="accident-date" required>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Hora</button>
            </div>
            <div class="control is-expanded">
              <input type="time" class="input" id="accident-time" required>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-5">Tipo de Exposição</h3>

      <div class="columns mb-0">
        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-exposition-percutaneous">
              <label for="accident-exposition-percutaneous">Percutâneo</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-exposition-mucosa">
              <label for="accident-exposition-mucosa">Mucosa (Oral/Ocular)</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-exposition-skin">
              <label for="accident-exposition-skin">Pele Íntegra</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-exposition-skin-lesion">
              <label for="accident-exposition-skin-lesion">Pele NÃO-Íntegra</label>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="accident-exposition-other" class="button">
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
              </span>
              <span>Outros</span>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="accident-exposition-other">
          </label>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="accident-exposition-other-desc" placeholder="Descreva outros tipos de exposição" disabled>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <p class="help mb-0">Caso selecionado <em>Outros</em>, o preenchimento de qual <em>Outro</em> deve ser feito à mão. Beijos de luz~</p>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Material</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="accident-material" required>
              <option value="" selected disabled>Escolha...</option>
              <option value="1">Sangue</option>
              <option value="2">Líquor</option>
              <option value="3">Líq. pleural</option>
              <option value="4">Líq. ascítico</option>
              <option value="5">Líq. amniótico</option>
              <option value="6">Fluído com sangue</option>
              <option value="7">Soro/plasma</option>
              <option value="8">Outros</option>
              <option value="9">Ignorado</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Circunstância</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="accident-context" required>
              <option value="" selected disabled>Escolha...</option>
              <option value="01">Administ. de medicação IV</option>
              <option value="02">Administ. de medicação IM</option>
              <option value="03">Administ. de medicação SC</option>
              <option value="04">Administ. de medicação SD</option>
              <option value="05">Punção p/ coleta de sangue</option>
              <option value="06">Punção não especificada</option>
              <option value="07">Descarte inadequado de perfuro em saco de lixo</option>
              <option value="08">Descarte inadequado de perfuro em bancada, cama...</option>
              <option value="09">Lavanderia</option>
              <option value="10">Lavagem de material</option>
              <option value="11">Manipulação de caixa perfuro</option>
              <option value="12">Procedimento cirúrgico</option>
              <option value="13">Procedimento odontológico</option>
              <option value="14">Procedimento laboratorial</option>
              <option value="15">Dextro</option>
              <option value="16">Reencape</option>
              <option value="98">Outros</option>
              <option value="99">Ignorado</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Agente</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="accident-agent" required>
              <option value="" selected disabled>Escolha...</option>
              <option value="1">Agulha com lúmen</option>
              <option value="2">Agulha sem lúmen</option>
              <option value="3">Intracath</option>
              <option value="4">Vidros</option>
              <option value="5">Lâmina/lanceta</option>
              <option value="6">Outros</option>
              <option value="9">Ignorado</option>
            </select>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">EPIs em Uso</h3>

      <div class="columns mb-0">
        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-gloves">
              <label for="accident-ppe-gloves">Luva</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-apron">
              <label for="accident-ppe-apron">Avental</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-glasses">
              <label for="accident-ppe-glasses">Óculos</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-mask">
              <label for="accident-ppe-mask">Máscara</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-faceshield">
              <label for="accident-ppe-faceshield">Proteção facial</label>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="accident-ppe-boots">
              <label for="accident-ppe-boots">Bota</label>
            </div>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-5">Informações Complementares</h3>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="notes" placeholder="Preencha outros dados relevantes... (sugerimos 400 caracteres ou menos)" rows="5"></textarea>
        </div>
      </div>
      <p class="help mt-0"><span id="notes-charcount">0</span> caracteres</p>
    </div>

    <div class="box">
      <h2 class="title is-4">EF / Ferida</h2>

      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="lesion-puncture">
              <label for="lesion-puncture">Perfurante</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="lesion-cut">
              <label for="lesion-cut">Cortante</label>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <div class="control">
              <input type="checkbox" class="is-checkradio" id="lesion-blunt">
              <label for="lesion-blunt">Contusa</label>
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Tamanho...</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="lesion-size">
              <option value="" selected disabled>Escolha...</option>
              <option value="puntiforme">Puntiforme</option>
              <option value="linear, de aproximadamente">Linear de...</option>
              <option value="de aproximadamente">De...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="number" class="input" id="lesion-size-mm" placeholder="#" disabled>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">mm</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Sangramento...</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="lesion-bleed">
              <option value="" selected disabled>Escolha...</option>
              <option value="ausente">Ausente</option>
              <option value="presente em babamento">Babamento</option>
              <option value="presente, de aspecto venoso">Venoso</option>
              <option value="presente, em jatos com aspecto arterial">Arterial</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Secreções...</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="lesion-secretions">
              <option value="" selected disabled>Escolha...</option>
              <option value="ausente">Ausentes</option>
              <option value="secreção serosa presente">Serosa</option>
              <option value="secreção purulenta presente">Pus</option>
              <option value="secreção purulenta presente em grande quantidade">Pus++</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Localizada</button>
        </div>
        <div class="control">
          <div class="select">
            <select id="lesion-place-article">
              <option value="em" selected>em...</option>
              <option value="na">na...</option>
              <option value="nas">nas...</option>
              <option value="no">no...</option>
              <option value="nos">nos...</option>
            </select>
          </div>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="lesion-place" placeholder="Descreva o local da ferida...">
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea has-fixed-size" id="lesion-other" placeholder="Descreva outros aspectos da lesão... (opcional)" rows="5"></textarea>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Diagnóstico / Classificação</h2>

      <div class="field">
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="dx" required>
              <option value="" selected disabled>Classificação do Acidente</option>
              <option value="leve">Leve</option>
              <option value="moderado">Moderado</option>
              <option value="grave">Grave</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Condutas</h2>

      <h3 class="title is-6">Notificação</h3>

      <div class="field mb-0">
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Notifico</button>
        </div>
      </div>
      <div class="content is-small">
        <p class="mb-0">
          Notificar <strong>não</strong> é opcional! Vide <a target="_blank" href="https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-420-de-2-de-marco-de-2022-383578277">Portaria GM/MS Nº 420</a>, itens 1a e 1b do Anexo I.<br>
          Emita a notificação via botão abaixo, carimbe e assine as duas vias. Entregue:
        </p>
        <ol class="mt-0">
          <li>Uma das vias, anexa à Ficha de Atendimento, ao Apoio ao Médico; e</li>
          <li>A outra das vias, anexa ao Encaminhamento SEESMT (vide módulo específico do MV), ao paciente/acidentado.</li>
        </ol>
      </div>

      <h3 class="title is-6">HIV</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">PEP</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="plan-pep" required>
              <option value="no" selected>sem indicação</option>
              <option value="refuse">recusa PEP indicado</option>
              <option value="yes">3TC+TDF+DTG</option>
            </select>
          </div>
        </div>
        <div class="control">
          <a class="button is-link" href="meds.php?pre=<?php echo urlencode("PEP"); ?>" target="_blank">Ir p/ Prescrição</a>
        </div>
      </div>

      <h3 class="title is-6">Vacinas</h3>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-hepb" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-hepb">
          </label>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">Hep B</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="plan-hepb-what">
              <option value="Oriento buscar UBS próximo de residência para atualização de vacina contra HBV" selected>Oriento</option>
              <option value="Redijo contrarreferência à UBS solicitando atualização/início de esquema vacinal contra HBV">Contrarreferência</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-link copybtn" id="plan-hepb-whattext" data-clipboard-text="# À UBS - SALA DE VACINA #

Paciente acima passou em atendimento neste nosocômio hoje após ter sofrido acidente perfurocortante.
Realizamos atendimento e cuidados iniciais em acordância com protocolo institucional vigente.
Contrarreferencio paciente à Sala de Vacinas para atualização/início de esquema vacinal contra Hepatite B.

Agradeço desde já!" disabled>Texto Padrão HBV</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-dt" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-dt">
          </label>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">dT</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="plan-dt-what">
              <option value="Oriento buscar UBS próximo de residência para atualização de vacina contra HBV" selected>Oriento</option>
              <option value="Redijo contrarreferência à UBS solicitando atualização/início de esquema vacinal contra HBV">Contrarreferência</option>
            </select>
          </div>
        </div>
        <div class="control">
          <button class="button is-link" id="plan-dt-whattext" data-clipboard-text="# À UBS - SALA DE VACINA #

Paciente acima passou em atendimento neste nosocômio hoje após ter sofrido acidente perfurocortante.
Realizamos atendimento e cuidados iniciais em acordância com protocolo institucional vigente.
Contrarreferencio paciente à Sala de Vacinas para atualização de dose de imunizante contra Tétano.

Agradeço desde já!" disabled>Texto Padrão dT</button>
        </div>
      </div>

      <h3 class="title is-6">Outras</h3>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-symptomatics" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-symptomatics">
          </label>
        </div>
        <div class="control">
          <button class="button is-static" tabindex="-1">Sintomáticos</button>
        </div>
        <div class="control is-expanded">
          <div class="select is-fullwidth">
            <select id="plan-symptomatics-what">
              <option value="Prescrevo sintomáticos" selected>Prescrevo</option>
              <option value="Oriento uso de sintomáticos que paciente já possui">Oriento uso</option>
            </select>
          </div>
        </div>
        <div class="control">
          <a class="button is-link" href="meds.php?pre=<?php echo urlencode("Dor Osteomuscular (leve; dip)"); ?>" target="_blank">Ir p/ Prescrições</a>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-seesmt" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-seesmt">
          </label>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Encaminho ao SEESMT</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-care" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-care">
          </label>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Oriento cuidados com ferida</button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-reference" class="button">
            <span class="icon">
              <i class="mdi mdi-checkbox-blank-outline mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-reference">
          </label>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Contrarreferencio à MI</button>
        </div>
      </div>

      <div class="mb-1" id="plan-other-container"></div>
      <div class="field mb-3">
        <div class="control is-expanded">
          <button type="button" class="button is-fullwidth is-small" id="plan-other-add">
            <span class="icon-text is-small">
              <span class="icon mt-1">
                <i class="mdi mdi-plus-box mdi-18px"></i>
              </span>
              <span>Adicionar</span>
            </span>
          </button>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <label for="plan-bai" class="button is-primary">
            <span class="icon">
              <i class="mdi mdi-checkbox-marked mdi-24px"></i>
            </span>
            <input type="checkbox" class="is-hidden checkbutton" id="plan-bai" checked>
          </label>
        </div>
        <div class="control is-expanded">
          <button class="button is-static is-fullwidth" tabindex="-1">Alta do episódio</button>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth is-primary" id="button-run" title="Este botão será habilitado quando todos os campos requeridos forem preenchidos." disabled>Gerar</button>
        </div>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <a class="button is-fullwidth is-link" id="button-notification" target="_blank" disabled>
            <span class="icon-text">
              <span class="icon">
                <i class="mdi mdi-open-in-new"></i>
              </span>
              <span>Notificação</span>
            </span>
          </a>
        </div>
      </div>

      <div class="field">
        <textarea class="textarea has-fixed-size" id="output" placeholder="Prontuário" rows="15" readonly></textarea>
      </div>

      <div class="field">
        <div class="control is-expanded">
          <button class="button is-fullwidth copybtn" id="button-o" data-clipboard-target="#output">Copiar Prontuário</button>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require_once "footer.php"; ?>

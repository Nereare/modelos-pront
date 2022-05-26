<?php
/**
 * The slug for this page.
 * IMPORTANT: Set the variable below so that the header works properly!
 * @var string
 */
$page = 'config';

require_once "header.php";

function echo_select($select) {
  $selected = [
    "null" => "",
    "empty" => "",
    "diu" => "",
    "hospital" => "",
    "implanon" => "",
    "pn" => "",
    "psico" => "",
    "pueri" => "",
    "sadt" => "",
    "sr2" => "",
    "meds" => ""
  ];

  switch ($select) {
    case "diu":
      $selected["diu"] = " selected";
      break;
    case "hospital":
      $selected["hospital"] = " selected";
      break;
    case "implanon":
      $selected["implanon"] = " selected";
      break;
    case "pn":
      $selected["pn"] = " selected";
      break;
    case "psico":
      $selected["psico"] = " selected";
      break;
    case "pueri":
      $selected["pueri"] = " selected";
      break;
    case "sadt":
      $selected["sadt"] = " selected";
      break;
    case "sr2":
      $selected["sr2"] = " selected";
      break;
    case "meds":
      $selected["meds"] = " selected";
      break;
    default:
      $selected["null"] = " selected";
      break;
  }

  echo "
  <select>
    <option value=\"\"{$selected["null"]}>&mdash;</option>
    <option value=\"diu\"{$selected["diu"]}>Passagem de DIU</option>
    <option value=\"hospital\"{$selected["hospital"]}>Exame Físico</option>
    <option value=\"implanon\"{$selected["implanon"]}>Requisição Implanon</option>
    <option value=\"pn\"{$selected["pn"]}>Pré-Natal</option>
    <option value=\"psico\"{$selected["psico"]}>Exame Psíquico</option>
    <option value=\"pueri\"{$selected["pueri"]}>Puericultura</option>
    <option value=\"sadt\"{$selected["sadt"]}>SADTs</option>
    <option value=\"sr2\"{$selected["sr2"]}>Sintomáticos Respiratórios v2</option>
    <option value=\"meds\"{$selected["meds"]}>Prescrições</option>
  </select>
  ";
}

if ( isset( $_COOKIE["place"] ) ) { $place = json_decode( $_COOKIE["place"] ); }
elseif ( isset( $_SESSION["place"] ) ) { $place = $_SESSION["place"]; }
else { $place = ["", "", "", ""]; }

if ( isset($_COOKIE["physician"]) ) { $physician = json_decode( $_COOKIE["physician"] ); }
elseif ( isset($_SESSION["physician"]) ) { $physician = $_SESSION["physician"]; }
else { $physician = ["", "", "SP"]; }
?>

<section class="section">
  <div class="container">
    <div class="box">
      <h2 class="title is-3">Configurações</h2>

      <h3 class="title is-4">Ordem dos Menus</h3>

      <?php
      foreach ($menu as $index => $line) {
        $index++;
        $wide = false;
        if ( count($line) === 1 ) {
          $wide = true;
          $line[1] = null;
          $line[2] = null;
        }
      ?>
      <div class="mb-4">
        <h4 class="title is-5">Linha <?php echo $index; ?></h4>
        <div class="field">
          <input id="line<?php echo $index; ?>-wide" class="switch line-menu" type="checkbox"<?php if ($wide) { echo " checked"; } ?>>
          <label for="line<?php echo $index; ?>-wide">Menu largo</label>
        </div>
        <div id="line<?php echo $index; ?>-widemenu" class="field<?php if (!$wide) { echo " is-hidden"; } ?>">
          <div id="line<?php echo $index; ?>-optwide" class="select is-fullwidth menu-select">
            <?php echo_select($line[0]) ?>
          </div>
        </div>
        <div id="line<?php echo $index; ?>-shortmenu"<?php if ($wide) { echo " class=\"is-hidden\""; } ?>>
          <div class="field">
            <div class="select is-fullwidth menu-select" id="line<?php echo $index; ?>-opt1">
              <?php echo_select($line[0]) ?>
            </div>
          </div>
          <div class="field">
            <div class="select is-fullwidth menu-select" id="line<?php echo $index; ?>-opt2">
              <?php echo_select($line[1]) ?>
            </div>
          </div>
          <div class="field">
            <div class="select is-fullwidth menu-select" id="line<?php echo $index; ?>-opt3">
              <?php echo_select($line[2]) ?>
            </div>
          </div>
        </div>
      </div>
      <?php } ?>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-4">Local para SADTs</h3>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Nome da Unidade</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="place-name" placeholder="..." maxlength="80" value="<?php echo $place[0]; ?>">
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CNES</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="place-cnes" placeholder="#######" pattern="\d{7}" value="<?php echo $place[1]; ?>">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Telefone</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="place-phone" placeholder="(##) # #### ####" placeholder="((\(\d{2}\))?( )?(\d)?( |-)?(\d{4})( |-)?(\d{4}))" value="<?php echo $place[2]; ?>">
            </div>
          </div>
        </div>
      </div>

      <div class="field has-addons">
        <div class="control">
          <button class="button is-static" tabindex="-1">Endereço</button>
        </div>
        <div class="control is-expanded">
          <input type="text" class="input" id="place-address" placeholder="..." maxlength="80" value="<?php echo $place[3]; ?>">
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <h3 class="title is-4">Dados Pessoais Médicos</h3>

      <div class="columns">
        <div class="column is-two-thirds">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">Nome</button>
            </div>
            <div class="control is-expanded">
              <input type="text" class="input" id="physician-name" placeholder="..." value="<?php echo $physician[0]; ?>">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <div class="control">
              <button class="button is-static" tabindex="-1">CRM</button>
            </div>
            <div class="control is-expanded">
              <input type="number" class="input" id="physician-crm" placeholder="###.###" min="1" step="1" value="<?php echo $physician[1]; ?>">
            </div>
            <div class="control">
              <div class="select">
                <select id="physician-crm-uf">
                  <option value="AC"<?php echo ( $physician[2] == "AC" ) ? " selected" : ""; ?>>AC</option>
                  <option value="AL"<?php echo ( $physician[2] == "AL" ) ? " selected" : ""; ?>>AL</option>
                  <option value="AP"<?php echo ( $physician[2] == "AP" ) ? " selected" : ""; ?>>AP</option>
                  <option value="AM"<?php echo ( $physician[2] == "AM" ) ? " selected" : ""; ?>>AM</option>
                  <option value="BA"<?php echo ( $physician[2] == "BA" ) ? " selected" : ""; ?>>BA</option>
                  <option value="CE"<?php echo ( $physician[2] == "CE" ) ? " selected" : ""; ?>>CE</option>
                  <option value="DF"<?php echo ( $physician[2] == "DF" ) ? " selected" : ""; ?>>DF</option>
                  <option value="ES"<?php echo ( $physician[2] == "ES" ) ? " selected" : ""; ?>>ES</option>
                  <option value="GO"<?php echo ( $physician[2] == "GO" ) ? " selected" : ""; ?>>GO</option>
                  <option value="MA"<?php echo ( $physician[2] == "MA" ) ? " selected" : ""; ?>>MA</option>
                  <option value="MT"<?php echo ( $physician[2] == "MT" ) ? " selected" : ""; ?>>MT</option>
                  <option value="MS"<?php echo ( $physician[2] == "MS" ) ? " selected" : ""; ?>>MS</option>
                  <option value="MG"<?php echo ( $physician[2] == "MG" ) ? " selected" : ""; ?>>MG</option>
                  <option value="PA"<?php echo ( $physician[2] == "PA" ) ? " selected" : ""; ?>>PA</option>
                  <option value="PB"<?php echo ( $physician[2] == "PB" ) ? " selected" : ""; ?>>PB</option>
                  <option value="PR"<?php echo ( $physician[2] == "PR" ) ? " selected" : ""; ?>>PR</option>
                  <option value="PE"<?php echo ( $physician[2] == "PE" ) ? " selected" : ""; ?>>PE</option>
                  <option value="PI"<?php echo ( $physician[2] == "PI" ) ? " selected" : ""; ?>>PI</option>
                  <option value="RJ"<?php echo ( $physician[2] == "RJ" ) ? " selected" : ""; ?>>RJ</option>
                  <option value="RN"<?php echo ( $physician[2] == "RN" ) ? " selected" : ""; ?>>RN</option>
                  <option value="RS"<?php echo ( $physician[2] == "RS" ) ? " selected" : ""; ?>>RS</option>
                  <option value="RO"<?php echo ( $physician[2] == "RO" ) ? " selected" : ""; ?>>RO</option>
                  <option value="RR"<?php echo ( $physician[2] == "RR" ) ? " selected" : ""; ?>>RR</option>
                  <option value="SC"<?php echo ( $physician[2] == "SC" ) ? " selected" : ""; ?>>SC</option>
                  <option value="SP"<?php echo ( $physician[2] == "SP" ) ? " selected" : ""; ?>>SP</option>
                  <option value="SE"<?php echo ( $physician[2] == "SE" ) ? " selected" : ""; ?>>SE</option>
                  <option value="TO"<?php echo ( $physician[2] == "TO" ) ? " selected" : ""; ?>>TO</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider">
        <div>&bull;&nbsp;&bull;&nbsp;&bull;</div>
      </div>

      <div class="field">
        <button id="config-save" class="button is-success is-fullwidth" type="button">Salvar</button>
      </div>

    </div>
  </div>
</section>

<div id="config-reply" class="notification is-hidden">
  <button class="delete"></button>
  <p>
    Lorem ipsum dolor sit amet, consectetur.
  </p>
</div>

<?php
require_once "footer.php";
?>

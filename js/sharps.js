$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function () {
    if ($(this).is(":checked")) {
      $(this).parent()
        .addClass("is-primary")
        .find(".mdi")
        .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
        .addClass("mdi-checkbox-marked");
    } else {
      $(this).parent()
        .removeClass("is-primary")
        .find(".mdi")
        .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
        .addClass("mdi-checkbox-blank-outline");
    }
  });

  // Remove notifications
  $(".notification button.delete").on("click", function() {
    $(this).parent().remove();
  });

  // Fill CNES if a specific service
  $("#hospital-name").on("input change", function() {
    if (
      $(this).val().toLowerCase() == "iamspe" ||
      $(this).val().toLowerCase() == "hspe"
    ) {
      $(this).val("H. do Servidor Público Estadual SP");
      $("#hospital-state").val("SP").trigger("change");
      $("#hospital-city").val("São Paulo").trigger("change");
      $("#hospital-cnes").val("2058502");
    }
  });

  // Enable source fields
  $("#source-known").on("change", function() {
    if ($(this).is(":checked")) {
      $("#source-name, #source-pront, #source-hiv").prop("disabled", false);
      $("#source-name")
        .val("")
        .trigger("focus");
    }
    else {
      $("#source-name, #source-pront, #source-hiv").prop("disabled", true);
      $("#source-name").val("DESCONHECIDO");
    }
  });
  // Parse CPF
  $("#patient-cpf").on("keydown", function(e) {
    // Allow only 0-9, arrows, Bksp, Del, Home, End & Tab
    if (
      (e.which < 96 || e.which > 105) &&
      (e.which < 37 || e.which > 40) &&
      e.which != 8 &&
      e.which != 9 &&
      e.which != 35 &&
      e.which != 36 &&
      e.which != 46
    ) {
      e.preventDefault();
    }
  });
  // Enable dT time
  $("#patient-dt").on("change", function() {
    if ($(this).val() == "true") {
      $("#patient-dt-time")
        .prop("disabled", false)
        .trigger("focus");
    } else {
      $("#patient-dt-time")
        .val("")
        .prop("disabled", true);
    }
  });
  // Enable other exposition description field
  $("#accident-exposition-other").on("change", function() {
    if ($(this).is(":checked")) {
      $("#accident-exposition-other-desc")
        .prop("disabled", false)
        .trigger("focus");
    } else {
      $("#accident-exposition-other-desc")
        .val("")
        .prop("disabled", true);
    }
  });
  // Update notes' character count
  $("#notes").on("input change", function() {
    let len = parseInt( $("#notes").val().length );
    $("#notes-charcount").html(len);
    if (len > 400) { $("#notes-charcount").parent().addClass("has-text-danger"); }
    else { $("#notes-charcount").parent().removeClass("has-text-danger"); }
  });

  // Enable lesion size
  $("#lesion-size").on("change", function() {
    if ($(this).val().includes("de aproximadamente")) {
      $("#lesion-size-mm")
        .prop("disabled", false)
        .trigger("focus");
    } else {
      $("#lesion-size-mm")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable vaccine text-copy buttons
  $("#plan-hepb-what, #plan-dt-what").on("change", function() {
    let id = $(this).attr("id");
    if ($(this).val().includes("Redijo")) {
      $("#" + id + "text").prop("disabled", false);
    } else {
      $("#" + id + "text").prop("disabled", true);
    }
  });
  // Add other entry
  // Then add the first one
  $("#plan-other-add").on("click", function () {
    var uuid = uuidPoor();
    var item = $("<div>")
      .addClass("field has-addons plan-other-item")
      .attr("id", uuid);

    // Delete button
    var delete_control = $("<div>")
      .addClass("control");
    var delete_button = $("<button>")
      .attr("type", "button")
      .addClass("button is-danger")
      .attr("id", "delete-" + uuid)
      .on("click", function () { $("#" + uuid).remove(); });
    var delete_span = $("<span>")
      .addClass("icon");
    var delete_i = $("<i>")
      .addClass("mdi mdi-delete");
    delete_span.append(delete_i);
    delete_button.append(delete_span);
    delete_control.append(delete_button);
    item.append(delete_control);

    // Plan
    var desc_control = $("<div>")
      .addClass("control is-expanded");
    var desc_input = $("<input>")
      .attr("type", "text")
      .addClass("input")
      .attr("id", "plan-" + uuid)
      .attr("placeholder", "Descreva conduta...");
    desc_control.append(desc_input);
    item.append(desc_control);

    $("#plan-other-container").append(item);
  }).trigger("click");

  // Check if required fields are filled
  $("[required]").on("change input", function() {
    // Change color code if missing data
    if ($(this).val() == "" || $(this).val() == null) {
      if ($(this).prop("nodeName").toLowerCase() === "select") {
        $(this).parent().addClass("is-danger");
      } else {
        $(this).addClass("is-danger");
      }
    } else {
      if ($(this).prop("nodeName").toLowerCase() === "select") {
        $(this).parent().removeClass("is-danger");
      } else {
        $(this).removeClass("is-danger");
      }
    }

    // Run global check if all required are filled
    let all_ok = true;
    $("[required]").each(function(i, e) {
      if ($(e).val() == "" || $(e).val() == null) {
        all_ok = false;
        return false;
      }
    });
    // If all elements were filled, `all_ok` was never changed and remains `true`
    if (all_ok) {
      // Enable output button
      $("#button-run").attr("disabled", false);
      // Process variables to build notification link
      let hospital = {
        "state"    : $("#hospital-state").val(),
        "city"     : $("#hospital-city").val(),
        "hospital" : $("#hospital-name").val(),
        "cnes"     : $("#hospital-cnes").val()
      };
      let source = false;
      let date = new Date($("#accident-date").val());
      let date_str = date.toISOString().substring(0, 10);
      let accident = {
        "date": date_str,
        "patient": {
          "name"     : $("#patient-name").val(),
          "pront"    : $("#patient-pront").val(),
          "dob"      : $("#patient-dob").val(),
          "mother"   : $("#patient-mother").val(),
          "cpf"      : $("#patient-cpf").val(),
          "age"      : get_age($("#patient-dob").val()),
          "age_unit" : "4",
          "bio_sex"  : $("#patient-bio_sex").val(),
          "preg"     : $("#patient-preg").val(),
          "race"     : $("#patient-race").val(),
          "school"   : $("#patient-school").val()
        },
        "address": {
          "street" : $("#patient-address").val(),
          "number" : $("#patient-address-number").val(),
          "extra"  : $("#patient-address-extra").val(),
          "city"   : $("#patient-address-city").val(),
          "state"  : $("#patient-address-state").val(),
          "zone"   : $("#patient-address-zone").val(),
          "shire"  : $("#patient-address-shire").val(),
          "cep"    : $("#patient-address-cep").val()
        },
        "phone": {
          "ddd"    : $("#patient-phone-ddd").val(),
          "number" : $("#patient-phone-number").val()
        },
        "work": {
          "job"     : $("#patient-occupation-job").val(),
          "company" : $("#patient-occupation-company").val(),
          "status"  : $("#patient-occupation-status").val(),
          "time"    : $("#patient-occupation-time").val(),
          "t_unit"  : $("#patient-occupation-t_unit").val(),
          "out"     : $("#patient-occupation-out").val()
        },
        "exposition": {
          "type": {
            "percutaneous" : $("#accident-exposition-percutaneous").is(":checked") ? "1" : "2",
            "mucosa"       : $("#accident-exposition-mucosa").is(":checked") ? "1" : "2",
            "skin"         : $("#accident-exposition-skin").is(":checked") ? "1" : "2",
            "skin_lesion"  : $("#accident-exposition-skin-lesion").is(":checked") ? "1" : "2",
            "other"        : $("#accident-exposition-other").is(":checked") ? "1" : "2",
            "other_desc"   : $("#accident-exposition-other-desc").val()
          },
          "material" : $("#accident-material").val(),
          "context"  : $("#accident-context").val(),
          "agent"    : $("#accident-agent").val(),
          "ppe": {
            "gloves"     : $("#accident-ppe-gloves").is(":checked") ? "1" : "2",
            "apron"      : $("#accident-ppe-apron").is(":checked") ? "1" : "2",
            "glasses"    : $("#accident-ppe-glasses").is(":checked") ? "1" : "2",
            "mask"       : $("#accident-ppe-mask").is(":checked") ? "1" : "2",
            "faceshield" : $("#accident-ppe-faceshield").is(":checked") ? "1" : "2",
            "boots"      : $("#accident-ppe-boots").is(":checked") ? "1" : "2"
          },
          "hep_b"    : $("#patient-hepb").val().substring(0, 1),
          "source"   : $("#source-known").is(":checked") ? "1" : "2",
          "hiv"      : $("#source-hiv").val(),
          "plan": {
            "no_proph" : $("#plan-pep").val() == "no" ? "1" : "2",
            "refuse"   : $("#plan-pep").val() == "refuse" ? "1" : "2",
            "hepb_vax" : $("#plan-hepb").is(":checked") ? "1" : "2",
            "hepb_ig"  : "2",
            "pep"      : ($("#plan-pep").val() == "yes" || $("#plan-pep").val() == "refuse") ? "1" : "2"
          }
        },
        "notes": build_notes()
      };
      // Build notification link
      $("#button-notification")
        .attr(
          "href",
          "sharps_result.php?hospital=" + encodeURI(JSON.stringify(hospital)) +
          "&accident=" + encodeURI(JSON.stringify(accident))
        )
        .attr("disabled", false);
    }
  }).trigger("change");

  // Build output:
  $("#button-run").on("click", function() {
    let txt = ["# " + $("#sr-header").val() + " #"];

    // Process accident data
    let material = "";
    switch ($("#accident-material").val()) {
      case "1":
        material = "sangue";
        break;
      case "2":
        material = "líquor";
        break;
      case "3":
        material = "líquido pleural";
        break;
      case "4":
        material = "líquido ascítico";
        break;
      case "5":
        material = "líquido amniótico";
        break;
      case "6":
        material = "fluído contendo sangue";
        break;
      case "7":
        material = "hemoderivado";
        break;
      default:
        material = "fluído mal-caracterizado";
    }
    let context = "";
    switch ($("#accident-context").val()) {
      case "01":
        context = "administração de medicação endovenosa";
        break;
      case "02":
        context = "administração de medicação intramuscular";
        break;
      case "03":
        context = "administração de medicação subcutânea";
        break;
      case "04":
        context = "administração de medicação intradérmica";
        break;
      case "05":
        context = "punção para coleta de sangue";
        break;
      case "06":
        context = "punção não especificada";
        break;
      case "07":
        context = "descarte de material perfurocortante em saco de lixo";
        break;
      case "08":
        context = "descarte de material perfurocortante";
        break;
      case "09":
        context = "lavanderia";
        break;
      case "10":
        context = "lavagem de material";
        break;
      case "11":
        context = "manipulação de caixa de desarte de perfurocortantes";
        break;
      case "12":
        context = "procedimento cirúrgico";
        break;
      case "13":
        context = "procedimento odontológico";
        break;
      case "14":
        context = "procedimento laboratorial";
        break;
      case "15":
        context = "realização de glicemia capilar";
        break;
      case "16":
        context = "reencape de instrumento perfurocortante";
        break;
      default:
        context = "contexto mal caracterizado";
    }
    let agent = "";
    switch ($("#accident-agent").val()) {
      case "1":
        agent = "agulha com lúmen";
        break;
      case "2":
        agent = "agulha sem lúmen";
        break;
      case "3":
        agent = "intracath";
        break;
      case "4":
        agent = "vidro";
        break;
      case "5":
        agent = "lâmina";
        break;
      default:
        agent = "agente mal-caracterizado";
    }
    let time = $("#accident-time").val();
    let today = new Date();
    let date = new Date( $("#accident-date").val() );
    let options = {
      weekday : "long",
      year    : "numeric",
      month   : "long",
      day     : "numeric"
    };
    if (today.toISOString().substring(0, 10) == date.toISOString().substring(0, 10)) {
      date = "hoje";
    } else {
      date = date.toLocaleDateString("pt-BR", options);
    }
    txt.push("O paciente relata ter sofrido acidente com " + agent + " com " + material + " durante " + context + " por volta das " + time + " de " + date + ".");
    if ($("#notes").val() != "") {
      txt.push($("#notes").val());
    }

    // Allergies
    let allergies = "# Nega alergias medicamentosas conhecidas.";
    if( $("#allergy-yes").is(":checked") ) {
      allergies = $("#allergy-drug").val().split(",");
      allergies = allergies.map(s => s.trim());
      allergies = "# Refere " + (allergies.length > 1 ? "alergias medicamentosas conhecidas" : "alergia medicamentosa conhecida") + " apenas a " + humanList(allergies) + ".";
    }
    txt.push(allergies);
    // Vaccines
    let vax = "# Vacinas:";
    vax += "\n- Hep. B: ";
    switch ($("#patient-hepb").val()) {
      case "11":
        vax += "refere vacinação completa (3+ doses)";
        break;
      case "12":
        vax += "refere vacinação completa E soroconverção vacinal (Anti-HBs+ e AgHBc-)";
        break;
      case "23":
        vax += "refere vacinação incompleta (<3 doses)";
        break;
      case "24":
        vax += "não sabe";
        break;
      case "25":
        vax += "refere vacinação completa (>3 doses) mas sem soroconversão vacinal (Anti-HBs-)";
        break;
      case "96":
        vax += "refere viver com HBV";
        break;
      default:
        vax += "desconhecido";
    }
    if ($("#patient-dt").val() != "") {
      vax += "\n- dT: ";
      if ($("#patient-dt").val() == "false") {
        vax += "não lembra";
      } else {
        let dt_time = parseInt($("#patient-dt-time").val());
        vax += "refere última dose há " + dt_time + " ano" + (dt_time > 1 ? "s" : "");
      }
    }
    txt.push(vax);
    // HIV
    if ($("#patient-hiv").val() != "") {
      txt.push("# HIV: " + $("#patient-hiv").val());
    }
    // Job
    let job = "# Ocupação:";
    job += "\n- Cargo: " + $("#patient-occupation-job").val();
    job += "\n- Empresa: " + $("#patient-occupation-company").val();
    job += "\n- Tempo no Cargo: ";
    let job_time = parseInt($("#patient-occupation-time").val());
    job += job_time + " ";
    switch ($("#patient-occupation-t_unit").val()) {
      case "1":
        job += "hora" + (job_time > 1 ? "s" : "");
        break;
      case "2":
        job += "dia" + (job_time > 1 ? "s" : "");
        break;
      case "3":
        job += "m" + (job_time > 1 ? "eses" : "ês");
        break;
      case "4":
        job += "ano" + (job_time > 1 ? "s" : "");
        break;
    }
    job += "\n- Vínculo: ";
    switch ($("#patient-occupation-status").val()) {
      case "01":
        job += "celetista";
        break;
      case "02":
        job += "não-registrado";
        break;
      case "03":
        job += "autônomo";
        break;
      case "04":
        job += "servidor estatutário";
        break;
      case "05":
        job += "servidor CLT";
        break;
      case "06":
        job += "aposentado";
        break;
      case "07":
        job += "desempregado";
        break;
      case "08":
        job += "temporário";
        break;
      case "09":
        job += "cooperativo";
        break;
      case "10":
        job += "avulso";
        break;
      case "11":
        job += "empregador";
        break;
      default:
        job += "desconhecido";
    }
    job += "\n- Terceirizado: ";
    switch ($("#patient-occupation-out").val()) {
      case "1":
        job += "sim";
        break;
      case "2":
        job += "não";
        break;
      default:
        job += "desconhecido";
    }
    job += "\n- Escolaridade: ";
    switch ($("#patient-school").val()) {
      case "0":
        job += "refere ser analfabeto";
        break;
      case "1":
        job += "refere fundamental I incompleto";
        break;
      case "2":
        job += "refere fundamental I completo";
        break;
      case "3":
        job += "refere fundamental II incompleto";
        break;
      case "4":
        job += "refere fundamental completo";
        break;
      case "5":
        job += "refere ensino médio incompleto";
        break;
      case "6":
        job += "refere ensino médio completo";
        break;
      case "7":
        job += "refere ensino superior incompleto";
        break;
      case "8":
        job += "refere ensino superior completo";
        break;
      default:
        job += "não consegue referir escolaridade";
    }
    txt.push(job);

    // Source
    let source = "";
    if ($("#source-known").is(":checked")) {
      source = "# Fonte CONHECIDA:\n- " + $("#source-name").val() + "\n- Pront: " + $("#source-pront").val() + ";\n- TR-HIV: " + ($("#source-hiv").val() == "1" ? "REAGENTE" : "NÃO reagente") + ".";
    } else {
      source = "# Fonte: DESCONHECIDA.";
    }
    txt.push("");
    txt.push(source);

    // Physical Examination
    let ef = "";
    if (
      $("#lesion-puncture").is(":checked") ||
      $("#lesion-cut").is(":checked") ||
      $("#lesion-blunt").is(":checked")
    ) {
      ef = "Lesão ";
      // Lesion type(s)
      if ($("#lesion-puncture").is(":checked")) {
        ef += "perfuro";
      }
      if ($("#lesion-cut").is(":checked")) {
        ef += "corto";
      }
      if ($("#lesion-blunt").is(":checked")) {
        ef += "contusa";
      }
      if (/perfuro$/.test(ef)) {
        ef.replace("perfuro", "perfurante");
      } else if (/corto$/.test(ef)) {
        ef.replace("corto", "cortante");
      }
      ef += " ";
      // Size
      if ($("#lesion-size").val() != "puntiforme") {
        ef += $("#lesion-size").val() + " " + $("#lesion-size-mm").val() + "mm"
        if ($("#lesion-size").val() != "linear, de aproximadamente") {
          ef += " no maior eixo";
        } else {
          ef += " de diâmetro";
        }
      } else {
        ef += "puntiforme";
      }
      // Bleeding
      if ($("#lesion-bleed").val() != "" || $("#lesion-bleed").val() == "ausente") {
        ef += " sem sangramentos detectáveis,";
      } else {
        ef += " com sangramento " + $("#lesion-bleed").val() + ",";
      }
      // Secretions
      if ($("#lesion-secretions").val() != "" || $("#lesion-secretions").val() == "ausente") {
        ef += " sem secreções detectáveis,";
      } else {
        ef += " com " + $("#lesion-secretions").val() + ",";
      }
      // Location
      if ($("#lesion-place").val() == "") {
        ef += " de localização não descrita";
      } else {
        ef += " localizada " + $("#lesion-place-article").val() + " " + $("#lesion-place").val();
      }
      if (/^.+[\.\!\?]$/.test(ef)) { ef += "."; }
    }
    if ($("#lesion-other").val() != "") {
      ef += (ef != "" ? "\n" : "") + $("#lesion-other").val();
      if (/^.+[\.\!\?]$/.test(ef)) { ef += "."; }
    }
    if (ef != "") {
      txt.push("");
      txt.push("# EF:\n" + ef);
    }

    // Diagnosis
    txt.push("");
    txt.push("# HD:\n1. Exposição a Material Biológico;\n2. Acidente " + $("#dx").val() + ".");

    // Plans
    let plans = ["Notifico"];
    switch ($("#plan-pep").val()) {
      case "no":
        plans.push("PEP-HIV não prescrito por paciente não apresentar indicação");
        break;
      case "refuse":
        plans.push("Paciente recusa PEP-HIV, o qual é indicado pelos protocolos Ministerial e institucional vigentes");
        break;
      case "yes":
        plans.push("Prescrevo 3TC+TDF+DTG por 28 dias (PEP-HIV)");
        break;
      default:
        plans.push("Indicação de PEP-HIV não abordada");
    }
    if ($("#plan-hepb").is(":checked")) {
      plans.push($("#plan-hepb-what").val());
    }
    if ($("#plan-dt").is(":checked")) {
      plans.push($("#plan-dt-what").val());
    }
    if ($("#plan-symptomatics").is(":checked")) {
      plans.push($("#plan-symptomatics-what").val());
    }
    if ($("#plan-seesmt").is(":checked")) {
      plans.push("Encaminho ao SEESMT para abertura de CAT junto à Medicina do Trabalho");
    }
    if ($("#plan-care").is(":checked")) {
      plans.push("Oriento cuidados com ferida");
    }
    if ($("#plan-reference").is(":checked")) {
      plans.push("Contrarreferencio à Infectologia ambulatorial para seguimento pós-acidente com material biológico");
    }
    // Other plans
    $(".plan-other-item").each(function () {
      let cd = $(this).find("input[type='text']").val().trim();
      if (cd != "") { plans.push(cd); }
    });
    // Leave
    if ($("#plan-bai").is(":checked")) {
      plans.push("Alta do episódio");
    }
    plans.map((e, i) => (i + 1) + ". " + e);
    txt.push("");
    txt.push("# CD:\n" + plans.join(";\n") + ".");

    // Final Output
    $("#output").val(txt.join("\n"));
  });
});

function get_age(dob) {
  birthDate = new Date(dob);
  otherDate = new Date();

  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() || (otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
    years--;
  }

  return years;
}

function build_notes() {
  let material = "";
  switch ($("#accident-material").val()) {
    case "1":
      material = "sangue";
      break;
    case "2":
      material = "líquor";
      break;
    case "3":
      material = "líquido pleural";
      break;
    case "4":
      material = "líquido ascítico";
      break;
    case "5":
      material = "líquido amniótico";
      break;
    case "6":
      material = "fluído contendo sangue";
      break;
    case "7":
      material = "hemoderivado";
      break;
    default:
      material = "fluído mal-caracterizado";
  }
  let context = "";
  switch ($("#accident-context").val()) {
    case "01":
      context = "administração de medicação endovenosa";
      break;
    case "02":
      context = "administração de medicação intramuscular";
      break;
    case "03":
      context = "administração de medicação subcutânea";
      break;
    case "04":
      context = "administração de medicação intradérmica";
      break;
    case "05":
      context = "punção para coleta de sangue";
      break;
    case "06":
      context = "punção não especificada";
      break;
    case "07":
      context = "descarte de material perfurocortante em saco de lixo";
      break;
    case "08":
      context = "descarte de material perfurocortante";
      break;
    case "09":
      context = "lavanderia";
      break;
    case "10":
      context = "lavagem de material";
      break;
    case "11":
      context = "manipulação de caixa de desarte de perfurocortantes";
      break;
    case "12":
      context = "procedimento cirúrgico";
      break;
    case "13":
      context = "procedimento odontológico";
      break;
    case "14":
      context = "procedimento laboratorial";
      break;
    case "15":
      context = "realização de glicemia capilar";
      break;
    case "16":
      context = "reencape de instrumento perfurocortante";
      break;
    default:
      context = "contexto mal caracterizado";
  }
  let agent = "";
  switch ($("#accident-agent").val()) {
    case "1":
      agent = "agulha com lúmen";
      break;
    case "2":
      agent = "agulha sem lúmen";
      break;
    case "3":
      agent = "intracath";
      break;
    case "4":
      agent = "vidro";
      break;
    case "5":
      agent = "lâmina";
      break;
    default:
      agent = "agente mal-caracterizado";
  }
  let time = $("#accident-time").val();
  let today = new Date();
  let date = new Date( $("#accident-date").val() );
  let options = {
    weekday : "long",
    year    : "numeric",
    month   : "long",
    day     : "numeric"
  };
  if (today.toISOString().substring(0, 10) == date.toISOString().substring(0, 10)) {
    date = "hoje";
  } else {
    date = date.toLocaleDateString("pt-BR", options);
  }
  let source = "DESCONHECIDA";
  if ($("#source-known").is(":checked")) {
    source = $("#source-name").val() + " (Pront " + $("#source-pront").val() + "; TR-HIV " + ($("#source-hiv").val() == "1" ? "REAGENTE" : "NÃO reagente") + ")";
  }
  let txt = "O paciente acima relata ter sofrido acidente com " + agent + " com " + material + " durante " + context + " por volta das " + time + " de " + date + ". Fonte " + source + ".";
  txt += "\n" + $("#notes").val();

  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

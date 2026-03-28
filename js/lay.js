$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Enable/Disable justification field
  $("#external, #pec").on("change", function() {
    let id = $(this).attr("id");
    let val = $(this).val();
    if (val == "false") {
      $("#" + id + "-why")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#" + id + "-why")
        .attr("disabled", true)
        .val("");
    }
  });

  // Check if required fields are filled
  $("[required]").on("change input", function () {
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
    $("[required]").each(function (i, e) {
      if ($(e).val() == "" || $(e).val() == null) {
        all_ok = false;
      }
    });
    // If all elements were filled, `all_ok` was never changed and remains `true`
    if (all_ok) {
      // Enable output button
      $("#button-run").attr("disabled", false);
    } else {
      // (Re)disable output button
      $("#button-run").attr("disabled", true);
    }
  }).trigger("change");

  // Build output
  $("#button-run").on("click", function() {
    // Get data
    let assistant    = $("#assistant").val().trim();
    let patient      = $("#patient").val().trim();
    let birth        = Date.parse($("#birth").val() + "T00:00:00.000-03:00");
    let atend        = $("#atend").val();
    let type         = $("#type").val();
    let external     = ($("#external").val() == "true") ? true : false;
    let external_why = $("#external-why").val().trim();
    let pec          = $("#pec").val();
    let pec_why      = $("#pec-why").val().trim();
    let dx           = $("#dx").val();
    let priority     = $("#priority").val();
    let notes        = $("#notes").val().trim();
    let datetime     = new Date();

    // Parse applicable data
    // > Calculate age
    let now = Date.now();
    let ms_per_year = 1000 * 60 * 60 * 24 * 365.25;
    let age = (now - birth) / ms_per_year;
    // > If age is set and is a number, append to patient name
    if (isNaN(age)) {
      patient = "`" + patient.toUpperCase() + "`";
    } else {
      patient = "`" + patient.toUpperCase() + "`, " + age.toFixed(0) + "a";
    }
    // > Parse birth date
    let birth_options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    birth = new Date(birth);
    birth = birth.toLocaleString("pt-BR", birth_options);
    // > Prettify atend number
    atend = atend.substr(0, 3) + "." + atend.substr(3, 2) + "." + atend.substr(5, 3);
    // > Parse type
    let type_lay = (type == "lay") ? "x" : " ";
    let type_inpatient = (type == "inpatient") ? "x" : " ";
    // > Parse external
    let external_true  = external ? "x" : " ";
    let external_false = external ? " " : "x";
    // > If not external-apt, set justification
    if (external) {
      external_why = "";
    } else {
      if (external_why) {
        external_why = " (" + external_why + ")";
      } else {
        external_why = " (caso de alta complexidade)";
      }
    }
    // > Parse PEC
    let pec_true = " ";
    let pec_false = " ";
    let pec_na = " ";
    switch (pec) {
      case "false":
        pec_true = " ";
        pec_false = "x";
        pec_na = " ";
        break;
      case "neither":
        pec_true = " ";
        pec_false = " ";
        pec_na = "x";
        break;
      default:
        // I.e. true
        pec_true = "x";
        pec_false = " ";
        pec_na = " ";
        break;
    }
    // > If not PEC-apt, set justification
    if (pec == "false") {
      pec_why = pec_why == "" ? "periodicidade de antibiótico não coberta pelo PEC" : pec_why;
      pec_why = " (" + pec_why + ")";
    } else {
      pec_why = "";
    }
    // > Parse priority
    let priority_high = (priority == "high") ? "x" : " ";
    let priority_mid  = (priority == "mid") ? "x" : " ";
    let priority_low  = (priority == "low") ? "x" : " ";
    // > Parse notes
    if (!notes) { notes = "ndn"; }
    // > Parse date & time
    let datetime_options = {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    datetime = datetime.toLocaleString("pt-BR", datetime_options);

    // Set final string template
    final = `*🛏 \`ATUALIZAÇÃO - MÉDICOS DA PORTA\` 🩺*
Médico: {{assistant}}
Paciente: {{patient}}
DN: {{birth}}
Atend: {{atend}}
Solicitação:
- ({{type_lay}}) Repouso no leito
- ({{type_inpatient}}) Internação
Elegível para Transferência Externa:
- ({{external_true}}) Sim
- ({{external_false}}) Não{{external_why}}
Elegível para PEC:
- ({{pec_true}}) Sim
- ({{pec_false}}) Não{{pec_why}}
- ({{pec_na}}) N/A
Hipótese diagnóstica: {{dx}}
Prioridade:
- ({{priority_high}}) Urgente
- ({{priority_mid}}) Pode aguardar
- ({{priority_low}}) Não urgente
Observações: {{notes}}
Data e hora: {{datetime}}`;

    // Parse final string
    final = final
      .replaceAll("{{assistant}}", assistant)
      .replaceAll("{{patient}}", patient)
      .replaceAll("{{birth}}", birth)
      .replaceAll("{{atend}}", atend)
      .replaceAll("{{type_lay}}", type_lay)
      .replaceAll("{{type_inpatient}}", type_inpatient)
      .replaceAll("{{external_true}}", external_true)
      .replaceAll("{{external_false}}", external_false)
      .replaceAll("{{external_why}}", external_why)
      .replaceAll("{{pec_true}}", pec_true)
      .replaceAll("{{pec_false}}", pec_false)
      .replaceAll("{{pec_na}}", pec_na)
      .replaceAll("{{pec_why}}", pec_why)
      .replaceAll("{{dx}}", dx)
      .replaceAll("{{priority_high}}", priority_high)
      .replaceAll("{{priority_mid}}", priority_mid)
      .replaceAll("{{priority_low}}", priority_low)
      .replaceAll("{{notes}}", notes)
      .replaceAll("{{datetime}}", datetime)
      // Replace common abbreviations
      .replaceAll("pcte", "paciente")
      .replaceAll("atb", "antibiótico");
    // Set output field to parsed string
    $("#output-o").val(final);
  });
});

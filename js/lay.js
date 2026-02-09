$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Enable/Disable justification field
  $("#external").on("change", function() {
    let val = $(this).val();
    if (val == "false") {
      $("#external-why")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#external-why")
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
    let assistant    = $("#assistant").val();
    let patient      = $("#patient").val();
    let age          = parseInt($("#age").val());
    let type         = $("#type").val();
    let external     = ($("#external").val() == "true") ? true : false;
    let external_why = $("#external-why").val();
    let pec          = ($("#pec").val() == "true") ? true : false;
    let dx           = $("#dx").val();
    let priority     = $("#priority").val();
    let notes        = $("#notes").val();
    let datetime     = new Date();

    // Parse applicable data
    // > If age is set and is a number, append to patient name
    if (isNaN(age)) {
      patient = "`" + patient + "`";
    } else {
      patient = "`" + patient + "`, " + age + "a";
    }
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
    let pec_true  = pec ? "x" : " ";
    let pec_false = pec ? " " : "x";
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
    final = `🛏 ATUALIZAÇÃO - MÉDICOS DA PORTA 🩺
Médico: {{assistant}}
Paciente: {{patient}}
Solicitação:
- ({{type_lay}}) Repouso no leito
- ({{type_inpatient}}) Internação
Elegível para Transferência Externa:
- ({{external_true}}) Sim
- ({{external_false}}) Não{{external_why}}
Elegível para PEC:
- ({{pec_true}}) Sim
- ({{pec_false}}) Não
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
      .replaceAll("{{type_lay}}", type_lay)
      .replaceAll("{{type_inpatient}}", type_inpatient)
      .replaceAll("{{external_true}}", external_true)
      .replaceAll("{{external_false}}", external_false)
      .replaceAll("{{external_why}}", external_why)
      .replaceAll("{{pec_true}}", pec_true)
      .replaceAll("{{pec_false}}", pec_false)
      .replaceAll("{{dx}}", dx)
      .replaceAll("{{priority_high}}", priority_high)
      .replaceAll("{{priority_mid}}", priority_mid)
      .replaceAll("{{priority_low}}", priority_low)
      .replaceAll("{{notes}}", notes)
      .replaceAll("{{datetime}}", datetime);
    // Set output field to parsed string
    $("#output-o").val(final);
  });
});

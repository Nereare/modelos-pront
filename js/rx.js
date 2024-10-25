$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function() {
    if ( $(this).is(":checked") ) {
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

  // Select report type
  $(".report-type").on("click", function() {
    // Hide all specific boxes
    $(".technique-box, .eval-box").addClass("is-hidden")
    $(".report-type").parent().removeClass("is-active");
    $("#side").val("");
    // Get what boxes to show and if laterality applies
    let report = $(this).data("type");
    $("#type").val(report);
    // Show target boxes
    $("#technique-box-" + report + ", #eval-box-" + report).removeClass("is-hidden");
    $(this).parent().addClass("is-active");
  });
  $("#report-default").trigger("click");

  // Change date type
  $("#date-type").on("change", function() {
    if ($(this).val() == "foo") {
      $("#date")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#date")
        .attr("disabled", true)
        .val("");
    }
  });
  // Clear exame date
  $("#date-clear").on("click", function() {
    $("#date").val("");
  });

  /************************************************/
  /*                    Thorax                    */
  /************************************************/
  // Heart
  // > Enable/Disable heart proportion
  $("#heart-area").on("change", function() {
    if ( $(this).val() == "dentro dos limites da normalidade" ) {
      $("#heart-width, #heart-hemithorax-width, #heart-ratio")
        .val("")
        .prop("disabled", true);
    } else {
      $("#heart-width, #heart-hemithorax-width, #heart-ratio")
        .prop("disabled", false);
      $("#heart-width").trigger("focus");
    }
  });
  // > Calculate heart area ratio
  $("#heart-width, #heart-hemithorax-width").on("change input", function() {
    if ( $("#heart-width").val() != "" && $("#heart-hemithorax-width").val() ) {
      let heart = parseInt( $("#heart-width").val() );
      let hemithorax = parseInt( $("#heart-hemithorax-width").val() );
      let ratio = heart * 100 /  hemithorax;
      $("#heart-ratio").val( ratio.toFixed(1) + "%" );
    } else {
      $("#heart-ratio").val( "" );
    }
  });
  // Lungs
  // > Enable/Disable hilum infiltration focus
  $("#lung-hilum").on("change", function() {
    if ( $(this).val() == "normal" ) {
      $("#lung-hilum-sides")
        .val("bilateral e simetricamente")
        .prop("disabled", true);
      $("#lung-hilum-hyper")
        .val("sem predomínios")
        .prop("disabled", true);
    } else {
      $("#lung-hilum-sides, #lung-hilum-hyper")
        .prop("disabled", false);
    }
  });
  // > Enable/Disable lung pneumonia foci descriptors
  $("#lung-pneumonia").on("change", function() {
    if ( $(this).val() != "" ) {
      $("#lung-pneumonia-desc").removeClass("is-hidden");
    } else {
      $("#lung-pneumonia-desc").addClass("is-hidden");
      $("#lung-pneumonia-right-top, #lung-pneumonia-right-middle, #lung-pneumonia-right-bottom, #lung-pneumonia-left-top, #lung-pneumonia-left-retrocardiac, #lung-pneumonia-left-bottom")
        .prop("checked", false)
        .trigger("change");
      $("#lung-pneumonia-right-top-size, #lung-pneumonia-right-middle-size, #lung-pneumonia-right-bottom-size, #lung-pneumonia-left-top-size, #lung-pneumonia-left-retrocardiac-size, #lung-pneumonia-left-bottom-size")
        .val("");
    }
  });
  // > Enable/Disable effusion descriptors
  $("#lung-effusion").on("change", function() {
    if ( $(this).val() == "livres bilateralmente" ) {
      $("#lung-effusion-right, #lung-effusion-left")
        .prop("disabled", true)
        .val("");
    } else if ( $(this).val() == "com derrame pleural à direita" ) {
      $("#lung-effusion-left")
        .prop("disabled", true)
        .val("");
      $("#lung-effusion-right").prop("disabled", false);
    } else if ( $(this).val() == "com derrame pleural à esquerda" ) {
      $("#lung-effusion-right")
        .prop("disabled", true)
        .val("");
      $("#lung-effusion-left").prop("disabled", false);
    } else {
      $("#lung-effusion-right, #lung-effusion-left")
        .prop("disabled", false);
    }
  });
  // > Enable/Disable pleura abnormality description
  $("#lung-pleura").on("change", function() {
    if ( $(this).val() == "não observável" ) {
      $("#lung-pleura-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#lung-pleura-desc").prop("disabled", false);
    }
  });
  // Abdomen
  // > Enable/Disable stomach description
  $("#abdome-stomach").on("change", function() {
    if ( $(this).val() == "presente" ) {
      $("#abdome-stomach-side").val( " em situs solitus" );
    } else {
      $("#abdome-stomach-side").val("");
    }
  });
  // Soft Tissue
  // > Enable/Disable clavicules description
  $("#soft-clavicules").on("change", function() {
    if ( $(this).val() == "sem alterações observáveis" ) {
      $("#soft-clavicules-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-clavicules-desc").prop("disabled", false);
    }
  });
  // > Enable/Disable ribs description
  $("#soft-ribs").on("change", function() {
    if ( $(this).val() == "sem alterações observáveis" ) {
      $("#soft-ribs-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-ribs-desc").prop("disabled", false);
    }
  });
  // > Enable/Disable subcutaneous emphisema description
  $("#soft-emphisema").on("change", function() {
    if ( $(this).val() == "ausente" ) {
      $("#soft-emphisema-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-emphisema-desc").prop("disabled", false);
    }
  });

  /************************************************/
  /*                    Columns                   */
  /************************************************/
  // Meyerding Classification
  $("#meyerding-1-a, #meyerding-1-b, #meyerding-2-a, #meyerding-2-b, #meyerding-3-a, #meyerding-3-b, #meyerding-4-a, #meyerding-4-b, #meyerding-5-a, #meyerding-5-b, #meyerding-6-a, #meyerding-6-b, #meyerding-7-a, #meyerding-7-b, #meyerding-8-a, #meyerding-8-b").on("input change", function() {
    let n = [...$(this).attr("id").matchAll(/meyerding-(\d)-[ab]/g)][0][1];
    let a = parseFloat($("#meyerding-" + n + "-a").val());
    let b = parseFloat($("#meyerding-" + n + "-b").val());
    if (!isNaN(a) && !isNaN(b)) {
      let res = a/b;
      $("#meyerding-" + n + "-res").val((res*100).toFixed(1) + "%");
      let grade = "";
      if (res <= 0.25) { grade = "I"; }
      else if (res <= 0.5) { grade = "II"; }
      else if (res <= 0.75) { grade = "III"; }
      else if (res <= 1.0) { grade = "IV"; }
      else { grade = "V"; }
      $("#meyerding-" + n + "-grade").val(grade);
    } else {
      $("#meyerding-" + n + "-res").val("");
      $("#meyerding-" + n + "-grade").val("");
    }
  });
  // Cervical
  // > Scoliosis
  $("#column-cervical-scoliosis").on("change", function() {
    $("#column-cervical-scoliosis-angle, #column-cervical-scoliosis-side")
      .attr("disabled", true);
    $("#column-cervical-scoliosis-angle").val("");
    $("#column-cervical-scoliosis-side").val("esquerda");
    if ($(this).val() != "ok") {
      $("#column-cervical-scoliosis-side")
        .attr("disabled", false);
    }
    if ($(this).val() == "shat") {
      $("#column-cervical-scoliosis-angle")
        .attr("disabled", false);
    }
  });
  // > Listhesis & Fractures & Lesions
  $("#column-cervical-listhesis-sagital, #column-cervical-listhesis-lateral, #column-cervical-fx, #column-cervical-lesion").on("change", function() {
    let target = $(this).data("target");
    // Hide taget container
    if (!$("#" + target).hasClass("is-hidden")) {
      $("#" + target).addClass("is-hidden");
    }
    // Show if applicable
    if ($(this).val() != "ok") {
      $("#" + target).removeClass("is-hidden");
    }
  });
  // > Ostheophites & DDD
  $("#column-cervical-ostheophites, #column-cervical-ddd").on("change", function() {
    if ($(this).val() == "meh") {
      $("#" + $(this).data("target")).removeClass("is-hidden");
    } else {
      $("#" + $(this).data("target")).addClass("is-hidden");
    }
  });
  // Thoraccic
  // > Scoliosis
  $("#column-thorax-scoliosis").on("change", function() {
    $("#column-thorax-scoliosis-angle, #column-thorax-scoliosis-side")
      .attr("disabled", true);
    $("#column-thorax-scoliosis-angle").val("");
    $("#column-thorax-scoliosis-side").val("esquerda");
    if ($(this).val() != "ok") {
      $("#column-thorax-scoliosis-side")
        .attr("disabled", false);
    }
    if ($(this).val() == "shat") {
      $("#column-thorax-scoliosis-angle")
        .attr("disabled", false);
    }
  });
  // > Listhesis & Fractures & Lesions
  $("#column-thorax-listhesis-sagital, #column-thorax-listhesis-lateral, #column-thorax-fx, #column-thorax-lesion").on("change", function() {
    let target = $(this).data("target");
    // Hide taget container
    if (!$("#" + target).hasClass("is-hidden")) {
      $("#" + target).addClass("is-hidden");
    }
    // Show if applicable
    if ($(this).val() != "ok") {
      $("#" + target).removeClass("is-hidden");
    }
  });
  // > Ostheophites & DDD
  $("#column-thorax-ostheophites, #column-thorax-ddd").on("change", function() {
    if ($(this).val() == "meh") {
      $("#" + $(this).data("target")).removeClass("is-hidden");
    } else {
      $("#" + $(this).data("target")).addClass("is-hidden");
    }
  });
  // Lumbar
  // > Scoliosis
  $("#column-lumbar-scoliosis").on("change", function() {
    $("#column-lumbar-scoliosis-angle, #column-lumbar-scoliosis-side")
      .attr("disabled", true);
    $("#column-lumbar-scoliosis-angle").val("");
    $("#column-lumbar-scoliosis-side").val("esquerda");
    if ($(this).val() != "ok") {
      $("#column-lumbar-scoliosis-side")
        .attr("disabled", false);
    }
    if ($(this).val() == "shat") {
      $("#column-lumbar-scoliosis-angle")
        .attr("disabled", false);
    }
  });
  // > Listhesis & Fractures & Lesions
  $("#column-lumbar-listhesis-sagital, #column-lumbar-listhesis-lateral, #column-lumbar-fx, #column-lumbar-lesion").on("change", function() {
    let target = $(this).data("target");
    // Hide taget container
    if (!$("#" + target).hasClass("is-hidden")) {
      $("#" + target).addClass("is-hidden");
    }
    // Show if applicable
    if ($(this).val() != "ok") {
      $("#" + target).removeClass("is-hidden");
    }
  });
  // > Ostheophites & DDD
  $("#column-lumbar-ostheophites, #column-lumbar-ddd").on("change", function() {
    if ($(this).val() == "meh") {
      $("#" + $(this).data("target")).removeClass("is-hidden");
    } else {
      $("#" + $(this).data("target")).addClass("is-hidden");
    }
  });

  /************************************************/
  /*                   All Types                  */
  /************************************************/
  // Add miscellaneous description field & button method
  $("#misc-add").on("click", function() {
    let uuid = uuidPoor();
    let description_input = $("<input>")
      .addClass("input misc-desc")
      .attr("type", "text")
      .attr("placeholder", "descrição aqui...");
    let description_control = $("<div>")
      .addClass("control is-expanded")
      .append( description_input );
    let delete_i = $("<i>")
      .addClass("mdi mdi-delete mdi-18px");
    let delete_span = $("<span>")
      .addClass("icon")
      .append( delete_i );
    let delete_button = $("<button>")
      .addClass("button is-danger")
      .append( delete_span )
      .on("click", function() {
        $("#" + uuid).remove();
      });
    let delete_control = $("<div>")
      .addClass("control")
      .append( delete_button );
    let field = $("<div>")
      .addClass("field has-addons")
      .attr("id", uuid)
      .append( description_control )
      .append( delete_control );
    $("#misc-container").append( field );
  }).trigger("click");

  /************************************************/
  /*                    Output                    */
  /************************************************/
  // Generate output
  $("#button-run").on("click", function() {
    let output = [];
    // Parse header
    let type = $("#type").val();
    let header = "# Rx ";
    switch (type) {
      case "sinuses":
        header += "Seios da Face";
        break;
      case "column":
        header += "Coluna";
        break;
      default:
        header += "Tórax";
        break;
    }
    // Parse date
    let date = "";
    let date_options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    if ( $("#date").val() == "foo" ) {
      date = new Date( $("#date").val() + "T00:00:00-03:00" );
      date = " (" + date.toLocaleString("pt-BR", date_options) + ")";
    } else if ( $("#date").val() == "ontem" ) {
      date = " (ontem)";
    }
    // Parse contents
    if (type == "sinuses") {
      output.push(header + date + ":");
      output.push("- Exame sem relevância no diagnóstico de rinites ou sinusites agudas (Teufert KB, Aita FS, Pignatari SSN. Sinusite, Rinite e Doenças Sistêmicas. Revista Brasileira de Otorrinolaringologia [Internet]. 1998 [citado 22 de outubro de 2024];64(4):5–26. Disponível em: https://aborlccf.org.br/wp-content/uploads/2022/09/TemasAtualizacaoRinologia4.pdf).");
    } else {
      output.push(header + date + ":");
      output.push(build_technique(type));
      output.push(build_eval(type));
    }
    // Set output contents
    $("#output").val( output.join("\n") );
  });
});

function build_technique(type) {
  let r = "- Técnica ";
  // Initialize parameters
  let params = [];

  // Parse common parameters
  if ($("#adequability-exposure").val() != "ok") { params.push($("#adequability-exposure").data("wrong")); }
  if ($("#adequability-technique").val() != "ok") { params.push($("#adequability-technique").data("wrong")); }
  if ($("#adequability-orthogonal").val() != "ok") { params.push($("#adequability-orthogonal").data("wrong")); }
  // Parse specific parameters
  $(".adequability-technique." + type).each(function() {
    if ($(this).val() != "ok") {
      params.push($(this).data("wrong"));
    }
  });

  // Parse quality
  if (params.length > 3) {
    r += "péssima";
  } else if (params.length > 0) {
    r += "sub-ótima";
  } else {
    r += "adequada";
  }
  // Parse collaboration
  let collab = ($("#adequability-collaboration").val() == "ok");
  if (collab && params.length > 0) {
    r += " (a despeito de paciente colaborativo)";
  } else if (params.length > 0) {
    r += " (talvez associado à falta de colaboração)";
  }
  // Concatenate full technique
  if (params.length > 0) { r += ":\n" + "  - " + params.join(";\n  - ") + ";"; }
  else { r += ";"; }

  // Return built technique evaluation
  return r;
}
function build_eval(type) {
  // Initialize return
  let r = null;

  // Parse specific evaluations
  switch (type) {
    case "column":
      r = build_eval_column();
      break;
    default:
      r = build_eval_thorax();
      break;
  }
  // Parse miscellaneous evaluations
  let misc = [];
  $(".misc-desc").each(function () {
    if ($(this).val().trim() != "") {
      misc.push("  - " + $(this).val().trim());
    }
  });
  r.concat(misc);
  // Add evasive missive
  r.push("  - Sem mais alterações dignas de nota");

  // Return built evaluation
  return "- Avaliação:\n" + r.join(";\n").replaceAll(":;", ":") + ".";
}
function build_eval_thorax() {
  let res = [];

  // Check heart area
  if (
    $("#heart-area").val() != "dentro dos limites da normalidade" &&
    $("#heart-width").val() != "" &&
    $("#heart-hemithorax-width").val() != ""
  ) {
    let heart_area = parseInt( $("#heart-width").val() );
    let hemith = parseInt( $("#heart-hemithorax-width").val() );
    let ratio = heart_area * 100 / hemith;
    ratio = ratio.toFixed(1) + "%";
    res.push(
      "  - Área cardíaca " +
      $("#heart-area").val() +
      " (~" +
      heart_area +
      "mm, ou ~" +
      ratio +
      " de hemitórax)"
    );
  } else {
    res.push("  - Área cardíaca " + $("#heart-area").val());
  }
  // Check heart position
  if ($("#heart-side").val() != "normal") {
    res.push("  - " + $("#heart-side").val());
  }

  // Check aortic shadow
  res.push("  - Botão aórtico " + $("#mediastinum-aorta").val() + $("#mediastinum-aorta-calcium").val());
  // Check pulmonary shadow
  if ($("#mediastinum-pulmonary").val() != "normal") {
    res.push("  - Botão pulmonar " + $("#mediastinum-pulmonary").val());
  }
  // Check thymus
  if ( $("#mediastinum-thymus").val() ) {
    res.push("  - " + $("#mediastinum-thymus").val());
  }
  // Check carina
  res.push("  - Carina " + $("#mediastinum-carina").val());

  // Check pulmonary hilum
  if ($("#lung-hilum").val() == "normal") {
    res.push("  - Hilos pulmonares com atenuação habitual");
  } else {
    res.push("  - Hilos pulmonares " + $("#lung-hilum").val() + " " + $("#lung-hilum-sides").val() + ", " + $("#lung-hilum-hyper").val());
  }
  // Check pulmonary shadow
  if ( $("#lung-pneumonia").val() == "" ) {
    res.push( "  - Campos pulmonares sem nódulos, massas, cavitações, ou consolidações detectáveis ao método" );
  } else {
    let foci = [];
    // Parse each focus site}
    // > Right Top Lobe
    if ($("#lung-pneumonia-right-top").is(":checked")) {
      if ($("#lung-pneumonia-right-top-size").val() != "") {
        let size = $("#lung-pneumonia-right-top-size").val();
        if (size == "") {
          foci.push("lobo superior direito <05mm");
        } else {
          foci.push("lobo superior direito de ~" + size + "mm");
        }
      } else { foci.push("lobo superior direito"); }
    }
    // > Right Middle Lobe
    if ($("#lung-pneumonia-right-middle").is(":checked")) {
      if ($("#lung-pneumonia-right-middle-size").val() != "") {
        let size = $("#lung-pneumonia-right-middle-size").val();
        if (size == "") {
          foci.push("lobo médio direito <05mm");
        } else {
          foci.push("lobo médio direito de ~" + size + "mm");
        }
      } else { foci.push("lobo médio direito"); }
    }
    // > Right Bottom Lobe
    if ($("#lung-pneumonia-right-bottom").is(":checked")) {
      if ($("#lung-pneumonia-right-bottom-size").val() != "") {
        let size = $("#lung-pneumonia-right-bottom-size").val();
        if (size == "") {
          foci.push("lobo inferior direito <05mm");
        } else {
          foci.push("lobo inferior direito de ~" + size + "mm");
        }
      } else { foci.push("lobo inferior direito"); }
    }
    // > Left Top Lobe
    if ($("#lung-pneumonia-left-top").is(":checked")) {
      if ($("#lung-pneumonia-left-top-size").val() != "") {
        let size = $("#lung-pneumonia-left-top-size").val();
        if (size == "") {
          foci.push("lobo superior esquerdo <05mm");
        } else {
          foci.push("lobo superior esquerdo de ~" + size + "mm");
        }
      } else { foci.push("lobo superior esquerdo"); }
    }
    // > Retrocardiac Lobe
    if ($("#lung-pneumonia-left-retrocardiac").is(":checked")) {
      if ($("#lung-pneumonia-left-retrocardiac-size").val() != "") {
        let size = $("#lung-pneumonia-left-retrocardiac-size").val();
        if (size == "") {
          foci.push("lobo inferior esquerdo na região retrocardíaca <05mm");
        } else {
          foci.push("lobo inferior esquerdo na região retrocardíaca de ~" + size + "mm");
        }
      } else { foci.push("lobo inferior esquerdo na região retrocardíaca"); }
    }
    // > Left Bottom Lobe
    if ($("#lung-pneumonia-left-bottom").is(":checked")) {
      if ($("#lung-pneumonia-left-bottom-size").val() != "") {
        let size = $("#lung-pneumonia-left-bottom-size").val();
        if (size == "") {
          foci.push("lobo inferior esquerdo <05mm");
        } else {
          foci.push("lobo inferior esquerdo de ~" + size + "mm");
        }
      } else { foci.push("lobo inferior esquerdo"); }
    }
    // Parse foci
    let finding = $("#lung-pneumonia").val().split("|");
    if (foci.length > 0) {
      res.push(
        "  - Campos pulmonares com " +
        (foci.length > 1 ? finding[1] : finding[0]) +
        " observáv" + (foci.length > 1 ? "eis" : "el") +
        " no" + (foci.length > 1 ? "s" : "") +
        humanList( foci )
      );
    } else {
      res.push("  - Campos pulmonares com " + finding[1] + " QUE EU ESQUECI DE DESCREVER");
    }
  }
  // Check pleural effusion
  if ($("#lung-effusion").val() == "normal") {
    res.push( "  - Seios costofrênicos livres bilateralmente");
  } else {
    let txt = "  - Seios costofrênicos " + $("#lung-effusion").val();
    let size = "";
    if ($("#lung-effusion").val().includes("bilateralmente")) {
      size = [];
      // Left
      size["left"] = parseInt($("#lung-effusion-left").val());
      if (isNaN(size["left"])) { size["left"] = "mínimo"; }
      else { size["left"] = "de ~" + size["left"] + "mm"; }
      // Right
      size["right"] = parseInt($("#lung-effusion-right").val());
      if (isNaN(size["right"])) { size["right"] = "mínimo"; }
      else { size["right"] = "de ~" + size["right"] + "mm"; }
      // Compile
      if (size["left"] == size["right"]) {
        size = size["left"];
      } else {
        size["right"] += " à direita";
        size["left"] += " à esquerda";
        size = size["right"] + " e " + size["left"];
      }
    } else if ($("#lung-effusion").val().includes("esquerda")) {
      size = parseInt($("#lung-effusion-left").val());
      if (isNaN(size)) { size = "mínimo"; }
      else { size = "de ~" + size + "mm"; }
    } else if ($("#lung-effusion").val().includes("direita")) {
      size = parseInt($("#lung-effusion-right").val());
      if (isNaN(size)) { size = "mínimo"; }
      else { size = "de ~" + size + "mm"; }
    }
    // If size text is not null, concatenate it
    if (size != "") { txt += " " + size; }
    // Push it
    res.push(txt);
  }
  // Check diaphragm
  if ($("#lung-diaphragm").val() != "") {
    res.push( "  - Cúpulas diafragmáticas " + $("#lung-diaphragm").val() );
  }
  // Check pleuras
  if ($("#lung-pleura").val() != "" && $("#lung-pleura-desc").val() != "") {
    res.push("  - Pleuras com " + $("#lung-pleura-desc").val());
  }

  // Check stomach
  if ($("#abdome-stomach").val() != "") {
    res.push("  - Bolha gástrica " + $("#abdome-stomach").val() + $("#abdome-stomach-side").val());
  }
  // Check liver
  if ($("#abdome-liver").val() != "") {
    res.push("  - Silhueta hepática COM PNEUMOPERITÔNIO (gás observável entre silhueta e cúpula diafragmática)");
  }

  // Check soft tissue parameters
  if ( $("#soft-clavicules").val() != "" && $("#soft-clavicules-desc").val() != "" ) {
    res.push( "  - Clavículas com " + $("#soft-clavicules-desc").val() );
  }
  if ( $("#soft-ribs").val() != "" && $("#soft-ribs-desc").val() != "" ) {
    res.push( "  - Arcos costais com " + $("#soft-ribs-desc").val() );
  }
  if ( $("#soft-emphisema").val() != "" && $("#soft-emphisema-desc").val() != "" ) {
    res.push( "  - Enfisema subcutâneo PRESENTE em " + $("#soft-emphisema-desc").val() );
  }

  // Return evaluation array
  return res;
}
function build_eval_column() {
  let res = [];

  // Cervical Column
  if ($("#column-cervical").is(":checked")) {
    // Add cervical subheader
    res.push("  - Cervical:");
    // Check scoliosis
    let scoliosis = "";
    if ($("#column-cervical-scoliosis").val() == "ok") {
      scoliosis = "    - Ausência de escoliose detectável ao método";
    } else if ($("#column-cervical-scoliosis").val() == "meh") {
      scoliosis = "    - Escoliose mínima à ";
    } else {
      scoliosis = "    - Escoliose de ~" + $("#column-cervical-scoliosis-angle").val() + "° à ";
    }
    if ($("#column-cervical-scoliosis").val() != "ok") {
      scoliosis += $("#column-cervical-scoliosis-side").val();
    }
    res.push(scoliosis);
    // Check dorso/anterolisthesis
    let listhesis = [];
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c1").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c1-direction").val() +
          $("#column-cervical-listhesis-sagital-c1-grade").val() +
          " de C1"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c2").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c2-direction").val() +
          $("#column-cervical-listhesis-sagital-c2-grade").val() +
          " de C2"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c3").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c3-direction").val() +
          $("#column-cervical-listhesis-sagital-c3-grade").val() +
          " de C3"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c4").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c4-direction").val() +
          $("#column-cervical-listhesis-sagital-c4-grade").val() +
          " de C4"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c5").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c5-direction").val() +
          $("#column-cervical-listhesis-sagital-c5-grade").val() +
          " de C5"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c6").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c6-direction").val() +
          $("#column-cervical-listhesis-sagital-c6-grade").val() +
          " de C6"
        );
      }
    }
    if ($("#column-cervical-listhesis-sagital").val() != "ok") {
      if ($("#column-cervical-listhesis-sagital-c7").is(":checked")) {
        listhesis.push(
          $("#column-cervical-listhesis-sagital-c7-direction").val() +
          $("#column-cervical-listhesis-sagital-c7-grade").val() +
          " de C7"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check laterolisthesis
    listhesis = [];
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c1").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c1-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c1-direction").val() +
          " de C1"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c2").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c2-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c2-direction").val() +
          " de C2"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c3").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c3-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c3-direction").val() +
          " de C3"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c4").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c4-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c4-direction").val() +
          " de C4"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c5").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c5-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c5-direction").val() +
          " de C5"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c6").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c6-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c6-direction").val() +
          " de C6"
        );
      }
    }
    if ($("#column-cervical-listhesis-lateral").val() != "ok") {
      if ($("#column-cervical-listhesis-lateral-c7").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-cervical-listhesis-lateral-c7-grade").val() +
          "à " +
          $("#column-cervical-listhesis-lateral-c7-direction").val() +
          " de C7"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check ostheophites
    let cerv_ostheophites = $("#column-cervical-ostheophites").val();
    if (cerv_ostheophites == "ok") {
      // None
      res.push("    - Ausência de osteófitos marginais detectáveis ao método");
    } else if (cerv_ostheophites == "shat") {
      // Everywhere
      res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
    } else {
      // Some, parse which:
      cerv_ostheophites = [];
      // > C1
      if ($("#column-cervical-ostheophites-c1").is(":checked")) {
        cerv_ostheophites.push("C1");
      }
      // > C2
      if ($("#column-cervical-ostheophites-c2").is(":checked")) {
        cerv_ostheophites.push("C2");
      }
      // > C3
      if ($("#column-cervical-ostheophites-c3").is(":checked")) {
        cerv_ostheophites.push("C3");
      }
      // > C4
      if ($("#column-cervical-ostheophites-c4").is(":checked")) {
        cerv_ostheophites.push("C4");
      }
      // > C5
      if ($("#column-cervical-ostheophites-c5").is(":checked")) {
        cerv_ostheophites.push("C5");
      }
      // > C6
      if ($("#column-cervical-ostheophites-c6").is(":checked")) {
        cerv_ostheophites.push("C6");
      }
      // > C7
      if ($("#column-cervical-ostheophites-c7").is(":checked")) {
        cerv_ostheophites.push("C7");
      }
      // Return which
      if (cerv_ostheophites.length > 4) {
        res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
      } else if (cerv_ostheophites.length > 0) {
        res.push("    - Presença de osteófitos marginais observáveis em corpos vertebrais de " + humanList(cerv_ostheophites));
      } else {
        res.push("    - Ausência de osteófitos marginais detectáveis ao método");
      }
    }
    // Check Degenerative Disc Disease (DDD)
    let cerv_ddd = $("#column-cervical-ddd").val();
    if (cerv_ddd == "ok") {
      // None
      res.push("    - Ausência de reduções detectáveis ao método de alturas de espaços intervertebrais");
    } else if (cerv_ddd == "shat") {
      // Everywhere
      res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
    } else {
      // Some, parse which:
      cerv_ddd = [];
      // > C1-C2
      if ($("#column-cervical-ddd-c1c2").is(":checked")) {
        cerv_ddd.push("C1-C2");
      }
      // > C2-C3
      if ($("#column-cervical-ddd-c2c3").is(":checked")) {
        cerv_ddd.push("C2-C3");
      }
      // > C3-C4
      if ($("#column-cervical-ddd-c3c4").is(":checked")) {
        cerv_ddd.push("C3-C4");
      }
      // > C4-C5
      if ($("#column-cervical-ddd-c4c5").is(":checked")) {
        cerv_ddd.push("C4-C5");
      }
      // > C5-C6
      if ($("#column-cervical-ddd-c5c6").is(":checked")) {
        cerv_ddd.push("C5-C6");
      }
      // > C6-C7
      if ($("#column-cervical-ddd-c6c7").is(":checked")) {
        cerv_ddd.push("C6-C7");
      }
      // Return which
      if (cerv_ddd.length > 4) {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      } else if (cerv_ddd.length > 0) {
        res.push("    - Reduç" + (cerv_ddd.length > 1 ? "ões de espaços intervertebrais" : "ão de espaço intervertebral") + " de " + humanList(cerv_ddd));
      } else {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      }
    }
    // Check fragility fractures
    let fx = [];
    if ($("#column-cervical-fx").val() != "ok") {
      if ($("#column-cervical-fx-c1").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c1-location").val() +
          $("#column-cervical-fx-c1-time").val() +
          $("#column-cervical-fx-c1-linebreak").val() +
          " de C1"
        );
      }
      if ($("#column-cervical-fx-c2").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c2-location").val() +
          $("#column-cervical-fx-c2-time").val() +
          $("#column-cervical-fx-c2-linebreak").val() +
          " de C2"
        );
      }
      if ($("#column-cervical-fx-c3").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c3-location").val() +
          $("#column-cervical-fx-c3-time").val() +
          $("#column-cervical-fx-c3-linebreak").val() +
          " de C3"
        );
      }
      if ($("#column-cervical-fx-c4").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c4-location").val() +
          $("#column-cervical-fx-c4-time").val() +
          $("#column-cervical-fx-c4-linebreak").val() +
          " de C4"
        );
      }
      if ($("#column-cervical-fx-c5").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c5-location").val() +
          $("#column-cervical-fx-c5-time").val() +
          $("#column-cervical-fx-c5-linebreak").val() +
          " de C5"
        );
      }
      if ($("#column-cervical-fx-c6").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c6-location").val() +
          $("#column-cervical-fx-c6-time").val() +
          $("#column-cervical-fx-c6-linebreak").val() +
          " de C6"
        );
      }
      if ($("#column-cervical-fx-c7").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-cervical-fx-c7-location").val() +
          $("#column-cervical-fx-c7-time").val() +
          $("#column-cervical-fx-c7-linebreak").val() +
          " de C7"
        );
      }
    }
    if (fx.length > 0) {
      res.push("    - Presença de fratura" + (fx.length > 1 ? "s" : "") + " de fragilidade de " + (fx.length > 1 ? "corpos vertebrais" : "corpo vertebral") + ": " + humanList(fx));
    } else {
      res.push("    - Ausência de sinais claros de fraturas de fragilidade de corpos vertebrais detectáveis ao método");
    }
    // Check lesions
    let lesion = [];
    if ($("#column-cervical-lesion").val() != "ok") {
      // > C1
      if ($("#column-cervical-lesion-c1").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c1-qtt").val() +
          " " +
          $("#column-cervical-lesion-c1-type").val() +
          ($("#column-cervical-lesion-c1-qtt").val() != "lesão única" ? "s" : "") +
          " em C1"
        );
      }
      // > C2
      if ($("#column-cervical-lesion-c2").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c2-qtt").val() +
          " " +
          $("#column-cervical-lesion-c2-type").val() +
          ($("#column-cervical-lesion-c2-qtt").val() != "lesão única" ? "s" : "") +
          " em C2"
        );
      }
      // > C3
      if ($("#column-cervical-lesion-c3").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c3-qtt").val() +
          " " +
          $("#column-cervical-lesion-c3-type").val() +
          ($("#column-cervical-lesion-c3-qtt").val() != "lesão única" ? "s" : "") +
          " em C3"
        );
      }
      // > C4
      if ($("#column-cervical-lesion-c4").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c4-qtt").val() +
          " " +
          $("#column-cervical-lesion-c4-type").val() +
          ($("#column-cervical-lesion-c4-qtt").val() != "lesão única" ? "s" : "") +
          " em C4"
        );
      }
      // > C5
      if ($("#column-cervical-lesion-c5").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c5-qtt").val() +
          " " +
          $("#column-cervical-lesion-c5-type").val() +
          ($("#column-cervical-lesion-c5-qtt").val() != "lesão única" ? "s" : "") +
          " em C5"
        );
      }
      // > C6
      if ($("#column-cervical-lesion-c6").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c6-qtt").val() +
          " " +
          $("#column-cervical-lesion-c6-type").val() +
          ($("#column-cervical-lesion-c6-qtt").val() != "lesão única" ? "s" : "") +
          " em C6"
        );
      }
      // > C7
      if ($("#column-cervical-lesion-c7").is(":checked")) {
        lesion.push(
          $("#column-cervical-lesion-c7-qtt").val() +
          " " +
          $("#column-cervical-lesion-c7-type").val() +
          ($("#column-cervical-lesion-c7-qtt").val() != "lesão única" ? "s" : "") +
          " em C7"
        );
      }
    }
    if (lesion.length > 0) {
      res.push("    - Observa-se também " + humanList(lesion));
    }
  }

  // Thorax Column
  if ($("#column-thorax").is(":checked")) {
    // Add thorax subheader
    res.push("  - Torácica:");
    // Check scoliosis
    let scoliosis = "";
    if ($("#column-thorax-scoliosis").val() == "ok") {
      scoliosis = "    - Ausência de escoliose detectável ao método";
    } else if ($("#column-thorax-scoliosis").val() == "meh") {
      scoliosis = "    - Escoliose mínima à ";
    } else {
      scoliosis = "    - Escoliose de ~" + $("#column-thorax-scoliosis-angle").val() + "° à ";
    }
    if ($("#column-thorax-scoliosis").val() != "ok") {
      scoliosis += $("#column-thorax-scoliosis-side").val();
    }
    res.push(scoliosis);
    // Check retification
    if ($("#column-thorax-ciphosis").val() == "ok") {
      res.push("    - Cifose fisiológica de coluna torácica");
    } else {
      res.push("    - Observa-se " + $("#column-thorax-ciphosis").val() + " da coluna torácica");
    }
    // Check dorso/anterolisthesis
    let listhesis = [];
    if ($("#column-thorax-listhesis-sagital").val() != "ok") {
      if ($("#column-thorax-listhesis-sagital-t1").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t1-direction").val() +
          $("#column-thorax-listhesis-sagital-t1-grade").val() +
          " de T1"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t2").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t2-direction").val() +
          $("#column-thorax-listhesis-sagital-t2-grade").val() +
          " de T2"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t3").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t3-direction").val() +
          $("#column-thorax-listhesis-sagital-t3-grade").val() +
          " de T3"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t4").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t4-direction").val() +
          $("#column-thorax-listhesis-sagital-t4-grade").val() +
          " de T4"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t5").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t5-direction").val() +
          $("#column-thorax-listhesis-sagital-t5-grade").val() +
          " de T5"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t6").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t6-direction").val() +
          $("#column-thorax-listhesis-sagital-t6-grade").val() +
          " de T6"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t7").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t7-direction").val() +
          $("#column-thorax-listhesis-sagital-t7-grade").val() +
          " de T7"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t8").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t8-direction").val() +
          $("#column-thorax-listhesis-sagital-t8-grade").val() +
          " de T8"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t9").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t9-direction").val() +
          $("#column-thorax-listhesis-sagital-t9-grade").val() +
          " de T9"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t10").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t10-direction").val() +
          $("#column-thorax-listhesis-sagital-t10-grade").val() +
          " de T10"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t11").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t11-direction").val() +
          $("#column-thorax-listhesis-sagital-t11-grade").val() +
          " de T11"
        );
      }
      if ($("#column-thorax-listhesis-sagital-t12").is(":checked")) {
        listhesis.push(
          $("#column-thorax-listhesis-sagital-t12-direction").val() +
          $("#column-thorax-listhesis-sagital-t12-grade").val() +
          " de T12"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check laterolisthesis
    listhesis = [];
    if ($("#column-thorax-listhesis-lateral").val() != "ok") {
      // T1
      if ($("#column-thorax-listhesis-lateral-t1").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t1-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t1-direction").val() +
          " de T1"
        );
      }
      // T2
      if ($("#column-thorax-listhesis-lateral-t2").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t2-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t2-direction").val() +
          " de T2"
        );
      }
      // T3
      if ($("#column-thorax-listhesis-lateral-t3").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t3-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t3-direction").val() +
          " de T3"
        );
      }
      // T4
      if ($("#column-thorax-listhesis-lateral-t4").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t4-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t4-direction").val() +
          " de T4"
        );
      }
      // T5
      if ($("#column-thorax-listhesis-lateral-t5").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t5-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t5-direction").val() +
          " de T5"
        );
      }
      // T6
      if ($("#column-thorax-listhesis-lateral-t6").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t6-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t6-direction").val() +
          " de T6"
        );
      }
      // T7
      if ($("#column-thorax-listhesis-lateral-t7").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t7-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t7-direction").val() +
          " de T7"
        );
      }
      // T8
      if ($("#column-thorax-listhesis-lateral-t8").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t8-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t8-direction").val() +
          " de T8"
        );
      }
      // T9
      if ($("#column-thorax-listhesis-lateral-t9").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t9-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t9-direction").val() +
          " de T9"
        );
      }
      // T10
      if ($("#column-thorax-listhesis-lateral-t10").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t10-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t10-direction").val() +
          " de T10"
        );
      }
      // T11
      if ($("#column-thorax-listhesis-lateral-t11").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t11-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t11-direction").val() +
          " de T11"
        );
      }
      // T12
      if ($("#column-thorax-listhesis-lateral-t12").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-thorax-listhesis-lateral-t12-grade").val() +
          "à " +
          $("#column-thorax-listhesis-lateral-t12-direction").val() +
          " de T12"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check ostheophites
    let thorax_ostheophites = $("#column-thorax-ostheophites").val();
    if (thorax_ostheophites == "ok") {
      // None
      res.push("    - Ausência de osteófitos marginais detectáveis ao método");
    } else if (thorax_ostheophites == "shat") {
      // Everywhere
      res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
    } else {
      // Some, parse which:
      thorax_ostheophites = [];
      // > T1
      if ($("#column-thorax-ostheophites-t1").is(":checked")) {
        thorax_ostheophites.push("T1");
      }
      // > T2
      if ($("#column-thorax-ostheophites-t2").is(":checked")) {
        thorax_ostheophites.push("T2");
      }
      // > T3
      if ($("#column-thorax-ostheophites-t3").is(":checked")) {
        thorax_ostheophites.push("T3");
      }
      // > T4
      if ($("#column-thorax-ostheophites-t4").is(":checked")) {
        thorax_ostheophites.push("T4");
      }
      // > T5
      if ($("#column-thorax-ostheophites-t5").is(":checked")) {
        thorax_ostheophites.push("T5");
      }
      // > T6
      if ($("#column-thorax-ostheophites-t6").is(":checked")) {
        thorax_ostheophites.push("T6");
      }
      // > T7
      if ($("#column-thorax-ostheophites-t7").is(":checked")) {
        thorax_ostheophites.push("T7");
      }
      // > T8
      if ($("#column-thorax-ostheophites-t8").is(":checked")) {
        thorax_ostheophites.push("T8");
      }
      // > T9
      if ($("#column-thorax-ostheophites-t9").is(":checked")) {
        thorax_ostheophites.push("T9");
      }
      // > T10
      if ($("#column-thorax-ostheophites-t10").is(":checked")) {
        thorax_ostheophites.push("T10");
      }
      // > T11
      if ($("#column-thorax-ostheophites-t11").is(":checked")) {
        thorax_ostheophites.push("T11");
      }
      // > T12
      if ($("#column-thorax-ostheophites-t12").is(":checked")) {
        thorax_ostheophites.push("T12");
      }
      // Return which
      if (thorax_ostheophites.length > 8) {
        res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
      } else if (thorax_ostheophites.length > 0) {
        res.push("    - Presença de osteófitos marginais observáveis em corpos vertebrais de " + humanList(cerv_ostheophites));
      } else {
        res.push("    - Ausência de osteófitos marginais detectáveis ao método");
      }
    }
    // Check Degenerative Disc Disease (DDD)
    let thorax_ddd = $("#column-thorax-ddd").val();
    if (thorax_ddd == "ok") {
      // None
      res.push("    - Ausência de reduções detectáveis ao método de alturas de espaços intervertebrais");
    } else if (thorax_ddd == "shat") {
      // Everywhere
      res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
    } else {
      // Some, parse which:
      thorax_ddd = [];
      // > T1-T2
      if ($("#column-thorax-ddd-t1t2").is(":checked")) {
        thorax_ddd.push("T1-T2");
      }
      // > T2-T3
      if ($("#column-thorax-ddd-t2t3").is(":checked")) {
        thorax_ddd.push("T2-T3");
      }
      // > T3-T4
      if ($("#column-thorax-ddd-t3t4").is(":checked")) {
        thorax_ddd.push("T3-T4");
      }
      // > T4-T5
      if ($("#column-thorax-ddd-t4t5").is(":checked")) {
        thorax_ddd.push("T4-T5");
      }
      // > T5-T6
      if ($("#column-thorax-ddd-t5t6").is(":checked")) {
        thorax_ddd.push("T5-T6");
      }
      // > T6-T7
      if ($("#column-thorax-ddd-t6t7").is(":checked")) {
        thorax_ddd.push("T6-T7");
      }
      // > T7-T8
      if ($("#column-thorax-ddd-t7t8").is(":checked")) {
        thorax_ddd.push("T7-T8");
      }
      // > T8-T9
      if ($("#column-thorax-ddd-t8t9").is(":checked")) {
        thorax_ddd.push("T8-T9");
      }
      // > T9-T10
      if ($("#column-thorax-ddd-t9t10").is(":checked")) {
        thorax_ddd.push("T9-T10");
      }
      // > T10-T11
      if ($("#column-thorax-ddd-t10t11").is(":checked")) {
        thorax_ddd.push("T10-T11");
      }
      // > T11-T12
      if ($("#column-thorax-ddd-t11t12").is(":checked")) {
        thorax_ddd.push("T11-T12");
      }
      // > T12-T1
      if ($("#column-thorax-ddd-t12l1").is(":checked")) {
        thorax_ddd.push("T12-L1");
      }
      // Return which
      if (thorax_ddd.length > 4) {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      } else if (thorax_ddd.length > 0) {
        res.push("    - Reduç" + (thorax_ddd.length > 1 ? "ões de espaços intervertebrais" : "ão de espaço intervertebral") + " de " + humanList(cerv_ddd));
      } else {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      }
    }
    // Check fragility fractures
    let fx = [];
    if ($("#column-thorax-fx").val() != "ok") {
      // T1
      if ($("#column-thorax-fx-t1").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t1-location").val() +
          $("#column-thorax-fx-t1-time").val() +
          $("#column-thorax-fx-t1-linebreak").val() +
          " de T1"
        );
      }
      // T2
      if ($("#column-thorax-fx-t2").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t2-location").val() +
          $("#column-thorax-fx-t2-time").val() +
          $("#column-thorax-fx-t2-linebreak").val() +
          " de T2"
        );
      }
      // T3
      if ($("#column-thorax-fx-t3").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t3-location").val() +
          $("#column-thorax-fx-t3-time").val() +
          $("#column-thorax-fx-t3-linebreak").val() +
          " de T3"
        );
      }
      // T4
      if ($("#column-thorax-fx-t4").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t4-location").val() +
          $("#column-thorax-fx-t4-time").val() +
          $("#column-thorax-fx-t4-linebreak").val() +
          " de T4"
        );
      }
      // T5
      if ($("#column-thorax-fx-t5").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t5-location").val() +
          $("#column-thorax-fx-t5-time").val() +
          $("#column-thorax-fx-t5-linebreak").val() +
          " de T5"
        );
      }
      // T6
      if ($("#column-thorax-fx-t6").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t6-location").val() +
          $("#column-thorax-fx-t6-time").val() +
          $("#column-thorax-fx-t6-linebreak").val() +
          " de T6"
        );
      }
      // T7
      if ($("#column-thorax-fx-t7").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t7-location").val() +
          $("#column-thorax-fx-t7-time").val() +
          $("#column-thorax-fx-t7-linebreak").val() +
          " de T7"
        );
      }
      // T8
      if ($("#column-thorax-fx-t8").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t8-location").val() +
          $("#column-thorax-fx-t8-time").val() +
          $("#column-thorax-fx-t8-linebreak").val() +
          " de T8"
        );
      }
      // T9
      if ($("#column-thorax-fx-t9").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t9-location").val() +
          $("#column-thorax-fx-t9-time").val() +
          $("#column-thorax-fx-t9-linebreak").val() +
          " de T9"
        );
      }
      // T10
      if ($("#column-thorax-fx-t10").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t10-location").val() +
          $("#column-thorax-fx-t10-time").val() +
          $("#column-thorax-fx-t10-linebreak").val() +
          " de T10"
        );
      }
      // T11
      if ($("#column-thorax-fx-t11").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t11-location").val() +
          $("#column-thorax-fx-t11-time").val() +
          $("#column-thorax-fx-t11-linebreak").val() +
          " de T11"
        );
      }
      // T12
      if ($("#column-thorax-fx-t12").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-thorax-fx-t12-location").val() +
          $("#column-thorax-fx-t12-time").val() +
          $("#column-thorax-fx-t12-linebreak").val() +
          " de T12"
        );
      }
    }
    if (fx.length > 0) {
      res.push("    - Presença de fratura" + (fx.length > 1 ? "s" : "") + " de fragilidade de " + (fx.length > 1 ? "corpos vertebrais" : "corpo vertebral") + ": " + humanList(fx));
    } else {
      res.push("    - Ausência de sinais claros de fraturas de fragilidade de corpos vertebrais detectáveis ao método");
    }
    // Check lesions
    let lesion = [];
    if ($("#column-thorax-lesion").val() != "ok") {
      // > T1
      if ($("#column-thorax-lesion-t1").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t1-qtt").val() +
          " " +
          $("#column-thorax-lesion-t1-type").val() +
          ($("#column-thorax-lesion-t1-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T2
      if ($("#column-thorax-lesion-t2").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t2-qtt").val() +
          " " +
          $("#column-thorax-lesion-t2-type").val() +
          ($("#column-thorax-lesion-t2-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T3
      if ($("#column-thorax-lesion-t3").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t3-qtt").val() +
          " " +
          $("#column-thorax-lesion-t3-type").val() +
          ($("#column-thorax-lesion-t3-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T4
      if ($("#column-thorax-lesion-t4").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t4-qtt").val() +
          " " +
          $("#column-thorax-lesion-t4-type").val() +
          ($("#column-thorax-lesion-t4-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T5
      if ($("#column-thorax-lesion-t5").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t5-qtt").val() +
          " " +
          $("#column-thorax-lesion-t5-type").val() +
          ($("#column-thorax-lesion-t5-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T6
      if ($("#column-thorax-lesion-t6").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t6-qtt").val() +
          " " +
          $("#column-thorax-lesion-t6-type").val() +
          ($("#column-thorax-lesion-t6-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T7
      if ($("#column-thorax-lesion-t7").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t7-qtt").val() +
          " " +
          $("#column-thorax-lesion-t7-type").val() +
          ($("#column-thorax-lesion-t7-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T8
      if ($("#column-thorax-lesion-t8").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t8-qtt").val() +
          " " +
          $("#column-thorax-lesion-t8-type").val() +
          ($("#column-thorax-lesion-t8-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T9
      if ($("#column-thorax-lesion-t9").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t9-qtt").val() +
          " " +
          $("#column-thorax-lesion-t9-type").val() +
          ($("#column-thorax-lesion-t9-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T10
      if ($("#column-thorax-lesion-t10").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t10-qtt").val() +
          " " +
          $("#column-thorax-lesion-t10-type").val() +
          ($("#column-thorax-lesion-t10-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T11
      if ($("#column-thorax-lesion-t11").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t11-qtt").val() +
          " " +
          $("#column-thorax-lesion-t11-type").val() +
          ($("#column-thorax-lesion-t11-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
      // > T12
      if ($("#column-thorax-lesion-t12").is(":checked")) {
        lesion.push(
          $("#column-thorax-lesion-t12-qtt").val() +
          " " +
          $("#column-thorax-lesion-t12-type").val() +
          ($("#column-thorax-lesion-t12-qtt").val() != "lesão única" ? "s" : "") +
          " em T1"
        );
      }
    }
    if (lesion.length > 0) {
      res.push("    - Observa-se também " + humanList(lesion));
    }
  }

  // Lumbar Column
  if ($("#column-lumbar").is(":checked")) {
    // Add lumbar subheader
    res.push("  - Lombossacra:");
    // Check scoliosis
    let scoliosis = "";
    if ($("#column-lumbar-scoliosis").val() == "ok") {
      scoliosis = "    - Ausência de escoliose detectável ao método";
    } else if ($("#column-lumbar-scoliosis").val() == "meh") {
      scoliosis = "    - Escoliose mínima à ";
    } else {
      scoliosis = "    - Escoliose de ~" + $("#column-lumbar-scoliosis-angle").val() + "° à ";
    }
    if ($("#column-lumbar-scoliosis").val() != "ok") {
      scoliosis += $("#column-lumbar-scoliosis-side").val();
    }
    res.push(scoliosis);
    // Check retification
    if ($("#column-lumbar-ciphosis").val() == "ok") {
      res.push("    - Lordose fisiológica de coluna lombar");
    } else {
      res.push("    - Observa-se " + $("#column-lumbar-ciphosis").val() + " da coluna lombar");
    }
    // Check dorso/anterolisthesis
    let listhesis = [];
    if ($("#column-lumbar-listhesis-sagital").val() != "ok") {
      // L1
      if ($("#column-lumbar-listhesis-sagital-l1").is(":checked")) {
        listhesis.push(
          $("#column-lumbar-listhesis-sagital-l1-direction").val() +
          $("#column-lumbar-listhesis-sagital-l1-grade").val() +
          " de L1"
        );
      }
      // L2
      if ($("#column-lumbar-listhesis-sagital-l2").is(":checked")) {
        listhesis.push(
          $("#column-lumbar-listhesis-sagital-l2-direction").val() +
          $("#column-lumbar-listhesis-sagital-l2-grade").val() +
          " de L2"
        );
      }
      // L3
      if ($("#column-lumbar-listhesis-sagital-l3").is(":checked")) {
        listhesis.push(
          $("#column-lumbar-listhesis-sagital-l3-direction").val() +
          $("#column-lumbar-listhesis-sagital-l3-grade").val() +
          " de L3"
        );
      }
      // L4
      if ($("#column-lumbar-listhesis-sagital-l4").is(":checked")) {
        listhesis.push(
          $("#column-lumbar-listhesis-sagital-l4-direction").val() +
          $("#column-lumbar-listhesis-sagital-l4-grade").val() +
          " de L4"
        );
      }
      // L5
      if ($("#column-lumbar-listhesis-sagital-l5").is(":checked")) {
        listhesis.push(
          $("#column-lumbar-listhesis-sagital-l5-direction").val() +
          $("#column-lumbar-listhesis-sagital-l5-grade").val() +
          " de L5"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check laterolisthesis
    listhesis = [];
    if ($("#column-lumbar-listhesis-lateral").val() != "ok") {
      // L1
      if ($("#column-lumbar-listhesis-lateral-l1").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-lumbar-listhesis-lateral-l1-grade").val() +
          "à " +
          $("#column-lumbar-listhesis-lateral-l1-direction").val() +
          " de L1"
        );
      }
      // L2
      if ($("#column-lumbar-listhesis-lateral-l2").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-lumbar-listhesis-lateral-l2-grade").val() +
          "à " +
          $("#column-lumbar-listhesis-lateral-l2-direction").val() +
          " de L2"
        );
      }
      // L3
      if ($("#column-lumbar-listhesis-lateral-l3").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-lumbar-listhesis-lateral-l3-grade").val() +
          "à " +
          $("#column-lumbar-listhesis-lateral-l3-direction").val() +
          " de L3"
        );
      }
      // L4
      if ($("#column-lumbar-listhesis-lateral-l4").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-lumbar-listhesis-lateral-l4-grade").val() +
          "à " +
          $("#column-lumbar-listhesis-lateral-l4-direction").val() +
          " de L4"
        );
      }
      // L5
      if ($("#column-lumbar-listhesis-lateral-l5").is(":checked")) {
        listhesis.push(
          "laterolistese " +
          $("#column-lumbar-listhesis-lateral-l5-grade").val() +
          "à " +
          $("#column-lumbar-listhesis-lateral-l5-direction").val() +
          " de L5"
        );
      }
    }
    if (listhesis.length > 0) {
      res.push("    - Presença de " + humanList(listhesis));
    }
    // Check ostheophites
    let lumbar_ostheophites = $("#column-lumbar-ostheophites").val();
    if (lumbar_ostheophites == "ok") {
      // None
      res.push("    - Ausência de osteófitos marginais detectáveis ao método");
    } else if (lumbar_ostheophites == "shat") {
      // Everywhere
      res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
    } else {
      // Some, parse which:
      lumbar_ostheophites = [];
      // > L1
      if ($("#column-lumbar-ostheophites-l1").is(":checked")) {
        lumbar_ostheophites.push("L1");
      }
      // > L2
      if ($("#column-lumbar-ostheophites-l2").is(":checked")) {
        lumbar_ostheophites.push("L2");
      }
      // > L3
      if ($("#column-lumbar-ostheophites-l3").is(":checked")) {
        lumbar_ostheophites.push("L3");
      }
      // > L4
      if ($("#column-lumbar-ostheophites-l4").is(":checked")) {
        lumbar_ostheophites.push("L4");
      }
      // > L5
      if ($("#column-lumbar-ostheophites-l5").is(":checked")) {
        lumbar_ostheophites.push("L5");
      }
      // Return which
      if (lumbar_ostheophites.length > 3) {
        res.push("    - Osteófitos marginais ubíquos em corpos vertebrais");
      } else if (lumbar_ostheophites.length > 0) {
        res.push("    - Presença de osteófitos marginais observáveis em corpos vertebrais de " + humanList(cerv_ostheophites));
      } else {
        res.push("    - Ausência de osteófitos marginais detectáveis ao método");
      }
    }
    // Check Degenerative Disc Disease (DDD)
    let lumbar_ddd = $("#column-lumbar-ddd").val();
    if (lumbar_ddd == "ok") {
      // None
      res.push("    - Ausência de reduções detectáveis ao método de alturas de espaços intervertebrais");
    } else if (lumbar_ddd == "shat") {
      // Everywhere
      res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
    } else {
      // Some, parse which:
      lumbar_ddd = [];
      // > L1-L2
      if ($("#column-lumbar-ddd-l1l2").is(":checked")) {
        lumbar_ddd.push("L1-L2");
      }
      // > L2-L3
      if ($("#column-lumbar-ddd-l2l3").is(":checked")) {
        lumbar_ddd.push("L2-L3");
      }
      // > L3-L4
      if ($("#column-lumbar-ddd-l3l4").is(":checked")) {
        lumbar_ddd.push("L3-L4");
      }
      // > L4-L5
      if ($("#column-lumbar-ddd-l4l5").is(":checked")) {
        lumbar_ddd.push("L4-L5");
      }
      // > L5-S1
      if ($("#column-lumbar-ddd-l5s1").is(":checked")) {
        lumbar_ddd.push("L5-S1");
      }
      // Return which
      if (lumbar_ddd.length > 3) {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      } else if (lumbar_ddd.length > 0) {
        res.push("    - Reduç" + (lumbar_ddd.length > 1 ? "ões de espaços intervertebrais" : "ão de espaço intervertebral") + " de " + humanList(lumbar_ddd));
      } else {
        res.push("    - Reduções ubíquas de alturas de espaços intervertebrais");
      }
    }
    // Check fragility fractures
    let fx = [];
    if ($("#column-lumbar-fx").val() != "ok") {
      // L1
      if ($("#column-lumbar-fx-l1").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-lumbar-fx-l1-location").val() +
          $("#column-lumbar-fx-l1-time").val() +
          $("#column-lumbar-fx-l1-linebreak").val() +
          " de L1"
        );
      }
      // L2
      if ($("#column-lumbar-fx-l2").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-lumbar-fx-l2-location").val() +
          $("#column-lumbar-fx-l2-time").val() +
          $("#column-lumbar-fx-l2-linebreak").val() +
          " de L2"
        );
      }
      // L3
      if ($("#column-lumbar-fx-l3").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-lumbar-fx-l3-location").val() +
          $("#column-lumbar-fx-l3-time").val() +
          $("#column-lumbar-fx-l3-linebreak").val() +
          " de L3"
        );
      }
      // L4
      if ($("#column-lumbar-fx-l4").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-lumbar-fx-l4-location").val() +
          $("#column-lumbar-fx-l4-time").val() +
          $("#column-lumbar-fx-l4-linebreak").val() +
          " de L4"
        );
      }
      // L5
      if ($("#column-lumbar-fx-l5").is(":checked")) {
        fx.push(
          "redução de altura " +
          $("#column-lumbar-fx-l5-location").val() +
          $("#column-lumbar-fx-l5-time").val() +
          $("#column-lumbar-fx-l5-linebreak").val() +
          " de L5"
        );
      }
    }
    if (fx.length > 0) {
      res.push("    - Presença de fratura" + (fx.length > 1 ? "s" : "") + " de fragilidade de " + (fx.length > 1 ? "corpos vertebrais" : "corpo vertebral") + ": " + humanList(fx));
    } else {
      res.push("    - Ausência de sinais claros de fraturas de fragilidade de corpos vertebrais detectáveis ao método");
    }
    // Check lesions
    let lesion = [];
    if ($("#column-lumbar-lesion").val() != "ok") {
      // > L1
      if ($("#column-lumbar-lesion-l1").is(":checked")) {
        lesion.push(
          $("#column-lumbar-lesion-l1-qtt").val() +
          " " +
          $("#column-lumbar-lesion-l1-type").val() +
          ($("#column-lumbar-lesion-l1-qtt").val() != "lesão única" ? "s" : "") +
          " em L1"
        );
      }
      // > L2
      if ($("#column-lumbar-lesion-l2").is(":checked")) {
        lesion.push(
          $("#column-lumbar-lesion-l2-qtt").val() +
          " " +
          $("#column-lumbar-lesion-l2-type").val() +
          ($("#column-lumbar-lesion-l2-qtt").val() != "lesão única" ? "s" : "") +
          " em L2"
        );
      }
      // > L3
      if ($("#column-lumbar-lesion-l3").is(":checked")) {
        lesion.push(
          $("#column-lumbar-lesion-l3-qtt").val() +
          " " +
          $("#column-lumbar-lesion-l3-type").val() +
          ($("#column-lumbar-lesion-l3-qtt").val() != "lesão única" ? "s" : "") +
          " em L3"
        );
      }
      // > L4
      if ($("#column-lumbar-lesion-l4").is(":checked")) {
        lesion.push(
          $("#column-lumbar-lesion-l4-qtt").val() +
          " " +
          $("#column-lumbar-lesion-l4-type").val() +
          ($("#column-lumbar-lesion-l4-qtt").val() != "lesão única" ? "s" : "") +
          " em L4"
        );
      }
      // > L5
      if ($("#column-lumbar-lesion-l5").is(":checked")) {
        lesion.push(
          $("#column-lumbar-lesion-l5-qtt").val() +
          " " +
          $("#column-lumbar-lesion-l5-type").val() +
          ($("#column-lumbar-lesion-l5-qtt").val() != "lesão única" ? "s" : "") +
          " em L5"
        );
      }
    }
    if (lesion.length > 0) {
      res.push("    - Observa-se também " + humanList(lesion));
    }
  }

  // Return evaluation array
  return res;
}

function humanList(arr) {
  var r = "";

  switch(arr.length) {
    case 0:
      r = "";
      break;
    case 1:
      r += arr.join("");
      break;
    case 2:
      r += arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      r += arr.join(", ");
      r += " e " + last;
  }
  return r;
}

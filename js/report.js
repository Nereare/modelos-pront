$(document).ready(function() {
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

  // Change adequability criteria editability
  $("#adequability-check").on("change", function() {
    if ( $(this).is(":checked") ) {
      $("#adequability-projection, #adequability-centering, #adequability-rotation, #adequability-abduction, #adequability-superinpositions, #adequability-lateral, #adequability-inspiration, #adequability-exposure-low, #adequability-exposure-adequate, #adequability-exposure-hyper, #adequability-exposure-toxic").prop("disabled", true);
      $("#adequability-projection, #adequability-centering, #adequability-rotation, #adequability-abduction, #adequability-superinpositions, #adequability-lateral, #adequability-inspiration, #adequability-exposure-adequate").prop("checked", true);
    } else {
      $("#adequability-projection, #adequability-centering, #adequability-rotation, #adequability-abduction, #adequability-superinpositions, #adequability-lateral, #adequability-inspiration, #adequability-exposure-low, #adequability-exposure-adequate, #adequability-exposure-hyper, #adequability-exposure-toxic").prop("disabled", false);
    }
  });

  // Clear exame date
  $("#date-clear").on("click", function() {
    $("#date").val("");
  });

  // Enable/Disable heart proportion
  $("#heart-area").on("change", function() {
    if ( $(this).val() == "adequada" ) {
      $("#heart-width, #heart-hemithorax-width, #heart-ratio")
        .val("")
        .prop("disabled", true);
    } else {
      $("#heart-width, #heart-hemithorax-width, #heart-ratio")
        .prop("disabled", false);
    }
  });
  // Calculate heart area ratio
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

  // Enable/Disable hilum infiltration focus
  $("#lung-hilum").on("change", function() {
    if ( $(this).val() == "sem alterações observáveis" ) {
      $("#lung-hilum-hyper")
        .val("sem predomínios")
        .prop("disabled", true);
    } else {
      $("#lung-hilum-hyper")
        .prop("disabled", false);
    }
  });

  // Enable/Disable lung pneumonia foci descriptors
  $("#lung-pneumonia").on("change", function() {
    if ( $(this).val() == "true" ) {
      $("#lung-pneumonia-desc").removeClass("is-hidden");
    } else {
      $("#lung-pneumonia-desc").addClass("is-hidden");
      $("#lung-pneumonia-right-top, #lung-pneumonia-right-middle, #lung-pneumonia-right-bottom, #lung-pneumonia-left-top, #lung-pneumonia-left-bottom")
        .prop("checked", false)
        .trigger("change");
      $("#lung-pneumonia-right-top-size, #lung-pneumonia-right-middle-size, #lung-pneumonia-right-bottom-size, #lung-pneumonia-left-top-size, #lung-pneumonia-left-bottom-size").val("");
    }
  });

  // Enable/Disable effusion descriptors
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

  // Enable/Disable pleura abnormality description
  $("#lung-pleura").on("change", function() {
    if ( $(this).val() == "não observável" ) {
      $("#lung-pleura-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#lung-pleura-desc").prop("disabled", false);
    }
  });

  // Enable/Disable stomach description
  $("#abdome-stomach").on("change", function() {
    if ( $(this).val() == "presente" ) {
      $("#abdome-stomach-side").val( " em situs solitus" );
    } else {
      $("#abdome-stomach-side").val("");
    }
  });

  // Enable/Disable clavicules description
  $("#soft-clavicules").on("change", function() {
    if ( $(this).val() == "sem alterações observáveis" ) {
      $("#soft-clavicules-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-clavicules-desc").prop("disabled", false);
    }
  });

  // Enable/Disable ribs description
  $("#soft-ribs").on("change", function() {
    if ( $(this).val() == "sem alterações observáveis" ) {
      $("#soft-ribs-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-ribs-desc").prop("disabled", false);
    }
  });

  // Enable/Disable subcutaneous emphisema description
  $("#soft-emphisema").on("change", function() {
    if ( $(this).val() == "ausente" ) {
      $("#soft-emphisema-desc")
        .prop("disabled", true)
        .val("");
    } else {
      $("#soft-emphisema-desc").prop("disabled", false);
    }
  });

  // Add miscellaneous description field & button method
  $("#misc-add").on("click", function() {
    let uuid = uuidv4();
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

  // Generate output
  $("#button-run").on("click", function() {
    let output = [];
    let header = "# Rx Tórax";
    let date = "";
    let date_options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    if ( $("#date").val() != "" ) {
      date = new Date( $("#date").val() + "T00:00:00-03:00" );
      date = " (" + date.toLocaleString("pt-BR", date_options) + ")";
    }
    output.push( header + date + ":" );
    output.push( build_technique() );
    output.push( build_eval() );

    $("#output").val( output.join("\n") );
  });
});

function build_technique() {
  let res = "- Técnica ";
  if ( $("#adequability-check").is(":checked") ) { res += "adequada ({{FOO}})."; }
  else { res += "INADEQUADA ({{FOO}})."; }

  // Get adequability parameters
  let param = [];
  // Projection
  if ( $("#adequability-projection").is(":checked") ) { param.push("incidência póstero-anterior"); }
  else { param.push("incidência ÂNTERO-posterior"); }
  // Centering
  if ( $("#adequability-centering").is(":checked") ) { param.push("centrado no plano sagital"); }
  else { param.push("RODADO no plano sagital"); }
  // Rotation
  if ( $("#adequability-rotation").is(":checked") ) { param.push("centrado no plano axial"); }
  else { param.push("RODADO no plano axial"); }
  // Inspiration
  if ( $("#adequability-inspiration").is(":checked") ) { param.push("bem inspirado"); }
  else { param.push("POUCO inspirado"); }
  // Arms Abduction
  if ( $("#adequability-abduction").is(":checked") ) { param.push("MMSS abduzidos adequadamente"); }
  else { param.push("MMSS gerando superposição por não estarem abduzidos"); }
  // Superimpositions
  if ( $("#adequability-superinpositions").is(":checked") ) { param.push("sem superimposições evitáveis"); }
  else { param.push("PRESENÇA de superimposições evitáveis"); }
  // Lateral Incidence
  if ( $("#adequability-lateral").is(":checked") ) { param.push("incidência ortogonal presente"); }
  else { param.push("AUSÊNCIA de incidência ortogonal para avaliação adequada de possíveis imagens de somação"); }
  // Exposure
  param.push( $("input[name=adequability-exposure]:checked").val() );

  return res.replace( "{{FOO}}", param.join("; ") );
}
function build_eval() {
  let res = "- Avaliação:\n{{FOO}}";
  // Get evaluation parameters
  let param = [];

  // Check heart parameters
  let heart = [];
  if ( $("#heart-area").val() == "aumentada" ) {
    let heart_area = parseInt( $("#heart-width").val() );
    let hemith = parseInt( $("#heart-hemithorax-width").val() );
    let ratio = heart_area * 100 / hemith;
    ratio = ratio.toFixed(1) + "%";
    heart.push(
      "área cardíaca " +
      $("#heart-area").val() +
      " (largura cardíaca de ~" +
      heart_area +
      "mm, ou ~" +
      ratio +
      " do hemitórax)"
    );
  } else {
    heart.push( "área cardíaca " + $("#heart-area").val() );
  }
  heart.push( $("#heart-side").val() );
  // Add heart parameters to evaluation
  param.push( "  - Coração: " + heart.join("; ") + "." );

  // Check mediastinum parameters
  let mediastinum = [];
  mediastinum.push( "botão aórtico com área " + $("#mediastinum-aorta").val() + $("#mediastinum-aorta-calcium").val() );
  mediastinum.push( "botão de a. pulmonar com área " + $("#mediastinum-pulmonary").val() );
  if ( $("#mediastinum-thymus").val() ) {
    mediastinum.push( $("#mediastinum-thymus").val() );
  }
  mediastinum.push( "carina " + $("#mediastinum-carina").val() );
  // Add mediastinum parameters to evaluation
  param.push( "  - Mediastino: " + mediastinum.join("; ") + "." );

  // Check lung parameters
  let lung = [];
  if ( $("#lung-hilum").val() == "sem alterações observáveis" ) {
    lung.push( "hilo pulmonar " + $("#lung-hilum").val() );
  } else {
    lung.push( "hilo pulmonar " + $("#lung-hilum").val() + " " + $("#lung-hilum-hyper").val() );
  }
  if ( $("#lung-pneumonia").val() == "false" ) {
    lung.push( "sem consolidações observáveis ao método" );
  } else {
    let foci = [];
    // Right Top Lobe
    if ( $("#lung-pneumonia-right-top").is(":checked") ) {
      if ( $("#lung-pneumonia-right-top-size").val() != "" ) { foci.push( "lobo direito superior de ~" + $("#lung-pneumonia-right-top-size").val() + "mm" ); }
      else { foci.push( "lobo direito superior" ); }
    }
    // Right Middle Lobe
    if ( $("#lung-pneumonia-right-middle").is(":checked") ) {
      if ( $("#lung-pneumonia-right-middle-size").val() != "" ) { foci.push( "lobo direito médio de ~" + $("#lung-pneumonia-right-middle-size").val() + "mm" ); }
      else { foci.push( "lobo direito médio" ); }
    }
    // Right Bottom Lobe
    if ( $("#lung-pneumonia-right-bottom").is(":checked") ) {
      if ( $("#lung-pneumonia-right-bottom-size").val() != "" ) { foci.push( "lobo direito inferior de ~" + $("#lung-pneumonia-right-bottom-size").val() + "mm" ); }
      else { foci.push( "lobo direito inferior" ); }
    }
    // Left Top Lobe
    if ( $("#lung-pneumonia-left-top").is(":checked") ) {
      if ( $("#lung-pneumonia-left-top-size").val() != "" ) { foci.push( "lobo esquerdo superior de ~" + $("#lung-pneumonia-left-top-size").val() + "mm" ); }
      else { foci.push( "lobo esquerdo superior" ); }
    }
    // Left Bottom Lobe
    if ( $("#lung-pneumonia-left-bottom").is(":checked") ) {
      if ( $("#lung-pneumonia-left-bottom-size").val() != "" ) { foci.push( "lobo esquerdo inferior de ~" + $("#lung-pneumonia-left-bottom-size").val() + "mm" ); }
      else { foci.push( "lobo esquerdo inferior" ); }
    }
    lung.push( "com consolidação(ões) observável(is) em: " + humanList( foci ) );
  }
  if ( $("#lung-effusion").val() == "livres bilateralmente" ) {
    lung.push( "seios costofrênicos " + $("#lung-effusion").val() );
  } else if ( $("#lung-effusion").val() == "com derrame pleural bilateralmente" ) {
    lung.push( "seios costofrênicos " + $("#lung-effusion").val() + ", com ~" + $("#lung-effusion-right").val() + "mm à direita e ~" + $("#lung-effusion-left").val() + "mm à esquerda" );
  } else {
    if ( $("#lung-effusion").val() == "com derrame pleural à direita" ) {
      lung.push( "seios costofrênicos " + $("#lung-effusion").val() + " de ~" + $("#lung-effusion-right").val() + "mm" );
    } else {
      lung.push( "seios costofrênicos " + $("#lung-effusion").val() + " de ~" + $("#lung-effusion-left").val() + "mm" );
    }
  }
  if ( $("#lung-diaphragm").val() ) {
    lung.push( "cúpulas diafragmáticas " + $("#lung-diaphragm").val() );
  }
  lung.push( "pleuras " + $("#lung-pleura").val() + $("#lung-pleura-desc").val() );
  // Add lung parameters to evaluation
  param.push( "  - Campos Pulmonares: " + lung.join("; ") + "." );

  // Check abdomen parameters
  let abdomen = [];
  abdomen.push( "bolha gástrica " + $("#abdome-stomach").val() + $("#abdome-stomach-side").val() );
  abdomen.push( $("#abdome-liver").val() + $("#abdome-pneumoperitonium").val() );
  // Add abdomen parameters to evaluation
  param.push( "  - Abdome: " + abdomen.join("; ") + "." );

  // Check soft tissue parameters
  let soft = [];
  if ( $("#soft-clavicules").val() == "com " && $("#soft-clavicules-desc").val() != "" ) {
    soft.push( "clavículas " + $("#soft-clavicules").val() + $("#soft-clavicules-desc").val() );
  } else {
    soft.push( "clavículas sem alterações observáveis" );
  }
  if ( $("#soft-ribs").val() == "com " && $("#soft-ribs-desc").val() != "" ) {
    soft.push( "arcos costais " + $("#soft-ribs").val() + $("#soft-ribs-desc").val() );
  } else {
    soft.push( "arcos costais sem alterações observáveis" );
  }
  if ( $("#soft-emphisema").val() == "PRESENTE em " && $("#soft-emphisema-desc").val() != "" ) {
    soft.push( "enfisema subcutâneo " + $("#soft-emphisema").val() + $("#soft-emphisema-desc").val() );
  } else {
    soft.push( "enfisema subcutâneo ausente" );
  }
  // Add soft tissue parameters to evaluation
  param.push( "  - Partes Moles: " + soft.join("; ") + "." );

  // Check miscellaneous parameters
  let misc = [];
  $(".misc-desc").each(function() {
    if ( $(this).val() ) {
      misc.push( $(this).val() );
    }
  });
  // Add miscellaneous parameters to evaluation
  if ( misc.length > 0 ) {
    param.push( "  - Outros Achados: " + misc.join("; ") + "." );
  }

  // Return built evaluation
  return res.replace( "{{FOO}}", param.join("\n") );
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

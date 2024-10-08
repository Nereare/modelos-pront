$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Change febrile state when fever is input
  $("#ssvv-temp, #ssvv-temp-desc").on("input change", function() {
    var temp = parseFloat( $("#ssvv-temp").val() );
    if( temp >= 37.8 ) { $("#fever-yes").prop("checked", true); }
    else if ( temp >= 37.0 && $("#ssvv-temp-desc").val() == "infravermelho de testa" ) { $("#fever-yes").prop("checked", true); }
    else if ( temp <= 34 ) { $("#fever-hypo").prop("checked", true); }
    else { $("#fever-none").prop("checked", true); }
  });

  // Enable abnormal breathing description:
  $("input[name='breathe']").on("change", function() {
    if( $("input[name='breathe']:checked").val() == "dispneice" ) {
      $("#breathe-abnormal-desc").prop("disabled", false);
    } else {
      $("#breathe-abnormal-desc")
        .prop("disabled", true)
        .val("");
    }
  });

  // Calculate BMI when appliable:
  $("#ssvv-weight, #ssvv-height").on("input change", function() {
    if(
      $("#ssvv-weight").val() != "" &&
      $("#ssvv-height").val() != ""
    ) {
      var weight = parseFloat( $("#ssvv-weight").val() );
      var height = parseFloat( $("#ssvv-height").val() ) / 100;
      var bmi = weight / (height * height);
      $("#ssvv-bmi").val( bmi.toFixed(1) );
    }
  });

  // Enable walking description, if applicable:
  $("#walking").on("change", function() {
    let desc = $("#walking option:selected").attr("data-desc");
    if (typeof(desc) !== "undefined" && desc == "true") {
      $("#walking-desc")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#walking-desc")
        .val("")
        .attr("disabled", true);
    }
  });

  // (Un)collapse fields
  $(".collapsable").on("change", function() {
    let target = $(this).attr("data-target");
    $("#" + target).toggleClass("is-hidden");
  });

  // Enable face description, if other:
  $("#face").on("change", function() {
    if( $(this).val() == "other" ) {
      $("#face-other").prop("disabled", false);
    } else {
      $("#face-other")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable thyroid nodule location:
  $("#thyroid-volume").on("change", function() {
    if( $(this).val() == "palpável topicamente, volume aumentado às custas de nódulo único" ) {
      $("#thyroid-nodule-loc").prop("disabled", false);
    } else {
      $("#thyroid-nodule-loc")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable lymphnode locations:
  $("#lymph").on("change", function() {
    if ($(this).val().includes("Presença de") ) {
      $("#lymph-locs").removeClass("is-hidden");
    } else {
      $("#lymph-locs").addClass("is-hidden");
      $(".lymph-loc").prop("checked", false);
    }
  });
  // Enable crepitation description:
  $("#lung-sounds").on("change", function() {
    if(
      $("#lung-sounds").val() == "com crepitação estertorante em " ||
      $("#lung-sounds").val() == "com sopro cavernoso em "
    ) {
      $("#lung-crept").prop("disabled", false);
    } else {
      $("#lung-crept")
        .prop("disabled", true)
        .val("base direita");
    }
  });
  // Enable percussion description:
  $("#lung-tap").on("change", function() {
    if ( $(this).val() == "Macicez percutível em " ) {
      $("#lung-tap-desc")
        .prop("disabled", false);
    } else {
      $("#lung-tap-desc")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) {
      $("#heart-murmur-desc").prop("disabled", false);
    }
    else {
      $("#heart-murmur-desc")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable percussion mass description:
  $("#abdomen-percussion").on("change", function() {
    if( $("#abdomen-percussion").val() == "com macicez percutível em " ) {
      $("#abdomen-percussion-mass").prop("disabled", false);
    } else {
      $("#abdomen-percussion-mass")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable Skoda description:
  $("#abdomen-skoda").on("change", function() {
    if( $("#abdomen-skoda").val() == "presente a " ) {
      $("#abdomen-skoda-cm").prop("disabled", false);
    } else {
      $("#abdomen-skoda-cm")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable mass description:
  $("#abdomen-stuff").on("change", function() {
    if( $("#abdomen-stuff").val() == "com " ) {
      $("#abdomen-stuff-desc").prop("disabled", false);
    } else {
      $("#abdomen-stuff-desc")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable hemorrhoids' descriptions
  $("#hemorrhoids-external, #hemorrhoids-internal").on("change", function() {
    let id = "#" + $(this).attr("id") + "-desc";
    if ( $(this).val() != "ausentes" ) {
      $(id)
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $(id)
        .attr("disabled", true)
        .val("");
    }
  });
  // Enable rectum content description
  $("#rectum-content").on("change", function() {
    if ( $(this).val() != "sem conteúdos tocáveis" ) {
      $("#rectum-content-desc")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#rectum-content-desc")
        .attr("disabled", true)
        .val("");
    }
  });
  // Enable finger covering description
  $("#rectum-finger").on("change", function () {
    if ($(this).val() == "com") {
      $("#rectum-finger-desc")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#rectum-finger-desc")
        .attr("disabled", true)
        .val("");
    }
  });

  // Enable/Disable skin description
  $("#skin").on("input change", function() {
    if ( $("#skin").val() != "" ) {
      $("#exam-skin").prop("checked", true);
    } else {
      $("#exam-skin").prop("checked", false);
    }
  });

  // Enable oedema intensity:
  $("#oedema").on("change", function() {
    switch( $("#oedema").val() ) {
      case "Edema bilateral e simétrico":
      case "Edema exclusivo à direita":
      case "Edema exclusivo à esquerda":
        $("#oedema-grade1").prop("disabled", false);
        $("#oedema-grade1 option").each(function(i, e) {
          $(e).html( $(e).attr("data-qtt") );
        });
        $("#oedema-grade2").prop("disabled", true);
        break;
      case "Edema bilateral, maior à direita":
      case "Edema bilateral, maior à esquerda":
        $("#oedema-grade1, #oedema-grade2").prop("disabled", false);
        $("#oedema-grade1 option").each(function(i, e) {
          $(e).html( $(e).attr("data-qtt") + " (D)" );
        });
        break;
      default:
        $("#oedema-grade1, #oedema-grade2")
          .prop("disabled", true)
          .val("1+/4+");
        $("#oedema-grade1 option").each(function(i, e) {
          $(e).html( $(e).attr("data-qtt") );
        });
        break;
    }
  });
  // Enable MMII pulse descriptors:
  $("#mmiipulse-strength").on("change", function() {
    if(
      $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ||
      $("#mmiipulse-strength").val() == "" ) {
        $("#mmiipulse-artery, #mmiipulse-simmetry").prop("disabled", true);
    } else {
      $("#mmiipulse-artery, #mmiipulse-simmetry").prop("disabled", false);
    }
  });
  // Enable MMSS pulse descriptors:
  $("#mmsspulse-strength").on("change", function() {
    if(
      $("#mmsspulse-strength").val() == "ausentes até aa. axilares" ||
      $("#mmsspulse-strength").val() == "" ) {
        $("#mmsspulse-artery, #mmsspulse-simmetry").prop("disabled", true);
    } else {
      $("#mmsspulse-artery, #mmsspulse-simmetry").prop("disabled", false);
    }
  });

  // Show neuro exam
  $("#neuro-show").on("click", function() {
    $("#neuro")
      .toggleClass("is-hidden")
      .trigger("focus");
    $(this).find("i").toggleClass("mdi-eye mdi-eye-off");
    if ( $(this).find(".text").html() == "Mostrar" ) { $(this).find(".text").html("Esconder"); }
    else { $(this).find(".text").html("Mostrar"); }
  });
  // Show other languange deffects descriptor
  $("#neuro-speech-desc").on("change", function() {
    if ( $("#neuro-speech-desc").val() == "outro" ) {
      $("#neuro-speech-other").prop("disabled", false);
    } else {
      $("#neuro-speech-other")
        .val("")
        .prop("disabled", true);
    }
  });
  // Show other walk deffects descriptor
  $("#neuro-walk-desc").on("change", function() {
    if ( $("#neuro-walk-desc").val() == "outro" ) {
      $("#neuro-walk-other").prop("disabled", false);
    } else {
      $("#neuro-walk-other")
        .val("")
        .prop("disabled", true);
    }
  });
  // Add tactile descriptor entry
  // Then add the first one
  $("#neuro-feel-add").on("click", function() {
    var uuid = uuidPoor();
    var item = $("<tr>")
      .addClass("neuro-feel-item")
      .attr("id", uuid);

    // Column 1
    var desc = $("<td>");
    var desc_field = $("<div>")
      .addClass("field has-addons");

    var delete_div = $("<div>")
      .addClass("control");
    var delete_button = $("<button>")
      .addClass("button is-danger")
      .attr("type", "button")
      .attr("id", "delete-" + uuid)
      .on("click", function() { $("#" + uuid).remove(); });
    var delete_span = $("<span>")
      .addClass("icon");
    var delete_i = $("<i>")
      .addClass("mdi mdi-delete");
    delete_span.append( delete_i );
    delete_button.append( delete_span );
    delete_div.append( delete_button );
    desc_field.append( delete_div );

    var type_div = $("<div>")
      .addClass("control");
    var select_div = $("<div>")
      .addClass("select");
    var type_select = $("<select>")
      .addClass("type")
      .attr("id", "type-" + uuid);
    var opt1 = $("<option>")
      .val("Epicrítica")
      .prop("selected", true)
      .html("Epicrítica");
    var opt2 = $("<option>")
      .val("Proprioceptiva")
      .html("Proprioceptiva");
    type_select
      .append(opt1)
      .append(opt2);
    select_div.append( type_select );
    type_div.append( select_div );
    desc_field.append( type_div );

    var topo_div = $("<div>")
      .addClass("control is-expanded");
    var topo_input = $("<input>")
      .attr("type", "text")
      .addClass("input topography")
      .attr("id", "topography-" + uuid)
      .attr("placeholder", "Topografia");
    topo_div.append( topo_input );
    desc_field.append( topo_div );
    desc.append( desc_field );
    item.append( desc );

    // Column 2
    var right = $("<td>");
    var right_field = $("<div>")
      .addClass("field");
    var right_control = $("<div>")
      .addClass("control is-expanded");
    var right_select_div = $("<div>")
      .addClass("select is-fullwidth");
    var right_select = $("<select>")
      .addClass("right")
      .attr("id", "right-" + uuid);
    var opt1 = $("<option>")
      .val("")
      .prop("selected", true)
      .html("NT");
    var opt2 = $("<option>")
      .val("presente")
      .html("Presente");
    var opt3 = $("<option>")
      .val("diminuída")
      .html("Diminuída");
    var opt4 = $("<option>")
      .val("AUSENTE")
      .html("Ausente");
    right_select
      .append(opt1)
      .append(opt2)
      .append(opt3)
      .append(opt4);
    right_select_div.append( right_select );
    right_control.append( right_select_div );
    right_field.append( right_control );
    right.append( right_field );
    item.append( right );

    // Column 3
    var left = $("<td>");
    var left_field = $("<div>")
      .addClass("field");
    var left_control = $("<div>")
      .addClass("control is-expanded");
    var left_select_div = $("<div>")
      .addClass("select is-fullwidth");
    var left_select = $("<select>")
      .addClass("left")
      .attr("id", "left-" + uuid);
    var opt1 = $("<option>")
      .val("")
      .prop("selected", true)
      .html("NT");
    var opt2 = $("<option>")
      .val("presente")
      .html("Presente");
    var opt3 = $("<option>")
      .val("diminuída")
      .html("Diminuída");
    var opt4 = $("<option>")
      .val("AUSENTE")
      .html("Ausente");
    left_select
      .append(opt1)
      .append(opt2)
      .append(opt3)
      .append(opt4);
    left_select_div.append( left_select );
    left_control.append( left_select_div );
    left_field.append( left_control );
    left.append( left_field );
    item.append( left );

    $("#neuro-feel-container").append( item );
  }).trigger("click");
  // Add other entry
  // Then add the first one
  $("#neuro-other-add").on("click", function() {
    var uuid = uuidPoor();
    var item = $("<div>")
      .addClass("field has-addons neuro-other-item")
      .attr("id", uuid);

    // Delete button
    var delete_control = $("<div>")
      .addClass("control");
    var delete_button = $("<button>")
      .attr("type", "button")
      .addClass("button is-danger")
      .attr("id", "delete-" + uuid)
      .on("click", function() { $("#" + uuid).remove(); });
    var delete_span = $("<span>")
      .addClass("icon");
    var delete_i = $("<i>")
      .addClass("mdi mdi-delete");
    delete_span.append( delete_i );
    delete_button.append( delete_span );
    delete_control.append( delete_button );
    item.append( delete_control );

    // Title
    var title_control = $("<div>")
      .addClass("control");
    var title_input = $("<input>")
      .attr("type", "text")
      .addClass("input")
      .attr("id", "title-" + uuid)
      .attr("placeholder", "Subtítulo");
    title_control.append( title_input );
    item.append( title_control );

    // Colon spacer
    var colon_control = $("<div>")
      .addClass("control");
    var colon_button = $("<button>")
      .attr("type", "button")
      .addClass("button is-static")
      .attr("tabindex", "-1")
      .html(":");
    colon_control.append( colon_button );
    item.append( colon_control );

    // Description
    var desc_control = $("<div>")
      .addClass("control is-expanded");
    var desc_input = $("<input>")
      .attr("type", "text")
      .addClass("input")
      .attr("id", "desc-" + uuid)
      .attr("placeholder", "Descreva achado");
    desc_control.append( desc_input );
    item.append( desc_control );

    // Period spacer
    var period_control = $("<div>")
      .addClass("control");
    var period_button = $("<button>")
      .attr("type", "button")
      .addClass("button is-static")
      .attr("tabindex", "-1")
      .html(".");
    period_control.append( period_button );
    item.append( period_control );

    $("#neuro-other-container").append( item );
  }).trigger("click");

  // Build output:
  $("#button-run").on("click", function() {
    var o = ["# EF:"];
    o.push( "Paciente em " + $("#status").val() + "EG." );

    var pronoun = $("#pronouns").val();

    var qualitative_exam = [];
    if( $('input[name="color"]:checked').val() == "Corade" ) {
      qualitative_exam.push("Corad" + pronoun);
    } else {
      qualitative_exam.push("Descorad" + pronoun + " " + $('input[name="color"]:checked').val() + "+/4+");
    }
    if( $('input[name="hydro"]:checked').val() == "hidratade" ) {
      qualitative_exam.push("hidratad" + pronoun);
    } else {
      qualitative_exam.push("desidratad" + pronoun + " " + $('input[name="hydro"]:checked').val() + "+/4+");
    }
    if( $('input[name="cyanose"]:checked').val() == "acianótice" ) {
      qualitative_exam.push("acianótic" + pronoun);
    } else {
      qualitative_exam.push("cianótic" + pronoun + " " + $('input[name="cyanose"]:checked').val() + "+/4+");
    }
    if( $('input[name="icter"]:checked').val() == "anictérice" ) {
      qualitative_exam.push("anictéric" + pronoun);
    } else {
      qualitative_exam.push("ictéric" + pronoun + " " + $('input[name="icter"]:checked').val() + "+/4+");
    }
    qualitative_exam.push($('input[name="fever"]:checked').val());
    if( $('input[name="breathe"]:checked').val() == "dispneice" ) {
      qualitative_exam.push( $("#breathe-abnormal-desc").val() + "pneic" + pronoun );
    } else {
      qualitative_exam.push("eupneic" + pronoun);
    }
    o.push( humanList(qualitative_exam) + "." );

    // Vital Signs
    if(
      $("#ssvv-sat").val() != "" ||
      $("#ssvv-pulse").val() != "" ||
      (
        $("#ssvv-pas").val() != "" &&
        $("#ssvv-pad").val() != ""
      ) ||
      $("#ssvv-fr").val() != "" ||
      $("#ssvv-temp").val() != "" ||
      $("#ssvv-weight").val() != "" ||
      $("#ssvv-height").val() != "" ||
      $("#ssvv-pain").val() != "" ||
      $("#ssvv-glucose").val() != "" ||
      (
        $("#neuro-gcs-eye").val() != "" &&
        $("#neuro-gcs-speech").val() != "" &&
        $("#neuro-gcs-muscle").val() != ""
      ) ||
      $("#orientation-time").val() != "" ||
      $("#orientation-space").val() != "" ||
      $("#collaboration").val() != "" ||
      $("#walking").val() != ""
    ) {
      var ssvv = [];
      if( $("#ssvv-sat").val() != "" ) { ssvv.push( "Sat. O2 = " + $("#ssvv-sat").val() + "% " + $("#ssvv-sat-type").val() ); }
      if( $("#ssvv-pulse").val() != "" ) { ssvv.push( "Pulso = " + $("#ssvv-pulse").val() + "bpm" ); }
      let pas = parseInt( $("#ssvv-pas").val() );
      let pad = parseInt( $("#ssvv-pad").val() );
      if(
        !isNaN(pas) &&
        !isNaN(pad)
      ) {
        ssvv.push( "PA = " + pas + "/" + pad + "mmHg" );
        let pam = (pas + (pad*2))/3;
        let pam_r = Math.round(pam);
        let eq = (pam - pam_r > 0.0) ? "~" : "=";
        ssvv.push( "PAM " + eq + " " + pam_r + "mmHg" );
      }
      if( $("#ssvv-fr").val() != "" ) { ssvv.push( "FR = " + $("#ssvv-fr").val() + "irpm" ); }
      if( $("#ssvv-temp").val() != "" ) { ssvv.push( "Temp = " + $("#ssvv-temp").val() + "°C (" + $("#ssvv-temp-desc").val() + ")" ); }
      if( $("#ssvv-weight").val() != "" ) { ssvv.push( "Peso " + $("#ssvv-weight-eq").val() + " " + $("#ssvv-weight").val() + "kg" ); }
      if( $("#ssvv-height").val() != "" ) { ssvv.push( "Alt = " + $("#ssvv-height").val() + "cm" ); }
      if(
        $("#ssvv-weight").val() != "" &&
        $("#ssvv-height").val() != ""
      ) {
        var weight = parseFloat( $("#ssvv-weight").val() );
        var height = parseFloat( $("#ssvv-height").val() ) / 100;
        var bmi = weight / (height * height);
        ssvv.push( "IMC = " + bmi.toFixed(1) + "kg/m²" );
      }
      if( $("#ssvv-glucose").val() != "" ) {
        let dx = parseInt( $("#ssvv-glucose").val() );
        let gluc = "";
        if ( dx > 400 ) { gluc = "HI"; }
        else { gluc = dx + "mg/dL" }
        ssvv.push( "Glicemia Capilar = " + gluc + " (" + $("#ssvv-glucose-time").val() + ")" );
      }
      if( $("#ssvv-pain").val() != "" ) {
        let pain = $("#ssvv-pain").val();
        if (pain == "0") { ssvv.push( "Dor (EVA) = 0 (nega dores)" ); }
        else { ssvv.push( "Dor (EVA) = " + $("#ssvv-pain").val() + "/10" ); }
      }
      if ( $("#neuro-gcs-eye").val() != "" &&
           $("#neuro-gcs-speech").val() != "" &&
           $("#neuro-gcs-muscle").val() != "" ) {
        var gcs = [
         "AO " + $("#neuro-gcs-eye").val(),
         "RV " + $("#neuro-gcs-speech").val(),
         "RM " + $("#neuro-gcs-muscle").val()
        ];
        var gcscore = parseInt( $("#neuro-gcs-eye").val() );
        gcscore += parseInt( $("#neuro-gcs-speech").val() );
        gcscore += parseInt( $("#neuro-gcs-muscle").val() );
        if ( $("#neuro-gcs-eye").val() == "0" ||
            $("#neuro-gcs-speech").val() == "0" ||
            $("#neuro-gcs-muscle").val() == "0" ) {
         gcscore += "NT";
        }
        ssvv.push("GCS = " + gcscore + (gcscore == 15 ? "" : " (" + gcs.join(", ") + ")") );
      }
      if ( $("#orientation-time").val() != "" ||
           $("#orientation-space").val() != "" ) {
        if ( $("#orientation-time").val() == $("#orientation-space").val() ) {
          ssvv.push( $("#orientation-time").val() + pronoun + " no tempo-espaço" );
        } else {
          if ( $("#orientation-time").val() != "" ) {
            ssvv.push( $("#orientation-time").val() + pronoun + " no tempo" );
          }
          if ( $("#orientation-space").val() != "" ) {
            ssvv.push( $("#orientation-space").val() + pronoun + " no espaço" );
          }
        }
      }
      if ( $("#collaboration").val() != "" ) {
        ssvv.push( $("#collaboration").val().replaceAll("((PRO))", pronoun) );
      }
      if ( $("#walking").val() != "" ) {
        let walk = $("#walking").val();
        let has_desc = $("#walking option:selected").attr("data-desc");
        let desc = $("#walking-desc").val();
        if (typeof(has_desc) !== "undefined" && has_desc == "true") {
          if (desc == "") {
            if (walk == "Claudicação") {
              walk += " não especificada";
            } else {
              walk += " órtese não especificada";
            }
          } else {
            walk += " " + desc;
          }
        }
        ssvv.push( walk );
      }
      o.push( ssvv.join(" | ") );
    }

    // Face
    if ($("#exam-face").is(":checked") ) {
      let face = $("#face").val().trim();
      if( face == "other" ) { face = $("#face-other").val(); }
      o.push( "Fácies " + face + "." );
    }
    // Eyes
    if( $("#exam-eye").is(":checked") ) {
      o.push( "Olhos: conjuntiva " + $("#eye-white").val() + ", secreções " + $("#eye-secr").val() + "." );
    }
    // Cervical
    if( $("#exam-neck").is(":checked") ) {
      let cerv = ["Cervical:"];
      // Thyroid
      if( $("#thyroid-volume").val() != "" ) {
        let thyr = "Tiroide " + $("#thyroid-volume").val();
        if( $("#thyroid-nodule-loc").val() != "" ) { thyr += $("#thyroid-nodule-loc").val(); }
        if( $("#thyroid-margins").val() != "" ) { thyr += ", com " + $("#thyroid-margins").val(); }
        thyr += ".";
        cerv.push( thyr );
      }
      // Lymphs
      if( $("#lymph").val() != "" ) {
        let lymphs = $("#lymph").val();
        if( lymphs.includes("Presença de") ) {
          let lymph_locs = [];
          $(".lymph-loc").each(function (i, e) {
            if( $(e).is(":checked") ) { lymph_locs.push( $(e).val() ); }
          });
          if( lymph_locs.length > 0 ) {
            lymphs += ", em zona" + (lymph_locs.length > 1 ? "s " : " ") + humanList(lymph_locs);
          }
        }
        lymphs += $("#lymph-desc").val();
        cerv.push( lymphs + "." );
      }
      o.push( cerv.join(" ") );
    }
    // ENT
    // > Otoscopy
    if ($("#exam-oto").is(":checked")) {
      o.push("Otoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + " " + $("#oto-d-retromembrane").val() + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n- OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + " " + $("#oto-e-retromembrane").val() + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + ".");
    }
    // > Oroscopy
    if ($("#exam-oro").is(":checked")) {
      o.push("Oroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + ".");
    }
    // > Anterior Nasoscopy
    if ($("#exam-naso").is(":checked")) {
      o.push("Nasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val() + ".");
    }
    // Lungs
    if( $("#exam-lungs").is(":checked") ) {
      var crept = ".";
      if(
        $("#lung-sounds").val() == "com crepitação estertorante em " ||
        $("#lung-sounds").val() == "com redução de murmúrios vesiculares até " ||
        $("#lung-sounds").val() == "com sopro cavernoso em "
      ) { crept = $("#lung-crept").val() + "."; }
      let tap = "";
      if ( $("#lung-tap").val() != "" ) {
        tap = " " + $("#lung-tap").val();
        if ( tap == " Macicez percutível em " ) { tap += $("#lung-tap-desc").val(); }
        tap += ".";
      }
      o.push( "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + crept + tap );
    }
    // Heart
    if( $("#exam-heart").is(":checked") ) {
      var murmur = $("#heart-murmur").val();
      if( murmur == "com sopro" ) {
        murmur += " " + $("#heart-murmur-desc").val();
      }
      o.push( "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + "." );
    }
    // Abdomen
    if( $("#exam-abdomen").is(":checked") ) {
      var abd = "Abdome: " + $("#abdomen").val() + ", ruídos hidroaéreos " + $("#abdomen-rha").val() + ", " + $("#abdomen-tension").val() + ", percussão " + $("#abdomen-percussion").val();
      if( $("#abdomen-percussion").val() != "globalmente timpânica" ) {
        abd += $("#abdomen-percussion-mass").val();
      }
      abd += ", espaço de Traube " + $("#abdomen-traube").val() + ", margem inferior de fígado percutível ";
      var hep = parseInt( $("#abdomen-hepatimetry").val() );
      if( hep > 0 ) { abd += Math.abs(hep) + "cm abaixo de rebordo costal direito"; }
      else if ( hep < 0 ) { abd += Math.abs(hep) + "cm acima de rebordo costal direito"; }
      else { abd += "em nível de rebordo costal direito"; }
      if( $("#abdomen-mobilemass").val() != "" ) { abd += ", macicez móvel " + $("#abdomen-mobilemass").val(); }
      if( $("#abdomen-skoda").val() != "" ) {
        abd += ", semicírculo de Skoda " + $("#abdomen-skoda").val();
        if( $("#abdomen-skoda").val() == "presente a " ) { abd += $("#abdomen-skoda-cm").val() + "cm de cicatriz umbilical"; }
      }
      if( $("#abdomen-fillip").val() != "" ) { abd += ", sinal do piparote " + $("#abdomen-fillip").val(); }
      abd += ", " + $("#abdomen-stuff").val();
      if( $("#abdomen-stuff").val() == "com " ) { abd += $("#abdomen-stuff-desc").val(); }
      if( $("#abdomen-peritonitis").val() != "" ) { abd += ", descompressão brusca " + $("#abdomen-peritonitis").val(); }
      abd += ".";
      if( $("#abdomen-other").val() != "" ) {
        let other = $("#abdomen-other").val().trim();
        if (!/^.+\.$/.test(other)) { other += "."; }
        abd += " " + other.firstLettertoUpperCase();
      }

      o.push( abd );
    }
    // Murphy's Sign
    if( $("#exam-abdomen").is(":checked") && $("#murphy").val() != "" ) {
      o.push( "- Sinal de Murphy " + $("#murphy").val() + "." );
    }
    // McBurney's Sign
    if( $("#exam-abdomen").is(":checked") && $("#mcburney").val() != "" ) {
      o.push( "- Sinal de McBurney " + $("#mcburney").val() + "." );
    }
    // Giordano
    if( $("#exam-abdomen").is(":checked") && $("#giordano").val() != "" ) {
      o.push( "- Giordano " + $("#giordano").val() + "." );
    }
    // Rectum
    if( $("#exam-rectum").is(":checked") ) {
      o.push( "Reto:" );
      // Perineumscopy
      let perineum = "plicomas " + $("#plicoma").val() + ", hemorroidas externas ";
      if( $("#hemorrhoids-external").val() != "ausentes" ) {
        let desc = $("#hemorrhoids-external-desc").val().trim();
        perineum += $("#hemorrhoids-external").val() + (desc != "" ? " (" + desc + ")" : "");
      } else { perineum += $("#hemorrhoids-external").val(); }
      perineum += ", hemorroidas internas ";
      if( $("#hemorrhoids-internal").val() != "ausentes" ) {
        let desc = $("#hemorrhoids-internal-desc").val().trim();
        perineum += $("#hemorrhoids-internal").val() + (desc != "" ? " (" + desc + ")" : "");
      } else { perineum += $("#hemorrhoids-internal").val(); }
      if( $("#perineumscopy-other").val() != "" ) {
        let other = $("#perineumscopy-other").val().trim().split(",");
        other.forEach((e, i) => {
          other[i] = e.trim();
        });
        perineum += ", " + other.join(", ");
      }
      perineum += ".";
      o.push( "- Perioscopia: " + perineum );

      // Rectal Touch
      let rectum = "tônus do esfíncter anal inferior " + $("#rectum-tonus").val() + ", ampola retal ";
      if( $("#rectum-content").val() != "sem conteúdos tocáveis" ) {
        let desc = $("#rectum-content-desc").val().trim();
        if( $("#rectum-content").val() == "com" ) {
          rectum += $("#rectum-content").val() + (desc != "" ? " " + desc : " conteúdo não descrito");
        } else {
          rectum += $("#rectum-content").val() + (desc != "" ? " (" + desc + ")" : "");
        }
      } else { rectum += $("#rectum-content").val(); }
      rectum += ", dedo de luva ";
      if ($("#rectum-finger").val() == "com" ) {
        let desc = $("#rectum-finger-desc").val().trim();
        rectum += $("#rectum-finger").val() + (desc != "" ? " " + desc : " substância não descrita");
      } else { rectum += $("#rectum-finger").val(); }
      if( $("#rectum-other").val() != "" ) {
        let other = $("#rectum-other").val().trim().split(",");
        other.forEach((e, i) => {
          other[i] = e.trim();
        });
        rectum += ", " + other.join(", ");
      }
      rectum += ".";
      o.push( "- Toque Retal: " + rectum );
    }
    // Skin
    if( $("#exam-skin").is(":checked") ) {
      let skin = $("#skin").val().trim();
      if (!/^.+\.$/.test(skin)) { skin += "."; }
      o.push( "Pele: " + skin );
    }
    // Superior Members
    if( $("#exam-mmss").is(":checked") ) {
      var mmss = [];
      // Pulses
      if( $("#mmsspulse-strength").val() != "" ) {
        let pulse = "";
        if( $("#mmsspulse-strength").val() == "ausentes até aa. axilares" ) { pulse = $("#mmsspulse-strength").val(); }
        else { pulse = $("#mmsspulse-strength").val() + " e " + $("#mmsspulse-simmetry").val() + ", palpáveis a partir de aa. " + $("#mmsspulse-artery").val(); }
        mmss.push( "Pulsos " + pulse + "." );
      }
      // Skin turgor
      if ($("#mmssturgor").val() != "" ) {
        mmss.push( "Turgor cutâneo " + $("#mmssturgor").val() + "." );
      }
      // Perfusion
      if ($("#mmsstec").val() != "") {
        let tec = parseInt($("#mmsstec").val());
        if (tec < 3) {
          mmss.push("TEC<3s.");
        } else {
          mmss.push("TEC ~" + $("#mmsstec").val() + "s.");
        }
      }
      // Other
      if ($("#mmss-misc").val() != "") {
        let txt = $("#mmss-misc").val();
        if (!/^.+\.$/.test(txt)) { txt += "."; }
        mmss.push( txt );
      }
      // Output
      if( mmss.length > 0 ) { o.push( "MMSS: " + mmss.join(" ") ); }
    }
    // Inferior Members
    if( $("#exam-mmii").is(":checked") ) {
      let mmii = [];
      // Oedema
      var oedema = $("#oedema").val();
      switch (oedema) {
        case "Edema bilateral e simétrico":
        case "Edema exclusivo à direita":
        case "Edema exclusivo à esquerda":
          oedema += ", " + $("#oedema-grade1").val() + ".";
          break;
        case "Edema bilateral, maior à direita":
        case "Edema bilateral, maior à esquerda":
          oedema += ", " + $("#oedema-grade1").val() + " à direita e " + $("#oedema-grade2").val() + " à esquerda.";
          break;
        default:
          oedema += ".";
          break;
      }
      if( oedema != "." ) { mmii.push( oedema ); }
      // Calf Empasta
      if( $("#calf").val() != "" ) { mmii.push( "Empastamento de panturrilhas " + $("#calf").val() + "." ); }
      // Calf Circunferences
      if( $("#calf-right").val() != "" && $("#calf-right").val() != "" ) {
        mmii.push( "Circunferência de panturrilhas D=" + $("#calf-right").val() + "cm e E=" + $("#calf-left").val() + "cm." );
      }
      // Pulses
      if( $("#mmiipulse-strength").val() != "" ) {
        let pulse = "";
        if( $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ) { pulse = $("#mmiipulse-strength").val(); }
        else { pulse = $("#mmiipulse-strength").val() + " e " + $("#mmiipulse-simmetry").val() + ", palpáveis a partir de aa. " + $("#mmiipulse-artery").val(); }
        mmii.push( "Pulsos " + pulse + "." );
      }
      // Varicose Veins
      if( $("#varicose-right").val() != "" || $("#varicose-right").val() != "" ) {
        let varicose = [];
        if( $("#varicose-right").find(":selected").attr("data-degree") == $("#varicose-left").find(":selected").attr("data-degree") ) {
          let degree = parseInt( $("#varicose-right").find(":selected").attr("data-degree") );
          let varicose_degrees = [
            "ausentes bilateralmente (C0)",
            "presentes bilateralmente em grau C1 (varizes de pequeno calibre)",
            "presentes bilateralmente em grau C2 (varizes de grande calibre)",
            "presentes bilateralmente em grau C3 (varizes com edema)",
            "presentes bilateralmente em grau C4 (varizes e eczema de estase)",
            "presentes bilateralmente em grau C5 (úlcera varicosa cicatrizada)",
            "presentes bilateralmente em grau C6 (úlcera varicosa ativa)"
          ];
          varicose.push( varicose_degrees[ degree ] );
        } else {
          if( $("#varicose-right").val() != "" ) { varicose.push( $("#varicose-right").val() ); }
          if( $("#varicose-left").val() != "" ) { varicose.push( $("#varicose-left").val() ); }
        }
        if( varicose.length > 0 ) { mmii.push( "Varizes " + varicose.join(" e ") + "." ); }
      }
      // Other
      if ($("#mmii-misc").val() != "") {
        let txt = $("#mmii-misc").val();
        if (!/^.+\.$/.test(txt)) { txt += "."; }
        mmii.push( txt );
      }
      // Output
      if( mmii.length > 0 ) { o.push( "MMII: " + mmii.join(" ") ); }
    }
    // Cincinnati
    if( $("#neuro-cincinnati").is(":checked") ) {
      var data = [
        $("#neuro-cincinnati-eyebrow").val(),
        $("#neuro-cincinnati-mouth").val(),
        $("#neuro-cincinnati-mmss").val()
      ];
      o.push( "Cincinnati: " + data.join(", ") + "." );
    }

    // Neurological exam subsection
    if ( $("#neuro-main").is(":checked") ||
         $("#neuro-speech").is(":checked") ||
         $("#neuro-walk").is(":checked") ||
         $("#neuro-strength").is(":checked") ||
         $("#neuro-coord").is(":checked") ||
         $("#neuro-reflex").is(":checked") ||
         $("#neuro-feel").is(":checked") ||
         $("#neuro-other").is(":checked") ) {
      o.push("## Neurológico:");
    }
    if( $("#neuro-main").is(":checked") && $("#neuro-rass").val() != "" ) {
      var rass = "RASS " + $("#neuro-rass").val() + ".";
      o.push( rass );
    }
    if( $("#neuro-speech").is(":checked") ) {
      var speech = "";
      if ( $("#neuro-speech-desc").val() != "outro" ) { speech = $("#neuro-speech-desc").val(); }
      else { speech = $("#neuro-speech-other").val(); }
      o.push( "- Linguagem: " + speech + "." );
    }
    if ( $("#neuro-walk").is(":checked") ) {
      var walk = "";
      if ( $("#neuro-walk-desc").val() != "outro" ) { walk = $("#neuro-walk-desc").val(); }
      else { walk = $("#neuro-walk-other").val(); }
      o.push( "- Marcha: " + walk + "." );

      if ( $("#neuro-romberg").val() != "" ) { o.push( "- Equilíbrio: " + $("#neuro-romberg").val() + "." ); }
    }
    if( $("#neuro-strength").is(":checked") ) {
      var params = [];
      $(".neuro-strength-param").each(function() {
        if ( $(this).val() != "" ) {
          var str = $(this).val();
          var mod_id = $(this).attr("id") + "-mod";
          var mod = $("#" + mod_id).val();
          var name = $(this).attr("data-name") + " " + $(this).attr("data-side");
          params.push( "  - " + name + ": " + str + mod );
        }
      });
      o.push( "- Forças:\n" + params.join(";\n") + "." );
    }
    if ( $("#neuro-coord").is(":checked") ) {
      var params = [];
      // Dysdiadochokinesis
      if ( $("#neuro-coord-dysdiadochokinesis-right").val() != "" || $("#neuro-coord-dysdiadochokinesis-left").val() != "" ) {
        if ( $("#neuro-coord-dysdiadochokinesis-right").val() == $("#neuro-coord-dysdiadochokinesis-left").val() ) {
          params.push("  - Disdiadococinesia: " + $("#neuro-coord-dysdiadochokinesis-right").val() + " bilateralmente");
        } else if ( $("#neuro-coord-dysdiadochokinesis-right").val() == "" ) {
          params.push("  - Disdiadococinesia: " + $("#neuro-coord-dysdiadochokinesis-left").val() + " à esquerda");
        } else if ( $("#neuro-coord-dysdiadochokinesis-left").val() == "" ) {
          params.push("  - Disdiadococinesia: " + $("#neuro-coord-dysdiadochokinesis-right").val() + " à direita");
        } else {
          params.push(
            "  - Disdiadococinesia: " +
            $("#neuro-coord-dysdiadochokinesis-right").val() +
            " à direita e " +
            $("#neuro-coord-dysdiadochokinesis-left").val() +
            " à esquerda"
          );
        }
      }
      // Index-Naso
      if ( $("#neuro-coord-indexnaso-right").val() != "" || $("#neuro-coord-indexnaso-left").val() != "" ) {
        if ( $("#neuro-coord-indexnaso-right").val() == $("#neuro-coord-indexnaso-left").val() ) {
          params.push("  - Índex-Nariz: " + $("#neuro-coord-indexnaso-right").val() + " bilateralmente");
        } else if ( $("#neuro-coord-indexnaso-right").val() == "" ) {
          params.push("  - Índex-Nariz: " + $("#neuro-coord-indexnaso-left").val() + " à esquerda");
        } else if ( $("#neuro-coord-indexnaso-left").val() == "" ) {
          params.push("  - Índex-Nariz: " + $("#neuro-coord-indexnaso-right").val() + " à direita");
        } else {
          params.push(
            "  - Índex-Nariz: " +
            $("#neuro-coord-indexnaso-right").val() +
            " à direita e " +
            $("#neuro-coord-indexnaso-left").val() +
            " à esquerda"
          );
        }
      }
      // Ankle-Knee
      if ( $("#neuro-coord-leg-right").val() != "" || $("#neuro-coord-leg-left").val() != "" ) {
        if ( $("#neuro-coord-leg-right").val() == $("#neuro-coord-leg-left").val() ) {
          params.push("  - Calcanhar-Joelho: " + $("#neuro-coord-leg-right").val() + " bilateralmente");
        } else if ( $("#neuro-coord-leg-right").val() == "" ) {
          params.push("  - Calcanhar-Joelho: " + $("#neuro-coord-leg-left").val() + " à esquerda");
        } else if ( $("#neuro-coord-leg-left").val() == "" ) {
          params.push("  - Calcanhar-Joelho: " + $("#neuro-coord-leg-right").val() + " à direita");
        } else {
          params.push(
            "  - Calcanhar-Joelho: " +
            $("#neuro-coord-leg-right").val() +
            " à direita e " +
            $("#neuro-coord-leg-left").val() +
            " à esquerda"
          );
        }
      }
      // Defense
      if ( $("#neuro-coord-defense-right").val() != "" || $("#neuro-coord-defense-left").val() != "" ) {
        if ( $("#neuro-coord-defense-right").val() == $("#neuro-coord-defense-left").val() ) {
          params.push("  - Rechaço: " + $("#neuro-coord-defense-right").val() + " bilateralmente");
        } else if ( $("#neuro-coord-defense-right").val() == "" ) {
          params.push("  - Rechaço: " + $("#neuro-coord-defense-left").val() + " à esquerda");
        } else if ( $("#neuro-coord-defense-left").val() == "" ) {
          params.push("  - Rechaço: " + $("#neuro-coord-defense-right").val() + " à direita");
        } else {
          params.push(
            "  - Rechaço: " +
            $("#neuro-coord-defense-right").val() +
            " à direita e " +
            $("#neuro-coord-defense-left").val() +
            " à esquerda"
          );
        }
      }
      o.push( "- Coordenação:\n" + params.join(";\n") + "." );
    }
    if( $("#neuro-reflex").is(":checked") ) {
      var params = [];
      // Patellar
      if ( $("#neuro-reflex-patella-right").val() != "" || $("#neuro-reflex-patella-left").val() != "" ) {
        if ( $("#neuro-reflex-patella-right").val() == $("#neuro-reflex-patella-left").val() ) {
          params.push("  - Patelar: " + $("#neuro-reflex-patella-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-patella-right").val() == "" ) {
          params.push("  - Patelar: " + $("#neuro-reflex-patella-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-patella-left").val() == "" ) {
          params.push("  - Patelar: " + $("#neuro-reflex-patella-right").val() + " à direita");
        } else {
          params.push(
            "  - Patelar: " +
            $("#neuro-reflex-patella-right").val() +
            " à direita e " +
            $("#neuro-reflex-patella-left").val() +
            " à esquerda"
          );
        }
      }
      // Aquileu
      if ( $("#neuro-reflex-aquileu-right").val() != "" || $("#neuro-reflex-aquileu-left").val() != "" ) {
        if ( $("#neuro-reflex-aquileu-right").val() == $("#neuro-reflex-aquileu-left").val() ) {
          params.push("  - Aquileu: " + $("#neuro-reflex-aquileu-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-aquileu-right").val() == "" ) {
          params.push("  - Aquileu: " + $("#neuro-reflex-aquileu-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-aquileu-left").val() == "" ) {
          params.push("  - Aquileu: " + $("#neuro-reflex-aquileu-right").val() + " à direita");
        } else {
          params.push(
            "  - Aquileu: " +
            $("#neuro-reflex-aquileu-right").val() +
            " à direita e " +
            $("#neuro-reflex-aquileu-left").val() +
            " à esquerda"
          );
        }
      }
      // Radial
      if ( $("#neuro-reflex-radius-right").val() != "" || $("#neuro-reflex-radius-left").val() != "" ) {
        if ( $("#neuro-reflex-radius-right").val() == $("#neuro-reflex-radius-left").val() ) {
          params.push("  - Radial: " + $("#neuro-reflex-radius-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-radius-right").val() == "" ) {
          params.push("  - Radial: " + $("#neuro-reflex-radius-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-radius-left").val() == "" ) {
          params.push("  - Radial: " + $("#neuro-reflex-radius-right").val() + " à direita");
        } else {
          params.push(
            "  - Radial: " +
            $("#neuro-reflex-radius-right").val() +
            " à direita e " +
            $("#neuro-reflex-radius-left").val() +
            " à esquerda"
          );
        }
      }
      // Bicipital
      if ( $("#neuro-reflex-biceps-right").val() != "" || $("#neuro-reflex-biceps-left").val() != "" ) {
        if ( $("#neuro-reflex-biceps-right").val() == $("#neuro-reflex-biceps-left").val() ) {
          params.push("  - Bicipital: " + $("#neuro-reflex-biceps-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-biceps-right").val() == "" ) {
          params.push("  - Bicipital: " + $("#neuro-reflex-biceps-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-biceps-left").val() == "" ) {
          params.push("  - Bicipital: " + $("#neuro-reflex-biceps-right").val() + " à direita");
        } else {
          params.push(
            "  - Bicipital: " +
            $("#neuro-reflex-biceps-right").val() +
            " à direita e " +
            $("#neuro-reflex-biceps-left").val() +
            " à esquerda"
          );
        }
      }
      // Tricipital
      if ( $("#neuro-reflex-triceps-right").val() != "" || $("#neuro-reflex-triceps-left").val() != "" ) {
        if ( $("#neuro-reflex-triceps-right").val() == $("#neuro-reflex-triceps-left").val() ) {
          params.push("  - Tricipital: " + $("#neuro-reflex-triceps-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-triceps-right").val() == "" ) {
          params.push("  - Tricipital: " + $("#neuro-reflex-triceps-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-triceps-left").val() == "" ) {
          params.push("  - Tricipital: " + $("#neuro-reflex-triceps-right").val() + " à direita");
        } else {
          params.push(
            "  - Tricipital: " +
            $("#neuro-reflex-triceps-right").val() +
            " à direita e " +
            $("#neuro-reflex-triceps-left").val() +
            " à esquerda"
          );
        }
      }
      // Babinski
      if ( $("#neuro-reflex-plantar-right").val() != "" || $("#neuro-reflex-plantar-left").val() != "" ) {
        if ( $("#neuro-reflex-plantar-right").val() == $("#neuro-reflex-plantar-left").val() ) {
          params.push("  - Cutâneo-Plantar: " + $("#neuro-reflex-plantar-right").val() + " bilateralmente");
        } else if ( $("#neuro-reflex-plantar-right").val() == "" ) {
          params.push("  - Cutâneo-Plantar: " + $("#neuro-reflex-plantar-left").val() + " à esquerda");
        } else if ( $("#neuro-reflex-plantar-left").val() == "" ) {
          params.push("  - Cutâneo-Plantar: " + $("#neuro-reflex-plantar-right").val() + " à direita");
        } else {
          params.push(
            "  - Cutâneo-Plantar: " +
            $("#neuro-reflex-plantar-right").val() +
            " à direita e " +
            $("#neuro-reflex-plantar-left").val() +
            " à esquerda"
          );
        }
      }
      o.push( "- Reflexos:\n" + params.join(";\n") + "." );
    }
    if ( $("#neuro-feel").is(":checked") ) {
      var params = [];
      $(".neuro-feel-item").each(function() {
        var uuid = $(this).attr("id");
        if ( $("#type-" + uuid).val() != "" &&
             $("#topography-" + uuid).val().trim() != "" &&
             (
               $("#right-" + uuid).val() != "" ||
               $("#left-" + uuid).val() != ""
             ) ) {
          if ( $("#right-" + uuid).val() == $("#left-" + uuid).val() ) {
            params.push(
              "  - " +
              $("#type-" + uuid).val() +
              " de " +
              $("#topography-" + uuid).val().trim() +
              ": " +
              $("#right-" + uuid).val() +
              " bilateralmente"
            );
          } else if ( $("#left-" + uuid).val() == "" ) {
            params.push(
              "  - " +
              $("#type-" + uuid).val() +
              " de " +
              $("#topography-" + uuid).val().trim() +
              ": " +
              $("#right-" + uuid).val() +
              " à direita"
            );
          } else if ( $("#right-" + uuid).val() == "" ) {
            params.push(
              "  - " +
              $("#type-" + uuid).val() +
              " de " +
              $("#topography-" + uuid).val().trim() +
              ": " +
              $("#left-" + uuid).val() +
              " à esquerda"
            );
          } else {
            params.push(
              "  - " +
              $("#type-" + uuid).val().trim() +
              " de " +
              $("#topography-" + uuid).val().trim() +
              ": " +
              $("#right-" + uuid).val().trim() +
              " à direita e " +
              $("#left-" + uuid).val().trim() +
              " à esquerda"
            );
          }
        }
      });
      o.push( "- Sensibilidades:\n" + params.join(";\n") + "." );
    }
    if ( $("#neuro-other").is(":checked") ) {
      var params = [];
      $(".neuro-other-item").each(function() {
        var uuid = $(this).attr("id");
        if ( $("#title-" + uuid).val().trim() != "" && $("#desc-" + uuid).val().trim() != "" ) {
          o.push(
            "- " +
            $("#title-" + uuid).val().trim() +
            ": " +
            $("#desc-" + uuid).val().trim() +
            "."
          );
        }
      });
    }

    $("#output-o").val( o.join("\n") );
  });
});

function humanList(arr) {
  switch(arr.length) {
    case 0:
      return "nenhum sintoma";
      break;
    case 1:
      return arr.join("");
      break;
    case 2:
      return arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      var r = arr.join(", ");
      r += " e " + last;
      return r;
  }
}

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

  // Close emergency modal
  $("#emergency-done").on("click", function() {
    $("#emergency").removeClass("is-active");
  });

  // Set companion information
  $("#companion").on("change", function() {
    if ( $(this).is(":checked") ) {
      $("#companion-name, #companion-relation, #companion-func, #companion-font").prop("disabled", false);
    } else {
      $("#companion-name, #companion-relation, #companion-func, #companion-font").prop("disabled", true);
    }
  });

  // Select evaluation type
  // Select first evaluation
  $("#time-first").on("click", function() {
    if ( !$(this).hasClass("is-active") ) {
      // Remove reevaluation active statuses
      $("#time-reeval").removeClass("is-active");
      $(".eval-reeval").addClass("is-hidden");
      // Add first evaluation active statuses
      $(this).addClass("is-active");
      $(".eval-first").removeClass("is-hidden");
      $("#time-current").val("first");
    }
  });
  // Select reevaluation
  $("#time-reeval").on("click", function() {
    if ( !$(this).hasClass("is-active") ) {
      // Remove reevaluation active statuses
      $("#time-first").removeClass("is-active");
      $(".eval-first").addClass("is-hidden");
      // Add first evaluation active statuses
      $(this).addClass("is-active");
      $(".eval-reeval").removeClass("is-hidden");
      $("#time-current").val("reeval");
    }
  });
  // Select reevaluation type
  $("#evol").on("change", function() {
    if ( $(this).val() == "resolução completa dos sintomas" ) {
      $("#reeval-symps").addClass("is-hidden");
      $("#reeval-symps-title").html("");
    } else {
      $("#reeval-symps").removeClass("is-hidden");
      if ( $(this).val() == "melhora dos sintomas, mantendo: " ) { $("#reeval-symps-title").html("Mantém"); }
      else { $("#reeval-symps-title").html("Pioraram"); }
    }
  });

  // Select headache descriptors
  $("#symp-headache").on("change", function() {
    if ( $(this).is(":checked") ) { $("#headache-desc, #headache-location, #headache-side, #headache-eye, #headache-fono, #headache-foto, #headache-start").prop("disabled", false); }
    else {
      $("#headache-desc, #headache-location, #headache-side, #headache-eye, #headache-fono, #headache-foto, #headache-start").prop("disabled", true);
    }
  });
  // Select fever descriptors
  $("#symp-fever").on("change", function() {
    if ( $(this).is(":checked") ) { $("#fever-measure, #fever-freq, #fever-other, #fever-start, #fever-end").prop("disabled", false); }
    else {
      $("#fever-measure, #fever-freq, #fever-other, #fever-start, #fever-end").prop("disabled", true);
      $("#fever-measure").val("não aferida").trigger("change");
    }
  });
  $("#fever-measure").on("change", function() {
    if ( $(this).val() == "aferida, de até " ) { $("#fever-max").prop("disabled", false); }
    else { $("#fever-max").prop("disabled", true).val(""); }
  });

  // Set symptoms' day notice
  $("#symp-start").on("change", function() {
    if ( $(this).val() != "" ) {
      var days = $(this).val() + "T00:00:00-0300";
      days = new Date(days);
      days = deltaDays(days);
      $("#day").html( days );
    }
  });

  // Enable pregnancy age
  $("#pregnancy").on("change", function() {
    if( $("#pregnancy").is(":checked") ) {
      $("#preg-w, #preg-d").prop("disabled", false);
      $("#preg-w").focus();
    } else {
      $("#preg-w, #preg-d")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable allergy descrition
  $("input[name='allergy']").on("change", function() {
    if( $("input[name='allergy']:checked").val() == "true" ) {
      $("#allergy-drug")
        .prop("disabled", false)
        .focus();
    } else {
      $("#allergy-drug")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable eGFR calculation
  $("#egfr-method").on("change", function () {
    if ($(this).val() == "") {
      $("#egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", true);
      $("#egfr-age, #egfr-weight, #egfr-result")
        .val("");
      $("#egfr-sex")
        .val("f");
      $("#egfr-ethnicity")
        .val("true");
      $("#creatinine, #egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight")
        .off();
    } else if ($(this).val() == "ckdepi") {
      $("#egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", false);
      $("#creatinine, #egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight")
        .off()
        .on("change input", function () {
          if ($("#egfr-sex").val() != "" &&
            $("#egfr-age").val() != "" &&
            $("#egfr-weight").val() != "" &&
            $("#creatinine").val() != "") {
            let sex = $("#egfr-sex").val();
            let ethnicity = ($("#egfr-ethnicity").val() == "true") ? true : false;
            let age = parseFloat($("#egfr-age").val());
            let weight = parseFloat($("#egfr-weight").val());
            let cr = parseFloat($("#creatinine").val());
            $("#egfr-result").val(getCKD(age, weight, sex, ethnicity, cr));
          }
        })
        .trigger("change");
    } else {
      $("#egfr-sex, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", false);
      $("#creatinine, #egfr-sex, #egfr-age, #egfr-weight")
        .off()
        .on("change input", function () {
          if ($("#egfr-sex").val() != "" &&
            $("#egfr-age").val() != "" &&
            $("#egfr-weight").val() != "" &&
            $("#creatinine").val() != "") {
            let sex = $("#egfr-sex").val();
            let age = parseFloat($("#egfr-age").val());
            let weight = parseFloat($("#egfr-weight").val());
            let cr = parseFloat($("#creatinine").val());
            $("#egfr-result").val(getCockroft(age, weight, sex, cr));
          }
        })
        .trigger("change");
      $("#egfr-ethnicity")
        .attr("disabled", true)
        .val("true");
    }
  });
  // Autocalculate Bilirubin
  $("#bt, #bd, #bi").on("change input", function () {
    let bt = $("#bt").val() != "" ? parseFloat($("#bt").val()) : "";
    let bd = $("#bd").val() != "" ? parseFloat($("#bd").val()) : "";
    let bi = $("#bi").val() != "" ? parseFloat($("#bi").val()) : "";
    if (bt != "" && bd != "") { $("#bi").val((bt - bd).toFixed(2)); }
    else if (bt != "" && bi != "") { $("#bd").val((bt - bi).toFixed(2)); }
    else if (bd != "" && bi != "") { $("#bt").val((bd + bi).toFixed(2)); }
  });
  // Clear Bilirubin
  $("#btf-clear").on("click", function () {
    $("#bt, #bd, #bi").val("");
    $("#bt").trigger("focus");
  });
  // Sum neutrophile percent totals
  $("#hmg-segm-percent, #hmg-bast-percent, #hmg-metamyelocyst-percent, #hmg-myelocyst-percent, #hmg-promyelocyst-percent, #hmg-myeloblast-percent, #hmg-blast-percent").on("change input", function() {
    let total = 0.0;
    total += parseFloat( $("#hmg-segm-percent").val() == "" ? "0.0" : $("#hmg-segm-percent").val() );
    total += parseFloat( $("#hmg-bast-percent").val() == "" ? "0.0" : $("#hmg-bast-percent").val() );
    total += parseFloat( $("#hmg-metamyelocyst-percent").val() == "" ? "0.0" : $("#hmg-metamyelocyst-percent").val() );
    total += parseFloat( $("#hmg-myelocyst-percent").val() == "" ? "0.0" : $("#hmg-myelocyst-percent").val() );
    total += parseFloat( $("#hmg-promyelocyst-percent").val() == "" ? "0.0" : $("#hmg-promyelocyst-percent").val() );
    total += parseFloat( $("#hmg-myeloblast-percent").val() == "" ? "0.0" : $("#hmg-myeloblast-percent").val() );
    total += parseFloat( $("#hmg-blast-percent").val() == "" ? "0.0" : $("#hmg-blast-percent").val() );
    $("#hmg-neutro-percent").val( total );
  });
  // Sum neutrophile absolute totals
  $("#hmg-segm-abs, #hmg-bast-abs, #hmg-metamyelocyst-abs, #hmg-myelocyst-abs, #hmg-promyelocyst-abs, #hmg-myeloblast-abs, #hmg-blast-abs").on("change input", function() {
    let total = 0.0;
    total += parseFloat( $("#hmg-segm-abs").val() == "" ? "0.0" : $("#hmg-segm-abs").val() );
    total += parseFloat( $("#hmg-bast-abs").val() == "" ? "0.0" : $("#hmg-bast-abs").val() );
    total += parseFloat( $("#hmg-metamyelocyst-abs").val() == "" ? "0.0" : $("#hmg-metamyelocyst-abs").val() );
    total += parseFloat( $("#hmg-myelocyst-abs").val() == "" ? "0.0" : $("#hmg-myelocyst-abs").val() );
    total += parseFloat( $("#hmg-promyelocyst-abs").val() == "" ? "0.0" : $("#hmg-promyelocyst-abs").val() );
    total += parseFloat( $("#hmg-myeloblast-abs").val() == "" ? "0.0" : $("#hmg-myeloblast-abs").val() );
    total += parseFloat( $("#hmg-blast-abs").val() == "" ? "0.0" : $("#hmg-blast-abs").val() );
    $("#hmg-neutro-abs").val( total );
  });

  // Change febrile state when fever is input
  $("#ssvv-temp").on("input change", function() {
    var temp = parseFloat( $("#ssvv-temp").val() );
    if( temp >= 37.8 ) { $("#fever-yes").prop("checked", true); }
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
  // PAM
  $("#ssvv-pas, #ssvv-pad").on("input change", function() {
    let pas = parseInt($("#ssvv-pas").val());
    let pad = parseInt($("#ssvv-pad").val());
    let pam = ((pas*2)+pad)/3;
    $("#ssvv-pam").val(pam.toFixed(0));
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

  // Calculate expansion volume
  $("#ssvv-weight, #comorb-6").on("input change", function() {
    let vol = 1500;
    if ($("#ssvv-weight").val() != "") {
      let w = parseFloat($("#ssvv-weight").val());
      w = Math.round(w);
      let hf = $("#comorb-6").is(":checked");
      let rate = 20; // 1st + 2nd hours = 20mL/kg/2h. See CHANGELOG for reasoning.
      vol = w * rate * (hf ? 0.5 : 1);
      vol = Math.round(vol);
    }
    $("#plan-now-expansion-volume").html(vol.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  });

  // Build output:
  $("#button-run").on("click", function() {
    let sr_header = $("#sr-header").val();
    let eval = $("#time-current").val();
    let out = ["# " + sr_header + " #"];

    // Subjective
    out.push(get_S(eval));

    // Objective / Physical Examination
    out.push("");
    out.push(get_O());
    // Objective / Laboratory
    if (eval == "reeval") {
      out.push("");
      out.push(get_O_Labs());
    }

    // Evaluation
    out.push("");
    let a = get_A(eval);
    out.push(a[0]);

    // Plans
    out.push("");
    out.push(get_P(eval, a[1]));

    // Output
    $("#output").val( out.join("\n") );
  });
});

function deltaDays(date) {
  var today = new Date();
  var begining = date;
  var days = parseInt((today - begining) / (1000 * 60 * 60 * 24));
  return days;
}
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

function get_companion() {
  var pronoun = $("#pronouns").val();
  var comp = "";
  if ( $("#companion").is(":checked") ) {
    comp = "# Vem ao PS " + $("#companion-func").val() + " por " + $("#companion-name").val();
    if ( $("#companion-relation").val() != "" ) { comp += " (" + $("#companion-relation").val() + ")"; }
    comp += ".\n# Fonte: " + $("#companion-font").val() + "."
  }
  return comp.replaceAll("[[PRONOUN]]", pronoun);
}

function get_S(eval_time) {
  let s = [];

  if (eval_time == "first") {
    // D0
    let d0;
    if ($("#symp-start").val() != "") {
      d0 = new Date($("#symp-start").val() + "T00:00:00-0300");
    } else {
      d0 = new Date();
    }
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    // Companion info
    let comp = get_companion();
    if (comp != "") { s.push(comp); }

    // Symptoms
    let symps = [];
    // Headache (basic)
    if ($("#symp-headache").is(":checked")) { symps.push("cefaleia"); }
    // Fever (basic)
    if ($("#symp-fever").is(":checked")) { symps.push("febre"); }
    // "Lesser" symptoms
    if ($("#symp-1").is(":checked")) { symps.push("mialgia"); }
    if ($("#symp-2").is(":checked")) { symps.push("artralgia"); }
    if ($("#symp-3").is(":checked")) { symps.push("dorsalgia"); }
    if ($("#symp-4").is(":checked")) { symps.push("dor em MMII"); }
    if ($("#symp-5").is(":checked")) { symps.push("dor em MMSS"); }
    if ($("#symp-6").is(":checked")) { symps.push("náuseas"); }
    if ($("#symp-7").is(":checked")) { symps.push("vômitos"); }
    if ($("#symp-8").is(":checked")) { symps.push("diarreia"); }
    if ($("#symp-9").is(":checked")) { symps.push("astenia"); }
    if ($("#symp-10").is(":checked")) { symps.push("fraqueza"); }
    if ($("#symp-11").is(":checked")) { symps.push("exantemas"); }
    if ($("#symp-12").is(":checked")) { symps.push("equimoses"); }
    s.push("Paciente vem ao PS referindo " + humanList(symps) + ".");
    // Headache
    if ($("#symp-headache").is(":checked")) {
      let headache = "Caracteriza cefaleia como";
      if ($("#headache-desc").val() != "mal-caracterizada") { headache += " em"; }
      headache += " " + $("#headache-desc").val();
      headache += " " + $("#headache-location").val();
      headache += " " + $("#headache-side").val();
      headache += $("#headache-eye").val();
      if ($("#headache-fono").val() == "true" || $("#headache-foto").val() == "true") {
        if ($("#headache-fono").val() == "true" && $("#headache-foto").val() == "true") {
          headache += ", com fono- e fotofobia associadas";
        } else {
          if ($("#headache-fono").val() == "true") {
            headache += ", como fonofobia apenas associada";
          } else {
            headache += ", como fotofobia apenas associada";
          }
        }
      } else {
        headache += ", sem fono- ou fotofobia associadas";
      }
      let headache_start = new Date($("#headache-start").val());
      if (headache_start.toISOString().substring(0, 10) != d0.toISOString().substring(0, 10)) {
        headache += ", iniciada " + headache_start.toLocaleDateString("pt-BR", options);
      } else {
        headache += ", iniciada junto de demais sintomas"
      }
      s.push(headache + ".");
    }
    // Fever
    if ($("#symp-fever").is(":checked")) {
      let fever = "Caracteriza febre como ";
      fever += $("#fever-measure").val();
      if ($("#fever-measure").val() == "aferida, de até ") {
        fever += $("#fever-max").val() + "°C";
      }
      fever += ", " + $("#fever-freq").val();
      if ($("#fever-other").val() != "") {
        fever += ", " + $("#fever-other").val();
      }
      let fever_start = new Date($("#fever-start").val());
      if ($("#fever-freq").val() == "com pico único") {
        fever += ", pico único este " + fever_start.toLocaleDateString("pt-BR", options);
      } else {
        let fever_end = null;
        if ($("#fever-end").val() != "") {
          fever_end = new Date($("#fever-end").val());
        }
        if (fever_start.toISOString().substring(0, 10) != d0.toISOString().substring(0, 10)) {
          fever += ", iniciada " + fever_start.toLocaleDateString("pt-BR", options);
        } else {
          fever += ", iniciada junto de demais sintomas"
        }
        if (fever_end === null || fever_end.toISOString().substring(0, 10) == (new Date()).toISOString().substring(0, 10)) {
          fever += " e presente até o dia de hoje";
        } else {
          fever += ", com último pico " + fever_end.toLocaleDateString("pt-BR", options);
        }
      }
      s.push(fever + ".");
    }
    // Start date
    s.push("Refere que o primeiro dos sintomas iniciou em " + d0.toLocaleDateString("pt-BR", options) + ".");
    // Misc anamnesis
    let misc = $("#symp-misc").val().trim();
    if (misc != "") {
      misc += /^.+[\.\!\?]$/.test(misc) ? "" : ".";
      s.push(misc);
    }
    // Commorbidities
    let comorbs = get_Comorbs();
    if (comorbs.length > 0) {
      s.push("# AP: " + humanList(comorbs) + ".");
    } else {
      s.push("# AP: Nega comorbidades conhecidas.");
    }
    // Pregnancy
    if ($("#pregnancy").is(":checked")) {
      let preg = "# Gestação: refere estar gestante";
      if ($("#preg-w").val() != "" || $("#preg-d").val() != "") {
        let preg_w = $("#preg-w").val();
        preg_w = (preg_w == "" ? 0 : preg_w);
        let preg_d = $("#preg-d").val();
        preg_d = (preg_d == "" ? 0 : preg_d);
        preg += " de " + preg_w + "sem e " + preg_d + "d";
      }
      s.push(preg + ".");
    }
    // Allergies
    let allergies = "# Nega alergias medicamentosas conhecidas.";
    if ($("#allergy-yes").is(":checked")) {
      allergies = $("#allergy-drug").val().split(",");
      allergies = allergies.map(s => s.trim());
      allergies = "# Refere " + (allergies.length > 1 ? "alergias medicamentosas conhecidas" : "alergia medicamentosa conhecida") + " apenas a " + humanList(allergies) + ".";
    }
    s.push(allergies);
    // Work
    let pronoun = $("#pronouns").val();
    if ($("#work").val() != "") {
      s.push("# Trabalho: " + $("#work").val().replaceAll("[[PRONOUN]]", pronoun) + ".");
    }

    // Days info
    s.push("");
    s.push("# D0 = " + d0.toLocaleDateString("pt-BR", options) + " (hoje D" + deltaDays(d0) + ")");
    // Alarm Signs
    s.push("# Sinais de Alarme:");
    s.push("- Dor Abdominal: " + $("#alarm-abdpain").val() + ";");
    s.push("- Vômitos Persistentes: " + $("#alarm-emesis").val() + ";");
    s.push("- Anasarca: " + $("#alarm-oedema").val() + ";");
    s.push("- Pré-Síncope: " + $("#alarm-lipotimia").val() + ";");
    s.push("- Hepatomegalia: " + $("#alarm-liver").val() + ";");
    s.push("- Sangramentos Mucocutâneos: " + $("#alarm-bleed").val() + ";");
    s.push("- Letargia/RNC: " + $("#alarm-letargy").val() + ";");
    s.push("- Aumento de Ht: " + $("#alarm-ht").val() + ".");
  } else {
    s.push("Refere " + $("#evol").val() + ".");
  }

  return s.join("\n");
}
function get_Comorbs() {
  let comorbs = [];
  if ($("#comorb-1").is(":checked")) { comorbs.push("HAS"); }
  if ($("#comorb-2").is(":checked")) { comorbs.push("DM"); }
  if ($("#comorb-3").is(":checked")) { comorbs.push("Asma"); }
  if ($("#comorb-4").is(":checked")) { comorbs.push("DPOC"); }
  if ($("#comorb-5").is(":checked")) { comorbs.push("DRC"); }
  if ($("#comorb-6").is(":checked")) { comorbs.push("IC"); }
  if ($("#comorb-7").is(":checked")) { comorbs.push("Obesidade"); }
  if ($("#comorb-8").is(":checked")) { comorbs.push("Lactante"); }
  if ($("#comorb-age").is(":checked")) { comorbs.push("Idade >65a"); }
  if ($("#comorb-other").val() != "") {
    let other = $("#comorb-other").val().split(",");
    $.each(other, function (i, v) {
      if (v.trim() != "") {
        comorbs.push(v.trim());
      }
    });
  }
  return comorbs;
}

function get_O() {
  // Objective / Physical Examination
  let o = ["# EF:"];
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
    (
      $("#neuro-gcs-eye").val() != "" &&
      $("#neuro-gcs-speech").val() != "" &&
      $("#neuro-gcs-muscle").val() != ""
    ) ||
    $("#orientation-time").val() != "" ||
    $("#orientation-space").val() != ""
  ) {
    var ssvv = [];
    if( $("#ssvv-sat").val() != "" ) { ssvv.push( "Sat. O2 = " + $("#ssvv-sat").val() + "% " + $("#ssvv-sat-type").val() ); }
    if( $("#ssvv-pulse").val() != "" ) { ssvv.push( "Pulso = " + $("#ssvv-pulse").val() + "bpm" ); }
    if( $("#ssvv-pas").val() != "" ) { ssvv.push( "PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pad").val() + "mmHg" ); }
    if( $("#ssvv-fr").val() != "" ) { ssvv.push( "FR = " + $("#ssvv-fr").val() + "irpm" ); }
    if( $("#ssvv-temp").val() != "" ) { ssvv.push( "Temp = " + $("#ssvv-temp").val() + "°C (" + $("#ssvv-temp-desc").val() + ")" ); }
    if( $("#ssvv-weight").val() != "" ) { ssvv.push( "Peso = " + $("#ssvv-weight").val() + "kg" ); }
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
    if( $("#ssvv-pain").val() != "" ) { ssvv.push( "Dor (EVA) = " + $("#ssvv-pain").val() + "/10" ); }
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
      ssvv.push( "GCS = " + gcscore + (gcscore == 15 ? "" : " (" + gcs.join(", ") + ")") );
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
    o.push( ssvv.join(" | ") );
  }

  // Face
  if ($("#exam-face").is(":checked") ) {
    let face = $("#face").val().trim();
    if( face == "other" ) { face = $("#face-other").val(); }
    o.push( "Fácies " + face + "." );
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

  return o.join("\n");
}
function get_O_Labs() {
  let res = ["# Labs"];

  // Renal Function
  if ( $("#urea").val() != "" || $("#creatinine").val() != "" ) {
    let urea = parseLab($("#urea").val(), true, 1);
    let creatinine = parseLab($("#creatinine").val(), true, 2);
    res.push( "- Ur/Cr " + urea + "/" +  creatinine );
  }
  if ( $("#egfr-result").val() != "" ) {
    let method = $("#egfr-method").val() == "cockroft" ? "Cockroft-Gault" : "CKD-EPI";
    let unit = $("#egfr-method").val() == "cockroft" ? "mL/min" : "mL/min/1.73m²";
    res.push( "- eGFR (" + method + ") " + $("#egfr-result").val() + " " + unit );
  }
  if ( $("#na").val() != "" || $("#k").val() != "" ) {
    let na = parseLab($("#na").val(), false);
    let k = parseLab($("#k").val(), true, 1);
    res.push("- Na/K " + na + "/" + k );
  }
  // Hepatogram
  if ( $("#tgo").val() != "" || $("#tgp").val() != "" ) {
    let tgo = $("#tgo").val() == "" ? "--" : $("#tgo").val();
    let tgp = $("#tgp").val() == "" ? "--" : $("#tgp").val();
    res.push( "- TGO/TGP " + tgo + "/" + tgp );
  }
  if ( $("#bt").val() != "" && $("#bd").val() != "" && $("#bi").val() != "" ) {
    res.push("- BT/D/I " + $("#bt").val() + "/" + $("#bd").val() + "/" + $("#bi").val() );
  }
  // Hemogram
  let hmg = [];
  if (
    $("#hmg-hb").val() != "" &&
    $("#hmg-ht").val() != "" &&
    $("#hmg-leuco").val() != "" &&
    $("#hmg-plat").val() != ""
  ) {
    hmg.push( "- HMG:" );
    // Red Series
    let red = $("#hmg-red-dx").val() != "" ? " (" + $("#hmg-red-dx").val() + ")" : "";
    hmg.push( "  - Série vermelha" + red );
    hmg.push( "    - Hb " + $("#hmg-hb").val() );
    hmg.push( "    - Ht " + $("#hmg-ht").val() + "%" );
    if ( $("#hmg-vcm").val() != "" ) { hmg.push( "    - VCM " + $("#hmg-vcm").val() ); }
    if ( $("#hmg-hcm").val() != "" ) { hmg.push( "    - HCM " + $("#hmg-hcm").val() ); }
    if ( $("#hmg-rdw").val() != "" ) { hmg.push( "    - RDW " + $("#hmg-rdw").val() + "%" ); }
    // White Series
    let white = $("#hmg-white-dx").val() != "" ? " (" + $("#hmg-white-dx").val() + ")" : "";
    hmg.push( "  - Série branca" + white );
    hmg.push( "    - Leuco " + $("#hmg-leuco").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") );
    let neutro_abs = $("#hmg-neutro-abs").val() != "" ? " (" + $("#hmg-neutro-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
    hmg.push( "    - Neutro " + $("#hmg-neutro-percent").val() + "%" + neutro_abs );
    if ( $("#hmg-segm-percent").val() != "" && ( $("#hmg-blast-percent").val() != "" || $("#hmg-myeloblast-percent").val() != "" || $("#hmg-promyelocyst-percent").val() != "" || $("#hmg-myelocyst-percent").val() != "" || $("#hmg-metamyelocyst-percent").val() != "" || $("#hmg-bast-percent").val() != "" ) ) {
      let segm_abs = $("#hmg-segm-abs").val() != "" ? " (" + $("#hmg-segm-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
      hmg.push( "      - Segmentados " + $("#hmg-segm-percent").val() + "%" + segm_abs );
      if ( $("#hmg-bast-percent").val() != "" ) {
        let bast_abs = $("#hmg-bast-abs").val() != "" ? " (" + $("#hmg-bast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Bastonetes " + $("#hmg-bast-percent").val() + "%" + bast_abs );
      }
      if ( $("#hmg-metamyelocyst-percent").val() != "" ) {
        let metamyelocyst_abs = $("#hmg-metamyelocyst-abs").val() != "" ? " (" + $("#hmg-metamyelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Metamielócitos " + $("#hmg-metamyelocyst-percent").val() + "%" + metamyelocyst_abs );
      }
      if ( $("#hmg-myelocyst-percent").val() != "" ) {
        let myelocyst_abs = $("#hmg-myelocyst-abs").val() != "" ? " (" + $("#hmg-myelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Mielócitos " + $("#hmg-myelocyst-percent").val() + "%" + myelocyst_abs );
      }
      if ( $("#hmg-promyelocyst-percent").val() != "" ) {
        let promyelocyst_abs = $("#hmg-promyelocyst-abs").val() != "" ? " (" + $("#hmg-promyelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Promieloblastos " + $("#hmg-promyelocyst-percent").val() + "%" + promyelocyst_abs );
      }
      if ( $("#hmg-myeloblast-percent").val() != "" ) {
        let myeloblast_abs = $("#hmg-myeloblast-abs").val() != "" ? " (" + $("#hmg-myeloblast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Mieloblastos " + $("#hmg-myeloblast-percent").val() + "%" + myeloblast_abs );
      }
      if ( $("#hmg-blast-percent").val() != "" ) {
        let blast_abs = $("#hmg-blast-abs").val() != "" ? " (" + $("#hmg-blast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Blastos " + $("#hmg-blast-percent").val() + "%" + blast_abs );
      }
    }
    let linfo_abs = $("#hmg-linfo-abs").val() != "" ? " (" + $("#hmg-linfo-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
    hmg.push( "    - Linfo " + $("#hmg-linfo-percent").val() + "%" + linfo_abs );
    if ( $("#hmg-diff").val() != "" ) { hmg.push( "    - Diferencial: " + $("#hmg-diff").val() ); }
    // Platelet Series
    let plat = $("#hmg-platelets-dx").val() != "" ? " (" + $("#hmg-platelets-dx").val() + ")" : "";
    hmg.push( "  - Plaq " + $("#hmg-plat").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "k" + plat );
  }
  if ( hmg.length > 0 ) { res.push( hmg.join("\n") ); }
  // PCR
  if ( $("#pcr").val() != "" ) {
    res.push( "- PCR " + parseLab($("#pcr").val(), true, 2, 0.01) );
  }
  // INR
  if ( $("#inr").val() != "" ) {
    res.push( "- INR " + parseLab($("#inr").val(), true, 2) );
  }
  // Proteins
  if ( $("#prot-total").val() != "" || $("#prot-alb").val() != "" || $("#prot-glob").val() != "" ) {
    res.push("- Proteínas Séricas:");
    if ( $("#prot-total").val() != "" ) { res.push( "  - Total " + $("#prot-total").val() ); }
    if ( $("#prot-alb").val() != "" ) { res.push( "  - Alb " + $("#prot-alb").val() ); }
    if ( $("#prot-glob").val() != "" ) { res.push( "  - Glob " + $("#prot-glob").val() ); }
    if ( $("#prot-alb").val() != "" && $("#prot-glob").val() != "" ) {
      let albumin = parseFloat( $("#prot-alb").val() );
      let globulin = parseFloat( $("#prot-glob").val() );
      res.push( "  - Rel. Alb/Glob " + (albumin / globulin).toFixed(3) );
    }
  }
  // Dengue results
  if ( $("#dengue-ns1").val() != "" && $("#dengue-igm").val() != "" && $("#dengue-igg").val() != "" ) {
    res.push( "- Dengue:" );
    res.push( "  - NS1 " + $("#dengue-ns1").val() );
    res.push( "  - IgM " + $("#dengue-igm").val() );
    res.push( "  - IgG " + $("#dengue-igg").val() );
  }

  return res.join("\n");
}
function parseLab(
  val,
  is_float = false,
  floats = false,
  min = false,
  max = false
) {
  let lab = null;
  if (val == "") { lab = "--"; }
  else {
    if (is_float) {
      lab = parseFloat(val);
      if (floats !== false) {
        lab = Math.round( (lab + Number.EPSILON) * Math.pow(10, floats) ) / Math.pow(10, floats);
      }
    } else {
      lab = parseInt(val);
    }
    if (min !== false && lab < min) { lab = "indetectável ao método"; }
    else if (max !== false && lab > max) { lab = "acima do limite superior de detecção do método"; }
  }
  return lab.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function get_A(eval_time) {
  let a = "# HD: Dengue";
  let group = "A";

  if (eval_time == "first") {
    // Comorbidities
    let comorbs = get_Comorbs();
    if (comorbs.length > 0) { group = "B"; }
    // Alarm signs?
    if (
      $("#alarm-abdpain").val() == "PERSISTENTE" ||
      $("#alarm-emesis").val() == "REFERE" ||
      $("#alarm-oedema").val() == "REFERE" ||
      $("#alarm-lipotimia").val() == "REFERE" ||
      $("#alarm-liver").val() == "PRESENTE" ||
      $("#alarm-bleed").val() != "nega" ||
      $("#alarm-letargy").val() == "REFERE" ||
      $("#alarm-ht").val() == "PRESENTE"
    ) { group = "C"; }
    // Instability signs?
    if (
      $("#neuro-gcs-eye").val() != "" &&
      $("#neuro-gcs-speech").val() != "" &&
      $("#neuro-gcs-muscle").val() != ""
    ) {
      let gcs = parseInt($("#neuro-gcs-eye").val());
      gcs += parseInt($("#neuro-gcs-speech").val());
      gcs += parseInt($("#neuro-gcs-muscle").val());
      if (gcs < 14) { group = "D"; }
    }
    if ($("#status").val() == "M") { group = "D"; }
    if ($("#ssvv-pam").val() != "" && parseInt($("#ssvv-pam").val()) <= 60 ) {
      group = "D";
    }
    // Group:
    a += " grupo " + group;
  } else {
    group = $("#dx").val();
    // Alarm signs?
    if ($("#hmg-ht").val() != "" && parseFloat($("#hmg-ht").val()) >= 50.0) {
      group = "C";
    }
    if ($("#hmg-plat").val() != "" && parseInt($("#hmg-plat").val()) <= 50) {
      group = "C";
    }
    // Instability signs?
    if (
      $("#neuro-gcs-eye").val() != "" &&
      $("#neuro-gcs-speech").val() != "" &&
      $("#neuro-gcs-muscle").val() != ""
    ) {
      let gcs = parseInt($("#neuro-gcs-eye").val());
      gcs += parseInt($("#neuro-gcs-speech").val());
      gcs += parseInt($("#neuro-gcs-muscle").val());
      if (gcs < 14) { group = "D"; }
    }
    if ($("#status").val() == "M") { group = "D"; }
    if ($("#ssvv-pam").val() != "" && parseInt($("#ssvv-pam").val()) <= 60) {
      group = "D";
    }
    if ($("#hmg-plat").val() != "" && parseInt($("#hmg-plat").val()) <= 10) {
      group = "D";
    }
    // Group:
    a += " grupo " + group;
  }

  return [a, group];
}

function get_P(eval_time, group) {
  let p = "# CD:\n";
  let plans = [];

  if (group == "D") {
    plans.push("Encaminho paciente IMEDIATAMENTE à Sala de Emergência para estabilização clínica");
    plans.push("Clínica Médica das Porta e Observação à disposição");
    $("#emergency").addClass("is-active");
  } else {
    if (eval_time == "first") {
      if ($("#plan-now-symptomatics").is(":checked")) {
        plans.push("Prescrevo sintomáticos agora");
      }
      if ($("#plan-now-expansion").is(":checked")) {
        plans.push("Prescrevo expansão volêmica " + ($("#comorb-6").is(":checked") ? "parcimoniosa (dado IC)" : "agressiva") + " agora");
      }
      if ($("#plan-now-othermeds1").is(":checked")) {
        plans.push("Prescrevo " + $("#plan-now-othermeds1-what").val() + " agora");
      }
      if ($("#plan-now-othermeds2").is(":checked")) {
        plans.push("Prescrevo " + $("#plan-now-othermeds2-what").val() + " agora");
      }
      if ($("#plan-now-othermeds3").is(":checked")) {
        plans.push("Prescrevo " + $("#plan-now-othermeds3-what").val() + " agora");
      }
      if ($("#plan-now-lab-dengue").is(":checked")) {
        plans.push("Solicito teste de Dengue agora para confirmação diagnóstica");
      }
      if ($("#plan-now-lab-hmg").is(":checked")) {
        plans.push("Solicito HMG agora para descarte de hemoconcentração importante e de plaquetopenia grave");
      }
      if ($("#plan-now-lab-liver").is(":checked")) {
        plans.push("Solicito marcadores de necrose hepatocítica agora");
      }
      if ($("#plan-now-lab-btf").is(":checked")) {
        plans.push("Solicito bilirrubinemia agora para descartar insuficiência hepática aguda");
      }
      if ($("#plan-now-lab-kidney").is(":checked")) {
        plans.push("Solicito função renal agora para descartar LRA KDIGO 2+");
      }
      if ($("#plan-now-lab-gaso").is(":checked")) {
        plans.push("Solicito gasometria arterial agora");
      }
      if ($("#plan-now-lab-radiography").is(":checked")) {
        plans.push("Solicito radiografia de tórax agora");
      }
      if ($("#plan-now-lab-abdomen").is(":checked")) {
        plans.push("Solicito USG Abdome Superio agora");
      }
      if ($("#plan-now-labs-other1").is(":checked")) {
        plans.push("Solicito " + $("#plan-now-labs-other1-what").val() + " agora");
      }
      if ($("#plan-now-labs-other2").is(":checked")) {
        plans.push("Solicito " + $("#plan-now-labs-other2-what").val() + " agora");
      }
      if ($("#plan-now-misc-dx").is(":checked")) {
        plans.push("Oriento HD vigente e planejamento de investigação");
      }
      if ($("#plan-now-misc-doubts").is(":checked")) {
        plans.push("Tiro dúvidas");
      }
      if ($("#plan-now-misc-reeval").is(":checked")) {
        plans.push("Reaval após");
      }
    } else {
      if ($("#plan-out-symptomatics").is(":checked")) {
        plans.push($("#symptomatics").val() + " para casa");
      }
      if ($("#plan-out-med1").is(":checked")) {
        plans.push("Prescrevo " + $("#out-med1").val() + " para " + $("#out-med1-reason").val());
      }
      if ($("#plan-out-med2").is(":checked")) {
        plans.push("Prescrevo " + $("#out-med2").val() + " para " + $("#out-med2-reason").val());
      }
      if ($("#plan-out-med3").is(":checked")) {
        plans.push("Prescrevo " + $("#out-med3").val() + " para " + $("#out-med3-reason").val());
      }
      if ($("#plan-out-leave").is(":checked")) {
        plans.push("Atesto para " + $("#leave").val() + " dias");
      }
      if ($("#plan-out-leaverefuse").is(":checked")) {
        plans.push("Ofereço atestado para repouso, que paciente recusa");
      }
      if ($("#plan-out-leavehours").is(":checked")) {
        plans.push($("#leave-leavehours-what").val() + " comprovante de comparecimento");
      }
      if ($("#plan-out-warnsigns").is(":checked")) {
        plans.push("Oriento sinais de alarme para retorno precoce e reavaliação");
      }
      if ($("#plan-out-aine").is(":checked")) {
        plans.push("Oriento importância CABAL de não utilizar antiinflamatórios de qualquer natureza, esteroidal ou não, durante toda a duração de sintomas");
      }
      if ($("#plan-out-hydro").is(":checked")) {
        plans.push("Oriento hidratação oral intensificada");
      }
      if ($("#plan-out-repellent").is(":checked")) {
        plans.push("Oriento uso de repelentes");
      }
      if ($("#plan-out-labresults").is(":checked")) {
        plans.push("Oriento resultados de exames realizados");
      }
      if ($("#plan-out-followup").is(":checked")) {
        if ($("#followup-where").val() == "amb") {
          plans.push("Emito documentos de retorno junto à Moléstias Infecciosas conforme fluxo institucional vigente, em " + $("#followup").val() + " dias");
        } else {
          plans.push("Retorno em " + $("#followup").val() + " dias, via PS por indisponibilidade de Ambulatório quando de retorno");
        }
      }
      if ($("#plan-out-whut").is(":checked")) {
        plans.push("Tiro dúvidas");
      }
      plans.push($("#plan-out-bai").val());
    }
  }

  p += plans.join(";\n") + ".";
  return p;
}

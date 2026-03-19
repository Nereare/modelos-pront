// JS Dependencies
import ClipboardJS from 'clipboard';

/******************************************/
/*                   JS                   */
/******************************************/
// Physical Examination Methods
$(function () {
  console.log("Métodos de exame físico prontos!");
  // Init Clipboard.js
  new ClipboardJS('.clipboard');

  /****************************************/
  /*                Global                */
  /****************************************/
  // Change febrile state when fever is input
  $("select").on("input change", function () {
    let other_id = "#" + $(this).attr("id") + "-other";
    if ($(this).val() == "other") {
      $(other_id)
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $(other_id)
        .attr("disabled", true)
        .val("");
    }
  });

  /****************************************/
  /*          General Examination         */
  /****************************************/
  // Change febrile state when fever is input
  $("#ssvv-temp, #ssvv-temp-desc").on("input change", function () {
    // Get temperature as float
    var temp = parseFloat($("#ssvv-temp").val());
    if (temp >= 37.5) {
      // Whatever the way, 37.5°C and up is a fever
      $("input[name='fever'][value='febril']")
        .prop("checked", true);
    } else if (temp >= 37.0 && $("#ssvv-temp-desc").val() == "infravermelho de testa") {
      // For infrared forhead measures, 37°C and up is a fever
      $("input[name='fever'][value='febril']")
        .prop("checked", true);
    } else if (temp <= 34.0) {
      // Whatever the way, 34°C and down is hypotermia
      $("input[name='fever'][value='hipotérmic((PRO))']")
        .prop("checked", true);
    } else {
      // Any other context is afebrile
      $("input[name='fever'][value='afebril']")
        .prop("checked", true);
    }
  });
  // Calculate BMI when appliable:
  $("#ssvv-weight, #ssvv-height").on("input change", function () {
    if ($("#ssvv-weight").val() != "" &&
        $("#ssvv-height").val() != "") {
      var weight = parseFloat($("#ssvv-weight").val());
      var height = parseFloat($("#ssvv-height").val()) / 100;
      var bmi = weight / (height * height);
      $("#ssvv-bmi").val(bmi.toFixed(1));
    }
  });

  /* COMMON METHOD for all system examinations */
  // (Un)collapse fields
  $(".collapsable").on("change", function () {
    let target = $(this).attr("data-target");
    $("#" + target).toggleClass("is-hidden");
  });

  /****************************************/
  /*               Eye Exam               */
  /****************************************/
  // Autoselect eye exam checkbox if any field is on
  $("[id^='eye-']").on("change input", function() {
    let filled = false;
    $("[id^='eye-']").each(function() {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-eye").prop("checked", true);
    } else {
      $("#exam-eye").prop("checked", false);
    }
  });
  /****************************************/
  /*               Neck Exam              */
  /****************************************/
  // Enable thyroid nodule description
  $("#neck-thyroid-volume").on("change", function() {
    if ($(this).val().includes("nódulo único")) {
      $("#neck-thyroid-nodules")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#neck-thyroid-nodules")
        .attr("disabled", true)
        .val("");
    }
  });
  // Enable lymphnode aspect and localization descriptions
  $("#neck-lymphnodes").on("change", function() {
    if ($(this).val().includes("Presença de")) {
      $("#neck-lymphnodes-desc")
        .attr("disabled", false)
        .trigger("focus");
      $("#lymph-locs-select").removeClass("is-hidden");
    } else {
      $("#neck-lymphnodes-desc")
        .attr("disabled", true)
        .val("");
      $("#lymph-locs-select").addClass("is-hidden");
      $("[name=neck-lymphnode-loc]").each(function () {
        $(this).prop("checked", false);
      });
      $("#neck-lymphnodes-locs").val("");
    }
  });
  // Fill hidden field with selected sectors
  $("[name=neck-lymphnode-sector]").on("change", function () {
    let sectors = [];
    $("[name=neck-lymphnode-sector]:checked").each(function () {
      sectors.push($(this).val());
    });
    $("#neck-lymphnodes-locs").val(JSON.stringify(sectors));
  });
  // Autoselect neck exam checkbox if any field is on
  $("[id^='neck-']").on("change input", function() {
    let filled = false;
    $("[id^='neck-']").each(function() {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-neck").prop("checked", true);
    } else {
      $("#exam-neck").prop("checked", false);
    }
  });


  /****************************************/
  /*               Ears Exam              */
  /****************************************/
  // Autoselect ears exam checkbox if any field is on
  $("[id^='oto-']").on("change input", function () {
    let filled = false;
    $("[id^='oto-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-oto").prop("checked", true);
    } else {
      $("#exam-oto").prop("checked", false);
    }
  });

  /****************************************/
  /*                Output                */
  /****************************************/
  $("#output-compile").on("click", function () {
    // Initialize output array
    // Each element being a single line/system/submodule
    let out = ["# EF:"];
    // Get patient's pronouns
    let pronouns = $("#pronouns").val();

    /***** GENERAL *****/
    // This is the one series of exams that will always be included
    // > First line
    let line1 = [];
    // > > General status
    line1.push($("#status").val() + " estado geral");
    // > > Nutritional status
    if ($("#nutrition").val() != "") {
      line1.push($("#nutrition").val());
    }
    // > > Compile first line
    out.push(line1.join(". ") + ".");
    // > Second line
    let line2 = [];
    // > > Loop through each of the four main parameters
    [
      ["color", "Descorad((PRO))"],
      ["hydro", "desidratad((PRO))"],
      ["cyanose", "cianótic((PRO))"],
      ["icter", "ictéric((PRO))"]].forEach(function (p) {
        if (isNaN($("[name=" + p[0] + "]:checked").val())) {
          line2.push($("[name=" + p[0] + "]:checked").val());
        } else {
          line2.push(p[1] + $("[name=" + p[0] + "]:checked").val() + "+/4+");
        }
      });
    // > > Fever
    if ($("[name=fever]").val() != "") {
      line2.push($("[name=fever]").val());
    }
    // > > Breathing
    if ($("#breathing").val() == "other") {
      line2.push($("#breathing-other").val());
    } else if ($("#breathing").val() != "") {
      line2.push($("#breathing").val());
    }
    // > > Add face to compiled second line
    line2 = line2.join(", ") + ".";
    if ($("#face").val() == "other") {
      line2 += " " + $("#face-other").val() + ".";
    } else if ($("#face").val() != "") {
      line2 += " Fácies " + $("#face").val() + ".";
    }
    // > > Compile second line
    out.push(line2);
    // > Third line
    let line3 = [];
    // > > Pulse oximetry
    if ($("#ssvv-sat").val() != "") {
      let o2 = "Sat O2 = " + $("#ssvv-sat").val() + "% em " + $("#ssvv-sat-type").val();
      if ($("#ssvv-sat-flux").val() != "") { o2 += " a " + $("#ssvv-sat-flux").val() + "L/min"; }
      line3.push(o2);
    }
    // > > Pulse
    if ($("#ssvv-pulse").val() != "") {
      line3.push("FC = " + $("#ssvv-pulse").val() + "bpm");
    }
    // > > Arterial Pressure
    if ($("#ssvv-pas").val() != "" && $("#ssvv-pad").val() != "") {
      let pas = parseInt($("#ssvv-pas").val());
      let pad = parseInt($("#ssvv-pad").val());
      let pam = (pas + (pad * 2)) / 3;
      line3.push("PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pas").val() + "mmHg");
      line3.push("PAM = " + pam.toFixed(0) + "mmHg");
    } else if ($("#ssvv-pas").val() != "") {
      line3.push("PAS = " + $("#ssvv-pas").val() + "mmHg");
    } else if ($("#ssvv-pad").val() != "") {
      line3.push("PAD = " + $("#ssvv-pas").val() + "mmHg");
    }
    // > > Respiration
    if ($("#ssvv-fr").val() != "") {
      line3.push("FR = " + $("#ssvv-fr").val() + "irpm");
    }
    // > > Glucose
    if ($("#ssvv-glucose").val() != "") {
      line3.push("GC = " + $("#ssvv-glucose").val() + "mg/dL" + $("#ssvv-glucose-time").val());
    }
    // > > Temperature
    if ($("#ssvv-temp").val() != "") {
      line3.push("Temp = " + $("#ssvv-temp").val() + "°C" + " (" + $("#ssvv-temp-desc").val() + ")");
    }
    // > > Weight
    if ($("#ssvv-weight").val() != "") {
      line3.push("Peso " + $("#ssvv-weight-eq").val() + $("#ssvv-weight").val() + "kg");
    }
    // > > Height
    if ($("#ssvv-height").val() != "") {
      line3.push("Alt = " + $("#ssvv-height").val() + "cm");
    }
    // > > BMI
    if ($("#ssvv-bmi").val() != "") {
      let bmi = parseFloat($("#ssvv-bmi").val());
      let bmi_name = "";
      if (bmi >= 40.0) { bmi_name = "obesidade grave"; }
      else if (bmi >= 30.0) { bmi_name = "obesidade"; }
      else if (bmi >= 25.0) { bmi_name = "sobrepeso"; }
      else if (bmi < 18.5) { bmi_name = "subnutrição"; }
      else { bmi_name = "eutrofia"; }
      line3.push("IMC = " + bmi.toFixed(1) + "kg/m² (" + bmi_name + ")");
    }
    // > > Pain
    if ($("#ssvv-pain").val() != "") {
      line3.push("EVA Dor = " + $("#ssvv-pain").val() + "/10");
    }
    // > > Compile third line
    if (line3.length > 0) { out.push(line3.join(" | ")); }
    // > Fourth line
    let line4 = [];
    // > > GCS
    if ($("#ssvv-gcs-eye").val() != "" &&
      $("#ssvv-gcs-speech").val() != "" &&
      $("#ssvv-gcs-muscle").val() != "") {
      let ao = parseInt($("#ssvv-gcs-eye").val());
      let rv = parseInt($("#ssvv-gcs-speech").val());
      let rm = parseInt($("#ssvv-gcs-muscle").val());
      let gcs = ao + rv + rm;
      if (gcs < 15) {
        ao = "AO " + (ao == 0 ? "0NT" : ao.toFixed(0));
        rv = "RV " + (rv == 0 ? "0NT" : rv.toFixed(0));
        rm = "RM " + (rm == 0 ? "0NT" : rm.toFixed(0));
        gcs = gcs + " (" + [ao, rv, rm].join("; ") + ")";
      }
      line4.push("GCS " + gcs);
    }
    // > > RASS
    if ($("#ssvv-rass").val() != "") {
      line4.push("RASS " + $("#ssvv-rass").val());
    }
    // > > Orientation
    if ($("#ssvv-orientation-time").val() != "" ||
      $("#ssvv-orientation-space").val() != "") {
      if ($("#ssvv-orientation-time").val() == $("#ssvv-orientation-space").val()) {
        line4.push($("#ssvv-orientation-time").val() + " no tempo-espaço");
      } else {
        if ($("#ssvv-orientation-time").val() != "") {
          line4.push($("#ssvv-orientation-time").val() + " no tempo");
        }
        if ($("#ssvv-orientation-space").val() != "") {
          line4.push($("#ssvv-orientation-space").val() + " no espaço");
        }
      }
    }
    // > > Collaboration
    if ($("#ssvv-collaboration").val() == "other") {
      line4.push($("#ssvv-collaboration-other").val());
    } else if ($("#ssvv-collaboration").val() != "") {
      line4.push($("#ssvv-collaboration").val());
    }
    // > > Walking
    if ($("#ssvv-walking").val() == "other") {
      line4.push($("#ssvv-walking-other").val());
    } else if ($("#ssvv-walking").val() != "") {
      line4.push($("#ssvv-walking").val());
    }
    // > > Compile fourth line
    if (line4.length > 0) { out.push(line4.join(" | ")); }

    /***** HEAD *****/
    // > Eyes
    let eyes = [];
    // > > Redness
    if ($("#eye-redness").val() != "") {
      eyes.push("Conjuntiva " + $("#eye-redness").val());
    }
    // > > Yellowness
    if ($("#eye-yellowness").val() != "") {
      eyes.push("Conjuntiva " + $("#eye-yellowness").val());
    }
    // > > Crusts
    if ($("#eye-secretions").val() != "") {
      eyes.push($("#eye-secretions").val());
    }
    // > > Pus
    if ($("#eye-pus").val() != "") {
      eyes.push($("#eye-pus").val());
    }
    // > > Eye movements
    if ($("#eye-movements").val() != "") {
      if ($("#eye-movements").val() == "other") {
        eyes.push("Movimentação Ocular Extrínseca com " + $("#eye-movements-other").val());
      } else {
        eyes.push("Movimentação Ocular Extrínseca " + $("#eye-movements").val());
      }
    }
    // > > Pupil reflexes
    if ($("#eye-pupils").val() != "") {
      if ($("#eye-pupils").val() == "other") {
        eyes.push("Reflexos Pupilares com " + $("#eye-pupils-other").val());
      } else if ($("#eye-pupils").val() == "preservada") {
        eyes.push("Pupilas isofotorreagentes (PIFR)");
      } else {
        eyes.push("Reflexos Pupilares " + $("#eye-pupils").val());
      }
    }
    // > > Other
    if ($("#eye-other").val() != "") {
      eyes.push($("#eye-other").val());
    }
    // > > Compile and push eye descriptors
    if (eyes.length > 0) {
      eyes = "- Olhos: " + eyes.join(". ");
      eyes += (/.+\.$/.test(eyes)) ? "" : ".";
      out.push(eyes.trim());
    }

    // > Cervical
    let cervical = [];
    // > > Thyroid
    if ($("#neck-thyroid-volume").val() != "") {
      cervical.push(
        "Tireóide " +
        $("#neck-thyroid-volume").val() +
        $("#neck-thyroid-nodules").val() +
        $("#neck-thyroid-margins").val());
    }
    // > > Lymphnodes
    if ($("#neck-lymphnodes").val() != "") {
      cervical.push($("#neck-lymphnodes").val() + $("#neck-lymphnodes-desc").val());
    }
    // > > Lymphnodes localizations
    if ($("#neck-lymphnodes-locs").val() != "") {
      let locs = JSON.parse($("#neck-lymphnodes-locs").val());
      if (locs.length > 2) {
        let last = locs.pop();
        cervical.push("Com linfonodos palpápeis nos setores " + locs.join(", ") + ", e " + last);
      } else if (locs.length == 2) {
        cervical.push("Com linfonodos palpápeis nos setores " + locs.join(" e "));
      } else if (locs.length > 0) {
        cervical.push("Com linfonodo palpápel no setor " + locs.join(""));
      }
    }
    // > > Parotid glands
    if ($("#neck-parotid-right").val() != "" ||
        $("#neck-parotid-left").val() != "") {
      if ($("#neck-parotid-right").val() == $("#neck-parotid-left").val()) {
        cervical.push("Glândulas Parótidas " + $("#neck-parotid-left option:selected").attr("plural-alt"));
      } else {
        if ($("#neck-parotid-right").val() != "") {
          cervical.push("Glândula Parótida Direita " + $("#neck-parotid-right").val());
        }
        if ($("#neck-parotid-left").val() != "") {
          cervical.push("Glândula Parótida Esquerda " + $("#neck-parotid-left").val());
        }
      }
    }
    // > > Sublingual glands
    if ($("#neck-sublingual-right").val() != "" ||
      $("#neck-sublingual-left").val() != "") {
      if ($("#neck-sublingual-right").val() == $("#neck-sublingual-left").val()) {
        cervical.push("Glândulas Sublinguais " + $("#neck-sublingual-left option:selected").attr("plural-alt"));
      } else {
        if ($("#neck-sublingual-right").val() != "") {
          cervical.push("Glândula Sublingual Direita " + $("#neck-sublingual-right").val());
        }
        if ($("#neck-sublingual-left").val() != "") {
          cervical.push("Glândula Sublingual Esquerda " + $("#neck-sublingual-left").val());
        }
      }
    }
    // > > Compile and push cervical descriptors
    if (cervical.length > 0) {
      cervical = "- Cervical: " + cervical.join(". ");
      cervical += (/.+\.$/).test(cervical) ? "" : ".";
      out.push(cervical.trim());
    }

    /***** ORL/ENT *****/

    /***** OUTPUT *****/
    // Return final output
    $("#output").val(out.join("\n").replaceAll("((PRO))", pronouns));
  });
});

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
  $("[id^='eye-']").on("change", function() {
    let changed = false;
    $("[id^='eye-']").each(function() {
      if ($(this).val() != "") {
        changed = true;
      }
    });
    if (changed) {
      $("#exam-eye").attr("checked", true);
    } else {
      $("#exam-eye").attr("checked", false);
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
        .attr("disabled", false)
        .val("");
    }
  });
  // Enable lymphnode aspect description
  $("#neck-lymphnodes").on("change", function() {
    if ($(this).val().includes("Presença de")) {
      $("#neck-lymphnodes-desc")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#neck-lymphnodes-desc")
        .attr("disabled", true)
        .val("");
    }
  });
  // Show lymphnode localization choices
  $("#neck-lymphnodes").on("change", function() {
    if ($(this).val().includes("Presença de")) {
      $("#lymph-locs-select").removeClass("is-hidden");
    } else {
      $("#lymph-locs-select").addClass("is-hidden");
    }
  });
  // Autoselect eye exam checkbox if any field is on
  $("[id^='neck-']").on("change", function() {
    let changed = false;
    $("[id^='neck-']").each(function() {
      if ($(this).val() != "") {
        changed = true;
      }
    });
    if (changed) {
      $("#exam-neck").attr("checked", true);
    } else {
      $("#exam-neck").attr("checked", false);
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

    // General
    // This is the one series of exams that will always be included
    // > First line
    out.push([]);
    // > > General status
    out[0] = $("#status").val() + " estado geral";
    // > > Nutritional status
    if ($("#nutrition").val() != "") {
      out[0].push($("#nutrition").val());
    }
    // > > Compile first line
    out[0] = out[0].join(". ") + ".";
    // > Second line
    out.push([]);
    // > > Loop through each of the four main parameters
    [
      ["color", "Descorad((PRO))"],
      ["hydro", "desidratad((PRO))"],
      ["cyanose", "cianótic((PRO))"],
      ["icter", "ictéric((PRO))"]].forEach(function (p) {
        if (isNaN($("[name=" + p[0] + "]:checked").val())) {
          out[1].push($("[name=" + p[0] + "]:checked").val());
        } else {
          out[1].push(p[1] + $("[name=" + p[0] + "]:checked").val() + "+/4+");
        }
      });
    // > > Fever
    if ($("[name=fever]").val() != "") {
      out.push($("[name=fever]").val());
    }
    // > > Breathing
    if ($("#breathing").val() == "other") {
      out.push($("#breathing-other").val());
    } else if ($("#breathing").val() != "") {
      out.push($("#breathing").val());
    }
    // > > Compile second line
    out[1] = out[1].join(", ") + ".";
    // > > Add face to compiled second line
    if ($("#face").val() == "other") {
      out[1] += ". " + $("#face-other").val() + ".";
    } else if ($("#face").val() != "") {
      out[1] += ". " + $("#face").val() + ".";
    }
    // > Third line
    out.push([]);
    // > > Pulse oximetry
    if ($("#ssvv-sat").val() != "") {
      let o2 = "Sat O2 = " + $("#ssvv-sat").val() + "% em " + $("#ssvv-sat-type").val();
      if ($("#ssvv-sat-flux").val() != "") { o2 += " a " + $("#ssvv-sat-flux").val() + "L/min"; }
      out[2].push(o2);
    }
    // > > Pulse
    if ($("#ssvv-pulse").val() != "") {
      out[2].push("FC = " + $("#ssvv-pulse").val() + "bpm");
    }
    // > > Arterial Pressure
    if ($("#ssvv-pas").val() != "" && $("#ssvv-pad").val() != "") {
      let pas = parseInt($("#ssvv-pas").val());
      let pad = parseInt($("#ssvv-pad").val());
      let pam = (pas + (pad * 2)) / 3;
      out[2].push("PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pas").val() + "mmHg");
      out[2].push("PAM = " + pam.toFixed(0) + "mmHg");
    } else if ($("#ssvv-pas").val() != "") {
      out[2].push("PAS = " + $("#ssvv-pas").val() + "mmHg");
    } else if ($("#ssvv-pad").val() != "") {
      out[2].push("PAD = " + $("#ssvv-pas").val() + "mmHg");
    }
    // > > Respiration
    if ($("#ssvv-fr").val() != "") {
      out[2].push("FR = " + $("#ssvv-fr").val() + "irpm");
    }
    // > > Glucose
    if ($("#ssvv-glucose").val() != "") {
      out[2].push("GC = " + $("#ssvv-glucose").val() + "mg/dL" + $("#ssvv-glucose-time").val());
    }
    // > > Temperature
    if ($("#ssvv-temp").val() != "") {
      out[2].push("Temp = " + $("#ssvv-temp").val() + "°C" + " (" + $("#ssvv-temp-desc").val() + ")");
    }
    // > > Weight
    if ($("#ssvv-weight").val() != "") {
      out[2].push("Peso " + $("#ssvv-weight-eq").val() + " " + $("#ssvv-weight").val() + "kg");
    }
    // > > Height
    if ($("#ssvv-height").val() != "") {
      out[2].push("Alt = " + $("#ssvv-height").val() + "cm");
    }
    // > > BMI
    if ($("#ssvv-bmi").val() != "") {
      out[2].push("IMC = " + $("#ssvv-bmi").val() + "kg/m²");
    }
    // > > Pain
    if ($("#ssvv-pain").val() != "") {
      out[2].push("EVA Dor = " + $("#ssvv-pain").val() + "/10");
    }
    // > > Compile third line
    out[2] = out[1].join(" | ");
    // > Fourth line
    out.push([]);
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
      out[3].push("GCS " + gcs);
    }
    // > > RASS
    if ($("#ssvv-rass").val() != "") {
      out[3].push("RASS " + $("#ssvv-rass").val());
    }
    // > > Orientation
    if ($("#ssvv-orientation-time").val() != "" ||
      $("#ssvv-orientation-space").val() != "") {
      if ($("#ssvv-orientation-time").val() == $("#ssvv-orientation-space").val()) {
        out[3].push($("#ssvv-orientation-time").val() + " no tempo-espaço");
      } else {
        if ($("#ssvv-orientation-time").val() != "") {
          out[3].push($("#ssvv-orientation-time").val() + " no tempo");
        }
        if ($("#ssvv-orientation-space").val() != "") {
          out[3].push($("#ssvv-orientation-space").val() + " no espaço");
        }
      }
    }
    // > > Collaboration
    if ($("#ssvv-collaboration").val() == "other") {
      out[3].push($("#ssvv-collaboration-other").val());
    } else if ($("#ssvv-collaboration").val() != "") {
      out[3].push($("#ssvv-collaboration").val());
    }
    // > > Walking
    if ($("#ssvv-walking").val() == "other") {
      out[3].push($("#ssvv-walking-other").val());
    } else if ($("#ssvv-walking").val() != "") {
      out[3].push($("#ssvv-walking").val());
    }

    // Return final output
    $("#output").val(out.join("\n"));
  });
});

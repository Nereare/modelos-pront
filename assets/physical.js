// JS Dependencies
import ClipboardJS from 'clipboard';
// Output Dependency
import './physical-output.js';

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
  /*              Mouth Exam              */
  /****************************************/
  // Autoselect oral exam checkbox if any field is on
  $("[id^='oro-']").on("change input", function () {
    let filled = false;
    $("[id^='oro-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-oro").prop("checked", true);
    } else {
      $("#exam-oro").prop("checked", false);
    }
  });
  /****************************************/
  /*              Nose Exam               */
  /****************************************/
  // Autoselect nose exam checkbox if any field is on
  $("[id^='nose-']").on("change input", function () {
    let filled = false;
    $("[id^='nose-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-nose").prop("checked", true);
    } else {
      $("#exam-nose").prop("checked", false);
    }
  });
  /****************************************/
  /*              HINTS Exam              */
  /****************************************/
  // Autoselect HINTS checkbox if any field is on
  $("[id^='hints-']").on("change input", function () {
    let filled = false;
    $("[id^='hints-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-hints").prop("checked", true);
      if ($("#hints-hi")[0] != $(this)[0]) {
        $("#hints-hi").val($("#hints-hi option:eq(1)").val());
      }
      if ($("#hints-n")[0] != $(this)[0]) {
        $("#hints-n").val($("#hints-n option:eq(1)").val());
      }
      if ($("#hints-ts")[0] != $(this)[0]) {
        $("#hints-ts").val($("#hints-ts option:eq(1)").val());
      }
    } else {
      $("#exam-hints").prop("checked", false);
      $("#hints-hi, #hints-n, #hints-ts").val("");
    }
  });
  // Clear HINTS fields by unchecking checkbox
  // (Or set everything to basic if newly checked)
  $("#exam-hints").on("change", function() {
    if ($(this).is(":checked")) {
      $("#hints-hi").val($("#hints-hi option:eq(1)").val());
      $("#hints-n").val($("#hints-n option:eq(1)").val());
      $("#hints-ts").val($("#hints-ts option:eq(1)").val());
    } else {
      $("#hints-hi, #hints-n, #hints-ts").val("");
    }
  });

  /****************************************/
  /*              Lungs Exam              */
  /****************************************/
  // Show reduction, sounds, and percursion locations
  $("#lung-reduction, #lung-sounds, #lung-percussion").on("change", function() {
    let which = $(this).attr("id")
                       .split("-")
                       [1];
    if (/.+ em $/.test($(this).val())) {
      $("#locs-lung-" + which).removeClass("is-hidden");
    } else {
      $("#locs-lung-" + which).addClass("is-hidden");
      $("[name=lung-" + which + "-loc]").each(function() {
        $(this).prop("checked", false);
      })
    }
  });
  // Change to global option if all checkboxes are checked
  $("[name=lung-reduction-loc], [name=lung-sounds-loc], [name=lung-percussion-loc]").on("change", function() {
    let which = $(this).attr("name")
                       .split("-")
                       [1];
    let global_eq = $("#lung-" + which).val()
                     .replace(/ em $/, " globalmente");
    if ($("[name=lung-" + which + "-loc]:checked").length == 6) {
      $("[name=lung-" + which + "-loc]").each(function() {
        $(this).prop("checked", false);
      });
      $("#locs-lung-" + which).addClass("is-hidden");
      $("#lung-" + which).val(global_eq).trigger("change");
    }
  });
  // Show Signorelli Sign height
  $("#lung-signorelli").on("change", function() {
    if (/inferiormente a $/.test($(this).val())) {
      $("#lung-signorelli-height")
        .attr("disabled", false)
        .trigger("focus");
    } else {
      $("#lung-signorelli-height")
        .attr("disabled", true)
        .val("");
    }
  });
  // Autoselect lungs exam checkbox if any field is on
  $("[id^='lung-']").on("change input", function () {
    let filled = false;
    $("[id^='lung-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-lung").prop("checked", true);
    } else {
      $("#exam-lung").prop("checked", false);
    }
  });
  /****************************************/
  /*             Heart Exam               */
  /****************************************/
  // If the first line has any field filled, all must be
  $("#heart-rhythm, #heart-sound, #heart-times").on("change", function() {
    if ($(this).val() != "") {
      $("#heart-rhythm").val($("#heart-rhythm option:eq(1)").val());
      $("#heart-sound").val($("#heart-sound option:eq(1)").val());
      $("#heart-times").val($("#heart-times option:eq(1)").val());
    }
  });
  // If the heart checkbox is unchecked, empty first line
  $("#exam-heart").on("change", function() {
    if (!$(this).is(":checked")) {
      $("#heart-rhythm, #heart-sound, #heart-times").val("");
    }
  });
  // Autoselect heart exam checkbox if any field is on
  $("[id^='heart-']").on("change input", function () {
    let filled = false;
    $("[id^='heart-']").each(function () {
      if ($(this).val() != "") {
        filled = true;
        return false;
      }
    });
    if (filled) {
      $("#exam-heart").prop("checked", true);
    } else {
      $("#exam-heart").prop("checked", false);
    }
  });
});

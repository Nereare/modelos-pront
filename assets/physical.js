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
});

$(function() {
  // Initialize predefs
  $.each(predefineds, function(i, v) {
    $("#predefineds").append( $("<option>", { text: i, value: i}) )
    console.log(i);
  });
  // Set predefined prescription from select menu
  $("#predefineds").on("change", function() {
    $("#prescription").empty();
    $.each(predefineds[ $("#predefineds").val() ], function(i, val) {
      $("#prescription").append(new_med(val[0], val[1], val[2], val[3], val[4]));
    });
  });
  // Check if there was a predefined model requested (through GET)
  if ( $("#get-predefined").val() ) {
    $("#predefineds").val( $("#get-predefined").val() );//
    $("#predefineds").trigger("change");
  }

  // Add med
  $(".add-item").on("click", function() {
    let action = $(this).attr("data-position");
    if (action == "start") {
      $("#prescription").prepend(new_med());
    } else {
      $("#prescription").append(new_med());
    }
  });
  // Clear meds
  $(".clear-items").on("click", function() {
    $("#prescription").empty();
    $("#predefineds").val("");
  });

  // Copy?
  $("#copy").on("click", function() {
    // Initialize variables
    let meds = [];

    $(".med-item").each(function(index) {
      // Inscript
      let item = (index + 1) + ". " + $(this).find(".med-name").val() + " --- " + $(this).find(".med-way").val() + " ------------------------------------------------------------------------";
      if ($(this).find(".med-qtt").val() != "") {
        item += $(this).find(".med-qtt").val();
      }
      // Subscript
      item += "\n    " + $(this).find(".med-subscript").val();
      // Notes
      if ($(this).find(".med-notes").val() != "") {
        item += "\n    " + $(this).find(".med-notes").val();
      }
      // Append
      meds.push(item);
    });

    // Try and copy to clipboard
    let txt = meds.join("\n\n");
    try {
      navigator.clipboard.writeText(txt);
    } catch (error) {
      console.error("Tried to copy '" + txt + "', but method undefined by insecure context.");
    }
  });

  // Reset Wizard
  function reset_wizard() {
    // Reset selects
    $("#wizard-act").val("Tomar");
    $("#wizard-unity").val("cp|cps");
    $("#wizard-interval-time").val("hora|horas");
    $("#wizard-frequency").val("a cada");
    $("#wizard-every-X").val("manhã");
    $("#wizard-during-time").val("dia|dias");
    // Reset enables
    $("#wizard-interval, #wizard-interval-time").attr("disabled", false);
    $("#wizard-N-times, #wizard-times-per-X, #wizard-every-X").attr("disabled", true);
    // Reset inputs
    $("#wizard-target, #wizard-cps, #wizard-interval, #wizard-N-times, #wizard-if, #wizard-during").val("");
    // Hide modal
    $("#wizard").removeClass("is-active");
  }
  // Prepend Zeroes
  function prepend_zero(i) {
    return ("00" + i).slice(-2);
  }
  // Change Frequency
  $("#wizard-frequency").on("change", function() {
    // Disable everything
    $("#wizard-interval, #wizard-interval-time, #wizard-N-times, #wizard-times-per-X, #wizard-every-X").attr("disabled", true);
    // Enable required
    switch ($("#wizard-frequency").val()) {
      case "N vezes por X":
        $("#wizard-N-times, #wizard-times-per-X").attr("disabled", false);
        break;
      case "toda/o X":
        $("#wizard-every-X").attr("disabled", false);
        break;
      case "DU":
        // Disable nothing :)
        break;
      default:
        $("#wizard-interval, #wizard-interval-time").attr("disabled", false);
        break;
    }
  });
  // Cancel Wizard
  $("#wizard-cancel").on("click", function() {
    reset_wizard();
  });
  // Save and Close Wizard
  $("#wizard-save").on("click", function() {
    // Get target
    let target = $("#" + $("#wizard-target").val());

    // Build subscript
    // > Use X Ys
    let qtt = ($("#wizard-cps").val() != "" ? parseInt($("#wizard-cps").val()) : 1);
    let qtt_unit = $("#wizard-unity").val().split("|");
    let txt = $("#wizard-act").val() + " " + prepend_zero(qtt) + " " + (qtt > 1 ? qtt_unit[1] : qtt_unit[0]) + " ";
    // > Interval
    switch ($("#wizard-frequency").val()) {
      case "N vezes por X":
        let n = ($("#wizard-N-times").val() != "" ? parseInt($("#wizard-N-times").val()) : 1);
        let n_unit = $("#wizard-times-per-X").val().split("|");
        txt += prepend_zero(n) + (n > 1 ? " vezes" : " vez") + " por " + (n > 1 ? n_unit[1] : n_unit[0]);
        break;
      case "toda/o X":
        txt += $("#wizard-every-X").val();
        break;
      case "DU":
        txt += "em DOSE ÚNICA";
        break;
      default:
        let interval = ($("#wizard-interval").val() != "" ? parseInt($("#wizard-interval").val()) : 1);
        let interval_unit = $("#wizard-interval-time").val().split("|");
        txt += "a cada " + prepend_zero(interval) + " " + (interval > 1 ? interval_unit[1] : interval_unit[0]);
        break;
    }
    // > Conditions
    if ($("#wizard-if").val() != "") {
      txt += " se " + $("#wizard-if").val();
    }
    // > Usage Time
    if ($("#wizard-during").val() != "") {
      let time = ($("#wizard-during").val() != "" ? parseInt($("#wizard-during").val()) : 1);
      let time_unit = $("#wizard-during-time").val().split("|");
      txt += " por " + prepend_zero(time) + " " + (time > 1 ? time_unit[1] : time_unit[0]);
    }
    txt += ".";
    // Save subscript
    target.val(txt);

    // Reset and Close
    reset_wizard();
  });
});

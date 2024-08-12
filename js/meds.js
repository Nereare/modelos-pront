$.getScript("js/med_lists.js");
$.getScript("js/med_predefs.js");
$.getScript("js/med_new.js");

$(function() {
  // Initialize predefs
  $.each(predefineds, function(i, v) {
    $("#predefineds").append( $("<option>", { text: i, value: i}) )
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
});

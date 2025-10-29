// SCSS imports
import './pront.scss';

/******************************************/
/*             Global Methods             */
/******************************************/
// Hide and reset global message box
window.resetMessage = function resetMessage() {
  $("#global-message")
    // Hide global message box
    .addClass("is-hidden")
    // Clear message styles
    .removeClass("is-success is-danger is-warning is-info")
    // Clear message text
    .find("p").html("");
}
// Show global message box with custom type and message
window.showMessage = function showMessage(type, message) {
  // Reset any existing message
  resetMessage();
  // Set message text
  $("#global-message").find("p").html(message);
  // Add message style
  $("#global-message").addClass("is-" + type);
  // Show global message box
  $("#global-message").removeClass("is-hidden");
}

/******************************************/
/*                   JS                   */
/******************************************/
// Base Methods
$(function () {
  console.log("Base methods ready!");

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Hide global message box on close button click
  $("#global-message .delete").on("click", function () {
    resetMessage();
  });

  // Check if required fields are filled
  $("[required]").on("change input", function () {
    // Change color code if missing data
    if ($(this).val() == "" || $(this).val() == null) {
      if ($(this).prop("nodeName").toLowerCase() === "select") {
        $(this).parent().addClass("is-danger");
      } else {
        $(this).addClass("is-danger");
      }
    } else {
      if ($(this).prop("nodeName").toLowerCase() === "select") {
        $(this).parent().removeClass("is-danger");
      } else {
        $(this).removeClass("is-danger");
      }
    }
  }).trigger("change");
});

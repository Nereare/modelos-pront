// SCSS imports
import './pront.scss';

/******************************************/
/*                   JS                   */
/******************************************/
// Base Methods
$(function () {
  console.log("Page ready!");

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
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

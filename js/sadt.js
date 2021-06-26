$( document ).ready(function() {
  console.log("App ready!");

  $("#pront").on("input", function() {
    $(".print-pront").html( $("#pront").val() );
  });
  $("#name").on("input", function() {
    $(".print-name").html( $("#name").val() );
  });
  $("#dx").on("input", function() {
    $(".print-dx").html( $("#dx").val() );
  });

  $("#lab1-1").on("input", function() {
    $(".print-lab1-1").html( $("#lab1-1").val() );
  });
  $("#lab1-2").on("input", function() {
    $(".print-lab1-2").html( $("#lab1-2").val() );
  });
  $("#lab1-3").on("input", function() {
    $(".print-lab1-3").html( $("#lab1-3").val() );
  });

  $("#lab2-1").on("input", function() {
    $(".print-lab2-1").html( $("#lab2-1").val() );
  });
  $("#lab2-2").on("input", function() {
    $(".print-lab2-2").html( $("#lab2-2").val() );
  });
  $("#lab2-3").on("input", function() {
    $(".print-lab2-3").html( $("#lab2-3").val() );
  });
});

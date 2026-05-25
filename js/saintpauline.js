// Method for retrieving list from localStorage, or creating a new, empty set.
function get_atends() {
  // Initialize empty
  let atends = null;
  // Retrieve new empty or prefilled
  if (localStorage.getItem("atends") == null) {
    atends = "[]";
  } else {
    atends = localStorage.getItem("todos");
  }
  // Parse Json
  atends = JSON.parse(atends);
  // Return
  return atends;
}
// Method for updating the whole list in the localStorage.
function save_atends(list) {
  localStorage.setItem("atends", JSON.stringify(list));
}
// Append new value to list in localStorage.
function new_atend(atend) {
  // Get Atends
  let list = get_atends();
  // Append new
  list.push(atend);
  // Update Atends
  save_atends(list);
}

$(function() {
  // Add Patient Modal
  $("#add-start").on("click", function() {
    $("#add-modal").addClass("is-active");
    $("#add-atend").trigger("focus");
  });
  // Cancel Modal
  $("#add-cancel").on("click", function() {
    $("#add-modal").removeClass("is-active");
    $("#add-atend, #add-outcome").val("");
  });
  // Add Patient Method
  $("#add-new").on("click", function() {
    // Get and append new patient data
    let atend = {
      number: parseInt($("#add-atend").val()),
      outcome: $("#add-outcome").val()
    };
    new_atend(atend);

    // Finish Modal
    $("#add-cancel").trigger("click");
    // Refresh to-dos
    update_todos();
  });

  // Import JSON
  // Show upload modal
  $("#import-json").on("click", function() {
    $("#upload-modal").addClass("is-active");
  });
  // Cancel upload
  $("#cancel-upload").on("click", function() {
    $("#upload-modal").removeClass("is-active");
    $("#upload-content").val("");
  });
  $("#confirm-upload").on("click", function() {
    // Disable button
    $(this)
      .addClass("is-loading")
      .attr("disabled", true);

    // Get contents
    let upload = $("#upload-content").val();
    if (typeof(upload) === "undefined" || upload == "") {
      upload = "[]";
    }
    // Check To-Dos
    list = get_atends();
    if (list.length > 0) {
      // If not empty, cancel
      alert("Existem atendimentos, cancelando upload...");
    } else {
      // If empty, inject JSON
      localStorage.setItem("todos", upload);
    }

    // Update Atends
    update_atends();

    // Close modal
    $("#cancel-upload").trigger("click");
    // Reenable button
    $(this)
      .removeClass("is-loading")
      .attr("disabled", false);
  });

  // Edit Dx/Notes
  // Cancel edition
  $("#edit-dx-cancel").on("click", function() {
    $("#edit-dx-id").val("");
    $("#edit-dx-dx").val("");
    $("#edit-dx-notes").val("");
    $("#dx-modal").removeClass("is-active");
  });
  // Save edition
  $("#edit-dx-save").on("click", function() {
    // Get data
    let todo_id = parseInt($("#edit-dx-id").val());
    let dx = $("#edit-dx-dx").val();
    let notes = $("#edit-dx-notes").val();
    // Check if ID is valid - aka a number
    if (isNaN(todo_id)) {
      // Warn and close modal
      alert("Erro com ID da tarefa, recarregue a página e tente de novo...");
    } else {
      // Parse values
      dx = (dx.trim() == "") ? "?" : dx.trim();
      notes = notes.trim();
      // Get todos
      let old = get_todos();
      // Edit todo
      old[todo_id].dx = dx;
      old[todo_id].notes = notes;
      // Save todos
      localStorage.setItem("todos", JSON.stringify(old));
      // Update todos
      update_todos();
    }
    // Close modal
    $("#edit-dx-cancel").trigger("click");
  });

  // Choose whether to show done To-Dos
  $("#show-done").on("change", function() {
    // The choice is done on update,
    // so, just update them :)
    update_todos();
  });
});

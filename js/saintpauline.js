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

// Method for retrieving identification.
function get_physician() {
  // Initialize empty
  let physician = null;
  // Retrieve new null or prefilled
  if (localStorage.getItem("physician") == null) {
    physician = {
      name: "",
      flow: "",
      date: new Date().toISOString().split('T')[0],
      start: 7,
      end: 19
    };
    save_physician(physician);
  } else {
    physician = JSON.parse(localStorage.getItem("physician"));
  }
  // Return
  return physician;
}
// Method for updating the identification.
function save_physician(physician = null) {
  if (!physician) {
    // If no physician given, reset from zero
    $("#input-physician, #input-flow, #input-date, #input-start, #input-end").val("").trigger("change");
    localStorage.removeItem("physician");

    // Then start anew
    let name = $("#input-physician").val().trim();
    let flow = $("#input-flow").val();
    let date = new Date().toISOString().split('T')[0];
    // If date field is not empty nor is null, parse it as Date
    if ($("#input-date").val()) { date = new Date($("#input-date").val()).toISOString().split('T')[0]; }
    let start = parseInt($("#input-start").val());
    if (isNaN(start)) { start = 7; } // If field value is NaN, set to defaul day shift time
    let end = parseInt($("#input-end").val());
    if (isNaN(end)) { end = 19; } // If field value is NaN, set to defaul day shift time

    physician = {
      name: name,
      flow: flow,
      date: date,
      start: start,
      end: end
    };
  }

  localStorage.setItem("physician", JSON.stringify(physician));
}
// Set identification header with given values
function update_physician_fields() {
  let physician = get_physician();
  $("#input-physician").val(physician.name.trim());
  $("#input-flow").val(physician.flow).trigger("change");
  $("#input-date").val(physician.date);
  $("#input-start").val(physician.start).trigger("change");
  $("#input-end").val(physician.end);
}

$(function () {
  // Set identification header with given values
  update_physician_fields();
  // Update identification when header changes
  $("#input-physician, #input-flow, #input-date, #input-start, #input-end").on("change", function() {
    let name = $("#input-physician").val().trim();
    let flow = $("#input-flow").val();
    let date = new Date().toISOString().split('T')[0];
    // If date field is not empty nor is null, parse it as Date
    if ($("#input-date").val()) { date = new Date($("#input-date").val()).toISOString().split('T')[0]; }
    let start = parseInt($("#input-start").val());
    if (isNaN(start)) { start = 7; } // If field value is NaN, set to defaul day shift time
    let end = parseInt($("#input-end").val());
    if (isNaN(end)) { end = 19; } // If field value is NaN, set to defaul day shift time

    let new_physician = {
      name: name,
      flow: flow,
      date: date,
      start: start,
      end: end
    };

    save_physician(new_physician);
  });

  // Reset data
  $("#reset-call").on("click", function() {
    $("#reset-modal").addClass("is-active");
  });
  // Cancel reset
  $("#reset-cancel").on("click", function() {
    $("#reset-modal").removeClass("is-active");
  });
  // Do reset
  $("#reset-do").on("click", function() {
    // Reset physician
    // > Save their name for later
    let name = $("#input-physician").val().trim();
    // > Zero all physician data
    save_physician();
    // > Update with their name
    $("#input-physician").val(name).trigger("change");
    // > Refresh fields
    update_physician_fields();

    // Close modal
    $("#reset-cancel").trigger("click");
  });

  // Add Patient Modal
  $("#add-start").on("click", function () {
    $("#add-modal").addClass("is-active");
    $("#add-atend").trigger("focus");
  });
  // Cancel Modal
  $("#add-cancel").on("click", function () {
    $("#add-modal").removeClass("is-active");
    $("#add-atend, #add-outcome").val("");
  });
  // Add Patient Method
  $("#add-new").on("click", function () {
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
  $("#import-json").on("click", function () {
    $("#upload-modal").addClass("is-active");
  });
  // Cancel upload
  $("#cancel-upload").on("click", function () {
    $("#upload-modal").removeClass("is-active");
    $("#upload-content").val("");
  });
  $("#confirm-upload").on("click", function () {
    // Disable button
    $(this)
      .addClass("is-loading")
      .attr("disabled", true);

    // Get contents
    let upload = $("#upload-content").val();
    if (typeof (upload) === "undefined" || upload == "") {
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
  $("#edit-dx-cancel").on("click", function () {
    $("#edit-dx-id").val("");
    $("#edit-dx-dx").val("");
    $("#edit-dx-notes").val("");
    $("#dx-modal").removeClass("is-active");
  });
  // Save edition
  $("#edit-dx-save").on("click", function () {
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
  $("#show-done").on("change", function () {
    // The choice is done on update,
    // so, just update them :)
    update_todos();
  });
});

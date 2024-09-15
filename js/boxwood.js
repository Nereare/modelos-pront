function remove_old_todos(todos) {
  if (todos === "undefined" || todos.length == 0) {
    todos = [];
  } else {
    todos.forEach(function(v, i, o) {
      let minus_24h = Date.now() - (24 * 60 * 60 * 1000);
      if (v.open < minus_24h) {
        o.splice(i, 1);
      }
    });
  }
  return todos;
}
function get_todos() {
  // Initialize empty
  let todos = null;
  // Retrieve new empty or prefilled
  if (localStorage.getItem("todos") == null) {
    todos = "[]";
  } else {
    todos = localStorage.getItem("todos");
  }
  // Parse Json
  todos = JSON.parse(todos);
  // Update todos - remove todos over 24h-old
  todos = remove_old_todos(todos);
  // Return
  return todos;
}
function update_todos() {
  // Get local to-dos
  let todos = get_todos();
  // Clear container
  $("#todos, #printable-todos-container").empty();
  // Check and update to-dos
  if (todos.length > 0) {
    todos.forEach(function(v, i) {
      // 1st Column - Identification
      let classification_span = $("<span>")
        .addClass("mr-1 boxwood-classification i-" + v.class_i + " f-" + v.class_f)
        .html("&nbsp;");
      // > Add ToDo
      let actions_addtodo_i = $("<i>")
        .addClass("mdi mdi-plus-circle");
      let actions_addtodo_icon = $("<span>")
        .addClass("icon")
        .append(actions_addtodo_i);
      let actions_addtodo = $("<a>")
        .addClass("has-text-info-dark")
        .append(actions_addtodo_icon)
        .attr("data-todo-id", i)
        .on("click", function () {
          let todo_id = $(this).attr("data-todo-id");
          let new_task = prompt("Nova tarefa:");
          if (new_task.trim() != "") {
            let new_todo = {
              label: new_task.trim(),
              done: false,
              last_checked: Date.now()
            };
            todos[todo_id].todos.push(new_todo);
            localStorage.setItem("todos", JSON.stringify(todos));
          }
          update_todos();
        });
      // > Finish patient
      let actions_finish_i = $("<i>")
        .addClass("mdi mdi-check-circle");
      let actions_finish_icon = $("<span>")
        .addClass("icon")
        .append(actions_finish_i);
      let actions_finish = $("<a>")
        .addClass("has-text-success-dark")
        .append(actions_finish_icon)
        .attr("data-todo-id", i)
        .on("click", function () {
          let todo_id = $(this).attr("data-todo-id");

          todos[todo_id].done = true;
          localStorage.setItem("todos", JSON.stringify(todos));

          update_todos();
        });
      // > UNfinish patient
      let actions_unfinish_i = $("<i>")
        .addClass("mdi mdi-close-circle");
      let actions_unfinish_icon = $("<span>")
        .addClass("icon")
        .append(actions_unfinish_i);
      let actions_unfinish = $("<a>")
        .addClass("has-text-danger-dark")
        .append(actions_unfinish_icon)
        .attr("data-todo-id", i)
        .on("click", function () {
          let todo_id = $(this).attr("data-todo-id");

          todos[todo_id].done = false;
          localStorage.setItem("todos", JSON.stringify(todos));

          update_todos();
        });
      // Name, age and open-time
      let time = new Date(v.open);
      let col1 = $("<td>")
        .html(v.name + ", " + v.age + "a (" + time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }) + ")")
        .prepend(classification_span);
      if (v.done) {
        col1
          .append(actions_unfinish);
      } else {
        col1
          .append(actions_addtodo)
          .append(actions_finish);
      }
      // > Printable 1st Column
      let col1_pr = $("<td>")
        .html(v.name + ", " + v.age + "a");
      // 2nd Column - Diagnosis & Notes
      let span = $("<span>")
        .html(v.dx);
      if (v.notes != "") {
        span.attr("title", v.notes);
      }
      let col2 = $("<td>").append(span);
      // > Printable 2nd Column
      let col2_pr = $("<td>")
        .html(v.dx);
      // > Printable Notes Column
      let col25_pr = $("<td>")
        .addClass("is-size-7")
        .html(v.notes);
      // 3rd Column - To-Dos
      let list = $("<ul>");
      let list_pr = $("<ul>");
      if (v.todos.length > 0) {
        v.todos.forEach(function(val, index) {
          let icon_i = $("<i>")
            .addClass("mdi");
          let icon_i_pr = $("<i>")
            .addClass("mdi");
          if (val.done) {
            icon_i.addClass("mdi-checkbox-marked-outline");
            icon_i_pr.addClass("mdi-checkbox-marked-outline");
          } else {
            icon_i.addClass("mdi-checkbox-blank-outline");
            icon_i_pr.addClass("mdi-checkbox-blank-outline");
          }
          let icon = $("<span>")
            .addClass("icon")
            .append(icon_i);
          // > Open To-Do
          let actions_update_i = $("<i>")
            .addClass("mdi mdi-clock-remove");
          let actions_update_icon = $("<span>")
            .addClass("icon")
            .append(actions_update_i);
          let actions_update = $("<a>")
            .addClass("has-text-warning-dark")
            .append(actions_update_icon)
            .attr("data-todo-id", i)
            .attr("data-id", index)
            .on("click", function () {
              let todos = get_todos();
              let todo_id = $(this).attr("data-todo-id");
              let this_id = $(this).attr("data-id");

              todos[todo_id].todos[this_id].last_checked = Date.now();
              localStorage.setItem("todos", JSON.stringify(todos));

              update_todos();
            });
          let actions_close_i = $("<i>")
            .addClass("mdi mdi-check-circle");
          let actions_close_icon = $("<span>")
            .addClass("icon")
            .append(actions_close_i);
          let actions_close = $("<a>")
            .addClass("has-text-success-dark")
            .append(actions_close_icon)
            .attr("data-todo-id", i)
            .attr("data-id", index)
            .on("click", function() {
              let todos = get_todos();
              let todo_id = $(this).attr("data-todo-id");
              let this_id = $(this).attr("data-id");

              todos[todo_id].todos[this_id].last_checked = Date.now();
              todos[todo_id].todos[this_id].done = true;
              localStorage.setItem("todos", JSON.stringify(todos));

              update_todos();
            });
          // > Closed To-Do
          let actions_reopen_i = $("<i>")
            .addClass("mdi mdi-archive-arrow-up");
          let actions_reopen_icon = $("<span>")
            .addClass("icon is-small")
            .append(actions_reopen_i);
          let actions_reopen = $("<a>")
            .addClass("has-text-danger-dark")
            .append(actions_reopen_icon)
            .attr("data-todo-id", i)
            .attr("data-id", index)
            .on("click", function() {
              let todos = get_todos();
              let todo_id = $(this).attr("data-todo-id");
              let this_id = $(this).attr("data-id");

              todos[todo_id].todos[this_id].last_checked = Date.now();
              todos[todo_id].todos[this_id].done = false;
              localStorage.setItem("todos", JSON.stringify(todos));

              update_todos();
            });
          // Button Container
          let buttons = $("<div>")
            .addClass("buttons is-inline-block ml-2");
          if (!v.done) {
            if (val.done) {
              buttons.append(actions_reopen);
            } else {
              buttons
                .append(actions_update)
                .append(actions_close);
            }
          }
          let time = new Date(val.last_checked);
          let text = $("<span>")
            .html(val.label + " (" + time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }) + ")")
            .append(buttons);
          let icontext = $("<span>")
            .addClass("icon-text")
            .append(icon)
            .append(text);
          let item = $("<li>").append(icontext);
          let icon_pr = $("<span>")
            .addClass("icon")
            .append(icon_i_pr);
          let time_pr = $("<sup>")
            .html(time.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }));
          let text_pr = $("<span>")
            .html(val.label)
            .append(time_pr);
          let icontext_pr = $("<span>")
            .addClass("icon-text")
            .append(icon_pr)
            .append(text_pr);
          let item_pr = $("<li>").append(icontext_pr);
          list.append(item);
          list_pr.append(item_pr);
        });
      } else {
        let item = $("<li>")
          .html("Nada?!");
        list.append(item);
      }
      col3 = $("<td>").append(list);
      let col3_pr = $("<td>").append(list_pr);

      let row = $("<tr>")
        .attr("data-id", i)
        .attr("id", "pt-" + i);
      row.append(col1);
      row.append(col2);
      row.append(col3);
      let row_pr = $("<tr>")
        .append(col1_pr)
        .append(col2_pr)
        .append(col25_pr)
        .append(col3_pr);
      if (v.done) {
        row.addClass("todo-done");
      } else {
        $("#printable-todos-container").append(row_pr);
      }
      $("#todos").append(row);
    });
  } else {
    $("#todos").append($("<tr>").append(
      $("<td>")
        .addClass("has-text-centered")
        .attr("colspan", "3")
        .html("Nenhum paciente em seguimento...")
    ));
  }
}
function parseClassification(classif) {
  classif = classif.toLowerCase().trim();
  if (classif == "") {
    classif = "green";
  }
  return classif;
}

$(function() {
  // Do initial update of the to-dos
  update_todos();
  // Repeat every 5 seconds
  //setInterval(update_todos, 5000);
  // Attack Tags
  BulmaTagsInput.attach();

  // Add Patient Modal
  $("#add-start").on("click", function() {
    $("#add-modal").addClass("is-active");
    $("#add-name").trigger("focus");
  });
  // Cancel Modal
  $("#add-cancel").on("click", function() {
    $("#add-modal").removeClass("is-active");
    $("#add-name, #add-age, #add-class-i, #add-class-f, #add-dx, #add-notes, #add-todos").val("");
  });
  // Add Patient Method
  $("#add-new").on("click", function() {
    // Get patient data
    let name = $("#add-name").val();
    name = (name == "" ? "(sem nome)" : name.trim());
    let age = $("#add-age").val();
    age = (age == "" ? 18 : parseInt(age));
    let class_i = $("#add-class-i").val();
    class_i = parseClassification(class_i);
    let class_f = $("#add-class-f").val();
    class_f = parseClassification(class_f);
    let dx = $("#add-dx").val();
    dx = (dx == "" ? "(sem HD)" : dx.trim());
    let notes = $("#add-notes").val().trim();
    let todos = $("#add-todos").val();
    todos = (todos == "" ? ["?"] : todos.split(","));
    // Get To-Dos
    let list = get_todos();

    // Include new patient
    let pt = {name: name, age: age, class_i: class_i, class_f: class_f, dx: dx, notes: notes, todos: [], open: Date.now(), expired: false};
    todos.forEach(function(v, i) {
      pt.todos.push({label: v.trim(), done: false, last_checked: Date.now()});
    });
    list.push(pt);
    localStorage.setItem("todos", JSON.stringify(list));

    // Finish Modal
    $("#add-cancel").trigger("click");
    // Refresh to-dos
    update_todos();
  });
});

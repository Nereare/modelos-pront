/******************************************/
/*                   JS                   */
/******************************************/
// Admin Methods
$(function () {
  console.log("Config methods ready!");

  // Create new user
  $("#formUserNew").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formUserNew button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");

    // Prepare user data
    let user = {
      username: $("#username").val(),
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      registryType: $("#registryType").val(),
      registryState: $("#registryState").val(),
      registryNumber: $("#registryNumber").val(),
      email: $("#email").val(),
      phone: $("#phone").val().replace(/\s/g, ""),
      roles: $("#roles").val()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: e.currentTarget.action,
      data: user
    })
      .done(function(response) {
        msg_type = response.success ? "success" : "warning";
        msg_text = response.msg;
      })
      .fail(function() {
        msg_type = "danger";
        msg_text = "Erro de comunicação com o servidor...";
      })
      .always(function() {
        // Show reply message
        window.showMessage(msg_type, msg_text);
        if (msg_type == "success") {
          // If success, redirect to users' list
          setTimeout(function () {
            window.location.replace($("#users-list").val());
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $("#formUserNew button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
        }
      });
  });

  // Edit user
  $("#formUserEdit").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formUserEdit button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");

    // Prepare user data
    let user = {
      username: $("#username").val(),
      email: $("#email").val(),
      roles: $("#roles").val()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: e.currentTarget.action,
      data: user
    })
      .done(function(response) {
        msg_type = response.success ? "success" : "warning";
        msg_text = response.msg;
      })
      .fail(function() {
        msg_type = "danger";
        msg_text = "Erro de comunicação com o servidor...";
      })
      .always(function() {
        // Show reply message
        window.showMessage(msg_type, msg_text);
        if (msg_type == "success") {
          // If success, redirect to users' list
          setTimeout(function () {
            window.location.replace($("#users-list").val());
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $("#formUserEdit button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
        }
      });
  });

  // Reset user's password
  // > Show confirmation modal
  $(".resetpw-user").on("click", function() {
    // Get reset data
    let username = $(this).attr("username");
    let uri = $(this).attr("target");
    // Set modal fields
    $("#reset-pw-modal-username").html(username);
    $("#reset-pw-modal-do").attr("reset-uri", uri);
    // Show modal
    $("#reset-pw-modal").addClass("is-active");
  });
  // > Cancel
  $("#reset-pw-modal-cancel").on("click", function() {
    // Hide modal
    $("#reset-pw-modal").removeClass("is-active");
    // Unset modal fields
    $("#reset-pw-modal-username").html("?");
    $("#reset-pw-modal-do").attr("reset-uri", "");
  });
  // > Do resetting
  $("#reset-pw-modal-do").on("click", function() {
    // Lock button
    $(this)
      .attr("disabled", true)
      .addClass("is-loading");
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: $(this).attr("reset-uri")
    })
      .done(function(response) {
        msg_type = response.success ? "success" : "warning";
        msg_text = response.msg;
      })
      .fail(function() {
        msg_type = "danger";
        msg_text = "Erro de comunicação com o servidor...";
      })
      .always(function() {
        // Show reply message
        window.showMessage(msg_type, msg_text);
        // Hide modal
        $("#reset-pw-modal-cancel").trigger("click");
      });
  });

  // Remove user
  // > Show confirmation modal
  $(".delete-user").on("click", function() {
    // Get removal data
    let username = $(this).attr("username");
    let uri = $(this).attr("target");
    // Set modal fields
    $("#delete-modal-username").html(username);
    $("#delete-modal-do").attr("delete-uri", uri);
    $("#delete-modal-reason").val("").trigger("focus");
    // Show modal
    $("#delete-modal").addClass("is-active");
  });
  // > Cancel
  $("#delete-modal-cancel").on("click", function() {
    // Hide modal
    $("#delete-modal").removeClass("is-active");
    // Unset modal fields
    $("#delete-modal-username").html("?");
    $("#delete-modal-do").attr("reset-uri", "");
    $("#delete-modal-reason").val("");
  });
  // > Do deleting
  $("#delete-modal-do").on("click", function() {
    // Lock button
    $(this)
      .attr("disabled", true)
      .addClass("is-loading");
    // Fetch reason
    let data = {
      reason: $("#delete-modal-reason").val().trim()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: $(this).attr("delete-uri"),
      data: data
    })
      .done(function(response) {
        msg_type = response.success ? "success" : "warning";
        msg_text = response.msg;
      })
      .fail(function() {
        msg_type = "danger";
        msg_text = "Erro de comunicação com o servidor...";
      })
      .always(function() {
        // Show reply message
        window.showMessage(msg_type, msg_text);
        // Reload window
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      });
  });
});

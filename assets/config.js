// JS Dependencies
import ClipboardJS from 'clipboard';

/******************************************/
/*                   JS                   */
/******************************************/
// Config Methods
$(function () {
  console.log("Métodos de Configuração prontos!");
  // Initialize Clipboard.js
  new ClipboardJS('.clipboard');

  /********************************/
  /*          User Forms          */
  /********************************/
  // Update base user information
  $("#formConfigUser").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formConfigUser button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");

    // Prepare user data
    let user = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      registryType: $("#registryType").val(),
      registryState: $("#registryState").val(),
      registryNumber: $("#registryNumber").val(),
      phone: $("#phone").val().replace(/\s/g, ""),
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "post",
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
        // Unlock button
        $("#formConfigUser button[type=submit]")
          .attr("disabled", false)
          .removeClass("is-loading");
      });
  });

  // Change user password
  $("#formChangePw").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formChangePw button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");

    // Get and confirm new password
    let new_pw1 = $("#newPw1").val();
    let new_pw2 = $("#newPw2").val();
    if (new_pw1 !== new_pw2) {
      // If new passwords do not match

      // Show warning message
      window.showMessage("warning", "As novas senhas não coincidem.");
      // Unlock button
      $("#formChangePw button[type=submit]")
        .attr("disabled", false)
        .removeClass("is-loading");
    } else {
      // If new passwords match
      // Prepare user data
      let pw = {
        oldPw: $("#oldPw").val(),
        newPw: new_pw1
      };
      console.log(pw);
      // Prepare message reply
      let msg_type = "info";
      let msg_text = "Aguarde...";

      // Send Ajax request
      $.ajax({
        method: "post",
        url: e.currentTarget.action,
        data: pw
      })
        .done(function (response) {
          msg_type = response.success ? "success" : "warning";
          msg_text = response.msg;
        })
        .fail(function () {
          msg_type = "danger";
          msg_text = "Erro de comunicação com o servidor...";
        })
        .always(function () {
          // Show reply message
          window.showMessage(msg_type, msg_text);
          // Unlock button
          $("#formChangePw button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
        });
    }
  });

  /********************************/
  /*         Places Forms         */
  /********************************/
  // Create or Edit place
  $("#formPlace").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formPlace button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");
    // Lock fields
    $("#name, #cnes, #phone, #address").attr("disabled", true);

    // Prepare place data
    let place = {
      id: parseInt($("#id").val()),
      name: $("#name").val().trim(),
      cnes: $("#cnes").val(),
      phone: $("#phone").val(),
      address: $("#address").val().trim()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: e.currentTarget.action,
      data: place
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.replace($("#places-list").val());
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $("#formPlace button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
          // Unlock fields
          $("#name, #cnes, #phone, #address").attr("disabled", false);
          // Focus on name
          $("#name").trigger("focus");
        }
      });
  });

  // Delete place
  $(".delete-place").on("click", function() {
    // Lock button
    $(this)
      .attr("disabled", true)
      .addClass("is-loading");

    // Get target URI
    let place = $(this).attr("target");
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: place
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $(this)
            .attr("disabled", false)
            .removeClass("is-loading");
        }
      });
  });

  // Set place as current
  $(".select-place").on("click", function() {
    // Lock button
    $(this)
      .attr("disabled", true)
      .addClass("is-loading");

    // Get target URI
    let place = $(this).attr("target");
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: place
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $(this)
            .attr("disabled", false)
            .removeClass("is-loading");
        }
      });
  });

  /********************************/
  /*          Header Form         */
  /********************************/
  // Create or Edit place
  $("#formHeader").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formHeader button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");
    // Lock field
    $("#header").attr("disabled", true);

    // Prepare place data
    let data = {
      header: $("#header").val().trim()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: e.currentTarget.action,
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
        if (msg_type == "success") {
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $("#formHeader button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
          // Unlock and focus field
          $("#header")
            .attr("disabled", false)
            .trigger("focus");
        }
      });
  });

  /********************************/
  /*          Texts Forms         */
  /********************************/
  // Remove given text
  $(".text-remove").on("click", function() {
    // Block this element
    $(this).attr("disabled", true);
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: $(this).attr("remove-uri")
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        } else {
          // Block this element
          $(this).attr("disabled", false);
        }
      });
  });

  // Edit text
  // > Show edit modal
  $(".text-edit").on("click", function() {
    // Get given text data
    let id   = $(this).attr("text-id");
    let name = $(this).attr("text-name");
    let txt  = $(this).attr("text-txt");
    // Set modal fields
    $("#text-edit-id").val(id);
    $("#text-edit-name").val(name).trigger("change");
    $("#text-edit-text").val(txt).trigger("change");

    // Show modal
    $("#text-edit-modal").addClass("is-active");
    // Focus on name field
    $("#text-edit-name").trigger("focus");
  });
  // > Hide edit modal
  $("#text-edit-cancel").on("click", function() {
    // Empty modal fields
    $("#text-edit-id").val("");
    $("#text-edit-name").val("");
    $("#text-edit-text").val("");
    // Hide modal
    $("#text-edit-modal").removeClass("is-active");
  });
  // > Save edits
  $("#text-edit-save").on("click", function() {
    // Lock buttons
    $("#text-edit-save, #text-edit-cancel")
      .attr("disabled", true)
      .addClass("is-loading");
    // Lock fields
    $("#text-edit-name, #text-edit-text").attr("disabled", true);

    // Prepare text data
    let text = {
      name: $("#text-edit-name").val().trim(),
      txt: $("#text-edit-text").val().trim()
    };
    // Prepare action URI
    let uri = $(this).attr("save-uri").replace('FOO', $("#text-edit-id").val());
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: uri,
      data: text
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock buttons
          $("#text-edit-save, #text-edit-cancel")
            .attr("disabled", false)
            .removeClass("is-loading");
          // Unlock fields
          $("#text-edit-name, #text-edit-text").attr("disabled", false);
          $("#text-edit-name").trigger("focus");
        }
      });
  });

  // Create or Edit text
  $("#formText").on("submit", function(e) {
    // Prevent default form submit actions
    e.preventDefault();
    // Lock button
    $("#formText button[type=submit]")
      .attr("disabled", true)
      .addClass("is-loading");
    // Lock fields
    $("#name, #text").attr("disabled", true);

    // Prepare text data
    let text = {
      id: parseInt($("#id").val()),
      name: $("#name").val().trim(),
      text: $("#text").val().trim()
    };
    // Prepare message reply
    let msg_type = "info";
    let msg_text = "Aguarde...";

    // Send Ajax request
    $.ajax({
      method: "get",
      url: e.currentTarget.action,
      data: text
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
          // If success, redirect to places' list
          setTimeout(function () {
            window.location.replace($("#texts-list").val());
          }, 1000);
        }
        else {
          // Otherwise reenable fields
          // Unlock button
          $("#formText button[type=submit]")
            .attr("disabled", false)
            .removeClass("is-loading");
          // Unlock fields
          $("#name, #text").attr("disabled", false);
          // Focus on name
          $("#name").trigger("focus");
        }
      });
  });
});

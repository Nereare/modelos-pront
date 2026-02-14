/******************************************/
/*                   JS                   */
/******************************************/
// Config Methods
$(function () {
  console.log("Config methods ready!");

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
  // Change user password
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
      name: $("#name").val(),
      cnes: $("#cnes").val(),
      phone: $("#phone").val(),
      address: $("#address").val()
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
          }, 2000);
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
          }, 2000);
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
});

/******************************************/
/*                   JS                   */
/******************************************/
// Config Methods
$(function () {
  console.log("Config methods ready!");

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
      .fail(function(status) {
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
        .fail(function (status) {
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
});

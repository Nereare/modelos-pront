$(document).ready(function() {
  // Close modals with a `.delete` button
  $(".delete").on("click", function() {
    $(this).parents(".modal").removeClass("is-active");
  });

  // Change tabs
  $("#menu-button").on("click", function() {
    if ( !$("#menu-button").parent().hasClass("is-active") ) {
      $("#sadt-button, #crm-button, #header-button, #reset-button").parent().removeClass("is-active");
      $("#sadt, #crm, #header, #reset").addClass("is-hidden");
      $("#menu-button").parent().addClass("is-active");
      $("#menu").removeClass("is-hidden");
    }
  });
  $("#sadt-button").on("click", function() {
    if ( !$("#sadt-button").parent().hasClass("is-active") ) {
      $("#menu-button, #crm-button, #header-button, #reset-button").parent().removeClass("is-active");
      $("#menu, #crm, #header, #reset").addClass("is-hidden");
      $("#sadt-button").parent().addClass("is-active");
      $("#sadt").removeClass("is-hidden");
    }
  });
  $("#crm-button").on("click", function() {
    if ( !$("#crm-button").parent().hasClass("is-active") ) {
      $("#menu-button, #sadt-button, #header-button, #reset-button").parent().removeClass("is-active");
      $("#menu, #sadt, #header, #reset").addClass("is-hidden");
      $("#crm-button").parent().addClass("is-active");
      $("#crm").removeClass("is-hidden");
    }
  });
  $("#header-button").on("click", function() {
    if ( !$("#header-button").parent().hasClass("is-active") ) {
      $("#menu-button, #sadt-button, #crm-button, #reset-button").parent().removeClass("is-active");
      $("#menu, #sadt, #crm, #reset").addClass("is-hidden");
      $("#header-button").parent().addClass("is-active");
      $("#header").removeClass("is-hidden");
    }
  });
  $("#reset-button").on("click", function() {
    if ( !$("#reset-button").parent().hasClass("is-active") ) {
      $("#menu-button, #sadt-button, #crm-button, #header-button").parent().removeClass("is-active");
      $("#menu, #sadt, #crm, #header").addClass("is-hidden");
      $("#reset-button").parent().addClass("is-active");
      $("#reset").removeClass("is-hidden");
    }
  });

  // Toggle between single-icon (wide) and three-icon (short) line
  $(".line-menu").on("change", function() {
    var i = $(this).prop("id").match(/\d/)[0];
    if ( $(this).prop("checked") ) {
      $("#line" + i + "-widemenu").removeClass("is-hidden");
      $("#line" + i + "-shortmenu").addClass("is-hidden");
    } else {
      $("#line" + i + "-widemenu").addClass("is-hidden");
      $("#line" + i + "-shortmenu").removeClass("is-hidden");
    }
  });

  // Hide reply notification
  $("#config-reply button").on("click", function() {
    $("#config-reply")
      .removeClass("is-success is-warning is-danger")
      .addClass("is-hidden");
  });

  // Show cookie reset modal
  $("#reset-cookies").on("click", function() {
    $("#reset-cookies-modal").addClass("is-active");
  });

  // Send MENU data to be saved
  $("#menu-save").on("click", function() {
    $(this)
      .addClass("is-loading")
      .prop("disabled", true);
    $("#config-reply")
      .addClass("is-hidden")
      .removeClass("is-success is-info is-warning is-danger");

    // Get new menu data
    var newmenu = [];
    $(".line-menu").each(function() {
      var i = $(this).prop("id").match(/\d/)[0];
      if ( $(this).prop("checked") ) {
        newmenu.push( [ $("#line" + i + "-optwide select").val() ] );
      } else {
        var newline = [
          $("#line" + i + "-opt1 select").val(),
          $("#line" + i + "-opt2 select").val(),
          $("#line" + i + "-opt3 select").val()
        ];
        $.each(newline, function(key, value) {
          if ( value == "" ) { newline[key] = null; }
        });
        newmenu.push( newline );
      }
    });

    // Set data for AJAX
    var data = {
      do: "menu",
      newmenu: JSON.stringify(newmenu)
    };

    $.ajax({
      url: "scripts/config-do.php",
      type: "GET",
      data: data
    })
      .done(function(r) {
        if ( r == "0" ) {
          $("#config-reply").addClass("is-success");
          $("#config-reply p").html("Novo menu salvo!");
        } else if ( r == "406" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Algum dado enviado estava errado");
        } else if ( r == "417" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Os dado enviado estavam incompletos");
        } else {
          $("#config-reply").addClass("is-danger");
          $("#config-reply p").html("Algo deu errado :(");
        }
      })
      .fail(function() {
        $("#config-reply").addClass("is-danger");
        $("#config-reply p").html("Algo deu errado :(");
      })
      .always(function() {
        $("#config-reply").removeClass("is-hidden");
        $("#menu-save")
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });
  // Send SADT data to be saved
  $("#sadt-save").on("click", function() {
    $(this)
      .addClass("is-loading")
      .prop("disabled", true);
    $("#config-reply")
      .addClass("is-hidden")
      .removeClass("is-success is-info is-warning is-danger");

    // Set regex pattern(s) for place data checking
    var phone_regex = /((\(\d{2}\)|\d{2})?( )?(\d)?( |-)?(\d{4})( |-)?(\d{4}))/;
    // Get place data
    var place_name = $("#place-name").val();
    var place_cnes = $("#place-cnes").val();
    var place_phone = $("#place-phone").val();
    var place_address = $("#place-address").val();
    // Checks for validity of place inputs
    if ( place_name.length > 80 ) { place_name = place_name.substring(0, 80); }
    if ( place_cnes.length > 7 ) { place_cnes = place_cnes.substring(0, 7); }
    if ( !place_phone.match( phone_regex ) ) { place_phone = ""; }
    if ( place_address.length > 80 ) { place_address = place_address.substring(0, 80); }

    // Set data for AJAX
    var data = {
      do: "sadt",
      place_name: place_name,
      place_cnes: place_cnes,
      place_phone: place_phone,
      place_address: place_address
    };

    $.ajax({
      url: "scripts/config-do.php",
      type: "GET",
      data: data
    })
      .done(function(r) {
        if ( r == "0" ) {
          $("#config-reply").addClass("is-success");
          $("#config-reply p").html("Novos dados de local salvos!");
        } else if ( r == "406" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Algum dado enviado estava errado");
        } else if ( r == "417" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Os dado enviado estavam incompletos");
        } else {
          $("#config-reply").addClass("is-danger");
          $("#config-reply p").html("Algo deu errado :(");
        }
      })
      .fail(function() {
        $("#config-reply").addClass("is-danger");
        $("#config-reply p").html("Algo deu errado :(");
      })
      .always(function() {
        $("#config-reply").removeClass("is-hidden");
        $("#sadt-save")
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });
  // Send CRM data to be saved
  $("#crm-save").on("click", function() {
    $(this)
      .addClass("is-loading")
      .prop("disabled", true);
    $("#config-reply")
      .addClass("is-hidden")
      .removeClass("is-success is-info is-warning is-danger");

    // Set regex pattern(s) for physician data checking
    var crm_regex = /\d{4,6}/;
    var uf_regex = /AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO/;
    // Get physician data
    var physician_name = $("#physician-name").val();
    var physician_crm = $("#physician-crm").val();
    var physician_crm_uf = $("#physician-crm-uf").val();
    // Checks for validity of physician inputs
    if ( !physician_crm.match( crm_regex ) ) { physician_crm = ""; }
    if ( !physician_crm_uf.match( uf_regex ) ) { physician_crm_uf = "SP"; }

    // Set data for AJAX
    var data = {
      do: "crm",
      physician_name: physician_name,
      physician_crm: physician_crm,
      physician_crm_uf: physician_crm_uf
    };

    $.ajax({
      url: "scripts/config-do.php",
      type: "GET",
      data: data
    })
      .done(function(r) {
        if ( r == "0" ) {
          $("#config-reply").addClass("is-success");
          $("#config-reply p").html("Novos dados médicos salvos!");
        } else if ( r == "406" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Algum dado enviado estava errado");
        } else if ( r == "417" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Os dado enviado estavam incompletos");
        } else {
          $("#config-reply").addClass("is-danger");
          $("#config-reply p").html("Algo deu errado :(");
        }
      })
      .fail(function() {
        $("#config-reply").addClass("is-danger");
        $("#config-reply p").html("Algo deu errado :(");
      })
      .always(function() {
        $("#config-reply").removeClass("is-hidden");
        $("#crm-save")
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });
  // Send HEADER data to be saved
  $("#header-save").on("click", function() {
    $(this)
      .addClass("is-loading")
      .prop("disabled", true);
    $("#config-reply")
      .addClass("is-hidden")
      .removeClass("is-success is-info is-warning is-danger");

    // Get headers
    var sr_header = $("#sr_header").val().trim();

    // Set data for AJAX
    var data = {
      do: "header",
      sr_header: sr_header
    };

    $.ajax({
      url: "scripts/config-do.php",
      type: "GET",
      data: data
    })
      .done(function(r) {
        if ( r == "0" ) {
          $("#config-reply").addClass("is-success");
          $("#config-reply p").html("Novos cabeçalhos salvos!");
        } else if ( r == "406" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Algum dado enviado estava errado");
        } else if ( r == "417" ) {
          $("#config-reply").addClass("is-warning");
          $("#config-reply p").html("Os dado enviado estavam incompletos");
        } else {
          $("#config-reply").addClass("is-danger");
          $("#config-reply p").html("Algo deu errado :(");
        }
      })
      .fail(function() {
        $("#config-reply").addClass("is-danger");
        $("#config-reply p").html("Algo deu errado :(");
      })
      .always(function() {
        $("#config-reply").removeClass("is-hidden");
        $("#header-save")
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });

  // Send request to rest cookie and session data
  $("#reset-cookies-confirm").on("click", function() {
    $.ajax({
      url: "scripts/config-do.php",
      type: "GET",
      data: { do: "reset" }
    })
      .done(function(r) {
        $(location).prop("href", ".");
      })
      .fail(function() {
        $("#config-reply p").html("Algo deu errado :(");
        $("#config-reply")
          .addClass("is-danger")
          .removeClass("is-hidden");
        $(this)
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });
});

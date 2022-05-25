$(document).ready(function() {
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

  $("#config-reply button").on("click", function() {
    $("#config-reply")
      .removeClass("is-success is-warning is-danger")
      .addClass("is-hidden");
  });

  $("#config-save").on("click", function() {
    $("#config-save")
      .addClass("is-loading")
      .prop("disabled", true);

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

    var phone_regex = /((\(\d{2}\))?( )?(\d)?( |-)?(\d{4})( |-)?(\d{4}))/;
    var place_name = $("#place-name").val();
    var place_cnes = $("#place-cnes").val();
    var place_phone = $("#place-phone").val();
    var place_address = $("#place-address").val();

    // Checks for validity of inputs
    if ( place_name.length > 80 ) { place_name = place_name.substring(0, 80); }
    if ( place_cnes.length > 7 ) { place_cnes = place_cnes.substring(0, 7); }
    if ( !place_phone.match( phone_regex ) ) { place_phone = "(11) 3066-8000"; }
    if ( place_address.length > 80 ) { place_address = place_address.substring(0, 80); }

    // Set data for AJAX
    var data = {
      newmenu: JSON.stringify(newmenu),
      place_name: place_name,
      place_cnes: place_cnes,
      place_phone: place_phone,
      place_address: place_address
    };
    console.log( data );

    $.ajax({
      url: "scripts/config-do.php",
      type: "get",
      data: data
    })
      .done(function() {
        $("#config-reply").addClass("is-success");
        $("#config-reply p").html("Novo menu salvo!");
      })
      .fail(function() {
        $("#config-reply").addClass("is-danger");
        $("#config-reply p").html("Algo deu errado :(");
      })
      .always(function() {
        $("#config-reply").removeClass("is-hidden");
        $("#config-save")
          .removeClass("is-loading")
          .prop("disabled", false);
      });
  });
});

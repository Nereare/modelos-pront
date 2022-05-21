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

    console.log( JSON.stringify(newmenu) );

    $.ajax({
      url: "scripts/config-do.php",
      type: "get",
      data: {
        newmenu: JSON.stringify(newmenu)
      }
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

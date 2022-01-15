$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  var maintenance = false;
  if( maintenance ) {
    $("#maintenance").css("display", "block");
  }

  // Enable abnormal breathing description:
  $("input[name='breathe']").on("change", function() {
    if( $("input[name='breathe']:checked").val() == "dispneice" ) {
      $("#breathe-abnormal-desc-field").css("display", "inline-block");
    } else {
      $("#breathe-abnormal-desc-field").css("display", "none");
      $("#breathe-abnormal-desc").val("");
    }
  });

  // Enable heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) {
      $("#heart-murmur-desc").css("display", "inline-block");
    }
    else {
      $("#heart-murmur-desc")
        .css("display", "none")
        .val("");
    }
  });

  // Enable crepitation description:
  $("#lung-sounds").on("change", function() {
    if(
      $("#lung-sounds").val() == "com crepitação estertorante em " ||
      $("#lung-sounds").val() == "com redução de murmúrios vesiculares até " ||
      $("#lung-sounds").val() == "com sopro cavernoso em "
    ) {
      $("#lung-crept-field").css("display", "inline-block");
    } else {
      $("#lung-crept-field").css("display", "none");
      $("#lung-crept").val("base direita");
    }
  });

  // Enable percussion mass chart:
  $("#abdomen-percussion").on("change", function() {
    if( $("#abdomen-percussion").val() == "com macicez percutível em " ) {
      $("#abdomen-mass-chart").css("display", "block");
    } else {
      $("#abdomen-mass-chart").css("display", "none");
    }
  });
  // Enable Skoda description:
  $("#abdomen-skoda").on("change", function() {
    if( $("#abdomen-skoda").val() == "presente a " ) {
      $("#abdomen-skoda-desc").css("display", "inline-block");
    } else {
      $("#abdomen-skoda-desc").css("display", "none");
      $("#abdomen-skoda-cm").val("");
    }
  });
  // Enable mass description:
  $("#abdomen-stuff").on("change", function() {
    if( $("#abdomen-stuff").val() == "com " ) {
      $("#abdomen-stuff-desc").css("display", "inline-block");
    } else {
      $("#abdomen-stuff-desc")
        .css("display", "none")
        .val("");
    }
  });

  // Build output:
  $("#button-run").on("click", function() {
    var qualitative_exam = [];
    if( $('input[name="color"]:checked').val() == "Corade" ) {
      qualitative_exam.push("Corade");
    } else {
      qualitative_exam.push("Descorade " + $('input[name="color"]:checked').val() + "+/4+");
    }
    if( $('input[name="hydro"]:checked').val() == "hidratade" ) {
      qualitative_exam.push("hidratade");
    } else {
      qualitative_exam.push("desidratade " + $('input[name="hydro"]:checked').val() + "+/4+");
    }
    if( $('input[name="cyanose"]:checked').val() == "acianótice" ) {
      qualitative_exam.push("acianótice");
    } else {
      qualitative_exam.push("cianótice " + $('input[name="cyanose"]:checked').val() + "+/4+");
    }
    if( $('input[name="icter"]:checked').val() == "anictérice" ) {
      qualitative_exam.push("anictérice");
    } else {
      qualitative_exam.push("ictérice " + $('input[name="icter"]:checked').val() + "+/4+");
    }
    qualitative_exam.push($('input[name="fever"]:checked').val());
    qualitative_exam.push($('input[name="breathe"]:checked').val());

    // Objetivo
    $("#output-o").val("# EF\nPaciente em " + $("#status").val() + "EG.\n" + humanList(qualitative_exam) + ".\nSat. O2 = " + $("#ssvv-sat").val() + " " + $("#ssvv-sat-type").val() + " | Pulso = " + $("#ssvv-pulse").val() + "bpm | PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pad").val() + "mmHg | FR = " + $("#ssvv-fr").val() + "irpm\n" );
    if(
      $("#exam-lung").is(":checked") ||
      $("#exam-heart").is(":checked") ||
      $("#exam-oto").is(":checked") ||
      $("#exam-oro").is(":checked") ||
      $("#exam-naso").is(":checked")
    ) {
      var foobar = $("#output-o").val();
      $("#output-o").val(foobar + "\n");
    }
    if( $("#exam-lung").is(":checked") ) {
      var foobar = $("#output-o").val();
      var crept = ".";
      if(
        $("#lung-sounds").val() == "com crepitação estertorante em " ||
        $("#lung-sounds").val() == "com redução de murmúrios vesiculares até " ||
        $("#lung-sounds").val() == "com sopro cavernoso em "
      ) { crept = $("#lung-crept").val() + "."; }
      $("#output-o").val(foobar + "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + crept);
    }
    if( $("#exam-heart").is(":checked") ) {
      var foobar = $("#output-o").val();
      var murmur = $("#heart-murmur").val();
      if( murmur == "com sopro" ) {
        murmur += " " + $("#heart-murmur-desc").val();
      }
      $("#output-o").val(foobar + "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + ".");
    }
    if( $("#exam-oto").is(":checked") ) {
      var foobar = $("#output-o").val();
      $("#output-o").val(foobar + "Otoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + " " + $("#oto-d-retromembrane").val() + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n- OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + " " + $("#oto-e-retromembrane").val() + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + ".");
    }
    if( $("#exam-oro").is(":checked") ) {
      var foobar = $("#output-o").val();
      $("#output-o").val(foobar + "Oroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + "." );
    }
    if( $("#exam-naso").is(":checked") ) {
      var foobar = $("#output-o").val();
      $("#output-o").val(foobar + "Nasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val());
    }
  });
  // / Build output
});

function humanList(arr) {
  switch(arr.length) {
    case 0:
      return "nenhum sintoma";
      break;
    case 1:
      return arr.join("");
      break;
    case 2:
      return arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      var r = arr.join(", ");
      r += " e " + last;
      return r;
  }
}

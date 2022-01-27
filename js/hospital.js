$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  var maintenance = false;
  if( maintenance ) {
    $("#maintenance").css("display", "block");
  }

  // Change febrile state when fever is input
  $("#ssvv-temp").on("input change", function() {
    var temp = parseFloat( $("#ssvv-temp").val() );
    if( temp >= 37.8 ) { $("#fever-yes").prop("checked", true); }
    else { $("#fever-none").prop("checked", true); }
  });

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

  // Enable oedema intensity:
  $("#oedema").on("change", function() {
    if( $("#oedema").val() != "sem edemas" ) {
      $("#oedema-grade").css("display", "inline-block");
    } else {
      $("#oedema-grade")
        .css("display", "none")
        .val("1+/4+");
    }
  });

  // Calculate BMI when appliable:
  $("#ssvv-weight, #ssvv-height").on("input change", function() {
    if(
      $("#ssvv-weight").val() != "" &&
      $("#ssvv-height").val() != ""
    ) {
      var weight = parseFloat( $("#ssvv-weight").val() );
      var height = parseFloat( $("#ssvv-height").val() ) / 100;
      var bmi = weight / (height * height);
      $("#ssvv-bmi").val( bmi.toFixed(1) );
    }
  });

  // Disable MMII pulse descriptors, if absent:
  $("#mmiipulse-strength").on("change", function() {
    if( $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ) { $("#mmiipulse-descriptors").css("display", "none"); }
    else { $("#mmiipulse-descriptors").css("display", "inline-block"); }
  });

  // Build output:
  $("#button-run").on("click", function() {
    var o = ["# EF"];
    o.push( "Paciente em " + $("#status").val() + "EG." );

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
    o.push( humanList(qualitative_exam) + "." );

    // Vital Signs
    if(
      $("#ssvv-sat").val() != "" ||
      $("#ssvv-pulse").val() != "" ||
      (
        $("#ssvv-pas").val() != "" &&
        $("#ssvv-pad").val() != ""
      ) ||
      $("#ssvv-fr").val() != "" ||
      $("#ssvv-temp").val() != "" ||
      $("#ssvv-weight").val() != "" ||
      $("#ssvv-height").val() != ""
    ) {
      var ssvv = [];
      if( $("#ssvv-sat").val() != "" ) { ssvv.push( "Sat. O2 = " + $("#ssvv-sat").val() + "% " + $("#ssvv-sat-type").val() ); }
      if( $("#ssvv-pulse").val() != "" ) { ssvv.push( "Pulso = " + $("#ssvv-pulse").val() + "bpm" ); }
      if( $("#ssvv-pas").val() != "" ) { ssvv.push( "PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pad").val() + "mmHg" ); }
      if( $("#ssvv-fr").val() != "" ) { ssvv.push( "FR = " + $("#ssvv-fr").val() + "irpm" ); }
      if( $("#ssvv-temp").val() != "" ) { ssvv.push( "Temp = " + $("#ssvv-temp").val() + "°C (" + $("#ssvv-temp-type").val() + ")" ); }
      if( $("#ssvv-weight").val() != "" ) { ssvv.push( "Peso = " + $("#ssvv-weight").val() + "kg" ); }
      if( $("#ssvv-height").val() != "" ) { ssvv.push( "Alt = " + $("#ssvv-height").val() + "cm" ); }
      if(
        $("#ssvv-weight").val() != "" &&
        $("#ssvv-height").val() != ""
      ) {
        var weight = parseFloat( $("#ssvv-weight").val() );
        var height = parseFloat( $("#ssvv-height").val() ) / 100;
        var bmi = weight / (height * height);
        ssvv.push( "IMC = " + bmi.toFixed(1) + "kg/m²" );
      }
      o.push( ssvv.join(" | ") );
    }

    if( $("#exam-eye").is(":checked") ) {
      o.push( "Olhos: conjuntiva " + $("#eye-white").val() + ", secreções " + $("#eye-secr").val() + "." );
    }
    if( $("#exam-neck").is(":checked") ) {
      var cerv = ["Cervical:"];
      if( $("#thyroid").val() != "" ) { cerv.push( "Tiroide " + $("#thyroid").val() + "." ); }
      if( $("#lymph").val() != "" ) { cerv.push( $("#lymph").val() + $("#lymph-desc").val() + "." ); }
      o.push( cerv.join(" ") );
    }
    if( $("#exam-lung").is(":checked") ) {
      var crept = ".";
      if(
        $("#lung-sounds").val() == "com crepitação estertorante em " ||
        $("#lung-sounds").val() == "com redução de murmúrios vesiculares até " ||
        $("#lung-sounds").val() == "com sopro cavernoso em "
      ) { crept = $("#lung-crept").val() + "."; }
      o.push( "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + crept );
    }
    if( $("#exam-heart").is(":checked") ) {
      var murmur = $("#heart-murmur").val();
      if( murmur == "com sopro" ) {
        murmur += " " + $("#heart-murmur-desc").val();
      }
      o.push( "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + "." );
    }
    if( $("#exam-abdomen").is(":checked") ) {
      var abd = "Abdome: " + $("#abdomen").val() + ", ruídos hidroaéreos " + $("#abdomen-rha").val() + ", " + $("#abdomen-tension").val() + ", percussão " + $("#abdomen-percussion").val();
      if( $("#abdomen-percussion").val() != "globalmente timpânica" ) {
        var mass = [];
        $.each($("input[name='abdomen-mass']:checked"), function(){ mass.push( $(this).val() ); });
        abd += humanList( mass );
      }
      abd += ", espaço de Traube " + $("#abdomen-traube").val() + ", margem inferior de fígado percutível ";
      var hep = parseInt( $("#abdomen-hepatimetry").val() );
      if( hep > 0 ) { abd += Math.abs(hep) + "cm abaixo de rebordo costal direito"; }
      else if ( hep < 0 ) { abd += Math.abs(hep) + "cm acima de rebordo costal direito"; }
      else { abd += "em nível de rebordo costal direito"; }
      if( $("#abdomen-mobilemass").val() != "" ) { abd += ", macicez móvel " + $("#abdomen-mobilemass").val(); }
      if( $("#abdomen-skoda").val() != "" ) {
        abd += ", semicírculo de Skoda " + $("#abdomen-skoda").val();
        if( $("#abdomen-skoda").val() == "presente a " ) { abd += $("#abdomen-skoda-cm").val() + "cm de cicatriz umbilical"; }
      }
      if( $("#abdomen-fillip").val() != "" ) { abd += ", sinal do piparote " + $("#abdomen-fillip").val(); }
      abd += ", " + $("#abdomen-stuff").val();
      if( $("#abdomen-stuff").val() == "com " ) { abd += $("#abdomen-stuff-desc").val(); }
      if( $("#abdomen-peritonitis").val() != "" ) { abd += ", descompressão brusca " + $("#abdomen-peritonitis").val(); }
      abd += ".";
      if( $("#abdomen-other").val() != "" ) { abd += $("#abdomen-other").val(); }

      o.push( abd );
    }
    if( $("#exam-murphy").is(":checked") ) {
      o.push( "Sinal de Murphy " + $("#murphy").val() + "." );
    }
    if( $("#exam-mcburney").is(":checked") ) {
      o.push( "Sinal de McBurney " + $("#mcburney").val() + "." );
    }
    if( $("#exam-giordano").is(":checked") ) {
      o.push( "Giordano " + $("#giordano").val() + "." );
    }
    if( $("#exam-oto").is(":checked") ) {
      o.push( "Otoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + " " + $("#oto-d-retromembrane").val() + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n- OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + " " + $("#oto-e-retromembrane").val() + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + "." );
    }
    if( $("#exam-oro").is(":checked") ) {
      o.push( "Oroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + "." );
    }
    if( $("#exam-naso").is(":checked") ) {
      o.push( "Nasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val() );
    }
    if( $("#skin").val() != "" ) {
      o.push( "Pele: " + $("#skin").val() );
    }
    if( $("#exam-extr").is(":checked") ) {
      var oedema = $("#oedema").val();
      if( oedema != "sem edemas" ) { oedema += " " + $("#oedema-grade").val(); }
      var pulse = "";
      if( $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ) { pulse = $("#mmiipulse-strength").val(); }
      else { pulse = $("#mmiipulse-strength").val() + " e " + $("#mmiipulse-simmetry").val() + ", palpáveis a partir de " + $("#mmiipulse-artery").val(); }
      o.push( "MMII: " + oedema + ", pulsos " + pulse + "." );
    }

    $("#output-o").val( o.join("\n") );
  });
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

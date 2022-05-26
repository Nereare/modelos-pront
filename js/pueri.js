$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function() {
    if ( $(this).is(":checked") ) {
      $(this).parent()
        .addClass("is-primary")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-marked");
    } else {
      $(this).parent()
        .removeClass("is-primary")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-blank-outline");
    }
  });

  // Check age
  $("#age-years, #age-months").on("input", function() {
    var age = (parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
    if( age > 60) {
      alert("A idade máxima suportada por esta calculadora é de 5a.");
      $("#age-years").val(0);
      $("#age-months").val(0).focus();
    }
  });

  // Show peer description
  $("#peer").on("change", function() {
    if(
      $("#peer").val() == "cuidador" ||
      $("#peer").val() == "outro"
    ) { $(".peer-wtf").prop("disabled", false); }
    else { $(".peer-wtf").prop("disabled", true).val(""); }
  });
  // Show feeding descriptors depending on choice
  $("#feeding-lm").on("change", function() {
    if( $("#feeding-lm").is(":checked") ){
      $("#feeding-lm-difficulty").removeClass("is-hidden");
    } else {
      $("#feeding-lm-difficulty").addClass("is-hidden");
      $(".feeding-difficulty-lm").prop("checked", false);
    }
  });
  $("#feeding-formula").on("change", function() {
    if( $("#feeding-formula").is(":checked") ){
      $("#feeding-fl").removeClass("is-hidden");
    } else {
      $("#feeding-fl").addClass("is-hidden");
      $(".feeding-difficulty-fl").prop("checked", false);
    }
  });
  $("#feeding-food").on("change", function() {
    if( $("#feeding-food").is(":checked") ){
      $("#feeding-other").removeClass("is-hidden");
    } else {
      $("#feeding-other").addClass("is-hidden");
      $(".feeding-difficulty-other").prop("checked", false);
    }
  });
  // Show school year selection
  $("#school").on("change", function() {
    if( $("#school option:selected").val() == "refere que paciente está frequentando escola" ) {
      $("#school-year").prop("disabled", false);
    } else {
      $("#school-year").prop("disabled", true)
      $("#school-year").val("");
    }
  });
  // Show fontanelle descriptors
  $("#fontanelle-ant").on("change", function() {
    if( $("#fontanelle-ant").val() == "aberta" ) { $("#fontanelle-ant-width").prop("disabled", false); }
    else { $("#fontanelle-ant-width").prop("disabled", true).val(""); }
  });
  $("#fontanelle-post").on("change", function() {
    if( $("#fontanelle-post").val() == "aberta" ) { $("#fontanelle-post-width").prop("disabled", false); }
    else { $("#fontanelle-post-width").prop("disabled", true).val(""); }
  });
  // Show strabism descriptors
  $("#eyes").on("change", function() {
    if( $("#eyes").val() == "Observa-se estrabismo" ) { $(".eyes-strab").prop("disabled", false); }
    else { $(".eyes-strab").prop("disabled", true); }
  });
  // Change febrile state when fever is input
  $("#ssvv-temp").on("input change", function() {
    var temp = parseFloat( $("#ssvv-temp").val() );
    if( temp >= 37.8 ) { $("#fever-yes").prop("checked", true); }
    else if ( temp <= 34 ) { $("#fever-hypo").prop("checked", true); }
    else { $("#fever-none").prop("checked", true); }
  });
  // Enable abnormal breathing description:
  $("input[name='breathe']").on("change", function() {
    if( $("input[name='breathe']:checked").val() == "dispneice" ) {
      $("#breathe-abnormal-desc").prop("disabled", false);
    } else {
      $("#breathe-abnormal-desc")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable crepitation description:
  $("#lung-sounds").on("change", function() {
    if(
      $("#lung-sounds").val() == "com crepitação estertorante em " ||
      $("#lung-sounds").val() == "com sopro cavernoso em "
    ) {
      $("#lung-crept").prop("disabled", false);
    } else {
      $("#lung-crept")
        .prop("disabled", true)
        .val("base direita");
    }
  });
  // Enable heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) {
      $("#heart-murmur-desc").prop("disabled", false);
    }
    else {
      $("#heart-murmur-desc")
        .prop("disabled", true)
        .val("");
    }
  });
  // Show abdominal tumor description
  $("#tummy-tumors").on("change", function() {
    if( $("#tummy-tumors").val() == "com " ) { $("#tummy-tumor-desc").prop("disabled", false); }
    else { $("#tummy-tumor-desc").prop("disabled", true).val(""); }
  });
  // Show belly button descriptors
  $("#tummy-cord").on("change", function() {
    if( $("#tummy-cord").val() == "sem coto umbilical" ) { $(".tummy-button-misc").prop("disabled", false); }
    else { $(".tummy-button-misc").prop("disabled", true) }
  });
  // Show hernia width
  $("#tummy-button-desc").on("change", function() {
    if( $("#tummy-button-desc").val() == "sem hérnia umbilical palpável" ) { $("#tummy-button-width").css("display", "none"); }
    else { $("#tummy-button-width").css("display", "inline-block"); }
  });
  // Show adequate perineum descriptors
  $("#bio-sex").on("change", function() {
    if( $("#bio-sex").val() == "f" ) {
      $(".perineum-f, .perineum-both").removeClass("is-hidden");
      $(".perineum-m, .perineum-notice").addClass("is-hidden");
    } else {
      $(".perineum-m, .perineum-both").removeClass("is-hidden");
      $(".perineum-f, .perineum-notice").addClass("is-hidden");
    }
  });
  $("#perineum-other").on("change", function() {
    if ( $("#perineum-other").val() == "outro" ) { $("#perineum-other-desc").prop("disabled", false); }
    else { $("#perineum-other-desc").prop("disabled", true).val(""); }
  });
  // Show timpanic membrane descriptors
  $("#oto-d-membrane").on("change", function() {
    if( $(this).val() == "não observável" ) { $("#oto-d-retromembrane").css("display", "none"); }
    else { $("#oto-d-retromembrane").css("display", "inline-block"); }
  });
  $("#oto-e-membrane").on("change", function() {
    if( $(this).val() == "não observável" ) { $("#oto-e-retromembrane").css("display", "none"); }
    else { $("#oto-e-retromembrane").css("display", "inline-block"); }
  });
  // Show cavity options if teeth present
  $("#exam-teeth-teeth").on("change", function() {
    if( $("#exam-teeth-teeth option:selected").val() == "dentes ausentes" ) { $("#exam-teeth-cavity").prop("disabled", true); }
    else { $("#exam-teeth-cavity").prop("disabled", false); }
  });

  // Growth calculation
  $("#last-weight-date, #last-weight, #weight").on("change", function() {
    if(
      $("#last-weight-date").val() != "" &&
      $("#last-weight").val() != "" &&
      $("#weight").val() != ""
    ) {
      var days = deltaDays( $("#last-weight-date").val() );
      var w1 = parseFloat( $("#last-weight").val() );
      var w2 = parseFloat( $("#weight").val() );
      var age = ( parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
      var growth = (w2 - w1) / days;
      var sign = "+";
      if( growth < 0 ) { sign = "&ndash;"; }

      var adequacy = "";
      if( age <= 3 ) {
        adequacy = (growth >= 20) ? "adequado" : "INADEQUADO";
      } else if( age <= 6 ) {
        adequacy = (growth >= 15) ? "adequado" : "INADEQUADO";
      } else if( age <= 12 ) {
        adequacy = (growth >= 10) ? "adequado" : "INADEQUADO";
      } else {
        adequacy = (growth >= 1) ? "adequado" : "INADEQUADO";
      }

      $("#growth-adequacy").html( adequacy );
      $("#growth-rate").html( sign + Math.abs(growth).toFixed(2) );
    }
  });
  // Stature calculation
  // Weight
  $("#weight").on("change", function() {
    if(
      $("#weight").val() != "" &&
      $("#age-years").val() != "" &&
      $("#age-months").val() != "" &&
      $("#bio-sex").val() != ""
    ) {
      var weight = parseFloat( $("#weight").val() ) / 1000;
      var age = ( parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
      var sex = $("#bio-sex").val();
      var z = getZ(weight, age, sex, "weight");
      $("#z-weight").html(z);
    }
  });
  // Height
  $("#height").on("change", function() {
    if(
      $("#height").val() != "" &&
      $("#age-years").val() != "" &&
      $("#age-months").val() != "" &&
      $("#bio-sex").val() != ""
    ) {
      var height = parseFloat( $("#height").val() );
      var age = ( parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
      var sex = $("#bio-sex").val();
      var z = getZ(height, age, sex, "height");
      $("#z-height").html(z);
    }
  });
  // BMI
  $("#weight, #height").on("change", function() {
    if(
      $("#weight").val() != "" &&
      $("#height").val() != "" &&
      $("#age-years").val() != "" &&
      $("#age-months").val() != "" &&
      $("#bio-sex").val() != ""
    ) {
      var weight = parseFloat( $("#weight").val() ) / 1000;
      var height = parseFloat( $("#height").val() );
      var bmi = weight / Math.pow((height / 100), 2);
      var age = ( parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
      var sex = $("#bio-sex").val();
      var z = getZ(bmi, age, sex, "bmi");
      $("#bmi").val(bmi.toFixed(2));
      $("#z-bmi").html(z);
    }
  });
  // Cephalic Perimeter
  $("#pc").on("change", function() {
    if(
      $("#pc").val() != "" &&
      $("#age-years").val() != "" &&
      $("#age-months").val() != "" &&
      $("#bio-sex").val() != ""
    ) {
      var pc = parseFloat( $("#pc").val() );
      var age = ( parseInt( $("#age-years").val() ) * 12) + parseInt( $("#age-months").val() );
      var sex = $("#bio-sex").val();
      var z = getZ(pc, age, sex, "pc");
      $("#z-pc").html(z);
    }
  });
  // Adequacy calculation
  $("#weight, #height, #pc").on("change", function() {
    if(
      $("#weight").val() != "" &&
      $("#height").val() != "" &&
      $("#pc").val() != "" &&
      $("#age-years").val() != "" &&
      $("#age-months").val() != "" &&
      $("#bio-sex").val() != ""
    ) {
      var weight = parseFloat( $("#weight").val() ) / 1000;
      var height = parseFloat( $("#height").val() );
      var bmi = weight / Math.pow((height / 100), 2);
      var pc = parseFloat( $("#pc").val() );

      var z = [];
      z.push( parseFloat( $("#z-weight").html() ) );
      z.push( parseFloat( $("#z-height").html() ) );
      z.push( parseFloat( $("#z-bmi").html() ) );
      z.push( parseFloat( $("#z-pc").html() ) );

      var adequacy = "";
      if(
        z[0] > -2 &&
        z[0] < 2 &&
        z[1] > -2 &&
        z[1] < 2 &&
        z[2] > -2 &&
        z[2] < 2 &&
        z[3] > -2 &&
        z[3] < 2
      ) { adequacy = "adequada"; }
      else {
        adequacy = "INADEQUADA (";
        var inadequacies = [];
        if( z[0] <= -2 ) { inadequacies.push( "peso abaixo do z-escore -2" ); }
        if( z[0] >= 2 ) { inadequacies.push( "peso acima do z-escore 2" ); }
        if( z[1] <= -2 ) { inadequacies.push( "estatura abaixo do z-escore -2" ); }
        if( z[1] >= 2 ) { inadequacies.push( "estatura acima do z-escore 2" ); }
        if( z[2] <= -2 ) { inadequacies.push( "IMC abaixo do z-escore -2" ); }
        if( z[2] >= 2 ) { inadequacies.push( "IMC acima do z-escore 2" ); }
        if( z[3] <= -2 ) { inadequacies.push( "PC abaixo do z-escore -2" ); }
        if( z[3] >= 2 ) { inadequacies.push( "PC acima do z-escore 2" ); }
        adequacy += inadequacies.join(", ") + ")";
      }
      $("#stature-adequacy").html(adequacy);
    }
  });

  // Vax table exhibition
  $("#age-years, #age-months").on("input", function() {
    var a = ( $("#age-years").val() == "" ) ? "0" : $("#age-years").val();
    var m = ( $("#age-months").val() == "" ) ? "0" : $("#age-months").val();
    var age = parseInt( a ) * 12;
    age += parseInt( m );
    $("#vax-table tr.vax").each(function() {
      var regex = /[0-9]{1,3}/g;
      var due = $(this).attr("class");
      due = parseInt(due.match(regex)[0]);
      if( typeof(due) == "number" && due <= age) {
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
      }
    });
  });

  // Vaccine late month option
  $("#vaxx").on("change", function() {
    if( $("#vaxx").val() == "ATRASADA" ) { $("#vaxx-late-month").prop("disabled", false); }
    else { $("#vaxx-late-month").prop("disabled", true).val(""); }
  });
  // Feeding inadequacy option
  $("#feeding-adequacy").on("change", function() {
    if( $("#feeding-adequacy").val() != "adequada" ) { $("#feeding-adequacy-why").prop("disabled", false); }
    else { $("#feeding-adequacy-why").prop("disabled", true).val(""); }
  });
  // Socio-ambiental context option
  $("#context").on("change", function() {
    if( $("#context").val() != "adequado" ) { $("#context-why").prop("disabled", false); }
    else { $("#context-why").prop("disabled", true).val(""); }
  });

  // Show leave form
  $("#p-leave-wpeer").on("change", function() {
    if( $("#p-leave").is(":checked") ) { $("#p-leave").prop("checked", false); }
    if( $("#p-leave-wpeer").is(":checked") ) { $("#leave-form").removeClass("is-hidden"); }
    else { $("#leave-form").addClass("is-hidden"); }
  });
  $("#p-leave-peer").on("input", function() { $("#lf-peer").val( $("#p-leave-peer").val() ); });
  $("#p-leave-wpeer-days").on("input", function() { $("#lf-days").val( $("#p-leave-wpeer-days").val() ); });
  // Select only one leave option
  $("#p-leave").on("change", function() {
    if( $("#p-leave-wpeer").is(":checked") ) {
      $("#p-leave-wpeer")
        .prop("checked", false)
        .trigger("change");
    }
  });

  // Build output:
  $("#button-run").on("click", function() {
    if(
      $("#age-years").val() == "" ||
      $("#age-months").val() == "" ||
      $("#bio-sex").val() == "" ||
      $("input[name='feeding']:checked").val() == "" ||
      $("#weight").val() == "" ||
      $("#height").val() == "" ||
      (
        $("#fontanelle-ant").val() == "aberta" && $("#fontanelle-ant-width").val() == ""
      ) ||
      (
        $("#fontanelle-post").val() == "aberta" && $("#fontanelle-post-width").val() == ""
      ) ||
      (
        $("#tummy-cord").val() == "sem coto umbilical" &&
        $("#tummy-button-desc").val() == "com anel herniário palpável de" &&
        $("#tummy-button-width").val() == ""
      )
    ) {
      alert("Por favor, preencha todos os campos em vermelho.");
      $("[required]").trigger("change");
      $("#age-years").focus();
    } else {
      // Subjetivo
      var peer = $("#peer").val();
      if( peer == "cuidador" || peer == "outro" ) {
        peer = $("#peer-name").val() + " (" + $("#peer-relation").val() + ")";
      }

      var feeding = "";
      if( $("#feeding-lm").is(":checked") ) {
        feeding = "Leite Materno";
        if( $("#feeding-formula").is(":checked") && $("#feeding-food").is(":checked") ) {
          feeding += ", fórmula láctea (" + $("input[name='feeding-amp']:checked").val() + ") e alimentos (" + $("input[name='feeding-other']:checked").val() + ")";
        } else if( $("#feeding-formula").is(":checked") ) {
          feeding += " e fórmula láctea (" + $("input[name='feeding-amp']:checked").val();
          if( $("#feeding-amp-thick").is(":checked") ) {
            feeding += ", COM ENGROSSANTE"
          }
          feeding += ")";
        } else if( $("#feeding-food").is(":checked") ) {
          feeding += " e alimentos (" + $("input[name='feeding-other']:checked").val();
          if( $("#feeding-amp-thick").is(":checked") ) {
            feeding += ", COM ENGROSSANTE"
          }
          feeding += ")";
        } else {
          feeding += " Exclusivo (AME)";
        }
      } else {
        if( $("#feeding-formula").is(":checked") && $("#feeding-food").is(":checked") ) {
          feeding += "fórmula láctea (" + $("input[name='feeding-amp']:checked").val() + ") e alimentos (" + $("input[name='feeding-other']:checked").val() + ")";
        } else if( $("#feeding-formula").is(":checked") ) {
          feeding += "fórmula láctea (" + $("input[name='feeding-amp']:checked").val() + ")";
        } else {
          feeding += "alimentos (" + $("input[name='feeding-other']:checked").val() + ")";
        }
      }

      var difficulties = [];
      var feeding_difficulty = "Acompanhante nega dificuldades alimentares";
      $.each($("input[name='feeding-difficulty']:checked"), function(){ difficulties.push( $(this).val() ); });
      if( difficulties.length > 0 ) { feeding_difficulty = "Acompanhante refere diculdade alimentar em: " + humanList(difficulties); }

      var devs = [];
      var devices = "Acomanhante nega uso de chupetas ou outros dispositivos";
      $.each($("input[name='devices']:checked"), function(){ devs.push( $(this).val() ); });
      if( devs.length > 0 ) { devices = "Acompanhante refere uso de " + humanList(devs); }

      var school = $("#school option:selected").val();
      if( school == "refere que paciente está frequentando escola" ) {
        school += " no " + $("#school-year").val() + "º ano";
      }

      var outside_others = [];
      var outside = "nega atividades extra-domiciliares";
      $.each($("input[name='not-school']:checked"), function(){ outside_others.push( $(this).val() ); });
      if( outside_others.length > 0 ) { outside = "Acompanhante refere práticas de " + humanList(outside_others); }

      var diaper = "refere uso de fraldas " + $("#diaper option:selected").val();

      var symps = [];
      var symptoms = "não apresenta nenhum sintoma";
      $.each($("input[name='symps']:checked"), function(){ symps.push( $(this).val() ); });
      if( symps.length > 0 ) { symptoms = "apresenta " + humanList(symps); }

      var othersymps = "";
      if( $("#othersymps").val() != "" ) { symptoms += " exceto:\n\n" + $("#othersymps").val(); }
      else { symptoms += "."; }

      $("#output-s").val("Paciente trazido por " + peer + ", que refere alimentação com " + feeding + ". " + feeding_difficulty + ".\n" + devices + ".\nAcompanhante " + school + ".\nAcompanhante também " + outside + ".\n" + diaper + ".\n\nPaciente, acompanhante conta, " + symptoms + othersymps);

      // Objetivo
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
        qualitative_exam.push("ictérice " + $('input[name="icter"]:checked').val());
      }
      qualitative_exam.push($('input[name="breathe"]:checked').val());

      if ( $("#child-activity").val() != "" ) { qualitative_exam.push( $("#child-activity").val() ); }
      if ( $("#child-reactivity").val() != "" ) { qualitative_exam.push( $("#child-reactivity").val() ); }

      var skindescs = [
        $("#skin-hydro").val(),
        $("#skin-desquamation").val(),
        $("#skin-mongolic").val(),
        $("#skin-lanugo").val()
      ];
      skindescs = $.grep( skindescs, function(n) { return( n != "" ); });
      var skin = "Pele: " + humanList(skindescs) + ".";
      if( $("#skin-other").val() != "" ) {
        skin += " " + $("#skin-other").val();
      }

      var fontanelle = [];
      fontanelle[0] = $("#fontanelle-ant").val();
      if( fontanelle[0] == "aberta" ) { fontanelle[0] += ", " + $("#fontanelle-ant-tension").val() + " e com largura de " + $("#fontanelle-ant-width").val() + "cm"; }
      fontanelle[1] = $("#fontanelle-post").val();
      if( fontanelle[1] == "aberta" ) { fontanelle[1] += ", " + $("#fontanelle-post-tension").val() + " e com largura de " + $("#fontanelle-post-width").val() + "cm"; }

      var eyes = $("#eyes").val();
      if( eyes == "Observa-se estrabismo" ) {
        var strab = [];
        strab.push( $("#eyes-strab-plane").val() );
        strab.push( $("#eyes-strab-type").val() );
        strab.push( $("#eyes-strab-fix").val() );
        strab.push( $("#eyes-strab-side").val() );
        eyes += " " + humanList(strab);
      }

      var lungs = "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + ", tiragens " + $("#disconfort").val();

      var murmur = $("#heart-murmur").val();
      if( murmur == "com sopro" ) { murmur += " " + $("#heart-murmur-desc").val(); }
      var heart = "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur;

      var tummy_tumors = $("#tummy-tumors").val();
      if( tummy_tumors == "com massa" ) { tummy_tumors += $("#tummy-tumor-desc").val(); }
      var tummy_cord = $("#tummy-cord").val();
      if( tummy_cord == "sem coto umbilical" ) { tummy_cord += " com cicatriz umbilical " + $("#tummy-button-desc").val(); }
      if( $("#tummy-button-desc").val() == "com anel herniário palpável de" ) { tummy_cord += " " + $("#tummy-button-width").val() + "cm"; }
      var tummy = "Abdome: " + $("#tummy-format").val() + ", " + $("#tummy-tension").val() + ", " + $("#tummy-pain").val() + " à palpação, " + tummy_tumors + ", lojas renais " + $("#tummy-kidneys").val() + " e " + tummy_cord;

      var other = $("#perineum-other").val();
      if( other == "outro" ) { other = "com " + $("#perineum-other-desc").val(); }
      var sexparts = "";
      if( $("#bio-sex").val() == "f" ) { sexparts = "Sinéquias " + $("#perineum-f-sineq").val(); }
      else { sexparts = "Testículos " + $("#perineum-m-testies").val() + ". Fimose " + $("#perineum-m-phimosis").val(); }
      var perineum = "Períneo: " + sexparts + ". " + other;

      var misc = [];
      if( $("#exam-oto").is(":checked") ) {
        var d_retro = "";
        if( $("#oto-d-membrane").val() != "não observável" ) { d_retro = " " + $("#oto-d-retromembrane").val(); }
        var e_retro = "";
        if( $("#oto-e-membrane").val() != "não observável" ) { e_retro = " " + $("#oto-e-retromembrane").val(); }
        misc.push( "Otoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + d_retro + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n-OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + e_retro + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + "." );
      }
      if( $("#exam-oro").is(":checked") ) {
        misc.push( "Oroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + ". Gengivas " + $("#exam-teeth-gums").val() + " e " + $("#exam-teeth-teeth").val() + $("#exam-teeth-cavity").val() + "." );
      }
      if( $("#exam-naso").is(":checked") ) {
        misc.push( "Nasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val() + "." );
      }
      if( misc.length > 0 ) {
        misc = "\n\n" + misc.join("\n");
      } else {
        misc = "";
      }

      var metrics = [];
      metrics.push( "- Peso: " + $("#weight").val() + "g (" + $("#z-weight").html() + "z);" );
      metrics.push( "- Estatura: " + $("#height").val() + "cm (" + $("#z-height").html() + "z);" );
      metrics.push( "- IMC: " + $("#bmi").val() + "kg/m² (" + $("#z-bmi").html() + "z);" );
      if( $("#pc").val() != "" ) { metrics.push( "- PC: " + $("#pc").val() + "cm (" + $("#z-pc").html() + "z);" ); }
      metrics = "\n\n# Antropometria:\n" + metrics.join("\n");

      $("#output-o").val("Paciente em " + $("#status").val() + "EG. " + humanList(qualitative_exam) + ".\nFontanela anterior " + fontanelle[0] + ". Fontanela posterior " + fontanelle[1] + ".\n" + eyes + ".\n" + skin + "\n" + lungs + ".\n" + heart + ".\n" + tummy + ".\n" + perineum + "." + misc + metrics);

      // Avaliação
      var ddx = [];
      ddx.push( "Crescimento " + $("#growth-adequacy").html() + " (" + $("#growth-rate").html() + "g/d)" );
      ddx.push( "Estatura " + $("#stature-adequacy").html() );
      var vax = $("#vaxx").val();
      if( vax == "ATRASADA" ) { vax += " desde os " + $("#vaxx-late-month").val() + " meses"; }
      ddx.push( "Vacinação " + vax );
      var fed = $("#feeding-adequacy").val();
      if( fed != "adequada" ) { fed += " (" + $("#feeding-adequacy-why").val() + ")"; }
      ddx.push( "Alimentação " + fed );
      ddx.push( "Desenvolvimento Neuropsicomotor " + $("#dnpm").val() );
      var cont = $("#context").val();
      if( cont != "adequado" ) { cont += " (" + $("#context-why").val() + ")"; }
      ddx.push( "Ambiente " + cont );
      ddx.push( $("#dx").val().split(",") );
      ddx = ddx.filter(el => {
        return el != null && el != "";
      });

      $("#output-a").val( ddx.join(";\n") + "." );

      // Plano
      var plans = [];
      if( $("#p-med1").is(":checked") ) { plans.push( "Prescrevo suplementação de Vit. A e D (Adtil)" ); }
      if( $("#p-med2").is(":checked") ) { plans.push( "Prescrevo pomada para prevenção de dermatite urêmica" ); }
      if( $("#p-med3").is(":checked") ) { plans.push( "Prescrevo suplementação de sulfato ferroso" ); }
      if( $("#p-med4").is(":checked") ) { plans.push( "Prescrevo: " + $("#p-medother").val() ); }
      if( $("#p-vax").is(":checked") ) { plans.push( "Levo paciente à sala de vacinas para atualização de imunizantes em atraso" ); }
      if( $("#p-vaxori").is(":checked") ) { plans.push( "Oriento acompanhante a levar paciente à sala de vacina para atualização vacinal" ); }
      if( $("#p-labs").is(":checked") ) { plans.push( "Solicito " + $("#p-labs-what").val() + " para " + $("#p-labs-why").val() ); }
      if( $("#p-feed1").is(":checked") ) { plans.push( "Reforço manutenção do paciente em Aleitamento Materno Exclusivo, reforçando os benefícios tanto para o paciente como à lactante" ); }
      if( $("#p-feed2").is(":checked") ) { plans.push( "Reforço importância de manutenção de Aleitamento Materno mesmo no contexto de introdução de outros alimentos" ); }
      if( $("#p-feed3").is(":checked") ) { plans.push( "Oriento técnica de preparo e diluição de leite de vaca para adequação de oferta para lactentes abaixo de 06 meses de vida, uma vez que não há possibilidade econômica na casa de oferta de fórmulas específicas para lactentes" ); }
      if( $("#p-feed4").is(":checked") ) { plans.push( "Oriento fórmulas lácteas para lactentes, uma vez que mãe se mostra pouco aberta às ofertas de orientações sobre aleitamento materno e relactação" ); }
      if( $("#p-feed5").is(":checked") ) { plans.push( "Oriento ausência de benefícios de uso de engrossantes, assim como os riscos potenciais para o lactente de consumo de tais calorias vazias" ); }
      if( $("#p-feed6").is(":checked") ) {
        plans.push( "Oriento composição ideal (reforçando os grupos alimentares necessários para oferta de todos os macronutrientes), modo de preparo e de armazenamento de papinha salgada" );
        plans.push( "Oriento modo de preparo de papinha doce, e que ela não substitui leite materno nem papinha salgada" );
      }
      if( $("#p-feed7").is(":checked") ) { plans.push( "Oriento alimentos que apresentam risco à saúde quando consumidos por crianças pequenas (mel e xantinas)" ); }
      if( $("#p-ori1").is(":checked") ) { plans.push( "Oriento hidratação cutânea do paciente" ); }
      if( $("#p-ori2").is(":checked") ) { plans.push( "Oriento sinais para busca de acolhimento para avaliação" ); }
      if( $("#p-ori3").is(":checked") ) { plans.push( "Oriento sinais para busca de acolhimento para avaliação no fluxo de Sintomáticos Respiratórios" ); }
      if( $("#p-ori4").is(":checked") ) { plans.push( "Oriento lavagem nasal do lactente com soro fisiológico 0,9%" ); }
      if( $("#p-ori5").is(":checked") ) { plans.push( "Oriento uso de amido de milho e/ou pasta d'água caseira para tratamento de dermatite urêmica" ); }
      if( $("#p-ori6").is(":checked") ) {
        plans.push( "Oriento medidas ambientais para prevenção de picadas de insetos, como uso de redes e de repelentes de ambiente" );
        plans.push( "Reforço contraindicação formal de uso de repelentes tópicos em crianças pequenas" );
      }
      if( $("#p-ori7").is(":checked") ) { plans.push( "Oriento acompanhante de que exames complementares, tanto de amostras biológicas como de imagem, não têm papel no RASTREIO de problemas de saúde em crianças pequenas, e que a antropometria é mais que capaz de detectar precocemente problemas de saúde" ); }
      if( $("#p-leave").is(":checked") ) { plans.push( "Atesto paciente para " + $("#p-leave-days").val() + " dias" ); }
      if( $("#p-leave-wpeer").is(":checked") ) { plans.push( "Atesto paciente e acompanhante (" + $("#p-leave-peer").val() + ") para " + $("#p-leave-wpeer-days").val() + " dias" ); }
      plans.push( "Tiro dúvidas" );
      if( $("#return-time").val() == "após pandemia" ) {
        plans.push( "Retorno após melhora da pandemia e reabertura de agenda habitual, uma vez que considero que possíveis benefícios de um retorno breve neste momento de crise sanitária tem poucos benefícios comparados aos riscos de expôr paciente (e familiares) a contato possível com SARS-CoV-2 e a infecção dele decorrente" );
        plans.push( "Combino com acompanhante que antropometria será seguida pela equipe quando de vacinação, com busca de alguma das Auxiliares de Enfermagem da equipe para medidas" );
      } else {
        plans.push( "Retorno em " + $("#p-return-num").val() + " " + $("#return-time").val() + " com " + $("#return-who").val() );
      }

      $("#output-p").val( plans.join(";\n") + "." );
    }
  });
  // / Build output

  // Leave Build
  $("#lf-run").on("click", function() {
    if(
      $("#lf-name").val() != "" &&
      $("#lf-peer").val() != "" &&
      $("#lf-days").val() != ""
    ) {
      var leave = "Paciente " + $("#lf-name").val().toUpperCase() + " ";
      if( $("#lf-cns").val() != "" ) {
        var cns = $("#lf-cns").val();
        var match = cns.match(/^(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})$/);
        if (match) {
          cns = match[1] + "." + match[2] + "." + match[3] + "." + match[4] + "." + match[5];
        }
        leave += "(CNS " + cns + ") ";
      }
      leave += "necessita ficar afastado por " + $("#lf-days").val().toString().padStart(2, "0") + " dias a partir do dia de hoje, sob supervisão de seu responsável, " + $("#lf-peer").val().toUpperCase() + ".\nSem mais.";
      $("#output-lf").val(leave);
    } else {
      alert("Preencha os campos necessários antes de emitir o atestado.");
      $("#lf-name").addClass("req");
      $("#p-leave-wpeer-days").addClass("req");
      $("#p-leave-peer").addClass("req");
      $("#p-leave-wpeer-days").focus();
      $("#lf-name, #p-leave-wpeer-days, #p-leave-peer").on("input", function() {
        if( $(this).val() != "" ) { $(this).removeClass("req"); }
        else { $(this).addClass("req"); }
      });
    }
  });
  // / Leave Build
});

function deltaDays(date) {
  var today = new Date();
  var begining = new Date(date);
  var days = parseInt((today - begining)/(1000*60*60*24));
  return days;
}
function humanList(arr, s_with) {
  s_with = (typeof s_with !== 'undefined') ?  s_with : false;
  var r = "";

  switch(arr.length) {
    case 0:
      r = "";
      break;
    case 1:
      r = arr.join("");
      break;
    case 2:
      r = arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      r += arr.join(", ");
      r += " e " + last;
  }
  if(s_with) {
    r = (r.length > 0) ? "com " + r : "sem sintomas";
  }
  return r;
}

function getZ(value, age, sex, type) {
  var parameters = {
    weight: {
      m: [
        [3.34640,  0.48864],    //0 months old
        [4.47090,  0.59888],    //1 month old
        [5.56750,  0.68953],    //2 months old
        [6.37620,  0.74774],    //3 months old
        [7.00230,  0.79238],    //4 months old
        [7.51050,  0.83216],    //5 months old
        [7.93400,  0.86941],    //6 months old
        [8.29700,  0.90454],    //7 months old
        [8.61510,  0.93750],    //8 months old
        [8.90140,  0.96856],    //9 months old
        [9.16490,  0.99815],    //10 months old
        [9.41220,  1.02649],    //11 months old
        [9.64790,  1.05403],    //12 months old
        [9.87490,  1.08120],    //13 months old
        [10.09530, 1.10806],    //14 months old
        [10.31080, 1.13491],    //15 months old
        [10.52280, 1.16182],    //16 months old
        [10.73190, 1.18899],    //17 months old
        [10.93850, 1.21625],    //18 months old
        [11.14300, 1.24400],    //19 months old
        [11.34620, 1.27202],    //20 months old
        [11.54860, 1.30049],    //21 months old
        [11.75040, 1.32944],    //22 months old
        [11.95140, 1.35875],    //23 months old
        [12.15150, 1.38843],    //24 months old
        [12.35020, 1.41842],    //25 months old
        [12.54660, 1.44838],    //26 months old
        [12.74010, 1.47836],    //27 months old
        [12.93030, 1.50819],    //28 months old
        [13.11690, 1.53769],    //29 months old
        [13.30000, 1.56687],    //30 months old
        [13.47980, 1.59587],    //31 months old
        [13.65670, 1.62460],    //32 months old
        [13.83090, 1.65321],    //33 months old
        [14.00310, 1.68149],    //34 months old
        [14.17360, 1.70962],    //35 months old
        [14.34290, 1.73779],    //36 months old
        [14.51130, 1.76573],    //37 months old
        [14.67910, 1.79379],    //38 months old
        [14.84660, 1.82183],    //39 months old
        [15.01400, 1.85003],    //40 months old
        [15.18130, 1.87838],    //41 months old
        [15.34860, 1.90706],    //42 months old
        [15.51580, 1.93606],    //43 months old
        [15.68280, 1.96521],    //44 months old
        [15.84970, 1.99484],    //45 months old
        [16.01630, 2.02494],    //46 months old
        [16.18270, 2.05520],    //47 months old
        [16.34890, 2.08596],    //48 months old
        [16.51500, 2.11706],    //49 months old
        [16.68110, 2.14853],    //50 months old
        [16.84710, 2.18052],    //51 months old
        [17.01320, 2.21257],    //52 months old
        [17.17920, 2.24515],    //53 months old
        [17.34520, 2.27795],    //54 months old
        [17.51110, 2.31094],    //55 months old
        [17.67680, 2.34412],    //56 months old
        [17.84220, 2.37747],    //57 months old
        [18.00730, 2.41100],    //58 months old
        [18.17220, 2.44471],    //59 months old
        [18.33660, 2.47856]     //60 months old
      ],
      f: [
        [3.23220,  0.45804],    //0 months old
        [4.18730,  0.57467],    //1 month old
        [5.12820,  0.66667],    //2 months old
        [5.84580,  0.73768],    //3 months old
        [6.42370,  0.79667],    //4 months old
        [6.89850,  0.84672],    //5 months old
        [7.29700,  0.89053],    //6 months old
        [7.64220,  0.93067],    //7 months old
        [7.94870,  0.96823],    //8 months old
        [8.22540,  1.00342],    //9 months old
        [8.48000,  1.03651],    //10 months old
        [8.71920,  1.06784],    //11 months old
        [8.94810,  1.09775],    //12 months old
        [9.16990,  1.12634],    //13 months old
        [9.38700,  1.15404],    //14 months old
        [9.60080,  1.18080],    //15 months old
        [9.81240,  1.20722],    //16 months old
        [10.02260, 1.23338],    //17 months old
        [10.23150, 1.25940],    //18 months old
        [10.43930, 1.28560],    //19 months old
        [10.64640, 1.31196],    //20 months old
        [10.85340, 1.33877],    //21 months old
        [11.06080, 1.36601],    //22 months old
        [11.26880, 1.39384],    //23 months old
        [11.47750, 1.42206],    //24 months old
        [11.68640, 1.45075],    //25 months old
        [11.89470, 1.47982],    //26 months old
        [12.10150, 1.50930],    //27 months old
        [12.30590, 1.53898],    //28 months old
        [12.50730, 1.56904],    //29 months old
        [12.70550, 1.59924],    //30 months old
        [12.90060, 1.62973],    //31 months old
        [13.09300, 1.66059],    //32 months old
        [13.28370, 1.69194],    //33 months old
        [13.47310, 1.72375],    //34 months old
        [13.66180, 1.75622],    //35 months old
        [13.85030, 1.78932],    //36 months old
        [14.03850, 1.82332],    //37 months old
        [14.22650, 1.85784],    //38 months old
        [14.41400, 1.89328],    //39 months old
        [14.60100, 1.92923],    //40 months old
        [14.78730, 1.96568],    //41 months old
        [14.97270, 2.00275],    //42 months old
        [15.15730, 2.04017],    //43 months old
        [15.34100, 2.07794],    //44 months old
        [15.52400, 2.11592],    //45 months old
        [15.70640, 2.15429],    //46 months old
        [15.88820, 2.19257],    //47 months old
        [16.06970, 2.23112],    //48 months old
        [16.25110, 2.26995],    //49 months old
        [16.43220, 2.30889],    //50 months old
        [16.61330, 2.34779],    //51 months old
        [16.79420, 2.38696],    //52 months old
        [16.97480, 2.42621],    //53 months old
        [17.15510, 2.46536],    //54 months old
        [17.33470, 2.50452],    //55 months old
        [17.51360, 2.54385],    //56 months old
        [17.69160, 2.58297],    //57 months old
        [17.86860, 2.62222],    //58 months old
        [18.04450, 2.66120],    //59 months old
        [18.21930, 2.70028]     //60 months old
      ]
    },
    height: {
      m: [
        [49.88420,  1.89311],    //0 months old
        [54.72440,  1.94655],    //1 month old
        [58.42490,  2.00047],    //2 months old
        [61.42920,  2.04436],    //3 months old
        [63.88600,  2.08077],    //4 months old
        [65.90260,  2.11152],    //5 months old
        [67.62360,  2.14029],    //6 months old
        [69.16450,  2.17107],    //7 months old
        [70.59940,  2.20553],    //8 months old
        [71.96870,  2.24326],    //9 months old
        [73.28120,  2.28491],    //10 months old
        [74.53880,  2.32934],    //11 months old
        [75.74880,  2.37624],    //12 months old
        [76.91860,  2.42601],    //13 months old
        [78.04970,  2.47730],    //14 months old
        [79.14580,  2.53029],    //15 months old
        [80.21130,  2.58441],    //16 months old
        [81.24870,  2.64058],    //17 months old
        [82.25870,  2.69726],    //18 months old
        [83.24180,  2.75530],    //19 months old
        [84.19960,  2.81395],    //20 months old
        [85.13480,  2.87415],    //21 months old
        [86.04770,  2.93423],    //22 months old
        [86.94100,  2.99512],    //23 months old
        [87.81610,  3.05512],    //24 months old
        [87.97200,  3.11597],    //25 months old
        [88.80650,  3.17572],    //26 months old
        [89.61970,  3.23527],    //27 months old
        [90.41200,  3.29281],    //28 months old
        [91.18280,  3.35006],    //29 months old
        [91.93270,  3.40519],    //30 months old
        [92.66310,  3.45911],    //31 months old
        [93.37530,  3.51185],    //32 months old
        [94.07110,  3.56247],    //33 months old
        [94.75320,  3.61199],    //34 months old
        [95.42360,  3.66045],    //35 months old
        [96.08350,  3.70690],    //36 months old
        [96.73370,  3.75230],    //37 months old
        [97.37490,  3.79762],    //38 months old
        [98.00730,  3.84091],    //39 months old
        [98.63100,  3.88310],    //40 months old
        [99.24590,  3.92418],    //41 months old
        [99.85150,  3.96510],    //42 months old
        [100.44850, 4.00388],    //43 months old
        [101.03740, 4.04352],    //44 months old
        [101.61860, 4.08100],    //45 months old
        [102.19330, 4.11941],    //46 months old
        [102.76250, 4.15674],    //47 months old
        [103.32730, 4.19406],    //48 months old
        [103.88860, 4.23138],    //49 months old
        [104.44730, 4.26772],    //50 months old
        [105.00410, 4.30517],    //51 months old
        [105.55960, 4.34167],    //52 months old
        [106.11380, 4.37826],    //53 months old
        [106.66680, 4.41494],    //54 months old
        [107.21880, 4.45172],    //55 months old
        [107.76970, 4.48861],    //56 months old
        [108.31980, 4.52452],    //57 months old
        [108.86890, 4.56161],    //58 months old
        [109.41700, 4.59770],    //59 months old
        [109.96380, 4.63387]     //60 months old
      ],
      f: [
        [49.14770,  1.86270],    //0 months old
        [53.68720,  1.95421],    //1 month old
        [57.06730,  2.03616],    //2 months old
        [59.80290,  2.10506],    //3 months old
        [62.08990,  2.16445],    //4 months old
        [64.03010,  2.21736],    //5 months old
        [65.73110,  2.26641],    //6 months old
        [67.28730,  2.31536],    //7 months old
        [68.74980,  2.36499],    //8 months old
        [70.14350,  2.41574],    //9 months old
        [71.48180,  2.46755],    //10 months old
        [72.77100,  2.52079],    //11 months old
        [74.01500,  2.57498],    //12 months old
        [75.21760,  2.62961],    //13 months old
        [76.38170,  2.68405],    //14 months old
        [77.50990,  2.73920],    //15 months old
        [78.60550,  2.79443],    //16 months old
        [79.67100,  2.84903],    //17 months old
        [80.70790,  2.90387],    //18 months old
        [81.71820,  2.95820],    //19 months old
        [82.70360,  3.01289],    //20 months old
        [83.66540,  3.06717],    //21 months old
        [84.60400,  3.12020],    //22 months old
        [85.52020,  3.17365],    //23 months old
        [86.41530,  3.22675],    //24 months old
        [86.59040,  3.27831],    //25 months old
        [87.44620,  3.32995],    //26 months old
        [88.28300,  3.38124],    //27 months old
        [89.10040,  3.43126],    //28 months old
        [89.89910,  3.48089],    //29 months old
        [90.67970,  3.53016],    //30 months old
        [91.44300,  3.57816],    //31 months old
        [92.19060,  3.62586],    //32 months old
        [92.92390,  3.67235],    //33 months old
        [93.64440,  3.71862],    //34 months old
        [94.35330,  3.76375],    //35 months old
        [95.05150,  3.80776],    //36 months old
        [95.73990,  3.85257],    //37 months old
        [96.41870,  3.89628],    //38 months old
        [97.08850,  3.93888],    //39 months old
        [97.74930,  3.98133],    //40 months old
        [98.40150,  4.02364],    //41 months old
        [99.04480,  4.06579],    //42 months old
        [99.67950,  4.10680],    //43 months old
        [100.30580, 4.14764],    //44 months old
        [100.92380, 4.18834],    //45 months old
        [101.53370, 4.22786],    //46 months old
        [102.13600, 4.26826],    //47 months old
        [102.73120, 4.30752],    //48 months old
        [103.31970, 4.34563],    //49 months old
        [103.90210, 4.38467],    //50 months old
        [104.47860, 4.42258],    //51 months old
        [105.04940, 4.46040],    //52 months old
        [105.61480, 4.49813],    //53 months old
        [106.17480, 4.53579],    //54 months old
        [106.72950, 4.57336],    //55 months old
        [107.27880, 4.61084],    //56 months old
        [107.82270, 4.64716],    //57 months old
        [108.36130, 4.68338],    //58 months old
        [108.89480, 4.71950],    //59 months old
        [109.42330, 4.75663]     //60 months old
      ]
    },
    bmi: {
      m: [
        [13.40690, 1.28170],    //0 months old
        [14.94410, 1.34900],    //1 month old
        [16.31950, 1.41604],    //2 months old
        [16.89870, 1.43554],    //3 months old
        [17.15790, 1.43749],    //4 months old
        [17.29190, 1.43454],    //5 months old
        [17.34220, 1.42796],    //6 months old
        [17.32880, 1.41802],    //7 months old
        [17.26470, 1.40535],    //8 months old
        [17.16620, 1.39081],    //9 months old
        [17.04880, 1.37550],    //10 months old
        [16.92390, 1.36017],    //11 months old
        [16.79810, 1.34536],    //12 months old
        [16.67430, 1.33094],    //13 months old
        [16.55480, 1.31743],    //14 months old
        [16.44090, 1.30459],    //15 months old
        [16.33350, 1.29247],    //16 months old
        [16.23290, 1.28110],    //17 months old
        [16.13920, 1.27064],    //18 months old
        [16.05280, 1.26079],    //19 months old
        [15.97430, 1.25175],    //20 months old
        [15.90390, 1.24337],    //21 months old
        [15.84120, 1.23593],    //22 months old
        [15.78520, 1.22904],    //23 months old
        [15.73560, 1.22281],    //24 months old
        [15.98000, 1.24516],    //25 months old
        [15.94140, 1.24343],    //26 months old
        [15.90360, 1.24175],    //27 months old
        [15.86670, 1.24046],    //28 months old
        [15.83060, 1.23938],    //29 months old
        [15.79530, 1.23851],    //30 months old
        [15.76060, 1.23784],    //31 months old
        [15.72670, 1.23722],    //32 months old
        [15.69340, 1.23695],    //33 months old
        [15.66100, 1.23675],    //34 months old
        [15.62940, 1.23691],    //35 months old
        [15.59880, 1.23714],    //36 months old
        [15.56930, 1.23776],    //37 months old
        [15.54100, 1.23846],    //38 months old
        [15.51400, 1.23957],    //39 months old
        [15.48850, 1.24094],    //40 months old
        [15.46450, 1.24273],    //41 months old
        [15.44200, 1.24478],    //42 months old
        [15.42100, 1.24710],    //43 months old
        [15.40130, 1.24982],    //44 months old
        [15.38270, 1.25277],    //45 months old
        [15.36520, 1.25595],    //46 months old
        [15.34850, 1.25934],    //47 months old
        [15.33260, 1.26310],    //48 months old
        [15.31740, 1.26706],    //49 months old
        [15.30290, 1.27121],    //50 months old
        [15.28910, 1.27557],    //51 months old
        [15.27590, 1.28012],    //52 months old
        [15.26330, 1.28486],    //53 months old
        [15.25140, 1.28981],    //54 months old
        [15.24000, 1.29479],    //55 months old
        [15.22910, 1.29996],    //56 months old
        [15.21880, 1.30532],    //57 months old
        [15.20910, 1.31057],    //58 months old
        [15.20000, 1.31617],    //59 months old
        [15.19160, 1.32167]     //60 months old
      ],
      f: [
        [13.33630, 1.23654],    //0 months old
        [14.56790, 1.39211],    //1 month old
        [15.76790, 1.47761],    //2 months old
        [16.35740, 1.51371],    //3 months old
        [16.67030, 1.52800],    //4 months old
        [16.83860, 1.53164],    //5 months old
        [16.90830, 1.52783],    //6 months old
        [16.90200, 1.51848],    //7 months old
        [16.84040, 1.50536],    //8 months old
        [16.74060, 1.48958],    //9 months old
        [16.61840, 1.47256],    //10 months old
        [16.48750, 1.45552],    //11 months old
        [16.35680, 1.43891],    //12 months old
        [16.23110, 1.42314],    //13 months old
        [16.11280, 1.40842],    //14 months old
        [16.00280, 1.39480],    //15 months old
        [15.90170, 1.38233],    //16 months old
        [15.80960, 1.37085],    //17 months old
        [15.72630, 1.36032],    //18 months old
        [15.65170, 1.35074],    //19 months old
        [15.58550, 1.34222],    //20 months old
        [15.52780, 1.33446],    //21 months old
        [15.47870, 1.32761],    //22 months old
        [15.43800, 1.32149],    //23 months old
        [15.40520, 1.31637],    //24 months old
        [15.65900, 1.32350],    //25 months old
        [15.63080, 1.32065],    //26 months old
        [15.60370, 1.31789],    //27 months old
        [15.57770, 1.31538],    //28 months old
        [15.55230, 1.31308],    //29 months old
        [15.52760, 1.31115],    //30 months old
        [15.50340, 1.30973],    //31 months old
        [15.47980, 1.30882],    //32 months old
        [15.45720, 1.30876],    //33 months old
        [15.43560, 1.30956],    //34 months old
        [15.41550, 1.31124],    //35 months old
        [15.39680, 1.31412],    //36 months old
        [15.37960, 1.31788],    //37 months old
        [15.36380, 1.32267],    //38 months old
        [15.34930, 1.32833],    //39 months old
        [15.33580, 1.33483],    //40 months old
        [15.32330, 1.34186],    //41 months old
        [15.31160, 1.34941],    //42 months old
        [15.30070, 1.35748],    //43 months old
        [15.29050, 1.36559],    //44 months old
        [15.28140, 1.37395],    //45 months old
        [15.27320, 1.38238],    //46 months old
        [15.26610, 1.39074],    //47 months old
        [15.26020, 1.39906],    //48 months old
        [15.25560, 1.40763],    //49 months old
        [15.25230, 1.41633],    //50 months old
        [15.25030, 1.42514],    //51 months old
        [15.24960, 1.43392],    //52 months old
        [15.25020, 1.44267],    //53 months old
        [15.25190, 1.45122],    //54 months old
        [15.25440, 1.45954],    //55 months old
        [15.25750, 1.46747],    //56 months old
        [15.26120, 1.47499],    //57 months old
        [15.26530, 1.48211],    //58 months old
        [15.26980, 1.48881],    //59 months old
        [15.27470, 1.49524]     //60 months old
      ]
    },
    pc: {
      m: [
        [34.46180, 1.27026],    //0 months old
        [37.27590, 1.16785],    //1 month old
        [39.12850, 1.17268],    //2 months old
        [40.51350, 1.18218],    //3 months old
        [41.63170, 1.19400],    //4 months old
        [42.55760, 1.20736],    //5 months old
        [43.33060, 1.22062],    //6 months old
        [43.98030, 1.23321],    //7 months old
        [44.53000, 1.24506],    //8 months old
        [44.99980, 1.25639],    //9 months old
        [45.40510, 1.26680],    //10 months old
        [45.75730, 1.27617],    //11 months old
        [46.06610, 1.28478],    //12 months old
        [46.33950, 1.29241],    //13 months old
        [46.58440, 1.30017],    //14 months old
        [46.80600, 1.30682],    //15 months old
        [47.00880, 1.31390],    //16 months old
        [47.19620, 1.32008],    //17 months old
        [47.37110, 1.32639],    //18 months old
        [47.53570, 1.33243],    //19 months old
        [47.69190, 1.33823],    //20 months old
        [47.84080, 1.34433],    //21 months old
        [47.98330, 1.34977],    //22 months old
        [48.12010, 1.35554],    //23 months old
        [48.25150, 1.36117],    //24 months old
        [48.37770, 1.36667],    //25 months old
        [48.49890, 1.37252],    //26 months old
        [48.61510, 1.37775],    //27 months old
        [48.72640, 1.38286],    //28 months old
        [48.83310, 1.38784],    //29 months old
        [48.93510, 1.39318],    //30 months old
        [49.03270, 1.39792],    //31 months old
        [49.12600, 1.40255],    //32 months old
        [49.21530, 1.40707],    //33 months old
        [49.30070, 1.41148],    //34 months old
        [49.38260, 1.41580],    //35 months old
        [49.46120, 1.42003],    //36 months old
        [49.53670, 1.42418],    //37 months old
        [49.60930, 1.42776],    //38 months old
        [49.67910, 1.43175],    //39 months old
        [49.74650, 1.43568],    //40 months old
        [49.81160, 1.43906],    //41 months old
        [49.87450, 1.44287],    //42 months old
        [49.93540, 1.44613],    //43 months old
        [49.99420, 1.44933],    //44 months old
        [50.05120, 1.45299],    //45 months old
        [50.10640, 1.45609],    //46 months old
        [50.15980, 1.45915],    //47 months old
        [50.21150, 1.46216],    //48 months old
        [50.26170, 1.46513],    //49 months old
        [50.31050, 1.46806],    //50 months old
        [50.35780, 1.47095],    //51 months old
        [50.40390, 1.47381],    //52 months old
        [50.44880, 1.47664],    //53 months old
        [50.49260, 1.47893],    //54 months old
        [50.53540, 1.48170],    //55 months old
        [50.57720, 1.48444],    //56 months old
        [50.61830, 1.48717],    //57 months old
        [50.65870, 1.48937],    //58 months old
        [50.69840, 1.49205],    //59 months old
        [50.73750, 1.49473]     //60 months old
      ],
      f: [
        [33.87870, 1.18440],    //0 months old
        [36.54630, 1.17314],    //1 month old
        [38.25210, 1.21183],    //2 months old
        [39.53280, 1.24133],    //3 months old
        [40.58170, 1.26574],    //4 months old
        [41.45900, 1.28606],    //5 months old
        [42.19950, 1.30270],    //6 months old
        [42.82900, 1.31699],    //7 months old
        [43.36710, 1.32833],    //8 months old
        [43.83000, 1.33813],    //9 months old
        [44.23190, 1.34642],    //10 months old
        [44.58440, 1.35314],    //11 months old
        [44.89650, 1.35902],    //12 months old
        [45.17520, 1.36384],    //13 months old
        [45.42650, 1.36825],    //14 months old
        [45.65510, 1.37239],    //15 months old
        [45.86500, 1.37549],    //16 months old
        [46.05980, 1.37857],    //17 months old
        [46.24240, 1.38126],    //18 months old
        [46.41520, 1.38410],    //19 months old
        [46.58010, 1.38669],    //20 months old
        [46.73840, 1.38907],    //21 months old
        [46.89130, 1.39126],    //22 months old
        [47.03910, 1.39330],    //23 months old
        [47.18220, 1.39518],    //24 months old
        [47.32040, 1.39737],    //25 months old
        [47.45360, 1.39941],    //26 months old
        [47.58170, 1.40128],    //27 months old
        [47.70450, 1.40299],    //28 months old
        [47.82190, 1.40453],    //29 months old
        [47.93400, 1.40590],    //30 months old
        [48.04100, 1.40712],    //31 months old
        [48.14320, 1.40867],    //32 months old
        [48.24080, 1.40960],    //33 months old
        [48.33430, 1.41088],    //34 months old
        [48.42390, 1.41156],    //35 months old
        [48.50990, 1.41261],    //36 months old
        [48.59260, 1.41356],    //37 months old
        [48.67220, 1.41441],    //38 months old
        [48.74890, 1.41518],    //39 months old
        [48.82280, 1.41586],    //40 months old
        [48.89410, 1.41646],    //41 months old
        [48.96290, 1.41699],    //42 months old
        [49.02940, 1.41744],    //43 months old
        [49.09370, 1.41783],    //44 months old
        [49.15600, 1.41864],    //45 months old
        [49.21640, 1.41891],    //46 months old
        [49.27510, 1.41912],    //47 months old
        [49.33210, 1.41978],    //48 months old
        [49.38770, 1.41990],    //49 months old
        [49.44190, 1.42047],    //50 months old
        [49.49470, 1.42050],    //51 months old
        [49.54640, 1.42099],    //52 months old
        [49.59690, 1.42095],    //53 months old
        [49.64640, 1.42138],    //54 months old
        [49.69470, 1.42177],    //55 months old
        [49.74210, 1.42213],    //56 months old
        [49.78850, 1.42196],    //57 months old
        [49.83410, 1.42227],    //58 months old
        [49.87890, 1.42255],    //59 months old
        [49.92290, 1.42280]     //60 months old
      ]
    }
  };
  var z = ( value - parameters[type][sex][age][0] ) / parameters[type][sex][age][1];
  var sign = (z >= 0) ? "+" : "";
  return sign + z.toFixed(2);
}

$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  var maintenance = false;
  if( maintenance ) {
    $("#maintenance").css("display", "block");
  }

  // Enable pregnancy age
  $("#pregnancy").on("change", function() {
    if( $("#pregnancy").is(":checked") ) {
      $("#preg-w, #preg-d").prop("disabled", false);
      $("#preg-w").focus();
    } else {
      $("#preg-w, #preg-d")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable previous COVID and Tuberculosis dates
  $("#covid-before").on("change", function() {
    if( $("#covid-before").is(":checked") ) {
      $("#covid-before-date")
        .prop("disabled", false)
        .focus();
    } else {
      $("#covid-before-date")
        .prop("disabled", true)
        .val("");
    }
  });
  $("#tb-before").on("change", function() {
    if( $("#tb-before").is(":checked") ) {
      $("#tb-before-date")
        .prop("disabled", false)
        .focus();
    } else {
      $("#tb-before-date")
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable allergy descrition
  $("input[name='allergy']").on("change", function() {
    if( $("input[name='allergy']:checked").val() == "true" ) {
      $("#allergy-drug")
        .prop("disabled", false)
        .focus();
    } else {
      $("#allergy-drug")
        .prop("disabled", true)
        .val("");
    }
  });

  // Remind peer of science-based responsability
  $("#plan-delusion").on("change", function() {
    alert("Não, essa opção não pode ser desselecionada pois é sua OBRIGAÇÃO ÉTICA (Cap. III, Art. 20, CEM 2019) aderir e orientar paciente das melhores condutas baseadas em evidência científica, e você deveria saber que querer prescrever \"Tratamento Precoce\" é um ato baseado ou na sua ignorância sobre o imenso corpo de literatura contraindicando uso do \"kit COVID\" para COVID, ou em sua má-fé  para com o bem-estar da população.\nSe você quiser usar essa ferramenta, essa caixa se manterá selecionada.");
    $("#plan-delusion").prop("checked", true);
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

  // Enable oedema intensity:
  $("#oedema").on("change", function() {
    if( $("#oedema").val() != "sem edemas" ) {
      $("#oedema-grade").css("display", "inline-block");
    } else {
      $("#oedema-grade")
        .css("display", "none")
        .val("1+/4+");
    }
  }).change();

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

  // Select evaluation type
  $("#eval").on("change", function() {
    switch( $("#eval").val() ) {
      case "1":
        $("#eval").removeClass("due");
        $(".eval1, .eval2, .eval3, .eval4").addClass("hidden");
        $(".eval1").removeClass("hidden");
        break;
      case "2":
        $("#eval").removeClass("due");
        $(".eval1, .eval2, .eval3, .eval4").addClass("hidden");
        $(".eval2").removeClass("hidden");
        break;
      case "3":
        $("#eval").removeClass("due");
        $(".eval1, .eval2, .eval3, .eval4").addClass("hidden");
        $(".eval3").removeClass("hidden");
        break;
      case "4":
        $("#eval").removeClass("due");
        $(".eval1, .eval2, .eval3, .eval4").addClass("hidden");
        $(".eval4").removeClass("hidden");
        break;
      default:
        $("#eval").addClass("due");
    }
  });

  // Run
  $("#button-run").on("click", function() {
    if( $("#eval").val() != "" ) {
      var s = "";
      var o = "";
      var p = "";
      switch( $("#eval").val() ) {
        case "1": // First evaluation
          s = [];
          // Symptoms' listing
          var symps = [];
          var symptomatic = true;
          $.each($("input[name='keysymps']:checked"), function(){ symps.push( $(this).val().toUpperCase() ); });
          $.each($("input[name='othersymps']:checked"), function(){ symps.push( $(this).val() ); });
          var ss = $("#miscsymps").val().split(",")
          ss = ss.filter(el => {
            return el != null && el != "";
          });
          $.each(ss, function(){ symps.push( this.trim().toLowerCase() ); });
          if( symps.length == 0 ) { symps = "ASSINTOMÁTICO"; symptomatic = false; }
          else { symps = "com: " + humanList( symps ); }
          symps = "Paciente encaminhado a acolhimento no fluxo de Sintomáticos Respiratórios, refere estar " + symps + ".";
          if( $("#fear").is(":checked") ) { symps += " Paciente conta ter buscado acolhimento pois teve contato com alguém que testou positivo."; }
          s.push( symps );

          if( symptomatic ) {
            // Symptoms' start and duration
            var start_date = new Date( $("#sympstart").val() + "T00:00:00.000-03:00" );
            var days = deltaDays( $("#sympstart").val() );
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var start = "Sintomas iniciaram " + start_date.toLocaleDateString("pt-BR", options) + ".";
            s.push( start );

            // Comorbidities' and Alergies list
            var comorb = [];
            $.each($("input[name='comorbities']:checked"), function(){ comorb.push( $(this).val() ); });
            var cc = $("#comorbother").val().split(",")
            cc = cc.filter(el => {
              return el != null && el != "";
            });
            $.each(cc, function(){ symps.push( $(this).val().trim() ); });
            comorb = humanList( comorb );
            if( comorb == "" ) { comorb = "Nega comorbidades."; }
            else { comorb = "Refere ter " + comorb + "."; }
            var allergies = "Nega alergias medicamentosas.";
            if( $('input[name="allergy"]:checked').val() == "true" ) {
              allergies = "Refere alergia a " + $("#allergy-drug").val() + ".";
            }
            s.push( comorb + " " + allergies );

            // Pregnancy
            if( $("#pregnancy").is(":checked") ) {
              var preg = "";
              preg = "Paciente gestande de " + $("#preg-w").val() + "+" + $("#preg-d").val() + " sem."
              s.push( preg );
            }

            // Previous COVID-19 infection
            var prev_covid = "Nega diagnóstico prévio de COVID-19.";
            if( $("#covid-before").is(":checked") ) {
              var covid_date = new Date($("#covid-before-date").val() + "T00:00:00.000-03:00");
              prev_covid = "Refere infecção prévia por SARS-CoV-2 em " + covid_date.toLocaleDateString("pt-BR", options) + ".";
            }
            s.push( prev_covid );

            // Vaccines
            var vax = "";
            if( $("#vax-covid").val() == "" ) { vax = "Nega vacinação contra SARS-CoV-2."; }
            else { vax = "Refere ter tomado " + $("#vax-covid").val() + " doses de vacinas contra COVID-19."; }
            if( $("#vax-influenza").val() == "true" ) { vax += " Refere vacinação contra Influenza."; }
            else { vax += " Nega vacinação contra Influenza."; }
            s.push( vax );

            // Work status
            var work = "";
            if( $("#work").val() != "" ) {
              work = "Paciente " + $("#work").val();
              if( $("#work-special").val() != "" ) { work += " (" + $("#work-special").val() + ")"; }
              work += ".";
            }
            if( $("#family").val() != "" ) { work += "Refere também morar " + $("#family").val() + "."; }
            if( work != "" ) { s.push( work ); }
          }

          // Concatenate S
          s = s.join("\n");

          // Run O
          o = runO().join("\n");
          break;
        case "2": // Reevaluation
          s = [];
          // Symptom evolution
          var evol = $("#evol").val();
          if( evol != "resolução completa dos sintomas" ) {
            var still = [];
            $.each($("input[name='sympstill']:checked"), function(){ still.push( $(this).val() ); });
            evol += humanList( still );
          }
          s.push( "Paciente vem ao Sintomáticos Respiratórios para reavaliação, desde primeira avaliação refere " + evol + "." );

          // Symptoms' start and duration
          var start_date = new Date( $("#sympstart").val() + "T00:00:00.000-03:00" );
          var days = deltaDays( $("#sympstart").val() );
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          var start = "Sintomas iniciaram " + start_date.toLocaleDateString("pt-BR", options) + ".";
          s.push( start );

          // Work status
          var work = "";
          if( $("#work").val() != "" ) { work = "Paciente " + $("#work").val() + "."; }
          if( $("#family").val() != "" ) { work += "Refere também morar " + $("#family").val() + "."; }
          if( work != "" ) { s.push( work ); }

          // Concatenate S
          s = s.join("\n");

          // Run O
          o = runO().join("\n");
          break;
        case "3": // Capitalism Piggery
          s = "Empregador solicitou ao paciente que procurasse serviço de saúde para coleta de exame para detecção de SARS-CoV-2, no entanto, paciente " + $("#clt-symp").val() + ".";
          o = "Não se aplica.";
          break;
        case "4": // Pre-Exam
          s = "Paciente comparece para coleta de RT-PCR para SARS-CoV-2 por estar com exame invasivo agendado, estando assintomátice.";
          o = "Não se aplica.";
          break;
        default:
          s = "Gente, como você veio parar aqui?!";
          o = "Mas não é curioso, menina?";
      }
      p = runP().join(";\n") + ".";
      $("#output-s").val(s);
      $("#output-o").val(o);
      $("#output-p").val(p);
    }
  });

  // Familly Leave Button
  $("#make-family-leave").on("click", function() {
    $("#family-leave-form").css("display", "block");
    $("#make-family-leave").css("display", "none");
  });
  $("#flf-run").on("click", function() {
    if( $("#flf-name").val() == "" || $("#flf-days").val() == "" || $("#flf-people").val() == "" ) {
      alert("Informe PELO MENOS nome, dias de afastamento e nome das pessoas a serem afastadas!");
      $("#flf-name, #flf-days, #flf-people").addClass("req");
    } else {
      $("#flf-name, #flf-days, #flf-people").removeClass("req");
      // RG
      var rg = "";
      if( $("#flf-rg").val() == "" ) { rg = "________________"; }
      else { rg = $("#flf-rg").val().toUpperCase(); }
      // CPF
      var cpf = "";
      if( $("#flf-cpf").val() == "" ) { rg = "____.____.____-___"; }
      else {
        cpf = $("#flf-cpf").val();
        var match = cpf.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (match) {
          cpf = match[1] + "." + match[2] + "." + match[3] + "-" + match[4];
        }
      }
      // Address
      var address = "";
      if( $("#flf-address").val() == "" ) { address = "__________________________"; }
      else { address = $("#flf-address").val().toUpperCase(); }
      // Shire
      var shire = "";
      if( $("#flf-shire").val() == "" ) { shire = "______________"; }
      else { shire = $("#flf-shire").val().toUpperCase(); }
      // CEP
      var cep = "";
      if( $("#flf-cep").val() == "" ) { cep = "________—____"; }
      else { cep = $("#flf-cep").val().toUpperCase(); }
      // Days
      flf_start = new Date();
      days = parseInt($("#flf-days").val());
      flf_end = new Date();
      flf_end.setDate(flf_start.getDate() + days);
      // People
      flf_people = $("#flf-people").val().split(", ");
      flf_people.forEach(function(elem, index) {
        var ol = index + 1;
        this[index] = ol + ". " + elem.toUpperCase();
      }, flf_people);
      // Output
      $("#output-flf").val("Afastamento de Familiares\nTERMO DE DECLARAÇÃO\n\nEu, " + $("#flf-name").val().toUpperCase() + ", RG nº " + rg + ", CPF nº " + cpf + ", residente e domiciliado na " + address + ", Bairro " + shire + ", CEP " + cep + ", na cidade de São Paulo, Estado SP, declaro que fui devidamente informado(a) pelo médico(a) que assina abaixo sobre a necessidade de isolamento a que devo ser submetido(a), bem como as pessoas que residem no mesmo endereço ou dos trabalhadores domésticos que exercem atividades no âmbito residencial, com data de início em " + flf_start.toLocaleDateString("pt-BR") + " e previsão de término em " + flf_end.toLocaleDateString("pt-BR") + ", local de cumprimento da medida domiciliar.\nNome das pessoas que residem no mesmo endereço que deverão cumprir medida de isolamento domiciliar:\n" + flf_people.join("\n") + "\nAssinatura da pessoa sintomática: ______________________________\n\nPORTARIA Nº 454, MINISTÉRIO DA SAÚDE, DE 20 DE MARÇO DE 2020.");
    }
  });
  // / Familly Leave Button
});

function deltaDays(date) {
  var today = new Date();
  var begining = new Date(date);
  var days = parseInt((today - begining)/(1000*60*60*24));
  return days;
}
function humanList(arr) {
  switch(arr.length) {
    case 0:
      return "";
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

function runO() {
  var o = [];
  // General State
  var ge = $("#status").val() + "EG.";
  var ped_activity = "";
  if( $("#activity").val() != "" && $("#reactivity").val() != "") { ped_activity = " " + $("#activity").val() + " e " + $("#reactivity").val() + "."; }
  o.push( ge + ped_activity );

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
  qualitative_exam.push($("#breathe-abnormal-desc").val() + $('input[name="breathe"]:checked').val());
  o.push( humanList( qualitative_exam ) );

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
    var disconfort = "";
    if( $("#disconfort").val() != "" ) { disconfort = " Tiragens " + $("#disconfort").val() + "."; }
    o.push( "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + crept + disconfort );
  }
  if( $("#exam-heart").is(":checked") ) {
    var murmur = $("#heart-murmur").val();
    if( murmur == "com sopro" ) {
      murmur += " " + $("#heart-murmur-desc").val();
    }
    o.push( "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + "." );
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

  if( $("#exam-covid-date").val() != "" ) {
    var exam = "";
    var exam_date = new Date($("#exam-covid-date").val() + "T00:00:00.000-03:00");
    o.push( $("#exam-covid").val() + " de " + exam_date.toLocaleDateString("pt-BR") + " com resultado " + $("#exam-covid-res").val() + "." );
  }
  if( $("#exam-influenza-date").val() != "" ) {
    var exam = "";
    var exam_date = new Date($("#exam-influenza-date").val() + "T00:00:00.000-03:00");
    o.push( "Teste Rápido para detecção nasal de Antígenos de Influenza A/B de " + exam_date.toLocaleDateString("pt-BR") + " com resultado " + $("#exam-influenza").val() + "." );
  }

  return o;
}

function runP() {
  p = [];

  // Labs
  if( $("#plan-labcovid").is(":checked") ) { p.push( "Solicito coleta de " + $("#labcovid").val() + " para SARS-CoV-2" + $("#labcovid-refusal").val() ); }
  if( $("#plan-labflu").is(":checked") ) { p.push( "Solicito coleta de " + $("#labflu").val() + " para Influenza A/B" + $("#labflu-refusal").val() ); }
  if( $("#plan-labnone").is(":checked") ) {
    p.push( "Oriento paciente no protocolo vigente da Prefeitura Municipal de São Paulo e como ele restringe a possibilidade de coleta de exames para detecção de SARS-CoV-2, não estando o paciente entre os grupos autorizados por tal protocolo a colher exames de COVID-19" );
    p.push( "Oriento também que, não fosse esse protocolo, paciente apresenta sim indicação de colher exame para detecção de SARS-CoV-2, uma vez que apresenta uma suspeita de infecção por este vírus" );
  }
  // Leaves
  if( $("#plan-leave").is(":checked") ) { p.push( "Atesto paciente para " + $("#leave").val() + " dias" + $("#leave-reason").val() ); }
  if( $("#plan-familyleave").is(":checked") ) { p.push( $("#familyleave").val() ); }
  // Prescriptions
  if( $("#plan-symptomatics").is(":checked") ) { p.push( $("#symptomatics").val() ); }
  if( $("#plan-ln").is(":checked") ) { p.push( "Oriento lavagem nasal com soro fisiológico 0,9%" ); }
  if( $("#plan-syrups").is(":checked") ) { p.push( "Oriento que não existem \"xaropes para tosse\" que sejam superiores a placebo, e, portanto, visando minimizar efeitos colaterais desnecessários, não serão prescritos" ); }
  if( $("#plan-honey").is(":checked") ) { p.push( "Oriento consumo de uma colher de mel, antes de dormir, para melhorar percepção subjetiva da tosse" ); }
  if( $("#plan-tamiflu").is(":checked") ) { p.push( "Prescrevo oseltamivir 12/12h por 05 dias" ); }
  if( $("#plan-atb").is(":checked") ) { p.push( "Prescrevo " + $("#atb").val() + $("#atb-reason").val() + " por " + $("#atb-days").val() + " dias" ); }
  if( $("#plan-med1").is(":checked") ) { p.push( "Prescrevo " + $("#med1").val() + " para " + $("#med1-reason").val() ); }
  if( $("#plan-med2").is(":checked") ) { p.push( "Prescrevo " + $("#med2").val() + " para " + $("#med2-reason").val() ); }
  if( $("#plan-med3").is(":checked") ) { p.push( "Prescrevo " + $("#med3").val() + " para " + $("#med3-reason").val() ); }
  // Guidance
  if( $("#plan-warnsigns").is(":checked") ) { p.push( "Oriento sinais de alarme para retorno precoce e reavaliação em acolhimento no Sintomáticos Respiratórios" ); }
  p.push( "Oriento ausência de evidências científicas validando o uso de \"tratamento precoce\" para COVID-19 (e.g. dexametasona, ivermectina, azitromicina) em pacientes ambulatoriais, assim como reforço a CONTRAINDICAÇÃO FORMAL de uso de azitromicina em casos de suspeita de infeção por SARS-CoV-2 sem sinais de infecção bacteriana (Choosing Wisely Brasil)" );
  if( $("#plan-isolation").is(":checked") ) { p.push( "Oriento sobre medidas de isolamento do caso-índice tanto dentro como fora de casa (uso de máscara durante todo o período, dormir e se manter em cômodo separado, manter casa arejada e ventilada, não compartilhar itens pessoais, de higiene ou de alimentação, etc.), higiene das mãos e medidas de etiqueta respiratória" ); }
  if( $("#plan-quarantine").is(":checked") ) { p.push( "Oriento medidas que as demais pessoas da casa devem tomar para evitar entrar em contato com o caso índice, assim como reforço higiene de mãos e etiqueta respiratória" ); }
  if( $("#plan-criterianotmet").is(":checked") ) { p.push( "Oriento paciente da ausência de critérios para coleta de exame para investigação de SARS-CoV-2" ); }
  if( $("#plan-whenseek").is(":checked") ) { p.push( "Oriento paciente sobre sinais que sugerem busca de nova avaliação no Sintomáticos Respiratórios" ); }
  if( $("#plan-cltonus").is(":checked") ) {
    p.push( "Oriento paciente que, segundo artigo 7.3.1, tópico (b), da Norma Regulamentadora Nº 07, que define e regulamenta o Programa de Controle Médico de Saúde Ocupacional (PCMSO) sob a Consolidação das Leis do Trabalho, é ÔNUS DO EMPREGADOR arcar e custear com exames demandados para SAÚDE OCUPACIONAL" );
    p.push( "Oriento paciente também que, do ponto de vista de medicina ASSISTENCIAL, de que trata seu contato hoje com este serviço de saúde, paciente não preenche critério para coleta de RT-PCR ou Sorologia para SARS-CoV-2, como definido pelo protoco de combate à pandemia de COVID-19 da Secretaria Municipal de Saúde" );
  }
  if( $("#plan-labresults").is(":checked") ) { p.push( "Oriento sobre resultados de exames laboratoriais acima" ); }
  if( $("#plan-labwait").is(":checked") ) { p.push( "Oriento que exame previamente coletado ainda não está pronto" ); }
  // Follow Up
  if( $("#plan-followup").is(":checked") ) { p.push( "Oriento retorno no Sintomáticos Respiratórios em " + $("#followup").val() + " dias para " + $("#followup-reason").val() ); }
  if( $("#plan-bai").is(":checked") ) { p.push( "Alta do episódio" ); }

  return p;
}

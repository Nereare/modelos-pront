$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  var maintenance = false;
  if( maintenance ) {
    $("#maintenance").css("display", "block");
  }

  // Choice between eval and re-eval:
  $("input[name='reeval']").on("change", function() {
    switch( $("input[name='reeval']:checked").val() ) {
      case "reeval":
        $(".reeval, .base").css("display", "block");
        $(".primeval, .clt").css("display", "none");
        break;
      case "clt":
        $(".clt").css("display", "block");
        $("li.clt").css("display", "list-item");
        $(".reeval, .base, .primeval").css("display", "none");
        $("#diag option#opt-nope").attr("selected", "selected");
        $("#diag").trigger("change");
        break;
      default:
        $(".reeval, .clt").css("display", "none");
        $(".primeval, .base").css("display", "block");
    }
  });

  // Enabling transplant, rheumatologic disease and drug, previous COVID-19 and previous TB fields:
  $("#tx").on("change", function() {
    if( $("#tx").is(":checked") ) { $("#tx-organ").prop("disabled", false); }
    else { $("#tx-organ").prop("disabled", true).val(""); }
  });
  $("#rheum").on("change", function() {
    if( $("#rheum").is(":checked") ) { $("#rheum-disease").prop("disabled", false); }
    else { $("#rheum-disease").prop("disabled", true).val(""); }
  });
  $("#suppr").on("change", function() {
    if( $("#suppr").is(":checked") ) { $("#suppr-drug").prop("disabled", false); }
    else { $("#suppr-drug").prop("disabled", true).val(""); }
  });
  $("#covid-before").on("change", function() {
    if( $("#covid-before").is(":checked") ) { $("#covid-before-date").prop("disabled", false); }
    else { $("#covid-before-date").prop("disabled", true).val(""); }
  });
  $("#tb-before").on("change", function() {
    if( $("#tb-before").is(":checked") ) { $("#tb-before-date").prop("disabled", false); }
    else { $("#tb-before-date").prop("disabled", true).val(""); }
  });
  //Enabling drug allergy field:
  $("input[name='allergy']").on("change", function() {
    if( $("input[name='allergy']:checked").val() == "true" ) { $("#allergy-drug").prop("disabled", false); }
    else { $("#allergy-drug").prop("disabled", true).val(""); }
  });

  // Enabling heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) { $("#heart-murmur-desc").css("display", "inline"); }
    else { $("#heart-murmur-desc").css("display", "none"); }
  });

  // Set plan according to Eval:
  $("#diag").on("change", function() {
    $("ol").css("display", "none");
    $("#" + $("#diag").val()).css("display", "block");
  });

  // Set date of exam:
  $("#lab-when").on("change", function() {
    if( $("#lab-when").val() == "em" ) {
      $("#lab-date").css("display", "inline");
    } else {
      $("#lab-date").css("display", "none");
    }
  });

  // Set exame result field:
  $("#exam-eval").on("change", function() {
    $(".exam-eval-select").css("display", "none");
    $("#" + $("#exam-eval option:selected" ).attr("class")).css("display", "block");
  });

  // Build output:
  $("#button-run").on("click", function() {
    var symps = [];
    $.each($("input[name='keysymps']:checked"), function(){ symps.push( $(this).val().toUpperCase() ); });
    $.each($("input[name='othersymps']:checked"), function(){ symps.push( $(this).val() ); });
    var comorb = [];
    $.each($("input[name='comorbities']:checked"), function(){ comorb.push( $(this).val() ); });
    if($("input#tx").is(':checked')) { comorb.push( "transplante prévio de " + $("#tx-organ").val() ); }
    if($("input#rheum").is(':checked')) { comorb.push( $("#rheum-disease").val() ); }
    if($("input#suppr").is(':checked')) { comorb.push( "uso crônico de " + $("#suppr-drug").val() ); }
    var covid_date = new Date($("#covid-before-date").val() + "T00:00:00.000-03:00");
    if($("input#covid-before").is(':checked')) { comorb.push( "apresentado infecção prévia por SARS-CoV-2 em " + covid_date.toLocaleDateString("pt-BR", options) ); }
    var tb_date = new Date($("#tb-before-date").val() + "T00:00:00.000-03:00");
    if($("input#tb-before").is(':checked')) { comorb.push( "tratado tuberculose pulmonar em " + tb_date.toLocaleDateString("pt-BR", options) ); }
    var begining = new Date($("#sympstart").val() + "T00:00:00.000-03:00");
    var days = deltaDays($("#sympstart").val());
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var allergies = "";
    if( $('input[name="allergy"]:checked').val() != "true" ) {
      allergies = "nega alergias";
    } else {
      allergies = "refere alergia a " + $("#allergy-drug").val();
    }

    var ped_activity = "";
    if( $("#activity").val() != "" && $("#reactivity").val() != "") { ped_activity = " " + $("#activity").val() + " e " + $("#reactivity").val() + "."; }

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

    var tiragens = "";
    if( $("#disconfort").val() ) {
      tiragens = " Tiragens " + $("#disconfort").val() + ".";
    }

    // Subjetivo
    switch( $("input[name='reeval']:checked").val() ) {
      case "reeval":
        var symp_evol = "";
        switch( $("input[name='symp-evol']:checked").val() ) {
          case "none":
            symp_evol = "resolução completa dos sintomas, no momento estando assintomático";
            break;
          case "better":
            symp_evol = "melhora global dos sintomas, apesar de manter parte dos sintomas";
            break;
          case "better-iatros":
            symp_evol = "melhora global dos sintomas, apesar de manter parte dos sintomas, com sintomas potencialmente iatrogênicos por uso de medicações sem evidência científica";
            break;
          case "same":
            symp_evol = "mantém sintomas em mesmo grau";
            break;
          case "same-iatros":
            symp_evol = "mantém sintomas em mesmo grau, com sintomas potencialmente iatrogênicos por uso de medicações sem evidência científica";
            break;
          case "worst":
            symp_evol = "piora dos sintomas";
            break;
          case "worst-iatros":
            symp_evol = "piora dos sintomas, com sintomas potencialmente iatrogênicos por uso de medicações sem evidência científica";
            break;
          default:
            symp_evol = "ter olhado no abismo e que o vazio olhou de volta para si";
        }
        $("#output-s").val("Paciente refere " + symp_evol + ".\nInício dos sintomas " + begining.toLocaleDateString("pt-BR", options) + ".\nPaciente " + $("#work").val() + " e refere morar " + $("#family").val() + ".");
        break;
      case "clt":
        $("#output-s").val("Empregador solicitou ao paciente que procurasse serviço de saúde para coleta de exame para detecção de SARS-CoV-2, no entanto, paciente " + $("#clt-symp").val() + ".");
        break;
      default:
        $("#output-s").val("Paciente procura acolhimento, estando no fluxo de Sintomáticos Respiratórios por apresentar: " + humanList(symps) + ".\nQuadro iniciado " + begining.toLocaleDateString("pt-BR", options) + ".\n\nPaciente " + humanComorbidities(comorb) + ", " + allergies + ".\nPaciente " + $("#work").val() + " e refere morar " + $("#family").val() + ".");
    }
    // Objetivo
    if( $("input[name='reeval']:checked").val() == "clt" ) {
      $("#output-o").val("Não se aplica.");
    } else {
      $("#output-o").val("Paciente em " + $("#status").val() + "EG." + ped_activity + "\n" + humanList(qualitative_exam) + ".\n\nD" + days + " de sintomas hoje.");
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
        $("#output-o").val(foobar + "\nPulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + "." + tiragens);
      }
      if( $("#exam-heart").is(":checked") ) {
        var foobar = $("#output-o").val();
        var murmur = $("#heart-murmur").val();
        if( murmur == "com sopro" ) {
          murmur += " " + $("#heart-murmur-desc").val();
        }
        $("#output-o").val(foobar + "\nCard: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + ".");
      }
      if( $("#exam-oto").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\nOtoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + " " + $("#oto-d-retromembrane").val() + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n- OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + " " + $("#oto-e-retromembrane").val() + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + ".");
      }
      if( $("#exam-oro").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\nOroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + "." );
      }
      if( $("#exam-naso").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\nNasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val());
      }
      if( $("input[name='reeval']:checked").val() == "reeval" ) {
        var exam_date = new Date($("#exam-eval-date").val() + "T00:00:00.000-03:00");
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\n" + $("#exam-eval").val() + " de " + exam_date.toLocaleDateString("pt-BR") + " com resultado " + $("#" + $("#exam-eval option:selected" ).attr("class")).val() + ".");
      }
    }
    // Plano
    $("#output-p").val(runPlans());
  });
  // / Build output

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
  days += 1;
  return days;
}
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
function humanComorbidities(arr) {
  var cmb = "";
  switch(arr.length) {
    case 0:
      return "nega comorbidades";
      break;
    case 1:
      return "refere ter " + arr.join("");
      break;
    case 2:
      return "refere ter " + arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      var r = "refere ter " + arr.join(", ");
      r += " e " + last;
      return r;
  }
}
function runPlans() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var plans = [];
  switch($("#diag").val()) {
    case "maybe-covid":
      var when_to = "";
      if( $("#lab-when").val() == "em" ) {
        var foo = new Date($("#lab-date-field").val() + "T00:00:00.000-03:00")
        when_to = foo.toLocaleDateString("pt-BR", options);
      } else {
        when_to = "hoje";
      }
      plans.push("Solicito " + $("#lab").val() + " para SARS-CoV-2 com coleta " + when_to + ";");
      if( $("#leave-needed").is(":checked") ) {
        plans.push("Atesto para " + $("#leave").val() + " dias;");
      }
      plans.push($("#family-leave").val() + ";");
      if( $("#symptomatics").val() != "false" && $("#symptomatics").val() != "" ) {
        plans.push($("#symptomatics").val() + ";");
      }
      if( $("#ln").is(':checked') ) {
        plans.push("Oriento lavagem nasal com soro fisiológico 0,9%;");
      }
      plans.push("Oriento sinais de alarme para retorno precoce e reavaliação em acolhimento no Sintomáticos Respiratórios;");
      plans.push("Oriento ausência de evidências científicas validando o uso de \"medicações para COVID\" (e.g. dexametasona, ivermectina, azitromicina) em pacientes ambulatoriais, assim como reforço a CONTRAINDICAÇÃO FORMAL de uso de azitromicina em casos de suspeita de infeção por SARS-CoV-2 sem sinais de infecção bacteriana (Choosing Wisely Brasil);");
      plans.push("Retorno em " + $("#follow-up").val() + " dias para " + $("#follow-up-why").val() + ";");
      break;
    case "not-covid":
      plans.push("Oriento paciente da ausência de critérios para coleta de exame para investigação de SARS-CoV-2;");
      plans.push("Oriento paciente sobre sinais para busca de reavaliação no Sintomáticos Respiratórios;");
      if( $("#other-symptomatics").is(":checked") ) {
        plans.push("Prescrevo sintomáticos para quadro atual;");
      }
      if( $("input[name='reeval']:checked").val() == "clt" ) {
        plans.push("Oriento paciente que, segundo artigo 7.3.1, tópico (b), da Norma Regulamentadora Nº 07, que define e regulamenta o Programa de Controle Médico de Saúde Ocupacional (PCMSO) sob a Consolidação das Leis do Trabalho, é ÔNUS DO EMPREGADOR arcar e custear com exames demandados para SAÚDE OCUPACIONAL;");
        plans.push("Oriento paciente também que, do ponto de vista de medicina ASSISTENCIAL, de que trata seu contato hoje com este serviço de saúde, paciente não preenche critério para coleta de RT-PCR ou Sorologia para SARS-CoV-2, como definido pelo protoco de combate à pandemia de COVID-19 da Secretaria Municipal de Saúde;");
      }
      break;
    case "yes-covid":
      plans.push("Oriento paciente do resultado positivo para infecção por SARS-CoV-2 (COVID-19);");
      if( $("#leave-needed-14").is(":checked") ) {
        plans.push("Atesto para " + $("#leave-14").val() + " dias de modo a completar 14 dias de afastamento do início dos sintomas;");
      }
      plans.push($("#family-leave-14").val() + ";");
      if( $("#symptomatics-14").val() != "false" && $("#symptomatics-14").val() != "" ) {
        plans.push($("#symptomatics-14").val() + ";");
      }
      plans.push("Oriento sinais de alarme para retorno precoce e reavaliação em acolhimento no Sintomáticos Respiratórios;");
      plans.push("Oriento ausência de evidências científicas validando o uso de \"medicações para COVID\" (e.g. dexametasona, ivermectina, azitromicina) em pacientes ambulatoriais, assim como reforço a CONTRAINDICAÇÃO FORMAL de uso de azitromicina em casos de suspeita de infeção por SARS-CoV-2 sem sinais de infecção bacteriana (Choosing Wisely Brasil);");
      break;
    case "wait-covid":
      plans.push("Aguardo resultado de exame;");
      if( $("#leave-needed-wait").is(":checked") ) {
        plans.push("Atesto para " + $("#leave-wait").val() + " dias até resultado de exame;");
      }
      plans.push($("#family-leave-wait").val() + ";");
      plans.push("Oriento sinais de alarme para retorno precoce e reavaliação em acolhimento no Sintomáticos Respiratórios;");
      plans.push("Oriento ausência de evidências científicas validando o uso de \"medicações para COVID\" (e.g. dexametasona, ivermectina, azitromicina) em pacientes ambulatoriais, assim como reforço a CONTRAINDICAÇÃO FORMAL de uso de azitromicina em casos de suspeita de infeção por SARS-CoV-2 sem sinais de infecção bacteriana (Choosing Wisely Brasil);");
      plans.push("Retorno em " + $("#follow-up-wait").val() + " dias para avaliar resultado de exame;");
      break;
    case "bai-covid":
      plans.push("Oriento paciente do resultado NEGATIVO para infecção por SARS-CoV-2 (COVID-19);");
      plans.push("Alta do monitoramento de Sintomáticos Respiratórios;");
      break;
    default:
      plans.push("SELECIONE UMA AVALIAÇÃO!");
  }
  return plans.join("\n");
}

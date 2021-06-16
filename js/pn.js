$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Enable vaginal discharge selection
  $("#disch").on("change", function() {
    if( $("#disch").is(":checked") ) { $("#disch-desc").prop("disabled", false); }
    else { $("#disch-desc").prop("disabled", true); }
  });
  // Set primipage autofill
  $("#parity-g").on("change", function() {
    if( $("#parity-g").val() == "1" ) {
      $("#parity-pn, #parity-pc, #parity-a").val("0");
    }
  });

  // Enabling heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) { $("#heart-murmur-desc").css("display", "inline"); }
    else { $("#heart-murmur-desc").css("display", "none"); }
  });

  // Calculate Gestational Age
  $("#lmp, #usg-date, #usg-weeks, #usg-days").on("input", function() {
    if(
      $("#lmp").val() == "" ||
      (
        $("#usg-date").val() != "" &&
        (
          $("#usg-weeks").val() == "" ||
          $("#usg-days").val() == ""
        )
      )
    ) {
      $("#lmp").addClass("req");
      if( $("#usg-date").val() != "" ) {
        $("#usg-weeks, #usg-days").addClass("req");
      }
      $("#lmp, #usg-weeks, #usg-days").on("input", function() {
        if( $(this).val != "" ) {
          $(this).removeClass("req");
        } else {
          $(this).addClass("req");
        }
      });
    } else {
      if( $("#usg-date").val() == "" ) {
        var lmp = new Date( $("#lmp").val() );
        var today = new Date( Date.now() );

        var ig = parseInt( (today - lmp)/86400000 );
        var dx = "USG de datação faltante";
        $("#w").html( parseInt(ig/7) );
        $("#d").html( parseInt(ig%7) );
        $("#ig").html( ig );
        $("#ig-dx").html( dx );
      } else {
        var lmp = new Date( $("#lmp").val() );
        var usg = new Date( $("#usg-date").val() );
        var today = new Date( Date.now() );

        var ig_lmp = parseInt( (usg - lmp)/86400000 );
        var ig_usg = parseInt( (parseInt($("#usg-weeks").val())*7) + parseInt($("#usg-days").val()) );
        var diff = Math.abs(ig_lmp - ig_usg);
        var err = false;

        if(ig_lmp <= 62) {
          err = (diff > 5) ? true : false;
        } else if(ig_lmp <= 111) {
          err = (diff > 7) ? true : false;
        } else if(ig_lmp <= 153) {
          err = (diff > 10) ? true : false;
        } else if(ig_lmp <= 195) {
          err = (diff > 14) ? true : false;
        } else {
          err = (diff > 21) ? true : false;
        }

        var ig = 0;
        var dx = "";
        if(err) {
          ig = parseInt((today - usg)/86400000);
          ig += ig_usg;
          dx = "Erro de Data";
        } else {
          ig = parseInt((today - lmp)/86400000);
          dx = "DUM Correta";
        }

        $("#w").html( parseInt(ig/7) );
        $("#d").html( parseInt(ig%7) );
        $("#ig").html( ig );
        $("#ig-dx").html( dx );
      }
    }
  });

  // Build output:
  $("#button-run").on("click", function() {
    if(
      $("#age").val() == "" ||
      $("#ig").html() == "" ||
      $("#ig-dx").html() == "" ||
      $("#parity-g").val() == "" ||
      $("#parity-pn").val() == "" ||
      $("#parity-pc").val() == "" ||
      $("#parity-a").val() == ""
    ) {
      alert("Por favor, preencha todos os campos em vermelho.");
      $("#age, #lmp, #usg-weeks, #usg-days, #parity-g, #parity-pn, #parity-pc, #parity-a").addClass("req");
      $("#age").focus();
    } else {
      $("#age, #lmp, #usg-weeks, #usg-days, #parity-g, #parity-pn, #parity-pc, #parity-a").removeClass("req");

      var symps = [];
      $.each($("input[name='minsymps']:checked"), function(){ symps.push($(this).val()); });
      $.each($("input[name='medsymps']:checked"), function(){ symps.push($(this).val()); });
      $.each($("input[name='redsymps']:checked"), function(){ symps.push($(this).val().toUpperCase()); });

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
      if( $('input[name="oedema"]:checked').val() == "sem edema" ) {
        qualitative_exam.push("sem edema");
      } else {
        qualitative_exam.push("edema " + $('input[name="oedema"]:checked').val() + "+/4+");
      }

      // Subjetivo
      var discharge = "Nega corrimentos vaginais.";
      if( $("#disch").is(":checked") ) {
        discharge = "Refere corrimento vaginal " + $("#disch-desc").val() + ".";
      }
      var othersymps = "";
      if( $("#othersymps").val() != "" ) { othersymps = "\n\n" + $("#othersymps").val(); }
      $("#output-s").val("Paciente comparece para consulta de pré-natal. Refere estar " + humanList(symps, true) + ". " + discharge + othersymps);
      // Objetivo
      $("#output-o").val("Paciente em " + $("#status").val() + "EG.\n" + humanList(qualitative_exam) + ".\nIG " + $("#w").html() + "+" + $("#d").html() + " sem.\nG" + $("#parity-g").val() + "P" + $("#parity-pn").val() + "C" + $("#parity-pc").val() + "A" + $("#parity-a").val() + ".");
      if( $("#obs-au").val() != "" && $("#obs-bcf").val() != "" && $("#obs-mf").val() != "" ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\nMF " + $("input[name='obs-mf']:checked").val() + ". AU " + $("#obs-au").val() + "cm. BCF " + $("#obs-bcf").val() + "bpm. Apresentação fetal " + $("#obs-pos").val() + $("#obs-side").val() + "." );
      }
      if(
        $("#exam-lung").is(":checked") ||
        $("#exam-heart").is(":checked") ||
        $("#exam-gyn-insp").is(":checked") ||
        $("#exam-gyn-spec").is(":checked") ||
        $("#exam-gyn-touch").is(":checked") ||
        $("#exam-gyn-baby").is(":checked")
      ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\n");
      }
      if( $("#exam-lung").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(foobar + "\nPulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + ".");
      }
      if( $("#exam-heart").is(":checked") ) {
        var foobar = $("#output-o").val();
        var murmur = $("#heart-murmur").val();
        if( murmur == "com sopro" ) {
          murmur += " " + $("#heart-murmur-desc").val();
        }
        $("#output-o").val(foobar + "\nCard: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur);
      }
      if( $("#exam-gyn-insp").is(":checked") ) {
        var foobar = $("#output-o").val();
        var desc = "";
        if( $("#gyn-insp-desc").val() == "" ) { desc = "Sem lesões cutâneas perineais."; }
        else { desc = "Observa-se " + $("#gyn-insp-desc").val() + "."; }
        $("#output-o").val(foobar + "\nInspeção perineal: trofismo e pilificação " + $("#gyn-insp-troph").val() + " para idade. " + $("#gyn-insp-hyperemia").val() + " de introito vaginal. " + $("#gyn-insp-fluids").val() + " por introito vaginal. " + desc );
      }
      if( $("#exam-gyn-spec").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(
          foobar +
          "\nEspecular vaginal: canal vaginal com trofismo e vilificação " +
          $("#gyn-spec-troph").val() +
          " para idade. " +
          $("#gyn-spec-hyperemia").val() +
          " de canal vaginal. " +
          $("#gyn-spec-fluids").val() +
          " " +
          $("#gyn-spec-fluids-desc").val() +
          " em fundo de saco " +
          $("#gyn-spec-fluids-exit").val() +
          ". Colo uterino " +
          $("#gyn-spec-cervix").val() +
          "."
        );
      }
      if( $("#exam-gyn-touch").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(
          foobar +
          "\nToque vaginal: colo " +
          $("#gyn-touch-cervixthick").val() +
          ", " +
          $("#gyn-touch-cervixpos").val() +
          ", com orifício interno do colo " +
          $("#gyn-touch-cervixwidth").val() +
          " e superfície " +
          $("#gyn-touch-cervixsurface").val() +
          ". Colo uterino " +
          $("#gyn-touch-cervixpain").val() +
          ", anexos " +
          $("#gyn-touch-annex").val() +
          $("#gyn-touch-annexvol").val() +
          $("#gyn-touch-annexsurf").val() +
          " e região anexial " +
          $("#gyn-touch-annexpain").val() +
          "."
        );
      }
      if( $("#exam-gyn-baby").is(":checked") ) {
        var foobar = $("#output-o").val();
        var water = "";
        if( $("#gyn-baby-water").val() != "" ) { water = ". Bolsa das águas " + $("#gyn-baby-water").val(); }

        $("#output-o").val(
          foobar +
          "\nConcepto: " +
          $("#gyn-baby-head").val() +
          " fetal " +
          $("#gyn-baby-height").val() +
          $("#gyn-baby-flex").val() +
          $("#gyn-baby-present").val() +
          water +
          "."
        );
      }
      // Avaliação
      var ig = $("#ig").html();
      var trim = "";
      switch (true) {
        case (ig <= 90):
          trim = "1º Trimestre";
          break;
        case (ig <= 174):
          trim = "2º Trimestre";
          break;
        case (ig <= 258):
          trim = "3º Trimestre";
          break;
        case (ig <= 279):
          trim = "Termo";
          break;
        case (ig <= 293):
          trim = "Pós-Data";
          break;
        default:
          trim = "PÓS-TERMO";
      }
      var age = parseInt( $("#age").val() );
      var g = parseInt( $("#parity-g").val() );
      var parity_g = ordinate(g) + "gesta";
      var pn = parseInt( $("#parity-pn").val() );
      var pc = parseInt( $("#parity-pc").val() );
      var parity_p = ordinate((pn + pc), true).toLowerCase() + "para";
      var parity_c = "";
      if (pc > 0) {
        parity_c = " (" + pc + " cesárea";
        parity_c += (pc > 1) ? "s" : "";
        parity_c += ")";
      }
      var a = parseInt( $("#parity-a").val() );
      var parity_a = "";
      switch (a) {
        case 0:
          parity_a = "sem abortos prévios";
          break;
        case 1:
          parity_a = "1 aborto prévio";
          break;
        default:
          parity_a = a + " abortos prévios";
      }

      var dxs = [];
      dxs.push("Gestação " + trim + ";");
      dxs.push(parity_g + ", " + parity_p + parity_c + ", " + parity_a + ";");
      dxs.push( $("#ig-dx").html() + ";" );
      if(age >= 35) { dxs.push("Gestante de idade avançada;"); }
      if(age <= 16) { dxs.push("Gestante muito jovem;"); }
      dxss = $("#diag").val().split(",");
      dxss = dxss.filter(el => {
        return el != null && el != "";
      });
      $.each($("input[name='obsdx']:checked"), function(){ dxss.push($(this).val()); });
      if(dxss.length > 0) {
        dxss.forEach(function(val) { dxs.push( $.trim(val) + ";" ); });
      }
      $("#output-a").val(dxs.join("\n"));
      // Plano
      $("#output-p").val(runPlans());
    }
  });
  // / Build output
});

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

function ordinate(num, accent) {
  accent = (typeof accent !== 'undefined') ?  accent : false;
  var x = parseInt(num);
  var r = "";

  switch(x) {
    case 0:
      r = "Nuli";
      break;
    case 1:
      r = "Primi";
      break;
    case 2:
      r = "Secundi";
      break;
    case 3:
      r = "Terci";
      break;
    case 4:
      r = "Quarti";
      break;
    case 5:
      r = "Quinti";
      break;
    case 6:
      r = "Sexti";
      break;
    case 7:
      r = "Hepti";
      break;
    case 8:
      r = "Octi";
      break;
    case 9:
      r = "Noni";
      break;
    case 10:
      r = "Deca";
      break;
    case 11:
      r = "Hendeca";
      break;
    case 12:
      r = "Dodeca";
      break;
    case 13:
      r = "Triadeca";
      break;
    case 14:
      r = "Tessaradeca";
      break;
    case 15:
      r = "Pentadeca";
      break;
    case 16:
      r = "Hexadeca";
      break;
    case 17:
      r = "Heptadeca";
      break;
    case 18:
      r = "Octodeca";
      break;
    case 19:
      r = "Eneadeca";
      break;
    case 20:
      r = "Icosi";
      break;
    default:
      r = x + "-";
  }
  if(accent) {
    var last = r.split("").pop();
    var rem = r.slice(0, -1);
    switch (last) {
      case "i":
        r = rem + "í";
        break;
      case "a":
        r + rem + "á";
        break;
      default:
        true;
    }
  }
  return r;
}

function runPlans() {
  var plans = [];
  if( $("#p-labs").is(":checked") ) {
    plans.push("Solicito exames laboratoriais para " + $("#p-labs-sem").val() + " semestre;");
  }
  if( $("#p-labnow").is(":checked") ) { plans.push("Solicito coleta dos exames acima agora, fora do horário, pois gestante não se mostra disponível para coleta no fluxo estabelecido, mesmo após diversas tentativas de sensibilização;"); }
  if( $("#p-labtr").is(":checked") ) { plans.push("Solicito realização de Testes Rápidos para HIV e Sífilis, conforme protocolo Mãe Paulistana;"); }
  if( $("#p-labpegb").is(":checked") ) { plans.push("Colho Pesquisa de Estreptococo Grupo B hoje, sem intercorrências;"); }
  if( $("#p-usg").is(":checked") ) { plans.push("Solicito USG Obstétrico;"); }
  if( $("#p-labs-other").is(":checked") ) {
    plans.push("Solicito outros exames laboratoriais: " + $("#p-labs-otherlab").val() + ";");
  }
  if( $("#p-med1").is(":checked") ) { plans.push("Prescrevo ácido fólico;"); }
  if( $("#p-med2").is(":checked") ) { plans.push("Prescrevo sulfato ferroso e oriento seu uso adequado;"); }
  if( $("#p-med3").is(":checked") ) { plans.push("Prescrevo carbonato de cálcio segundo protocolo Mãe Paulistana, orientando paciente da ausência de evidências científicas que anteparem prescrição indiscriminada desse fármaco para todas as gestantes;"); }
  if( $("#p-med4").is(":checked") ) { plans.push("Prescrevo carbonato de cálcio em dose adequada para prevenção de pré-eclâmpsia, assim como ácido acetilsalicílico, e oriento racional clínico por trás da necessidade de uso dessas medicações em gestantes com pré-eclâmpsia ou alto risco para desenvolvê-la;"); }
  if( $("#p-med5").is(":checked") ) {
    plans.push("Prescrevo " + $("#p-medother").val() + ";");
  }
  if( $("#p-vax").is(":checked") ) { plans.push("Levo paciente à Sala de Vacinação para atualização de status vacinal em atraso;"); }
  if( $("#p-vaxnew").is(":checked") ) { plans.push("Levo paciente à Sala de Vacinação para reinício de vacinação, uma vez que não apresenta qualquer comprovação de vacinação prévia;"); }
  if( $("#p-vaxori").is(":checked") ) { plans.push("Oriento paciente a procurar Sala de Vacinação para atualização de status vacinal em atraso;"); }
  if( $("#p-ori1").is(":checked") ) { plans.push("Oriento algumas das alterações fisiológicas gravídicas e suas relações com sensações e mudanças referidas pela paciente;"); }
  if( $("#p-ori2").is(":checked") ) { plans.push("Oriento e reforço paciente de sinais para busca de acolhimento, assim como reforço que alguns dos sinais (sangramento vaginal ou rotura da bolsa) são condições suficientes para busca direto da Maternidade, sem necessidade de avaliação prévia na Atenção Básica;"); }
  if( $("#p-ori3").is(":checked") ) { plans.push("Oriento sinais de trabalho de parto, na fase ativa, e oriento a procurar atendimento caso os apresente;"); }
  if( $("#p-ori4").is(":checked") ) { plans.push("Oriento medidas não-farmacológias domiciliares para agilizar trabalho de parto em fase latente;"); }
  var days = parseInt( $("#p-leave-days").val() );
  var leave_days = (days > 1) ? days : "hoje";
  if( $("#p-leave").is(":checked") ) {
    plans.push("Atesto paciente para " + leave_days + ";");
  }
  if( $("#p-pregleave").is(":checked") ) {
    plans.push("Oriento paciente de que adiantamento da licença maternidade, autorizada pela CLT a partir de 36 semanas de gestação, implica perda de número de dias de licença após parto igual ao número de dias adiantado, uma vez que adiantar licença maternidade não expande os 120 dias previstos na legislação vigente;");
    plans.push("Adianto licença maternidade por solicitação a gestante, a qual confirma estar ciente da orientação acima;");
  }
  plans.push("Tiro dúvidas;");
  plans.push("Retorno em " + $("#p-return-num").val() + " " + $("#return-time").val() + " " + $("#return-who").val() + ";");
  return plans.join("\n");
}

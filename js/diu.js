$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Set return data
  var today = new Date();
  $("#return-month option[value='" + (today.getMonth() + 1) + "']").attr("selected", "true");
  $("#return-year").val( today.getFullYear() + 10 );

  // Change painkiller status
  $("#p-painkillers").on("change", function() {
    if ( $(this).val() == "true" ) {
      $("#p-painkillers-via, #p-painkillers-med").prop("disabled", false);
    } else {
      $("#p-painkillers-via, #p-painkillers-med").prop("disabled", true);
    }
  });
  // Change blockade status
  $("#p-block").on("change", function() {
    if ( $(this).val() == "true" ) { $("#p-block-method").prop("disabled", false); }
    else { $("#p-block-method").prop("disabled", true); }
  });

  // Build output:
  $("#button-run").on("click", function() {
    var required = ["#ago-firstmenses", "#ago-firstsex", "#ago-partners", "#ago-lastsex", "#parity-g", "#parity-pn", "#parity-pc", "#parity-a", "#menses-pause", "#menses-flow", "#gyn-hysterometry", "#iud-model", "#iud-lot"];
    var missing = [];
    var error = false;
    $.each(required, function(i, v) {
      if( $(v).val() == "" ) {
        error = true;
        missing.push(v);
      }
    });

    if( error ) {
      alert("Por favor, preencha todos os campos em vermelho.");
      $.each(missing, function(i, v) {
        $(v).addClass("is-danger");
        $(v).on("input", function() {
          if( $(this).val() != "" ) { $(this).removeClass("is-danger"); }
          else { $(this).addClass("is-danger"); }
        });
      });
      $(missing[0]).focus();
    } else {
      var macs = [];
      $.each( $("input[name='macs']:checked"), function(){ macs.push( $(this).val() ); } );
      var othermacs = $("#mac-other").val().split(",");
      othermacs = othermacs.filter(el => {
        return el != null && el != "";
      });
      if(othermacs.length > 0) {
        $.each(othermacs, function(i, v) { macs.push( $.trim(v) ); });
      }

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
      if( $('input[name="cyanose"]:checked').val() == "acian??tice" ) {
        qualitative_exam.push("acian??tice");
      } else {
        qualitative_exam.push("cian??tice " + $('input[name="cyanose"]:checked').val() + "+/4+");
      }
      if( $('input[name="icter"]:checked').val() == "anict??rice" ) {
        qualitative_exam.push("anict??rice");
      } else {
        qualitative_exam.push("ict??rice " + $('input[name="icter"]:checked').val() + "+/4+");
      }

      // Subjetivo
      macs = humanList(macs);
      if( macs == "" ) { macs = "nega uso de qualquer tipo de m??todo contraceptivo, hormonal, cir??rgico, mec??nico ou comportamental"; }

      $("#output-s").val(
        "Paciente comparece para passagem de Dispositivo Intrauterino.\n" +
        "# AGO\n" +
        " - Menarca aos " + $("#ago-firstmenses").val() + " anos;\n" +
        " - Coitarca aos " + $("#ago-firstsex").val() + " anos;\n" +
        " - # de parceiros sexuais no ??ltimo ano: " + $("#ago-partners").val() + ";\n" +
        " - ??ltima rela????o sexual h?? " + $("#ago-lastsex").val() + " " + $("#ago-lastsex-time").val() + ";\n" +
        " - G" + $("#parity-g").val() + "Pn" + $("#parity-pn").val() + "Pc" + $("#parity-pc").val() + "A" + $("#parity-a").val() + ";\n" +
        " - Ciclos de " + $("#menses-pause").val() + "/" + $("#menses-flow").val() + "d;\n" +
        " - Fluxo menstrual " + $("#menses-volume").val() + ", " + $("#menses-coag").val() + ";\n" +
        " - Dismenorreia " + $("#menses-cramps").val() + ";\n" +
        " - MACs atuais: " + macs + "."
      );
      if( $("#othersymps").val() != "" ) {
        var foobar = $("#output-s").val();
        $("#output-s").val( foobar + "\n\n" + $("#othersymps").val() );
      }
      // Objetivo
      var desc = "";
      if( $("#gyn-insp-desc").val() == "" ) { desc = "Sem les??es cut??neas perineais."; }
      else { desc = "Observa-se " + $("#gyn-insp-desc").val() + "."; }

      $("#output-o").val(
        "Paciente em " + $("#status").val() + "EG.\n" +
        humanList(qualitative_exam) + ".\n\n" +
        "# Exame Ginecol??gico\n" +
        " - Inspe????o Perineal: trofismo e pilifica????o " +
          $("#gyn-insp-troph").val() + " para idade. " +
          $("#gyn-insp-hyperemia").val() + " de introito vaginal. " +
          $("#gyn-insp-fluids").val() + " por introito vaginal. " +
          desc + "\n" +
        " - Especular Vaginal: canal vaginal com trofismo e vilifica????o " +
          $("#gyn-spec-troph").val() + " para idade. " +
          $("#gyn-spec-hyperemia").val() + " de canal vaginal. " +
          $("#gyn-spec-fluids").val() + " " +
          $("#gyn-spec-fluids-desc").val() + " em fundo de saco " +
          $("#gyn-spec-fluids-exit").val() + ". Colo uterino " +
          $("#gyn-spec-cervix").val() + ".\n" +
        " - Toque vaginal: colo " +
          $("#gyn-touch-cervixthick").val() + ", " +
          $("#gyn-touch-cervixpos").val() + ", com orif??cio interno do colo " +
          $("#gyn-touch-cervixwidth").val() + " e superf??cie " +
          $("#gyn-touch-cervixsurface").val() + ". Colo uterino " +
          $("#gyn-touch-cervixpain").val() + ", anexos " +
          $("#gyn-touch-annex").val() +
          $("#gyn-touch-annexvol").val() +
          $("#gyn-touch-annexsurf").val() + " e regi??o anexial " +
          $("#gyn-touch-annexpain").val() + ".\n" +
        " - Histerometria de " +
          $("#gyn-hysterometry").val() + "cm, obtida " +
          $("#gyn-hysterometry-difficulty").val() + ".\n" +
        " - Modelo de DIU: " +
          $("#iud-model").val() + ", lote " +
          $("#iud-lot").val() + "."
      );
      if( $("#preg").is(":checked") ) {
        var foobar = $("#output-o").val();
        $("#output-o").val(
          foobar + "\n\n" +
          "# Teste R??pido de Gravidez (" +
          today.toLocaleDateString("pt-BR") +
          ") com resultado NEGATIVO."
        );
      }
      // Avalia????o
      var dxs = [];
      dxs.push( "G" + $("#parity-g").val() + "Pn" + $("#parity-pn").val() + "Pc" + $("#parity-pc").val() + "A" + $("#parity-a").val() );
      dxs.push( "Desejo por Anticoncep????o de Longa Perman??ncia" );
      dxs.push( "Passagem de Dispositivo Intrauterino" );
      $("#output-a").val(dxs.join(";\n") + ".");
      // Plano
      var plans = [
        "Oriento m??todos contraceptivos (hormonais, qu??micos e f??sicos) dispon??veis na rede p??blica ?? paciente",
        "Paciente, ciente das possibilidades anticoncepcionais dispon??veis no SUS, escolhe passagem de DIU de Cobre",
        "Oriento perfis de efeitos colaterais comumente associados ao DIU de Cobre",
        "Tiro d??vidas referentes tanto ao m??todo contraceptivo como ao procedimento de passagem de DIU",
        "Discuto termo de passagem de DIU de Cobre com paciente, o qual paciente assina, estando ciente, e que anexo ao prontu??rio"
      ];
      if( $("#p-painkillers").val() == "true" ) {
        plans.push(
          "Realizo analgesia pr??-procedimento " +
          $("#p-painkillers-via").val() + " com " +
          $("#p-painkillers-med").val()
        );
      }
      plans.push("Paciente posicionada em dec??bito dorsal " + $("#p-elevation").val() );
      plans.push("Exame ginecol??gico realizado sem intercorr??ncias, excluindo sinais de infec????es ginecol??gicas");
      plans.push(
        "Assepsia realizada com " +
        $("#p-asepsis").val() + ", iniciando em colo uterino e seguindo para canal vaginal"
      );
      if( $("#p-block").val() == "true" ) {
        plans.push(
          "Realizo bloqueio " +
          $("#p-block-method").val() + " com lidoca??na 1% ap??s orientar paciente de benef??cios duvidosos de anestesia ?? passagem de DIU, e paciente manter desejo de bloqueio anest??sico"
        );
      }
      plans.push("Insiro DIU, garantindo t??cnica est??ril atrav??s de m??todo no-touch, sem intercorr??ncias");
      plans.push("Tiro d??vidas e conduzo debriefing sobre procedimento realizado");
      plans.push("Prescrevo analgesia com AINE");
      plans.push("Oriento cuidados locais");
      plans.push("Oriento possibilidades de efeitos adversos ap??s-passagem de DIU");
      plans.push("Oriento sinais de alarme para busca de reavalia????o em acolhimento");
      if( $("#p-usg").val() == "true" ) { plans.push("Solicito USG Transvaginal para controle de loca????o do DIU"); }
      plans.push("Oriento retorno em acolhimento comigo ap??s fim da pr??xima menstrua????o, para avalia????o especular de fio guia");
      plans.push(
        "Troca de DIU prevista para " +
        $("#return-month option:selected").html() + "/" +
        $("#return-year").val()
      );

      $("#output-p").val( plans.join(";\n") + "." );
    }
  });
  // / Build output
});

function humanList(arr) {
  var r = "";

  switch(arr.length) {
    case 0:
      r = "";
      break;
    case 1:
      r += arr.join("");
      break;
    case 2:
      r += arr.join(" e ");
      break;
    default:
      var last = arr.pop();
      r += arr.join(", ");
      r += " e " + last;
  }
  return r;
}

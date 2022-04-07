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

      // Subjetivo
      macs = humanList(macs);
      if( macs == "" ) { macs = "nega uso de qualquer tipo de método contraceptivo, hormonal, cirúrgico, mecânico ou comportamental"; }

      $("#output-s").val(
        "Paciente comparece para passagem de Dispositivo Intrauterino.\n" +
        "# AGO\n" +
        " - Menarca aos " + $("#ago-firstmenses").val() + " anos;\n" +
        " - Coitarca aos " + $("#ago-firstsex").val() + " anos;\n" +
        " - # de parceiros sexuais no último ano: " + $("#ago-partners").val() + ";\n" +
        " - Última relação sexual há " + $("#ago-lastsex").val() + " " + $("#ago-lastsex-time").val() + ";\n" +
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
      if( $("#gyn-insp-desc").val() == "" ) { desc = "Sem lesões cutâneas perineais."; }
      else { desc = "Observa-se " + $("#gyn-insp-desc").val() + "."; }

      $("#output-o").val(
        "Paciente em " + $("#status").val() + "EG.\n" +
        humanList(qualitative_exam) + ".\n\n" +
        "# Exame Ginecológico\n" +
        " - Inspeção Perineal: trofismo e pilificação " +
          $("#gyn-insp-troph").val() + " para idade. " +
          $("#gyn-insp-hyperemia").val() + " de introito vaginal. " +
          $("#gyn-insp-fluids").val() + " por introito vaginal. " +
          desc + "\n" +
        " - Especular Vaginal: canal vaginal com trofismo e vilificação " +
          $("#gyn-spec-troph").val() + " para idade. " +
          $("#gyn-spec-hyperemia").val() + " de canal vaginal. " +
          $("#gyn-spec-fluids").val() + " " +
          $("#gyn-spec-fluids-desc").val() + " em fundo de saco " +
          $("#gyn-spec-fluids-exit").val() + ". Colo uterino " +
          $("#gyn-spec-cervix").val() + ".\n" +
        " - Toque vaginal: colo " +
          $("#gyn-touch-cervixthick").val() + ", " +
          $("#gyn-touch-cervixpos").val() + ", com orifício interno do colo " +
          $("#gyn-touch-cervixwidth").val() + " e superfície " +
          $("#gyn-touch-cervixsurface").val() + ". Colo uterino " +
          $("#gyn-touch-cervixpain").val() + ", anexos " +
          $("#gyn-touch-annex").val() +
          $("#gyn-touch-annexvol").val() +
          $("#gyn-touch-annexsurf").val() + " e região anexial " +
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
          "# Teste Rápido de Gravidez (" +
          today.toLocaleDateString("pt-BR") +
          ") com resultado NEGATIVO."
        );
      }
      // Avaliação
      var dxs = [];
      dxs.push( "G" + $("#parity-g").val() + "Pn" + $("#parity-pn").val() + "Pc" + $("#parity-pc").val() + "A" + $("#parity-a").val() );
      dxs.push( "Desejo por Anticoncepção de Longa Permanência" );
      dxs.push( "Passagem de Dispositivo Intrauterino" );
      $("#output-a").val(dxs.join(";\n") + ".");
      // Plano
      var plans = [
        "Oriento métodos contraceptivos (hormonais, químicos e físicos) disponíveis na rede pública à paciente",
        "Paciente, ciente das possibilidades anticoncepcionais disponíveis no SUS, escolhe passagem de DIU de Cobre",
        "Oriento perfis de efeitos colaterais comumente associados ao DIU de Cobre",
        "Tiro dúvidas referentes tanto ao método contraceptivo como ao procedimento de passagem de DIU",
        "Discuto termo de passagem de DIU de Cobre com paciente, o qual paciente assina, estando ciente, e que anexo ao prontuário"
      ];
      if( $("#p-painkillers").val() == "true" ) {
        plans.push(
          "Realizo analgesia pré-procedimento " +
          $("#p-painkillers-via").val() + " com " +
          $("#p-painkillers-med").val()
        );
      }
      plans.push("Paciente posicionada em decúbito dorsal " + $("#p-elevation").val() );
      plans.push("Exame ginecológico realizado sem intercorrências, excluindo sinais de infecções ginecológicas");
      plans.push(
        "Assepsia realizada com " +
        $("#p-asepsis").val() + ", iniciando em colo uterino e seguindo para canal vaginal"
      );
      if( $("#p-block").val() == "true" ) {
        plans.push(
          "Realizo bloqueio " +
          $("#p-block-method").val() + " com lidocaína 1% após orientar paciente de benefícios duvidosos de anestesia à passagem de DIU, e paciente manter desejo de bloqueio anestésico"
        );
      }
      plans.push("Insiro DIU, garantindo técnica estéril através de método no-touch, sem intercorrências");
      plans.push("Tiro dúvidas e conduzo debriefing sobre procedimento realizado");
      plans.push("Prescrevo analgesia com AINE");
      plans.push("Oriento cuidados locais");
      plans.push("Oriento possibilidades de efeitos adversos após-passagem de DIU");
      plans.push("Oriento sinais de alarme para busca de reavaliação em acolhimento");
      if( $("#p-usg").val() == "true" ) { plans.push("Solicito USG Transvaginal para controle de locação do DIU"); }
      plans.push("Oriento retorno em acolhimento comigo após fim da próxima menstruação, para avaliação especular de fio guia");
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

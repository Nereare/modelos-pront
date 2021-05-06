$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  $("#parity-g").on("input", function() {
    if( $(this).val() <= 1 ) {
      $("#parity-pn, #parity-pc, #parity-a").val(0);
    }
  });

  // Build output:
  $("#button-run").on("click", function() {
    if(
      $("#name").val() == "" ||
      $("#birth").val() == "" ||
      $("#pront").val() == "" ||
      ( $("#cns").val() + $("#cpf").val() ) == "" ||
      $("#parity-g").val() == "" ||
      $("#parity-pn").val() == "" ||
      $("#parity-pc").val() == "" ||
      $("#parity-a").val() == ""
    ) {
      alert("Por favor, preencha todos os campos em vermelho.");
      $("#name, #birth, #pront, #cns, #parity-g, #parity-pn, #parity-pc, #parity-a")
        .addClass("req")
        .on("input", function() {
          if( $(this).val() != "" ) { $(this).removeClass("req"); }
        });
    } else {
      var name = $("#name").val().toUpperCase();
      var birth = new Date( $("#birth").val() );
      birth = birth.toLocaleDateString("pt-BR");
      var pront = $("#pront").val();
      var cpf = $("#cpf").val();
      if( cpf != "" ) {
        var match = cpf.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (match) {
          cpf = match[1] + "." + match[2] + "." + match[3] + "-" + match[4];
        }
      }
      var cns = $("#cns").val();
      if( cns != "" ) {
        var match = cns.match(/^(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})$/);
        if (match) {
          cns = match[1] + "." + match[2] + "." + match[3] + "." + match[4] + "." + match[5];
        }
      }
      var g = parseInt( $("#parity-g").val() );
      var p = parseInt( $("#parity-pn").val() ) + parseInt( $("#parity-pc").val() );
      var a = parseInt( $("#parity-a").val() );
      var criteria = [];
      $.each($("input[name='crits']:checked"), function(){ criteria.push($(this).val()); });

      var reason = "";
      if( criteria.length <= 0 ) {
        alert("Note que os critérios vigentes de solicitação de Implanon previstos pela Secretaria Municipal de Saúde de São Paulo requerem ao menos um dos fatores listados. Solicitar sem nenhum desses implica na muitíssimo provável recusa da SMS do pedido.");
      }
      if( criteria.includes("drug") ) { reason += "\nPaciente é usuária de múltiplas substâncias, apresentando dificuldade de uso de anticoncepcionais."; }
      if( criteria.includes("teen") ) { reason += "\nPaciente é adolescente."; }

      $("#output").val("Requisição de Implanon\n\nPaciente " + name + " (CNS " + cns + ", CPF " + cpf + "), nascida em " + birth + " e cadastrada nesta Unidade de Saúde com o prontuário " + pront + ". Apresentou " + g + " gestações prévias, " + p + " partos e " + a + " abortos." + reason + "\nSolicito dispositivo intradérmico de etonogestrel para paciente acima.\nSem mais.");
    }
  });
  // / Build output
});

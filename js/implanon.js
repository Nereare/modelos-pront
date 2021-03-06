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
        .addClass("is-danger")
        .on("input", function() {
          if( $(this).val() != "" ) { $(this).removeClass("is-danger"); }
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
        alert("Note que os critérios vigentes de solicitação de Implanon previstos pela Secretaria Municipal de Saúde de São Paulo requerem ao menos um dos fatores listados. Solicitar sem nenhum desses implica na muitíssimo provável recusa pela SMS do pedido.");
      }
      if( criteria.includes("teen") ) { reason += "\n- Mulher com menos de 16 anos;"; }
      if( criteria.includes("drug") ) { reason += "\n- Usuária de substâncias psicoativas, interferindo com a capacidade de autogestão de outros métodos contraceptivos;"; }
      if( criteria.includes("homeless") ) { reason += "\n- Em situação de rua;"; }
      if( criteria.includes("hiv") ) { reason += "\n- Vivendo com HIV, em uso de dolutegravir;"; }
      if( criteria.includes("talidomide") ) { reason += "\n- Em uso de talidomida;"; }
      if( criteria.includes("prison") ) { reason += "\n- Privada de liberdade;"; }
      if( criteria.includes("sex") ) { reason += "\n- Trabalhadora do sexo;"; }
      if( criteria.includes("tb") ) { reason += "\n- Em tratamento de tuberculose, em uso de aminoglicosídeo;"; }

      $("#output").val("Requisição de Implanon\n\nPaciente " + name + " (CNS " + cns + ", CPF " + cpf + "), nascida em " + birth + " e cadastrada nesta Unidade de Saúde com o prontuário " + pront + ". Apresentou " + g + " gestações prévias, " + p + " partos e " + a + " abortos.\nPaciente apresenta o(s) seguinte(s) critério(s) para Implanon:" + reason + "\nSolicito dispositivo intradérmico de etonogestrel para paciente acima.\nSem mais.");
    }
  });
  // / Build output
});

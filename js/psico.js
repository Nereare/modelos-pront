$(document).ready(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Enable fields with "other" option
  $(".otherable").on("change", function() {
    var elem = "#" + $(this).attr("id") + "-other";
    if( $(this).val() == "outro" ) { $(elem).prop("disabled", false); }
    else {
      $(elem)
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable Hallucinations' description fields
  $(".hallucinations").on("change", function() {
    var elem = "#" + $(this).attr("id") + "-desc";
    if( $(this).val() != "ausentes" ) { $(elem).prop("disabled", false); }
    else {
      $(elem)
        .prop("disabled", true)
        .val("");
    }
  });

  // Enable Mini Mental fields
  $("#memory").on("change", function() {
    if( $("#memory").val() == "testada com Mini Exame do Estado Mental resultando em " ) {
      $("#memory-minimental-grade, #memory-minimental-aim").prop("disabled", false);
    } else {
      $("#memory-minimental-grade, #memory-minimental-aim").prop("disabled", true);
    }
  });

  // Build output:
  $("#button-run").on("click", function() {
    var error = false; // False if all otherables are ok. True if any otherable text-input is empty.
    var erred = [];
    $(".otherable").each(function() {
      if( $(this).val() == "outro" ) {
        var elem = "#" + $(this).attr("id") + "-other";
        if( $(elem).val() == "" ) {
          error = true;
          erred.push( elem );
        }
      }
    });
    $(".hallucinations").each(function() {
      if( $(this).val() == "outro" ) {
        var elem = "#" + $(this).attr("id") + "-desc";
        if( $(elem).val() == "" ) {
          error = true;
          erred.push( elem );
        }
      }
    });

    if( error ) {
      alert("Alguns campos precisam de atenção!");
      $.each(erred, function(i, v) {
        console.log(v);
        $(v).addClass("req");
        $(v).on("input", function() {
          if( $(this).val() != "" ) { $(this).removeClass("req"); }
          else { $(this).addClass("req"); }
        });
      });
      $(erred[0]).focus();
    } else {
      // Begin real processing
      var output = "# Exame Psíquico\n";
      // Apresentação
      output += ".  1. Apresentação\n";
      output += ".    1a. Aparência: ";
      if( $("#present-appearence").val() != "outro" ) { output += $("#present-appearence").val() + ";\n"; }
      else { output += $("#present-appearence-other").val() + ";\n" }
      output += ".    1b. Expressão Facial: ";
      if( $("#present-expression").val() != "outro" ) { output += $("#present-expression").val() + ";\n"; }
      else { output += $("#present-expression-other").val() + ";\n" }
      output += ".    1c. Postura: ";
      if( $("#present-posture").val() != "outro" ) { output += $("#present-posture").val() + ";\n"; }
      else { output += $("#present-posture-other").val() + ";\n" }
      output += ".    1d. Interação/Cooperação: ";
      if( $("#present-interaction").val() != "outro" ) { output += $("#present-interaction").val() + ";\n"; }
      else { output += $("#present-interaction-other").val() + ";\n" }
      // Linguagem e Pensamento
      output += ".  2. Linguagem e Pensamento\n";
      output += ".    2a. Característica da Fala: ";
      if( $("#language-characteristic").val() != "outro" ) { output += $("#language-characteristic").val() + ";\n"; }
      else { output += $("#language-characteristic-other").val() + ";\n" }
      output += ".    2b. Fluxo da Fala: ";
      if( $("#language-flow").val() != "outro" ) { output += $("#language-flow").val() + ";\n"; }
      else { output += $("#language-flow-other").val() + ";\n" }
      output += ".    2c. Forma: ";
      if( $("#language-form").val() != "outro" ) { output += $("#language-form").val() + ";\n"; }
      else { output += $("#language-form-other").val() + ";\n" }
      output += ".    2d. Conteúdo: ";
      if( $("#language-contents").val() != "outro" ) { output += $("#language-contents").val() + ";\n"; }
      else { output += $("#language-contents-other").val() + ";\n" }
      output += ".    2e. Lógica Interna: ";
      if( $("#language-internallogic").val() != "outro" ) { output += $("#language-internallogic").val() + ";\n"; }
      else { output += $("#language-internallogic-other").val() + ";\n" }
      output += ".    2f. Lógica Externa: ";
      if( $("#language-externallogic").val() != "outro" ) { output += $("#language-externallogic").val() + ";\n"; }
      else { output += $("#language-externallogic-other").val() + ";\n" }
      output += ".    2g. Capacidade de Abstração: ";
      if( $("#language-abstraction").val() != "outro" ) { output += $("#language-abstraction").val() + ";\n"; }
      else { output += $("#language-abstraction-other").val() + ";\n" }
      // Sensopercepção
      output += ".  3. Sensopercepção\n";
      output += ".    3a. Alucinações Visuais: ";
      if( $("#hallucinations-visual").val() != "ausentes" ) { output += "presentes e se manifestando por " + $("#hallucinations-visual-desc").val() + ";\n"; }
      else { output += "ausentes;\n" }
      output += ".    3b. Alucinações Auditivas: ";
      if( $("#hallucinations-hearing").val() != "ausentes" ) { output += "presentes e se manifestando por " + $("#hallucinations-hearing-desc").val() + ";\n"; }
      else { output += "ausentes;\n" }
      output += ".    3c. Alucinações Tácteis: ";
      if( $("#hallucinations-tactile").val() != "ausentes" ) { output += "presentes e se manifestando por " + $("#hallucinations-tactile-desc").val() + ";\n"; }
      else { output += "ausentes;\n" }
      // Afeto e Humor
      output += ".  4. Afeto e Humor\n";
      output += ".    4a. Tonalidade: ";
      if( $("#mood-tone").val() != "outro" ) { output += $("#mood-tone").val() + ";\n"; }
      else { output += $("#mood-tone-other").val() + ";\n" }
      output += ".    4b. Modulação: ";
      if( $("#mood-modulation").val() != "outro" ) { output += $("#mood-modulation").val() + ";\n"; }
      else { output += $("#mood-modulation-other").val() + ";\n" }
      output += ".    4c. Ressonância: ";
      if( $("#mood-resonance").val() != "outro" ) { output += $("#mood-resonance").val() + ";\n"; }
      else { output += $("#mood-resonance-other").val() + ";\n" }
      output += ".    4d. Associação Pensamento-Afeto: ";
      if( $("#mood-moodthought").val() != "outro" ) { output += $("#mood-moodthought").val() + ";\n"; }
      else { output += $("#mood-moodthought-other").val() + ";\n" }
      // Atenção e Concentração
      output += ".  5. Atenção e Concentração\n";
      output += ".    5a. Atenção Espontânea: ";
      if( $("#attention-spontaneous").val() != "outro" ) { output += $("#attention-spontaneous").val() + ";\n"; }
      else { output += $("#attention-spontaneous-other").val() + ";\n" }
      output += ".    5b. Atenção Focada: ";
      if( $("#attention-focused").val() != "outro" ) { output += $("#attention-focused").val() + ";\n"; }
      else { output += $("#attention-focused-other").val() + ";\n" }
      output += ".    5c. Atenção Sustentada: ";
      if( $("#attention-sustained").val() != "outro" ) { output += $("#attention-sustained").val() + ";\n"; }
      else { output += $("#attention-sustained-other").val() + ";\n" }
      output += ".    5d. Atenção Seletiva: ";
      if( $("#attention-selective").val() != "outro" ) { output += $("#attention-selective").val() + ";\n"; }
      else { output += $("#attention-selective-other").val() + ";\n" }
      output += ".    5e. Atenção Alternante: ";
      if( $("#attention-alternating").val() != "outro" ) { output += $("#attention-alternating").val() + ";\n"; }
      else { output += $("#attention-alternating-other").val() + ";\n" }
      output += ".    5f. Atenção Dividida: ";
      if( $("#attention-divided").val() != "outro" ) { output += $("#attention-divided").val() + ";\n"; }
      else { output += $("#attention-divided-other").val() + ";\n" }
      // Memória
      output += ".  6. Memória: ";
      switch ( $("#memory").val() ) {
        case "testada com Mini Exame do Estado Mental resultando em ":
          output += $("#memory").val() + $("#memory-minimental-grade").val() + "/" + $("#memory-minimental-aim").val();
          break;
        case "outro":
          output += $("#memory-other").val();
          break;
        default:
          output += $("#memory").val();
      }
      output += ";\n";
      // Orientação
      output += ".  7. Orientação\n";
      output += ".    7a. Tempo: ";
      if( $("#orientation-time").val() != "outro" ) { output += $("#orientation-time").val() + ";\n"; }
      else { output += $("#orientation-time-other").val() + ";\n" }
      output += ".    7b. Espaço: ";
      if( $("#orientation-space").val() != "outro" ) { output += $("#orientation-space").val() + ";\n"; }
      else { output += $("#orientation-space-other").val() + ";\n" }
      // Consciência
      output += ".  8. Consciência: ";
      if( $("#conscience").val() != "outro" ) { output += $("#conscience").val() + ";\n"; }
      else { output += $("#conscience-other").val() + ";\n" }
      // Inteligência
      output += ".  9. Inteligência: ";
      if( $("#intelligence").val() != "outro" ) { output += $("#intelligence").val() + ";\n"; }
      else { output += $("#intelligence-other").val() + ";\n" }
      // Crítica
      output += ".  10. Crítica: ";
      if( $("#critic").val() != "outro" ) { output += $("#critic").val() + "."; }
      else { output += $("#critic-other").val() + "." }

      // Riscos
      output += "\n\n# Riscos\n"
      output += ".  1. Autoagressão: ";
      if( $("#risks-self").val() != "outro" ) { output += $("#risks-self").val() + ";\n"; }
      else { output += $("#risks-self-other").val() + ";\n" }
      output += ".  2. Heteroagressão: ";
      if( $("#risks-other").val() != "outro" ) { output += $("#risks-other").val() + "."; }
      else { output += $("#risks-other-other").val() + "." }

      $("#output-o").val(output);
    }
  });
  // / Build output
});

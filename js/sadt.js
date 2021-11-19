$( document ).ready(function() {
  console.log("App ready!");

  $("#pront").on("input", function() {
    if( $("#pront").val() != "" ) {
      $(".print-pront").html( $("#pront").val() );
    } else {
      $(".print-pront").html( "&nbsp;" );
    }
  });
  $("#name").on("input", function() {
    if( $("#name").val() != "" ) {
      $(".print-name").html( $("#name").val() );
    } else {
      $(".print-name").html( "&nbsp;" );
    }
  });
  $("#dx").on("input", function() {
    if( $("#dx").val() != "" ) {
      $(".print-dx").html( $("#dx").val() );
    } else {
      $(".print-dx").html( "&nbsp;" );
    }
  });
  $("#birth").on("input", function() {
    if( $("#birth").val() != "" ) {
      $(".print-birth").html( $("#birth").val() );
    } else {
      $(".print-birth").html( "&nbsp;" );
    }
  });
  $("#urgent").on("change", function() {
    if( $("#urgent").is(":checked") ) {
      $(".print-urgent").css("display", "block");
    } else {
      $(".print-urgent").css("display", "none");
    }
  });

  $("#lab1-1").on("input", function() {
    if( $("#lab1-1").val() != "" ) {
      $(".print-lab1-1").html( $("#lab1-1").val() );
    } else {
      $(".print-lab1-1").html( "&nbsp;" );
    }
  });
  $("#lab1-2").on("input", function() {
    if( $("#lab1-2").val() != "" ) {
      $(".print-lab1-2").html( $("#lab1-2").val() );
    } else {
      $(".print-lab1-2").html( "&nbsp;" );
    }
  });
  $("#lab1-3").on("input", function() {
    if( $("#lab1-3").val() != "" ) {
      $(".print-lab1-3").html( $("#lab1-3").val() );
    } else {
      $(".print-lab1-3").html( "&nbsp;" );
    }
  });
  $("#lab2-1").on("input", function() {
    if( $("#lab2-1").val() != "" ) {
      $(".print-lab2-1").html( $("#lab2-1").val() );
    } else {
      $(".print-lab2-1").html( "&nbsp;" );
    }
  });
  $("#lab2-2").on("input", function() {
    if( $("#lab2-2").val() != "" ) {
      $(".print-lab2-2").html( $("#lab2-2").val() );
    } else {
      $(".print-lab2-2").html( "&nbsp;" );
    }
  });
  $("#lab2-3").on("input", function() {
    if( $("#lab2-3").val() != "" ) {
      $(".print-lab2-3").html( $("#lab2-3").val() );
    } else {
      $(".print-lab2-3").html( "&nbsp;" );
    }
  });

  // Set presets
  $("#presets").on("change", function() {
    if( $("#presets option:selected").val() != "" ) {
      var dx = "Rastreamento";
      var s11 = "&nbsp;";
      var s12 = "&nbsp;";
      var s13 = "&nbsp;";
      var s21 = "&nbsp;";
      var s22 = "&nbsp;";
      var s23 = "&nbsp;";

      switch ( $("#presets option:selected").val() ) {
        case "screening1":
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV)";
          break;
        case "screening2":
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre,";
          s12 = "Pesquisa de Sangue Oculto nas Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV)";
          break;
        case "has1":
          dx = "Hipertensão / Diabete";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia,";
          s12 = "Creatinina, Sódio, Potássio, TSH, T4 Livre, Microalbuminúria em Amostra Isolada";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV)";
          break;
        case "has2":
          dx = "Hipertensão / Diabete";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia,";
          s12 = "Creatinina, Sódio, Potássio, TSH, T4 Livre, Microalbuminúria em Amostra Isolada,";
          s13 = "Pesquisa de Sangue Oculto nas Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV)";
          break;
        case "ckd":
          dx = "Insuficiência Renal Crônica";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia,";
          s12 = "Creatinina, Sódio, Potássio, Cálcio Total, Fósfoto, TSH, T4 Livre, PTH, Albuminúria de";
          s13 = "24h, Hemograma Completo, Ferro, Ferritina, Reticulócitos, Proteínas Total e Frações";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV)";
          break;
        case "preg1nurse":
          dx = "Gestante";
          s11 = "Glicemia, Eritrograma (Hemoglobina + Hematócrito), Tipagem Sanguínea AB0, Tipagem";
          s12 = "Sanguínea Rh, Urina Tipo 1, Urocultura, Protoparasitológico de Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV), Sorologia para Toxoplasmose (IgM e IgG)";
          break;
        case "preg1med":
          dx = "Gestante";
          s11 = "Glicemia, TSH, T4 Livre, Eritrograma (Hemoglobina + Hematócrito), Tipagem Sanguínea AB0,";
          s12 = "Tipagem Sanguínea Rh, Urina Tipo 1, Urocultura, Protoparasitológico de Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV), Sorologia para Toxoplasmose (IgM e IgG)";
          break;
        case "preg23nurse":
          dx = "Gestante";
          s11 = "Glicemia, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis";
          break;
        case "preg23nursetoxo":
          dx = "Gestante";
          s11 = "Glicemia, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Toxoplasmose (IgM e IgG)";
          break;
        case "preg23med":
          dx = "Gestante";
          s11 = "Glicemia, TSH, T4 Livre, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis";
          break;
        case "preg23medtoxo":
          dx = "Gestante";
          s11 = "Glicemia, TSH, T4 Livre, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Toxoplasmose (IgM e IgG)";
          break;
        case "preg2428":
          dx = "Gestante";
          s11 = "Teste Oral de Tolerância a 75g de Glicose, dosagens de jejum (0min), 60min e 120min";
          s21 = "Ultrassonografia Obstétrica";
          break;
        case "pegb":
          dx = "Gestante";
          s11 = "Pesquisa de Estreptococo Grupo B por swab de secreções vaginal e retal";
          break;
        case "tb":
          dx = "Tuberculose";
          s11 = "Glicemia, Hemoglobina Glicada, Ureia, Creatinina, Sódio, Potássio, TGO, TGP, Bilirrubinas";
          s12 = "Total e Frações";
          s21 = "Radiografia de Tórax Póstero-Anterior E PERFIL";
          break;
        case "infert_f1":
          dx = "Infertilidade Feminina?";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre,";
          s12 = "FSH, LH, Prolactina, Testosteronas Total e Livre, 17-OH-Progesterona, Sulfato de";
          s13 = "Dihidroepiandrosterona (DHEAS)";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV), Sorologia para Clamídia";
          break;
        case "infert_f2":
          dx = "Infertilidade Feminina?";
          s11 = "Dosagem sérica de Hormônio Anti-Mülleriano";
          s21 = "Ultrassonografia Transvaginal";
          break;
        case "infert_m1":
          dx = "Infertilidade Masculina?";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg),";
          s22 = "Sorologia para Hepatite C (Anti-HCV), Sorologia para Clamídia";
          break;
        case "infert_m2":
          dx = "Infertilidade Masculina?";
          s11 = "Espermograma";
          s21 = "Ultrassonografia Doppler de Testículos (Bilateral)";
          break;
        case "pcos":
          dx = "Síndrome dos Ovários Policísticos?";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre,";
          s12 = "FSH, LH, Prolactina, Testosteronas Total e Livre, 17-OH-Progesterona, Sulfato de";
          s13 = "Dihidroepiandrosterona (DHEAS)";
          s21 = "Ultrassonografia Transvaginal";
          break;
        default:
          s11 = "Três anéis para os Reis Elfos sob este céu";
          s12 = "Sete para os Senhores-Anões em seus rochosos corredores";
          s13 = "Nove para os Homens Mortais, fadados a morrer";
          s21 = "Um para o Senhor Escuro, em seu Escuro Trono / Na Terra de Mordor, onde as Sombras se deitam";
          s22 = "Um Anel para a todos governar, Um Anel para encontrá-los";
          s23 = "Um anel para todos trazer e na escuridão aprisioná-los";
      }

      $("#dx").val( dx );
      $(".print-dx").html( dx );
      if( s11 == "&nbsp;" ) { $("#lab1-1").val( "" ); }
      else { $("#lab1-1").val( s11 ); }
      $(".print-lab1-1").html( s11 );
      if( s12 == "&nbsp;" ) { $("#lab1-2").val( "" ); }
      else { $("#lab1-2").val( s12 ); }
      $(".print-lab1-2").html( s12 );
      if( s13 == "&nbsp;" ) { $("#lab1-3").val( "" ); }
      else { $("#lab1-3").val( s13 ); }
      $(".print-lab1-3").html( s13 );
      if( s21 == "&nbsp;" ) { $("#lab2-1").val( "" ); }
      else { $("#lab2-1").val( s21 ); }
      $(".print-lab2-1").html( s21 );
      if( s22 == "&nbsp;" ) { $("#lab2-2").val( "" ); }
      else { $("#lab2-2").val( s22 ); }
      $(".print-lab2-2").html( s22 );
      if( s23 == "&nbsp;" ) { $("#lab2-3").val( "" ); }
      else { $("#lab2-3").val( s23 ); }
      $(".print-lab2-3").html( s23 );
    }
  });
});

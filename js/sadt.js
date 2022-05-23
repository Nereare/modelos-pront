$( document ).ready(function() {
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function() {
    if ( $(this).is(":checked") ) {
      $(this).parent()
        .addClass("is-warning")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-marked");
    } else {
      $(this).parent()
        .removeClass("is-warning")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-blank-outline");
    }
  });

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
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "screening2":
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre, Pesquisa de Sangue";
          s12 = "Oculto nas Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "has1":
          dx = "Hipertensão / Diabete";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia, Creatinina, Sódio, Potássio,";
          s12 = "TSH, T4 Livre, Microalbuminúria em Amostra Isolada";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "has2":
          dx = "Hipertensão / Diabete";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia, Creatinina, Sódio, Potássio,";
          s12 = "TSH, T4 Livre, Microalbuminúria em Amostra Isolada, Pesquisa de Sangue Oculto nas Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "ckd":
          dx = "Doença Renal Crônica";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, Ureia, Creatinina, Sódio, Potássio,";
          s12 = "Cálcio Total, Fósfoto, TSH, T4 Livre, PTH, Microalbuminúria de 24h, Hemograma Completo, Ferro, Ferritina,";
          s13 = "Transferrina, Capacidade Total de Ligação de Transferrina, Reticulócitos, Proteínas Total e Frações";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "preg1":
          dx = "Gestante";
          s11 = "Glicemia, Hemoglobina Glicada, Eritrograma (Hemoglobina + Hematócrito), Tipagem Sanguínea AB0, Tipagem";
          s12 = "Sanguínea Rh, Pesquisa de Anticorpos Irregulares (ou Coombs Indireto), TSH, T4 Livre, Urina Tipo 1, Urocultura,";
          s13 = "Protoparasitológico de Fezes";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Dosagem de Anti-HBc, Dosagem";
          s22 = "de Anti-HBs, Sorologia para Hepatite C(Anti-HCV), Sorologia para Toxoplasmose (IgM e IgG)";
          break;
        case "preg23":
          dx = "Gestante";
          s11 = "Glicemia, Eritrograma (Hemoglobina + Hematócrito), TSH, T4 Livre, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV)";
          break;
        case "preg23toxo":
          dx = "Gestante";
          s11 = "Glicemia, Eritrograma (Hemoglobina + Hematócrito), TSH, T4 Livre, Urina Tipo 1, Urocultura";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV), Sorologia para Toxoplasmose (IgM e IgG)";
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
        case "tb1":
          dx = "Tuberculose";
          s11 = "Glicemia, Hemoglobina Glicada, Ureia, Creatinina, Sódio, Potássio, TGO, TGP, Bilirrubinas Total e Frações";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Dosagem de Anti-HBc, Dosagem";
          s22 = "de Anti-HBs, Sorologia para Hepatite C(Anti-HCV), Sorologia para Hepatite A (IgM e Total), Sorologia para";
          s23 = "Toxoplasmose (IgM e IgG)";
          break;
        case "tb2":
          dx = "Tuberculose";
          s11 = "Glicemia, Hemoglobina Glicada, Ureia, Creatinina, Sódio, Potássio, TGO, TGP, Bilirrubinas Total e Frações";
          s21 = "Radiografia de Tórax Póstero-Anterior E PERFIL";
          break;
        case "infert_f1":
          dx = "Infertilidade Feminina? (N97.9)";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre, FSH, LH, Prolactina,";
          s12 = "Testosteronas Total e Livre, 17-OH-Progesterona, Sulfato de Dihidroepiandrosterona (DHEAS)";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV), Sorologia para \"Chlamydia trachomatis\"";
          break;
        case "infert_f2":
          dx = "Infertilidade Feminina? (N97.9)";
          s11 = "Dosagem sérica de Hormônio Anti-Mülleriano";
          s21 = "Ultrassonografia Transvaginal";
          break;
        case "infert_m1":
          dx = "Infertilidade Masculina? (N46)";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre";
          s21 = "Sorologia para HIV 1/2, Sorologia para Sífilis, Sorologia para Hepatite B (HBsAg), Sorologia para Hepatite C";
          s22 = "(Anti-HCV), Sorologia para \"Chlamydia trachomatis\"";
          break;
        case "infert_m2":
          dx = "Infertilidade Masculina? (N46)";
          s11 = "Espermograma";
          s21 = "Ultrassonografia Doppler de Testículos (Bilateral)";
          break;
        case "pcos":
          dx = "Síndrome dos Ovários Policísticos? (E28.2)";
          s11 = "Glicemia, Hemoglobina Glicada, Colesterol Total, HDL, LDL, Triglicérides, TSH, T4 Livre, FSH, LH, Prolactina,";
          s12 = "Testosteronas Total e Livre, 17-OH-Progesterona, Sulfato de Dihidroepiandrosterona (DHEAS)";
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

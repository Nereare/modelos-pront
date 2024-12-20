$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function() {
    if ( $(this).is(":checked") ) {
      $(this).parent()
        .addClass("is-primary")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-marked");
    } else {
      $(this).parent()
        .removeClass("is-primary")
        .find(".mdi")
          .removeClass("mdi-checkbox-blank-outline mdi-checkbox-marked")
          .addClass("mdi-checkbox-blank-outline");
    }
  });

  // Set companion information
  $("#companion").on("change", function() {
    if ( $(this).is(":checked") ) {
      $("#companion-name, #companion-relation, #companion-func, #companion-font").prop("disabled", false);
    } else {
      $("#companion-name, #companion-relation, #companion-func, #companion-font").prop("disabled", true);
    }
  });

  // Select evaluation type
  // Select first evaluation
  $("#time-first").on("click", function() {
    if ( !$(this).hasClass("is-active") ) {
      // Remove reevaluation active statuses
      $("#time-reeval").removeClass("is-active");
      $(".eval-reeval").addClass("is-hidden");
      // Add first evaluation active statuses
      $(this).addClass("is-active");
      $(".eval-first").removeClass("is-hidden");
      $("#time-current").val("first");
    }
  });
  // Select reevaluation
  $("#time-reeval").on("click", function() {
    if ( !$(this).hasClass("is-active") ) {
      // Remove reevaluation active statuses
      $("#time-first").removeClass("is-active");
      $(".eval-first").addClass("is-hidden");
      // Add first evaluation active statuses
      $(this).addClass("is-active");
      $(".eval-reeval").removeClass("is-hidden");
      $("#time-current").val("reeval");
    }
  });
  // Select reevaluation type
  $("#evol").on("change", function() {
    if ( $(this).val() == "resolução completa dos sintomas" ) {
      $("#reeval-symps").addClass("is-hidden");
      $("#reeval-symps-title").html("");
    } else {
      $("#reeval-symps").removeClass("is-hidden");
      if ( $(this).val() == "melhora dos sintomas, mantendo: " ) { $("#reeval-symps-title").html("Mantém"); }
      else { $("#reeval-symps-title").html("Pioraram"); }
    }
  });

  // Select cough descriptors
  $("#symp-cough").on("change", function() {
    if ( $(this).is(":checked") ) { $("#cough-desc, #cough-prev, #cough-other, #cough-start").prop("disabled", false); }
    else {
      $("#cough-desc, #cough-prev, #cough-other, #cough-start").prop("disabled", true);
      $("#cough-prev").val("").trigger("change");
    }
  });
  $("#cough-prev").on("change", function() {
    if ( $(this).val() != "" ) { $("#cough-diff").prop("disabled", false); }
    else { $("#cough-diff").prop("disabled", true); }
  });
  // Select fever descriptors
  $("#symp-fever").on("change", function() {
    if ( $(this).is(":checked") ) { $("#fever-measure, #fever-freq, #fever-other, #fever-start").prop("disabled", false); }
    else {
      $("#fever-measure, #fever-freq, #fever-other, #fever-start").prop("disabled", true);
      $("#fever-measure").val("não aferida").trigger("change");
    }
  });
  $("#fever-measure").on("change", function() {
    if ( $(this).val() == "aferida, de até " ) { $("#fever-max").prop("disabled", false); }
    else { $("#fever-max").prop("disabled", true).val(""); }
  });

  // Set symptoms' day notice
  $("#symp-start").on("change", function() {
    if ( $(this).val() != "" ) {
      var days = deltaDays( $(this).val() );
      $("#day").html( days );
    }
  });

  // Set first day dynamically
  $("#cough-start, #fever-start").on("change", function() {
    let raw_cough = $("#cough-start").val();
    let cough = raw_cough == "" ? null : new Date(raw_cough + "T00:00:00-0300");
    let raw_fever = $("#fever-start").val();
    let fever = raw_fever == "" ? null : new Date(raw_fever + "T00:00:00-0300");

    if (cough != null && fever != null) {
      if (cough < fever) {
        $("#symp-start").val(raw_cough);
      } else {
        $("#symp-start").val(raw_fever);
      }
    } else if (cough != null) {
      $("#symp-start").val(raw_cough);
    } else if (fever != null) {
      $("#symp-start").val(raw_fever);
    }

    $("#symp-start").trigger("change");
  });

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
  // Enable specific profession descrition
  $("#work-special").on("change", function() {
    if ( $(this).val() != "" ) {
      $("#work-special-function")
        .prop("disabled", false)
        .focus();
    } else {
      $("#work-special-function")
        .prop("disabled", true)
        .val("");
    }
  });

  // Change febrile state when fever is input
  $("#ssvv-temp").on("input change", function() {
    var temp = parseFloat( $("#ssvv-temp").val() );
    if( temp >= 37.8 ) { $("#fever-yes").prop("checked", true); }
    else if ( temp <= 34 ) { $("#fever-hypo").prop("checked", true); }
    else { $("#fever-none").prop("checked", true); }
  });
  // Enable abnormal breathing description:
  $("input[name='breathe']").on("change", function() {
    if( $("input[name='breathe']:checked").val() == "dispneice" ) {
      $("#breathe-abnormal-desc").prop("disabled", false);
    } else {
      $("#breathe-abnormal-desc")
        .prop("disabled", true)
        .val("");
    }
  });
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
  // Enable crepitation description:
  $("#lung-sounds").on("change", function() {
    if(
      $("#lung-sounds").val() == "com crepitação estertorante em " ||
      $("#lung-sounds").val() == "com sopro cavernoso em "
    ) {
      $("#lung-crept").prop("disabled", false);
    } else {
      $("#lung-crept")
        .prop("disabled", true)
        .val("base direita");
    }
  });
  // Enable heart murmur description:
  $("#heart-murmur").on("change", function() {
    if( $("#heart-murmur option:selected").val() == "com sopro" ) {
      $("#heart-murmur-desc").prop("disabled", false);
    }
    else {
      $("#heart-murmur-desc")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable percussion mass description:
  $("#abdomen-percussion").on("change", function() {
    if( $("#abdomen-percussion").val() == "com macicez percutível em " ) {
      $("#abdomen-percussion-mass").prop("disabled", false);
    } else {
      $("#abdomen-percussion-mass")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable Skoda description:
  $("#abdomen-skoda").on("change", function() {
    if( $("#abdomen-skoda").val() == "presente a " ) {
      $("#abdomen-skoda-cm").prop("disabled", false);
    } else {
      $("#abdomen-skoda-cm")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable mass description:
  $("#abdomen-stuff").on("change", function() {
    if( $("#abdomen-stuff").val() == "com " ) {
      $("#abdomen-stuff-desc").prop("disabled", false);
    } else {
      $("#abdomen-stuff-desc")
        .prop("disabled", true)
        .val("");
    }
  });
  // Enable/Disable skin description
  $("#skin").on("input change", function() {
    if ( $("#skin").val() != "" ) {
      $("#exam-skin").prop("checked", true);
    } else {
      $("#exam-skin").prop("checked", false);
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
  });
  // Disable MMII pulse descriptors, if absent:
  $("#mmiipulse-strength").on("change", function() {
    if( $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ) { $("#mmiipulse-descriptors").css("display", "none"); }
    else { $("#mmiipulse-descriptors").css("display", "inline-block"); }
  });

  // Show ICD-10 for selected disease
  $("#icd-search").on("change", function() {
    $("#icd-result").val( $(this).val() ).focus().select();
  });

  // Select plan list
  $(".plan-list-button").on("click", function() {
    // Tabs
    $(".plan-list-button").parent().removeClass("is-active");
    $(this).parent().addClass("is-active");
    // Plan Lists
    $("#plan-list-outpatient, #plan-list-inpatient").addClass("is-hidden");
    $("#plan-list-" + $(this).attr("data-target")).removeClass("is-hidden");
  });

  // Select type of output to show
  $("#show-unified, #show-soap").on("click", function() {
    //if ( !$(this).hasClass("is-active") ) {
      $("#show-unified, #show-soap").parent("li").toggleClass("is-active");
      $("#output-unified, #output-soap").toggleClass("is-hidden");
    //}
  });

  // Run
  $("#button-run").on("click", function() {
    if( $("#eval").val() != "" ) {
      var s = "";
      var o = "";
      var p = "";
      $("#output-uni").val("");
      let pronoun = $("#pronouns").val();

      switch( $("#time-current").val() ) {
        case "first": // First evaluation
          s = [];
          // Run companion info
          var companion = get_companion();
          if ( companion ) { s.push( companion ); }
          // Symptoms' listing
          var symps = [];
          var symptomatic = true;
          // Get start date
          var start_date = new Date( $("#symp-start").val() + "T00:00:00.000-03:00" );
          // Cough
          if ( $("#symp-cough").is(":checked") ) {
            var cough = "tosse ";
            var cough_start = start_date;
            if ($("#cough-start").val()) {
              cough_start = new Date( $("#cough-start").val() + "T00:00:00.000-03:00" );
            }
            cough += $("#cough-desc").val();
            if ( $("#cough-prev").val() != "" ) {
              cough += " (com tosse prévia " + $("#cough-prev").val() + ", e agora " + $("#cough-diff").val() + ")";
            }
            if (cough_start > start_date) {
              cough += $("#cough-other").val() + " desde ";
              cough += cough_start.toLocaleDateString("pt-BR");
            }

            symps.push(cough);
          }
          // Fever
          if ( $("#symp-fever").is(":checked") ) {
            var fever = "febre ";
            var fever_start = start_date;
            if ($("#fever-start").val()) {
              fever_start = new Date( $("#fever-start").val() + "T00:00:00.000-03:00" );
            }
            fever += $("#fever-measure").val();
            if ( $("#fever-measure").val() == "aferida, de até " ) {
              fever += $("#fever-max").val() + "°C";
            }
            fever += ", " + $("#fever-freq").val() + $("#fever-other").val();
            if ( $("#fever-freq").val() == "com pico único" ) { fever += " em " + fever_start.toLocaleDateString("pt-BR"); }
            else {
              if (fever_start > start_date) {
                fever += " desde " + fever_start.toLocaleDateString("pt-BR");
              }
            }

            symps.push(fever);
          }
          $.each($("input[name='symps-key']:checked"), function(){ symps.push( $(this).val() ); });
          $.each($("input[name='symps-other']:checked"), function(){ symps.push( $(this).val() ); });
          if( symps.length == 0 ) { symps = "assintomático"; symptomatic = false; }
          else { symps = "com: " + humanList( symps ); }
          s.push( "Paciente procura atendimento referindo estar " + symps + "." );
          if( !$("#symp-fever").is(":checked") && !$("#symp-key-9").is(":checked") ) {
            s.push( "Paciente nega, em todo o período: dispneia, febre e equivalentes febris." );
          }
          if( $("#symp-misc").val().trim() != "" ) { s.push( $("#symp-misc").val().trim() ); }

          if( $("#fear-contact").is(":checked") ) { s.push( "Paciente conta ter tido contato com alguém que testou positivo." ); }
          if( $("#fear-fear").is(":checked") ) { s.push( "Paciente conta estar com medo de estar com COVID." ); }

          if( symptomatic ) {
            // Symptoms' start and duration
            var start_date = new Date( $("#symp-start").val() + "T00:00:00.000-03:00" );
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var start = "Refere que sintomas iniciaram " + start_date.toLocaleDateString("pt-BR", options) + ".";
            s.push( start );

            // Comorbidities' and Alergies list
            var comorb = [];
            $.each($("input[name='comorbidities']:checked"), function(){ comorb.push( $(this).val() ); });
            if ( $("#comorb-other").val() != "" ) {
              var cc = $("#comorb-other").val().split(",")
              cc = cc.filter(el => {
                return el != null && el != "";
              });
              $.each(cc, function(i, v){ comorb.push( v.trim() ); });
            }
            comorb = humanList( comorb );
            if( comorb == "" ) { comorb = "# AP: nega comorbidades conhecidas."; }
            else { comorb = "# AP: " + comorb + "."; }
            var allergies = "# Nega alergias medicamentosas conhecidas.";
            if( $("#allergy-yes").is(":checked") ) {
              var allergies = $("#allergy-drug").val().split(",");
              allergies = allergies.map(s => s.trim());
              allergies = "# Refere " + (allergies.length > 1 ? "alergias medicamentosas conhecidas" : "alergia medicamentosa conhecida") + " apenas a " + humanList(allergies) + ".";
            }
            s.push( comorb + "\n" + allergies );

            // Pregnancy
            if( $("#pregnancy").is(":checked") ) {
              var preg = "";
              preg = "# Refere estar gestante de " + $("#preg-w").val() + "+" + $("#preg-d").val() + " sem."
              s.push( preg );
            }

            // Vaccines
            var vax = ["# Vacinas:"];
            if( $("#vax-covid").val() != "" ) {
              if ( $("#vax-covid").val() == "0" ) { vax.push( "- Covid-19: NEGA." ); }
              else {
                var covid_doses = parseInt($("#vax-covid").val());
                vax.push( "- Covid-19: " + covid_doses + " dose" + (covid_doses > 1 ? "s" : "") + "." );
              }
            }
            if( $("#vax-influenza").val() != "" ) {
              if ( $("#vax-influenza").val() == "0" ) { vax.push( "- Influenza: NEGA." ); }
              else { vax.push( "- Influenza: última dose em " + $("#vax-influenza").val() + "." ); }
            }
            if( $("#vax-pneumo23").val() != "" ) {
              if ( $("#vax-pneumo23").val() == "0" ) { vax.push( "- Pneumo-23: NEGA." ); }
              else { vax.push( "- Pneumo-23: última dose em " + $("#vax-pneumo23").val() + "." ); }
            }
            if( $("#vax-pneumo13").val() != "" ) {
              if ( $("#vax-pneumo13").val() == "0" ) { vax.push( "- Pneumo-13: NEGA." ); }
              else { vax.push( "- Pneumo-13: última dose em " + $("#vax-pneumo13").val() + "." ); }
            }
            if ( vax.join("\n") != "# Vacinas:" ) { s.push( vax.join("\n") ); }


            // Work status
            if ($("#work").val() != "") {
              var work = "# Trabalho: " + $("#work").val();
              if( $("#work-special").val() != "" ) {
                work += " (" + $("#work-special").val();
                if ( $("#work-special-function").val() != "" ) { work += " como " + $("#work-special-function").val() + ")"; }
                else { work += ")"; }
              }
              work += ".";
              s.push(work.replaceAll("[[PRONOUN]]", pronoun));
            }
            if ($("#family").val() != "") {
              var family = "# Residência: " + $("#family").val() + ".";
              s.push( family.replaceAll("[[PRONOUN]]", pronoun) );
            }
          }

          // Concatenate S
          s = s.join("\n");
          break;
        case "reeval": // Reevaluation
          s = [];
          // Run companion info
          var companion = get_companion();
          if ( companion ) { s.push( companion ); }
          // Symptom evolution
          var evol = $("#evol").val();
          if( evol != "resolução completa dos sintomas" ) {
            var still = [];
            $.each($("input[name='symps-keeping']:checked"), function(){ still.push( $(this).val() ); });
            evol += humanList( still );
          }
          s.push( "Paciente busca atendimento para reavaliação. Desde início do quadro, refere " + evol + "." );

          // Symptoms' start and duration
          var start_date = new Date( $("#symp-start").val() + "T00:00:00.000-03:00" );
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          var start = "Refere que sintomas iniciaram " + start_date.toLocaleDateString("pt-BR", options) + ".";
          s.push( start );

          // Work status
          var work = "";
          if( $("#work").val() != "" ) {
            work = "Paciente " + $("#work").val();
            if( $("#work-special").val() != "" ) {
              work += " (" + $("#work-special").val();
              if ( $("#work-special-function").val() != "" ) { work += " como " + $("#work-special-function").val() + ")"; }
              else { work += ")"; }
            }
            work += ".";
          }
          if( $("#family").val() != "" ) { work += "Refere também morar " + $("#family").val() + "."; }
          if( work != "" ) { s.push( work.replaceAll("[[PRONOUN]]", pronoun) ); }

          // Concatenate S
          s = s.join("\n");
          break;
        default:
          s = "Gente, como você veio parar aqui?!";
      }
      o = runO().join("\n");
      // Get plans
      p = runP();
      // Enumerate plans
      p = $.map(p, function (e, i) { return (i + 1) + ". " + e; });
      // Then join them
      p = p.join(";\n") + ".";
      $("#output-s").val(s);
      $("#output-o").val(o);
      $("#output-p").val(p);

      a = $("#dx-final").val().trim();
      if ( a == "" ) { a = $("#icd-search option:selected").html(); }
      if ( a == "Outro..." ) { a = ""; }
      if ( a != "" ) { a = "# HD: " + a + "\n\n"; }

      sr_header = $("#sr-header").val();
      $("#output-uni").val("# " + sr_header + " #\n" + s + "\n\n" + o + "\n\n" + a + "# CD:\n" + p);
    }
  });

  // Familly Leave Button
  $("#make-family-leave").on("click", function() {
    $("#family-leave-form").addClass("is-active"); }
  );
  $("#family-leave-form button.delete").on("click", function() {
    $("#family-leave-form").removeClass("is-active");
  });
  $("#flf-signer").on("change", function() {
    if ( $(this).val() == "other" ) { $("#flf-name-other").prop("disabled", false); }
    else { $("#flf-name-other").prop("disabled", true).val(""); }
  });
  $("#flf-parentage").on("change", function() {
    if ( $(this).val() == "" ) { $("#flf-parentage-other").prop("disabled", false).focus(); }
    else { $("#flf-parentage-other").prop("disabled", true).val(""); }
  });
  $("#flf-run").on("click", function() {
    if( $("#flf-name").val() == "" || $("#flf-days").val() == "" || $("#flf-people").val() == "" ) {
      alert("Informe PELO MENOS nome, dias de afastamento e nome das pessoas a serem afastadas!");
      $("#flf-name, #flf-days, #flf-people")
        .addClass("is-danger")
        .on("change input", function() {
          if ( $(this).val() != "" ) { $(this).removeClass("is-danger"); }
          else { $(this).addClass("is-danger");}
        });
    } else {
      // Name and Third-Party (if appliable)
      var name = $("#flf-name").val().toUpperCase();
      var signature_notice = "";
      if ( $("#flf-signer").val() == "other" ) {
        name += " (com " + $("#flf-name-other").val() + " assinando pelo paciente)"
        signature_notice = "responsável pela ";
      }
      // RG
      var rg = "";
      if( $("#flf-rg").val() == "" ) { rg = "________________"; }
      else {
        rg = $("#flf-rg").val().toUpperCase();
        var match = rg.match(/^(\d{2})(\d{3})(\d{3})([A-Z0-9])$/);
        if (match) { rg = match[1] + "." + match[2] + "." + match[3] + "-" + match[4]; }
      }
      // CPF
      var cpf = "";
      if( $("#flf-cpf").val() == "" ) { rg = "____.____.____-___"; }
      else {
        cpf = $("#flf-cpf").val();
        var match = cpf.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
        if (match) { cpf = match[1] + "." + match[2] + "." + match[3] + "-" + match[4]; }
      }
      // Address
      var address = "";
      if( $("#flf-address").val() == "" ) { address = "__________________________"; }
      else { address = $("#flf-address").val().toUpperCase(); }
      // Shire
      var shire = "";
      if( $("#flf-shire").val() == "" ) { shire = "______________"; }
      else { shire = $("#flf-shire").val().toUpperCase(); }
      // City
      var city = "";
      if( $("#flf-city").val() == "" ) { city = "______________"; }
      else { city = $("#flf-city").val().toUpperCase(); }
      // UF
      var uf = "";
      if( $("#flf-uf").val() == "" ) { uf = "___"; }
      else { uf = $("#flf-uf").val().toUpperCase(); }
      // CEP
      var cep = "";
      if( $("#flf-cep").val() == "" ) { cep = "___._____—____"; }
      else {
        cep = $("#flf-cep").val().toUpperCase();
        var match = cep.match(/^(\d{2})(\d{3})(\d{3})$/);
        if (match) { rg = match[1] + "." + match[2] + "-" + match[3]; }
      }
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
      // Physician
      var physician = "que assina abaixo";
      if ( $("#flf-physician").val() != "" && $("#flf-crm").val() != "" && $("#flf-crm-uf").val() != "" ) {
        physician = $("#flf-physician").val() + " (CRM-" + $("#flf-crm-uf").val() +
        " " + $("#flf-crm").val() + "), que assina abaixo,";
      }
      // Type of Isolation
      var type = $("#flf-type").val();
      // Signer
      var signer = $("#flf-name").val();
      var relation = "a própria pessoa";
      if ( $("#flf-signer").val() == "other" ) {
        signer = $("#flf-name-other").val();
        relation = $("#flf-parentage").val();
        if ( relation == "" ) { relation = $("#flf-parentage-other").val(); }
        if ( relation == "" ) { relation = "outro"; }
      }
      var relation_title = ($("#flf-signer").val() == "other") ? "RESPONSÁVEL" : "PACIENTE";
      // Output
      $("#output-flf-454").val(
        "Afastamento de Familiares\nTERMO DE DECLARAÇÃO\n\nEu, " + name +
        ", RG nº " + rg +
        ", CPF nº " + cpf +
        ", residente e domiciliado na " + address +
        ", Bairro " + shire +
        ", CEP " + cep +
        ", na cidade de " + city +
        ", Estado " + uf +
        ", declaro que fui devidamente informado(a) pelo médico(a) " + physician +
        " sobre a necessidade de isolamento a que devo ser submetido(a), " +
        "bem como as pessoas que residem no mesmo endereço ou dos trabalhadores " +
        "domésticos que exercem atividades no âmbito residencial, com " +
        "data de início em " + flf_start.toLocaleDateString("pt-BR") +
        " e previsão de término em " + flf_end.toLocaleDateString("pt-BR") +
        ", local de cumprimento da medida domiciliar.\n" +
        "Nome das pessoas que residem no mesmo endereço que deverão cumprir " +
        "medida de isolamento domiciliar:\n" + flf_people.join("\n") +
        "\nAssinatura da " + signature_notice + "pessoa sintomática: ______________________________\n\n" +
        "PORTARIA Nº 454, MINISTÉRIO DA SAÚDE, DE 20 DE MARÇO DE 2020."
      );
      if ( physician == "que assina abaixo" ) { physician = "_______________________________ CRM _____________"; }
      else { physician = physician.replace(", que assina abaixo,", ""); }
      $("#output-flf-356").val(
        "TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO\n\nEu, " + name +
        ", RG nº " + rg +
        ", CPF nº " + cpf +
        ", declaro que fui devidamente informado(a) pelo médico(a) " + physician +
        " sobre a necessidade de " + type +
        " a que devo ser submetido, com data de início " + flf_start.toLocaleDateString("pt-BR") +
        " e previsão de término em " + flf_end.toLocaleDateString("pt-BR") +
        ", local de cumprimento da medida domiciliar, bem como as possíveis " +
        "consequências da sua não realização.\n\n" +
        relation_title + "\n" +
        "Nome: " + signer + " | Grau de Parentesco: " + relation + "\n" +
        "Assinatura: ___________________________________________\n" +
        "Data: " + flf_start.toLocaleDateString("pt-BR") +
        "\n\nDEVE SER PREENCHIDO PELA(O) MÉDICA(O)\n" +
        "Expliquei o funcionamento da medida de saúde pública a que o paciente " +
        "acima referido está sujeito, ao próprio paciente e/ou seu responsável, " +
        "sobre riscos do não atendimento da medida, tendo respondido às " +
        "perguntas formuladas por este(s). De acordo com o meu entendimento, " +
        "o paciente e/ou seu responsável, está em condições de compreender o " +
        "que lhe(s) foi informado. Deverão ser seguidas as seguintes orientações:\n" +
        "1. Uso contínuo de máscaras adequadas, bem ajustadas ao rosto, cobrindo " +
        "do nariz ao queixo. Recomenda-se a utilização de máscaras cirúrgicas " +
        "ou as do tipo N95/PFF-2;\n" +
        "2. Lavagem frequente das mãos preferencialmente com água e sabão ou, " +
        "na impossibilidade deste, higienização com álcool 70%;\n" +
        "3. Uso de luvas (cirúrgicas, descartáveis ou outras quaisquer) NÃO " +
        "substituem higienização das mãos;\n" +
        "4. Evitar aglomerações;\n" +
        "5. Sempre que possível, manter ventilação natural, com portas e janelas " +
        "abertas. Caso o uso de aparelhos de ar condicionado seja necessário, " +
        "não utilizar aparelhos que funcionem com recirculação do ar;\n" +
        "6. Em salas de aula, laboratórios, bibliotecas, restaurantes, lojas, " +
        "shopping centers e outros locais públicos recomenda-se, quando possível, " +
        "manter distanciamento mínimo entre de 1 metro;\n" +
        "7. Pessoas com sintomas sugestivos de infecção respiratória devem " +
        "buscar autotestagem para COVID-19 ou, na impossibilidade deste, " +
        "atendimento médico, o mais breve possível;\n" +
        "8. Não compartilhar items de uso individual, como talheres, copos, " +
        "pratos, garrafas, toalhas e afins;\n" +
        "9. Quando tossir ou espirrar, mesmo durante uso de máscaras quaisquer, " +
        "cobrir rosto com face interna do cotovelo. Higienizar as mãos " +
        "imediatamente após; e\n" +
        "10. Evitar tocar rosto, olhos, nariz e boca. Quando for necessário, " +
        "higienizar a mão ANTES E DEPOIS de fazê-lo.\n\n" +
        "Nome da(o) médica(o): " + physician + "\n\n" +
        "Assinatura ___________________________________________\n" +
        "PORTARIA Nº 356, MINISTÉRIO DA SAÚDE, DE 11 DE MARÇO DE 2020."
      );
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

function get_companion() {
  var pronoun = $("#pronouns").val();
  var comp = "";
  if ( $("#companion").is(":checked") ) {
    comp = "# Vem ao PS " + $("#companion-func").val() + " por " + $("#companion-name").val();
    if ( $("#companion-relation").val() != "" ) { comp += " (" + $("#companion-relation").val() + ")"; }
    comp += ".\n# Fonte: " + $("#companion-font").val() + "."
  }
  return comp.replaceAll("[[PRONOUN]]", pronoun);
}

function runO() {
  var o = ["# EF"];
  o.push( "Paciente em " + $("#status").val() + "EG." );

  var pronoun = $("#pronouns").val();

  var qualitative_exam = [];
  if( $('input[name="color"]:checked').val() == "Corade" ) {
    qualitative_exam.push("Corad" + pronoun);
  } else {
    qualitative_exam.push("Descorad" + pronoun + " " + $('input[name="color"]:checked').val() + "+/4+");
  }
  if( $('input[name="hydro"]:checked').val() == "hidratade" ) {
    qualitative_exam.push("hidratad" + pronoun);
  } else {
    qualitative_exam.push("desidratad" + pronoun + " " + $('input[name="hydro"]:checked').val() + "+/4+");
  }
  if( $('input[name="cyanose"]:checked').val() == "acianótice" ) {
    qualitative_exam.push("acianótic" + pronoun);
  } else {
    qualitative_exam.push("cianótic" + pronoun + " " + $('input[name="cyanose"]:checked').val() + "+/4+");
  }
  if( $('input[name="icter"]:checked').val() == "anictérice" ) {
    qualitative_exam.push("anictéric" + pronoun);
  } else {
    qualitative_exam.push("ictéric" + pronoun + " " + $('input[name="icter"]:checked').val() + "+/4+");
  }
  qualitative_exam.push($('input[name="fever"]:checked').val());
  if( $('input[name="breathe"]:checked').val() == "dispneice" ) {
    qualitative_exam.push( $("#breathe-abnormal-desc").val() + "pneic" + pronoun );
  } else {
    let breath = "eupneic" + pronoun;
    if($("#breathe-really-normal").is(":checked")) { breath += " (ausência de quaisquer sinais objetivos de dispneia - sem de uso de musculaturas respiratórias acessórias, sem postura compensatória)"; }
    qualitative_exam.push(breath);
  }
  if ( $("#child-activity").val() != "" ) { qualitative_exam.push( $("#child-activity").val() + pronoun ); }
  if ( $("#child-reactivity").val() != "" ) { qualitative_exam.push( $("#child-reactivity").val() + pronoun ); }
  o.push( humanList(qualitative_exam) + "." );

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
    if( $("#ssvv-temp").val() != "" ) { ssvv.push( "Temp = " + $("#ssvv-temp").val() + "°C (" + $("#ssvv-temp-desc").val() + ")" ); }
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

  if( $("#exam-eye").is(":checked") ) {
    o.push( "Olhos: conjuntiva " + $("#eye-white").val() + ", secreções " + $("#eye-secr").val() + "." );
  }
  if( $("#exam-neck").is(":checked") ) {
    var cerv = ["Cervical:"];
    if( $("#thyroid").val() != "" ) { cerv.push( "Tiroide " + $("#thyroid").val() + "." ); }
    if( $("#lymph").val() != "" ) { cerv.push( $("#lymph").val() + $("#lymph-desc").val() + "." ); }
    o.push( cerv.join(" ") );
  }
  if( $("#exam-lungs").is(":checked") ) {
    var crept = ".";
    if(
      $("#lung-sounds").val() == "com crepitação estertorante em " ||
      $("#lung-sounds").val() == "com redução de murmúrios vesiculares até " ||
      $("#lung-sounds").val() == "com sopro cavernoso em "
    ) { crept = $("#lung-crept").val() + "."; }
    o.push( "Pulm: murmúrios vesiculares " + $("#lung").val() + ", " + $("#lung-sounds").val() + crept );
  }
  if( $("#exam-heart").is(":checked") ) {
    var murmur = $("#heart-murmur").val();
    if( murmur == "com sopro" ) {
      murmur += " " + $("#heart-murmur-desc").val();
    }
    o.push( "Card: bulhas " + $("#heart-rhythm").val() + " e " + $("#heart-sounds").val() + " em " + $("#heart-times").val() + " " + murmur + "." );
  }
  if( $("#exam-abdomen").is(":checked") ) {
    var abd = "Abdome: " + $("#abdomen").val() + ", ruídos hidroaéreos " + $("#abdomen-rha").val() + ", " + $("#abdomen-tension").val() + ", percussão " + $("#abdomen-percussion").val();
    if( $("#abdomen-percussion").val() != "globalmente timpânica" ) {
      abd += $("#abdomen-percussion-mass").val();
    }
    abd += ", espaço de Traube " + $("#abdomen-traube").val() + ", margem inferior de fígado percutível ";
    var hep = parseInt( $("#abdomen-hepatimetry").val() );
    if( hep > 0 ) { abd += Math.abs(hep) + "cm abaixo de rebordo costal direito"; }
    else if ( hep < 0 ) { abd += Math.abs(hep) + "cm acima de rebordo costal direito"; }
    else { abd += "em nível de rebordo costal direito"; }
    if( $("#abdomen-mobilemass").val() != "" ) { abd += ", macicez móvel " + $("#abdomen-mobilemass").val(); }
    if( $("#abdomen-skoda").val() != "" ) {
      abd += ", semicírculo de Skoda " + $("#abdomen-skoda").val();
      if( $("#abdomen-skoda").val() == "presente a " ) { abd += $("#abdomen-skoda-cm").val() + "cm de cicatriz umbilical"; }
    }
    if( $("#abdomen-fillip").val() != "" ) { abd += ", sinal do piparote " + $("#abdomen-fillip").val(); }
    abd += ", " + $("#abdomen-stuff").val();
    if( $("#abdomen-stuff").val() == "com " ) { abd += $("#abdomen-stuff-desc").val(); }
    if( $("#abdomen-peritonitis").val() != "" ) { abd += ", descompressão brusca " + $("#abdomen-peritonitis").val(); }
    abd += ".";
    if( $("#abdomen-other").val() != "" ) { abd += $("#abdomen-other").val(); }

    o.push( abd );
  }
  if( $("#exam-murphy").is(":checked") ) {
    o.push( "Sinal de Murphy " + $("#murphy").val() + "." );
  }
  if( $("#exam-mcburney").is(":checked") ) {
    o.push( "Sinal de McBurney " + $("#mcburney").val() + "." );
  }
  if( $("#exam-giordano").is(":checked") ) {
    o.push( "Giordano " + $("#giordano").val() + "." );
  }
  if( $("#exam-oto").is(":checked") ) {
    o.push( "Otoscopia:\n- OD: membrana timpânica direita " + $("#oto-d-membrane").val() + " " + $("#oto-d-retromembrane").val() + ". Conduto auditivo direito " + $("#oto-d-canal").val() + ".\n- OE: membrana timpânica esquerda " + $("#oto-e-membrane").val() + " " + $("#oto-e-retromembrane").val() + ". Conduto auditivo esquerdo " + $("#oto-e-canal").val() + "." );
  }
  if( $("#exam-oro").is(":checked") ) {
    o.push( "Oroscopia: orofaringe " + $("#exam-oro-pharynx").val() + ", com tonsilas palatinas " + $("#exam-oro-tonsils").val() + " " + $("#exam-oro-tonsilcover").val() + " e palato mole " + $("#exam-oro-palate").val() + "." );
  }
  if( $("#exam-naso").is(":checked") ) {
    o.push( "Nasoscopia anterior: mucosa " + $("#naso-skin").val() + ", cornetos nasais " + $("#naso-shells").val() + " e " + $("#naso-sept").val() + "." );
  }
  if( $("#exam-skin").is(":checked") ) {
    o.push( "Pele: " + $("#skin").val() );
  }
  if( $("#exam-mmii").is(":checked") ) {
    var oedema = $("#oedema").val();
    if( oedema != "sem edemas" ) { oedema += " " + $("#oedema-grade").val(); }
    var pulse = "";
    if( $("#mmiipulse-strength").val() == "ausentes até aa. femorais" ) { pulse = $("#mmiipulse-strength").val(); }
    else { pulse = $("#mmiipulse-strength").val() + " e " + $("#mmiipulse-simmetry").val() + ", palpáveis a partir de aa. " + $("#mmiipulse-artery").val(); }
    o.push( "MMII: " + oedema + ", pulsos " + pulse + "." );
  }

  if (
    $("#exam-covid-date").val() != "" &&
    $("#exam-covid").val() != "" &&
    $("#exam-covid-res").val() != ""
  ) {
    var note = "";
    if ( $("#exam-covid").val() == "Auto-Teste Rápido Nasal para detecção de Antígeno de SARS-CoV-2" ) {
      note = ", resultado referido por paciente";
    }
    var exam_date = new Date( $("#exam-covid-date").val() + "T00:00:00.000-03:00" );
    o.push(
      $("#exam-covid").val() + " (" +
      exam_date.toLocaleDateString("pt-BR") +
      note + ") " +
      $("#exam-covid-res").val() + "."
    );
  }
  if (
    $("#exam-influenza-date").val() != "" &&
    $("#exam-influenza").val() != "" &&
    $("#exam-influenza-res").val() != ""
  ) {
    var exam_date = new Date( $("#exam-influenza-date").val() + "T00:00:00.000-03:00" );
    o.push(
      $("#exam-influenza").val() + " (" +
      exam_date.toLocaleDateString("pt-BR") + ") " +
      $("#exam-influenza-res").val() + "."
    );
  }

  return o;
}

function runP() {
  p = [];

  if (!$("#plan-list-outpatient").hasClass("is-hidden")) {
    // Labs
    if( $("#plan-labcovid").is(":checked") ) { p.push( "Solicito coleta de " + $("#labcovid").val() + " para SARS-CoV-2" + $("#labcovid-refusal").val() ); }
    if( $("#plan-labflu").is(":checked") ) { p.push( "Solicito coleta de " + $("#labflu").val() + " para Influenza A/B" + $("#labflu-refusal").val() ); }
    if( $("#plan-labother").is(":checked") ) { p.push("Solicito " + $("#labother").val()); }
    if ($("#plan-labrefusal").is(":checked") ) { p.push( "Ofereço solicitação de exames para detecção viral, mas paciente recusa" ); }
    // Leaves
    if( $("#plan-leave").is(":checked") ) { p.push( "Atesto paciente para " + $("#leave").val() + " dias" + $("#leave-reason").val() ); }
    if( $("#plan-leaverefuse").is(":checked") ) { p.push("Ofereço afastamento, que paciente recusa"); }
    if( $("#plan-leavehours").is(":checked") ) { p.push($("#leave-leavehours-what").val() + " comprovante de horas"); }
    if( $("#plan-familyleave").is(":checked") ) { p.push( $("#familyleave").val() ); }
    // Prescriptions
    if( $("#plan-symptomatics").is(":checked") ) { p.push( $("#symptomatics").val() ); }
    if( $("#plan-ln").is(":checked") ) { p.push( "Oriento lavagem nasal com soro fisiológico 0,9%" ); }
    if( $("#plan-clenil").is(":checked") ) { p.push( "Prescrevo corticoesteroide nasal para otimização de controle de sintomas respiratórios altos" ); }
    if( $("#plan-syrups").is(":checked") ) { p.push( "Oriento que não existem \"xaropes para tosse\" que sejam superiores a placebo, e, portanto, visando minimizar efeitos colaterais desnecessários, não serão prescritos" ); }
    if( $("#plan-honey").is(":checked") ) { p.push( "Oriento consumo de uma colher de mel, antes de dormir, para melhorar percepção subjetiva da tosse" ); }
    if( $("#plan-tamiflu").is(":checked") ) { p.push( "Prescrevo oseltamivir 12/12h por 05 dias" ); }
    if( $("#plan-atb").is(":checked") ) {
      if ($("#atb").val() == "penicilina G benzatina 1.200.000UI IM em dose única") {
        p.push( "Prescrevo " + $("#atb").val() );
      } else {
        p.push( "Prescrevo " + $("#atb").val() + " por " + $("#atb-days").val() + " dias" );
      }
    }
    if( $("#plan-med1").is(":checked") ) { p.push( "Prescrevo " + $("#med1").val() + " para " + $("#med1-reason").val() ); }
    if( $("#plan-med2").is(":checked") ) { p.push( "Prescrevo " + $("#med2").val() + " para " + $("#med2-reason").val() ); }
    if( $("#plan-med3").is(":checked") ) { p.push( "Prescrevo " + $("#med3").val() + " para " + $("#med3-reason").val() ); }
    // Guidance
    if( $("#plan-warnsigns").is(":checked") ) { p.push( "Oriento sinais de alarme para retorno precoce e reavaliação" ); }
    //if( $("#plan-delusion").is(":checked") ) { p.push( "Oriento ausência de evidências científicas validando o uso de \"tratamento precoce\" para COVID-19 (e.g. dexametasona, ivermectina, azitromicina) em pacientes ambulatoriais, assim como reforço a CONTRAINDICAÇÃO FORMAL de uso de azitromicina em casos de suspeita de infeção por SARS-CoV-2 sem sinais de infecção bacteriana (Choosing Wisely Brasil)" ); }
    if( $("#plan-isolation").is(":checked") ) { p.push( "Oriento sobre medidas de isolamento do caso-índice tanto dentro como fora de casa (uso de máscara durante todo o período, dormir e se manter em cômodo separado, manter casa arejada e ventilada, não compartilhar itens pessoais, de higiene ou de alimentação, etc.), higiene das mãos e medidas de etiqueta respiratória" ); }
    if( $("#plan-quarantine").is(":checked") ) { p.push( "Oriento medidas que as demais pessoas da casa devem tomar para evitar entrar em contato com o caso índice, assim como reforço higiene de mãos e etiqueta respiratória" ); }
    if( $("#plan-trvspcr").is(":checked") ) { p.push("Oriento diferenças de valores preditivos positivo e negativo entre Teste Rápido para Antígeno Nasal e RT-PCR para SARS-CoV-2, e impacto na interpretação diagnóstica dessas diferenças em bioestatística"); }
    // No Criteria
    if( $("#plan-criterianotmet").is(":checked") ) { p.push( "Oriento paciente da ausência de critérios para coleta de exame para investigação de SARS-CoV-2" ); }
    if( $("#plan-whenseek").is(":checked") ) { p.push( "Oriento paciente sobre sinais que sugerem busca de nova avaliação no Sintomáticos Respiratórios" ); }
    if( $("#plan-whenseeker").is(":checked") ) { p.push( "Oriento paciente sobre sinais que sugerem busca de nova avaliação em Pronto Socorro" ); }
    if( $("#plan-er-restrictions").is(":checked") ) { p.push( "Oriento paciente sobre funções de um Pronto Socorro, assim como das retrições e impossibilidades inatas a este contexto de atendimento, as quais incluem (mas não se restringem a) não ser o contexto para exames de rotina, renovação de receitas ambulatoriais ou internação para tentar induzir alguma investigação ou seguimento ambulatorial a \"ir mais rápido\"" ); }
    if( $("#plan-cltonus").is(":checked") ) {
      p.push( "Oriento paciente que, segundo artigo 7.3.1, tópico (b), da Norma Regulamentadora Nº 07, que define e regulamenta o Programa de Controle Médico de Saúde Ocupacional (PCMSO) sob a Consolidação das Leis do Trabalho, é ÔNUS DO EMPREGADOR arcar e custear com exames demandados para SAÚDE OCUPACIONAL" );
      p.push( "Oriento paciente também que, do ponto de vista de medicina ASSISTENCIAL, de que trata seu contato hoje com este serviço de saúde, paciente não preenche critério para coleta de RT-PCR ou Sorologia para SARS-CoV-2, como definido pelo protoco de combate à pandemia de COVID-19 da Secretaria Municipal de Saúde" );
    }
    if( $("#plan-labresults").is(":checked") ) { p.push( "Oriento sobre resultados de " + $("#plan-labresults-desc").val() ); }
    if( $("#plan-labwait").is(":checked") ) { p.push( "Oriento que exame previamente coletado ainda não está pronto" ); }
    // Follow Up
    if( $("#plan-followup").is(":checked") ) { p.push( "Oriento retorno no Sintomáticos Respiratórios em " + $("#followup").val() + " dias para " + $("#followup-reason").val() ); }
    if( $("#plan-whut").is(":checked") ) { p.push("Tiro dúvidas"); }
    if( $("#plan-bai").is(":checked") ) { p.push( "Alta do episódio" ); }
  } else {
    // Exams
    if( $("#plan-in-rx").is(":checked") ) { p.push( "Solicito " + $("#plan-in-rx-which").val() + " agora" ); }
    if( $("#plan-in-labs").is(":checked") ) { p.push( "Solicito exames laboratoriais agora" ); }
    // Meds
    if( $("#plan-in-meds").is(":checked") ) { p.push( "Prescrevo sintomáticos agora" ); }
    if( $("#plan-in-atb").is(":checked") ) { p.push( "Prescrevo " + $("#plan-in-atb-which").val() + " agora" ); }
    if( $("#plan-in-corticosteroids").is(":checked") ) { p.push( "Prescrevo " + $("#plan-in-corticosteroids-which").val() + " agora" ); }
    // Misc
    p.push( "Tiro dúvidas" );
    p.push( "Reaval após" );
  }

  return p;
}

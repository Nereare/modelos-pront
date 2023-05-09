$(function() {
  new ClipboardJS(".copybtn");
  console.log("App ready!");

  // Create checkbox-button functionality
  $(".checkbutton").on("change", function () {
    if ($(this).is(":checked")) {
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

  // Enable eGFR calculation
  $("#egfr-method").on("change", function() {
    if ($(this).val() == "") {
      $("#egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", true);
      $("#egfr-age, #egfr-weight, #egfr-result")
        .val("");
      $("#egfr-sex")
        .val("f");
      $("#egfr-ethnicity")
        .val("true");
      $("#creatinine, #egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight")
        .off();
    } else if ($(this).val() == "ckdepi") {
      $("#egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", false);
      $("#creatinine, #egfr-sex, #egfr-ethnicity, #egfr-age, #egfr-weight")
        .off()
        .on("change input", function () {
          if ($("#egfr-sex").val() != "" &&
            $("#egfr-age").val() != "" &&
            $("#egfr-weight").val() != "" &&
            $("#creatinine").val() != "") {
            let sex = $("#egfr-sex").val();
            let ethnicity = ($("#egfr-ethnicity").val() == "true") ? true : false;
            let age = parseFloat($("#egfr-age").val());
            let weight = parseFloat($("#egfr-weight").val());
            let cr = parseFloat($("#creatinine").val());
            $("#egfr-result").val(getCKD(age, weight, sex, ethnicity, cr));
          }
        })
        .trigger("change");
    } else {
      $("#egfr-sex, #egfr-age, #egfr-weight, #egfr-result")
        .attr("disabled", false);
      $("#creatinine, #egfr-sex, #egfr-age, #egfr-weight")
        .off()
        .on("change input", function () {
          if ($("#egfr-sex").val() != "" &&
            $("#egfr-age").val() != "" &&
            $("#egfr-weight").val() != "" &&
            $("#creatinine").val() != "") {
            let sex = $("#egfr-sex").val();
            let age = parseFloat($("#egfr-age").val());
            let weight = parseFloat($("#egfr-weight").val());
            let cr = parseFloat($("#creatinine").val());
            $("#egfr-result").val(getCockroft(age, weight, sex, cr));
          }
        })
        .trigger("change");
      $("#egfr-ethnicity")
        .attr("disabled", true)
        .val("true");
    }
  });

  // Autocalculate Bilirubin
  $("#bt, #bd, #bi").on("change input", function() {
    let bt = $("#bt").val() != "" ? parseFloat($("#bt").val()) : "";
    let bd = $("#bd").val() != "" ? parseFloat($("#bd").val()) : "";
    let bi = $("#bi").val() != "" ? parseFloat($("#bi").val()) : "";
    if( bt != "" && bd != "" ) { $("#bi").val( (bt - bd).toFixed(2) ); }
    else if( bt != "" && bi != "" ) { $("#bd").val( (bt - bi).toFixed(2) ); }
    else if( bd != "" && bi != "" ) { $("#bt").val( (bd + bi).toFixed(2) ); }
  });
  // Clear Bilirubin
  $("#btf-clear").on("click", function() {
    $("#bt, #bd, #bi").val("");
  });

  // Urinary culture
  $("#uroc").on("change", function() {
    if ( $(this).val() == "PARCIAL POSITIVO para " ) {
      $("#uroc-result")
        .attr("disabled", false);
      $("#uroc-sens, #uroc-resist, #uroc-interm")
        .attr("disabled", true)
        .val("");
    } else if ( $(this).val() == "POSITIVO para " ) {
      $("#uroc-result, #uroc-sens, #uroc-resist, #uroc-interm")
        .attr("disabled", false);
    } else {
      $("#uroc-result, #uroc-sens, #uroc-resist, #uroc-interm")
        .attr("disabled", true)
        .val("");
    }
  });

  // Sum neutrophile percent totals
  $("#hmg-segm-percent, #hmg-bast-percent, #hmg-metamyelocyst-percent, #hmg-myelocyst-percent, #hmg-promyelocyst-percent, #hmg-myeloblast-percent, #hmg-blast-percent").on("change input", function() {
    let total = 0.0;
    total += parseFloat( $("#hmg-segm-percent").val() == "" ? "0.0" : $("#hmg-segm-percent").val() );
    total += parseFloat( $("#hmg-bast-percent").val() == "" ? "0.0" : $("#hmg-bast-percent").val() );
    total += parseFloat( $("#hmg-metamyelocyst-percent").val() == "" ? "0.0" : $("#hmg-metamyelocyst-percent").val() );
    total += parseFloat( $("#hmg-myelocyst-percent").val() == "" ? "0.0" : $("#hmg-myelocyst-percent").val() );
    total += parseFloat( $("#hmg-promyelocyst-percent").val() == "" ? "0.0" : $("#hmg-promyelocyst-percent").val() );
    total += parseFloat( $("#hmg-myeloblast-percent").val() == "" ? "0.0" : $("#hmg-myeloblast-percent").val() );
    total += parseFloat( $("#hmg-blast-percent").val() == "" ? "0.0" : $("#hmg-blast-percent").val() );
    $("#hmg-neutro-percent").val( total );
  });
  // Sum neutrophile absolute totals
  $("#hmg-segm-abs, #hmg-bast-abs, #hmg-metamyelocyst-abs, #hmg-myelocyst-abs, #hmg-promyelocyst-abs, #hmg-myeloblast-abs, #hmg-blast-abs").on("change input", function() {
    let total = 0.0;
    total += parseFloat( $("#hmg-segm-abs").val() == "" ? "0.0" : $("#hmg-segm-abs").val() );
    total += parseFloat( $("#hmg-bast-abs").val() == "" ? "0.0" : $("#hmg-bast-abs").val() );
    total += parseFloat( $("#hmg-metamyelocyst-abs").val() == "" ? "0.0" : $("#hmg-metamyelocyst-abs").val() );
    total += parseFloat( $("#hmg-myelocyst-abs").val() == "" ? "0.0" : $("#hmg-myelocyst-abs").val() );
    total += parseFloat( $("#hmg-promyelocyst-abs").val() == "" ? "0.0" : $("#hmg-promyelocyst-abs").val() );
    total += parseFloat( $("#hmg-myeloblast-abs").val() == "" ? "0.0" : $("#hmg-myeloblast-abs").val() );
    total += parseFloat( $("#hmg-blast-abs").val() == "" ? "0.0" : $("#hmg-blast-abs").val() );
    $("#hmg-neutro-abs").val( total );
  });

  // Light Criteria
  $("#light-serum-prot-total, #light-pleura-prot-total, #light-serum-dhl, #light-serum-dhl-uln, #light-pleura-dhl").on("change input", function() {
    // Parse values
    let prot_total = [];
    prot_total["serum"] = $("#light-serum-prot-total").val().trim() != "" ? parseFloat( $("#light-serum-prot-total").val() ) : "";
    prot_total["pleura"] = $("#light-pleura-prot-total").val().trim() != "" ? parseFloat( $("#light-pleura-prot-total").val() ) : "";
    let dhl = [];
    dhl["serum"] = $("#light-serum-dhl").val().trim() != "" ? parseFloat( $("#light-serum-dhl").val() ) : "";
    dhl["uln"] = $("#light-serum-dhl-uln").val().trim() != "" ? parseFloat( $("#light-serum-dhl-uln").val() ) : "";
    dhl["pleura"] = $("#light-pleura-dhl").val().trim() != "" ? parseFloat( $("#light-pleura-dhl").val() ) : "";
    let criteria = [];
    let criteria_txt = [
      "Sem dados suficientes",
      "razão Proteína Total Sérica/Pleural acima de 0.5",
      "razão DHL Sérico/Pleural acima de 0.6",
      "DHL Pleural acima de 2/3 do LSN sérico"
    ]

    if ( prot_total["serum"] == "" && prot_total["pleura"] == "" && dhl["serum"] == "" && dhl["uln"] == "" && dhl["pleura"] == "" ) {
      $("#light-result-show")
        .html( criteria_txt[0] )
        .removeClass("is-info is-warning");
      $("#light-result").val("");
    } else {
      // Criterion I
      if ( prot_total["pleura"] != "" && prot_total["serum"] != "" ) {
        criteria[1] = (prot_total["pleura"] / prot_total["serum"]) > 0.5;
      } else {
        criteria[1] = null;
      }
      // Criterion II
      if ( dhl["pleura"] != "" && dhl["serum"] != "" ) {
        criteria[2] = (dhl["pleura"] / dhl["serum"]) > 0.6;
      } else {
        criteria[2] = null;
      }
      // Criterion III
      if ( dhl["pleura"] != "" && dhl["uln"] != "" ) {
        dhl["uln_twothirds"] = (dhl["uln"] * 2) / 3;
        criteria[3] = dhl["pleura"] > dhl["uln_twothirds"];
      } else {
        criteria[3] = null;
      }

      // Result
      if ( criteria[1] === null && criteria[2] === null && criteria[3] === null ) {
        $("#light-result-show")
          .html( criteria_txt[0] )
          .removeClass("is-info is-warning");
        $("#light-result").val( criteria_txt[0] );
      } else if ( criteria[1] === true || criteria[2] === true || criteria[3] === true ) {
        $("#light-result-show")
          .html( "EXUDATIVO" )
          .removeClass("is-info is-warning")
          .addClass("is-warning");
        let reasons = [];
        if ( criteria[1] === true ) { reasons.push( criteria_txt[1] ); }
        if ( criteria[2] === true ) { reasons.push( criteria_txt[2] ); }
        if ( criteria[3] === true ) { reasons.push( criteria_txt[3] ); }
        $("#light-result").val( "EXUDATIVO (" + reasons.join(" + ") + ")" );
      } else {
        $("#light-result-show")
          .html( "Transudativo" )
          .removeClass("is-info is-warning")
          .addClass("is-info");
        $("#light-result").val( "transudativo" );
      }
    }
  });
  // Update corresponding fields
  $("#light-serum-prot-total").on("change input", function() {
    $("#prot-total")
      .val( $("#light-serum-prot-total").val() )
      .trigger("change");
  });
  $("#prot-total").on("change input", function() {
    $("#light-serum-prot-total")
      .val( $("#prot-total").val() )
      .trigger("change");
  });
  $("#light-serum-dhl").on("change input", function() {
    $("#dhl")
      .val( $("#light-serum-dhl").val() )
      .trigger("change");
  });
  $("#dhl").on("change input", function() {
    $("#light-serum-dhl")
      .val( $("#dhl").val() )
      .trigger("change");
  });

  // Generate result
  $("#button-run").on("click", function() {
    // Main result array
    let date = "";
    let date_options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    if ($("#date").val() != "") {
      date = new Date($("#date").val() + "T00:00:00-03:00");
      date = " (" + date.toLocaleString("pt-BR", date_options) + ")";
    }
    let res = ["# Labs" + date];

    // Renal Function
    if ( $("#urea").val() != "" || $("#creatinine").val() != "" ) {
      let urea = $("#urea").val() == "" ? "--" : $("#urea").val();
      let creatinine = $("#creatinine").val() == "" ? "--" : $("#creatinine").val();
      res.push( "- Ur/Cr " + urea + "/" +  creatinine );
    }
    if ( $("#egfr-result").val() != "" ) {
      let method = $("#egfr-method").val() == "cockroft" ? "Cockroft-Gault" : "CKD-EPI";
      let unit = $("#egfr-method").val() == "cockroft" ? "mL/min" : "mL/min/1.73m²";
      res.push( "- eGFR (" + method + ") " + $("#egfr-result").val() + " " + unit );
    }
    if ( $("#na").val() != "" || $("#k").val() != "" ) {
      let na = $("#na").val() == "" ? "--" : $("#na").val();
      let k = $("#k").val() == "" ? "--" : $("#k").val();
      res.push("- Na/K " + na + "/" + k );
    }
    if ( $("#ca").val() != "" ) { res.push( "- CaI " + $("#ca").val() ); }
    if ( $("#mg").val() != "" ) { res.push( "- Mg " + $("#mg").val() ); }

    // Urine Analysis
    let ui = [];
    if ( $("#ui-hemac").val() != "" && $("#ui-leuco").val() != "" ) {
      ui.push( "- Urina I:" );
      if ( $("#ui-aspect").val() != "" ) { ui.push( "  - Aspecto " + $("#ui-aspect").val() ); }
      if ( $("#ui-crystals").val() != "" ) { ui.push( "  - Cristais " + $("#ui-crystals").val() ); }
      if ( $("#ui-nitrite").val() != "" ) { ui.push( "  - Nitrito " + $("#ui-nitrite").val() ); }
      if ( $("#ui-bact").val() != "" ) {
        ui.push("  - Bactérias " + ( $("#ui-bact").val() == "0" ? "AUSENTES" : $("#ui-bact").val() + "+" ) );
      }
      let ui_hemac = parseInt( $("#ui-hemac").val() );
      if ( ui_hemac < 1000 ) {
        ui.push( "  - Hemác " + $("#ui-hemac").val() + "k" );
      } else {
        ui.push( "  - Hemác >1M" );
      }
      let ui_leuco = parseInt( $("#ui-leuco").val() );
      if ( ui_leuco < 1000 ) {
        ui.push( "  - Leuco " + $("#ui-leuco").val() + "k" );
      } else {
        ui.push( "  - Leuco >1M" );
      }
      if ( $("#ui-misc").val() != "" ) { ui.push( "  - Misc: " + $("#ui-misc").val() ); }
    }
    if ( ui.length > 0 ) { res.push( ui.join("\n") ); }

    // Abdomen
    if ( $("#tgo").val() != "" || $("#tgp").val() != "" ) {
      let tgo = $("#tgo").val() == "" ? "--" : $("#tgo").val();
      let tgp = $("#tgp").val() == "" ? "--" : $("#tgp").val();
      res.push( "- TGO/TGP " + tgo + "/" + tgp );
    }
    if ( $("#fa").val() != "" || $("#ggt").val() != "" ) {
      let fa = $("#fa").val() == "" ? "--" : $("#fa").val();
      let ggt = $("#ggt").val() == "" ? "--" : $("#ggt").val();
      res.push( "- FA/GGT " + fa + "/" + ggt );
    }
    if ( $("#bt").val() != "" && $("#bd").val() != "" && $("#bi").val() != "" ) {
      res.push("- BT/D/I " + $("#bt").val() + "/" + $("#bd").val() + "/" + $("#bi").val() );
    }
    if ( $("#amilase").val() != "" ) { res.push( "- Amilase " + $("#amilase").val() ); }
    if ( $("#lipase").val() != "" ) { res.push( "- Lipase " + $("#lipase").val() ); }

    // Urine Culture
    let uroc = [];
    if ( $("#uroc").val() != "" ) {
      if ( $("#uroc").val() == "PARCIAL POSITIVO para " ) {
        uroc.push( "- Uroc PARCIAL POSITIVA para " + $("#uroc-result").val() );
      } else if ( $("#uroc").val() == "POSITIVO para " ) {
        uroc.push( "- Uroc:" );
        uroc.push( "  - POSITIVA para " + $("#uroc-result").val() );
        if ( $("#uroc-sens").val() != "" ) { uroc.push( "  - Sensível a: " + $("#uroc-sens").val() ); }
        if ( $("#uroc-resist").val() != "" ) { uroc.push( "  - Resistente a: " + $("#uroc-resist").val() ); }
        if ( $("#uroc-interm").val() != "" ) { uroc.push( "  - Intermediário a: " + $("#uroc-interm").val() ); }
      } else {
        uroc.push( "- Uroc " + $("#uroc").val() );
      }
    }
    if ( uroc.length > 0 ) { res.push( uroc.join("\n") ); }

    // Hemogram
    let hmg = [];
    if ( $("#hmg-hb").val() != "" && $("#hmg-ht").val() != "" && $("#hmg-leuco").val() != "" && $("#hmg-plat").val() != "" ) {
      hmg.push( "- HMG:" );
      // Red Series
      let red = $("#hmg-red-dx").val() != "" ? " (" + $("#hmg-red-dx").val() + ")" : "";
      hmg.push( "  - Série vermelha" + red );
      hmg.push( "    - Hb " + $("#hmg-hb").val() );
      hmg.push( "    - Ht " + $("#hmg-ht").val() + "%" );
      if ( $("#hmg-vcm").val() != "" ) { hmg.push( "    - VCM " + $("#hmg-vcm").val() ); }
      if ( $("#hmg-hcm").val() != "" ) { hmg.push( "    - HCM " + $("#hmg-hcm").val() ); }
      if ( $("#hmg-rdw").val() != "" ) { hmg.push( "    - RDW " + $("#hmg-rdw").val() + "%" ); }
      // White Series
      let white = $("#hmg-white-dx").val() != "" ? " (" + $("#hmg-white-dx").val() + ")" : "";
      hmg.push( "  - Série branca" + white );
      hmg.push( "    - Leuco " + $("#hmg-leuco").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") );
      let neutro_abs = $("#hmg-neutro-abs").val() != "" ? " (" + $("#hmg-neutro-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
      hmg.push( "    - Neutro " + $("#hmg-neutro-percent").val() + "%" + neutro_abs );
      if ( $("#hmg-segm-percent").val() != "" && ( $("#hmg-blast-percent").val() != "" || $("#hmg-myeloblast-percent").val() != "" || $("#hmg-promyelocyst-percent").val() != "" || $("#hmg-myelocyst-percent").val() != "" || $("#hmg-metamyelocyst-percent").val() != "" || $("#hmg-bast-percent").val() != "" ) ) {
        let segm_abs = $("#hmg-segm-abs").val() != "" ? " (" + $("#hmg-segm-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Segmentados " + $("#hmg-segm-percent").val() + "%" + segm_abs );
        if ( $("#hmg-bast-percent").val() != "" ) {
          let bast_abs = $("#hmg-bast-abs").val() != "" ? " (" + $("#hmg-bast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Bastonetes " + $("#hmg-bast-percent").val() + "%" + bast_abs );
        }
        if ( $("#hmg-metamyelocyst-percent").val() != "" ) {
          let metamyelocyst_abs = $("#hmg-metamyelocyst-abs").val() != "" ? " (" + $("#hmg-metamyelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Metamielócitos " + $("#hmg-metamyelocyst-percent").val() + "%" + metamyelocyst_abs );
        }
        if ( $("#hmg-myelocyst-percent").val() != "" ) {
          let myelocyst_abs = $("#hmg-myelocyst-abs").val() != "" ? " (" + $("#hmg-myelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Mielócitos " + $("#hmg-myelocyst-percent").val() + "%" + myelocyst_abs );
        }
        if ( $("#hmg-promyelocyst-percent").val() != "" ) {
          let promyelocyst_abs = $("#hmg-promyelocyst-abs").val() != "" ? " (" + $("#hmg-promyelocyst-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Promieloblastos " + $("#hmg-promyelocyst-percent").val() + "%" + promyelocyst_abs );
        }
        if ( $("#hmg-myeloblast-percent").val() != "" ) {
          let myeloblast_abs = $("#hmg-myeloblast-abs").val() != "" ? " (" + $("#hmg-myeloblast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Mieloblastos " + $("#hmg-myeloblast-percent").val() + "%" + myeloblast_abs );
        }
        if ( $("#hmg-blast-percent").val() != "" ) {
          let blast_abs = $("#hmg-blast-abs").val() != "" ? " (" + $("#hmg-blast-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
          hmg.push( "      - Blastos " + $("#hmg-blast-percent").val() + "%" + blast_abs );
        }
      }
      let linfo_abs = $("#hmg-linfo-abs").val() != "" ? " (" + $("#hmg-linfo-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
      hmg.push( "    - Linfo " + $("#hmg-linfo-percent").val() + "%" + linfo_abs );
      if ( $("#hmg-diff").val() != "" ) { hmg.push( "    - Diferencial: " + $("#hmg-diff").val() ); }
      // Platelet Series
      let plat = $("#hmg-platelets-dx").val() != "" ? " (" + $("#hmg-platelets-dx").val() + ")" : "";
      hmg.push( "  - Plaq " + $("#hmg-plat").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "k" + plat );
    }
    if ( hmg.length > 0 ) { res.push( hmg.join("\n") ); }

    // Gasometry
    let gaso = [];
    if ( $("#gaso-origin").val() == "Arterial" && $("#gaso-ph").val() != "" && $("#gaso-pco2").val() != "" && $("#gaso-po2").val() != "" && $("#gaso-so2").val() != "" && $("#gaso-bic").val() != "" && $("#gaso-be").val() != "" ) {
      let dx = $("#gaso-dx").val() != "" ? " (" + $("#gaso-dx").val() + ")" : "";
      gaso.push( "- Gasometria ARTERIAL" + dx + ":" );
      gaso.push( "  - pH " + $("#gaso-ph").val() );
      gaso.push( "  - pCO2 " + $("#gaso-pco2").val() );
      gaso.push( "  - pO2 " + $("#gaso-po2").val() );
      gaso.push( "  - sO2 " + $("#gaso-so2").val() );
      gaso.push( "  - Bic " + $("#gaso-bic").val() );
      gaso.push( "  - BE " + $("#gaso-be").val() );
      gaso.push( "  - Lac " + $("#gaso-lac").val() );
    } else if ( $("#gaso-origin").val() != "Arterial" && $("#gaso-ph").val() != "" && $("#gaso-bic").val() != "" ) {
      let dx = $("#gaso-dx").val() != "" ? " (" + $("#gaso-dx").val() + ")" : "";
      gaso.push( "- Gasometria " + $("#gaso-origin").val() + dx + ":" );
      gaso.push( "  - pH " + $("#gaso-ph").val() );
      gaso.push( "  - Bic " + $("#gaso-bic").val() );
    }
    if ( gaso.length > 0 ) { res.push( gaso.join("\n") ); }

    // Miocardium
    if ( $("#tropo-fast").val() != "" ) {
      let tropo = parseFloat( $("#tropo-fast").val() );
      res.push( "- Tropo FAST " + ( tropo < 0.03 ? "indetectável ao método" : tropo ) );
    }
    if ( $("#tropo-us").val() != "" ) {
      let tropo = parseFloat( $("#tropo-us").val() );
      res.push( "- Tropo Ultrassensível " + ( tropo < 0.001 ? "indetectável ao método" : tropo ) );
    }

    // Light Criteria
    if ( $("#light-result").val().trim() != "" ) {
      res.push( "- Critérios de Light: " + $("#light-result").val() );
      // (Re)parse values
      let prot_total = [];
      prot_total["serum"] = $("#light-serum-prot-total").val().trim() != "" ? parseFloat($("#light-serum-prot-total").val()) : "--";
      prot_total["pleura"] = $("#light-pleura-prot-total").val().trim() != "" ? parseFloat($("#light-pleura-prot-total").val()) : "--";
      prot_total["ratio"] = ( prot_total["serum"] != "--" && prot_total["pleura"] != "--" ) ? ( prot_total["pleura"] / prot_total["serum"] ).toFixed(3) : "";
      let dhl = [];
      dhl["serum"] = $("#light-serum-dhl").val().trim() != "" ? parseFloat($("#light-serum-dhl").val()) : "--";
      dhl["uln"] = $("#light-serum-dhl-uln").val().trim() != "" ? parseFloat($("#light-serum-dhl-uln").val()) : "--";
      dhl["uln_twothirds"] = dhl["uln"] != "--" ? ( (dhl["uln"] * 2) / 3 ).toFixed(1) : "";
      dhl["pleura"] = $("#light-pleura-dhl").val().trim() != "" ? parseFloat($("#light-pleura-dhl").val()) : "--";
      dhl["ratio"] = ( dhl["serum"] != "--" && dhl["pleura"] != "--" ) ? ( dhl["pleura"] / dhl["serum"] ).toFixed(3) : "";
      // Total Protein
      res.push( "  - Proteínas Totais" + ( prot_total["ratio"] != "" ? " (Razão Pl/Sg = " + prot_total["ratio"] + ")" : "" ) + ":" );
      res.push( "    - Pleura " + prot_total["pleura"] );
      res.push( "    - Sérica " + prot_total["serum"] );
      // DHL
      res.push( "  - DHL" + ( dhl["ratio"] != "" ? " (Razão Pl/Sg = " + dhl["ratio"] + ")" : "" ) + ":" );
      res.push( "    - Pleura " + dhl["pleura"] );
      res.push( "    - Sérica " + dhl["serum"] + " (LSN " + dhl["uln"] + ( dhl["uln_twothirds"] != " / LSN*2/3 " + dhl["uln_twothirds"] ? "" : "" ) + ")" );
    }

    // Microbio/Other
    // Dengue results
    if ( $("#dengue-ns1").val() != "" && $("#dengue-igm").val() != "" && $("#dengue-igg").val() != "" ) {
      res.push( "- Dengue:" );
      res.push( "  - NS1 " + $("#dengue-ns1").val() );
      res.push( "  - IgM " + $("#dengue-igm").val() );
      res.push( "  - IgG " + $("#dengue-igg").val() );
    }
    // COVID result
    if ( $("#covid").val() != "" && $("#covid-res").val() != "" ) {
      res.push( "- " + $("#covid").val() + " " + $("#covid-res").val() );
    }
    // Influenza result
    if ( $("#influenza").val() != "" && $("#influenza-res").val() != "" ) {
      res.push( "- " + $("#influenza").val() + " " + $("#influenza-res").val() );
    }

    // Miscellanea results
    if ( $("#pcr").val() != "" || $("#vhs").val() != "" ) {
      if ( $("#pcr").val() != "" && $("#vhs").val() != "" ) {
        let pcr = parseFloat( $("#pcr").val() );
        res.push( "- PCR/VHS " + ( pcr < 0.01 ? "indetectável ao método" : pcr ) + "/" + $("#vhs").val() );
      } else if ( $("#pcr").val() != "" ) {
        let pcr = parseFloat( $("#pcr").val() );
        res.push( "- PCR " + ( pcr < 0.01 ? "indetectável ao método" : pcr ) );
      } else {
        res.push( "- VHS " + $("#vhs").val() );
      }
    }
    if ( $("#dd").val() != "" ) { res.push( "- DD " + $("#dd").val() ); }
    if ( $("#glucose").val() != "" ) { res.push( "- Glic " + $("#glucose").val() ); }
    if ( $("#cpk").val() != "" ) { res.push( "- CPK " + $("#cpk").val() ); }
    if ( $("#dhl").val() != "" ) { res.push( "- DHL " + $("#dhl").val() ); }
    if ( $("#bnp").val() != "" ) {
      let bnp = parseFloat( $("#bnp").val() );
      res.push("- BNP " + ( bnp > 35000 ? "acima do limite superior de detecção do método" : bnp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ) );
    }
    if ( $("#inr").val() != "" ) { res.push( "- INR " + $("#inr").val() ); }
    // Proteins
    if ( $("#prot-total").val() != "" || $("#prot-alb").val() != "" || $("#prot-glob").val() != "" ) {
      res.push("- Proteínas Séricas:");
      if ( $("#prot-total").val() != "" ) { res.push( "  - Total " + $("#prot-total").val() ); }
      if ( $("#prot-alb").val() != "" ) { res.push( "  - Alb " + $("#prot-alb").val() ); }
      if ( $("#prot-glob").val() != "" ) { res.push( "  - Glob " + $("#prot-glob").val() ); }
      if ( $("#prot-alb").val() != "" && $("#prot-glob").val() != "" ) {
        let albumin = parseFloat( $("#prot-alb").val() );
        let globulin = parseFloat( $("#prot-glob").val() );
        res.push( "  - Rel. Alb/Glob " + (albumin / globulin).toFixed(3) );
      }
    }

    // Useless Results
    if ( $("#uselessness").is(":checked") ) { res.push( "- Demais labs: nada digno de nota" ); }

    // Output
    $("#output-o").val( res.join("\n") );
  });
});

function getCockroft(age, weight, sex, cr) {
  let egfr = ((140.0 - age) * weight) / (cr * 72.0)
  if (sex == "f") {
    egfr *= 0.85
  }
  egfr = Math.round( ( egfr + Number.EPSILON ) * 100) / 100;
  return egfr;
}
function getCKD(age, weight, sex, black, cr) {
  let a = (sex == "f") ? (cr / 0.7) : (cr / 0.9);
  a = Math.min(1, a);
  let alpha = (sex == "f") ? (-0.329) : (-0.411);
  let b = (sex == "f") ? (cr / 0.7) : (cr / 0.9);
  b = Math.max(1, b);
  let c = (sex == "f") ? 1.018 : 1.0;
  let d = (black == "true") ? 1.159 : 1.0;

  let egfr = 141 * (a ** alpha) * (b ** (-1.209)) * (0.993 ** age) * c * d;
  egfr = Math.round((egfr + Number.EPSILON) * 100) / 100;
  return egfr;
}

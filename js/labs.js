$(document).ready(function() {
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

  $("#button-run").on("click", function() {
    // Main result array
    let res = ["# Labs"];

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
      if ( $("#hmg-segm-percent").val() != "" && $("#hmg-young-percent").val() != "" ) {
        let segm_abs = $("#hmg-segm-abs").val() != "" ? " (" + $("#hmg-segm-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Segmentados " + $("#hmg-segm-percent").val() + "%" + segm_abs );
        let young_abs = $("#hmg-young-abs").val() != "" ? " (" + $("#hmg-young-abs").val().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ")" : "";
        hmg.push( "      - Formas Jovens " + $("#hmg-young-percent").val() + "%" + young_abs );
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
    if ( $("#tropo-us").val() != "" ) { res.push( "- Tropo Ultrassensível " + $("#tropo-us").val() ); }

    // Miscellanea results
    if ( $("#pcr").val() != "" || $("#vhs").val() != "" ) {
      if ( $("#pcr").val() != "" && $("#vhs").val() != "" ) {
        res.push( "- PCR/VHS " + $("#pcr").val() + "/" + $("#vhs").val() );
      } else if ( $("#pcr").val() != "" ) {
        res.push( "- PCR " + $("#pcr").val() );
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
      res.push("- BNP " + ( bnp > 30000 ? ">30.000,0" : bnp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") ) );
    }
    if ( $("#inr").val() != "" ) { res.push( "- INR " + $("#inr").val() ); }

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

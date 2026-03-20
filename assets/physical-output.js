/******************************************/
/*                   JS                   */
/******************************************/
// Physical Examination Methods
$(function () {
  console.log("Métodos de output de exame físico prontos!");

  /****************************************/
  /*                Output                */
  /****************************************/
  $("#output-compile").on("click", function () {
    // Initialize output array
    // Each element being a single line/system/submodule
    let out = ["# EF:"];
    // Get patient's pronouns
    let pronouns = $("#pronouns").val();

    /***** GENERAL *****/
    // This is the one series of exams that will always be included
    // > First line
    let line1 = [];
    // > > General status
    line1.push($("#status").val() + " estado geral");
    // > > Nutritional status
    if ($("#nutrition").val() != "") {
      line1.push($("#nutrition").val());
    }
    // > > Compile first line
    out.push(line1.join(". ") + ".");
    // > Second line
    let line2 = [];
    // > > Loop through each of the four main parameters
    [
      ["color", "Descorad((PRO))"],
      ["hydro", "desidratad((PRO))"],
      ["cyanose", "cianótic((PRO))"],
      ["icter", "ictéric((PRO))"]].forEach(function (p) {
        if (isNaN($("[name=" + p[0] + "]:checked").val())) {
          line2.push($("[name=" + p[0] + "]:checked").val());
        } else {
          line2.push(p[1] + $("[name=" + p[0] + "]:checked").val() + "+/4+");
        }
      });
    // > > Fever
    if ($("[name=fever]").val() != "") {
      line2.push($("[name=fever]").val());
    }
    // > > Breathing
    if ($("#breathing").val() == "other") {
      line2.push($("#breathing-other").val().trim());
    } else if ($("#breathing").val() != "") {
      line2.push($("#breathing").val());
    }
    // > > Add face to compiled second line
    line2 = line2.join(", ") + ".";
    if ($("#face").val() == "other") {
      line2 += " " + $("#face-other").val() + ".";
    } else if ($("#face").val() != "") {
      line2 += " Fácies " + $("#face").val() + ".";
    }
    // > > Compile second line
    out.push(line2);
    // > Third line
    let line3 = [];
    // > > Pulse oximetry
    if ($("#ssvv-sat").val() != "") {
      let o2 = "Sat O2 = " + $("#ssvv-sat").val() + "% em " + $("#ssvv-sat-type").val();
      if ($("#ssvv-sat-flux").val() != "") { o2 += " a " + $("#ssvv-sat-flux").val() + "L/min"; }
      line3.push(o2);
    }
    // > > Pulse
    if ($("#ssvv-pulse").val() != "") {
      line3.push("FC = " + $("#ssvv-pulse").val() + "bpm");
    }
    // > > Arterial Pressure
    if ($("#ssvv-pas").val() != "" && $("#ssvv-pad").val() != "") {
      let pas = parseInt($("#ssvv-pas").val());
      let pad = parseInt($("#ssvv-pad").val());
      let pam = (pas + (pad * 2)) / 3;
      line3.push("PA = " + $("#ssvv-pas").val() + "/" + $("#ssvv-pas").val() + "mmHg");
      line3.push("PAM = " + pam.toFixed(0) + "mmHg");
    } else if ($("#ssvv-pas").val() != "") {
      line3.push("PAS = " + $("#ssvv-pas").val() + "mmHg");
    } else if ($("#ssvv-pad").val() != "") {
      line3.push("PAD = " + $("#ssvv-pas").val() + "mmHg");
    }
    // > > Respiration
    if ($("#ssvv-fr").val() != "") {
      line3.push("FR = " + $("#ssvv-fr").val() + "irpm");
    }
    // > > Glucose
    if ($("#ssvv-glucose").val() != "") {
      line3.push("GC = " + $("#ssvv-glucose").val() + "mg/dL" + $("#ssvv-glucose-time").val());
    }
    // > > Temperature
    if ($("#ssvv-temp").val() != "") {
      line3.push("Temp = " + $("#ssvv-temp").val() + "°C" + " (" + $("#ssvv-temp-desc").val() + ")");
    }
    // > > Weight
    if ($("#ssvv-weight").val() != "") {
      line3.push("Peso " + $("#ssvv-weight-eq").val() + $("#ssvv-weight").val() + "kg");
    }
    // > > Height
    if ($("#ssvv-height").val() != "") {
      line3.push("Alt = " + $("#ssvv-height").val() + "cm");
    }
    // > > BMI
    if ($("#ssvv-bmi").val() != "") {
      let bmi = parseFloat($("#ssvv-bmi").val());
      let bmi_name = "";
      if (bmi >= 40.0) { bmi_name = "obesidade grave"; }
      else if (bmi >= 30.0) { bmi_name = "obesidade"; }
      else if (bmi >= 25.0) { bmi_name = "sobrepeso"; }
      else if (bmi < 18.5) { bmi_name = "subnutrição"; }
      else { bmi_name = "eutrofia"; }
      line3.push("IMC = " + bmi.toFixed(1) + "kg/m² (" + bmi_name + ")");
    }
    // > > Pain
    if ($("#ssvv-pain").val() != "") {
      line3.push("EVA Dor = " + $("#ssvv-pain").val() + "/10");
    }
    // > > Compile third line
    if (line3.length > 0) { out.push(line3.join(" | ")); }
    // > Fourth line
    let line4 = [];
    // > > GCS
    if ($("#ssvv-gcs-eye").val() != "" &&
      $("#ssvv-gcs-speech").val() != "" &&
      $("#ssvv-gcs-muscle").val() != "") {
      let ao = parseInt($("#ssvv-gcs-eye").val());
      let rv = parseInt($("#ssvv-gcs-speech").val());
      let rm = parseInt($("#ssvv-gcs-muscle").val());
      let gcs = ao + rv + rm;
      if (gcs < 15) {
        ao = "AO " + (ao == 0 ? "0NT" : ao.toFixed(0));
        rv = "RV " + (rv == 0 ? "0NT" : rv.toFixed(0));
        rm = "RM " + (rm == 0 ? "0NT" : rm.toFixed(0));
        gcs = gcs + " (" + [ao, rv, rm].join("; ") + ")";
      }
      line4.push("GCS " + gcs);
    }
    // > > RASS
    if ($("#ssvv-rass").val() != "") {
      line4.push("RASS " + $("#ssvv-rass").val());
    }
    // > > Orientation
    if ($("#ssvv-orientation-time").val() != "" ||
      $("#ssvv-orientation-space").val() != "") {
      if ($("#ssvv-orientation-time").val() == $("#ssvv-orientation-space").val()) {
        line4.push($("#ssvv-orientation-time").val() + " no tempo-espaço");
      } else {
        if ($("#ssvv-orientation-time").val() != "") {
          line4.push($("#ssvv-orientation-time").val() + " no tempo");
        }
        if ($("#ssvv-orientation-space").val() != "") {
          line4.push($("#ssvv-orientation-space").val() + " no espaço");
        }
      }
    }
    // > > Collaboration
    if ($("#ssvv-collaboration").val() == "other") {
      line4.push($("#ssvv-collaboration-other").val());
    } else if ($("#ssvv-collaboration").val() != "") {
      line4.push($("#ssvv-collaboration").val());
    }
    // > > Walking
    if ($("#ssvv-walking").val() == "other") {
      line4.push($("#ssvv-walking-other").val());
    } else if ($("#ssvv-walking").val() != "") {
      line4.push($("#ssvv-walking").val());
    }
    // > > Compile fourth line
    if (line4.length > 0) { out.push(line4.join(" | ")); }

    /***** HEAD *****/
    // > Eyes
    let eyes = [];
    // > > Redness
    if ($("#eye-redness").val() != "") {
      eyes.push("Conjuntiva " + $("#eye-redness").val());
    }
    // > > Yellowness
    if ($("#eye-yellowness").val() != "") {
      eyes.push("Conjuntiva " + $("#eye-yellowness").val());
    }
    // > > Crusts
    if ($("#eye-secretions").val() != "") {
      eyes.push($("#eye-secretions").val());
    }
    // > > Pus
    if ($("#eye-pus").val() != "") {
      eyes.push($("#eye-pus").val());
    }
    // > > Eye movements
    if ($("#eye-movements").val() != "") {
      if ($("#eye-movements").val() == "other") {
        eyes.push("Movimentação Ocular Extrínseca com " + $("#eye-movements-other").val());
      } else {
        eyes.push("Movimentação Ocular Extrínseca " + $("#eye-movements").val());
      }
    }
    // > > Pupil reflexes
    if ($("#eye-pupils").val() != "") {
      if ($("#eye-pupils").val() == "other") {
        eyes.push("Reflexos Pupilares com " + $("#eye-pupils-other").val());
      } else if ($("#eye-pupils").val() == "preservada") {
        eyes.push("Pupilas isofotorreagentes (PIFR)");
      } else {
        eyes.push("Reflexos Pupilares " + $("#eye-pupils").val());
      }
    }
    // > > Other
    if ($("#eye-other").val() != "") {
      eyes.push($("#eye-other").val().trim());
    }
    // > > Compile and push eye descriptors
    if (eyes.length > 0) {
      eyes = "- Olhos: " + eyes.join(". ");
      eyes += (/.+\.$/.test(eyes)) ? "" : ".";
      out.push(eyes.trim());
    }

    // > Cervical
    let cervical = [];
    // > > Thyroid
    if ($("#neck-thyroid-volume").val() != "") {
      cervical.push(
        "Tireóide " +
        $("#neck-thyroid-volume").val() +
        $("#neck-thyroid-nodules").val() +
        $("#neck-thyroid-margins").val());
    }
    // > > Lymphnodes
    if ($("#neck-lymphnodes").val() != "") {
      cervical.push($("#neck-lymphnodes").val() + $("#neck-lymphnodes-desc").val());
    }
    // > > Lymphnodes localizations
    if ($("#neck-lymphnodes-locs").val() != "") {
      let locs = JSON.parse($("#neck-lymphnodes-locs").val());
      if (locs.length > 2) {
        let last = locs.pop();
        cervical.push("Com linfonodos palpápeis nos setores " + locs.join(", ") + ", e " + last);
      } else if (locs.length == 2) {
        cervical.push("Com linfonodos palpápeis nos setores " + locs.join(" e "));
      } else if (locs.length > 0) {
        cervical.push("Com linfonodo palpápel no setor " + locs.join(""));
      }
    }
    // > > Parotid glands
    if ($("#neck-parotid-right").val() != "" ||
        $("#neck-parotid-left").val() != "") {
      if ($("#neck-parotid-right").val() == $("#neck-parotid-left").val()) {
        cervical.push("Glândulas Parótidas " + $("#neck-parotid-left option:selected").attr("plural-alt"));
      } else {
        if ($("#neck-parotid-right").val() != "") {
          cervical.push("Glândula Parótida Direita " + $("#neck-parotid-right").val());
        }
        if ($("#neck-parotid-left").val() != "") {
          cervical.push("Glândula Parótida Esquerda " + $("#neck-parotid-left").val());
        }
      }
    }
    // > > Sublingual glands
    if ($("#neck-sublingual-right").val() != "" ||
      $("#neck-sublingual-left").val() != "") {
      if ($("#neck-sublingual-right").val() == $("#neck-sublingual-left").val()) {
        cervical.push("Glândulas Sublinguais " + $("#neck-sublingual-left option:selected").attr("plural-alt"));
      } else {
        if ($("#neck-sublingual-right").val() != "") {
          cervical.push("Glândula Sublingual Direita " + $("#neck-sublingual-right").val());
        }
        if ($("#neck-sublingual-left").val() != "") {
          cervical.push("Glândula Sublingual Esquerda " + $("#neck-sublingual-left").val());
        }
      }
    }
    // > > Compile and push cervical descriptors
    if (cervical.length > 0) {
      cervical = "- Cervical: " + cervical.join(". ");
      cervical += (/.+\.$/).test(cervical) ? "" : ".";
      out.push(cervical.trim());
    }

    /***** ORL/ENT *****/
    // > Ears
    let ears = [];
    // > > Right
    if ($("#oto-d-membrane").val() != "") {
      ears.push("MTD " + $("#oto-d-membrane").val());
    }
    if ($("#oto-d-canal").val() != "" &&
        (
          !$("#oto-d-membrane").val().includes("cerume impactado") ||
          !$("#oto-d-canal").val().includes("cerume impactado")
        )) {
      ears.push("Conduto auditivo direito " + $("#oto-d-canal").val());
    }
    if ($("#oto-d-ear").val() != "") {
      ears.push("Pavilhão auditivo direito " + $("#oto-d-ear").val());
    }
    // > > Left
    if ($("#oto-e-membrane").val() != "") {
      ears.push("MTE " + $("#oto-e-membrane").val());
    }
    if ($("#oto-e-canal").val() != "" &&
        (
          !$("#oto-e-membrane").val().includes("cerume impactado") ||
          !$("#oto-e-canal").val().includes("cerume impactado")
        )) {
      ears.push("Conduto auditivo esquerdo " + $("#oto-e-canal").val());
    }
    if ($("#oto-e-ear").val() != "") {
      ears.push("Pavilhão auditivo esquerdo " + $("#oto-e-ear").val());
    }
    // > > Other
    if ($("#oto-other").val() != "") {
      ears.push($("#oto-other").val().trim());
    }
    // > > Compile and push otological descriptors
    if (ears.length > 0) {
      ears = "- Ouvidos: " + ears.join(". ");
      ears += (/.+\.$/).test(ears) ? "" : ".";
      out.push(ears.trim());
    }

    // > Mouth
    let mouth = [];
    // > > Oroscopy
    if ($("#oro-pharynx").val() == "other") {
      mouth.push("Faringe com " + $("#oro-pharynx-other").val());
    } else if ($("#oro-pharynx").val() != "") {
      mouth.push("Faringe " + $("#oro-pharynx").val());
    }
    // > > Tonsils' size
    if ($("#oro-d-tonsils-size").val() != "" ||
        $("#oro-e-tonsils-size").val() != "") {
      if ($("#oro-d-tonsils-size").val() == $("#oro-e-tonsils-size").val()) {
        let desc = $("#oro-d-tonsils-size").val();
        desc += (desc == "ausente") ? "s" : " bilateralmente";
        mouth.push("Tonsilas palatinas " + desc);
      } else {
        if ($("#oro-d-tonsils-size").val() != "") {
          mouth.push("Tonsila palatina direita " + $("#oro-d-tonsils-size").val());
        }
        if ($("#oro-e-tonsils-size").val() != "") {
          mouth.push("Tonsila palatina esquerda " + $("#oro-e-tonsils-size").val());
        }
      }
    }
    // > > Tonsils' cover
    if ($("#oro-d-tonsils-cover").val() != "" ||
      $("#oro-e-tonsils-size").val() != "") {
      if ($("#oro-d-tonsils-cover").val() == $("#oro-e-tonsils-cover").val()) {
        mouth.push("Tonsilas palatinas " + $("#oro-d-tonsils-cover").val() + " bilateralmente");
      } else {
        if ($("#oro-d-tonsils-cover").val() != "") {
          mouth.push("Tonsila palatina direita " + $("#oro-d-tonsils-cover").val());
        }
        if ($("#oro-e-tonsils-cover").val() != "") {
          mouth.push("Tonsila palatina esquerda " + $("#oro-e-tonsils-cover").val());
        }
      }
    }
    // > > Palate
    if ($("#oro-palate").val() != "") {
      mouth.push("Palato mole " + $("#oro-palate").val());
    }
    // > > Oral hygine
    if ($("#oro-hygine").val() != "") {
      mouth.push($("#oro-hygine").val());
    }
    // > > Other
    if ($("#oro-other").val() != "") {
      mouth.push($("#oro-other").val().trim());
    }
    // > > Compile and push otological descriptors
    if (mouth.length > 0) {
      mouth = "- Oroscopia: " + mouth.join(". ");
      mouth += (/.+\.$/).test(mouth) ? "" : ".";
      out.push(mouth.trim());
    }

    // > Nose
    let nose = [];
    // > > Mucosa
    if ($("#nose-mucosa").val() != "") {
      nose.push("Mucosa nasal " + $("#nose-mucosa").val());
    }
    // > > Nose shells
    if ($("#nose-d-shells").val() != "" ||
        $("#nose-e-shells").val() != "") {
      if ($("#nose-d-shells").val() == $("#nose-e-shells").val()) {
        nose.push("Conchas nasais" + $("#nose-d-shells").val() + " bilateralmente");
      } else {
        if ($("#nose-d-shells").val() != "") {
          nose.push("Conchas nasais direitas " + $("#nose-d-shells").val());
        }
        if ($("#nose-e-shells").val() != "") {
          nose.push("Conchas nasais esquerdas " + $("#nose-e-shells").val());
        }
      }
    }
    // > > Nose sept
    if ($("#nose-sept").val() != "") {
      nose.push("Septo nasal " + $("#nose-sept").val());
    }
    // > > Other
    if ($("#nose-other").val() != "") {
      nose.push($("#nose-other").val().trim());
    }
    // > > Compile and push nasological descriptors
    if (nose.length > 0) {
      nose = "- Nasoscopia Anterior: " + nose.join(". ");
      nose += (/.+\.$/).test(nose) ? "" : ".";
      out.push(nose.trim());
    }

    // > HINTS
    // > > Since HINTS demands all three exams to
    // > > be performed. Required the the three
    // > > to be set
    if ($("#hints-hi").val() != "" &&
        $("#hints-n").val() != "" &&
        $("#hints-ts").val() != "") {
      // This value parsing is an approximation and may be
      // unreliable. Treat it as an ALPHA test until further
      // notice!
      let hi = parseInt($("#hints-hi option:selected").attr("pattern"));
      let n = parseInt($("#hints-n option:selected").attr("pattern"));
      let ts = parseInt($("#hints-ts option:selected").attr("pattern"));
      let patt = hi + n + ts;
      if (patt < 0) {
        patt = "periférico";
      } else if (patt > 0) {
        patt = "CENTRAL";
      } else {
        patt = "inespecífico";
      }
      out.push(
        "- HINTS - padrão " + patt + ":\n" +
        "  - Reflexo Vestíbulo-Ocular " + $("#hints-hi").val() + "\n" +
        "  - Nistagmos " + $("#hints-n").val() + "\n" +
        "  - Teste de \"Skew\" " + $("#hints-ts").val());
    }

    /***** OUTPUT *****/
    // Return final output
    $("#output").val(out.join("\n").replaceAll("((PRO))", pronouns));
  });
});

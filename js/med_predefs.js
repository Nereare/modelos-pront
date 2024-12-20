var guides = {
  "Ciclo Rápido (apresentação combinada ICS+SABA)": "Em caso de falta de ar, usar a dose habitual 03 (três) vezes a cada 20 minutos.\nSe, ao fim da 01 hora total, não melhorar da falta de ar, buscar atendimento médico.",
  "Ciclo Rápido (ICS separado de SABA)": "Em caso de falta de ar, usar a dose acima 03 (três) vezes a cada 20 minutos.\nSe, ao fim da 01 hora total, não melhorar da falta de ar, buscar atendimento médico.",
  "SRO Vs. Gatorade": "Caso você prefira, é possível substituir o soro de reidratação pelo mesmo volume de qualquer bebida isotônica da sua preferência."
};


let predefineds = {
  "Resfriado/Gripe (dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por no máximo 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp até a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Budesonida 32mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar budesonida.",
    ],
    [
      "Ambroxol 06mg/mL",
      "Via Oral",
      "",
      "Tomar 05mL a cada 08 horas por até 07d, enquanto tosse.",
      "",
    ],
  ],
  "Resfriado/Gripe (dip/SUS)": [
    [
      "Ibuprofeno 300mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por no máximo 05 dias.",
      "",
    ],
    [
      "Dipirona 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Beclometasona 50mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar beclometasona.",
    ],
    [
      "Dexclorfeniramina 0.4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas por 07d, se tosse.",
      "",
    ],
  ],
  "Resfriado/Gripe (dip+parac)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por no máximo 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios, intercalado com dipirona.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Budesonida 32mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar budesonida.",
    ],
    [
      "Ambroxol 06mg/mL",
      "Via Oral",
      "",
      "Tomar 05mL a cada 08 horas por 07d, se tosse.",
      "",
    ],
  ],
  "Resfriado/Gripe (dip+parac/SUS)": [
    [
      "Ibuprofeno 300mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por no máximo 05 dias.",
      "",
    ],
    [
      "Dipirona 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Paracetamol 500mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios, intercalado com dipirona.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Beclometasona 50mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar beclometasona.",
    ],
    [
      "Dexclorfeniramina 0.4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas por 07d, se tosse.",
      "",
    ],
  ],
  "Resfriado/Gripe (parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Budesonida 32mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar budesonida.",
    ],
    [
      "Ambroxol 06mg/mL",
      "Via Oral",
      "",
      "Tomar 05mL a cada 08 horas por 07d, se tosse.",
      "",
    ],
  ],
  "Resfriado/Gripe (parac/SUS)": [
    [
      "Paracetamol 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Soro Fisiológico 0,9%",
      "Via Nasal",
      "",
      "Lavar cada narina com 20mL de soro pelo menos a cada 06 horas.",
      "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana.",
    ],
    [
      "Beclometasona 50mcg/jato",
      "Via Nasal",
      "",
      "Aplicar 01 jato em cada narina a cada 12 horas por 02 semanas.",
      "Sempre realizar lavagem nasal ANTES de aplicar beclometasona.",
    ],
    [
      "Dexclorfeniramina 0.4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas por 07d, se tosse.",
      "",
    ],
  ],
  "Dengue (dip)": [
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios, intercalado com dipirona.",
      "",
    ],
    [
      "Ondansetrona 08mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se enjôos.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 600mL (aprox. 03 copos americanos) de soro a cada 08 horas intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados.",
    ],
  ],
  "Dengue (dip/SUS)": [
    [
      "Dipirona 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Paracetamol 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios, intercalado com dipirona.",
      "",
    ],
    [
      "Dimenidrinato+Piridoxina 25+5mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 08 horas, se enjôos.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 600mL (aprox. 03 copos americanos) de soro a cada 08 horas intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados.",
    ],
  ],
  "Dengue (parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Ondansetrona 08mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se enjôos.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 600mL (aprox. 03 copos americanos) de soro a cada 08 horas intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados.",
    ],
  ],
  "Dengue (parac/SUS)": [
    [
      "Paracetamol 500mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor, febre ou calafrios.",
      "",
    ],
    [
      "Dimenidrinato+Piridoxina 25+5mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 08 horas, se enjôos.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 600mL (aprox. 03 copos americanos) de soro a cada 08 horas intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados.",
    ],
  ],
  "GECA (buscopam)": [
    [
      "Dipirona + Escopolamina 250+10mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 08 horas, se dor ou cólicas.",
      "",
    ],
    [
      "Ondansetrona 04mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se náuseas.",
      "",
    ],
    [
      "Simeticona 75mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 06 horas, se gases ou estufamento.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 300mL (aprox. 02 copos americanos) de soro a cada 08 horas ou se diarreias.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas.",
    ],
    [
      "Racecadotrila 100mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por até 07d, enquanto diarreia.",
      "",
    ],
    [
      "Saccharomyces boulardii 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas por 03 dias.",
      "Tomar apenas quando DIARREIA ESTIVER EM MELHORA.",
    ],
  ],
  "GECA (buscopam/SUS)": [
    [
      "Dipirona + Escopolamina 333,4+6,67mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 08 horas, se dor ou cólicas.",
      "",
    ],
    [
      "Dimenidrinato + Piridoxina 25+5mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 08 horas, se náuseas.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 300mL (aprox. 02 copos americanos) de soro a cada 08 horas ou se diarreias.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas.",
    ],
    [
      "Saccharomyces boulardii 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas por 03 dias.",
      "Tomar apenas quando DIARREIA ESTIVER EM MELHORA.",
    ],
  ],
  "GECA (parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Escopolamina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se cólicas.",
      "",
    ],
    [
      "Ondansetrona 04mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se náuseas.",
      "",
    ],
    [
      "Simeticona 75mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 06 horas, se gases ou estufamento.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 300mL (aprox. 02 copos americanos) de soro a cada 08 horas ou se diarreias.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas.",
    ],
    [
      "Racecadotrila 100mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 07d, enquanto diarreia.",
      "",
    ],
    [
      "Saccharomyces boulardii 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas por 03 dias.",
      "Tomar apenas quando DIARREIA ESTIVER EM MELHORA.",
    ],
  ],
  "GECA (parac/SUS)": [
    [
      "Paracetamol 500mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Escopolamina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se cólicas.",
      "",
    ],
    [
      "Dimenidrinato + Piridoxina 25+5mg/mL",
      "Via Oral",
      "",
      "Tomar 40gts a cada 08 horas, se náuseas.",
      "",
    ],
    [
      "Sais para Reidratação Oral",
      "Via Oral",
      "",
      "Tomar 300mL (aprox. 02 copos americanos) de soro a cada 08 horas ou se diarreias.",
      "O soro acima pode ser substituído por água de coco e bebidas isotônicas.",
    ],
    [
      "Saccharomyces boulardii 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas por 03 dias.",
      "Tomar apenas quando DIARREIA ESTIVER EM MELHORA.",
    ],
  ],
  "Cistite (macrodantina, 03d)": [
    [
      "Nitrofurantoína 100mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas por 03 dias.",
      "",
    ],
    [
      "Fenazopiridina 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se dor no canal da urina.",
      "",
    ],
  ],
  "Cistite (cefalexina, 03d)": [
    [
      "Cefalexina 500mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas por 03 dias.",
      "",
    ],
    [
      "Fenazopiridina 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se dor no canal da urina.",
      "",
    ],
  ],
  "Cistite (fosfomicina)": [
    [
      "Fosfomicina 03g",
      "Via Oral",
      "",
      "Diluir conforme orientação do fabricante e tomar hoje em DOSE ÚNICA.",
      "",
    ],
    [
      "Fenazopiridina 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se dor no canal da urina.",
      "",
    ],
  ],
  "Cistite (macrodantina, 07d)": [
    [
      "Nitrofurantoína 100mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas por 07 dias.",
      "",
    ],
    [
      "Fenazopiridina 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se dor no canal da urina.",
      "",
    ],
  ],
  "Cistite (cefalexina, 07d)": [
    [
      "Cefalexina 500mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas por 07 dias.",
      "",
    ],
    [
      "Fenazopiridina 200mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se dor no canal da urina.",
      "",
    ],
  ],
  "Dor Osteomuscular (leve; dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por no máximo 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, intercalado com dipirona.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
  ],
  "Dor Osteomuscular (intensa; dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, intercalado com dipirona.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
    [
      "Codeína 30mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 08 horas, se dor que não melhora mesmo após 30 minutos de uso de analgésico simples.",
      "",
    ],
  ],
  "Dor Osteomuscular (leve; parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
  ],
  "Dor Osteomuscular (intensa; parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
    [
      "Codeína 30mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 08 horas, se dor que não melhora mesmo após 30 minutos de uso de analgésico simples.",
      "",
    ],
  ],
  "Dor Neuropática (dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, intercalado com dipirona.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
    [
      "Codeína 30mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 08 horas, se dor que não melhora mesmo após 30 minutos de uso de analgésico simples.",
      "",
    ],
    [
      "Gabapentina 300mg",
      "Via Oral",
      "60 cps",
      "Tomar 01cp a cada noite, 30min antes de dormir.",
      "",
    ],
  ],
  "Dor Neuropática (parac)": [
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Ciclobenzaprina 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite, 30min antes de dormir, por 01 semana.",
      "",
    ],
    [
      "Codeína 30mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 08 horas, se dor que não melhora mesmo após 30 minutos de uso de analgésico simples.",
      "",
    ],
    [
      "Gabapentina 300mg",
      "Via Oral",
      "60 cps",
      "Tomar 01cp a cada noite, 30min antes de dormir.",
      "",
    ],
  ],
  "Herpes Zóster (adulto)": [
    [
      "Aciclovir 400mg",
      "Via Oral",
      "70 cps",
      "Tomar 02cps a cada 04 horas por 07 dias.",
      "Pular a dose da madrugada.",
    ],
    [
      "Aciclovir 200mg",
      "Via Oral",
      "140 cps",
      "Tomar 04cps a cada 04 horas por 07 dias.",
      "Pular a dose da madrugada.",
    ],
    [
      "Omeprazol 20mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas.",
      "Tomar cada cp 30min antes da refeição (café-da-manhã e janta).",
    ],
    [
      "Hidróxido de Alumínio 60mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 06 horas, se queimação no estômago.",
      "",
    ],
    [
      "Pregabalina 75mg",
      "Via Oral",
      "180 cps",
      "Tomar 01cp a cada 12 horas por 03 meses.",
      "Caso persista a dor mesmo após os 03 meses de uso, buscar aconselhamento junto a neurologista ou médico especializado em dor.",
    ],
  ],
  "Herpes Zóster (idoso)": [
    [
      "Aciclovir 400mg",
      "Via Oral",
      "140 cps",
      "Tomar 02cps a cada 04 horas por 07 dias.",
      "Pular a dose da madrugada.",
    ],
    [
      "Aciclovir 200mg",
      "Via Oral",
      "140 cps",
      "Tomar 04cps a cada 04 horas por 07 dias.",
      "Pular a dose da madrugada.",
    ],
    [
      "Omeprazol 20mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 12 horas.",
      "Tomar cada cp 30min antes da refeição (café-da-manhã e janta).",
    ],
    [
      "Hidróxido de Alumínio 60mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 06 horas, se queimação no estômago.",
      "",
    ],
    [
      "Pregabalina 75mg",
      "Via Oral",
      "90 cps",
      "Tomar 01cp a cada 01 dia por 03 meses.",
      "Caso persista a dor mesmo após os 03 meses de uso, buscar aconselhamento junto a neurologista ou médico especializado em dor.",
    ],
  ],
  "Dispepsia": [
    [
      "Omeprazol 20mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 12 horas (30min antes dos café-da-manhã e janta) por 03 meses.",
      "",
    ],
    [
      "Domperidona 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 03 meses.",
      "",
    ],
    [
      "Hidróxido de Alumínio 60mg/mL",
      "Via Oral",
      "",
      "Tomar 20mL a cada 06 horas, se queimação no estômago ou sensação de refluxo ou azia.",
      "",
    ],
  ],
  "Enxaqueca (+dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 05 dias.",
      "",
    ],
    [
      "Dipirona 1.000mg",
      "Via Oral",
      "",
      "Tomar 02cps a cada 06 horas, se dor ou antes de crise de enxaqueca.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor, intercalado com dipirona.",
      "",
    ],
    [
      "Metoclopramida 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se crise de enxaqueca ou enjôos.",
      "",
    ],
    [
      "Sumatriptana 50mg",
      "Via Oral",
      "",
      "Tomar 01 cp se crise de enxaqueca e esperar 30 minutos. Caso não apresente melhora, tente mais 01 cp e aguarde mais 30 minutos. Se, após a 01 hora total, não apresentar melhora da crise de enxaqueca, buscar atendimento médico.",
      "",
    ],
  ],
  "Enxaqueca (-dip)": [
    [
      "Ibuprofeno 400mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas por 05 dias.",
      "",
    ],
    [
      "Paracetamol 750mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor.",
      "",
    ],
    [
      "Metoclopramida 10mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 08 horas, se crise de enxaqueca ou enjôos.",
      "",
    ],
    [
      "Sumatriptana 50mg",
      "Via Oral",
      "",
      "Tomar 01 cp se crise de enxaqueca e esperar 30 minutos. Caso não apresente melhora, tente mais 01 cp e aguarde mais 30 minutos. Se, após a 01 hora total, não apresentar melhora da crise de enxaqueca, buscar atendimento médico.",
      "",
    ],
  ],
  "Xeratose": [
    [
      "Hidratante Corporal Neutrogena Body Care Intensive",
      "Via Tópica",
      "",
      "Aplicar quantidade generosa à toda a pele a cada pelo menos 12 horas.",
      "(A marca de hidratante acima é posta meramente como sugestão, podendo ser substituída por qualquer hidratante corporal sem fragância, sem corantes e sem remédios.)",
    ],
    [
      "Dexclorferinamina 0,4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas, se coceira.",
      "",
    ],
  ],
  "Dermatite Seborreica": [
    [
      "Cetoconazol Xampu 20mg/mL",
      "Via Tópica",
      "",
      "Lavar cabelo com este xampu, deixá-lo agindo por 15 a 20min, enxaguar e então lavar cabelo com xampu (vide abaixo). Repetir este processo todo dia por 01 mês.",
      "NÃO USAR condicionadores, óleos capilares ou produtos que apliquem oleosidade ao cabelo. EVITAR produtos capilares \"2 em 1\" e semelhantes. DAR PREFERÊNCIA a xampus anticaspa ou adstringentes.",
    ],
    [
      "Clobetasol Loção Capilar 0,05%",
      "Via Tópica",
      "",
      "Aplicar fina camada em couro cabeludo até a cada 12 horas, se irritação ou coceira.",
      "",
    ],
    [
      "Dexclorferinamina 0,4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas, se coceira.",
      "",
    ],
  ],
  "Escabiose": [
    [
      "Ivermectina 06mg",
      "Via Oral",
      "",
      "Tomar 02cps hoje e mais 02cps em 07 dias.",
      "A cada tomada de ivermectina, lavar todas as roupas de cama, mesa, banho e corpo em água quente ou, caso não seja possível lavar em água quente, passar a ferro após lavar.",
    ],
    [
      "Dexclorferinamina 0,4mg/mL",
      "Via Oral",
      "",
      "Tomar 10mL a cada 08 horas, se coceira.",
      "",
    ],
  ],
  "Angina": [
    [
      "Isossorbida 05mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada 06 horas, se dor no peito.",
      "",
    ],
    [
      "Ácido Acetilsalicílico 100mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada tarde.",
      "",
    ],
    [
      "Clopidogrel 75mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada tarde, junto do ác. acetilsalicílico.",
      "",
    ],
    [
      "Atorvastatina 40mg",
      "Via Oral",
      "",
      "Tomar 01cp a cada noite.",
      "",
    ],
  ],
  "PEP": [
    [
      "Lamivudina + Tenofovir 300+300mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 24 horas por 30 dias.",
      "Tomar junto do dolutegravir.",
    ],
    [
      "Dolutegravir 50mg",
      "Via Oral",
      "30 cps",
      "Tomar 01cp a cada 24 horas por 30 dias.",
      "Tomar junto de lamivudina+tenofovir.",
    ],
  ],
  "Tramadol IV": [
    [
      "Tramadol 100mg/02mL",
      "Via Intravenosa",
      "01 amp",
      "Aplicar 01 amp em DOSE ÚNICA.",
      ""
    ]
  ],
  "Morf IV": [
    [
      "Morfina 10mg/mL",
      "Via Intravenosa",
      "01 amp",
      "Aplicar 01 amp em DOSE ÚNICA.",
      ""
    ]
  ],
  "Haloperidol IM": [
    [
      "Haloperidol 05mg/mL",
      "Via Intramuscular",
      "01 amp",
      "Aplicar 01 amp em DOSE ÚNICA.",
      ""
    ]
  ],
  "Diazepam IV": [
    [
      "Diazepam 10mg/02mL",
      "Via Intravenosa",
      "01 amp",
      "Aplicar 01 amp em DOSE ÚNICA.",
      ""
    ]
  ],
  "Ceftriaxona PEC": [
    [
      "Ceftriaxona 01g/amp",
      "Via Intravenosa",
      "2X amp",
      "Diluir 02g (02 ampolas) em 100mL de SF 0,9% e infundir em 30min, a cada 24 horas, por X dias",
      "Autorizo administração de ceftriaxona por vias IM ou SC na inviabilidade de via IV."
    ]
  ],
};

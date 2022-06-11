$(document).ready(function() {
  new ClipboardJS(".copybtn");

  var med_list = [
    "Abacavir (Sulfato) 20mg/mL",
    "Abacavir (Sulfato) 300mg",
    "Abiraterona (Acetato) 250mg",
    "Abiraterona (Acetato) 500mg",
    "Acalabrutinibe 100mg",
    "Acebrofilina 5mg/mL",
    "Acebrofilina 10mg/mL",
    "Acebrofilina 5mg/mL",
    "Aceclofenaco 100mg",
    "Aceclofenaco 15mg/g",
    "Acetato de Fluormetolona 1mg/mL",
    "Acetato de Glatiramer 20mg/mL",
    "Acetato de Glatiramer 40mg/mL",
    "Acetazolamida 250mg",
    "Acetilcisteína 100mg",
    "Acetilcisteína 200mg",
    "Acetilcisteína 600mg",
    "Acetilcisteína 11,5mg/mL",
    "Acetilcisteína 20mg/mL",
    "Acetilcisteína 40mg/mL",
    "Acetilcisteína 600mg",
    "Acetilcisteína 100mg/mL",
    "Acetilcisteína 200mg",
    "Aciclovir 200mg",
    "Aciclovir 250mg/10mL",
    "Aciclovir 50mg/g",
    "Aciclovir 400mg",
    "Ácido Acetilsalicílico 500mg",
    "Ácido Acetilsalicílico 500mg",
    "Ácido Acetilsalicílico 100mg",
    "Ácido Acetilsalicílico 300mg",
    "Ácido Acetilsalicílico 100mg",
    "Ácido Acetilsalicílico 81mg",
    "Ácido Carglúmico 200mg",
    "Ácido Tióctico 600mg",
    "Ácido Ursodesoxicólico 50mg",
    "Ácido Ursodesoxicólico 150mg",
    "Ácido Ursodesoxicólico 300mg",
    "Ácido Valpróico 250mg",
    "Acitretina 10mg",
    "Acitretina 25mg",
    "Adapaleno 1,0mg/g",
    "Adapaleno 3,0mg/g",
    "Adapaleno 1,0mg/g",
    "Adapaleno 1mg/g",
    "Agomelatina 25mg",
    "Albendazol 200mg",
    "Albendazol 400mg",
    "Albendazol 40mg/mL",
    "Alcaftadina 2,5mg/mL",
    "Alendronato Sódico 70mg",
    "Alfaestradiol 0,25mg/mL",
    "Alfentanila (Cloridrato) 544mcg/mL",
    "Alfuzosina (Cloridrato) 10mg",
    "Alisquireno (Hemifumarato) 150mg",
    "Alisquireno (Hemifumarato) 300mg",
    "Alopurinol 100mg",
    "Alopurinol 300mg",
    "Alprazolam 0,25mg",
    "Alprazolam 0,5mg",
    "Alprazolam 1mg",
    "Alprazolam 2mg",
    "Alprazolam 0,5mg",
    "Alprazolam 1,0mg",
    "Alprazolam 2,0mg",
    "Alprostadil 10mcg/mL",
    "Alprostadil 20mcg/mL",
    "Alprostadil 20mcg",
    "Alprostadil 500mcg/mL",
    "Amantadina (Cloridrato) 100mg",
    "Ambrisetana 5mg",
    "Ambrisetana 10mg",
    "Ambroxol (Cloridrato) 3mg/mL",
    "Ambroxol (Cloridrato) 6mg/mL",
    "Ambroxol (Cloridrato) 7,5mg/mL",
    "Ambroxol (Cloridrato) 75mg",
    "Amicacina (Sulfato) 50mg/mL",
    "Amicacina (Sulfato) 125mg/mL",
    "Amicacina (Sulfato) 250mg/mL",
    "Aminofilina 24mg/mL",
    "Aminofilina 100mg",
    "Aminofilina 200mg",
    "Amiodarona (Cloridrato) 100mg",
    "Amiodarona (Cloridrato) 200mg",
    "Amiodarona (Cloridrato) 50mg/mL",
    "Amisulprida 50mg",
    "Amisulprida 200mg",
    "Amitriptilina (Cloridrato) 25mg",
    "Amitriptilina (Cloridrato) 75mg",
    "Amitriptilina (Cloridrato) 10mg",
    "Amorolfina 50mg/mL",
    "Amoxicilina 500mg",
    "Amoxicilina 125mg/5mL",
    "Amoxicilina 250mg/5mL",
    "Amoxicilina 500mg/5mL",
    "Amoxicilina 400mg/5mL",
    "Amoxicilina 875mg",
    "Ampicilina 500mg",
    "Ampicilina Sódica 1g",
    "Anagrelida (Cloridrato) 0,5mg",
    "Anastrozol 1mg",
    "Anfotericina B 5mg/mL",
    "Anfotericina B (Lipossomal) 50mg/12mL",
    "Anidulafungina 100mg/30mL",
    "Anlodipino (Besilato) 5,0mg",
    "Anlodipino (Besilato) 10mg",
    "Anlodipino (Besilato) 2,5mg",
    "Apixabana 2,5mg",
    "Apixabana 5mg",
    "Apremilaste 10mg",
    "Apremilaste 20mg",
    "Apremilaste 30mg",
    "Aripiprazol 10mg",
    "Aripiprazol 15mg",
    "Aripiprazol 20mg",
    "Aripiprazol 30mg",
    "Aripiprazol 1mg/mL",
    "Aripiprazol 20mg/mL",
    "Armodafinila 150mg",
    "Armodafinila 250mg",
    "Atazanavir (Sulfato) 100mg",
    "Atazanavir (Sulfato) 150mg",
    "Atazanavir (Sulfato) 200mg",
    "Atazanavir (Sulfato) 300mg",
    "Atazanavir (Sulfato) 50mg/1,5g",
    "Atenolol 25mg",
    "Atenolol 50mg",
    "Atenolol 100mg",
    "Atorvastatina Cálcica 10mg",
    "Atorvastatina Cálcica 20mg",
    "Atorvastatina Cálcica 40mg",
    "Atorvastatina Cálcica 80mg",
    "Atosibano (Acetato) 7,5mg/mL",
    "Atosibano (Acetato) 7,5mg/mL",
    "Atracúrio (Besilato) 10mg/mL",
    "Atropina (Sulfato) 0,25mg/mL",
    "Atropina (Sulfato) 0,5mg/mL",
    "Axetilcefuroxima 250mg/5mL",
    "Axetilcefuroxima 250mg",
    "Axetilcefuroxima 500mg",
    "Axetilcefuroxima 250mg",
    "Axetilcefuroxima 500mg",
    "Axitinibe 1mg",
    "Axitinibe 5mg",
    "Azacitidina 100mg/4mL",
    "Azatioprina 50mg",
    "Ácido Azelaico 150mg/g",
    "Ácido Azelaico 200mg/g",
    "Azelastina (Cloridrato) 0,9pcc",
    "Azitromicina Di-Hidratada 200mg/5mL",
    "Azitromicina Di-Hidratada 500mg",
    "Azitromicina Di-Hidratada 500mg/4,8mL",
    "Azitromicina Di-Hidratada 1000mg",
    "Aztreonam 1000mg",
    "Baclofeno 10mg",
    "Bambuterol (Cloridrato) 1mg/mL",
    "Baricitinibe 2mg",
    "Baricitinibe 4mg",
    "Beclometasona (Dipropionato) 50mcg/dose",
    "Beclometasona (Dipropionato) 100mcg/dose",
    "Beclometasona (Dipropionato) 200mcg/dose",
    "Beclometasona (Dipropionato) 250mcg/dose",
    "Beclometasona (Dipropionato) 50mcg/dose",
    "Beclometasona (Dipropionato) 100mcg/dose",
    "Beclometasona (Dipropionato) 200mcg/dose",
    "Beclometasona (Dipropionato) 250mcg/dose",
    "Beclometasona (Dipropionato) 50mcg/dose",
    "Beclometasona (Dipropionato) 100mcg/dose",
    "Beclometasona (Dipropionato) 200mcg/dose",
    "Beclometasona (Dipropionato) 250mcg/dose",
    "Beclometasona (Dipropionato) 100mcg/dose",
    "Beclometasona (Dipropionato) 50mcg/mg",
    "Benazepril (Cloridrato) 5mg",
    "Benazepril (Cloridrato) 10mg",
    "Bendamustina (Cloridrato) 25mg",
    "Bendamustina (Cloridrato) 100mg",
    "Benfotiamina 150mg",
    "Benzidamina (Cloridrato) 1,5mg/mL",
    "Benzidamina (Cloridrato) 1,5mg/mL",
    "Benzidamina (Cloridrato) 3mg",
    "Benzidamina (Cloridrato) 5mg/g",
    "Benzilpenicilina  Benzatina 1.200.000UI",
    "Benzilpenicilina  Benzatina 600.000UI",
    "Benzoato de Alogliptina 12,5mg",
    "Benzoato de Alogliptina 25mg",
    "Benzoilmetronidazol 40mg/mL",
    "Betaistina (Dicloridrato) 8mg",
    "Betaistina (Dicloridrato) 16mg",
    "Betaistina (Dicloridrato) 24mg",
    "Betaistina (Dicloridrato) 32mg",
    "Betaistina (Dicloridrato) 48mg",
    "Betametasona 0,1mg/mL",
    "Betametasona 0,5mg",
    "Betametasona 2mg",
    "Betametasona (Dipropionato) 0,64mg/g",
    "Betametasona (Dipropionato) 0,64mg/g",
    "Betametasona (Dipropionato) 0,64mg/mL",
    "Betametasona (Fosfato Dissódico) 4mg/mL",
    "Betametasona (Valerato) 1mg/g",
    "Betametasona (Valerato) 1mg/g",
    "Betametasona (Valerato) 1mg/g",
    "Betametasona (Valerato) 1mg/g",
    "Betaxolol (Cloridrato) 5,0mg/mL",
    "Betaxolol (Cloridrato) 2,5mg/mL",
    "Bezafibrato 200mg",
    "Bezafibrato 400mg",
    "Bicalutamida 50mg",
    "Bilastina 20mg",
    "Bilastina 2,5mg/mL",
    "Bimatoprosta 0,3mg/mL",
    "Bimatoprosta 0,1mg/mL",
    "Bimatoprosta 0,3mg/mL",
    "Biperideno (Cloridrato) 2mg",
    "Biperideno (Cloridrato) 4mg",
    "Bisacodil 5mg",
    "Bisoprolol (Hemifumarato) 1,25mg",
    "Bisoprolol (Hemifumarato) 2,5mg",
    "Bisoprolol (Hemifumarato) 5mg",
    "Bisoprolol (Hemifumarato) 10,0mg",
    "Bleomicina (Sulfato) 15UI",
    "Bortezomibe 1mg",
    "Bortezomibe 3,5mg",
    "Bosentana 62,5mg",
    "Bosentana 125mg",
    "Brexpiprazol 0,25mg",
    "Brexpiprazol 0,50mg",
    "Brexpiprazol 1mg",
    "Brexpiprazol 2mg",
    "Brexpiprazol 3mg",
    "Brimonidina (Tartarato) 2mg/mL",
    "Brimonidina (Tartarato) 1,5mg/mL",
    "Brimonidina (Tartarato) 1mg/mL",
    "Brinzolamida 10mg/mL",
    "Brivaracetam 10mg",
    "Brivaracetam 25mg",
    "Brivaracetam 50mg",
    "Brivaracetam 75mg",
    "Brivaracetam 100mg",
    "Bromazepam 2,5mg/mL",
    "Bromazepam 3,0mg",
    "Bromazepam 6,0mg",
    "Brometo de Glicopirrônio 50mcg",
    "Brometo de Pancurônio 2mg/mL",
    "Bromexina (Cloridrato) 0,8mg/mL",
    "Bromexina (Cloridrato) 1,6mg/mL",
    "Bromexina (Cloridrato) 2,0mg/mL",
    "Bromidrato de Galantamina 8,0mg",
    "Bromidrato de Galantamina 16mg",
    "Bromidrato de Galantamina 24mg",
    "Bromocriptina (Mesilato) 2,5mg",
    "Bromoprida 10mg",
    "Bromoprida 4mg/mL",
    "Bromoprida 5mg/mL",
    "Buclizina (Dicloridrato) 25mg",
    "Budesonida 32mcg/dose",
    "Budesonida 64mcg/dose",
    "Budesonida 3mg",
    "Budesonida 2,3mg",
    "Budesonida 0,25mg/mL",
    "Budesonida 0,50mg/mL",
    "Budesonida 100mcg/dose",
    "Budesonida 200mcg",
    "Budesonida 400mcg",
    "Budesonida 50mcg/dose",
    "Budesonida 100mcg/dose",
    "Buflomedil (Cloridrato) 150mg",
    "Buflomedil (Cloridrato) 300 mg",
    "Bupivacaína (Cloridrato) 5mg/mL",
    "Buprenorfina 5mcg/h",
    "Buprenorfina 10mcg/h",
    "Buprenorfina 20mcg/h",
    "Buprenorfina 35mcg/h",
    "Buprenorfina 52,5mcg/h",
    "Buprenorfina 70mcg/h",
    "Bupropiona (Cloridrato) 150mg",
    "Bupropiona (Cloridrato) 300mg",
    "Bupropiona (Cloridrato) - Indicação Antidepressivo 150mg",
    "Bupropiona (Cloridrato) - Indicação Antitabagismo 150mg",
    "Buspirona (Cloridrato) 5mg",
    "Buspirona (Cloridrato) 10mg",
    "Butenafina (Cloridrato) 10mg/g",
    "Butoconazol (Nitrato) 20mg/g",
    "Cabazitaxel 40mg/mL",
    "Cabergolina 0,5mg",
    "Calcipotriol 50mcg/g",
    "Calcitonina (Sintética de Salmão) 200UI/dose",
    "Calcitriol 1mcg/mL",
    "Canaglifozina Anidra 100mg",
    "Canaglifozina Anidra 300mg",
    "Candesartana Cilexetila 8mg",
    "Candesartana Cilexetila 16mg",
    "Candesartana Cilexetila 32mg",
    "Capecitabina 150mg",
    "Capecitabina 500mg",
    "Captopril 25mg",
    "Captopril 50mg",
    "Captopril 12,5mg",
    "Carbamazepina 20mg/mL",
    "Carbamazepina 200mg",
    "Carbamazepina 400mg",
    "Carbamazepina 200mg",
    "Carbamazepina 400mg",
    "Carbocisteína 20mg/mL",
    "Carbocisteína 50mg/mL",
    "Carboplatina 10mg/mL",
    "Carboplatina 150mg",
    "Carfilzomibe 60mg",
    "Carvedilol 3,125mg",
    "Carvedilol 6,25mg",
    "Carvedilol 12,5mg",
    "Carvedilol 25mg",
    "Caspofungina (Acetato) 50mg",
    "Caspofungina (Acetato) 70mg",
    "Cefadroxila 500mg",
    "Cefadroxila 50mg/mL",
    "Cefadroxila 100mg/mL",
    "Cefalexina Monoidratada 500mg",
    "Cefalexina Monoidratada 50mg/mL",
    "Cefalexina Monoidratada 50mg/mL",
    "Cefalexina Monoidratada 1,5g/15mL (100mg/mL)",
    "Cefalexina Monoidratada 100mg/mL",
    "Cefalexina Monoidratada 500mg",
    "Cefalexina Monoidratada 1000mg",
    "Cefalotina Sódica (Tamponada) 1000mg",
    "Cefazolina Sódica 250mg",
    "Cefazolina Sódica 500mg",
    "Cefazolina Sódica 1.000mg/100mL",
    "Cefotaxima Sódica 1.000mg",
    "Ceftarolina Fosamila 600mg",
    "Ceftriaxona Dissódica Hemieptaidratada 500mg/5mL",
    "Ceftriaxona Dissódica Hemieptaidratada 1.000mg/10mL",
    "Ceftriaxona Dissódica Hemieptaidratada 500mg/2mL",
    "Ceftriaxona Dissódica Hemieptaidratada 1.000mg/3,5mL",
    "Cefuroxima Sódica 750mg",
    "Celecoxibe 100mg",
    "Celecoxibe 200mg",
    "Cetirizina (Dicloridrato) 10mg",
    "Cetirizina (Dicloridrato) 1mg/mL",
    "Cetirizina (Dicloridrato) 10mg",
    "Cetoconazol 200mg",
    "Cetoconazol 20mg/g",
    "Cetoconazol 20mg/g",
    "Cetoprofeno 150mg",
    "Cetoprofeno 100mg",
    "Cetoprofeno 20mg/mL",
    "Cetoprofeno 25mg",
    "Cetoprofeno 50mg",
    "Cetoprofeno 1mg/mL",
    "Cetoprofeno 100mg",
    "Cetoprofeno 50mg/mL",
    "Cetoprofeno 100mg/2mL",
    "Cetoprofeno 200mg",
    "Cetoprofeno (Lisinato) 160mg",
    "Cetoprofeno (Lisinato) 320mg",
    "Cetotifeno (Fumarato) 0,250 mg/mL",
    "Cetrorrelix (Acetato) 0,25mg",
    "Ciclesonida 50 mcg/dose",
    "Ciclesonida 80mcg/dose",
    "Ciclesonida 160mcg/dose",
    "Ciclobenzaprina (Cloridrato) 5mg",
    "Ciclobenzaprina (Cloridrato) 10mg",
    "Ciclobenzaprina (Cloridrato) 15mg",
    "Ciclofosfamida 20mg/mL",
    "Ciclopentolato (Cloridrato) 10mg/mL",
    "Ciclopirox 80mg/g",
    "Ciclopirox Olamina 10mg/g",
    "Ciclopirox Olamina 10mg/mL",
    "Ciclosporina 0,5mg/g",
    "Ciclosporina 50mg/mL",
    "Ciclosporina 100mg/mL",
    "Ciclosporina 25mg",
    "Ciclosporina 50mg",
    "Ciclosporina 100mg",
    "Ciclossilicato de Zircônio Sódico Hidratado 5g",
    "Ciclossilicato de Zircônio Sódico Hidratado 10g",
    "Cilazapril 1mg",
    "Cilazapril 2,5mg",
    "Cilazapril 5,0mg",
    "Cilostazol 50mg",
    "Cilostazol 100mg",
    "Cimetidina 150mg/mL",
    "Cinacalcete (Cloridrato) 30mg",
    "Cinacalcete (Cloridrato) 60mg",
    "Cinarizina 25mg",
    "Cinarizina 75mg",
    "Ciprofibrato 100mg",
    "Ciprofloxacino (Cloridrato) 250mg",
    "Ciprofloxacino (Cloridrato) 500mg",
    "Ciprofloxacino (Cloridrato) 3mg/mL",
    "Ciprofloxacino (Cloridrato) 3mg/mL",
    "Ciprofloxacino (Solução de Cloreto de Sódio) 2mg/mL",
    "Ciproterona (Acetato) 50mg",
    "Ciproterona (Acetato) 100mg",
    "Cisatracúrio (Besilato) 2mg/mL",
    "Cisatracúrio (Besilato) 5mg/mL",
    "Cisplatina 1mg/mL",
    "Cisplatina 0,5mg/mL",
    "Citalopram (Bromidrato) 20mg",
    "Citalopram (Bromidrato) 40mg",
    "Citarabina 100mg/mL",
    "Citrato de Cafeína 20mg/mL",
    "Cladribina 1mg/mL",
    "Claritromicina 50mg/mL",
    "Claritromicina 500mg/10mL",
    "Claritromicina 25mg/mL",
    "Claritromicina 500mg",
    "Claritromicina 500mg",
    "Clindamicina (Cloridrato) 300mg",
    "Clindamicina (Fosfato) 10mg/mL",
    "Clindamicina (Fosfato) 150mg/mL",
    "Clobazam 10mg",
    "Clobazam 20 mg",
    "Clobetasol (Propionato) 0,5mg/g",
    "Clobetasol (Propionato) 0,5mg/g",
    "Clobetasol (Propionato) 0,5mg/g",
    "Clobutinol (Cloridrato) 4mg/mL",
    "Clomipramina (Cloridrato) 25 mg",
    "Clomipramina (Cloridrato) 75mg",
    "Clonazepam 0,5mg",
    "Clonazepam 2,0mg",
    "Clonazepam 0,25mg",
    "Clonazepam 2,5mg/mL",
    "Clonidina (Cloridrato) 100mcg",
    "Clonidina (Cloridrato) 150mcg",
    "Clonidina (Cloridrato) 200mcg",
    "Clonidina (Cloridrato) 150mcg/mL",
    "Clonixinato de Lisina 125mg",
    "Cloperastina (Fendizoato) 35,4mg/mL",
    "Cloperastina (Fendizoato) 3,54mg/mL",
    "Clopidogrel (Bissulfato) 75 mg",
    "Clorambucila 2mg",
    "Cloranfenicol (Levógiro) 500mg",
    "Cloranfenicol (Succinato Sódico) 1g",
    "Cloridrato de Aminolevulinato de Metila 160mg/g",
    "Cloridrato de Amorolfina 2,5mg/g",
    "Cloridrato de Cefepima 1g",
    "Cloridrato de Cefepima 2g",
    "Cloridrato de Epinastina 0,5mg/mL",
    "Cloridrato de Oxicodona 10mg",
    "Cloridrato de Oxicodona 20mg",
    "Cloridrato de Oxicodona 40mg",
    "Cloridrato de Oxicodona 10mg/mL",
    "Cloridrato de Palonosetrona 0,05mg/mL",
    "Cloridrato de Sibutramina 10mg",
    "Cloridrato de Sibutramina 15mg",
    "Cloridrato de Valganciclovir 450mg",
    "Clorpromazina (Cloridrato) 25mg",
    "Clorpromazina (Cloridrato) 100mg",
    "Clorpromazina (Cloridrato) 40mg/mL",
    "Clorpromazina (Cloridrato) 5,0mg/mL",
    "Clorpropamida 250mg",
    "Clortalidona 12,5mg",
    "Clortalidona 25mg",
    "Clortalidona 50mg",
    "Clotrimazol 10mg/g",
    "Clotrimazol 10mg/g",
    "Clotrimazol 10mg/g",
    "Clotrimazol 10mg/g",
    "Clotrimazol 20mg/g",
    "Clotrimazol 100mg",
    "Clotrimazol 500mg",
    "Clozapina 100mg",
    "Clozapina 25mg",
    "Cobimetinibe (Hemifumarato) 20mg",
    "Codeína (Fosfato) 30mg",
    "Codeína (Fosfato) 60mg",
    "Codeína (Fosfato) 3mg/mL",
    "Codeína (Fosfato) 30mg/mL",
    "Codergocrina (Mesilato) 4,5mg/1,5mL",
    "Colchicina 0,5mg",
    "Colchicina 1mg",
    "Colestiramina 4g/90mL",
    "Colistimetato Sódico 150mg colistina base/2mL",
    "Colistimetato Sódico 250.000UI/mL",
    "Colistimetato Sódico 500.000UI/mL",
    "Crizotinibe 250mg",
    "Crizotinibe 200mg",
    "Cromoglicato Dissódico 20mg/g",
    "Cromoglicato Dissódico 40mg/g",
    "Cromoglicato Dissódico 20mg/mL",
    "Cromoglicato Dissódico 40mg/mL",
    "Dabigatrana (Etexilato) 75mg",
    "Dabigatrana (Etexilato) 110mg",
    "Dabigatrana (Etexilato) 150 mg",
    "Dacarbazina 10mg/mL",
    "Dactinomicina 0,5mg/1,1mL",
    "Danazol 100mg",
    "Danazol 200mg",
    "Dantroleno Sódico 20mg",
    "Dapaglifozina 5mg",
    "Dapaglifozina 10mg",
    "Daptomicina 500mg/10mL",
    "Darifenacina (Bromidrato) 7,5mg",
    "Darifenacina (Bromidrato) 15,0mg",
    "Darunavir 75mg",
    "Darunavir 150mg",
    "Darunavir 300mg",
    "Darunavir 600mg",
    "Darunavir 800mg",
    "Dasatinibe 20mg",
    "Dasatinibe 50mg",
    "Dasatinibe 100mg",
    "Decitabina 50mg/10mL",
    "Deferasirox 125mg",
    "Deferasirox 250mg",
    "Deferasirox 500mg",
    "Deferoxamina (Mesilato) 500mg/5mL",
    "Deflazacorte 6,0mg",
    "Deflazacorte 30mg",
    "Degarelix (Acetato) 80mg/4,2mL",
    "Degarelix (Acetato) 120mg/3,0 mL",
    "Deslanosídeo 0,2mg/mL",
    "Desloratadina 0,5mg/mL",
    "Desloratadina 5mg",
    "Desloratadina 1,25mg/mL",
    "Desmopressina (Acetato) 0,1mg/mL",
    "Desmopressina (Acetato) 0,1mg/mL",
    "Desmopressina (Acetato) 0,1mg",
    "Desmopressina (Acetato) 0,2mg",
    "Desmopressina (Acetato) 4mcg/mL",
    "Desogestrel 75mcg",
    "Desonida 0,500mg/g",
    "Desonida 0,5mg/g",
    "Desonida 0,5mg/g",
    "Desoximetasona 2,5mg/g",
    "Desvenlafaxina (Succinato Monoidratado) 75,87mg (50mg)",
    "Desvenlafaxina (Succinato Monoidratado) 151,77 mg (100mg)",
    "Dexametasona 0,1mg/mL",
    "Dexametasona 0,5mg",
    "Dexametasona 0,75mg",
    "Dexametasona 4mg",
    "Dexametasona 1mg/mL",
    "Dexametasona 1mg/g",
    "Dexametasona (Acetato) 1mg/g",
    "Dexametasona (Fosfato Dissódico) 4mg/mL",
    "Dexametasona (Fosfato Dissódico) 2mg/mL",
    "Dexclorfeniramina (Maleato) 10mg/g",
    "Dexclorfeniramina (Maleato) 2mg",
    "Dexclorfeniramina (Maleato) 6,0mg",
    "Dexclorfeniramina (Maleato) 0,4mg/mL",
    "Dexclorfeniramina (Maleato) 2,8mg/mL",
    "Dexlansoprazol 30mg",
    "Dexlansoprazol 60mg",
    "Dexmedetomidina(Cloridrato) 100mcg/mL",
    "Dextrometorfano (Bromidrato) 3mg/mL",
    "Diazepam 5mg",
    "Diazepam 10mg",
    "Diazepam 5mg/mL",
    "Diclofenaco (Ácido) 44,3mg",
    "Diclofenaco (Colestiramina) 140mg",
    "Diclofenaco (Dietilamônio) 11,6mg",
    "Diclofenaco (Dietilamônio) 11,6mg/g",
    "Diclofenaco (Dietilamônio) 23,2mg/g",
    "Diclofenaco Potássico 12,5mg",
    "Diclofenaco Potássico 50mg",
    "Diclofenaco Sódico 10mg/g",
    "Diclofenaco Sódico 100mg",
    "Diclofenaco Sódico 25mg/mL",
    "Diclofenaco Sódico 50mg",
    "Diclofenaco Sódico 75mg",
    "Diclofenaco Sódico 150mg",
    "Diclofenaco Sódico 1mg/mL",
    "Dicloridrato de Sapropterina 100mg",
    "Didrogesterona 10mg",
    "Dienogeste 2mg",
    "Difosfato de Primaquina 15mg",
    "Diltiazem (Cloridrato) 30mg",
    "Diltiazem (Cloridrato) 60mg",
    "Diltiazem (Cloridrato) 180mg",
    "Diltiazem (Cloridrato) 240mg",
    "Diltiazem (Cloridrato) 90mg",
    "Diltiazem (Cloridrato) 120mg",
    "Dimaleato de Afatinibe 30mg",
    "Dimaleato de Afatinibe 40mg",
    "Dimenidrinato 100mg",
    "Dimenidrinato 2,5mg/mL",
    "Dimenidrinato 25mg",
    "Dimenidrinato 50mg",
    "Dipiridamol 5mg/mL",
    "Dipirona Sódica Monoidratada 300mg",
    "Dipirona Sódica Monoidratada 500mg",
    "Dipirona Sódica Monoidratada 1.000mg",
    "Dipirona Sódica Monoidratada 500mg/mL",
    "Dipirona Sódica Monoidratada 50mg/mL",
    "Dipirona Sódica Monoidratada 500mg/mL",
    "Dipirona Sódica Monoidratada 1g",
    "Divalproato de Sódio 250mg",
    "Divalproato de Sódio 500mg",
    "Divalproato de Sódio 250mg",
    "Divalproato de Sódio 500mg",
    "Divalproato de Sódio 125mg",
    "Dobesilato de Cálcio 500mg",
    "Dobutamina (Cloridrato) 12,5mg/mL",
    "Docetaxel (Triidratado) 20mg/mL",
    "Dolutegravir Sódico 10mg",
    "Dolutegravir Sódico 25mg",
    "Dolutegravir Sódico 50mg",
    "Domperidona 10mg",
    "Domperidona 1mg/mL",
    "Donepezila (Cloridrato) 5mg",
    "Donepezila (Cloridrato) 10 mg",
    "Dopamina (Cloridrato) 5mg/mL",
    "Dorzolamida (Cloridrato) 20mg/mL",
    "Doxazosina (Mesilato) 2mg",
    "Doxazosina (Mesilato) 4mg",
    "Doxazosina (Mesilato) 4,0mg",
    "Doxiciclina (Cloridrato) 100mg",
    "Doxiciclina Monoidratada 100mg",
    "Doxorrubicina (Cloridrato) 10mg",
    "Doxorrubicina (Cloridrato) 2mg/mL",
    "Doxorrubicina (Cloridrato) 50mg",
    "Droperidol 2,5mg/mL",
    "Dropropizina 1,5mg/mL",
    "Dropropizina 3mg/mL",
    "Dropropizina 30mg/mL",
    "Drospirenona 4mg",
    "Duloxetina (Cloridrato) 30mg",
    "Duloxetina (Cloridrato) 60mg",
    "Dutasterida 0,5mg",
    "Ebastina 1mg/mL",
    "Ebastina 10mg",
    "Edoxabana (Tosilato) 15mg",
    "Edoxabana (Tosilato) 30mg",
    "Edoxabana (Tosilato) 60mg",
    "Efavirenz 600mg",
    "Efedrina (Sulfato) 50mg/mL",
    "Eltrombopague Olamina 25mg",
    "Eltrombopague Olamina 50mg",
    "Empagliflozina 10mg",
    "Empagliflozina 25mg",
    "Enalapril (Maleato) 5mg",
    "Enalapril (Maleato) 10mg",
    "Enalapril (Maleato) 20mg",
    "Enflurano 1mL/mL",
    "Enfuvirtida 108mg/1,1mL (90mg/mL)",
    "Entacapona 200mg",
    "Entecavir 0,5mg",
    "Enzalutamida 40mg",
    "Epinastina (Cloridrato) 10mg",
    "Epinastina (Cloridrato) 20mg",
    "Epinastina (Cloridrato) 2mg/mL",
    "Epinefrina 1mg/mL",
    "Epirrubicina (Cloridrato) 2mg/mL",
    "Epirrubicina (Cloridrato) 10mg/5mL",
    "Epirrubicina (Cloridrato) 50mg/25mL",
    "Eribulina (Mesilato) 0,5mg/mL",
    "Eritromicina (Lactobionato) 1.000mg",
    "Erlotinibe (Cloridrato) 25mg",
    "Erlotinibe (Cloridrato) 100mg",
    "Erlotinibe (Cloridrato) 150mg",
    "Ertapeném Sódico 1g",
    "Escetamina (Cloridrato) 50mg/mL",
    "Escitalopram (Oxalato) 20mg/mL",
    "Escitalopram (Oxalato) 10mg",
    "Escitalopram (Oxalato) 15mg",
    "Escitalopram (Oxalato) 20mg",
    "Escopolamina (Butilbrometo) 10mg",
    "Escopolamina (Butilbrometo) 10mg/mL",
    "Escopolamina (Butilbrometo) 20mg/mL",
    "Esilato de Nintedanibe 100mg",
    "Esilato de Nintedanibe 150mg",
    "Esmolol (Cloridrato) 10mg/mL",
    "Esomeprazol Magnésio Triidratado 20mg",
    "Esomeprazol Magnésio Triidratado 40mg",
    "Esomeprazol Sódico 40mg",
    "Espiramicina 1,5MUI",
    "Espironolactona 25mg",
    "Espironolactona 50mg",
    "Espironolactona 100mg",
    "Estazolam 2mg",
    "Estradiol 1mg",
    "Estradiol 0,1PCC (1mg/g)",
    "Estradiol Hemi-Hidratado 0,1PCC (1mg/g)",
    "Estradiol Hemi-Hidratado 0,6mg/g",
    "Estradiol Hemi-Hidratado 1,6mg",
    "Estradiol Hemi-Hidratado 3,2mg",
    "Estradiol Hemi-Hidratado 6,4mg",
    "Estradiol Hemi-Hidratado 10,3mcg",
    "Estriol 1,0mg/g",
    "Estriol 1,0mg",
    "Estriol 2,0mg",
    "Eszopiclona 1mg",
    "Eszopiclona 2mg",
    "Eszopiclona 3mg",
    "Etionamida 250mg",
    "Etodolaco 200mg",
    "Etodolaco 300mg",
    "Etodolaco 400mg",
    "Etodolaco 500mg",
    "Etomidato 2mg/mL",
    "Etonogestrel 68mg",
    "Etoposídeo 20mg/mL",
    "Etoricoxib 60mg",
    "Etoricoxib 90mg",
    "Etravirina 100mg",
    "Everolimo 2,5mg",
    "Everolimo 5mg",
    "Everolimo 10mg",
    "Everolimo 0,5mg",
    "Everolimo 0,75mg",
    "Everolimo 1,0mg",
    "Exemestano 25mg",
    "Exenatida 250mcg/mL",
    "Ezetimiba 10mg",
    "Famotidina 40mg",
    "Fampridina 10mg",
    "Fanciclovir 125mg",
    "Fanciclovir 500mg",
    "Fenazopiridina (Cloridrato) 100mg",
    "Fenazopiridina (Cloridrato) 200mg",
    "Fenilbutazona Cálcica 200mg",
    "Fenitoína 100mg",
    "Fenitoína Sódica 50mg/mL",
    "Fenobarbital 40mg/mL",
    "Fenobarbital 50mg",
    "Fenobarbital 100mg",
    "Fenofibrato 200mg",
    "Fenofibrato 160mg",
    "Fenofibrato 250mg",
    "Fenoterol (Bromidrato) 5,0mg/mL",
    "Fenoterol (Bromidrato) 2mg/mL (100mcg/dose)",
    "Fenoterol (Bromidrato) 4mg/mL (200mcg/dose)",
    "Fentanila 2,1mg",
    "Fentanila 4,2mg",
    "Fentanila 8,4mg",
    "Fentanila 16,8mg",
    "Fentanila (Citrato) 50mcg/mL",
    "Fentanila (Citrato) 0,05mg/mL",
    "Fenticonazol (Nitrato) 0,02g/g",
    "Fenticonazol (Nitrato) 600mg",
    "Fenticonazol (Nitrato) 20mg/mL",
    "Fenticonazol (Nitrato) 0,02g/g",
    "Fexofenadina (Cloridrato) 30mg",
    "Fexofenadina (Cloridrato) 60mg",
    "Fexofenadina (Cloridrato) 120mg",
    "Fexofenadina (Cloridrato) 180mg",
    "Fexofenadina (Cloridrato) 6mg/mL",
    "Finasterida 1mg",
    "Finasterida 5mg",
    "Fingolimode (Cloridrato) 0,5mg",
    "Fluconazol 2mg/mL",
    "Fluconazol 50mg",
    "Fluconazol 100mg",
    "Fluconazol 150mg",
    "Fludarabina(Fosfato) 50mg",
    "Flumazenil 0,1mg/mL",
    "Flunitrazepam 1mg",
    "Fluormetolona 1mg/mL",
    "Fluormetolona 2,5mg/mL",
    "Fluoruracila 50mg/mL",
    "Fluoxetina 20mg/mL",
    "Fluoxetina 20mg",
    "Fluoxetina (Cloridrato) 20mg",
    "Flurbiprofeno 0,3mg/mL",
    "Flurbiprofeno 8,75mg",
    "Flutamida 250mg",
    "Fluticasona (Furoato) 27,5mcg/dose",
    "Fluticasona (Proprionato) 50mcg/dose",
    "Fluticasona (Proprionato) 50mcg/dose",
    "Fluticasona (Proprionato) 50mcg/dose",
    "Fluticasona (Proprionato) 250mcg/dose",
    "Flutrimazol 0,01g/g",
    "Flutrimazol 0,01g/mL",
    "Fluvastatina Sódica 80mg",
    "Formoterol (Fumarato) 12mcg",
    "Fosamprenavir (Cálcico) 50mg/mL",
    "Fosaprepitanto Dimeglumina 150mg",
    "Fotemustina 50mg/mL",
    "Fulvestranto 50mg/mL",
    "Fumarato Dimetila 120mg",
    "Fumarato Dimetila 240mg",
    "Furosemida 10mg/mL",
    "Furosemida 40mg",
    "Ácido Fusídico 20mg/g",
    "Gabapentina 300mg",
    "Gabapentina 400mg",
    "Gabapentina 600mg",
    "Ganciclovir Sódico 500mg",
    "Gatifloxacino 3mg/mL",
    "Gefitinibe 250mg",
    "Gemifloxacino (Mesilato) 320mg",
    "Gencitabina (Cloridrato) 200mg/5mL",
    "Gencitabina (Cloridrato) 1g/25mL",
    "Genfibrozila 600mg",
    "Genfibrozila 900mg",
    "Glibenclamina 5,0mg",
    "Gliclazida 30mg",
    "Gliclazida 60mg",
    "Glicosamina (Sulfato) 1,5g",
    "Glimepirida 1mg",
    "Glimepirida 2mg",
    "Glimepirida 3mg",
    "Glimepirida 4mg",
    "Glimepirida 6mg",
    "Glipizida 5mg",
    "Gliteritinibe (Hemifumarato) 40mg",
    "Gosserrelina (Acetato) 3,6mg",
    "Gosserrelina (Acetato) 10,8mg",
    "Granisetrona (Cloridrato) 1mg/mL",
    "Griseofulvina 500 mg",
    "Guaifenesina 6,667mg/mL",
    "Guaifenesina 13,3mg/mL",
    "Haloperidol 2mg/mL",
    "Haloperidol 1mg",
    "Haloperidol 5mg",
    "Haloperidol 5mg/mL",
    "Haloperidol (Decanoato) 50mg/mL",
    "Hidralazina (Cloridrato) 25mg",
    "Hidralazina (Cloridrato) 50mg",
    "Hidroclorotiazida 25mg",
    "Hidroclorotiazida 50mg",
    "Hidrocortisona (Acetato) 10mg/g",
    "Hidrocortisona (Butirato) 1mg/g",
    "Hidrocortisona (Butirato) 1mg/g",
    "Hidrocortisona (Succinato Sódico) 100mg",
    "Hidrocortisona (Succinato Sódico) 500mg",
    "Hidroxicloroquina (Sulfato) 400mg",
    "Hidroxizina (Dicloridrato) 2mg/mL",
    "Ibandronato de Sódio 150mg",
    "Ibrutinibe 140mg",
    "Ibuprofeno 30mg/mL",
    "Ibuprofeno 50mg/mL",
    "Ibuprofeno 100mg/mL",
    "Ibuprofeno 200mg",
    "Ibuprofeno 400mg",
    "Ibuprofeno 600mg",
    "Ibuprofeno 300mg",
    "Ibuprofeno 600mg",
    "Ibuprofeno 600mg",
    "Ibuprofeno Arginina 1155mg",
    "Ibuprofeno Arginina 770mg",
    "Icatibanto (Acetato) 10mg/mL",
    "Idarrubicina (Cloridrato) 5mg/5mL",
    "Idarrubicina (Cloridrato) 10mg/10mL",
    "Ifosfamida 40mg/mL",
    "Imatinib (Mesilato) 100mg",
    "Imatinib (Mesilato) 400mg",
    "Imipramina (Cloridrato) 10mg",
    "Imipramina (Cloridrato) 25mg",
    "Imiquimode 50mg/g",
    "Indacaterol (Maleato) 150mcg",
    "Indacaterol (Maleato) 300mcg",
    "Indapamida 2,5mg",
    "Indapamida 1,5mg",
    "Indinavir (Sulfato) 400mg",
    "Indometacina 25mg",
    "Indometacina 50mg",
    "Indometacina 100mg",
    "Ipratrópio (Brometo) 0,25mg/mL",
    "Ipratrópio (Brometo) 20 mcg/dose",
    "Irbesartana 150mg",
    "Irbesartana 300mg",
    "Irinotecano (Cloridrato Tri-Hidratado) 20mg/mL",
    "Isoconazol (Nitrato) 10mg/g",
    "Isoconazol (Nitrato) 600mg",
    "Isoconazol (Nitrato) 10mg/g",
    "Isoconazol (Nitrato) 10mg/mL",
    "Isoflurano 1mL/mL",
    "Isoniazida 100mg",
    "Isotretinoína 10mg",
    "Isotretinoína 20mg",
    "Isotretinoína 0,5mg/g",
    "Isotretinoína 0,5mg/g",
    "Itraconazol 100mg",
    "Ivabradina (Cloridrato) 5mg",
    "Ivabradina (Cloridrato) 7,5mg",
    "Ivermectina 6mg",
    "Ivermectina 10mg/g",
    "Lacidipino 4mg",
    "Lacosamida 50mg",
    "Lacosamida 100mg",
    "Lacosamida 150mg",
    "Lacosamida 200mg",
    "Lacosamida 10mg/mL",
    "Lacosamida 10mg/mL",
    "Lamivudina 10mg/mL",
    "Lamivudina 150mg",
    "Lamotrigina 25mg",
    "Lamotrigina 50mg",
    "Lamotrigina 100mg",
    "Lamotrigina 5mg",
    "Lamotrigina 25mg",
    "Lamotrigina 50mg",
    "Lamotrigina 100mg",
    "Lamotrigina 200mg",
    "Lansoprazol 15mg",
    "Lansoprazol 30mg",
    "Lapatinibe (Ditosilato) 250mg",
    "Latanoprosta 50mcg/mL",
    "Leflunomida 20mg",
    "Leflunomida 100mg",
    "Lenalidomida 2,5mg",
    "Lenalidomida 5mg",
    "Lenalidomida 10mg",
    "Lenalidomida 15mg",
    "Lenalidomida 20mg",
    "Lenalidomida 25mg",
    "Lenvatinibe (Mesilato) 4mg",
    "Lenvatinibe (Mesilato) 10mg",
    "Lercanidipino (Cloridrato) 10mg",
    "Lercanidipino (Cloridrato) 20mg",
    "Letrozol 2,5mg",
    "Leuprorrelina (Acetato) 5,0mg/mL",
    "Leuprorrelina (Acetato) 3,75mg/1mL",
    "Leuprorrelina (Acetato) 11,25mg/2mL",
    "Leuprorrelina (Acetato) 7,5mg",
    "Leuprorrelina (Acetato) 22,5mg",
    "Leuprorrelina (Acetato) 45mg",
    "Levamisol (Cloridrato) 80mg",
    "Levamisol (Cloridrato) 150mg",
    "Levanlodipino (Besiltato) 2,5mg",
    "Levanlodipino (Besiltato) 5mg",
    "Levetiracetam 250mg",
    "Levetiracetam 100mg/mL",
    "Levetiracetam 750mg",
    "Levetiracetam 500mg",
    "Levetiracetam 1.000mg",
    "Levetiracetam 500mg",
    "Levetiracetam 750mg",
    "Levobunolol (Cloridrato) 5mg/mL",
    "Levocetirizina (Dicloridrato) 5mg/mL",
    "Levocetirizina (Dicloridrato) 5mg",
    "Levofloxacino (Hemiidratado) 750mg",
    "Levofloxacino (Hemiidratado) 5mg/mL",
    "Levofloxacino (Hemiidratado) 500mg",
    "Levofloxacino (Hemiidratado) 250mg",
    "Levomalato de Cabozantinibe 20mg",
    "Levomalato de Cabozantinibe 40mg",
    "Levomalato de Cabozantinibe 60mg",
    "Levomepromazina (Cloridrato) 40mg/mL",
    "Levomepromazina (Cloridrato) 5mg/mL",
    "Levomepromazina (Maleato) 25mg",
    "Levomepromazina (Maleato) 100mg",
    "Levonorgestrel 52mg",
    "Levonorgestrel 0,75mg",
    "Levonorgestrel 1,5mg",
    "Levosimendana 2,5mg/mL",
    "Levotiroxina Sódica 137mg",
    "Levotiroxina Sódica 38mcg",
    "Levotiroxina Sódica 25mcg",
    "Levotiroxina Sódica 50mcg",
    "Levotiroxina Sódica 75mcg",
    "Levotiroxina Sódica 88mcg",
    "Levotiroxina Sódica 100mcg",
    "Levotiroxina Sódica 112mcg",
    "Levotiroxina Sódica 125mcg",
    "Levotiroxina Sódica 150mcg",
    "Levotiroxina Sódica 175mcg",
    "Levotiroxina Sódica 200mcg",
    "Levotiroxina Sódica 300mcg",
    "Levotiroxina Sódica 12,5mcg",
    "Levotiroxina Sódica 37,5mcg",
    "Levotiroxina Sódica 62,5mcg",
    "Lidocaína 700mg",
    "Lidocaína (Cloridrato) 20mg/mL",
    "Lidocaína (Cloridrato) 20mg/mL",
    "Lidocaína (Cloridrato) 10mg/mL",
    "Lidocaína Base 50mg/g",
    "Lidocaína Base 40mg/g",
    "Lidocaína Base 100mg/mL",
    "Limeciclina 150mg",
    "Limeciclina 300mg",
    "Linagliptina 5mg",
    "Linezolida 600mg",
    "Linezolida 2mg/mL",
    "Lisdexanfetamina (Dimesilato) 30mg",
    "Lisdexanfetamina (Dimesilato) 50mg",
    "Lisdexanfetamina (Dimesilato) 70mg",
    "Lítio (Carbonato) 300mg",
    "Lítio (Carbonato) 450mg",
    "Loperamida (Cloridrato) 2mg",
    "Loratadina 10mg",
    "Loratadina 1mg/mL",
    "Loratadina 10mg",
    "Lorazepam 1mg",
    "Lorazepam 2mg",
    "Lornoxicam 8mg",
    "Losartana Potássica 50mg",
    "Losartana Potássica 100mg",
    "Losartana Potássica 25mg",
    "Loteprednol (Etabonato) 5mg/mL",
    "Loteprednol (Etabonato) 2mg/mL",
    "Lovastatina 10mg",
    "Lovastatina 20mg",
    "Lovastatina 40mg",
    "Loxoprofeno Sódico 60mg",
    "Lurasidona (Cloridrato) 20mg",
    "Lurasidona (Cloridrato) 40mg",
    "Lurasidona (Cloridrato) 80mg",
    "Malato de Sunitinibe 12,5mg",
    "Malato de Sunitinibe 25mg",
    "Malato de Sunitinibe 37,5mg",
    "Malato de Sunitinibe 50mg",
    "Maleato de Asenapina 5mg",
    "Maleato de Asenapina 10mg",
    "Maleato de Fluvoxamina 50mg",
    "Maleato de Fluvoxamina 100mg",
    "Manidipino (Dicloridrato) 10mg",
    "Manidipino (Dicloridrato) 20mg",
    "Maraviroque 150mg",
    "Maraviroque 300mg",
    "Mebendazol 20mg/mL",
    "Mebeverina (Cloridrato) 200mg",
    "Mebutato de Ingenol 150mcg/g",
    "Mebutato de Ingenol 500mcg/g",
    "Meclizina (Cloridrato) 12,5mg",
    "Meclizina (Cloridrato) 25mg",
    "Meclizina (Cloridrato) 50mg",
    "Medroxiprogesterona (Acetato) 150mg/mL",
    "Medroxiprogesterona (Acetato) 2,5mg",
    "Medroxiprogesterona (Acetato) 5mg",
    "Medroxiprogesterona (Acetato) 10mg",
    "Ácido Mefenâmico 500mg",
    "Megestrol (Acetato) 160 mg",
    "Meglumina (Antimoniato) 300mg/mL",
    "Melfalana 2 mg",
    "Melfalana 50mg/10mL",
    "Meloxicam 7,5mg",
    "Meloxicam 15mg",
    "Memantina (Cloridrato) 10mg",
    "Memantina (Cloridrato) 20mg",
    "Memantina (Cloridrato) 10mg/mL",
    "Memantina (Cloridrato) 5mg",
    "Memantina (Cloridrato) 10mg",
    "Memantina (Cloridrato) 15mg",
    "Memantina (Cloridrato) 20mg",
    "Mepivacaína (Cloridrato) 30mg/mL",
    "Mercaptopurina 50mg",
    "Meropeném Triidratado 500mg/10mL",
    "Meropeném Triidratado 1000mg/20mL",
    "Meropeném Triidratado 2g/20mL",
    "Mesalazina 400mg",
    "Mesalazina 1000mg",
    "Mesalazina 500mg",
    "Mesalazina 1g",
    "Mesalazina 2g",
    "Mesalazina 10mg/mL",
    "Mesalazina 500mg",
    "Mesalazina 800mg",
    "Mesalazina 1.200mg",
    "Mesilato de Osimertinibe 40mg",
    "Mesilato de Osimertinibe 80mg",
    "Mesilato de Rasagilina 1mg",
    "Mesna 100mg/mL",
    "Metadona (Cloridrato) 10mg/mL",
    "Metadona (Cloridrato) 5mg",
    "Metadona (Cloridrato) 10mg",
    "Metformina (Cloridrato) 500mg",
    "Metformina (Cloridrato) 850mg",
    "Metformina (Cloridrato) 1.000mg",
    "Metformina (Cloridrato) 500mg",
    "Metformina (Cloridrato) 750mg",
    "Metformina (Cloridrato) 850mg",
    "Metformina (Cloridrato) 1.000mg",
    "Metildopa 250mg",
    "Metildopa 500mg",
    "Metilergometrina (Maleato) 0,2mg/mL",
    "Metilfenidato (Cloridrato) 18mg",
    "Metilfenidato (Cloridrato) 36mg",
    "Metilfenidato (Cloridrato) 54mg",
    "Metilfenidato (Cloridrato) 10mg",
    "Metilfenidato (Cloridrato) 10mg",
    "Metilfenidato (Cloridrato) 20mg",
    "Metilfenidato (Cloridrato) 30mg",
    "Metilfenidato (Cloridrato) 40mg",
    "Metilprednisolona (Aceponato) 1mg/g",
    "Metilprednisolona (Aceponato) 1mg/g",
    "Metilprednisolona (Aceponato) 1mg/g",
    "Metilprednisolona (Acetato) 40mg/mL",
    "Metoclopramida (Cloridrato) 10mg",
    "Metoclopramida (Cloridrato) 5mg/mL",
    "Metoclopramida (Cloridrato) 4mg/mL",
    "Metoprolol (Succinato) 25mg",
    "Metoprolol (Succinato) 50mg",
    "Metoprolol (Succinato) 100mg",
    "Metoprolol (Tartarato) 100mg",
    "Metoprolol (Tartarato) 1mg/mL",
    "Metoprolol (Tartarato) 100mg",
    "Metotrexato 25mg/mL",
    "Metotrexato 100mg/mL",
    "Metronidazol 7,5mg/g",
    "Metronidazol 250mg",
    "Metronidazol 400mg",
    "Metronidazol 5mg/mL",
    "Metronidazol 100mg/g",
    "Micafungina Sódica 100mg",
    "Micafungina Sódica 50mg",
    "Micofenolato Sódico 180mg",
    "Micofenolato Sódico 360mg",
    "Miconazol 20mg/mL",
    "Miconazol (Nitrato) 20mg/mL",
    "Miconazol (Nitrato) 20mg/g",
    "Miconazol (Nitrato) 20mg/mL",
    "Midazolam 1mg/mL",
    "Midazolam 5mg/mL",
    "Midazolam (Maleato) 7,5mg",
    "Midazolam (Maleato) 15mg",
    "Midostaurina 25mg",
    "Miglustate 100mg",
    "Milrinona (Lactato) 1mg/mL",
    "Minociclina (Cloridrato) 100mg",
    "Minoxidil 10mg",
    "Minoxidil 50 mg/mL",
    "Mirabegrona 25 mg",
    "Mirabegrona 50 mg",
    "Mirtazapina 15mg",
    "Mirtazapina 30mg",
    "Mirtazapina 45mg",
    "Mirtazapina 30mg",
    "Mirtazapina 45mg",
    "Misoprostol 100mcg",
    "Mitotano 500mg",
    "Mitoxantrona 2mg/mL",
    "Modafinila 100mg",
    "Modafinila 200mg",
    "Mofetila (Micofenolato) 500mg",
    "Mometasona (Furoato) 200mcg",
    "Mometasona (Furoato) 400mcg",
    "Mometasona (Furoato) 50mcg/dose",
    "Mometasona (Furoato) 1mg/g",
    "Mometasona (Furoato) 1mg/g",
    "Monoetanolamina (Oleato) 50mg/mL",
    "Montelucaste Sódico 10mg",
    "Montelucaste Sódico 4mg",
    "Montelucaste Sódico 5mg",
    "Montelucaste Sódico 4mg",
    "Morfina (Sulfato Pentahidratado) 10mg/mL",
    "Morfina (Sulfato Pentahidratado) 10mg/mL",
    "Morfina (Sulfato Pentahidratado) 0,1mg/mL",
    "Morfina (Sulfato Pentahidratado) 0,2mg/mL",
    "Morfina (Sulfato Pentahidratado) 1mg/mL",
    "Morfina (Sulfato Pentahidratado) 10mg",
    "Morfina (Sulfato Pentahidratado) 30mg",
    "Morfina (Sulfato Pentahidratado) 30mg",
    "Morfina (Sulfato Pentahidratado) 60mg",
    "Morfina (Sulfato Pentahidratado) 100mg",
    "Moxifloxacino (Cloridrato) 400mg",
    "Moxifloxacino (Cloridrato) 5mg/mL",
    "Moxifloxacino (Cloridrato) 1,6mg/mL",
    "Mupirocina 20mg/g",
    "Nafazolina (Cloridrato) 0,5mg",
    "Nalbufina (Cloridrato) 10mg/mL",
    "Naloxona (Cloridrato) 0,4mg/mL",
    "Naltrexona (Cloridrato) 50 mg",
    "Naproxeno 250mg",
    "Naproxeno 500mg",
    "Naproxeno Sódico 275mg",
    "Naproxeno Sódico 550mg",
    "Naratriptana (Cloridrato) 2,5 mg",
    "Nebivolol (Cloridrato) 5mg",
    "Neostigmina (Metilsulfato) 0,5mg/mL",
    "Nepafenaco 1mg/mL",
    "Nevirapina 200mg",
    "Nicotina 7mg",
    "Nicotina 14mg",
    "Nicotina 21mg",
    "Nicotina 2mg",
    "Nicotina 4mg",
    "Nicotina 2mg",
    "Nicotina 4mg",
    "Nifedipino 10mg",
    "Nifedipino 20mg",
    "Nifedipino 30mg",
    "Nifedipino 60mg",
    "Nifedipino 10mg",
    "Nifedipino 20mg",
    "Nilotinibe 200mg",
    "Nilotinibe 150mg",
    "Nimesulida 50mg",
    "Nimesulida 100mg",
    "Nimesulida 100mg",
    "Nimesulida 100mg",
    "Nimesulida 100mg",
    "Nimesulida 50mg/mL",
    "Nimesulida 10mg/mL",
    "Nimesulida 200mg",
    "Nimesulida 20mg/g",
    "Nimesulida Betaciclodextrina 400mg",
    "Nistatina 100.000UI/mL",
    "Nistatina 25.000UI",
    "Nitazoxanida 500mg",
    "Nitazoxanida 20mg/mL",
    "Nitrato de Miconazol 20mg/g",
    "Nitrato de Miconazol 20mg/g",
    "Nitrofural 2mg/g",
    "Nitrofural 2mg/mL",
    "Nitrofurantoína 100mg",
    "Nitroglicerina 25mg",
    "Nitroglicerina 50mg",
    "Nitroglicerina 5mg/mL",
    "Nitroprusseto Sódico Diidratado 50mg",
    "Nomegestrol (Acetato) 5mg",
    "Norepinefrina (Hemitartarato) 2mg/mL",
    "Noretisterona 0,35mg",
    "Norfloxacino 400mg",
    "Nortriptilina (Cloridrato) 10mg",
    "Nortriptilina (Cloridrato) 25mg",
    "Nortriptilina (Cloridrato) 50mg",
    "Nortriptilina (Cloridrato) 75mg",
    "Nusinersena 2,4mg/mL",
    "Ocitocina 5UI/mL",
    "Ocitocina 40UI/mL",
    "Octreotida 0,05mg/mL",
    "Octreotida 0,1mg/mL",
    "Octreotida 0,5mg/mL",
    "Octreotida (Acetato) 10mg/2,5mL",
    "Octreotida (Acetato) 20mg/2,5mL",
    "Octreotida (Acetato) 30mg/2,5mL",
    "Ofloxacino 3mg/mL",
    "Olanzapina 2,5mg",
    "Olanzapina 5mg",
    "Olanzapina 10mg",
    "Olanzapina 5mg",
    "Olanzapina 10mg",
    "Olaparibe 100mg",
    "Olaparibe 150mg",
    "Olaparibe 50mg",
    "Olmesartana Medoxomila 20mg",
    "Olmesartana Medoxomila 40mg",
    "Olodaterol (Cloridratro) 2,5mcg",
    "Olopatadina (Cloridrato) 1mg/mL",
    "Olopatadina (Cloridrato) 2mg/mL",
    "Omeprazol (Sódico) 40mg/mL",
    "Omeprazol Magnésico 10mg",
    "Omeprazol Magnésico 20mg",
    "Omeprazol Magnésico 40mg",
    "Ondansetrona (Cloridrato) 4mg",
    "Ondansetrona (Cloridrato) 8mg",
    "Ondansetrona (Cloridrato) 2mg/mL",
    "Ondansetrona (Cloridrato) 4mg",
    "Ondansetrona (Cloridrato) 8mg",
    "Orlistate 120mg",
    "Oseltamivir (Fosfato) 30mg",
    "Oseltamivir (Fosfato) 45mg",
    "Oseltamivir (Fosfato) 75mg",
    "Oxacilina Sódica 500mg",
    "Oxaliplatina 50mg",
    "Oxaliplatina 100mg",
    "Oxaliplatina 5,0mg/mL",
    "Oxamniquina 250mg",
    "Oxamniquina 50mg/mL",
    "Oxcarbazepina 300mg",
    "Oxcarbazepina 600mg",
    "Oxcarbazepina 60mg/mL",
    "Oxibutinina (Cloridrato) 1mg/mL",
    "Oxibutinina (Cloridrato) 5,0mg",
    "Oxibutinina (Cloridrato) 5mg",
    "Oxibutinina (Cloridrato) 10mg",
    "Oxiconazol (Nitrato) 10mg/g",
    "Oxiconazol (Nitrato) 10mg/g",
    "Oximetazolina (Cloridrato) 0,25mg/mL",
    "Oximetazolina (Cloridrato) 0,50mg/mL",
    "Paclitaxel 6mg/mL",
    "Paclitaxel (Ligado À Albumina) 100mg",
    "Palbociclibe 75mg",
    "Palbociclibe 100mg",
    "Palbociclibe 125mg",
    "Paliperidona 3mg",
    "Paliperidona 6mg",
    "Paliperidona 9mg",
    "Palmitato de Paliperidona 100mg/mL",
    "Palmitato de Paliperidona 200mg/mL",
    "Pamidronato Dissódico 60mg/10mL",
    "Pamidronato Dissódico 90mg/10mL",
    "Pamidronato Dissódico 9mg/mL",
    "Pantoprazol Magnésico 40mg",
    "Pantoprazol Sódico 4mg/10mL",
    "Pantoprazol Sódico 20mg",
    "Pantoprazol Sódico 40mg",
    "Paracetamol 500mg",
    "Paracetamol 140mg/mL",
    "Paracetamol 160mg",
    "Paracetamol 500mg",
    "Paracetamol 750mg",
    "Paracetamol 650mg",
    "Paracetamol 100mg/mL",
    "Paracetamol 32mg/mL",
    "Paracetamol 500mg",
    "Paracetamol 200mg/mL",
    "Paracetamol 500mg",
    "Paracetamol 10mg/mL",
    "Parecoxibe Sódico 40mg/2mL",
    "Paricalcitol 5mcg/mL",
    "Paroxetina (Cloridrato) 20mg",
    "Paroxetina (Cloridrato) 12,5mg",
    "Paroxetina (Cloridrato) 25mg",
    "Paroxetina (Cloridrato) 10mg",
    "Paroxetina (Cloridrato) 30mg",
    "Paroxetina (Cloridrato) 15mg",
    "Paroxetina (Cloridrato) 25mg",
    "Paroxetina (Cloridrato) 40mg",
    "Pazopanibe (Cloridrato) 200mg",
    "Pazopanibe (Cloridrato) 400mg",
    "Pemetrexede Dissódico Heptaidratado 100mg",
    "Pemetrexede Dissódico Heptaidratado 500mg",
    "Pentoxifilina 400mg",
    "Perampanel 2mg",
    "Perampanel 4mg",
    "Perampanel 6mg",
    "Perampanel 8mg",
    "Perampanel 10mg",
    "Perampanel 12mg",
    "Periciazina 10mg/mL",
    "Periciazina 40mg/mL",
    "Periciazina 10mg",
    "Perindopril Erbumina 4mg",
    "Perindopril Erbumina 8mg",
    "Perindorpil Arginina 5mg",
    "Perindorpil Arginina 10mg",
    "Permetrina 10mg/g",
    "Permetrina 10mg/g",
    "Permetrina 10mg/mL",
    "Permetrina 50mg/mL",
    "Petidina (Cloridrato) 50mg/mL",
    "Picossulfato Sódico Monoidratado 7,5mg",
    "Pilocarpina (Cloridrato) 10mg/mL",
    "Pilocarpina (Cloridrato) 20mg/mL",
    "Pilocarpina (Cloridrato) 40mg/mL",
    "Pimecrolimo 10mg/g",
    "Pinavério (Brometo) 50mg",
    "Pinavério (Brometo) 100 mg",
    "Pioglitazona (Cloridrato) 15mg",
    "Pioglitazona (Cloridrato) 30mg",
    "Pioglitazona (Cloridrato) 45mg",
    "Piracetam 200mg/mL",
    "Piracetam 800mg",
    "Pirenoxina Sódica 0,85mg",
    "Pirfenidona 267mg",
    "Piroxicam 20mg",
    "Piroxicam 20mg",
    "Piroxicam 20mg",
    "Pitavastatina 2mg",
    "Pitavastatina 4mg",
    "Plerixafor 20mg/mL",
    "Ácido Poliacrílico 2mg/g",
    "Policresuleno 18mg/g",
    "Policresuleno 360mg/mL",
    "Poliestirenossulfonato de Cálcio 900mg/g",
    "Polimixina B (Sulfato) 500.000UI",
    "Polimixina B (Sulfato) 1.000.000UI",
    "Polimixina B (Sulfato) 1.500.000UI",
    "Pramipexol (Dicloridrato) 0,125mg",
    "Pramipexol (Dicloridrato) 0,25mg",
    "Pramipexol (Dicloridrato) 1mg",
    "Pramipexol (Dicloridrato) 0,375mg",
    "Pramipexol (Dicloridrato) 0,75mg",
    "Pramipexol (Dicloridrato) 1,5mg",
    "Pramipexol (Dicloridrato) 3mg",
    "Pramipexol (Dicloridrato) 4,5mg",
    "Prasugrel (Cloridrato) 5mg",
    "Prasugrel (Cloridrato) 10mg",
    "Pravastatina Sódica 10mg",
    "Pravastatina Sódica 20mg",
    "Pravastatina Sódica 40mg",
    "Prazosina (Cloridrato) 1mg",
    "Prazosina (Cloridrato) 2mg",
    "Prazosina (Cloridrato) 4mg",
    "Prednisolona 5mg",
    "Prednisolona 20mg",
    "Prednisolona 3mg/mL",
    "Prednisolona 11mg/mL",
    "Prednisolona 40mg",
    "Prednisolona (Acetato) 10mg/mL",
    "Prednisolona (Acetato) 1,2mg/mL",
    "Prednisolona (Fosfato Sódico) 1mg/mL",
    "Prednisona 5mg",
    "Prednisona 20mg",
    "Pregabalina 25mg",
    "Pregabalina 75mg",
    "Pregabalina 150mg",
    "Pregabalina 50mg",
    "Pregabalina 100mg",
    "Pregabalina 35mg",
    "Pregabalina 75mg",
    "Pregabalina 150mg",
    "Progesterona 100mg",
    "Progesterona 200mg",
    "Progesterona 80mg/g",
    "Promestrieno 10mg",
    "Promestrieno 10mg/g",
    "Prometazina 0,02g/g",
    "Prometazina (Cloridrato) 25mg",
    "Prometazina (Cloridrato) 25mg/mL",
    "Propafenona (Cloridrato) 300mg",
    "Propafenona (Cloridrato) 150mg",
    "Propatilnitrato 10mg",
    "Propiltiouracila 100mg",
    "Propofol 10mg/mL",
    "Propofol 20mg/mL",
    "Propranolol (Cloridrato) 40mg",
    "Propranolol (Cloridrato) 80mg",
    "Proprionato de Halobetasol 0,5mg/g",
    "Prucaloprida 1mg",
    "Prucaloprida 2mg",
    "Quetiapina (Hemifumarato) 25mg",
    "Quetiapina (Hemifumarato) 100mg",
    "Quetiapina (Hemifumarato) 200mg",
    "Quetiapina (Hemifumarato) 300mg",
    "Quetiapina (Hemifumarato) 50mg",
    "Quetiapina (Hemifumarato) 200mg",
    "Quetiapina (Hemifumarato) 300mg",
    "Quetiapina (Hemifumarato) 400mg",
    "Rabeprazol Sódico 10mg",
    "Rabeprazol Sódico 20mg",
    "Racecadotrila 100mg",
    "Racecadotrila 10mg",
    "Racecadotrila 30mg",
    "Raloxifeno (Cloridrato) 60mg",
    "Raltegravir Potássico 400mg",
    "Ramelteona 8mg",
    "Ramipril 2,5mg",
    "Ramipril 5mg",
    "Ramipril 10mg",
    "Ranelato de Estrôncio 2g/30mL",
    "Ranitidina (Cloridrato) 40mg/mL",
    "Ranolazina 500mg",
    "Ranolazina 1.000mg",
    "Regorafenibe 40mg",
    "Remifentanila (Cloridrato) 1,0mg",
    "Remifentanila (Cloridrato) 2,0mg",
    "Remifentanila (Cloridrato) 5,0mg",
    "Repaglinida 0,5mg",
    "Repaglinida 1mg",
    "Repaglinida 2mg",
    "Rifamicina Sv Sódica 10mg/mL",
    "Rifampicina 20mg/mL",
    "Rifampicina 300mg",
    "Rifaximina 550mg",
    "Risedronato Sódico 150mg",
    "Risedronato Sódico 35mg",
    "Risperidona 1mg/mL",
    "Risperidona 0,25mg",
    "Risperidona 0,50mg",
    "Risperidona 1,0mg",
    "Risperidona 2,0mg",
    "Risperidona 3,0mg",
    "Ritonavir 80mg/mL",
    "Ritonavir 100mg",
    "Rivaroxabana 2,5mg",
    "Rivaroxabana 10mg",
    "Rivaroxabana 15mg",
    "Rivaroxabana 20mg",
    "Rivastigmina 9,0mg",
    "Rivastigmina 18mg",
    "Rivastigmina 27mg",
    "Rivastigmina (Hemitartarato) 2mg/mL",
    "Rivastigmina (Hemitartarato) 1,5mg",
    "Rivastigmina (Hemitartarato) 3,0mg",
    "Rivastigmina (Hemitartarato) 4,5mg",
    "Rivastigmina (Hemitartarato) 6,0mg",
    "Rizatriptano (Benzoato) 10mg",
    "Rocurônio (Brometo) 10mg/mL",
    "Roflumilaste 500mcg",
    "Ropivacaína (Cloridrato) 2,0mg/mL",
    "Ropivacaína (Cloridrato) 7,5mg/mL",
    "Ropivacaína (Cloridrato) 10mg/mL",
    "Rosuvastatina Cálcica 5,0mg",
    "Rosuvastatina Cálcica 10,0mg",
    "Rosuvastatina Cálcica 20mg",
    "Rosuvastatina Cálcica 40mg",
    "Rotigotina 4,5mg",
    "Rotigotina 9mg",
    "Rotigotina 13,5mg",
    "Rotigotina 18mg",
    "Rupatadina (Fumarato) 10mg",
    "Ruxolitinibe (Fosfato) 5mg",
    "Ruxolitinibe (Fosfato) 15mg",
    "Ruxolitinibe (Fosfato) 20mg",
    "Sacubitril Valsartana Sódica Hidratada 50mg",
    "Sacubitril Valsartana Sódica Hidratada 100mg",
    "Sacubitril Valsartana Sódica Hidratada 200mg",
    "Safinamida (Mesilato) 50mg",
    "Safinamida (Mesilato) 100mg",
    "Salbutamol (Sulfato) 1mg/mL",
    "Salbutamol (Sulfato) 5mg/mL",
    "Salbutamol (Sulfato) 120,5mcg/dose",
    "Salbutamol (Sulfato) 0,48mg/mL",
    "Salbutamol (Sulfato) 0,5mg/mL",
    "Salbutamol (Sulfato) 2,4mg",
    "Salbutamol (Sulfato) 4,8mg",
    "Salbutamol (Sulfato) 6,0mg/mL",
    "Saquinavir 200mg",
    "Saxagliptina (Cloridrato) 5mg",
    "Saxagliptina (Cloridrato) 2,5mg",
    "Secnidazol 500mg",
    "Secnidazol 1000mg",
    "Selumetinibe (Sulfato) 10mg",
    "Selumetinibe (Sulfato) 25mg",
    "Sertralina (Cloridrato) 25mg",
    "Sertralina (Cloridrato) 75mg",
    "Sertralina (Cloridrato) 50mg",
    "Sertralina (Cloridrato) 100mg",
    "Sevelamer (Cloridrato) 800mg",
    "Sevoflurano 1mL/mL",
    "Sildenafil (Citrato) 20mg",
    "Sildenafil (Citrato) 25mg",
    "Sildenafil (Citrato) 50mg",
    "Sildenafil (Citrato) 100mg",
    "Simeprevir Sódico 150mg",
    "Simeticona 40mg",
    "Simeticona 75mg/mL",
    "Simeticona 150mg/mL",
    "Simeticona 80mg",
    "Simeticona 150mg",
    "Sinvastatina 10mg",
    "Sinvastatina 20mg",
    "Sinvastatina 40mg",
    "Sirolimo 1mg",
    "Sirolimo 2mg",
    "Sitagliptina (Fosfato) 25mg",
    "Sitagliptina (Fosfato) 50mg",
    "Sitagliptina (Fosfato) 100mg",
    "Sofosbuvir 400mg",
    "Solifenacina (Succinato) 5mg",
    "Solifenacina (Succinato) 10mg",
    "Somatostatina 3mg/1mL",
    "Sorafenibe (Tosilato) 200mg",
    "Sotalol (Cloridrato) 120mg",
    "Sotalol (Cloridrato) 160mg",
    "Succinato de Sumatriptana 25mg",
    "Succinato Sódico de Metilprednisolona 500mg/8mL",
    "Succinato Sódico de Metilprednisolona 125mg/2mL",
    "Sufentanila (Citrato) 5mcg/mL",
    "Sufentanila (Citrato) 50mcg/mL",
    "Sugamadex Sódico 100mg/mL",
    "Sulfadiazina de Prata 10mg/g",
    "Sulpirida 200mg",
    "Sulpirida 50mg",
    "Sumatripano (Succinato) 50mg",
    "Sumatripano (Succinato) 100mg",
    "Sumatripano (Succinato) 6mg/mL",
    "Suxametônio (Cloreto) 100mg",
    "Suxametônio (Cloreto) 500mg",
    "Tacrolimo 0,3mg/g",
    "Tacrolimo 1mg/g",
    "Tacrolimo 1mg",
    "Tacrolimo 5mg",
    "Tacrolimo 5mg/mL",
    "Tadalafila 5mg",
    "Tadalafila 20mg",
    "Tafamidis Meglumina 20mg",
    "Tafenoquina (Succinato) 150mg",
    "Tafluprosta 15mcg/mL",
    "Tamoxifeno (Citrato) 10mg",
    "Tamoxifeno (Citrato) 20mg",
    "Tansulosina (Cloridrato) 0,40mg",
    "Tansulosina (Cloridrato) 0,4mg",
    "Tapentadol (Cloridrato) 25mg",
    "Tapentadol (Cloridrato) 50mg",
    "Tapentadol (Cloridrato) 100mg",
    "Tapentadol (Cloridrato) 150mg",
    "Tapentadol (Cloridrato) 200mg",
    "Tapentadol (Cloridrato) 250mg",
    "Tartarato de Vareniclina 0,5mg",
    "Tartarato de Vareniclina 1mg",
    "Tegaserode (Maleato) 6mg",
    "Teicoplanina 200mg/3mL",
    "Teicoplanina 400mg/3mL",
    "Telmisartana 40mg/8mL",
    "Telmisartana 40mg",
    "Telmisartana 80mg",
    "Temozolomida 5mg",
    "Temozolomida 20mg",
    "Temozolomida 100mg",
    "Temozolomida 140mg",
    "Temozolomida 180mg",
    "Temozolomida 250mg",
    "Temozolomida 100mg",
    "Tenofovir Alafenamida (Hemifumarato) 25mg",
    "Tenofovir Desoproxila (Fumarato) 300mg",
    "Tenoxicam 20mg",
    "Tenoxicam 40mg",
    "Tenoxicam 20mg",
    "Teofilina 100mg",
    "Teofilina 200mg",
    "Teofilina 300mg",
    "Terazosina (Cloridrato) 2mg",
    "Terazosina (Cloridrato) 5mg",
    "Terbinafina 10mg/g",
    "Terbinafina (Cloridrato) 250mg",
    "Terbinafina (Cloridrato) 10mg/g",
    "Terbinafina (Cloridrato) 10mg/mL",
    "Terbutalina (Sulfato) 0,5mg/mL",
    "Terbutalina (Sulfato) 0,30mg/mL",
    "Terconazol 8,0mg/g",
    "Teriflunomida 14mg",
    "Terlipressina (Acetato) 1mg/5mL",
    "Terlipressina (Acetato) 0,12mg/mL",
    "Testosterona 10mg/mL",
    "Testosterona (Cipionato) 100mg/mL",
    "Tetraciclina (Cloridrato) 500mg",
    "Tiabendazol 50mg/g",
    "Tiabendazol 50mg/mL",
    "Tianfenicol 500mg",
    "Tibolona 1,25mg",
    "Tibolona 2,5mg",
    "Ticagrelor 90mg",
    "Ticlopidina (Cloridrato) 250mg",
    "Tigeciclina 50mg",
    "Timolol (Maleato) 5mg/mL",
    "Timolol (Maleato) 5mg/mL",
    "Tiocolchicosídeo 4mg",
    "Tiocolchicosídeo 2mg/mL",
    "Tioconazol 10mg/mL",
    "Tioconazol 10mg/g",
    "Tioconazol 280mg/g",
    "Tioguanina 40mg",
    "Tiopental Sódico 500mg",
    "Tiopental Sódico 1g",
    "Tioridazina (Cloridrato) 10mg",
    "Tioridazina (Cloridrato) 25mg",
    "Tioridazina (Cloridrato) 50mg",
    "Tioridazina (Cloridrato) 100mg",
    "Tioridazina (Cloridrato) 200mg",
    "Tiotrópio (Brometo) Monohidratado 2,5mcg/dose",
    "Tirofibana (Cloridrato) 0,25mg/mL",
    "Tizanidina (Cloridrato) 2mg",
    "Tobramicina 75mg/mL",
    "Tobramicina 60mg/mL",
    "Tobramicina 3mg/mL",
    "Tobramicina 3mg/mL",
    "Tobramicina 28mcg/dose",
    "Tofacitinibe (Citrato) 5mg",
    "Tolterodina (Tartarato) 4,0mg",
    "Topiramato 25mg",
    "Topiramato 50mg",
    "Topiramato 100mg",
    "Topotecano (Cloridrato) 4mg/4mL",
    "Tramadol (Cloridrato) 100mg/mL",
    "Tramadol (Cloridrato) 50mg",
    "Tramadol (Cloridrato) 50mg/mL",
    "Tramadol (Cloridrato) 50mg",
    "Tramadol (Cloridrato) 100mg",
    "Ácido Tranexâmico 50mg/mL",
    "Travoprosta 0,04mg/mL",
    "Trazodona (Cloridrato) 50mg",
    "Trazodona (Cloridrato) 100mg",
    "Trazodona (Cloridrato) 150mg",
    "Tretinoína 0,25mg/g",
    "Tretinoína 0,5mg/g",
    "Tretinoína 0,25mg/g",
    "Tretinoína 0,5mg/g",
    "Tretinoína 1mg/g",
    "Tretinoína 10mg",
    "Triancinolona Acetonida 0,5mcg/dose",
    "Triancinolona Acetonida 550mcg/mL",
    "Triancinolona Acetonida 1mg/g",
    "Trimebutina (Maleato) 200mg",
    "Trimetazidina (Dicloridrato) 35mg",
    "Trimetazidina ( Dicloridrato) 80mg",
    "Trióxido de Arsênio 1mg/mL",
    "Triptorrelina(Acetato) 0,1mg/mL",
    "Triptorrelina(Acetato) 3,75mg",
    "Triptorrelina(Embonato) 3,75mg/2mL",
    "Triptorrelina(Embonato) 11,25mg",
    "Triptorrelina(Embonato) 22,5mg",
    "Trometamol (Fosfomicina) 3g",
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 30mg/mL",
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 5,0mg/mL",
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 4,0mg/mL",
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 10mg",
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 20mg/mL",
    "Tropicamica 10mg/mL",
    "Undecilato de Testosterona 250mg/mL",
    "Uréia 100mg/g",
    "Uréia 100mg/mL",
    "Uréia 200mg/g",
    "Valaciclovir (Cloridrato) 500mg",
    "Valerato de Estradiol 2mg",
    "Valerato de Estradiol 1mg",
    "Valproato de Sódio 50mg/mL",
    "Valproato de Sódio 300mg",
    "Valproato de Sódio 500mg",
    "Valsartana 40mg",
    "Valsartana 80mg",
    "Valsartana 160mg",
    "Valsartana 320mg",
    "Vancomicina (Cloridrato) 500mg",
    "Vancomicina (Cloridrato) 1000mg",
    "Vandetanibe 100mg",
    "Vandetanibe 300mg",
    "Vardenafil (Cloridrato) 5mg",
    "Vardenafil (Cloridrato) 10mg",
    "Vardenafil (Cloridrato) 20mg",
    "Varfarina Sódica 1mg",
    "Varfarina Sódica 2mg",
    "Varfarina Sódica 2,5mg",
    "Varfarina Sódica 5mg",
    "Varfarina Sódica 7,5mg",
    "Varfarina Sódica 10mg",
    "Vecurônio (Brometo) 4mg/mL",
    "Vecurônio (Brometo) 10mg",
    "Vemurafenibe 240mg",
    "Venetoclax 10mg",
    "Venetoclax 50mg",
    "Venetoclax 100mg",
    "Venlafaxina (Cloridrato) 37,5mg",
    "Venlafaxina (Cloridrato) 75mg",
    "Venlafaxina (Cloridrato) 150mg",
    "Venlafaxina (Cloridrato) 37,5mg",
    "Venlafaxina (Cloridrato) 75mg",
    "Venlafaxina (Cloridrato) 150mg",
    "Verapamil (Cloridrato) 120mg",
    "Verapamil (Cloridrato) 240mg",
    "Verapamil (Cloridrato) 80mg",
    "Verteporfina 15mg/30mL",
    "Vildagliptina 50mg",
    "Vimblastina (Sulfato) 10mg",
    "Vimblastina (Sulfato) 1mg/1mL",
    "Viminol (Hidroxibenzoato) 70mg",
    "Vimpocetina 5mg",
    "Vinorelbina (Tartarato) 10mg/mL",
    "Vinorelbina (Tartarato) 20mg",
    "Vinorelbina (Tartarato) 30mg",
    "Vismodegibe 150mg",
    "Vonoprazana (Fumarato) 10mg",
    "Vonoprazana (Fumarato) 20mg",
    "Voriconazol 50mg",
    "Voriconazol 200mg",
    "Voriconazol 200mg/19mL",
    "Vortioxetina (Bromidrato) 5mg",
    "Vortioxetina (Bromidrato) 10mg",
    "Vortioxetina (Bromidrato) 15mg",
    "Vortioxetina (Bromidrato) 20mg",
    "Xilometazolina (Cloridrato) 1mg/mL",
    "Zidovudina 100mg",
    "Zidovudina 10mg/mL",
    "Ziprasidona (Cloridrato Monoidratado) 40mg",
    "Ziprasidona (Cloridrato Monoidratado) 80mg",
    "Ácido Zoledrônico 4mg/5mL",
    "Ácido Zoledrônico 4mg/5mL",
    "Ácido Zoledrônico 5mg/100mL",
    "Ácido Zoledrônico 4mg/100mL",
    "Zolmitriptana 2,5mg",
    "Zolmitriptana 2,5mg",
    "Zolpidem (Hemitartarato) 5mg",
    "Zolpidem (Hemitartarato) 5mg",
    "Zolpidem (Hemitartarato) 10mg",
    "Zolpidem (Hemitartarato) 6,25mg",
    "Zolpidem (Hemitartarato) 12,5mg",
    "Zopiclona 7,5mg",
    "Acetato de Betametasona + Fosfato Dissódico de Betametasona 3mg/mL + 3,945mg/mL",
    "Acetato de Ciproterona + Etinilestradiol 2mg + 0,035mg",
    "Valerato de Estradiol 2mg",
    "Acetato de Ciproterona + Valerato de Estradiol 1mg + 2mg",
    "Acetato de Clormadinona + Etinilestradiol 2mg + 0,03mg",
    "Acetato de Clormadinona + Etinilestradiol 2mg + 0,02mg",
    "Acetato de Clostebol + Sulfato de Neomicina 5mg + 5mg",
    "Acetato de Clostebol + Sulfato de Neomicina 5mg + 5mg",
    "Acetato de Hidrocortisona + Lidocaína + Óxido de Zinco + Subacetato de Alumínio 50mg + 2.5mg + 180mg + 35mg",
    "Acetato de Nomegestrol + Estradiol Hemihidratado 2,5mg + 1,5mg",
    "Acetato de Noretisterona + Estradiol 0,5mg + 1mg",
    "Acetato de Noretisterona + Etinilestradiol 2mg + 0,01mg",
    "Ácido Acetilsalicílico + Ácido Ascórbico 400mg + 240mg",
    "Ácido Acetilsalicílico + Bicarbonato de Sódio + Ácido Cítrico 324mg + 1.625mg + 965mg",
    "Ácido Acetilsalicílico + Cafeína 500mg + 30mg",
    "Ácido Acetilsalicílico + Maleato de Dexclorfeniramina + Cloridrato de Fenilefrina + Cafeína 400mg + 1mg + 10mg + 30mg",
    "Ácido Bórico + Ácido Salicílico + Enxofre + Óxido de Zinco 11,735g + 0,352g + 17,602g + 11,735g",
    "Ácido Fusídico + Valerato de Betametasona 20mg/g + 1mg/g",
    "Ácido Valpróico + Valproato de Sódio 300mg (87mg + 199,80mg)",
    "Ácido Valpróico + Valproato de Sódio 500mg (145mg + 333mg)",
    "Adapaleno + Fosfato de Clindamicina 1mg/g + 10mg/g",
    "Adapaleno + Fosfato de Clindamicina 1mg/g + 10mg/g",
    "Adapaleno + Peróxido de Benzoíla 1mg/g + 25mg/g",
    "Alendronato de Sódio + Carbonato de Cálcio + Colecalciferol 70mg + 500mg + 2mg",
    "Alendronato de Sódio + Colecalciferol 70mg (ác. alendrônico) + 5.600UI",
    "Alendronato de Sódio + Colecalciferol 70mg (ác. alendrônico) + 2.800UI",
    "Algestona Acetofenida + Enantato de Estradiol 150mg/mL + 10mg/mL",
    "Alginato de Sódio + Bicarbonato de Potássio 100mg/mL + 20mg/mL",
    "Amoxicilina Tri-Hidratada + Claritromicina + Esomeprazol Magnésico Tri-Hidratado 500mg + 500mg + 20mg",
    "Amoxicilina + Clavulanato de Potássio 125mg/5mL + 31,25mg/5mL",
    "Amoxicilina + Clavulanato de Potássio 250mg/5mL + 62,5mg/5mL",
    "Amoxicilina + Clavulanato de Potássio 500mg + 125mg",
    "Amoxicilina + Clavulanato de Potássio 200mg/5mL + 28,5mg/5mL",
    "Amoxicilina + Clavulanato de Potássio 400mg/5mL + 57mg/5mL",
    "Amoxicilina + Clavulanato de Potássio 875mg + 125mg",
    "Amoxicilina + Clavulanato de Potássio 600mg + 42,9mg",
    "Amoxicilina + Clavulanato de Potássio 1.000mg + 200mg",
    "Amoxicilina + Sulbactam 1.000mg + 500mg",
    "Amoxicilina + Sulbactam 500mg + 250mg",
    "Amoxicilina + Sulbactam 200mg/mL + 50mg/mL",
    "Amoxicilina + Sulbactam 875 mg + 125 mg",
    "Ampicilina Sódica + Sulbactam Sódico 1g + 0,5g",
    "Ampicilina Sódica + Sulbactam Sódico 2g + 1g",
    "Arteméter + Lumefantrina 20mg + 120mg",
    "Artesunato + Mefloquina 100mg + 220mg",
    "Artesunato + Mefloquina 25mg + 55mg",
    "Atenolol + Clortalidona 100mg + 25mg",
    "Atenolol + Clortalidona 50mg + 12,5mg",
    "Atenolol + Clortalidona 25mg + 12,5mg",
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 500mg",
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 850mg",
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 1000mg",
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 15mg",
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 30mg",
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 45mg",
    "Benzoilmetronidazol + Nistatina + Cloreto de Benzalcônico 62,5mg/g + 25.000UI/g + 1,25mg/g",
    "Besilato de Anlodipino + Atenolol 5,0mg + 25mg",
    "Besilato de Anlodipino + Atenolol 5,0mg + 50mg",
    "Besilato de Anlodipino + Losartana Potássica 2,5mg + 50mg",
    "Besilato de Anlodipino + Losartana Potássica 5,0mg + 50mg",
    "Besilato de Anlodipino + Losartana Potássica 5,0mg + 100mg",
    "Besilato de Anlodipino + Perindopril Arginina 3,5mg + 2,5mg",
    "Besilato de Anlodipino + Perindopril Arginina 7mg + 5mg",
    "Besilato de Anlodipino + Perindopril Arginina 14mg + 10mg",
    "Betametasona + Maleato de Dexclorfeniramina 0,05mg/mL + 0,4mg/mL",
    "Betametasona + Maleato de Dexclorfeniramina 0,25mg + 2mg",
    "Bimatoprosta + Dextrotartarato de Brimonidina + Maleato de Timolol 0,1mg/mL + 1,5mg/mL + 6,83mg/mL",
    "Bimatoprosta + Maleato de Timolol 0,3mg/mL + 5,0mg/mL",
    "Bisacodil + Docusato de Sódio 5mg + 60mg",
    "Brinzolamida + Dextrotartarato de Brimodina 10mg/mL + 2mg/mL",
    "Brinzolamida + Maleato de Timolol 10mg/mL + 5mg/mL",
    "Bromazepam + Sulpirida 1mg + 25mg",
    "Brometo de Tiotrópio Monoidratado  + Cloridrato de Olodaterol 2,5mcg + 2,5mcg",
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 10mg + 250mg",
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 4mg/mL + 500mgmL",
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 6,67mg/mL + 333,4mg/mL",
    "Butilbrometo de Escopolamina + Paracetamol 10mg + 500mg",
    "Cafeína Anidra + Dipirona Sódica + Cloridrato de Isometepteno 30mg/mL + 300mg/mL + 50mg/mL",
    "Cafeína Anidra + Dipirona Sódica + Mucato de Isometepteno 30mg + 300mg + 30mg",
    "Cafeina Anidra + Orfenadrina (Citrato) + Paracetamol 50mg + 35mg + 450mg",
    "Calamina + Cloridrato de Difenidramina + Cânfora 80mg/mL + 10mg/mL + 1mg/mL",
    "Candesartana Cilexetila + Felodipino 16mg + 2,5mg",
    "Candesartana Cilexetila + Felodipino 16mg + 5mg",
    "Candesartana Cilexetila + Hidroclorotiazida 16mg + 12,5mg",
    "Candesartana Cilexetila + Hidroclorotiazida 8,0mg + 12,5mg",
    "Caproato de Hidroxiprogesterona + Valerato de Estradiol 250mg/mL + 5mg/mL",
    "Carbidopa + Levodopa 25mg + 250mg",
    "Ceftazidima Pentaidratada + Avibactam Sódico 2.000mg + 500mg",
    "Cetoconazol + Dipropionato de Betametasona 20mg/g + 0,64mg/g",
    "Cetoconazol + Dipropionato de Betametasona 20mg/g + 0,64mg/g",
    "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina 20mg/g + 0,64mg/g + 2,5mg/g",
    "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina 20mg/g + 0,64mg/g + 2,5mg/g",
    "Cetoprofeno + Omeprazol 200mg + 20mg",
    "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico 1mg + 50mg + 50mg + 50mg",
    "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico 1mg + 100mg + 100mg + 100mg",
    "Cianocobalamina + Diclofenaco Sódico + Cloridrato de Piridoxina + Cloridrato de Tiamina 5.000mcg + 75mg + 100mg + 100mg",
    "Clindamicina + Peróxido de Benzoíla 10mg/g + 50mg/g",
    "Clonixinato de Lisina + Cloridrato de Ciclobenzaprina 125mg + 5mg",
    "Cloranfenicol + Acetato de Retinol + Aminoácidos + Metionina 5,0mg + 10.000UI + 25mg + 5,0mg",
    "Cloreto de Cetilpiridínio + Benzocaína 1,466mg + 10mg",
    "Cloreto de Cetilpiridínio + Benzocaína 0,5mg/mL + 4mg/mL",
    "Cloridrato de Amilorida + Hidroclorotiazida 2,5mg + 25mg",
    "Cloridrato de Oxomemazina + Iodeto de Potássio + Benzoato de Sódio + Guaifenesina 0,4mg/mL + 20mg/mL + 4mg/mL + 6mg/mL",
    "Cloridrato de Azelastina + Propionato de Fluticasona 137mcg + 50mcg",
    "Cloridrato de Amilorida + Hidroclorotiazida 5mg + 50mg",
    "Cloridrato de Benazepril + Hidroclorotiazida 10mg + 12,5mg",
    "Cloridrato de Benazepril + Hidroclorotiazida 5mg + 6,25mg",
    "Cloridrato de Bupivacaína + Glicose 5mg/mL + 80mg/mL",
    "Cloridrato de Ciclobenzaprina + Cafeína 5mg + 30mg",
    "Cloridrato de Ciclobenzaprina + Cafeína 10mg + 60mg",
    "Cloridrato de Ciproeptadina + Cloridrato de Tiamina + Riboflavina + Cloridrato de Piridoxina + Nicotinamida + Ácido Ascórbico 0,8mg/mL + 0,12mg/mL + 0,15mg/mL + 0,134mg/mL + 1,334mg/mL + 4,334mg/mL",
    "Cloridrato de Ciprofloxacino + Dexametasona 3,5mg/mL eq a 3mg/mL base + 1,0mg/mL",
    "Cloridrato de Ciprofloxacino + Dexametasona 3,0mg/mL + 1,0mg/mL",
    "Cloridrato de Clobutinol + Succinato de Doxilamina 4mg/mL + 0,75mg/mL",
    "Cloridrato de Clobutinol + Succinato de Doxilamina 48mg/mL + 9mg/mL",
    "Cloridrato de Delapril + Dicloridrato de Manidipino 30mg + 10mg",
    "Cloridrato de Delapril + Dicloridrato de Manidipino 30mg + 10mg",
    "Cloridrato de Difenidramina + Cloreto de Amônio + Citrato de Sódio 5mg + 50mg + 10mg",
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 5mg",
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 10mg",
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 15mg",
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 20mg",
    "Cloridrato de Dorzolamida + Maleato de Timolol 20mg/mL + 5,0mg/mL",
    "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina 60mg + 120mg",
    "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina 180mg + 240mg",
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,25% + 9,1mcg/mL",
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,5% + 9,1mcg/mL",
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,75% + 9,1mcg/mL",
    "Cloridrato de Lidocaína + Cloreto de Benzalcônio 25mg/mL + 1,30mg/mL",
    "Cloridrato de Lidocaína + Hemitartarato de Epinefrina 10mg/mL + 9,1mcg/mL",
    "Cloridrato de Lidocaína + Hemitartarato de Epinefrina 20mg/mL + 9,1mcg/mL",
    "Cloridrato de Mepivacaína + Epinefrina 20mg/mL + 0,01mg/mL",
    "Cloridrato de Metformina + Glibenclamida 250mg + 1,25mg",
    "Cloridrato de Metformina + Glibenclamida 500mg + 2,5mg",
    "Cloridrato de Metformina + Glibenclamida 500mg + 5,0mg",
    "Cloridrato de Metformina + Glicazida 500mg + 30mg",
    "Cloridrato de Metformina + Linagliptina 500mg + 2,5mg",
    "Cloridrato de Metformina + Linagliptina 850mg + 2,5mg",
    "Cloridrato de Metformina + Linagliptina 1.000mg + 2,5mg",
    "Cloridrato de Metoclopramida + Dimeticona + Pepsina 7mg + 40mg + 50mg",
    "Cloridrato de Moxifloxacino + Fosfato de Dexametasona 5mg/mL + 1mg/mL",
    "Cloridrato de Nafazolina + Maleato de Feniramina 0,25mg/mL + 3mg/mL",
    "Cloridrato de Nafazolina + Sulfato de Zinco Heptaidratado 0,15mg/mL + 0,30mg/mL",
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 5mg + 2,5mg",
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 10mg + 5mg",
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 20mg + 10mg",
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 40mg + 20mg",
    "Cloridrato de Oxitetraciclina + Hidrocortisona 30mg/g + 10mg/g",
    "Cloridrato de Oxitetraciclina + Lidocaína 100mg/mL + 20mg/mL",
    "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B 30mg/g + 10.000U/g",
    "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B 5mg/g + 10.000U/g",
    "Cloridrato de Palonosetrona + Netupitanto 0,56mg + 300mg",
    "Cloridrato de Piridoxina + Cloridrato de Tiamina (Ampola 1) + Cianocobalamina + Fosfato de Dexametasona (Ampola 2) 100mg + 100mg (ampola 1) + 5mg + 4,37mg (ampola 2)",
    "Cloridrato de Prilocaína + Felipressina 30mg/mL + 0,03UI/mL (0,54mcg/mL)",
    "Cloridrato de Propranolol + Hidroclorotiazida 40mg + 12,5mg",
    "Cloridrato de Propranolol + Hidroclorotiazida 80mg + 12,5mg",
    "Cloridrato de Tansulosina + Succinato de Solifenacina 0,4mg + 6mg",
    "Cloridrato de Tramadol + Diclofenaco Sódico 25mg + 25mg",
    "Cloridrato de Tramadol + Diclofenaco Sódico 50mg + 50mg",
    "Cloridrato de Tramadol + Paracetamol 37,5mg + 325mg",
    "Clortalidona + Cloridrato de Amilorida 25mg + 5mg",
    "Clotrimazol + Acetato de Dexametasona 10mg/g + 0,443mg/g",
    "Dapagliflozina + Cloridrato de Metformina 5mg + 500mg",
    "Dapagliflozina + Cloridrato de Metformina 5mg + 1.000mg",
    "Dapagliflozina + Cloridrato de Metformina 10mg + 500mg",
    "Dapagliflozina + Cloridrato de Metformina 10mg + 1.000mg",
    "Desloratadina + Sulfato de Pseudoefedrina 2,5mg + 120mg",
    "Desogestrel + Etinilestradiol 0,025mg + 0,04mg (com branco) + 0,125mg + 0,03mg (com azul)",
    "Desogestrel + Etinilestradiol 150mcg + 20mcg (com branco) / 0mcg + 10mcg (com amarelo)",
    "Desoximetasona + Sulfato de Neomicina 2,5mg + 7,1mg",
    "Dexametasona (Fosfato Dissódico) + Sulfato de Neomicina 1mg/mL + 3,5mg/mL",
    "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B 1mg/mL + 5,0 mg/mL + 6.000UI/mL",
    "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B 1mg/g + 5,0 mg/g + 6.000 UI/g",
    "Diclofenado Sódico + Fosfato de Codeína 50mg + 50mg",
    "Diisetionato de Hexamidina + Cloridrato de Tetracaina 1mg/mL + 0,5mg/mL",
    "Dimenidrinato + Cloridrato de Piridoxina 25mg/mL + 5mg/mL",
    "Dimenidrinato + Cloridrato de Piridoxina 50mg + 10mg",
    "Dimenidrinato + Cloridrato de Piridoxina + Glicose + Frutose 3mg/mL + 5mg/mL + 100mg/mL + 100mg/mL",
    "Dipirona Sódica + Cafeína 500mg + 65mg",
    "Dipirona Sódica + Cafeína + Dipirona Sódica + Maleato de Clorfenamina 250mg + 30mg (verde) + 250mg + 2,0mg (amarelo)",
    "Dipirona Sodica + Cloridrato Prometazina + Cloridrato de Adifenina 500mg + 5mg + 10mg",
    "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina 300mg + 50mg + 35mg",
    "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina 300mg/mL + 50mg/mL + 35mg/mL",
    "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado 100mcg/dose + 6mcg/dose",
    "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado 100mcg/dose + 6mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose",
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose",
    "Dipropionato de Betametasona  + Ácido Salicílico 0,64mg + 30mg",
    "Dipropionato de Betametasona + Ácido Salicílico 0,64mg + 20mg",
    "Dipropionato de Betametasona + Fosfato Dissódico de Betametasona 5,0mg/mL + 2,0mg/mL",
    "Dipropionato de Betametasona + Sulfato de Gentamicina 0,64mg  + 1mg",
    "Dipropionato de Betametasona + Sulfato de Gentamicina 0,64mg + 1mg",
    "Drospirenona + Clatrato de Etinilestradiol Betaciclodextrina 3mg + 0,02mg",
    "Drospirenona + Etinilestradiol 3mg + 0,03mg",
    "Drospirenona + Etinilestradiol 3mg + 0,03mg",
    "Dutasterida + Cloridrato de Tansulosina 0,5mg + 0,4mg",
    "Empagliflozina + Linagliptina 10mg + 5mg",
    "Empagliflozina + Linagliptina 25mg + 5mg",
    "Enantato de Noretisterona + Valerato de Estradiol 50mg/1mL + 5mg/1mL",
    "Entricitabina + Fumarato de Tenofovir Desoproxila 200mg + 300mg",
    "Estradiol (Valerato) + Dienogeste 3mg + 0mg / 2mg + 2mg / 3mg + 1mg",
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 50mcg + 140mcg",
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 3,2mg + 11,2mg",
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 0,5mg + 0,1mg",
    "Estradiol + Didrogesterona 1mg + 5mg",
    "Estradiol + Didrogesterona 1mg + 0mg (com branco) / 1mg + 10mg (com cinza)",
    "Estradiol Hemiidratado + Drospirenona 1mg + 2mg",
    "Estradiol + Estradiol + Trimegestona 1mg + 1mg + 0,250mg",
    "Etinilestradiol + Desogestrel 0,02mg + 0,15mg",
    "Etinilestradiol + Desogestrel 0,03mg + 0,15mg",
    "Etinilestradiol + Etonogestrel 2,7mg + 11,7mg",
    "Etinilestradiol + Gestodeno 0,020mg + 0,075mg",
    "Etinilestradiol + Gestodeno 0,03mg + 0,075mg",
    "Etinilestradiol + Norelgestromina 0,6mg + 6mg",
    "Etinilestradiol + Noretindrona 0,05mg + 0,25mg",
    "Ezetimiba + Sinvastatina 10mg + 10mg",
    "Ezetimiba + Sinvastatina 10mg + 20mg",
    "Ezetimiba + Sinvastatina 10mg + 40mg",
    "Ezetimiba + Sinvastatina 10mg + 80mg",
    "Felodipino + Succinato de Metoprolol 5mg + 50mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 500mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50 mg + 850 mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50 mg + 1.000 mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 500mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 1.000mg",
    "Fosfato de Sitagliptina + Cloridrato de Metformina 100mg + 1.000mg",
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 200mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose",
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose",
    "Fumarato de Formoterol Diidratado + Propionato de Fluticasona 12mcg/dose + 250mcg/dose",
    "Furoato de Fluticasona + Trifenatato de Vilanterol 100mcg + 25mcg",
    "Furoato de Fluticasona + Trifenatato de Vilanterol 200mcg + 25mcg",
    "Gatifloxacino + Acetato de Prednisolona 3mg/mL + 10mg/mL",
    "Gestodeno + Etinilestradiol 0,075mg + 0,03mg",
    "Gestodeno + Etinilestradiol 0,06mg + 0,015mg",
    "Glimepirida + Metformina (Cloridrato) 2,0mg + 1.000 mg",
    "Glimepirida + Metformina (Cloridrato) 4,0mg + 1.000 mg",
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 10mg + 6,25mg",
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 2,5mg + 6,25mg",
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 5mg + 6,25mg",
    "Hialuronidase + Valerato de Betametasona 150UTR/g + 2,5mg/g",
    "Hidrato de Calcipotriol + Dipropionato de Betametasona 50mcg/g + 0,5mg/g",
    "Hidrato de Calcipotriol + Dipropionato de Betametasona 50mcg/g + 0,5mg/g",
    "Hidrocortisona + Sulfato de Neomicina + Sulfato de Polimixina B 10.000UI + 5mg/mL + 10mg/mL",
    "Hidroquinona + Fluocinolona Acetonida + Tretinoína 40mg/g + 0,1mg/g + 0,5mg/g",
    "Imipenem + Cilastatina Sódica 500mg + 500mg",
    "Ipratrópio (Brometo) + Fenoterol (Bromidrato) 0,02mg/dose + 0,05mg/dose",
    "Irbesartana + Hidroclorotiazida 150mg + 12,5mg",
    "Irbesartana + Hidroclorotiazida 300mg + 12,5mg",
    "Irbesartana + Hidroclorotiazida 300mg + 25mg",
    "Isetionato de Hexamidina + Cloridrato de Tetracaína 1mg/mL + 0,5mg/mL",
    "Isotretinoina + Eritromicina 0,5mg/g + 20,0mg/g",
    "Isoniazida + Rifampicina 150 mg + 300 mg",
    "Lamivudina + Fumarato de Tenofovir  Desoproxila 300mg + 300mg",
    "Lamivudina + Zidovudina 150mg + 300mg",
    "Lansoprazol + Levofloxacino + Amoxicilina (Triidratada) 30mg + 500mg + 500mg",
    "Lansoprazol + Claritromicina + Amoxicilina (Triidratada) 30mg + 500mg + 500mg",
    "Latanoprosta + Maleato de Timolol 50mcg/mL + 5mg/mL",
    "Levodopa + Carbidopa + Entacapona 50mg + 12,5mg + 200mg",
    "Levodopa + Carbidopa + Entacapona 100mg + 25mg + 200mg",
    "Levodopa + Carbidopa + Entacapona 150mg + 37,5mg + 200mg",
    "Levodopa + Cloridrato de Benserazida 200mg + 50mg",
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg",
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg",
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg",
    "Levodopa + Levodopa + Cloridrato de Benserazida 150mg + 50mg + 50mg",
    "Levonogestrel + Etinilestradiol 0,25mg + 0,05mg",
    "Levonorgestrel + Etinilestradiol 0,10mg + 0,02mg",
    "Levonorgestrel + Etinilestradiol 0,15mg + 0,03mg",
    "Levonorgestrel + Etinilestradiol 0,25mg + 0,05mg",
    "Levonorgestrel + Etinilestradiol 0,05mg + 0,03mg / 0,075mg + 0,04mg / 0,125mg + 0,03mg",
    "Lidocaína + Prilocaína 25mg/g + 25mg/g",
    "Lidocaína + Tetracaína 70mg/g + 70mg/g",
    "Lopinavir + Ritonavir 100mg + 25mg",
    "Lopinavir + Ritonavir 200 mg + 50mg",
    "Lopinavir + Ritonavir 80mg/mL + 20mg/mL",
    "Loratadina + Sulfato de Pseudoefedrina 1mg/mL + 12mg/mL",
    "Losartana Potássica + Hidroclorotiazida 100mg + 25mg",
    "Losartana Potássica + Hidroclorotiazida 50mg + 12,5mg",
    "Losartana Potássica + Besilato de Anlodipino 50mg + 5mg",
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 0,4mg/mL + 1mg/mL",
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 2mg/mL + 2,5mg/mL",
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 12mg + 15mg",
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 0,2mg/mL + 3mg/mL",
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 4mg + 60mg",
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 0,2mg/mL + 3mg/mL",
    "Maleato de Dexclorfeniramina + Betametasona 2,0mg + 0,25mg",
    "Maleato de Dexclorfeniramina + Betametasona 0,4mg/mL + 0,05mg/mL",
    "Maleato de Dexclorfeniramina + Sulfato de Pseudoefedrina + Guaifenesina 0,4mg/mL + 4mg/mL + 20mg/mL",
    "Maleato de Enalapril + Besilato de Anlodipino 2,5mg + 10mg",
    "Maleato de Enalapril + Besilato de Anlodipino 5,0mg + 10mg",
    "Maleato de Enalapril + Besilato de Anlodipino 5,0mg + 20mg",
    "Maleato de Indacaterol + Brometo de Glicopirrônio 110mcg + 50mcg/dose",
    "Maleato de Mepiramina + Hidróxido de Alumínio + Ácido Acetilsalicílico + Cafeína 15mg + 150mg + 150mg + 50mg",
    "Medroxiprogesterona + Estradiol 25mg/0,5mL + 5mg/0,5mL",
    "Mepartricina + Cloridrato de Tetraciclina 5.000UI/g + 20mg/g",
    "Mesilato de Diidroergotamina + Paracetamol + Cafeína 1mg + 450mg + 40mg",
    "Mesilato de Diidroergotamina + Paracetamol + Cafeína + Cloridrato de Metoclopramida 1mg + 450mg + 75mg + 10mg",
    "Mesilato de Doxasozina + Finasterida 2mg + 5mg",
    "Metronidazol + Nitrato de Miconazol 750mg + 200mg",
    "Montelucaste de Sódio + Dicloridrato de Levocetirizina 10mg + 5mg",
    "Naproxeno + Esomeprazol Magnésio Tri-Hidratado 500mg + 20mg",
    "Nimesulida + Pantoprazol Sódico 100mg + 20mg",
    "Nistatina + Óxido de Zinco 100.000U/g + 200mg/g",
    "Nitrato de Miconazol + Tinidazol 30mg/g + 20mg/g",
    "Noretisterona + Valerato de Estradiol Micronizado 2mg + 0,7mg",
    "Norgestrel + Etinilestradiol 0,5mg + 0,05mg",
    "Olmesartana Medoxomila + Anlodipino 20mg + 5mg",
    "Olmesartana Medoxomila + Anlodipino 40mg + 5mg",
    "Olmesartana Medoxomila + Anlodipino 40mg + 10mg",
    "Olmesartana Medoxomila + Hidroclorotiazida 20mg + 12,5mg",
    "Olmesartana Medoxomila + Hidroclorotiazida 40mg + 12,5mg",
    "Olmesartana Medoxomila + Hidroclorotiazida 40mg + 25mg",
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 20mg + 12,5mg + 5mg",
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 40mg + 12,5mg + 5mg",
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 40mg + 25mg + 10mg",
    "Omeprazol + Claritromicina + Amoxicilina 20mg + 500mg + 500mg",
    "Paracetamol + Ácido Acetilsalicilico + Cafeína 250mg + 250mg + 65mg",
    "Paracetamol + Cafeína 500mg + 65mg",
    "Paracetamol + Cafeína Anidra 500mg + 65mg",
    "Paracetamol + Ibuprofeno 500mg + 200mg",
    "Paracetamol + Carisoprodol + Diclofenaco Sódico + Cafeína Anidra 300mg + 125mg + 50mg + 30mg",
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol (Com Branco) 400mg + 20mg (com amarelo) / 400mg (com branco)",
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja) 400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja)",
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja) + Paracetamol (Com Branco) 400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja) + 400mg (com branco)",
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 400mg/5g + 4mg/5g + 4mg/5g",
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 400mg + 4mg + 4mg",
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 40mg/mL + 0,6mg/mL + 0,6mg/mL",
    "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina 40mg/mL + 1mg/mL + 0,4 mg/mL",
    "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina 13,3mg/mL + 0,33mg/mL + 0,13mg/mL",
    "Paracetamol + Cloridrato de Pseudoefedrina 500mg + 30mg",
    "Paracetamol + Fosfato de Codeina 500mg + 30mg",
    "Paracetamol + Fosfato de Codeína 500mg + 7,5mg",
    "Paracetamol + Propifenazona + Cafeína 250mg + 150mg + 50mg",
    "Paracetamol + Clorzoxazona 300mg + 200mg",
    "Perindopril + Indapamida 4mg + 1,25mg",
    "Perindopril Arginina + Indapamida 5mg + 1,25mg",
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 5mg + 1,25mg + 5mg",
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 5mg + 1,25mg + 10mg",
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 10mg + 2,5mg + 5mg",
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 10mg + 2,5mg + 10mg",
    "Picossulfato de Sódio + Óxido de Magnésio + Ácido Cítrico Anidro 10mg + 3,5g + 12g",
    "Piperacilina Sódica + Tazobactam Sódica 2g + 250mg",
    "Piperacilina Sódica + Tazobactam Sódica 4g + 500mg",
    "Pivalato de Fluocortolona + Cloridrato de Lidocaína 1mg/g + 20mg/g",
    "Policresuleno + Cloridrato de Cinchocaína 50mg/g + 10mg/g",
    "Policresuleno + Cloridrato de Cinchocaína 100mg/g + 27mg/g",
    "Propilenoglicolato de Dapaglifozina Monoidratado + Cloridrato de Saxagliptina Di-Hidratada 10mg + 05mg",
    "Propionato de Testosterona + Isocaproato de Testosterona + Decanoato de Testosterona + Fempropionato de Testosterona 30mg + 60mg + 100mg + 60mg",
    "Ramipril + Hidroclorotiazida 5mg + 12,5mg",
    "Ramipril + Hidroclorotiazida 5mg + 25mg",
    "Ramipril + Besilato de Anlodipino 10mg + 10mg",
    "Ramipril + Besilato de Anlodipino 2,5mg + 5mg",
    "Ramipril + Besilato de Anlodipino 10mg + 5mg",
    "Ramipril + Besilato de Anlodipino 5mg + 5mg",
    "Rosuvastatina Cálcica + Ezetimiba 10mg + 10mg",
    "Rosuvastatina Cálcica + Ezetimiba 20mg + 10mg",
    "Rosuvastatina Cálcica + Ezetimiba 40mg + 10mg",
    "Rosuvastatina Cálcica + Ezetimiba 5mg + 10mg",
    "Rosuvastatina Cálcica + Ezetimiba 10mg + 10mg",
    "Rosuvastatina Cálcica + Ezetimiba 20mg + 10mg",
    "Saxagliptina + Cloridrato de Metformina 2,5mg + 1.000mg",
    "Saxagliptina + Cloridrato de Metformina 5mg + 500mg",
    "Saxagliptina + Cloridrato de Metformina 5mg + 1.000mg",
    "Succinato de Sumatriptana + Naproxeno Sódico 85mg + 500mg",
    "Succinato de Sumatriptana + Naproxeno Sódico 50mg + 500mg",
    "Sulfadiazina de Prata  + Nitrato de Cério 10mg/g + 4mg/g",
    "Sulfametoxazol + Trimetoprima 400mg + 80mg",
    "Sulfametoxazol + Trimetoprima 40mg/mL + 8mg/mL",
    "Sulfametoxazol + Trimetoprima 800mg + 160mg",
    "Sulfametoxazol + Trimetoprima 80mg/mL + 16mg/mL",
    "Sulfato de Ceftolozana + Tazobactam Sódico 1g + 0,5g",
    "Sulfato de Gentamicina + Fosfato Dissódico de Betametasona 3mg/mL + 1mg/mL",
    "Sulfato de Neomicina + Acetato de Clostebol 5mg/g + 5mg/g",
    "Sulfato de Neomicina + Acetato de Clostebol 5mg/g + 5mg/g",
    "Sulfato de Neomicina + Bacitracina Zíncica 5mg/g + 250UI/g",
    "Sulfato de Neomicina + Sulfato de Polimixina + Nistatina + Tinidazol 35.000UI + 35.000UI + 100.000UI + 150mg",
    "Sulfato de Salbutamol + Guaifenesina 0,48mg/mL + 20mg/mL",
    "Tartarato de Brimonidina + Maleato de Timolol 2,0mg/mL + 5,0mg/mL",
    "Telmisartana + Besilato de Anlodipino 40mg + 5mg",
    "Telmisartana + Besilato de Anlodipino 80mg + 5mg",
    "Telmisartana + Besilato de Anlodipino 80mg + 10mg",
    "Telmisartana + Hidroclorotiazida 80mg + 25mg",
    "Telmisartana + Hidroclorotiazida 40mg + 12,5mg",
    "Telmisartana + Hidroclorotiazida 80mg + 12,5mg",
    "Tetraciclina + Anfotericina B 25mg/g + 12,5mg/g",
    "Ticarcilina + Ácido Clavulânico 3,34g + 0,119g",
    "Tinidazol + Tioconazol 30mg/g + 20mg/g",
    "Tioconazol + Tinidazol + Secnidazol 20mg/g + 30mg/g + 1g (2 comp)",
    "Tioconazol + Tinidazol + Secnidazol 20mg/g + 30mg/g + 1g (4 comp)",
    "Tobramicina + Dexametasona 3mg + 1,0mg",
    "Tobramicina + Dexametasona 3mg + 1,0mg",
    "Travoprosta + Maleato de Timolol 0,04mg/mL + 5,0mg/mL",
    "Tretinoína + Fosfato de Clindamicina 0,25mg/g + 12mg/g (eq. 10mg/g)",
    "Tribenosídeo + Cloridrato de Lidocaína 50mg/g + 20mg/g",
    "Valerato de Betametasona + Clioquinol 1mg/g + 30mg/g",
    "Valerato de Betametasona + Clioquinol 1mg/g + 30mg/g",
    "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g",
    "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g",
    "Valerato de Betametasona + Sulfato de Neomicina 1mg/g + 5mg/g",
    "Valerato de Betametasona + Sulfato de Neomicina 1mg/g + 5mg/g",
    "Valerato de Diflucortolona + Nitrato de Isoconazol 1mg/g + 10mg/g",
    "Valsartana + Besilato de Anlodipino 80mg + 5mg",
    "Valsartana + Besilato de Anlodipino 160mg + 5,0mg",
    "Valsartana + Besilato de Anlodipino 160mg + 10,0mg",
    "Valsartana + Besilato de Anlodipino 320mg + 5,0mg",
    "Valsartana + Besilato de Anlodipino 320mg + 10,0mg",
    "Valsartana + Hidroclorotiazida 160mg + 12,5mg",
    "Valsartana + Hidroclorotiazida 160mg + 25mg",
    "Valsartana + Hidroclorotiazida 80mg + 12,5mg",
    "Valsartana + Hidroclorotiazida 320mg + 12,5mg",
    "Valsartana + Hidroclorotiazida 320mg + 25mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 5mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 10mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 5mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 10mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 320mg + 25mg + 10mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 80mg + 12,5mg + 5mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 5mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 10mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 5mg",
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 10mg",
    "Vildagliptina + Cloridrato de Metformina 50mg + 500mg",
    "Vildagliptina + Cloridrato de Metformina 50mg + 850mg",
    "Vildagliptina + Cloridrato de Metformina 50mg + 1.000mg",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 100mcg/dose",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 250mcg/dose",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 500mcg/dose",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 125mcg/dose",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 250mcg/dose",
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 50mcg/dose",
    "Imunoglobulina Humana Anti-D (Rho) 300mcg/2mL",
    "Albumina Humana 1g/50mL (20%)",
    "Insulina Humana Regular 100UI/mL",
    "Insulina Humana Isófana (NPH) 100UI/mL",
    "Insulina Humana Análoga Asparte 100UI/mL",
    "Insulina Humana Análoga Glargina 100UI/mL",
    "Insulina Humana Análoga Lispro 100UI/mL",
    "Insulina Humana Análoga Detemir 100UI/mL",
    "Insulina Humana Análoga Glulisina 100UI/mL",
    "Caneta de Insulina Humana Regular 100UI/mL",
    "Caneta de Insulina Humana Isófana (NPH) 100UI/mL"
  ];

  var meds = {
    "Abacavir (Sulfato) 20mg/mL": [
      "Abacavir (Sulfato)",
      "20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Abacavir (Sulfato) 300mg": [
      "Abacavir (Sulfato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Abiraterona (Acetato) 250mg": [
      "Abiraterona (Acetato)",
      "250mg",
      "com",
      "comprimido"
    ],
    "Abiraterona (Acetato) 500mg": [
      "Abiraterona (Acetato)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Acalabrutinibe 100mg": [
      "Acalabrutinibe",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Acebrofilina 5mg/mL": [
      "Acebrofilina",
      "5mg/mL",
      "xpe",
      "frasco"
    ],
    "Acebrofilina 10mg/mL": [
      "Acebrofilina",
      "10mg/mL",
      "xpe",
      "frasco"
    ],
    "Acebrofilina 5mg/mL": [
      "Acebrofilina",
      "5mg/mL",
      "gel or",
      "frasco"
    ],
    "Aceclofenaco 100mg": [
      "Aceclofenaco",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Aceclofenaco 15mg/g": [
      "Aceclofenaco",
      "15mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Acetato de Fluormetolona 1mg/mL": [
      "Acetato de Fluormetolona",
      "1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Acetato de Glatiramer 20mg/mL": [
      "Acetato de Glatiramer",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Acetato de Glatiramer 40mg/mL": [
      "Acetato de Glatiramer",
      "40mg/mL",
      "sol inj",
      "frasco"
    ],
    "Acetazolamida 250mg": [
      "Acetazolamida",
      "250mg",
      "com",
      "comprimido"
    ],
    "Acetilcisteína 100mg": [
      "Acetilcisteína",
      "100mg",
      "gran",
      "unidade"
    ],
    "Acetilcisteína 200mg": [
      "Acetilcisteína",
      "200mg",
      "gran",
      "unidade"
    ],
    "Acetilcisteína 600mg": [
      "Acetilcisteína",
      "600mg",
      "gran",
      "unidade"
    ],
    "Acetilcisteína 11,5mg/mL": [
      "Acetilcisteína",
      "11,5mg/mL",
      "sol spr nas",
      "frasco"
    ],
    "Acetilcisteína 20mg/mL": [
      "Acetilcisteína",
      "20mg/mL",
      "xpe",
      "frasco"
    ],
    "Acetilcisteína 40mg/mL": [
      "Acetilcisteína",
      "40mg/mL",
      "xpe",
      "frasco"
    ],
    "Acetilcisteína 600mg": [
      "Acetilcisteína",
      "600mg",
      "com efer",
      "comprimido"
    ],
    "Acetilcisteína 100mg/mL": [
      "Acetilcisteína",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Acetilcisteína 200mg": [
      "Acetilcisteína",
      "200mg",
      "com efer",
      "comprimido"
    ],
    "Aciclovir 200mg": [
      "Aciclovir",
      "200mg",
      "com",
      "comprimido"
    ],
    "Aciclovir 250mg/10mL": [
      "Aciclovir",
      "250mg/10mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Aciclovir 50mg/g": [
      "Aciclovir",
      "50mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Aciclovir 400mg": [
      "Aciclovir",
      "400mg",
      "com",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 500mg": [
      "Ácido Acetilsalicílico",
      "500mg",
      "com",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 500mg": [
      "Ácido Acetilsalicílico",
      "500mg",
      "com efer",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 100mg": [
      "Ácido Acetilsalicílico",
      "100mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 300mg": [
      "Ácido Acetilsalicílico",
      "300mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 100mg": [
      "Ácido Acetilsalicílico",
      "100mg",
      "com",
      "comprimido"
    ],
    "Ácido Acetilsalicílico 81mg": [
      "Ácido Acetilsalicílico",
      "81mg",
      "com rev",
      "comprimido"
    ],
    "Ácido Carglúmico 200mg": [
      "Ácido Carglúmico",
      "200mg",
      "com para susp",
      "comprimido"
    ],
    "Ácido Tióctico 600mg": [
      "Ácido Tióctico",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Ácido Ursodesoxicólico 50mg": [
      "Ácido Ursodesoxicólico",
      "50mg",
      "com",
      "comprimido"
    ],
    "Ácido Ursodesoxicólico 150mg": [
      "Ácido Ursodesoxicólico",
      "150mg",
      "com",
      "comprimido"
    ],
    "Ácido Ursodesoxicólico 300mg": [
      "Ácido Ursodesoxicólico",
      "300mg",
      "com",
      "comprimido"
    ],
    "Ácido Valpróico 250mg": [
      "Ácido Valpróico",
      "250mg",
      "cap mole",
      "cápsula"
    ],
    "Acitretina 10mg": [
      "Acitretina",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Acitretina 25mg": [
      "Acitretina",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Adapaleno 1,0mg/g": [
      "Adapaleno",
      "1,0mg/g",
      "gel",
      "frasco"
    ],
    "Adapaleno 3,0mg/g": [
      "Adapaleno",
      "3,0mg/g",
      "gel",
      "frasco"
    ],
    "Adapaleno 1,0mg/g": [
      "Adapaleno",
      "1,0mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Adapaleno 1mg/g": [
      "Adapaleno",
      "1mg/g",
      "gel derm lib prol",
      "frasco"
    ],
    "Agomelatina 25mg": [
      "Agomelatina",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Albendazol 200mg": [
      "Albendazol",
      "200mg",
      "com",
      "comprimido"
    ],
    "Albendazol 400mg": [
      "Albendazol",
      "400mg",
      "com mast",
      "comprimido"
    ],
    "Albendazol 40mg/mL": [
      "Albendazol",
      "40mg/mL",
      "sus or",
      "frasco"
    ],
    "Alcaftadina 2,5mg/mL": [
      "Alcaftadina",
      "2,5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Alendronato Sódico 70mg": [
      "Alendronato Sódico",
      "70mg",
      "com rev",
      "comprimido"
    ],
    "Alfaestradiol 0,25mg/mL": [
      "Alfaestradiol",
      "0,25mg/mL",
      "sol capilar",
      "frasco"
    ],
    "Alfentanila (Cloridrato) 544mcg/mL": [
      "Alfentanila (Cloridrato)",
      "544mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Alfuzosina (Cloridrato) 10mg": [
      "Alfuzosina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Alisquireno (Hemifumarato) 150mg": [
      "Alisquireno (Hemifumarato)",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Alisquireno (Hemifumarato) 300mg": [
      "Alisquireno (Hemifumarato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Alopurinol 100mg": [
      "Alopurinol",
      "100mg",
      "com",
      "comprimido"
    ],
    "Alopurinol 300mg": [
      "Alopurinol",
      "300mg",
      "com",
      "comprimido"
    ],
    "Alprazolam 0,25mg": [
      "Alprazolam",
      "0,25mg",
      "com",
      "comprimido"
    ],
    "Alprazolam 0,5mg": [
      "Alprazolam",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Alprazolam 1mg": [
      "Alprazolam",
      "1mg",
      "com",
      "comprimido"
    ],
    "Alprazolam 2mg": [
      "Alprazolam",
      "2mg",
      "com",
      "comprimido"
    ],
    "Alprazolam 0,5mg": [
      "Alprazolam",
      "0,5mg",
      "com rev lib lenta",
      "comprimido"
    ],
    "Alprazolam 1,0mg": [
      "Alprazolam",
      "1,0mg",
      "com rev lib lenta",
      "comprimido"
    ],
    "Alprazolam 2,0mg": [
      "Alprazolam",
      "2,0mg",
      "com rev lib lenta",
      "comprimido"
    ],
    "Alprostadil 10mcg/mL": [
      "Alprostadil",
      "10mcg/mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Alprostadil 20mcg/mL": [
      "Alprostadil",
      "20mcg/mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Alprostadil 20mcg": [
      "Alprostadil",
      "20mcg",
      "pó liof sol inj",
      "unidade"
    ],
    "Alprostadil 500mcg/mL": [
      "Alprostadil",
      "500mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Amantadina (Cloridrato) 100mg": [
      "Amantadina (Cloridrato)",
      "100mg",
      "com",
      "comprimido"
    ],
    "Ambrisetana 5mg": [
      "Ambrisetana",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Ambrisetana 10mg": [
      "Ambrisetana",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Ambroxol (Cloridrato) 3mg/mL": [
      "Ambroxol (Cloridrato)",
      "3mg/mL",
      "xpe",
      "frasco"
    ],
    "Ambroxol (Cloridrato) 6mg/mL": [
      "Ambroxol (Cloridrato)",
      "6mg/mL",
      "xpe",
      "frasco"
    ],
    "Ambroxol (Cloridrato) 7,5mg/mL": [
      "Ambroxol (Cloridrato)",
      "7,5mg/mL",
      "sol (got)",
      "frasco"
    ],
    "Ambroxol (Cloridrato) 75mg": [
      "Ambroxol (Cloridrato)",
      "75mg",
      "cap lib cont",
      "cápsula"
    ],
    "Amicacina (Sulfato) 50mg/mL": [
      "Amicacina (Sulfato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Amicacina (Sulfato) 125mg/mL": [
      "Amicacina (Sulfato)",
      "125mg/mL",
      "sol inj",
      "frasco"
    ],
    "Amicacina (Sulfato) 250mg/mL": [
      "Amicacina (Sulfato)",
      "250mg/mL",
      "sol inj",
      "frasco"
    ],
    "Aminofilina 24mg/mL": [
      "Aminofilina",
      "24mg/mL",
      "sol inj",
      "frasco"
    ],
    "Aminofilina 100mg": [
      "Aminofilina",
      "100mg",
      "com",
      "comprimido"
    ],
    "Aminofilina 200mg": [
      "Aminofilina",
      "200mg",
      "com",
      "comprimido"
    ],
    "Amiodarona (Cloridrato) 100mg": [
      "Amiodarona (Cloridrato)",
      "100mg",
      "com",
      "comprimido"
    ],
    "Amiodarona (Cloridrato) 200mg": [
      "Amiodarona (Cloridrato)",
      "200mg",
      "com",
      "comprimido"
    ],
    "Amiodarona (Cloridrato) 50mg/mL": [
      "Amiodarona (Cloridrato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Amisulprida 50mg": [
      "Amisulprida",
      "50mg",
      "com",
      "comprimido"
    ],
    "Amisulprida 200mg": [
      "Amisulprida",
      "200mg",
      "com",
      "comprimido"
    ],
    "Amitriptilina (Cloridrato) 25mg": [
      "Amitriptilina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Amitriptilina (Cloridrato) 75mg": [
      "Amitriptilina (Cloridrato)",
      "75mg",
      "com rev",
      "comprimido"
    ],
    "Amitriptilina (Cloridrato) 10mg": [
      "Amitriptilina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Amorolfina 50mg/mL": [
      "Amorolfina",
      "50mg/mL",
      "esmL",
      "frasco"
    ],
    "Amoxicilina 500mg": [
      "Amoxicilina",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Amoxicilina 125mg/5mL": [
      "Amoxicilina",
      "125mg/5mL",
      "pó sus or",
      "unidade"
    ],
    "Amoxicilina 250mg/5mL": [
      "Amoxicilina",
      "250mg/5mL",
      "pó sus or",
      "unidade"
    ],
    "Amoxicilina 500mg/5mL": [
      "Amoxicilina",
      "500mg/5mL",
      "pó sus or",
      "unidade"
    ],
    "Amoxicilina 400mg/5mL": [
      "Amoxicilina",
      "400mg/5mL",
      "pó sus or",
      "unidade"
    ],
    "Amoxicilina 875mg": [
      "Amoxicilina",
      "875mg",
      "com rev",
      "comprimido"
    ],
    "Ampicilina 500mg": [
      "Ampicilina",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Ampicilina Sódica 1g": [
      "Ampicilina Sódica",
      "1g",
      "pó sol inj",
      "unidade"
    ],
    "Anagrelida (Cloridrato) 0,5mg": [
      "Anagrelida (Cloridrato)",
      "0,5mg",
      "cap dura",
      "cápsula"
    ],
    "Anastrozol 1mg": [
      "Anastrozol",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Anfotericina B 5mg/mL": [
      "Anfotericina B",
      "5mg/mL",
      "sus inj",
      "frasco"
    ],
    "Anfotericina B (Lipossomal) 50mg/12mL": [
      "Anfotericina B (Lipossomal)",
      "50mg/12mL",
      "pó sol inj",
      "unidade"
    ],
    "Anidulafungina 100mg/30mL": [
      "Anidulafungina",
      "100mg/30mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Anlodipino (Besilato) 5,0mg": [
      "Anlodipino (Besilato)",
      "5,0mg",
      "com",
      "comprimido"
    ],
    "Anlodipino (Besilato) 10mg": [
      "Anlodipino (Besilato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Anlodipino (Besilato) 2,5mg": [
      "Anlodipino (Besilato)",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Apixabana 2,5mg": [
      "Apixabana",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Apixabana 5mg": [
      "Apixabana",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Apremilaste 10mg": [
      "Apremilaste",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Apremilaste 20mg": [
      "Apremilaste",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Apremilaste 30mg": [
      "Apremilaste",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Aripiprazol 10mg": [
      "Aripiprazol",
      "10mg",
      "com",
      "comprimido"
    ],
    "Aripiprazol 15mg": [
      "Aripiprazol",
      "15mg",
      "com",
      "comprimido"
    ],
    "Aripiprazol 20mg": [
      "Aripiprazol",
      "20mg",
      "com",
      "comprimido"
    ],
    "Aripiprazol 30mg": [
      "Aripiprazol",
      "30mg",
      "com",
      "comprimido"
    ],
    "Aripiprazol 1mg/mL": [
      "Aripiprazol",
      "1mg/mL",
      "sus",
      "frasco"
    ],
    "Aripiprazol 20mg/mL": [
      "Aripiprazol",
      "20mg/mL",
      "sus gotas",
      "frasco"
    ],
    "Armodafinila 150mg": [
      "Armodafinila",
      "150mg",
      "com",
      "comprimido"
    ],
    "Armodafinila 250mg": [
      "Armodafinila",
      "250mg",
      "com",
      "comprimido"
    ],
    "Atazanavir (Sulfato) 100mg": [
      "Atazanavir (Sulfato)",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Atazanavir (Sulfato) 150mg": [
      "Atazanavir (Sulfato)",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Atazanavir (Sulfato) 200mg": [
      "Atazanavir (Sulfato)",
      "200mg",
      "cap dura",
      "cápsula"
    ],
    "Atazanavir (Sulfato) 300mg": [
      "Atazanavir (Sulfato)",
      "300mg",
      "cap dura",
      "cápsula"
    ],
    "Atazanavir (Sulfato) 50mg/1,5g": [
      "Atazanavir (Sulfato)",
      "50mg/1,5g",
      "po sol extemp",
      "unidade"
    ],
    "Atenolol 25mg": [
      "Atenolol",
      "25mg",
      "com",
      "comprimido"
    ],
    "Atenolol 50mg": [
      "Atenolol",
      "50mg",
      "com",
      "comprimido"
    ],
    "Atenolol 100mg": [
      "Atenolol",
      "100mg",
      "com",
      "comprimido"
    ],
    "Atorvastatina Cálcica 10mg": [
      "Atorvastatina Cálcica",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Atorvastatina Cálcica 20mg": [
      "Atorvastatina Cálcica",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Atorvastatina Cálcica 40mg": [
      "Atorvastatina Cálcica",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Atorvastatina Cálcica 80mg": [
      "Atorvastatina Cálcica",
      "80mg",
      "com rev",
      "comprimido"
    ],
    "Atosibano (Acetato) 7,5mg/mL": [
      "Atosibano (Acetato)",
      "7,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Atosibano (Acetato) 7,5mg/mL": [
      "Atosibano (Acetato)",
      "7,5mg/mL",
      "sol infus",
      "frasco"
    ],
    "Atracúrio (Besilato) 10mg/mL": [
      "Atracúrio (Besilato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Atropina (Sulfato) 0,25mg/mL": [
      "Atropina (Sulfato)",
      "0,25mg/mL",
      "sol inj",
      "frasco"
    ],
    "Atropina (Sulfato) 0,5mg/mL": [
      "Atropina (Sulfato)",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Axetilcefuroxima 250mg/5mL": [
      "Axetilcefuroxima",
      "250mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Axetilcefuroxima 250mg": [
      "Axetilcefuroxima",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Axetilcefuroxima 500mg": [
      "Axetilcefuroxima",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Axetilcefuroxima 250mg": [
      "Axetilcefuroxima",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Axetilcefuroxima 500mg": [
      "Axetilcefuroxima",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Axitinibe 1mg": [
      "Axitinibe",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Axitinibe 5mg": [
      "Axitinibe",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Azacitidina 100mg/4mL": [
      "Azacitidina",
      "100mg/4mL",
      "pó liof sus inj",
      "unidade"
    ],
    "Azatioprina 50mg": [
      "Azatioprina",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Ácido Azelaico 150mg/g": [
      "Ácido Azelaico",
      "150mg/g",
      "gel",
      "frasco"
    ],
    "Ácido Azelaico 200mg/g": [
      "Ácido Azelaico",
      "200mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Azelastina (Cloridrato) 0,9pcc": [
      "Azelastina (Cloridrato)",
      "0,9pcc",
      "sol nas (spr)",
      "frasco"
    ],
    "Azitromicina Di-Hidratada 200mg/5mL": [
      "Azitromicina Di-Hidratada",
      "200mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Azitromicina Di-Hidratada 500mg": [
      "Azitromicina Di-Hidratada",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Azitromicina Di-Hidratada 500mg/4,8mL": [
      "Azitromicina Di-Hidratada",
      "500mg/4,8mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Azitromicina Di-Hidratada 1000mg": [
      "Azitromicina Di-Hidratada",
      "1000mg",
      "com rev",
      "comprimido"
    ],
    "Aztreonam 1000mg": [
      "Aztreonam",
      "1000mg",
      "pó sol inj",
      "unidade"
    ],
    "Baclofeno 10mg": [
      "Baclofeno",
      "10mg",
      "com",
      "comprimido"
    ],
    "Bambuterol (Cloridrato) 1mg/mL": [
      "Bambuterol (Cloridrato)",
      "1mg/mL",
      "sol oral",
      "frasco"
    ],
    "Baricitinibe 2mg": [
      "Baricitinibe",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Baricitinibe 4mg": [
      "Baricitinibe",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Beclometasona (Dipropionato) 50mcg/dose": [
      "Beclometasona (Dipropionato)",
      "50mcg/dose",
      "sol aer inal or + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 100mcg/dose": [
      "Beclometasona (Dipropionato)",
      "100mcg/dose",
      "sol aer inal or + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 200mcg/dose": [
      "Beclometasona (Dipropionato)",
      "200mcg/dose",
      "sol aer inal or + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 250mcg/dose": [
      "Beclometasona (Dipropionato)",
      "250mcg/dose",
      "sol aer inal or + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 50mcg/dose": [
      "Beclometasona (Dipropionato)",
      "50mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 100mcg/dose": [
      "Beclometasona (Dipropionato)",
      "100mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 200mcg/dose": [
      "Beclometasona (Dipropionato)",
      "200mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 250mcg/dose": [
      "Beclometasona (Dipropionato)",
      "250mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 50mcg/dose": [
      "Beclometasona (Dipropionato)",
      "50mcg/dose",
      "sol aer inal or+ inal + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 100mcg/dose": [
      "Beclometasona (Dipropionato)",
      "100mcg/dose",
      "sol aer inal or+ inal + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 200mcg/dose": [
      "Beclometasona (Dipropionato)",
      "200mcg/dose",
      "sol aer inal or+ inal + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 250mcg/dose": [
      "Beclometasona (Dipropionato)",
      "250mcg/dose",
      "sol aer inal or+ inal + espaç",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 100mcg/dose": [
      "Beclometasona (Dipropionato)",
      "100mcg/dose",
      "sus nas",
      "frasco"
    ],
    "Beclometasona (Dipropionato) 50mcg/mg": [
      "Beclometasona (Dipropionato)",
      "50mcg/mg",
      "sus spr nas",
      "frasco"
    ],
    "Benazepril (Cloridrato) 5mg": [
      "Benazepril (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Benazepril (Cloridrato) 10mg": [
      "Benazepril (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Bendamustina (Cloridrato) 25mg": [
      "Bendamustina (Cloridrato)",
      "25mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Bendamustina (Cloridrato) 100mg": [
      "Bendamustina (Cloridrato)",
      "100mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Benfotiamina 150mg": [
      "Benfotiamina",
      "150mg",
      "drag",
      "drágea"
    ],
    "Benzidamina (Cloridrato) 1,5mg/mL": [
      "Benzidamina (Cloridrato)",
      "1,5mg/mL",
      "colut spray",
      "frasco"
    ],
    "Benzidamina (Cloridrato) 1,5mg/mL": [
      "Benzidamina (Cloridrato)",
      "1,5mg/mL",
      "colut",
      "frasco"
    ],
    "Benzidamina (Cloridrato) 3mg": [
      "Benzidamina (Cloridrato)",
      "3mg",
      "past",
      "frasco"
    ],
    "Benzidamina (Cloridrato) 5mg/g": [
      "Benzidamina (Cloridrato)",
      "5mg/g",
      "crem dental",
      "bisnaga"
    ],
    "Benzilpenicilina  Benzatina 1.200.000UI": [
      "Benzilpenicilina  Benzatina",
      "1.200.000UI",
      "sus inj",
      "frasco"
    ],
    "Benzilpenicilina  Benzatina 600.000UI": [
      "Benzilpenicilina  Benzatina",
      "600.000UI",
      "sus inj",
      "frasco"
    ],
    "Benzoato de Alogliptina 12,5mg": [
      "Benzoato de Alogliptina",
      "12,5mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina 25mg": [
      "Benzoato de Alogliptina",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Benzoilmetronidazol 40mg/mL": [
      "Benzoilmetronidazol",
      "40mg/mL",
      "susp oral",
      "frasco"
    ],
    "Betaistina (Dicloridrato) 8mg": [
      "Betaistina (Dicloridrato)",
      "8mg",
      "com",
      "comprimido"
    ],
    "Betaistina (Dicloridrato) 16mg": [
      "Betaistina (Dicloridrato)",
      "16mg",
      "com",
      "comprimido"
    ],
    "Betaistina (Dicloridrato) 24mg": [
      "Betaistina (Dicloridrato)",
      "24mg",
      "com",
      "comprimido"
    ],
    "Betaistina (Dicloridrato) 32mg": [
      "Betaistina (Dicloridrato)",
      "32mg",
      "com lib prol",
      "comprimido"
    ],
    "Betaistina (Dicloridrato) 48mg": [
      "Betaistina (Dicloridrato)",
      "48mg",
      "com lib prol",
      "comprimido"
    ],
    "Betametasona 0,1mg/mL": [
      "Betametasona",
      "0,1mg/mL",
      "elx",
      "frasco"
    ],
    "Betametasona 0,5mg": [
      "Betametasona",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Betametasona 2mg": [
      "Betametasona",
      "2mg",
      "com",
      "comprimido"
    ],
    "Betametasona (Dipropionato) 0,64mg/g": [
      "Betametasona (Dipropionato)",
      "0,64mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Betametasona (Dipropionato) 0,64mg/g": [
      "Betametasona (Dipropionato)",
      "0,64mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Betametasona (Dipropionato) 0,64mg/mL": [
      "Betametasona (Dipropionato)",
      "0,64mg/mL",
      "sus derm",
      "frasco"
    ],
    "Betametasona (Fosfato Dissódico) 4mg/mL": [
      "Betametasona (Fosfato Dissódico)",
      "4mg/mL",
      "sol inj",
      "frasco"
    ],
    "Betametasona (Valerato) 1mg/g": [
      "Betametasona (Valerato)",
      "1mg/g",
      "loção",
      "frasco"
    ],
    "Betametasona (Valerato) 1mg/g": [
      "Betametasona (Valerato)",
      "1mg/g",
      "solução capilar",
      "frasco"
    ],
    "Betametasona (Valerato) 1mg/g": [
      "Betametasona (Valerato)",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Betametasona (Valerato) 1mg/g": [
      "Betametasona (Valerato)",
      "1mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Betaxolol (Cloridrato) 5,0mg/mL": [
      "Betaxolol (Cloridrato)",
      "5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Betaxolol (Cloridrato) 2,5mg/mL": [
      "Betaxolol (Cloridrato)",
      "2,5mg/mL",
      "sus oft",
      "frasco"
    ],
    "Bezafibrato 200mg": [
      "Bezafibrato",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Bezafibrato 400mg": [
      "Bezafibrato",
      "400mg",
      "com desint lenta",
      "comprimido"
    ],
    "Bicalutamida 50mg": [
      "Bicalutamida",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Bilastina 20mg": [
      "Bilastina",
      "20mg",
      "com",
      "comprimido"
    ],
    "Bilastina 2,5mg/mL": [
      "Bilastina",
      "2,5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Bimatoprosta 0,3mg/mL": [
      "Bimatoprosta",
      "0,3mg/mL",
      "sol derm",
      "frasco"
    ],
    "Bimatoprosta 0,1mg/mL": [
      "Bimatoprosta",
      "0,1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Bimatoprosta 0,3mg/mL": [
      "Bimatoprosta",
      "0,3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Biperideno (Cloridrato) 2mg": [
      "Biperideno (Cloridrato)",
      "2mg",
      "com",
      "comprimido"
    ],
    "Biperideno (Cloridrato) 4mg": [
      "Biperideno (Cloridrato)",
      "4mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Bisacodil 5mg": [
      "Bisacodil",
      "5mg",
      "drag",
      "drágea"
    ],
    "Bisoprolol (Hemifumarato) 1,25mg": [
      "Bisoprolol (Hemifumarato)",
      "1,25mg",
      "com rev",
      "comprimido"
    ],
    "Bisoprolol (Hemifumarato) 2,5mg": [
      "Bisoprolol (Hemifumarato)",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Bisoprolol (Hemifumarato) 5mg": [
      "Bisoprolol (Hemifumarato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Bisoprolol (Hemifumarato) 10,0mg": [
      "Bisoprolol (Hemifumarato)",
      "10,0mg",
      "com rev",
      "comprimido"
    ],
    "Bleomicina (Sulfato) 15UI": [
      "Bleomicina (Sulfato)",
      "15UI",
      "pó liof sol inj",
      "unidade"
    ],
    "Bortezomibe 1mg": [
      "Bortezomibe",
      "1mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Bortezomibe 3,5mg": [
      "Bortezomibe",
      "3,5mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Bosentana 62,5mg": [
      "Bosentana",
      "62,5mg",
      "com rev",
      "comprimido"
    ],
    "Bosentana 125mg": [
      "Bosentana",
      "125mg",
      "com rev",
      "comprimido"
    ],
    "Brexpiprazol 0,25mg": [
      "Brexpiprazol",
      "0,25mg",
      "com rev",
      "comprimido"
    ],
    "Brexpiprazol 0,50mg": [
      "Brexpiprazol",
      "0,50mg",
      "com rev",
      "comprimido"
    ],
    "Brexpiprazol 1mg": [
      "Brexpiprazol",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Brexpiprazol 2mg": [
      "Brexpiprazol",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Brexpiprazol 3mg": [
      "Brexpiprazol",
      "3mg",
      "com rev",
      "comprimido"
    ],
    "Brimonidina (Tartarato) 2mg/mL": [
      "Brimonidina (Tartarato)",
      "2mg/mL",
      "sol oft",
      "frasco"
    ],
    "Brimonidina (Tartarato) 1,5mg/mL": [
      "Brimonidina (Tartarato)",
      "1,5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Brimonidina (Tartarato) 1mg/mL": [
      "Brimonidina (Tartarato)",
      "1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Brinzolamida 10mg/mL": [
      "Brinzolamida",
      "10mg/mL",
      "sus oft",
      "frasco"
    ],
    "Brivaracetam 10mg": [
      "Brivaracetam",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Brivaracetam 25mg": [
      "Brivaracetam",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Brivaracetam 50mg": [
      "Brivaracetam",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Brivaracetam 75mg": [
      "Brivaracetam",
      "75mg",
      "com rev",
      "comprimido"
    ],
    "Brivaracetam 100mg": [
      "Brivaracetam",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Bromazepam 2,5mg/mL": [
      "Bromazepam",
      "2,5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Bromazepam 3,0mg": [
      "Bromazepam",
      "3,0mg",
      "com",
      "comprimido"
    ],
    "Bromazepam 6,0mg": [
      "Bromazepam",
      "6,0mg",
      "com",
      "comprimido"
    ],
    "Brometo de Glicopirrônio 50mcg": [
      "Brometo de Glicopirrônio",
      "50mcg",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Brometo de Pancurônio 2mg/mL": [
      "Brometo de Pancurônio",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Bromexina (Cloridrato) 0,8mg/mL": [
      "Bromexina (Cloridrato)",
      "0,8mg/mL",
      "xpe (infantil)",
      "frasco"
    ],
    "Bromexina (Cloridrato) 1,6mg/mL": [
      "Bromexina (Cloridrato)",
      "1,6mg/mL",
      "xpe (adulto)",
      "frasco"
    ],
    "Bromexina (Cloridrato) 2,0mg/mL": [
      "Bromexina (Cloridrato)",
      "2,0mg/mL",
      "sol oral",
      "frasco"
    ],
    "Bromidrato de Galantamina 8,0mg": [
      "Bromidrato de Galantamina",
      "8,0mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Bromidrato de Galantamina 16mg": [
      "Bromidrato de Galantamina",
      "16mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Bromidrato de Galantamina 24mg": [
      "Bromidrato de Galantamina",
      "24mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Bromocriptina (Mesilato) 2,5mg": [
      "Bromocriptina (Mesilato)",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Bromoprida 10mg": [
      "Bromoprida",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Bromoprida 4mg/mL": [
      "Bromoprida",
      "4mg/mL",
      "sol oral",
      "frasco"
    ],
    "Bromoprida 5mg/mL": [
      "Bromoprida",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Buclizina (Dicloridrato) 25mg": [
      "Buclizina (Dicloridrato)",
      "25mg",
      "com",
      "comprimido"
    ],
    "Budesonida 32mcg/dose": [
      "Budesonida",
      "32mcg/dose",
      "sus spr nas",
      "frasco"
    ],
    "Budesonida 64mcg/dose": [
      "Budesonida",
      "64mcg/dose",
      "sus spr nas",
      "frasco"
    ],
    "Budesonida 3mg": [
      "Budesonida",
      "3mg",
      "cap dura lib retard",
      "cápsula"
    ],
    "Budesonida 2,3mg": [
      "Budesonida",
      "2,3mg",
      "emul ret",
      "frasco"
    ],
    "Budesonida 0,25mg/mL": [
      "Budesonida",
      "0,25mg/mL",
      "sus inal",
      "frasco"
    ],
    "Budesonida 0,50mg/mL": [
      "Budesonida",
      "0,50mg/mL",
      "sus inal",
      "frasco"
    ],
    "Budesonida 100mcg/dose": [
      "Budesonida",
      "100mcg/dose",
      "sus aq nas",
      "frasco"
    ],
    "Budesonida 200mcg": [
      "Budesonida",
      "200mcg",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Budesonida 400mcg": [
      "Budesonida",
      "400mcg",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Budesonida 50mcg/dose": [
      "Budesonida",
      "50mcg/dose",
      "sus spr nas",
      "frasco"
    ],
    "Budesonida 100mcg/dose": [
      "Budesonida",
      "100mcg/dose",
      "sus  spr nas",
      "frasco"
    ],
    "Buflomedil (Cloridrato) 150mg": [
      "Buflomedil (Cloridrato)",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Buflomedil (Cloridrato) 300 mg": [
      "Buflomedil (Cloridrato)",
      "300 mg",
      "com rev",
      "comprimido"
    ],
    "Bupivacaína (Cloridrato) 5mg/mL": [
      "Bupivacaína (Cloridrato)",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Buprenorfina 5mcg/h": [
      "Buprenorfina",
      "5mcg/h",
      "ades",
      "adesivo"
    ],
    "Buprenorfina 10mcg/h": [
      "Buprenorfina",
      "10mcg/h",
      "ades",
      "adesivo"
    ],
    "Buprenorfina 20mcg/h": [
      "Buprenorfina",
      "20mcg/h",
      "ades",
      "adesivo"
    ],
    "Buprenorfina 35mcg/h": [
      "Buprenorfina",
      "35mcg/h",
      "ades",
      "adesivo"
    ],
    "Buprenorfina 52,5mcg/h": [
      "Buprenorfina",
      "52,5mcg/h",
      "ades",
      "adesivo"
    ],
    "Buprenorfina 70mcg/h": [
      "Buprenorfina",
      "70mcg/h",
      "ades",
      "adesivo"
    ],
    "Bupropiona (Cloridrato) 150mg": [
      "Bupropiona (Cloridrato)",
      "150mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Bupropiona (Cloridrato) 300mg": [
      "Bupropiona (Cloridrato)",
      "300mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Bupropiona (Cloridrato) - Indicação Antidepressivo 150mg": [
      "Bupropiona (Cloridrato) - Indicação Antidepressivo",
      "150mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Bupropiona (Cloridrato) - Indicação Antitabagismo 150mg": [
      "Bupropiona (Cloridrato) - Indicação Antitabagismo",
      "150mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Buspirona (Cloridrato) 5mg": [
      "Buspirona (Cloridrato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Buspirona (Cloridrato) 10mg": [
      "Buspirona (Cloridrato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Butenafina (Cloridrato) 10mg/g": [
      "Butenafina (Cloridrato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Butoconazol (Nitrato) 20mg/g": [
      "Butoconazol (Nitrato)",
      "20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Cabazitaxel 40mg/mL": [
      "Cabazitaxel",
      "40mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cabergolina 0,5mg": [
      "Cabergolina",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Calcipotriol 50mcg/g": [
      "Calcipotriol",
      "50mcg/g",
      "pom derm",
      "bisnaga"
    ],
    "Calcitonina (Sintética de Salmão) 200UI/dose": [
      "Calcitonina (Sintética de Salmão)",
      "200UI/dose",
      "sol spr nas",
      "frasco"
    ],
    "Calcitriol 1mcg/mL": [
      "Calcitriol",
      "1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Canaglifozina Anidra 100mg": [
      "Canaglifozina Anidra",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Canaglifozina Anidra 300mg": [
      "Canaglifozina Anidra",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Candesartana Cilexetila 8mg": [
      "Candesartana Cilexetila",
      "8mg",
      "com",
      "comprimido"
    ],
    "Candesartana Cilexetila 16mg": [
      "Candesartana Cilexetila",
      "16mg",
      "com",
      "comprimido"
    ],
    "Candesartana Cilexetila 32mg": [
      "Candesartana Cilexetila",
      "32mg",
      "com",
      "comprimido"
    ],
    "Capecitabina 150mg": [
      "Capecitabina",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Capecitabina 500mg": [
      "Capecitabina",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Captopril 25mg": [
      "Captopril",
      "25mg",
      "com",
      "comprimido"
    ],
    "Captopril 50mg": [
      "Captopril",
      "50mg",
      "com",
      "comprimido"
    ],
    "Captopril 12,5mg": [
      "Captopril",
      "12,5mg",
      "com",
      "comprimido"
    ],
    "Carbamazepina 20mg/mL": [
      "Carbamazepina",
      "20mg/mL",
      "sus or",
      "frasco"
    ],
    "Carbamazepina 200mg": [
      "Carbamazepina",
      "200mg",
      "com",
      "comprimido"
    ],
    "Carbamazepina 400mg": [
      "Carbamazepina",
      "400mg",
      "com",
      "comprimido"
    ],
    "Carbamazepina 200mg": [
      "Carbamazepina",
      "200mg",
      "com desint lenta",
      "comprimido"
    ],
    "Carbamazepina 400mg": [
      "Carbamazepina",
      "400mg",
      "com desint lenta",
      "comprimido"
    ],
    "Carbocisteína 20mg/mL": [
      "Carbocisteína",
      "20mg/mL",
      "xpe",
      "frasco"
    ],
    "Carbocisteína 50mg/mL": [
      "Carbocisteína",
      "50mg/mL",
      "xpe",
      "frasco"
    ],
    "Carboplatina 10mg/mL": [
      "Carboplatina",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Carboplatina 150mg": [
      "Carboplatina",
      "150mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Carfilzomibe 60mg": [
      "Carfilzomibe",
      "60mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Carvedilol 3,125mg": [
      "Carvedilol",
      "3,125mg",
      "com",
      "comprimido"
    ],
    "Carvedilol 6,25mg": [
      "Carvedilol",
      "6,25mg",
      "com",
      "comprimido"
    ],
    "Carvedilol 12,5mg": [
      "Carvedilol",
      "12,5mg",
      "com",
      "comprimido"
    ],
    "Carvedilol 25mg": [
      "Carvedilol",
      "25mg",
      "com",
      "comprimido"
    ],
    "Caspofungina (Acetato) 50mg": [
      "Caspofungina (Acetato)",
      "50mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Caspofungina (Acetato) 70mg": [
      "Caspofungina (Acetato)",
      "70mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Cefadroxila 500mg": [
      "Cefadroxila",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Cefadroxila 50mg/mL": [
      "Cefadroxila",
      "50mg/mL",
      "po sus or",
      "unidade"
    ],
    "Cefadroxila 100mg/mL": [
      "Cefadroxila",
      "100mg/mL",
      "po sus or",
      "unidade"
    ],
    "Cefalexina Monoidratada 500mg": [
      "Cefalexina Monoidratada",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Cefalexina Monoidratada 50mg/mL": [
      "Cefalexina Monoidratada",
      "50mg/mL",
      "sus or",
      "frasco"
    ],
    "Cefalexina Monoidratada 50mg/mL": [
      "Cefalexina Monoidratada",
      "50mg/mL",
      "po sus or",
      "unidade"
    ],
    "Cefalexina Monoidratada 1,5g/15mL (100mg/mL)": [
      "Cefalexina Monoidratada",
      "1,5g/15mL (100mg/mL)",
      "po sol extemp",
      "unidade"
    ],
    "Cefalexina Monoidratada 100mg/mL": [
      "Cefalexina Monoidratada",
      "100mg/mL",
      "sus or",
      "frasco"
    ],
    "Cefalexina Monoidratada 500mg": [
      "Cefalexina Monoidratada",
      "500mg",
      "drag",
      "drágea"
    ],
    "Cefalexina Monoidratada 1000mg": [
      "Cefalexina Monoidratada",
      "1000mg",
      "drag",
      "drágea"
    ],
    "Cefalotina Sódica (Tamponada) 1000mg": [
      "Cefalotina Sódica (Tamponada)",
      "1000mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Cefazolina Sódica 250mg": [
      "Cefazolina Sódica",
      "250mg",
      "pó sol inj",
      "unidade"
    ],
    "Cefazolina Sódica 500mg": [
      "Cefazolina Sódica",
      "500mg",
      "pó sol inj",
      "unidade"
    ],
    "Cefazolina Sódica 1.000mg/100mL": [
      "Cefazolina Sódica",
      "1.000mg/100mL",
      "pó sol inj",
      "unidade"
    ],
    "Cefotaxima Sódica 1.000mg": [
      "Cefotaxima Sódica",
      "1.000mg",
      "pó sol inj",
      "unidade"
    ],
    "Ceftarolina Fosamila 600mg": [
      "Ceftarolina Fosamila",
      "600mg",
      "Po Sol Ext",
      "unidade"
    ],
    "Ceftriaxona Dissódica Hemieptaidratada 500mg/5mL": [
      "Ceftriaxona Dissódica Hemieptaidratada",
      "500mg/5mL",
      "pó sol inj",
      "unidade"
    ],
    "Ceftriaxona Dissódica Hemieptaidratada 1.000mg/10mL": [
      "Ceftriaxona Dissódica Hemieptaidratada",
      "1.000mg/10mL",
      "pó sol inj",
      "unidade"
    ],
    "Ceftriaxona Dissódica Hemieptaidratada 500mg/2mL": [
      "Ceftriaxona Dissódica Hemieptaidratada",
      "500mg/2mL",
      "pó sol inj (im)",
      "unidade"
    ],
    "Ceftriaxona Dissódica Hemieptaidratada 1.000mg/3,5mL": [
      "Ceftriaxona Dissódica Hemieptaidratada",
      "1.000mg/3,5mL",
      "pó sol inj (im)",
      "unidade"
    ],
    "Cefuroxima Sódica 750mg": [
      "Cefuroxima Sódica",
      "750mg",
      "pó sol inj",
      "unidade"
    ],
    "Celecoxibe 100mg": [
      "Celecoxibe",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Celecoxibe 200mg": [
      "Celecoxibe",
      "200mg",
      "cap dura",
      "cápsula"
    ],
    "Cetirizina (Dicloridrato) 10mg": [
      "Cetirizina (Dicloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Cetirizina (Dicloridrato) 1mg/mL": [
      "Cetirizina (Dicloridrato)",
      "1mg/mL",
      "sol oral",
      "frasco"
    ],
    "Cetirizina (Dicloridrato) 10mg": [
      "Cetirizina (Dicloridrato)",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Cetoconazol 200mg": [
      "Cetoconazol",
      "200mg",
      "com",
      "comprimido"
    ],
    "Cetoconazol 20mg/g": [
      "Cetoconazol",
      "20mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Cetoconazol 20mg/g": [
      "Cetoconazol",
      "20mg/g",
      "shampoo",
      "frasco"
    ],
    "Cetoprofeno 150mg": [
      "Cetoprofeno",
      "150mg",
      "com lib prol",
      "comprimido"
    ],
    "Cetoprofeno 100mg": [
      "Cetoprofeno",
      "100mg",
      "sup",
      "supositório"
    ],
    "Cetoprofeno 20mg/mL": [
      "Cetoprofeno",
      "20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Cetoprofeno 25mg": [
      "Cetoprofeno",
      "25mg",
      "gel",
      "frasco"
    ],
    "Cetoprofeno 50mg": [
      "Cetoprofeno",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Cetoprofeno 1mg/mL": [
      "Cetoprofeno",
      "1mg/mL",
      "xpe",
      "frasco"
    ],
    "Cetoprofeno 100mg": [
      "Cetoprofeno",
      "100mg",
      "com lib retard",
      "comprimido"
    ],
    "Cetoprofeno 50mg/mL": [
      "Cetoprofeno",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cetoprofeno 100mg/2mL": [
      "Cetoprofeno",
      "100mg/2mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Cetoprofeno 200mg": [
      "Cetoprofeno",
      "200mg",
      "com lib retard",
      "comprimido"
    ],
    "Cetoprofeno (Lisinato) 160mg": [
      "Cetoprofeno (Lisinato)",
      "160mg",
      "cap",
      "cápsula"
    ],
    "Cetoprofeno (Lisinato) 320mg": [
      "Cetoprofeno (Lisinato)",
      "320mg",
      "cap",
      "cápsula"
    ],
    "Cetotifeno (Fumarato) 0,250 mg/mL": [
      "Cetotifeno (Fumarato)",
      "0,250 mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cetrorrelix (Acetato) 0,25mg": [
      "Cetrorrelix (Acetato)",
      "0,25mg",
      "pó liof inj",
      "unidade"
    ],
    "Ciclesonida 50 mcg/dose": [
      "Ciclesonida",
      "50 mcg/dose",
      "sus spr nas",
      "frasco"
    ],
    "Ciclesonida 80mcg/dose": [
      "Ciclesonida",
      "80mcg/dose",
      "sol inal",
      "frasco"
    ],
    "Ciclesonida 160mcg/dose": [
      "Ciclesonida",
      "160mcg/dose",
      "sol inal",
      "frasco"
    ],
    "Ciclobenzaprina (Cloridrato) 5mg": [
      "Ciclobenzaprina (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Ciclobenzaprina (Cloridrato) 10mg": [
      "Ciclobenzaprina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Ciclobenzaprina (Cloridrato) 15mg": [
      "Ciclobenzaprina (Cloridrato)",
      "15mg",
      "cap dur lib prol",
      "cápsula"
    ],
    "Ciclofosfamida 20mg/mL": [
      "Ciclofosfamida",
      "20mg/mL",
      "po liof inj prep extemp",
      "unidade"
    ],
    "Ciclopentolato (Cloridrato) 10mg/mL": [
      "Ciclopentolato (Cloridrato)",
      "10mg/mL",
      "sol oft",
      "frasco"
    ],
    "Ciclopirox 80mg/g": [
      "Ciclopirox",
      "80mg/g",
      "esmalte",
      "frasco"
    ],
    "Ciclopirox Olamina 10mg/g": [
      "Ciclopirox Olamina",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Ciclopirox Olamina 10mg/mL": [
      "Ciclopirox Olamina",
      "10mg/mL",
      "sol top",
      "frasco"
    ],
    "Ciclosporina 0,5mg/g": [
      "Ciclosporina",
      "0,5mg/g",
      "emul oft",
      "frasco"
    ],
    "Ciclosporina 50mg/mL": [
      "Ciclosporina",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ciclosporina 100mg/mL": [
      "Ciclosporina",
      "100mg/mL",
      "sol oral",
      "frasco"
    ],
    "Ciclosporina 25mg": [
      "Ciclosporina",
      "25mg",
      "cap mole",
      "cápsula"
    ],
    "Ciclosporina 50mg": [
      "Ciclosporina",
      "50mg",
      "cap mole",
      "cápsula"
    ],
    "Ciclosporina 100mg": [
      "Ciclosporina",
      "100mg",
      "cap mole",
      "cápsula"
    ],
    "Ciclossilicato de Zircônio Sódico Hidratado 5g": [
      "Ciclossilicato de Zircônio Sódico Hidratado",
      "5g",
      "po sus or",
      "unidade"
    ],
    "Ciclossilicato de Zircônio Sódico Hidratado 10g": [
      "Ciclossilicato de Zircônio Sódico Hidratado",
      "10g",
      "po sus or",
      "unidade"
    ],
    "Cilazapril 1mg": [
      "Cilazapril",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Cilazapril 2,5mg": [
      "Cilazapril",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Cilazapril 5,0mg": [
      "Cilazapril",
      "5,0mg",
      "com rev",
      "comprimido"
    ],
    "Cilostazol 50mg": [
      "Cilostazol",
      "50mg",
      "com",
      "comprimido"
    ],
    "Cilostazol 100mg": [
      "Cilostazol",
      "100mg",
      "com",
      "comprimido"
    ],
    "Cimetidina 150mg/mL": [
      "Cimetidina",
      "150mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cinacalcete (Cloridrato) 30mg": [
      "Cinacalcete (Cloridrato)",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Cinacalcete (Cloridrato) 60mg": [
      "Cinacalcete (Cloridrato)",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Cinarizina 25mg": [
      "Cinarizina",
      "25mg",
      "com",
      "comprimido"
    ],
    "Cinarizina 75mg": [
      "Cinarizina",
      "75mg",
      "com",
      "comprimido"
    ],
    "Ciprofibrato 100mg": [
      "Ciprofibrato",
      "100mg",
      "com",
      "comprimido"
    ],
    "Ciprofloxacino (Cloridrato) 250mg": [
      "Ciprofloxacino (Cloridrato)",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Ciprofloxacino (Cloridrato) 500mg": [
      "Ciprofloxacino (Cloridrato)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Ciprofloxacino (Cloridrato) 3mg/mL": [
      "Ciprofloxacino (Cloridrato)",
      "3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Ciprofloxacino (Cloridrato) 3mg/mL": [
      "Ciprofloxacino (Cloridrato)",
      "3mg/mL",
      "sol oto",
      "frasco"
    ],
    "Ciprofloxacino (Solução de Cloreto de Sódio) 2mg/mL": [
      "Ciprofloxacino (Solução de Cloreto de Sódio)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ciproterona (Acetato) 50mg": [
      "Ciproterona (Acetato)",
      "50mg",
      "com",
      "comprimido"
    ],
    "Ciproterona (Acetato) 100mg": [
      "Ciproterona (Acetato)",
      "100mg",
      "com",
      "comprimido"
    ],
    "Cisatracúrio (Besilato) 2mg/mL": [
      "Cisatracúrio (Besilato)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cisatracúrio (Besilato) 5mg/mL": [
      "Cisatracúrio (Besilato)",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cisplatina 1mg/mL": [
      "Cisplatina",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cisplatina 0,5mg/mL": [
      "Cisplatina",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Citalopram (Bromidrato) 20mg": [
      "Citalopram (Bromidrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Citalopram (Bromidrato) 40mg": [
      "Citalopram (Bromidrato)",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Citarabina 100mg/mL": [
      "Citarabina",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Citrato de Cafeína 20mg/mL": [
      "Citrato de Cafeína",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cladribina 1mg/mL": [
      "Cladribina",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Claritromicina 50mg/mL": [
      "Claritromicina",
      "50mg/mL",
      "gran sus or",
      "unidade"
    ],
    "Claritromicina 500mg/10mL": [
      "Claritromicina",
      "500mg/10mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Claritromicina 25mg/mL": [
      "Claritromicina",
      "25mg/mL",
      "gran sus or",
      "unidade"
    ],
    "Claritromicina 500mg": [
      "Claritromicina",
      "500mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Claritromicina 500mg": [
      "Claritromicina",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Clindamicina (Cloridrato) 300mg": [
      "Clindamicina (Cloridrato)",
      "300mg",
      "cap dura",
      "cápsula"
    ],
    "Clindamicina (Fosfato) 10mg/mL": [
      "Clindamicina (Fosfato)",
      "10mg/mL",
      "sol top",
      "frasco"
    ],
    "Clindamicina (Fosfato) 150mg/mL": [
      "Clindamicina (Fosfato)",
      "150mg/mL",
      "sol inj",
      "frasco"
    ],
    "Clobazam 10mg": [
      "Clobazam",
      "10mg",
      "com",
      "comprimido"
    ],
    "Clobazam 20 mg": [
      "Clobazam",
      "20 mg",
      "com",
      "comprimido"
    ],
    "Clobetasol (Propionato) 0,5mg/g": [
      "Clobetasol (Propionato)",
      "0,5mg/g",
      "sol capilar",
      "frasco"
    ],
    "Clobetasol (Propionato) 0,5mg/g": [
      "Clobetasol (Propionato)",
      "0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Clobetasol (Propionato) 0,5mg/g": [
      "Clobetasol (Propionato)",
      "0,5mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Clobutinol (Cloridrato) 4mg/mL": [
      "Clobutinol (Cloridrato)",
      "4mg/mL",
      "xpe",
      "frasco"
    ],
    "Clomipramina (Cloridrato) 25 mg": [
      "Clomipramina (Cloridrato)",
      "25 mg",
      "drag",
      "drágea"
    ],
    "Clomipramina (Cloridrato) 75mg": [
      "Clomipramina (Cloridrato)",
      "75mg",
      "com lib lenta",
      "comprimido"
    ],
    "Clonazepam 0,5mg": [
      "Clonazepam",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Clonazepam 2,0mg": [
      "Clonazepam",
      "2,0mg",
      "com",
      "comprimido"
    ],
    "Clonazepam 0,25mg": [
      "Clonazepam",
      "0,25mg",
      "com subl",
      "comprimido"
    ],
    "Clonazepam 2,5mg/mL": [
      "Clonazepam",
      "2,5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Clonidina (Cloridrato) 100mcg": [
      "Clonidina (Cloridrato)",
      "100mcg",
      "com",
      "comprimido"
    ],
    "Clonidina (Cloridrato) 150mcg": [
      "Clonidina (Cloridrato)",
      "150mcg",
      "com",
      "comprimido"
    ],
    "Clonidina (Cloridrato) 200mcg": [
      "Clonidina (Cloridrato)",
      "200mcg",
      "com",
      "comprimido"
    ],
    "Clonidina (Cloridrato) 150mcg/mL": [
      "Clonidina (Cloridrato)",
      "150mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Clonixinato de Lisina 125mg": [
      "Clonixinato de Lisina",
      "125mg",
      "com rev",
      "comprimido"
    ],
    "Cloperastina (Fendizoato) 35,4mg/mL": [
      "Cloperastina (Fendizoato)",
      "35,4mg/mL",
      "sus or",
      "frasco"
    ],
    "Cloperastina (Fendizoato) 3,54mg/mL": [
      "Cloperastina (Fendizoato)",
      "3,54mg/mL",
      "xpe",
      "frasco"
    ],
    "Clopidogrel (Bissulfato) 75 mg": [
      "Clopidogrel (Bissulfato)",
      "75 mg",
      "com rev",
      "comprimido"
    ],
    "Clorambucila 2mg": [
      "Clorambucila",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Cloranfenicol (Levógiro) 500mg": [
      "Cloranfenicol (Levógiro)",
      "500mg",
      "drag",
      "drágea"
    ],
    "Cloranfenicol (Succinato Sódico) 1g": [
      "Cloranfenicol (Succinato Sódico)",
      "1g",
      "pó liof sol inj",
      "unidade"
    ],
    "Cloridrato de Aminolevulinato de Metila 160mg/g": [
      "Cloridrato de Aminolevulinato de Metila",
      "160mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Cloridrato de Amorolfina 2,5mg/g": [
      "Cloridrato de Amorolfina",
      "2,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Cloridrato de Cefepima 1g": [
      "Cloridrato de Cefepima",
      "1g",
      "pó sol inj",
      "unidade"
    ],
    "Cloridrato de Cefepima 2g": [
      "Cloridrato de Cefepima",
      "2g",
      "pó sol inj",
      "unidade"
    ],
    "Cloridrato de Epinastina 0,5mg/mL": [
      "Cloridrato de Epinastina",
      "0,5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Oxicodona 10mg": [
      "Cloridrato de Oxicodona",
      "10mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona 20mg": [
      "Cloridrato de Oxicodona",
      "20mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona 40mg": [
      "Cloridrato de Oxicodona",
      "40mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona 10mg/mL": [
      "Cloridrato de Oxicodona",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Palonosetrona 0,05mg/mL": [
      "Cloridrato de Palonosetrona",
      "0,05mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Sibutramina 10mg": [
      "Cloridrato de Sibutramina",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Cloridrato de Sibutramina 15mg": [
      "Cloridrato de Sibutramina",
      "15mg",
      "cap dura",
      "cápsula"
    ],
    "Cloridrato de Valganciclovir 450mg": [
      "Cloridrato de Valganciclovir",
      "450mg",
      "com rev",
      "comprimido"
    ],
    "Clorpromazina (Cloridrato) 25mg": [
      "Clorpromazina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Clorpromazina (Cloridrato) 100mg": [
      "Clorpromazina (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Clorpromazina (Cloridrato) 40mg/mL": [
      "Clorpromazina (Cloridrato)",
      "40mg/mL",
      "sol oral",
      "frasco"
    ],
    "Clorpromazina (Cloridrato) 5,0mg/mL": [
      "Clorpromazina (Cloridrato)",
      "5,0mg/mL",
      "sol inj",
      "frasco"
    ],
    "Clorpropamida 250mg": [
      "Clorpropamida",
      "250mg",
      "com",
      "comprimido"
    ],
    "Clortalidona 12,5mg": [
      "Clortalidona",
      "12,5mg",
      "com",
      "comprimido"
    ],
    "Clortalidona 25mg": [
      "Clortalidona",
      "25mg",
      "com",
      "comprimido"
    ],
    "Clortalidona 50mg": [
      "Clortalidona",
      "50mg",
      "com",
      "comprimido"
    ],
    "Clotrimazol 10mg/g": [
      "Clotrimazol",
      "10mg/g",
      "sol top (spr)",
      "frasco"
    ],
    "Clotrimazol 10mg/g": [
      "Clotrimazol",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Clotrimazol 10mg/g": [
      "Clotrimazol",
      "10mg/g",
      "po uso top",
      "unidade"
    ],
    "Clotrimazol 10mg/g": [
      "Clotrimazol",
      "10mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Clotrimazol 20mg/g": [
      "Clotrimazol",
      "20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Clotrimazol 100mg": [
      "Clotrimazol",
      "100mg",
      "com vag",
      "comprimido"
    ],
    "Clotrimazol 500mg": [
      "Clotrimazol",
      "500mg",
      "com vag",
      "comprimido"
    ],
    "Clozapina 100mg": [
      "Clozapina",
      "100mg",
      "com",
      "comprimido"
    ],
    "Clozapina 25mg": [
      "Clozapina",
      "25mg",
      "com",
      "comprimido"
    ],
    "Cobimetinibe (Hemifumarato) 20mg": [
      "Cobimetinibe (Hemifumarato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Codeína (Fosfato) 30mg": [
      "Codeína (Fosfato)",
      "30mg",
      "com",
      "comprimido"
    ],
    "Codeína (Fosfato) 60mg": [
      "Codeína (Fosfato)",
      "60mg",
      "com",
      "comprimido"
    ],
    "Codeína (Fosfato) 3mg/mL": [
      "Codeína (Fosfato)",
      "3mg/mL",
      "sol oral",
      "frasco"
    ],
    "Codeína (Fosfato) 30mg/mL": [
      "Codeína (Fosfato)",
      "30mg/mL",
      "sol inj",
      "frasco"
    ],
    "Codergocrina (Mesilato) 4,5mg/1,5mL": [
      "Codergocrina (Mesilato)",
      "4,5mg/1,5mL",
      "sol oral",
      "frasco"
    ],
    "Colchicina 0,5mg": [
      "Colchicina",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Colchicina 1mg": [
      "Colchicina",
      "1mg",
      "com",
      "comprimido"
    ],
    "Colestiramina 4g/90mL": [
      "Colestiramina",
      "4g/90mL",
      "po or",
      "unidade"
    ],
    "Colistimetato Sódico 150mg colistina base/2mL": [
      "Colistimetato Sódico",
      "150mg colistina base/2mL",
      "pó sol inj",
      "unidade"
    ],
    "Colistimetato Sódico 250.000UI/mL": [
      "Colistimetato Sódico",
      "250.000UI/mL",
      "pó sol inj",
      "unidade"
    ],
    "Colistimetato Sódico 500.000UI/mL": [
      "Colistimetato Sódico",
      "500.000UI/mL",
      "pó estéril",
      "unidade"
    ],
    "Crizotinibe 250mg": [
      "Crizotinibe",
      "250mg",
      "cap gel dur",
      "cápsula"
    ],
    "Crizotinibe 200mg": [
      "Crizotinibe",
      "200mg",
      "cap gel dur",
      "cápsula"
    ],
    "Cromoglicato Dissódico 20mg/g": [
      "Cromoglicato Dissódico",
      "20mg/g",
      "sol oft",
      "frasco"
    ],
    "Cromoglicato Dissódico 40mg/g": [
      "Cromoglicato Dissódico",
      "40mg/g",
      "sol oft",
      "frasco"
    ],
    "Cromoglicato Dissódico 20mg/mL": [
      "Cromoglicato Dissódico",
      "20mg/mL",
      "sol spr nas",
      "frasco"
    ],
    "Cromoglicato Dissódico 40mg/mL": [
      "Cromoglicato Dissódico",
      "40mg/mL",
      "sol spr nas",
      "frasco"
    ],
    "Dabigatrana (Etexilato) 75mg": [
      "Dabigatrana (Etexilato)",
      "75mg",
      "cap",
      "cápsula"
    ],
    "Dabigatrana (Etexilato) 110mg": [
      "Dabigatrana (Etexilato)",
      "110mg",
      "cap",
      "cápsula"
    ],
    "Dabigatrana (Etexilato) 150 mg": [
      "Dabigatrana (Etexilato)",
      "150 mg",
      "cap",
      "cápsula"
    ],
    "Dacarbazina 10mg/mL": [
      "Dacarbazina",
      "10mg/mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Dactinomicina 0,5mg/1,1mL": [
      "Dactinomicina",
      "0,5mg/1,1mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Danazol 100mg": [
      "Danazol",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Danazol 200mg": [
      "Danazol",
      "200mg",
      "cap dura",
      "cápsula"
    ],
    "Dantroleno Sódico 20mg": [
      "Dantroleno Sódico",
      "20mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Dapaglifozina 5mg": [
      "Dapaglifozina",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Dapaglifozina 10mg": [
      "Dapaglifozina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Daptomicina 500mg/10mL": [
      "Daptomicina",
      "500mg/10mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Darifenacina (Bromidrato) 7,5mg": [
      "Darifenacina (Bromidrato)",
      "7,5mg",
      "com rev lib progr",
      "comprimido"
    ],
    "Darifenacina (Bromidrato) 15,0mg": [
      "Darifenacina (Bromidrato)",
      "15,0mg",
      "com rev lib progr",
      "comprimido"
    ],
    "Darunavir 75mg": [
      "Darunavir",
      "75mg",
      "com rev",
      "comprimido"
    ],
    "Darunavir 150mg": [
      "Darunavir",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Darunavir 300mg": [
      "Darunavir",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Darunavir 600mg": [
      "Darunavir",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Darunavir 800mg": [
      "Darunavir",
      "800mg",
      "com rev",
      "comprimido"
    ],
    "Dasatinibe 20mg": [
      "Dasatinibe",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Dasatinibe 50mg": [
      "Dasatinibe",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Dasatinibe 100mg": [
      "Dasatinibe",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Decitabina 50mg/10mL": [
      "Decitabina",
      "50mg/10mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Deferasirox 125mg": [
      "Deferasirox",
      "125mg",
      "com disp",
      "comprimido"
    ],
    "Deferasirox 250mg": [
      "Deferasirox",
      "250mg",
      "com disp",
      "comprimido"
    ],
    "Deferasirox 500mg": [
      "Deferasirox",
      "500mg",
      "com disp",
      "comprimido"
    ],
    "Deferoxamina (Mesilato) 500mg/5mL": [
      "Deferoxamina (Mesilato)",
      "500mg/5mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Deflazacorte 6,0mg": [
      "Deflazacorte",
      "6,0mg",
      "com",
      "comprimido"
    ],
    "Deflazacorte 30mg": [
      "Deflazacorte",
      "30mg",
      "com",
      "comprimido"
    ],
    "Degarelix (Acetato) 80mg/4,2mL": [
      "Degarelix (Acetato)",
      "80mg/4,2mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Degarelix (Acetato) 120mg/3,0 mL": [
      "Degarelix (Acetato)",
      "120mg/3,0 mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Deslanosídeo 0,2mg/mL": [
      "Deslanosídeo",
      "0,2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Desloratadina 0,5mg/mL": [
      "Desloratadina",
      "0,5mg/mL",
      "xpe",
      "frasco"
    ],
    "Desloratadina 5mg": [
      "Desloratadina",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Desloratadina 1,25mg/mL": [
      "Desloratadina",
      "1,25mg/mL",
      "sol oral",
      "frasco"
    ],
    "Desmopressina (Acetato) 0,1mg/mL": [
      "Desmopressina (Acetato)",
      "0,1mg/mL",
      "sol nas spray",
      "frasco"
    ],
    "Desmopressina (Acetato) 0,1mg/mL": [
      "Desmopressina (Acetato)",
      "0,1mg/mL",
      "sol nas",
      "frasco"
    ],
    "Desmopressina (Acetato) 0,1mg": [
      "Desmopressina (Acetato)",
      "0,1mg",
      "com",
      "comprimido"
    ],
    "Desmopressina (Acetato) 0,2mg": [
      "Desmopressina (Acetato)",
      "0,2mg",
      "com",
      "comprimido"
    ],
    "Desmopressina (Acetato) 4mcg/mL": [
      "Desmopressina (Acetato)",
      "4mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Desogestrel 75mcg": [
      "Desogestrel",
      "75mcg",
      "com rev",
      "comprimido"
    ],
    "Desonida 0,500mg/g": [
      "Desonida",
      "0,500mg/g",
      "gel crem",
      "frasco"
    ],
    "Desonida 0,5mg/g": [
      "Desonida",
      "0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Desonida 0,5mg/g": [
      "Desonida",
      "0,5mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Desoximetasona 2,5mg/g": [
      "Desoximetasona",
      "2,5mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Desvenlafaxina (Succinato Monoidratado) 75,87mg (50mg)": [
      "Desvenlafaxina (Succinato Monoidratado)",
      "75,87mg (50mg)",
      "com rev lib prol",
      "comprimido"
    ],
    "Desvenlafaxina (Succinato Monoidratado) 151,77 mg (100mg)": [
      "Desvenlafaxina (Succinato Monoidratado)",
      "151,77 mg (100mg)",
      "com rev lib prol",
      "comprimido"
    ],
    "Dexametasona 0,1mg/mL": [
      "Dexametasona",
      "0,1mg/mL",
      "elx",
      "frasco"
    ],
    "Dexametasona 0,5mg": [
      "Dexametasona",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Dexametasona 0,75mg": [
      "Dexametasona",
      "0,75mg",
      "com",
      "comprimido"
    ],
    "Dexametasona 4mg": [
      "Dexametasona",
      "4mg",
      "com",
      "comprimido"
    ],
    "Dexametasona 1mg/mL": [
      "Dexametasona",
      "1mg/mL",
      "sus  oft",
      "frasco"
    ],
    "Dexametasona 1mg/g": [
      "Dexametasona",
      "1mg/g",
      "pom oft",
      "bisnaga"
    ],
    "Dexametasona (Acetato) 1mg/g": [
      "Dexametasona (Acetato)",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Dexametasona (Fosfato Dissódico) 4mg/mL": [
      "Dexametasona (Fosfato Dissódico)",
      "4mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dexametasona (Fosfato Dissódico) 2mg/mL": [
      "Dexametasona (Fosfato Dissódico)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dexclorfeniramina (Maleato) 10mg/g": [
      "Dexclorfeniramina (Maleato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Dexclorfeniramina (Maleato) 2mg": [
      "Dexclorfeniramina (Maleato)",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Dexclorfeniramina (Maleato) 6,0mg": [
      "Dexclorfeniramina (Maleato)",
      "6,0mg",
      "drag",
      "drágea"
    ],
    "Dexclorfeniramina (Maleato) 0,4mg/mL": [
      "Dexclorfeniramina (Maleato)",
      "0,4mg/mL",
      "sol oral",
      "frasco"
    ],
    "Dexclorfeniramina (Maleato) 2,8mg/mL": [
      "Dexclorfeniramina (Maleato)",
      "2,8mg/mL",
      "sol oral",
      "frasco"
    ],
    "Dexlansoprazol 30mg": [
      "Dexlansoprazol",
      "30mg",
      "cap gel dur com microg de lib mod",
      "cápsula"
    ],
    "Dexlansoprazol 60mg": [
      "Dexlansoprazol",
      "60mg",
      "cap gel dur com microg de lib mod",
      "cápsula"
    ],
    "Dexmedetomidina(Cloridrato) 100mcg/mL": [
      "Dexmedetomidina(Cloridrato)",
      "100mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Dextrometorfano (Bromidrato) 3mg/mL": [
      "Dextrometorfano (Bromidrato)",
      "3mg/mL",
      "xpe",
      "frasco"
    ],
    "Diazepam 5mg": [
      "Diazepam",
      "5mg",
      "com",
      "comprimido"
    ],
    "Diazepam 10mg": [
      "Diazepam",
      "10mg",
      "com",
      "comprimido"
    ],
    "Diazepam 5mg/mL": [
      "Diazepam",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Diclofenaco (Ácido) 44,3mg": [
      "Diclofenaco (Ácido)",
      "44,3mg",
      "com disp",
      "comprimido"
    ],
    "Diclofenaco (Colestiramina) 140mg": [
      "Diclofenaco (Colestiramina)",
      "140mg",
      "cap dura",
      "cápsula"
    ],
    "Diclofenaco (Dietilamônio) 11,6mg": [
      "Diclofenaco (Dietilamônio)",
      "11,6mg",
      "sol derm (aerossol)",
      "frasco"
    ],
    "Diclofenaco (Dietilamônio) 11,6mg/g": [
      "Diclofenaco (Dietilamônio)",
      "11,6mg/g",
      "gel",
      "frasco"
    ],
    "Diclofenaco (Dietilamônio) 23,2mg/g": [
      "Diclofenaco (Dietilamônio)",
      "23,2mg/g",
      "gel",
      "frasco"
    ],
    "Diclofenaco Potássico 12,5mg": [
      "Diclofenaco Potássico",
      "12,5mg",
      "com rev",
      "comprimido"
    ],
    "Diclofenaco Potássico 50mg": [
      "Diclofenaco Potássico",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Diclofenaco Sódico 10mg/g": [
      "Diclofenaco Sódico",
      "10mg/g",
      "gel",
      "frasco"
    ],
    "Diclofenaco Sódico 100mg": [
      "Diclofenaco Sódico",
      "100mg",
      "com rev desint lenta",
      "comprimido"
    ],
    "Diclofenaco Sódico 25mg/mL": [
      "Diclofenaco Sódico",
      "25mg/mL",
      "sol inj",
      "frasco"
    ],
    "Diclofenaco Sódico 50mg": [
      "Diclofenaco Sódico",
      "50mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Diclofenaco Sódico 75mg": [
      "Diclofenaco Sódico",
      "75mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Diclofenaco Sódico 150mg": [
      "Diclofenaco Sódico",
      "150mg",
      "com lib prol",
      "comprimido"
    ],
    "Diclofenaco Sódico 1mg/mL": [
      "Diclofenaco Sódico",
      "1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Dicloridrato de Sapropterina 100mg": [
      "Dicloridrato de Sapropterina",
      "100mg",
      "com disp",
      "comprimido"
    ],
    "Didrogesterona 10mg": [
      "Didrogesterona",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Dienogeste 2mg": [
      "Dienogeste",
      "2mg",
      "com",
      "comprimido"
    ],
    "Difosfato de Primaquina 15mg": [
      "Difosfato de Primaquina",
      "15mg",
      "com",
      "comprimido"
    ],
    "Diltiazem (Cloridrato) 30mg": [
      "Diltiazem (Cloridrato)",
      "30mg",
      "com",
      "comprimido"
    ],
    "Diltiazem (Cloridrato) 60mg": [
      "Diltiazem (Cloridrato)",
      "60mg",
      "com",
      "comprimido"
    ],
    "Diltiazem (Cloridrato) 180mg": [
      "Diltiazem (Cloridrato)",
      "180mg",
      "cap dura lib gradual",
      "cápsula"
    ],
    "Diltiazem (Cloridrato) 240mg": [
      "Diltiazem (Cloridrato)",
      "240mg",
      "cap dura lib gradual",
      "cápsula"
    ],
    "Diltiazem (Cloridrato) 90mg": [
      "Diltiazem (Cloridrato)",
      "90mg",
      "cap dura + microgran",
      "cápsula"
    ],
    "Diltiazem (Cloridrato) 120mg": [
      "Diltiazem (Cloridrato)",
      "120mg",
      "cap dura + microgran",
      "cápsula"
    ],
    "Dimaleato de Afatinibe 30mg": [
      "Dimaleato de Afatinibe",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Dimaleato de Afatinibe 40mg": [
      "Dimaleato de Afatinibe",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Dimenidrinato 100mg": [
      "Dimenidrinato",
      "100mg",
      "com",
      "comprimido"
    ],
    "Dimenidrinato 2,5mg/mL": [
      "Dimenidrinato",
      "2,5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Dimenidrinato 25mg": [
      "Dimenidrinato",
      "25mg",
      "cap mole",
      "cápsula"
    ],
    "Dimenidrinato 50mg": [
      "Dimenidrinato",
      "50mg",
      "cap mole",
      "cápsula"
    ],
    "Dipiridamol 5mg/mL": [
      "Dipiridamol",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dipirona Sódica Monoidratada 300mg": [
      "Dipirona Sódica Monoidratada",
      "300mg",
      "sup",
      "supositório"
    ],
    "Dipirona Sódica Monoidratada 500mg": [
      "Dipirona Sódica Monoidratada",
      "500mg",
      "com",
      "comprimido"
    ],
    "Dipirona Sódica Monoidratada 1.000mg": [
      "Dipirona Sódica Monoidratada",
      "1.000mg",
      "com",
      "comprimido"
    ],
    "Dipirona Sódica Monoidratada 500mg/mL": [
      "Dipirona Sódica Monoidratada",
      "500mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dipirona Sódica Monoidratada 50mg/mL": [
      "Dipirona Sódica Monoidratada",
      "50mg/mL",
      "sol oral",
      "frasco"
    ],
    "Dipirona Sódica Monoidratada 500mg/mL": [
      "Dipirona Sódica Monoidratada",
      "500mg/mL",
      "sol oral",
      "frasco"
    ],
    "Dipirona Sódica Monoidratada 1g": [
      "Dipirona Sódica Monoidratada",
      "1g",
      "com efer",
      "comprimido"
    ],
    "Divalproato de Sódio 250mg": [
      "Divalproato de Sódio",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Divalproato de Sódio 500mg": [
      "Divalproato de Sódio",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Divalproato de Sódio 250mg": [
      "Divalproato de Sódio",
      "250mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Divalproato de Sódio 500mg": [
      "Divalproato de Sódio",
      "500mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Divalproato de Sódio 125mg": [
      "Divalproato de Sódio",
      "125mg",
      "cap + microgran",
      "cápsula"
    ],
    "Dobesilato de Cálcio 500mg": [
      "Dobesilato de Cálcio",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Dobutamina (Cloridrato) 12,5mg/mL": [
      "Dobutamina (Cloridrato)",
      "12,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Docetaxel (Triidratado) 20mg/mL": [
      "Docetaxel (Triidratado)",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dolutegravir Sódico 10mg": [
      "Dolutegravir Sódico",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Dolutegravir Sódico 25mg": [
      "Dolutegravir Sódico",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Dolutegravir Sódico 50mg": [
      "Dolutegravir Sódico",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Domperidona 10mg": [
      "Domperidona",
      "10mg",
      "com",
      "comprimido"
    ],
    "Domperidona 1mg/mL": [
      "Domperidona",
      "1mg/mL",
      "sus or",
      "frasco"
    ],
    "Donepezila (Cloridrato) 5mg": [
      "Donepezila (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Donepezila (Cloridrato) 10 mg": [
      "Donepezila (Cloridrato)",
      "10 mg",
      "com rev",
      "comprimido"
    ],
    "Dopamina (Cloridrato) 5mg/mL": [
      "Dopamina (Cloridrato)",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dorzolamida (Cloridrato) 20mg/mL": [
      "Dorzolamida (Cloridrato)",
      "20mg/mL",
      "sol oft",
      "frasco"
    ],
    "Doxazosina (Mesilato) 2mg": [
      "Doxazosina (Mesilato)",
      "2mg",
      "com",
      "comprimido"
    ],
    "Doxazosina (Mesilato) 4mg": [
      "Doxazosina (Mesilato)",
      "4mg",
      "com",
      "comprimido"
    ],
    "Doxazosina (Mesilato) 4,0mg": [
      "Doxazosina (Mesilato)",
      "4,0mg",
      "com lib cont",
      "comprimido"
    ],
    "Doxiciclina (Cloridrato) 100mg": [
      "Doxiciclina (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Doxiciclina Monoidratada 100mg": [
      "Doxiciclina Monoidratada",
      "100mg",
      "com sol",
      "comprimido"
    ],
    "Doxorrubicina (Cloridrato) 10mg": [
      "Doxorrubicina (Cloridrato)",
      "10mg",
      "pó sol inj",
      "unidade"
    ],
    "Doxorrubicina (Cloridrato) 2mg/mL": [
      "Doxorrubicina (Cloridrato)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Doxorrubicina (Cloridrato) 50mg": [
      "Doxorrubicina (Cloridrato)",
      "50mg",
      "pó liof inj",
      "unidade"
    ],
    "Droperidol 2,5mg/mL": [
      "Droperidol",
      "2,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dropropizina 1,5mg/mL": [
      "Dropropizina",
      "1,5mg/mL",
      "xpe (infantil)",
      "frasco"
    ],
    "Dropropizina 3mg/mL": [
      "Dropropizina",
      "3mg/mL",
      "xpe (adulto)",
      "frasco"
    ],
    "Dropropizina 30mg/mL": [
      "Dropropizina",
      "30mg/mL",
      "sol or (got)",
      "frasco"
    ],
    "Drospirenona 4mg": [
      "Drospirenona",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Duloxetina (Cloridrato) 30mg": [
      "Duloxetina (Cloridrato)",
      "30mg",
      "cap + microgran gastrorresistentes",
      "cápsula"
    ],
    "Duloxetina (Cloridrato) 60mg": [
      "Duloxetina (Cloridrato)",
      "60mg",
      "cap + microgran gastrorresistentes",
      "cápsula"
    ],
    "Dutasterida 0,5mg": [
      "Dutasterida",
      "0,5mg",
      "cap  mole",
      "cápsula"
    ],
    "Ebastina 1mg/mL": [
      "Ebastina",
      "1mg/mL",
      "sol oral",
      "frasco"
    ],
    "Ebastina 10mg": [
      "Ebastina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Edoxabana (Tosilato) 15mg": [
      "Edoxabana (Tosilato)",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Edoxabana (Tosilato) 30mg": [
      "Edoxabana (Tosilato)",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Edoxabana (Tosilato) 60mg": [
      "Edoxabana (Tosilato)",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Efavirenz 600mg": [
      "Efavirenz",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Efedrina (Sulfato) 50mg/mL": [
      "Efedrina (Sulfato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Eltrombopague Olamina 25mg": [
      "Eltrombopague Olamina",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Eltrombopague Olamina 50mg": [
      "Eltrombopague Olamina",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Empagliflozina 10mg": [
      "Empagliflozina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Empagliflozina 25mg": [
      "Empagliflozina",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Enalapril (Maleato) 5mg": [
      "Enalapril (Maleato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Enalapril (Maleato) 10mg": [
      "Enalapril (Maleato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Enalapril (Maleato) 20mg": [
      "Enalapril (Maleato)",
      "20mg",
      "com",
      "comprimido"
    ],
    "Enflurano 1mL/mL": [
      "Enflurano",
      "1mL/mL",
      "sol inal",
      "frasco"
    ],
    "Enfuvirtida 108mg/1,1mL (90mg/mL)": [
      "Enfuvirtida",
      "108mg/1,1mL (90mg/mL)",
      "pó liof sol inj",
      "unidade"
    ],
    "Entacapona 200mg": [
      "Entacapona",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Entecavir 0,5mg": [
      "Entecavir",
      "0,5mg",
      "com rev",
      "comprimido"
    ],
    "Enzalutamida 40mg": [
      "Enzalutamida",
      "40mg",
      "cap mole",
      "cápsula"
    ],
    "Epinastina (Cloridrato) 10mg": [
      "Epinastina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Epinastina (Cloridrato) 20mg": [
      "Epinastina (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Epinastina (Cloridrato) 2mg/mL": [
      "Epinastina (Cloridrato)",
      "2mg/mL",
      "xpe",
      "frasco"
    ],
    "Epinefrina 1mg/mL": [
      "Epinefrina",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Epirrubicina (Cloridrato) 2mg/mL": [
      "Epirrubicina (Cloridrato)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Epirrubicina (Cloridrato) 10mg/5mL": [
      "Epirrubicina (Cloridrato)",
      "10mg/5mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Epirrubicina (Cloridrato) 50mg/25mL": [
      "Epirrubicina (Cloridrato)",
      "50mg/25mL",
      "pó liof sol inj",
      "unidade"
    ],
    "Eribulina (Mesilato) 0,5mg/mL": [
      "Eribulina (Mesilato)",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Eritromicina (Lactobionato) 1.000mg": [
      "Eritromicina (Lactobionato)",
      "1.000mg",
      "po sol inj",
      "unidade"
    ],
    "Erlotinibe (Cloridrato) 25mg": [
      "Erlotinibe (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Erlotinibe (Cloridrato) 100mg": [
      "Erlotinibe (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Erlotinibe (Cloridrato) 150mg": [
      "Erlotinibe (Cloridrato)",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Ertapeném Sódico 1g": [
      "Ertapeném Sódico",
      "1g",
      "po liof sol inj",
      "unidade"
    ],
    "Escetamina (Cloridrato) 50mg/mL": [
      "Escetamina (Cloridrato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Escitalopram (Oxalato) 20mg/mL": [
      "Escitalopram (Oxalato)",
      "20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Escitalopram (Oxalato) 10mg": [
      "Escitalopram (Oxalato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Escitalopram (Oxalato) 15mg": [
      "Escitalopram (Oxalato)",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Escitalopram (Oxalato) 20mg": [
      "Escitalopram (Oxalato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Escopolamina (Butilbrometo) 10mg": [
      "Escopolamina (Butilbrometo)",
      "10mg",
      "drag",
      "drágea"
    ],
    "Escopolamina (Butilbrometo) 10mg/mL": [
      "Escopolamina (Butilbrometo)",
      "10mg/mL",
      "sol or (got)",
      "frasco"
    ],
    "Escopolamina (Butilbrometo) 20mg/mL": [
      "Escopolamina (Butilbrometo)",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Esilato de Nintedanibe 100mg": [
      "Esilato de Nintedanibe",
      "100mg",
      "cap mole",
      "cápsula"
    ],
    "Esilato de Nintedanibe 150mg": [
      "Esilato de Nintedanibe",
      "150mg",
      "cap mole",
      "cápsula"
    ],
    "Esmolol (Cloridrato) 10mg/mL": [
      "Esmolol (Cloridrato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Esomeprazol Magnésio Triidratado 20mg": [
      "Esomeprazol Magnésio Triidratado",
      "20mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Esomeprazol Magnésio Triidratado 40mg": [
      "Esomeprazol Magnésio Triidratado",
      "40mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Esomeprazol Sódico 40mg": [
      "Esomeprazol Sódico",
      "40mg",
      "po liof sol inj",
      "unidade"
    ],
    "Espiramicina 1,5MUI": [
      "Espiramicina",
      "1,5MUI",
      "com rev",
      "comprimido"
    ],
    "Espironolactona 25mg": [
      "Espironolactona",
      "25mg",
      "com",
      "comprimido"
    ],
    "Espironolactona 50mg": [
      "Espironolactona",
      "50mg",
      "com",
      "comprimido"
    ],
    "Espironolactona 100mg": [
      "Espironolactona",
      "100mg",
      "com",
      "comprimido"
    ],
    "Estazolam 2mg": [
      "Estazolam",
      "2mg",
      "com",
      "comprimido"
    ],
    "Estradiol 1mg": [
      "Estradiol",
      "1mg",
      "com",
      "comprimido"
    ],
    "Estradiol 0,1PCC (1mg/g)": [
      "Estradiol",
      "0,1PCC (1mg/g)",
      "gel (sachê)",
      "frasco"
    ],
    "Estradiol Hemi-Hidratado 0,1PCC (1mg/g)": [
      "Estradiol Hemi-Hidratado",
      "0,1PCC (1mg/g)",
      "gel",
      "frasco"
    ],
    "Estradiol Hemi-Hidratado 0,6mg/g": [
      "Estradiol Hemi-Hidratado",
      "0,6mg/g",
      "gel",
      "frasco"
    ],
    "Estradiol Hemi-Hidratado 1,6mg": [
      "Estradiol Hemi-Hidratado",
      "1,6mg",
      "ades",
      "adesivo"
    ],
    "Estradiol Hemi-Hidratado 3,2mg": [
      "Estradiol Hemi-Hidratado",
      "3,2mg",
      "ades",
      "adesivo"
    ],
    "Estradiol Hemi-Hidratado 6,4mg": [
      "Estradiol Hemi-Hidratado",
      "6,4mg",
      "ades",
      "adesivo"
    ],
    "Estradiol Hemi-Hidratado 10,3mcg": [
      "Estradiol Hemi-Hidratado",
      "10,3mcg",
      "com vag",
      "comprimido"
    ],
    "Estriol 1,0mg/g": [
      "Estriol",
      "1,0mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Estriol 1,0mg": [
      "Estriol",
      "1,0mg",
      "com",
      "comprimido"
    ],
    "Estriol 2,0mg": [
      "Estriol",
      "2,0mg",
      "com",
      "comprimido"
    ],
    "Eszopiclona 1mg": [
      "Eszopiclona",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Eszopiclona 2mg": [
      "Eszopiclona",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Eszopiclona 3mg": [
      "Eszopiclona",
      "3mg",
      "com rev",
      "comprimido"
    ],
    "Etionamida 250mg": [
      "Etionamida",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Etodolaco 200mg": [
      "Etodolaco",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Etodolaco 300mg": [
      "Etodolaco",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Etodolaco 400mg": [
      "Etodolaco",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Etodolaco 500mg": [
      "Etodolaco",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Etomidato 2mg/mL": [
      "Etomidato",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Etonogestrel 68mg": [
      "Etonogestrel",
      "68mg",
      "impl sc",
      "implante"
    ],
    "Etoposídeo 20mg/mL": [
      "Etoposídeo",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Etoricoxib 60mg": [
      "Etoricoxib",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Etoricoxib 90mg": [
      "Etoricoxib",
      "90mg",
      "com rev",
      "comprimido"
    ],
    "Etravirina 100mg": [
      "Etravirina",
      "100mg",
      "com",
      "comprimido"
    ],
    "Everolimo 2,5mg": [
      "Everolimo",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Everolimo 5mg": [
      "Everolimo",
      "5mg",
      "com",
      "comprimido"
    ],
    "Everolimo 10mg": [
      "Everolimo",
      "10mg",
      "com",
      "comprimido"
    ],
    "Everolimo 0,5mg": [
      "Everolimo",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Everolimo 0,75mg": [
      "Everolimo",
      "0,75mg",
      "com",
      "comprimido"
    ],
    "Everolimo 1,0mg": [
      "Everolimo",
      "1,0mg",
      "com",
      "comprimido"
    ],
    "Exemestano 25mg": [
      "Exemestano",
      "25mg",
      "drag",
      "drágea"
    ],
    "Exenatida 250mcg/mL": [
      "Exenatida",
      "250mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Ezetimiba 10mg": [
      "Ezetimiba",
      "10mg",
      "com",
      "comprimido"
    ],
    "Famotidina 40mg": [
      "Famotidina",
      "40mg",
      "com",
      "comprimido"
    ],
    "Fampridina 10mg": [
      "Fampridina",
      "10mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Fanciclovir 125mg": [
      "Fanciclovir",
      "125mg",
      "com rev",
      "comprimido"
    ],
    "Fanciclovir 500mg": [
      "Fanciclovir",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Fenazopiridina (Cloridrato) 100mg": [
      "Fenazopiridina (Cloridrato)",
      "100mg",
      "drag",
      "drágea"
    ],
    "Fenazopiridina (Cloridrato) 200mg": [
      "Fenazopiridina (Cloridrato)",
      "200mg",
      "drag",
      "drágea"
    ],
    "Fenilbutazona Cálcica 200mg": [
      "Fenilbutazona Cálcica",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Fenitoína 100mg": [
      "Fenitoína",
      "100mg",
      "com",
      "comprimido"
    ],
    "Fenitoína Sódica 50mg/mL": [
      "Fenitoína Sódica",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Fenobarbital 40mg/mL": [
      "Fenobarbital",
      "40mg/mL",
      "sol oral",
      "frasco"
    ],
    "Fenobarbital 50mg": [
      "Fenobarbital",
      "50mg",
      "com",
      "comprimido"
    ],
    "Fenobarbital 100mg": [
      "Fenobarbital",
      "100mg",
      "com",
      "comprimido"
    ],
    "Fenofibrato 200mg": [
      "Fenofibrato",
      "200mg",
      "cap dura",
      "cápsula"
    ],
    "Fenofibrato 160mg": [
      "Fenofibrato",
      "160mg",
      "com rev",
      "comprimido"
    ],
    "Fenofibrato 250mg": [
      "Fenofibrato",
      "250mg",
      "cap dura com gran gastrorresistentes",
      "cápsula"
    ],
    "Fenoterol (Bromidrato) 5,0mg/mL": [
      "Fenoterol (Bromidrato)",
      "5,0mg/mL",
      "sol oral",
      "frasco"
    ],
    "Fenoterol (Bromidrato) 2mg/mL (100mcg/dose)": [
      "Fenoterol (Bromidrato)",
      "2mg/mL (100mcg/dose)",
      "sol aer dosif",
      "frasco"
    ],
    "Fenoterol (Bromidrato) 4mg/mL (200mcg/dose)": [
      "Fenoterol (Bromidrato)",
      "4mg/mL (200mcg/dose)",
      "sol aer dosif",
      "frasco"
    ],
    "Fentanila 2,1mg": [
      "Fentanila",
      "2,1mg",
      "ades",
      "adesivo"
    ],
    "Fentanila 4,2mg": [
      "Fentanila",
      "4,2mg",
      "ades",
      "adesivo"
    ],
    "Fentanila 8,4mg": [
      "Fentanila",
      "8,4mg",
      "ades",
      "adesivo"
    ],
    "Fentanila 16,8mg": [
      "Fentanila",
      "16,8mg",
      "ades",
      "adesivo"
    ],
    "Fentanila (Citrato) 50mcg/mL": [
      "Fentanila (Citrato)",
      "50mcg/mL",
      "sol inj (ampola)",
      "ampola"
    ],
    "Fentanila (Citrato) 0,05mg/mL": [
      "Fentanila (Citrato)",
      "0,05mg/mL",
      "sol inj (frasco ampola)",
      "ampola"
    ],
    "Fenticonazol (Nitrato) 0,02g/g": [
      "Fenticonazol (Nitrato)",
      "0,02g/g",
      "crem vag",
      "bisnaga"
    ],
    "Fenticonazol (Nitrato) 600mg": [
      "Fenticonazol (Nitrato)",
      "600mg",
      "ovul",
      "óvulo"
    ],
    "Fenticonazol (Nitrato) 20mg/mL": [
      "Fenticonazol (Nitrato)",
      "20mg/mL",
      "sol derm",
      "frasco"
    ],
    "Fenticonazol (Nitrato) 0,02g/g": [
      "Fenticonazol (Nitrato)",
      "0,02g/g",
      "crem derm",
      "bisnaga"
    ],
    "Fexofenadina (Cloridrato) 30mg": [
      "Fexofenadina (Cloridrato)",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Fexofenadina (Cloridrato) 60mg": [
      "Fexofenadina (Cloridrato)",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Fexofenadina (Cloridrato) 120mg": [
      "Fexofenadina (Cloridrato)",
      "120mg",
      "com rev",
      "comprimido"
    ],
    "Fexofenadina (Cloridrato) 180mg": [
      "Fexofenadina (Cloridrato)",
      "180mg",
      "com rev",
      "comprimido"
    ],
    "Fexofenadina (Cloridrato) 6mg/mL": [
      "Fexofenadina (Cloridrato)",
      "6mg/mL",
      "sus or",
      "frasco"
    ],
    "Finasterida 1mg": [
      "Finasterida",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Finasterida 5mg": [
      "Finasterida",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Fingolimode (Cloridrato) 0,5mg": [
      "Fingolimode (Cloridrato)",
      "0,5mg",
      "cap dura",
      "cápsula"
    ],
    "Fluconazol 2mg/mL": [
      "Fluconazol",
      "2mg/mL",
      "sol inj infus iv",
      "unidade"
    ],
    "Fluconazol 50mg": [
      "Fluconazol",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Fluconazol 100mg": [
      "Fluconazol",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Fluconazol 150mg": [
      "Fluconazol",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Fludarabina(Fosfato) 50mg": [
      "Fludarabina(Fosfato)",
      "50mg",
      "po liof",
      "unidade"
    ],
    "Flumazenil 0,1mg/mL": [
      "Flumazenil",
      "0,1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Flunitrazepam 1mg": [
      "Flunitrazepam",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Fluormetolona 1mg/mL": [
      "Fluormetolona",
      "1mg/mL",
      "sus oft",
      "frasco"
    ],
    "Fluormetolona 2,5mg/mL": [
      "Fluormetolona",
      "2,5mg/mL",
      "sus oft",
      "frasco"
    ],
    "Fluoruracila 50mg/mL": [
      "Fluoruracila",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Fluoxetina 20mg/mL": [
      "Fluoxetina",
      "20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Fluoxetina 20mg": [
      "Fluoxetina",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Fluoxetina (Cloridrato) 20mg": [
      "Fluoxetina (Cloridrato)",
      "20mg",
      "cap dura",
      "cápsula"
    ],
    "Flurbiprofeno 0,3mg/mL": [
      "Flurbiprofeno",
      "0,3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Flurbiprofeno 8,75mg": [
      "Flurbiprofeno",
      "8,75mg",
      "past",
      "frasco"
    ],
    "Flutamida 250mg": [
      "Flutamida",
      "250mg",
      "com",
      "comprimido"
    ],
    "Fluticasona (Furoato) 27,5mcg/dose": [
      "Fluticasona (Furoato)",
      "27,5mcg/dose",
      "spr nas",
      "frasco"
    ],
    "Fluticasona (Proprionato) 50mcg/dose": [
      "Fluticasona (Proprionato)",
      "50mcg/dose",
      "sus nas",
      "frasco"
    ],
    "Fluticasona (Proprionato) 50mcg/dose": [
      "Fluticasona (Proprionato)",
      "50mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Fluticasona (Proprionato) 50mcg/dose": [
      "Fluticasona (Proprionato)",
      "50mcg/dose",
      "sus top",
      "frasco"
    ],
    "Fluticasona (Proprionato) 250mcg/dose": [
      "Fluticasona (Proprionato)",
      "250mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Flutrimazol 0,01g/g": [
      "Flutrimazol",
      "0,01g/g",
      "crem derm",
      "bisnaga"
    ],
    "Flutrimazol 0,01g/mL": [
      "Flutrimazol",
      "0,01g/mL",
      "sol top",
      "frasco"
    ],
    "Fluvastatina Sódica 80mg": [
      "Fluvastatina Sódica",
      "80mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Formoterol (Fumarato) 12mcg": [
      "Formoterol (Fumarato)",
      "12mcg",
      "cap dura po inal or",
      "cápsula"
    ],
    "Fosamprenavir (Cálcico) 50mg/mL": [
      "Fosamprenavir (Cálcico)",
      "50mg/mL",
      "sus or",
      "frasco"
    ],
    "Fosaprepitanto Dimeglumina 150mg": [
      "Fosaprepitanto Dimeglumina",
      "150mg",
      "po liof inj",
      "unidade"
    ],
    "Fotemustina 50mg/mL": [
      "Fotemustina",
      "50mg/mL",
      "po sol inj",
      "unidade"
    ],
    "Fulvestranto 50mg/mL": [
      "Fulvestranto",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Fumarato Dimetila 120mg": [
      "Fumarato Dimetila",
      "120mg",
      "cap lib prol",
      "cápsula"
    ],
    "Fumarato Dimetila 240mg": [
      "Fumarato Dimetila",
      "240mg",
      "cap lib prol",
      "cápsula"
    ],
    "Furosemida 10mg/mL": [
      "Furosemida",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Furosemida 40mg": [
      "Furosemida",
      "40mg",
      "com",
      "comprimido"
    ],
    "Ácido Fusídico 20mg/g": [
      "Ácido Fusídico",
      "20mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Gabapentina 300mg": [
      "Gabapentina",
      "300mg",
      "cap dura",
      "cápsula"
    ],
    "Gabapentina 400mg": [
      "Gabapentina",
      "400mg",
      "cap dura",
      "cápsula"
    ],
    "Gabapentina 600mg": [
      "Gabapentina",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Ganciclovir Sódico 500mg": [
      "Ganciclovir Sódico",
      "500mg",
      "pó liof sol inj",
      "unidade"
    ],
    "Gatifloxacino 3mg/mL": [
      "Gatifloxacino",
      "3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Gefitinibe 250mg": [
      "Gefitinibe",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Gemifloxacino (Mesilato) 320mg": [
      "Gemifloxacino (Mesilato)",
      "320mg",
      "com rev",
      "comprimido"
    ],
    "Gencitabina (Cloridrato) 200mg/5mL": [
      "Gencitabina (Cloridrato)",
      "200mg/5mL",
      "po liof sol inj",
      "unidade"
    ],
    "Gencitabina (Cloridrato) 1g/25mL": [
      "Gencitabina (Cloridrato)",
      "1g/25mL",
      "po liof sol inj",
      "unidade"
    ],
    "Genfibrozila 600mg": [
      "Genfibrozila",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Genfibrozila 900mg": [
      "Genfibrozila",
      "900mg",
      "com rev",
      "comprimido"
    ],
    "Glibenclamina 5,0mg": [
      "Glibenclamina",
      "5,0mg",
      "com",
      "comprimido"
    ],
    "Gliclazida 30mg": [
      "Gliclazida",
      "30mg",
      "com lib prol",
      "comprimido"
    ],
    "Gliclazida 60mg": [
      "Gliclazida",
      "60mg",
      "com lib prol",
      "comprimido"
    ],
    "Glicosamina (Sulfato) 1,5g": [
      "Glicosamina (Sulfato)",
      "1,5g",
      "po or",
      "unidade"
    ],
    "Glimepirida 1mg": [
      "Glimepirida",
      "1mg",
      "com",
      "comprimido"
    ],
    "Glimepirida 2mg": [
      "Glimepirida",
      "2mg",
      "com",
      "comprimido"
    ],
    "Glimepirida 3mg": [
      "Glimepirida",
      "3mg",
      "com",
      "comprimido"
    ],
    "Glimepirida 4mg": [
      "Glimepirida",
      "4mg",
      "com",
      "comprimido"
    ],
    "Glimepirida 6mg": [
      "Glimepirida",
      "6mg",
      "com",
      "comprimido"
    ],
    "Glipizida 5mg": [
      "Glipizida",
      "5mg",
      "com",
      "comprimido"
    ],
    "Gliteritinibe (Hemifumarato) 40mg": [
      "Gliteritinibe (Hemifumarato)",
      "40mg",
      "com ver",
      "comprimido"
    ],
    "Gosserrelina (Acetato) 3,6mg": [
      "Gosserrelina (Acetato)",
      "3,6mg",
      "depot",
      "depot"
    ],
    "Gosserrelina (Acetato) 10,8mg": [
      "Gosserrelina (Acetato)",
      "10,8mg",
      "depot",
      "depot"
    ],
    "Granisetrona (Cloridrato) 1mg/mL": [
      "Granisetrona (Cloridrato)",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Griseofulvina 500 mg": [
      "Griseofulvina",
      "500 mg",
      "com",
      "comprimido"
    ],
    "Guaifenesina 6,667mg/mL": [
      "Guaifenesina",
      "6,667mg/mL",
      "xpe",
      "frasco"
    ],
    "Guaifenesina 13,3mg/mL": [
      "Guaifenesina",
      "13,3mg/mL",
      "xpe",
      "frasco"
    ],
    "Haloperidol 2mg/mL": [
      "Haloperidol",
      "2mg/mL",
      "sol oral",
      "frasco"
    ],
    "Haloperidol 1mg": [
      "Haloperidol",
      "1mg",
      "com",
      "comprimido"
    ],
    "Haloperidol 5mg": [
      "Haloperidol",
      "5mg",
      "com",
      "comprimido"
    ],
    "Haloperidol 5mg/mL": [
      "Haloperidol",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Haloperidol (Decanoato) 50mg/mL": [
      "Haloperidol (Decanoato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Hidralazina (Cloridrato) 25mg": [
      "Hidralazina (Cloridrato)",
      "25mg",
      "drag",
      "drágea"
    ],
    "Hidralazina (Cloridrato) 50mg": [
      "Hidralazina (Cloridrato)",
      "50mg",
      "drag",
      "drágea"
    ],
    "Hidroclorotiazida 25mg": [
      "Hidroclorotiazida",
      "25mg",
      "com",
      "comprimido"
    ],
    "Hidroclorotiazida 50mg": [
      "Hidroclorotiazida",
      "50mg",
      "com",
      "comprimido"
    ],
    "Hidrocortisona (Acetato) 10mg/g": [
      "Hidrocortisona (Acetato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Hidrocortisona (Butirato) 1mg/g": [
      "Hidrocortisona (Butirato)",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Hidrocortisona (Butirato) 1mg/g": [
      "Hidrocortisona (Butirato)",
      "1mg/g",
      "loc meu",
      "frasco"
    ],
    "Hidrocortisona (Succinato Sódico) 100mg": [
      "Hidrocortisona (Succinato Sódico)",
      "100mg",
      "po sol  inj",
      "unidade"
    ],
    "Hidrocortisona (Succinato Sódico) 500mg": [
      "Hidrocortisona (Succinato Sódico)",
      "500mg",
      "po sol  inj",
      "unidade"
    ],
    "Hidroxicloroquina (Sulfato) 400mg": [
      "Hidroxicloroquina (Sulfato)",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Hidroxizina (Dicloridrato) 2mg/mL": [
      "Hidroxizina (Dicloridrato)",
      "2mg/mL",
      "sol oral",
      "frasco"
    ],
    "Ibandronato de Sódio 150mg": [
      "Ibandronato de Sódio",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Ibrutinibe 140mg": [
      "Ibrutinibe",
      "140mg",
      "cap gel dura",
      "cápsula"
    ],
    "Ibuprofeno 30mg/mL": [
      "Ibuprofeno",
      "30mg/mL",
      "sus or",
      "frasco"
    ],
    "Ibuprofeno 50mg/mL": [
      "Ibuprofeno",
      "50mg/mL",
      "sus or",
      "frasco"
    ],
    "Ibuprofeno 100mg/mL": [
      "Ibuprofeno",
      "100mg/mL",
      "sus or",
      "frasco"
    ],
    "Ibuprofeno 200mg": [
      "Ibuprofeno",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Ibuprofeno 400mg": [
      "Ibuprofeno",
      "400mg",
      "cap mole",
      "cápsula"
    ],
    "Ibuprofeno 600mg": [
      "Ibuprofeno",
      "600mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Ibuprofeno 300mg": [
      "Ibuprofeno",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Ibuprofeno 600mg": [
      "Ibuprofeno",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Ibuprofeno 600mg": [
      "Ibuprofeno",
      "600mg",
      "cap mole",
      "cápsula"
    ],
    "Ibuprofeno Arginina 1155mg": [
      "Ibuprofeno Arginina",
      "1155mg",
      "gran",
      "unidade"
    ],
    "Ibuprofeno Arginina 770mg": [
      "Ibuprofeno Arginina",
      "770mg",
      "gran",
      "unidade"
    ],
    "Icatibanto (Acetato) 10mg/mL": [
      "Icatibanto (Acetato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Idarrubicina (Cloridrato) 5mg/5mL": [
      "Idarrubicina (Cloridrato)",
      "5mg/5mL",
      "po liof sol inj",
      "unidade"
    ],
    "Idarrubicina (Cloridrato) 10mg/10mL": [
      "Idarrubicina (Cloridrato)",
      "10mg/10mL",
      "po liof sol inj",
      "unidade"
    ],
    "Ifosfamida 40mg/mL": [
      "Ifosfamida",
      "40mg/mL",
      "po prep extemp",
      "unidade"
    ],
    "Imatinib (Mesilato) 100mg": [
      "Imatinib (Mesilato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Imatinib (Mesilato) 400mg": [
      "Imatinib (Mesilato)",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Imipramina (Cloridrato) 10mg": [
      "Imipramina (Cloridrato)",
      "10mg",
      "drag",
      "drágea"
    ],
    "Imipramina (Cloridrato) 25mg": [
      "Imipramina (Cloridrato)",
      "25mg",
      "drag",
      "drágea"
    ],
    "Imiquimode 50mg/g": [
      "Imiquimode",
      "50mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Indacaterol (Maleato) 150mcg": [
      "Indacaterol (Maleato)",
      "150mcg",
      "cap dura po inal or",
      "cápsula"
    ],
    "Indacaterol (Maleato) 300mcg": [
      "Indacaterol (Maleato)",
      "300mcg",
      "cap dura po inal or",
      "cápsula"
    ],
    "Indapamida 2,5mg": [
      "Indapamida",
      "2,5mg",
      "drag",
      "drágea"
    ],
    "Indapamida 1,5mg": [
      "Indapamida",
      "1,5mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Indinavir (Sulfato) 400mg": [
      "Indinavir (Sulfato)",
      "400mg",
      "cap dura",
      "cápsula"
    ],
    "Indometacina 25mg": [
      "Indometacina",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Indometacina 50mg": [
      "Indometacina",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Indometacina 100mg": [
      "Indometacina",
      "100mg",
      "sup",
      "supositório"
    ],
    "Ipratrópio (Brometo) 0,25mg/mL": [
      "Ipratrópio (Brometo)",
      "0,25mg/mL",
      "sol inal",
      "frasco"
    ],
    "Ipratrópio (Brometo) 20 mcg/dose": [
      "Ipratrópio (Brometo)",
      "20 mcg/dose",
      "aer dosif",
      "frasco"
    ],
    "Irbesartana 150mg": [
      "Irbesartana",
      "150mg",
      "com",
      "comprimido"
    ],
    "Irbesartana 300mg": [
      "Irbesartana",
      "300mg",
      "com",
      "comprimido"
    ],
    "Irinotecano (Cloridrato Tri-Hidratado) 20mg/mL": [
      "Irinotecano (Cloridrato Tri-Hidratado)",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Isoconazol (Nitrato) 10mg/g": [
      "Isoconazol (Nitrato)",
      "10mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Isoconazol (Nitrato) 600mg": [
      "Isoconazol (Nitrato)",
      "600mg",
      "ovul",
      "óvulo"
    ],
    "Isoconazol (Nitrato) 10mg/g": [
      "Isoconazol (Nitrato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Isoconazol (Nitrato) 10mg/mL": [
      "Isoconazol (Nitrato)",
      "10mg/mL",
      "sol top",
      "frasco"
    ],
    "Isoflurano 1mL/mL": [
      "Isoflurano",
      "1mL/mL",
      "sol inal",
      "frasco"
    ],
    "Isoniazida 100mg": [
      "Isoniazida",
      "100mg",
      "com ver",
      "comprimido"
    ],
    "Isotretinoína 10mg": [
      "Isotretinoína",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Isotretinoína 20mg": [
      "Isotretinoína",
      "20mg",
      "cap mole",
      "cápsula"
    ],
    "Isotretinoína 0,5mg/g": [
      "Isotretinoína",
      "0,5mg/g",
      "gel",
      "frasco"
    ],
    "Isotretinoína 0,5mg/g": [
      "Isotretinoína",
      "0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Itraconazol 100mg": [
      "Itraconazol",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Ivabradina (Cloridrato) 5mg": [
      "Ivabradina (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Ivabradina (Cloridrato) 7,5mg": [
      "Ivabradina (Cloridrato)",
      "7,5mg",
      "com rev",
      "comprimido"
    ],
    "Ivermectina 6mg": [
      "Ivermectina",
      "6mg",
      "com",
      "comprimido"
    ],
    "Ivermectina 10mg/g": [
      "Ivermectina",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Lacidipino 4mg": [
      "Lacidipino",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Lacosamida 50mg": [
      "Lacosamida",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Lacosamida 100mg": [
      "Lacosamida",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Lacosamida 150mg": [
      "Lacosamida",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Lacosamida 200mg": [
      "Lacosamida",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Lacosamida 10mg/mL": [
      "Lacosamida",
      "10mg/mL",
      "sol oral",
      "frasco"
    ],
    "Lacosamida 10mg/mL": [
      "Lacosamida",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Lamivudina 10mg/mL": [
      "Lamivudina",
      "10mg/mL",
      "sol oral",
      "frasco"
    ],
    "Lamivudina 150mg": [
      "Lamivudina",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Lamotrigina 25mg": [
      "Lamotrigina",
      "25mg",
      "com",
      "comprimido"
    ],
    "Lamotrigina 50mg": [
      "Lamotrigina",
      "50mg",
      "com",
      "comprimido"
    ],
    "Lamotrigina 100mg": [
      "Lamotrigina",
      "100mg",
      "com",
      "comprimido"
    ],
    "Lamotrigina 5mg": [
      "Lamotrigina",
      "5mg",
      "com disp",
      "comprimido"
    ],
    "Lamotrigina 25mg": [
      "Lamotrigina",
      "25mg",
      "com disp",
      "comprimido"
    ],
    "Lamotrigina 50mg": [
      "Lamotrigina",
      "50mg",
      "com disp",
      "comprimido"
    ],
    "Lamotrigina 100mg": [
      "Lamotrigina",
      "100mg",
      "com disp",
      "comprimido"
    ],
    "Lamotrigina 200mg": [
      "Lamotrigina",
      "200mg",
      "com disp",
      "comprimido"
    ],
    "Lansoprazol 15mg": [
      "Lansoprazol",
      "15mg",
      "cap dura lib retard",
      "cápsula"
    ],
    "Lansoprazol 30mg": [
      "Lansoprazol",
      "30mg",
      "cap dura lib retard",
      "cápsula"
    ],
    "Lapatinibe (Ditosilato) 250mg": [
      "Lapatinibe (Ditosilato)",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Latanoprosta 50mcg/mL": [
      "Latanoprosta",
      "50mcg/mL",
      "sol oft",
      "frasco"
    ],
    "Leflunomida 20mg": [
      "Leflunomida",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Leflunomida 100mg": [
      "Leflunomida",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Lenalidomida 2,5mg": [
      "Lenalidomida",
      "2,5mg",
      "cap dura",
      "cápsula"
    ],
    "Lenalidomida 5mg": [
      "Lenalidomida",
      "5mg",
      "cap dura",
      "cápsula"
    ],
    "Lenalidomida 10mg": [
      "Lenalidomida",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Lenalidomida 15mg": [
      "Lenalidomida",
      "15mg",
      "cap dura",
      "cápsula"
    ],
    "Lenalidomida 20mg": [
      "Lenalidomida",
      "20mg",
      "cap dura",
      "cápsula"
    ],
    "Lenalidomida 25mg": [
      "Lenalidomida",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Lenvatinibe (Mesilato) 4mg": [
      "Lenvatinibe (Mesilato)",
      "4mg",
      "cap dura",
      "cápsula"
    ],
    "Lenvatinibe (Mesilato) 10mg": [
      "Lenvatinibe (Mesilato)",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Lercanidipino (Cloridrato) 10mg": [
      "Lercanidipino (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Lercanidipino (Cloridrato) 20mg": [
      "Lercanidipino (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Letrozol 2,5mg": [
      "Letrozol",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Leuprorrelina (Acetato) 5,0mg/mL": [
      "Leuprorrelina (Acetato)",
      "5,0mg/mL",
      "sol inj",
      "frasco"
    ],
    "Leuprorrelina (Acetato) 3,75mg/1mL": [
      "Leuprorrelina (Acetato)",
      "3,75mg/1mL",
      "pó liof sus inj + diluente",
      "unidade"
    ],
    "Leuprorrelina (Acetato) 11,25mg/2mL": [
      "Leuprorrelina (Acetato)",
      "11,25mg/2mL",
      "pó liof sus inj + diluente",
      "unidade"
    ],
    "Leuprorrelina (Acetato) 7,5mg": [
      "Leuprorrelina (Acetato)",
      "7,5mg",
      "pó liof susp inj",
      "unidade"
    ],
    "Leuprorrelina (Acetato) 22,5mg": [
      "Leuprorrelina (Acetato)",
      "22,5mg",
      "pó liof susp inj",
      "unidade"
    ],
    "Leuprorrelina (Acetato) 45mg": [
      "Leuprorrelina (Acetato)",
      "45mg",
      "pó liof susp inj",
      "unidade"
    ],
    "Levamisol (Cloridrato) 80mg": [
      "Levamisol (Cloridrato)",
      "80mg",
      "com",
      "comprimido"
    ],
    "Levamisol (Cloridrato) 150mg": [
      "Levamisol (Cloridrato)",
      "150mg",
      "com",
      "comprimido"
    ],
    "Levanlodipino (Besiltato) 2,5mg": [
      "Levanlodipino (Besiltato)",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Levanlodipino (Besiltato) 5mg": [
      "Levanlodipino (Besiltato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Levetiracetam 250mg": [
      "Levetiracetam",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Levetiracetam 100mg/mL": [
      "Levetiracetam",
      "100mg/mL",
      "sol oral",
      "frasco"
    ],
    "Levetiracetam 750mg": [
      "Levetiracetam",
      "750mg",
      "com rev",
      "comprimido"
    ],
    "Levetiracetam 500mg": [
      "Levetiracetam",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Levetiracetam 1.000mg": [
      "Levetiracetam",
      "1.000mg",
      "com rev",
      "comprimido"
    ],
    "Levetiracetam 500mg": [
      "Levetiracetam",
      "500mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Levetiracetam 750mg": [
      "Levetiracetam",
      "750mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Levobunolol (Cloridrato) 5mg/mL": [
      "Levobunolol (Cloridrato)",
      "5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Levocetirizina (Dicloridrato) 5mg/mL": [
      "Levocetirizina (Dicloridrato)",
      "5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Levocetirizina (Dicloridrato) 5mg": [
      "Levocetirizina (Dicloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Levofloxacino (Hemiidratado) 750mg": [
      "Levofloxacino (Hemiidratado)",
      "750mg",
      "com rev",
      "comprimido"
    ],
    "Levofloxacino (Hemiidratado) 5mg/mL": [
      "Levofloxacino (Hemiidratado)",
      "5mg/mL",
      "sol inj bolsa",
      "bolsa"
    ],
    "Levofloxacino (Hemiidratado) 500mg": [
      "Levofloxacino (Hemiidratado)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Levofloxacino (Hemiidratado) 250mg": [
      "Levofloxacino (Hemiidratado)",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Levomalato de Cabozantinibe 20mg": [
      "Levomalato de Cabozantinibe",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Levomalato de Cabozantinibe 40mg": [
      "Levomalato de Cabozantinibe",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Levomalato de Cabozantinibe 60mg": [
      "Levomalato de Cabozantinibe",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Levomepromazina (Cloridrato) 40mg/mL": [
      "Levomepromazina (Cloridrato)",
      "40mg/mL",
      "sol oral",
      "frasco"
    ],
    "Levomepromazina (Cloridrato) 5mg/mL": [
      "Levomepromazina (Cloridrato)",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Levomepromazina (Maleato) 25mg": [
      "Levomepromazina (Maleato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Levomepromazina (Maleato) 100mg": [
      "Levomepromazina (Maleato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Levonorgestrel 52mg": [
      "Levonorgestrel",
      "52mg",
      "sistema intrauterino",
      "unidade"
    ],
    "Levonorgestrel 0,75mg": [
      "Levonorgestrel",
      "0,75mg",
      "com",
      "comprimido"
    ],
    "Levonorgestrel 1,5mg": [
      "Levonorgestrel",
      "1,5mg",
      "com",
      "comprimido"
    ],
    "Levosimendana 2,5mg/mL": [
      "Levosimendana",
      "2,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Levotiroxina Sódica 137mg": [
      "Levotiroxina Sódica",
      "137mg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 38mcg": [
      "Levotiroxina Sódica",
      "38mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 25mcg": [
      "Levotiroxina Sódica",
      "25mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 50mcg": [
      "Levotiroxina Sódica",
      "50mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 75mcg": [
      "Levotiroxina Sódica",
      "75mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 88mcg": [
      "Levotiroxina Sódica",
      "88mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 100mcg": [
      "Levotiroxina Sódica",
      "100mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 112mcg": [
      "Levotiroxina Sódica",
      "112mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 125mcg": [
      "Levotiroxina Sódica",
      "125mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 150mcg": [
      "Levotiroxina Sódica",
      "150mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 175mcg": [
      "Levotiroxina Sódica",
      "175mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 200mcg": [
      "Levotiroxina Sódica",
      "200mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 300mcg": [
      "Levotiroxina Sódica",
      "300mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 12,5mcg": [
      "Levotiroxina Sódica",
      "12,5mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 37,5mcg": [
      "Levotiroxina Sódica",
      "37,5mcg",
      "com",
      "comprimido"
    ],
    "Levotiroxina Sódica 62,5mcg": [
      "Levotiroxina Sódica",
      "62,5mcg",
      "com",
      "comprimido"
    ],
    "Lidocaína 700mg": [
      "Lidocaína",
      "700mg",
      "emplastro",
      "unidade"
    ],
    "Lidocaína (Cloridrato) 20mg/mL": [
      "Lidocaína (Cloridrato)",
      "20mg/mL",
      "geléia top",
      "frasco"
    ],
    "Lidocaína (Cloridrato) 20mg/mL": [
      "Lidocaína (Cloridrato)",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Lidocaína (Cloridrato) 10mg/mL": [
      "Lidocaína (Cloridrato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Lidocaína Base 50mg/g": [
      "Lidocaína Base",
      "50mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Lidocaína Base 40mg/g": [
      "Lidocaína Base",
      "40mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Lidocaína Base 100mg/mL": [
      "Lidocaína Base",
      "100mg/mL",
      "sol top",
      "frasco"
    ],
    "Limeciclina 150mg": [
      "Limeciclina",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Limeciclina 300mg": [
      "Limeciclina",
      "300mg",
      "cap dura",
      "cápsula"
    ],
    "Linagliptina 5mg": [
      "Linagliptina",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Linezolida 600mg": [
      "Linezolida",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Linezolida 2mg/mL": [
      "Linezolida",
      "2mg/mL",
      "sol inj infus",
      "unidade"
    ],
    "Lisdexanfetamina (Dimesilato) 30mg": [
      "Lisdexanfetamina (Dimesilato)",
      "30mg",
      "cap dura",
      "cápsula"
    ],
    "Lisdexanfetamina (Dimesilato) 50mg": [
      "Lisdexanfetamina (Dimesilato)",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Lisdexanfetamina (Dimesilato) 70mg": [
      "Lisdexanfetamina (Dimesilato)",
      "70mg",
      "cap dura",
      "cápsula"
    ],
    "Lítio (Carbonato) 300mg": [
      "Lítio (Carbonato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Lítio (Carbonato) 450mg": [
      "Lítio (Carbonato)",
      "450mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Loperamida (Cloridrato) 2mg": [
      "Loperamida (Cloridrato)",
      "2mg",
      "com",
      "comprimido"
    ],
    "Loratadina 10mg": [
      "Loratadina",
      "10mg",
      "com",
      "comprimido"
    ],
    "Loratadina 1mg/mL": [
      "Loratadina",
      "1mg/mL",
      "xpe",
      "frasco"
    ],
    "Loratadina 10mg": [
      "Loratadina",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Lorazepam 1mg": [
      "Lorazepam",
      "1mg",
      "com",
      "comprimido"
    ],
    "Lorazepam 2mg": [
      "Lorazepam",
      "2mg",
      "com",
      "comprimido"
    ],
    "Lornoxicam 8mg": [
      "Lornoxicam",
      "8mg",
      "com rev",
      "comprimido"
    ],
    "Losartana Potássica 50mg": [
      "Losartana Potássica",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Losartana Potássica 100mg": [
      "Losartana Potássica",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Losartana Potássica 25mg": [
      "Losartana Potássica",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Loteprednol (Etabonato) 5mg/mL": [
      "Loteprednol (Etabonato)",
      "5mg/mL",
      "sus oft",
      "frasco"
    ],
    "Loteprednol (Etabonato) 2mg/mL": [
      "Loteprednol (Etabonato)",
      "2mg/mL",
      "sus oft",
      "frasco"
    ],
    "Lovastatina 10mg": [
      "Lovastatina",
      "10mg",
      "com",
      "comprimido"
    ],
    "Lovastatina 20mg": [
      "Lovastatina",
      "20mg",
      "com",
      "comprimido"
    ],
    "Lovastatina 40mg": [
      "Lovastatina",
      "40mg",
      "com",
      "comprimido"
    ],
    "Loxoprofeno Sódico 60mg": [
      "Loxoprofeno Sódico",
      "60mg",
      "com",
      "comprimido"
    ],
    "Lurasidona (Cloridrato) 20mg": [
      "Lurasidona (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Lurasidona (Cloridrato) 40mg": [
      "Lurasidona (Cloridrato)",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Lurasidona (Cloridrato) 80mg": [
      "Lurasidona (Cloridrato)",
      "80mg",
      "com rev",
      "comprimido"
    ],
    "Malato de Sunitinibe 12,5mg": [
      "Malato de Sunitinibe",
      "12,5mg",
      "cap dura",
      "cápsula"
    ],
    "Malato de Sunitinibe 25mg": [
      "Malato de Sunitinibe",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Malato de Sunitinibe 37,5mg": [
      "Malato de Sunitinibe",
      "37,5mg",
      "cap dura",
      "cápsula"
    ],
    "Malato de Sunitinibe 50mg": [
      "Malato de Sunitinibe",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Maleato de Asenapina 5mg": [
      "Maleato de Asenapina",
      "5mg",
      "com subl",
      "comprimido"
    ],
    "Maleato de Asenapina 10mg": [
      "Maleato de Asenapina",
      "10mg",
      "com subl",
      "comprimido"
    ],
    "Maleato de Fluvoxamina 50mg": [
      "Maleato de Fluvoxamina",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Maleato de Fluvoxamina 100mg": [
      "Maleato de Fluvoxamina",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Manidipino (Dicloridrato) 10mg": [
      "Manidipino (Dicloridrato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Manidipino (Dicloridrato) 20mg": [
      "Manidipino (Dicloridrato)",
      "20mg",
      "com",
      "comprimido"
    ],
    "Maraviroque 150mg": [
      "Maraviroque",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Maraviroque 300mg": [
      "Maraviroque",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Mebendazol 20mg/mL": [
      "Mebendazol",
      "20mg/mL",
      "sus or",
      "frasco"
    ],
    "Mebeverina (Cloridrato) 200mg": [
      "Mebeverina (Cloridrato)",
      "200mg",
      "cap lib prol",
      "cápsula"
    ],
    "Mebutato de Ingenol 150mcg/g": [
      "Mebutato de Ingenol",
      "150mcg/g",
      "gel",
      "frasco"
    ],
    "Mebutato de Ingenol 500mcg/g": [
      "Mebutato de Ingenol",
      "500mcg/g",
      "gel",
      "frasco"
    ],
    "Meclizina (Cloridrato) 12,5mg": [
      "Meclizina (Cloridrato)",
      "12,5mg",
      "com",
      "comprimido"
    ],
    "Meclizina (Cloridrato) 25mg": [
      "Meclizina (Cloridrato)",
      "25mg",
      "com",
      "comprimido"
    ],
    "Meclizina (Cloridrato) 50mg": [
      "Meclizina (Cloridrato)",
      "50mg",
      "com",
      "comprimido"
    ],
    "Medroxiprogesterona (Acetato) 150mg/mL": [
      "Medroxiprogesterona (Acetato)",
      "150mg/mL",
      "sus inj",
      "frasco"
    ],
    "Medroxiprogesterona (Acetato) 2,5mg": [
      "Medroxiprogesterona (Acetato)",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Medroxiprogesterona (Acetato) 5mg": [
      "Medroxiprogesterona (Acetato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Medroxiprogesterona (Acetato) 10mg": [
      "Medroxiprogesterona (Acetato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Ácido Mefenâmico 500mg": [
      "Ácido Mefenâmico",
      "500mg",
      "com",
      "comprimido"
    ],
    "Megestrol (Acetato) 160 mg": [
      "Megestrol (Acetato)",
      "160 mg",
      "com",
      "comprimido"
    ],
    "Meglumina (Antimoniato) 300mg/mL": [
      "Meglumina (Antimoniato)",
      "300mg/mL",
      "sol inj",
      "frasco"
    ],
    "Melfalana 2 mg": [
      "Melfalana",
      "2 mg",
      "com rev",
      "comprimido"
    ],
    "Melfalana 50mg/10mL": [
      "Melfalana",
      "50mg/10mL",
      "po liof sol inj",
      "unidade"
    ],
    "Meloxicam 7,5mg": [
      "Meloxicam",
      "7,5mg",
      "com",
      "comprimido"
    ],
    "Meloxicam 15mg": [
      "Meloxicam",
      "15mg",
      "com",
      "comprimido"
    ],
    "Memantina (Cloridrato) 10mg": [
      "Memantina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Memantina (Cloridrato) 20mg": [
      "Memantina (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Memantina (Cloridrato) 10mg/mL": [
      "Memantina (Cloridrato)",
      "10mg/mL",
      "sol oral",
      "frasco"
    ],
    "Memantina (Cloridrato) 5mg": [
      "Memantina (Cloridrato)",
      "5mg",
      "com orodisp",
      "comprimido"
    ],
    "Memantina (Cloridrato) 10mg": [
      "Memantina (Cloridrato)",
      "10mg",
      "com orodisp",
      "comprimido"
    ],
    "Memantina (Cloridrato) 15mg": [
      "Memantina (Cloridrato)",
      "15mg",
      "com orodisp",
      "comprimido"
    ],
    "Memantina (Cloridrato) 20mg": [
      "Memantina (Cloridrato)",
      "20mg",
      "com orodisp",
      "comprimido"
    ],
    "Mepivacaína (Cloridrato) 30mg/mL": [
      "Mepivacaína (Cloridrato)",
      "30mg/mL",
      "sol inj",
      "frasco"
    ],
    "Mercaptopurina 50mg": [
      "Mercaptopurina",
      "50mg",
      "com",
      "comprimido"
    ],
    "Meropeném Triidratado 500mg/10mL": [
      "Meropeném Triidratado",
      "500mg/10mL",
      "po sol inj",
      "unidade"
    ],
    "Meropeném Triidratado 1000mg/20mL": [
      "Meropeném Triidratado",
      "1000mg/20mL",
      "po sol inj",
      "unidade"
    ],
    "Meropeném Triidratado 2g/20mL": [
      "Meropeném Triidratado",
      "2g/20mL",
      "po sol inj",
      "unidade"
    ],
    "Mesalazina 400mg": [
      "Mesalazina",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Mesalazina 1000mg": [
      "Mesalazina",
      "1000mg",
      "sup ret",
      "supositório"
    ],
    "Mesalazina 500mg": [
      "Mesalazina",
      "500mg",
      "com lib prol",
      "comprimido"
    ],
    "Mesalazina 1g": [
      "Mesalazina",
      "1g",
      "gran lib prol",
      "unidade"
    ],
    "Mesalazina 2g": [
      "Mesalazina",
      "2g",
      "gran lib prol",
      "unidade"
    ],
    "Mesalazina 10mg/mL": [
      "Mesalazina",
      "10mg/mL",
      "enema ret",
      "frasco"
    ],
    "Mesalazina 500mg": [
      "Mesalazina",
      "500mg",
      "sup ret",
      "supositório"
    ],
    "Mesalazina 800mg": [
      "Mesalazina",
      "800mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Mesalazina 1.200mg": [
      "Mesalazina",
      "1.200mg",
      "com lib mod",
      "comprimido"
    ],
    "Mesilato de Osimertinibe 40mg": [
      "Mesilato de Osimertinibe",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Mesilato de Osimertinibe 80mg": [
      "Mesilato de Osimertinibe",
      "80mg",
      "com rev",
      "comprimido"
    ],
    "Mesilato de Rasagilina 1mg": [
      "Mesilato de Rasagilina",
      "1mg",
      "com",
      "comprimido"
    ],
    "Mesna 100mg/mL": [
      "Mesna",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metadona (Cloridrato) 10mg/mL": [
      "Metadona (Cloridrato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metadona (Cloridrato) 5mg": [
      "Metadona (Cloridrato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Metadona (Cloridrato) 10mg": [
      "Metadona (Cloridrato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Metformina (Cloridrato) 500mg": [
      "Metformina (Cloridrato)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Metformina (Cloridrato) 850mg": [
      "Metformina (Cloridrato)",
      "850mg",
      "com rev",
      "comprimido"
    ],
    "Metformina (Cloridrato) 1.000mg": [
      "Metformina (Cloridrato)",
      "1.000mg",
      "com rev",
      "comprimido"
    ],
    "Metformina (Cloridrato) 500mg": [
      "Metformina (Cloridrato)",
      "500mg",
      "com lib prol",
      "comprimido"
    ],
    "Metformina (Cloridrato) 750mg": [
      "Metformina (Cloridrato)",
      "750mg",
      "com lib prol",
      "comprimido"
    ],
    "Metformina (Cloridrato) 850mg": [
      "Metformina (Cloridrato)",
      "850mg",
      "com lib prol",
      "comprimido"
    ],
    "Metformina (Cloridrato) 1.000mg": [
      "Metformina (Cloridrato)",
      "1.000mg",
      "com lib prol",
      "comprimido"
    ],
    "Metildopa 250mg": [
      "Metildopa",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Metildopa 500mg": [
      "Metildopa",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Metilergometrina (Maleato) 0,2mg/mL": [
      "Metilergometrina (Maleato)",
      "0,2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metilfenidato (Cloridrato) 18mg": [
      "Metilfenidato (Cloridrato)",
      "18mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metilfenidato (Cloridrato) 36mg": [
      "Metilfenidato (Cloridrato)",
      "36mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metilfenidato (Cloridrato) 54mg": [
      "Metilfenidato (Cloridrato)",
      "54mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metilfenidato (Cloridrato) 10mg": [
      "Metilfenidato (Cloridrato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Metilfenidato (Cloridrato) 10mg": [
      "Metilfenidato (Cloridrato)",
      "10mg",
      "cap dura  lib mod",
      "cápsula"
    ],
    "Metilfenidato (Cloridrato) 20mg": [
      "Metilfenidato (Cloridrato)",
      "20mg",
      "cap dura  lib mod",
      "cápsula"
    ],
    "Metilfenidato (Cloridrato) 30mg": [
      "Metilfenidato (Cloridrato)",
      "30mg",
      "cap dura  lib mod",
      "cápsula"
    ],
    "Metilfenidato (Cloridrato) 40mg": [
      "Metilfenidato (Cloridrato)",
      "40mg",
      "cap dura  lib mod",
      "cápsula"
    ],
    "Metilprednisolona (Aceponato) 1mg/g": [
      "Metilprednisolona (Aceponato)",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Metilprednisolona (Aceponato) 1mg/g": [
      "Metilprednisolona (Aceponato)",
      "1mg/g",
      "loç derm",
      "frasco"
    ],
    "Metilprednisolona (Aceponato) 1mg/g": [
      "Metilprednisolona (Aceponato)",
      "1mg/g",
      "sol top",
      "frasco"
    ],
    "Metilprednisolona (Acetato) 40mg/mL": [
      "Metilprednisolona (Acetato)",
      "40mg/mL",
      "sus inj",
      "frasco"
    ],
    "Metoclopramida (Cloridrato) 10mg": [
      "Metoclopramida (Cloridrato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Metoclopramida (Cloridrato) 5mg/mL": [
      "Metoclopramida (Cloridrato)",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metoclopramida (Cloridrato) 4mg/mL": [
      "Metoclopramida (Cloridrato)",
      "4mg/mL",
      "sol oral",
      "frasco"
    ],
    "Metoprolol (Succinato) 25mg": [
      "Metoprolol (Succinato)",
      "25mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metoprolol (Succinato) 50mg": [
      "Metoprolol (Succinato)",
      "50mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metoprolol (Succinato) 100mg": [
      "Metoprolol (Succinato)",
      "100mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Metoprolol (Tartarato) 100mg": [
      "Metoprolol (Tartarato)",
      "100mg",
      "com",
      "comprimido"
    ],
    "Metoprolol (Tartarato) 1mg/mL": [
      "Metoprolol (Tartarato)",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metoprolol (Tartarato) 100mg": [
      "Metoprolol (Tartarato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Metotrexato 25mg/mL": [
      "Metotrexato",
      "25mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metotrexato 100mg/mL": [
      "Metotrexato",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metronidazol 7,5mg/g": [
      "Metronidazol",
      "7,5mg/g",
      "gel",
      "frasco"
    ],
    "Metronidazol 250mg": [
      "Metronidazol",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Metronidazol 400mg": [
      "Metronidazol",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Metronidazol 5mg/mL": [
      "Metronidazol",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Metronidazol 100mg/g": [
      "Metronidazol",
      "100mg/g",
      "geleia vag",
      "frasco"
    ],
    "Micafungina Sódica 100mg": [
      "Micafungina Sódica",
      "100mg",
      "po liof sol inj",
      "unidade"
    ],
    "Micafungina Sódica 50mg": [
      "Micafungina Sódica",
      "50mg",
      "po liof sol inj",
      "unidade"
    ],
    "Micofenolato Sódico 180mg": [
      "Micofenolato Sódico",
      "180mg",
      "com rev",
      "comprimido"
    ],
    "Micofenolato Sódico 360mg": [
      "Micofenolato Sódico",
      "360mg",
      "com rev",
      "comprimido"
    ],
    "Miconazol 20mg/mL": [
      "Miconazol",
      "20mg/mL",
      "gel or",
      "frasco"
    ],
    "Miconazol (Nitrato) 20mg/mL": [
      "Miconazol (Nitrato)",
      "20mg/mL",
      "emulsão",
      "frasco"
    ],
    "Miconazol (Nitrato) 20mg/g": [
      "Miconazol (Nitrato)",
      "20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Miconazol (Nitrato) 20mg/mL": [
      "Miconazol (Nitrato)",
      "20mg/mL",
      "sol aer",
      "frasco"
    ],
    "Midazolam 1mg/mL": [
      "Midazolam",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Midazolam 5mg/mL": [
      "Midazolam",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Midazolam (Maleato) 7,5mg": [
      "Midazolam (Maleato)",
      "7,5mg",
      "com rev",
      "comprimido"
    ],
    "Midazolam (Maleato) 15mg": [
      "Midazolam (Maleato)",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Midostaurina 25mg": [
      "Midostaurina",
      "25mg",
      "cap mole",
      "cápsula"
    ],
    "Miglustate 100mg": [
      "Miglustate",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Milrinona (Lactato) 1mg/mL": [
      "Milrinona (Lactato)",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Minociclina (Cloridrato) 100mg": [
      "Minociclina (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Minoxidil 10mg": [
      "Minoxidil",
      "10mg",
      "com",
      "comprimido"
    ],
    "Minoxidil 50 mg/mL": [
      "Minoxidil",
      "50 mg/mL",
      "sol capilar",
      "frasco"
    ],
    "Mirabegrona 25 mg": [
      "Mirabegrona",
      "25 mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Mirabegrona 50 mg": [
      "Mirabegrona",
      "50 mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Mirtazapina 15mg": [
      "Mirtazapina",
      "15mg",
      "com orodisp",
      "comprimido"
    ],
    "Mirtazapina 30mg": [
      "Mirtazapina",
      "30mg",
      "com orodisp",
      "comprimido"
    ],
    "Mirtazapina 45mg": [
      "Mirtazapina",
      "45mg",
      "com orodisp",
      "comprimido"
    ],
    "Mirtazapina 30mg": [
      "Mirtazapina",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Mirtazapina 45mg": [
      "Mirtazapina",
      "45mg",
      "com rev",
      "comprimido"
    ],
    "Misoprostol 100mcg": [
      "Misoprostol",
      "100mcg",
      "com vag",
      "comprimido"
    ],
    "Mitotano 500mg": [
      "Mitotano",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Mitoxantrona 2mg/mL": [
      "Mitoxantrona",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Modafinila 100mg": [
      "Modafinila",
      "100mg",
      "com",
      "comprimido"
    ],
    "Modafinila 200mg": [
      "Modafinila",
      "200mg",
      "com",
      "comprimido"
    ],
    "Mofetila (Micofenolato) 500mg": [
      "Mofetila (Micofenolato)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Mometasona (Furoato) 200mcg": [
      "Mometasona (Furoato)",
      "200mcg",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Mometasona (Furoato) 400mcg": [
      "Mometasona (Furoato)",
      "400mcg",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Mometasona (Furoato) 50mcg/dose": [
      "Mometasona (Furoato)",
      "50mcg/dose",
      "sus spr nas",
      "frasco"
    ],
    "Mometasona (Furoato) 1mg/g": [
      "Mometasona (Furoato)",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Mometasona (Furoato) 1mg/g": [
      "Mometasona (Furoato)",
      "1mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Monoetanolamina (Oleato) 50mg/mL": [
      "Monoetanolamina (Oleato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Montelucaste Sódico 10mg": [
      "Montelucaste Sódico",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Montelucaste Sódico 4mg": [
      "Montelucaste Sódico",
      "4mg",
      "com mast",
      "comprimido"
    ],
    "Montelucaste Sódico 5mg": [
      "Montelucaste Sódico",
      "5mg",
      "com mast",
      "comprimido"
    ],
    "Montelucaste Sódico 4mg": [
      "Montelucaste Sódico",
      "4mg",
      "grânulo",
      "unidade"
    ],
    "Morfina (Sulfato Pentahidratado) 10mg/mL": [
      "Morfina (Sulfato Pentahidratado)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Morfina (Sulfato Pentahidratado) 10mg/mL": [
      "Morfina (Sulfato Pentahidratado)",
      "10mg/mL",
      "sol oral",
      "frasco"
    ],
    "Morfina (Sulfato Pentahidratado) 0,1mg/mL": [
      "Morfina (Sulfato Pentahidratado)",
      "0,1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Morfina (Sulfato Pentahidratado) 0,2mg/mL": [
      "Morfina (Sulfato Pentahidratado)",
      "0,2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Morfina (Sulfato Pentahidratado) 1mg/mL": [
      "Morfina (Sulfato Pentahidratado)",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Morfina (Sulfato Pentahidratado) 10mg": [
      "Morfina (Sulfato Pentahidratado)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Morfina (Sulfato Pentahidratado) 30mg": [
      "Morfina (Sulfato Pentahidratado)",
      "30mg",
      "com",
      "comprimido"
    ],
    "Morfina (Sulfato Pentahidratado) 30mg": [
      "Morfina (Sulfato Pentahidratado)",
      "30mg",
      "cap gel lib retard",
      "cápsula"
    ],
    "Morfina (Sulfato Pentahidratado) 60mg": [
      "Morfina (Sulfato Pentahidratado)",
      "60mg",
      "cap gel lib retard",
      "cápsula"
    ],
    "Morfina (Sulfato Pentahidratado) 100mg": [
      "Morfina (Sulfato Pentahidratado)",
      "100mg",
      "cap gel lib retard",
      "cápsula"
    ],
    "Moxifloxacino (Cloridrato) 400mg": [
      "Moxifloxacino (Cloridrato)",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Moxifloxacino (Cloridrato) 5mg/mL": [
      "Moxifloxacino (Cloridrato)",
      "5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Moxifloxacino (Cloridrato) 1,6mg/mL": [
      "Moxifloxacino (Cloridrato)",
      "1,6mg/mL",
      "sol infus",
      "frasco"
    ],
    "Mupirocina 20mg/g": [
      "Mupirocina",
      "20mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Nafazolina (Cloridrato) 0,5mg": [
      "Nafazolina (Cloridrato)",
      "0,5mg",
      "sol nas",
      "frasco"
    ],
    "Nalbufina (Cloridrato) 10mg/mL": [
      "Nalbufina (Cloridrato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Naloxona (Cloridrato) 0,4mg/mL": [
      "Naloxona (Cloridrato)",
      "0,4mg/mL",
      "sol inj",
      "frasco"
    ],
    "Naltrexona (Cloridrato) 50 mg": [
      "Naltrexona (Cloridrato)",
      "50 mg",
      "com rev",
      "comprimido"
    ],
    "Naproxeno 250mg": [
      "Naproxeno",
      "250mg",
      "com",
      "comprimido"
    ],
    "Naproxeno 500mg": [
      "Naproxeno",
      "500mg",
      "com",
      "comprimido"
    ],
    "Naproxeno Sódico 275mg": [
      "Naproxeno Sódico",
      "275mg",
      "com rev",
      "comprimido"
    ],
    "Naproxeno Sódico 550mg": [
      "Naproxeno Sódico",
      "550mg",
      "com rev",
      "comprimido"
    ],
    "Naratriptana (Cloridrato) 2,5 mg": [
      "Naratriptana (Cloridrato)",
      "2,5 mg",
      "com rev",
      "comprimido"
    ],
    "Nebivolol (Cloridrato) 5mg": [
      "Nebivolol (Cloridrato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Neostigmina (Metilsulfato) 0,5mg/mL": [
      "Neostigmina (Metilsulfato)",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Nepafenaco 1mg/mL": [
      "Nepafenaco",
      "1mg/mL",
      "sus oft",
      "frasco"
    ],
    "Nevirapina 200mg": [
      "Nevirapina",
      "200mg",
      "comprimido",
      "comprimido"
    ],
    "Nicotina 7mg": [
      "Nicotina",
      "7mg",
      "ades",
      "adesivo"
    ],
    "Nicotina 14mg": [
      "Nicotina",
      "14mg",
      "ades",
      "adesivo"
    ],
    "Nicotina 21mg": [
      "Nicotina",
      "21mg",
      "ades",
      "adesivo"
    ],
    "Nicotina 2mg": [
      "Nicotina",
      "2mg",
      "pastilha",
      "pastilha"
    ],
    "Nicotina 4mg": [
      "Nicotina",
      "4mg",
      "pastilha",
      "pastilha"
    ],
    "Nicotina 2mg": [
      "Nicotina",
      "2mg",
      "goma",
      "goma"
    ],
    "Nicotina 4mg": [
      "Nicotina",
      "4mg",
      "goma",
      "goma"
    ],
    "Nifedipino 10mg": [
      "Nifedipino",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Nifedipino 20mg": [
      "Nifedipino",
      "20mg",
      "com rev mult lib prol",
      "comprimido"
    ],
    "Nifedipino 30mg": [
      "Nifedipino",
      "30mg",
      "com rev mult lib prol",
      "comprimido"
    ],
    "Nifedipino 60mg": [
      "Nifedipino",
      "60mg",
      "com rev mult lib prol",
      "comprimido"
    ],
    "Nifedipino 10mg": [
      "Nifedipino",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Nifedipino 20mg": [
      "Nifedipino",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Nilotinibe 200mg": [
      "Nilotinibe",
      "200mg",
      "cap dura",
      "cápsula"
    ],
    "Nilotinibe 150mg": [
      "Nilotinibe",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Nimesulida 50mg": [
      "Nimesulida",
      "50mg",
      "sup",
      "supositório"
    ],
    "Nimesulida 100mg": [
      "Nimesulida",
      "100mg",
      "sup",
      "supositório"
    ],
    "Nimesulida 100mg": [
      "Nimesulida",
      "100mg",
      "com",
      "comprimido"
    ],
    "Nimesulida 100mg": [
      "Nimesulida",
      "100mg",
      "com disp",
      "comprimido"
    ],
    "Nimesulida 100mg": [
      "Nimesulida",
      "100mg",
      "gran",
      "unidade"
    ],
    "Nimesulida 50mg/mL": [
      "Nimesulida",
      "50mg/mL",
      "sus or",
      "frasco"
    ],
    "Nimesulida 10mg/mL": [
      "Nimesulida",
      "10mg/mL",
      "sus or",
      "frasco"
    ],
    "Nimesulida 200mg": [
      "Nimesulida",
      "200mg",
      "cap lib prol",
      "cápsula"
    ],
    "Nimesulida 20mg/g": [
      "Nimesulida",
      "20mg/g",
      "gel",
      "frasco"
    ],
    "Nimesulida Betaciclodextrina 400mg": [
      "Nimesulida Betaciclodextrina",
      "400mg",
      "com",
      "comprimido"
    ],
    "Nistatina 100.000UI/mL": [
      "Nistatina",
      "100.000UI/mL",
      "sus or",
      "frasco"
    ],
    "Nistatina 25.000UI": [
      "Nistatina",
      "25.000UI",
      "creme vaginal",
      "bisnaga"
    ],
    "Nitazoxanida 500mg": [
      "Nitazoxanida",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Nitazoxanida 20mg/mL": [
      "Nitazoxanida",
      "20mg/mL",
      "sus or",
      "frasco"
    ],
    "Nitrato de Miconazol 20mg/g": [
      "Nitrato de Miconazol",
      "20mg/g",
      "po uso top",
      "unidade"
    ],
    "Nitrato de Miconazol 20mg/g": [
      "Nitrato de Miconazol",
      "20mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Nitrofural 2mg/g": [
      "Nitrofural",
      "2mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Nitrofural 2mg/mL": [
      "Nitrofural",
      "2mg/mL",
      "sol top",
      "frasco"
    ],
    "Nitrofurantoína 100mg": [
      "Nitrofurantoína",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Nitroglicerina 25mg": [
      "Nitroglicerina",
      "25mg",
      "ades",
      "adesivo"
    ],
    "Nitroglicerina 50mg": [
      "Nitroglicerina",
      "50mg",
      "ades",
      "adesivo"
    ],
    "Nitroglicerina 5mg/mL": [
      "Nitroglicerina",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Nitroprusseto Sódico Diidratado 50mg": [
      "Nitroprusseto Sódico Diidratado",
      "50mg",
      "po liof inj + diluente 2 mL",
      "unidade"
    ],
    "Nomegestrol (Acetato) 5mg": [
      "Nomegestrol (Acetato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Norepinefrina (Hemitartarato) 2mg/mL": [
      "Norepinefrina (Hemitartarato)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Noretisterona 0,35mg": [
      "Noretisterona",
      "0,35mg",
      "com",
      "comprimido"
    ],
    "Norfloxacino 400mg": [
      "Norfloxacino",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Nortriptilina (Cloridrato) 10mg": [
      "Nortriptilina (Cloridrato)",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Nortriptilina (Cloridrato) 25mg": [
      "Nortriptilina (Cloridrato)",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Nortriptilina (Cloridrato) 50mg": [
      "Nortriptilina (Cloridrato)",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Nortriptilina (Cloridrato) 75mg": [
      "Nortriptilina (Cloridrato)",
      "75mg",
      "cap dura",
      "cápsula"
    ],
    "Nusinersena 2,4mg/mL": [
      "Nusinersena",
      "2,4mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ocitocina 5UI/mL": [
      "Ocitocina",
      "5UI/mL",
      "sol inj",
      "frasco"
    ],
    "Ocitocina 40UI/mL": [
      "Ocitocina",
      "40UI/mL",
      "sol spr nas",
      "frasco"
    ],
    "Octreotida 0,05mg/mL": [
      "Octreotida",
      "0,05mg/mL",
      "sol inj",
      "frasco"
    ],
    "Octreotida 0,1mg/mL": [
      "Octreotida",
      "0,1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Octreotida 0,5mg/mL": [
      "Octreotida",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Octreotida (Acetato) 10mg/2,5mL": [
      "Octreotida (Acetato)",
      "10mg/2,5mL",
      "po sus inj",
      "unidade"
    ],
    "Octreotida (Acetato) 20mg/2,5mL": [
      "Octreotida (Acetato)",
      "20mg/2,5mL",
      "po sus inj",
      "unidade"
    ],
    "Octreotida (Acetato) 30mg/2,5mL": [
      "Octreotida (Acetato)",
      "30mg/2,5mL",
      "po sus inj",
      "unidade"
    ],
    "Ofloxacino 3mg/mL": [
      "Ofloxacino",
      "3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Olanzapina 2,5mg": [
      "Olanzapina",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Olanzapina 5mg": [
      "Olanzapina",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Olanzapina 10mg": [
      "Olanzapina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Olanzapina 5mg": [
      "Olanzapina",
      "5mg",
      "com orodisp",
      "comprimido"
    ],
    "Olanzapina 10mg": [
      "Olanzapina",
      "10mg",
      "com orodisp",
      "comprimido"
    ],
    "Olaparibe 100mg": [
      "Olaparibe",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Olaparibe 150mg": [
      "Olaparibe",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Olaparibe 50mg": [
      "Olaparibe",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Olmesartana Medoxomila 20mg": [
      "Olmesartana Medoxomila",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila 40mg": [
      "Olmesartana Medoxomila",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Olodaterol (Cloridratro) 2,5mcg": [
      "Olodaterol (Cloridratro)",
      "2,5mcg",
      "sol inal",
      "frasco"
    ],
    "Olopatadina (Cloridrato) 1mg/mL": [
      "Olopatadina (Cloridrato)",
      "1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Olopatadina (Cloridrato) 2mg/mL": [
      "Olopatadina (Cloridrato)",
      "2mg/mL",
      "sol oft",
      "frasco"
    ],
    "Omeprazol (Sódico) 40mg/mL": [
      "Omeprazol (Sódico)",
      "40mg/mL",
      "pó liof inj",
      "unidade"
    ],
    "Omeprazol Magnésico 10mg": [
      "Omeprazol Magnésico",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Omeprazol Magnésico 20mg": [
      "Omeprazol Magnésico",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Omeprazol Magnésico 40mg": [
      "Omeprazol Magnésico",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Ondansetrona (Cloridrato) 4mg": [
      "Ondansetrona (Cloridrato)",
      "4mg",
      "com desint or",
      "comprimido"
    ],
    "Ondansetrona (Cloridrato) 8mg": [
      "Ondansetrona (Cloridrato)",
      "8mg",
      "com desint or",
      "comprimido"
    ],
    "Ondansetrona (Cloridrato) 2mg/mL": [
      "Ondansetrona (Cloridrato)",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ondansetrona (Cloridrato) 4mg": [
      "Ondansetrona (Cloridrato)",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Ondansetrona (Cloridrato) 8mg": [
      "Ondansetrona (Cloridrato)",
      "8mg",
      "com rev",
      "comprimido"
    ],
    "Orlistate 120mg": [
      "Orlistate",
      "120mg",
      "cap dura",
      "cápsula"
    ],
    "Oseltamivir (Fosfato) 30mg": [
      "Oseltamivir (Fosfato)",
      "30mg",
      "cap dura",
      "cápsula"
    ],
    "Oseltamivir (Fosfato) 45mg": [
      "Oseltamivir (Fosfato)",
      "45mg",
      "cap dura",
      "cápsula"
    ],
    "Oseltamivir (Fosfato) 75mg": [
      "Oseltamivir (Fosfato)",
      "75mg",
      "cap dura",
      "cápsula"
    ],
    "Oxacilina Sódica 500mg": [
      "Oxacilina Sódica",
      "500mg",
      "po sol inj",
      "unidade"
    ],
    "Oxaliplatina 50mg": [
      "Oxaliplatina",
      "50mg",
      "po liof sol inj",
      "unidade"
    ],
    "Oxaliplatina 100mg": [
      "Oxaliplatina",
      "100mg",
      "po liof sol inj",
      "unidade"
    ],
    "Oxaliplatina 5,0mg/mL": [
      "Oxaliplatina",
      "5,0mg/mL",
      "sol inj",
      "frasco"
    ],
    "Oxamniquina 250mg": [
      "Oxamniquina",
      "250mg",
      "cap dura",
      "cápsula"
    ],
    "Oxamniquina 50mg/mL": [
      "Oxamniquina",
      "50mg/mL",
      "sus or",
      "frasco"
    ],
    "Oxcarbazepina 300mg": [
      "Oxcarbazepina",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Oxcarbazepina 600mg": [
      "Oxcarbazepina",
      "600mg",
      "com rev",
      "comprimido"
    ],
    "Oxcarbazepina 60mg/mL": [
      "Oxcarbazepina",
      "60mg/mL",
      "sus or",
      "frasco"
    ],
    "Oxibutinina (Cloridrato) 1mg/mL": [
      "Oxibutinina (Cloridrato)",
      "1mg/mL",
      "xpe",
      "frasco"
    ],
    "Oxibutinina (Cloridrato) 5,0mg": [
      "Oxibutinina (Cloridrato)",
      "5,0mg",
      "com",
      "comprimido"
    ],
    "Oxibutinina (Cloridrato) 5mg": [
      "Oxibutinina (Cloridrato)",
      "5mg",
      "com rev lib control",
      "comprimido"
    ],
    "Oxibutinina (Cloridrato) 10mg": [
      "Oxibutinina (Cloridrato)",
      "10mg",
      "com rev lib control",
      "comprimido"
    ],
    "Oxiconazol (Nitrato) 10mg/g": [
      "Oxiconazol (Nitrato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Oxiconazol (Nitrato) 10mg/g": [
      "Oxiconazol (Nitrato)",
      "10mg/g",
      "sol top",
      "frasco"
    ],
    "Oximetazolina (Cloridrato) 0,25mg/mL": [
      "Oximetazolina (Cloridrato)",
      "0,25mg/mL",
      "sol got nas",
      "frasco"
    ],
    "Oximetazolina (Cloridrato) 0,50mg/mL": [
      "Oximetazolina (Cloridrato)",
      "0,50mg/mL",
      "sol spr nas",
      "frasco"
    ],
    "Paclitaxel 6mg/mL": [
      "Paclitaxel",
      "6mg/mL",
      "sol inj",
      "frasco"
    ],
    "Paclitaxel (Ligado À Albumina) 100mg": [
      "Paclitaxel (Ligado À Albumina)",
      "100mg",
      "po liof sus inj",
      "unidade"
    ],
    "Palbociclibe 75mg": [
      "Palbociclibe",
      "75mg",
      "cap dura",
      "cápsula"
    ],
    "Palbociclibe 100mg": [
      "Palbociclibe",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Palbociclibe 125mg": [
      "Palbociclibe",
      "125mg",
      "cap dura",
      "cápsula"
    ],
    "Paliperidona 3mg": [
      "Paliperidona",
      "3mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Paliperidona 6mg": [
      "Paliperidona",
      "6mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Paliperidona 9mg": [
      "Paliperidona",
      "9mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Palmitato de Paliperidona 100mg/mL": [
      "Palmitato de Paliperidona",
      "100mg/mL",
      "sus inj",
      "frasco"
    ],
    "Palmitato de Paliperidona 200mg/mL": [
      "Palmitato de Paliperidona",
      "200mg/mL",
      "sus inj",
      "frasco"
    ],
    "Pamidronato Dissódico 60mg/10mL": [
      "Pamidronato Dissódico",
      "60mg/10mL",
      "po liof sol inj",
      "unidade"
    ],
    "Pamidronato Dissódico 90mg/10mL": [
      "Pamidronato Dissódico",
      "90mg/10mL",
      "po liof sol inj",
      "unidade"
    ],
    "Pamidronato Dissódico 9mg/mL": [
      "Pamidronato Dissódico",
      "9mg/mL",
      "sol inj",
      "frasco"
    ],
    "Pantoprazol Magnésico 40mg": [
      "Pantoprazol Magnésico",
      "40mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Pantoprazol Sódico 4mg/10mL": [
      "Pantoprazol Sódico",
      "4mg/10mL",
      "po liof sol inj",
      "unidade"
    ],
    "Pantoprazol Sódico 20mg": [
      "Pantoprazol Sódico",
      "20mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Pantoprazol Sódico 40mg": [
      "Pantoprazol Sódico",
      "40mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Paracetamol 500mg": [
      "Paracetamol",
      "500mg",
      "com efer",
      "comprimido"
    ],
    "Paracetamol 140mg/mL": [
      "Paracetamol",
      "140mg/mL",
      "sus or",
      "frasco"
    ],
    "Paracetamol 160mg": [
      "Paracetamol",
      "160mg",
      "com mast",
      "comprimido"
    ],
    "Paracetamol 500mg": [
      "Paracetamol",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol 750mg": [
      "Paracetamol",
      "750mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol 650mg": [
      "Paracetamol",
      "650mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol 100mg/mL": [
      "Paracetamol",
      "100mg/mL",
      "sus or",
      "frasco"
    ],
    "Paracetamol 32mg/mL": [
      "Paracetamol",
      "32mg/mL",
      "sus or",
      "frasco"
    ],
    "Paracetamol 500mg": [
      "Paracetamol",
      "500mg",
      "com rev gelat",
      "comprimido"
    ],
    "Paracetamol 200mg/mL": [
      "Paracetamol",
      "200mg/mL",
      "sol oral",
      "frasco"
    ],
    "Paracetamol 500mg": [
      "Paracetamol",
      "500mg",
      "po prep extemp",
      "unidade"
    ],
    "Paracetamol 10mg/mL": [
      "Paracetamol",
      "10mg/mL",
      "sol infus IV",
      "frasco"
    ],
    "Parecoxibe Sódico 40mg/2mL": [
      "Parecoxibe Sódico",
      "40mg/2mL",
      "po liof sol inj",
      "unidade"
    ],
    "Paricalcitol 5mcg/mL": [
      "Paricalcitol",
      "5mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Paroxetina (Cloridrato) 20mg": [
      "Paroxetina (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 12,5mg": [
      "Paroxetina (Cloridrato)",
      "12,5mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 25mg": [
      "Paroxetina (Cloridrato)",
      "25mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 10mg": [
      "Paroxetina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 30mg": [
      "Paroxetina (Cloridrato)",
      "30mg",
      "com rev",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 15mg": [
      "Paroxetina (Cloridrato)",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 25mg": [
      "Paroxetina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Paroxetina (Cloridrato) 40mg": [
      "Paroxetina (Cloridrato)",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Pazopanibe (Cloridrato) 200mg": [
      "Pazopanibe (Cloridrato)",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Pazopanibe (Cloridrato) 400mg": [
      "Pazopanibe (Cloridrato)",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Pemetrexede Dissódico Heptaidratado 100mg": [
      "Pemetrexede Dissódico Heptaidratado",
      "100mg",
      "po liof sol inj",
      "unidade"
    ],
    "Pemetrexede Dissódico Heptaidratado 500mg": [
      "Pemetrexede Dissódico Heptaidratado",
      "500mg",
      "po liof sol inj",
      "unidade"
    ],
    "Pentoxifilina 400mg": [
      "Pentoxifilina",
      "400mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Perampanel 2mg": [
      "Perampanel",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Perampanel 4mg": [
      "Perampanel",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Perampanel 6mg": [
      "Perampanel",
      "6mg",
      "com rev",
      "comprimido"
    ],
    "Perampanel 8mg": [
      "Perampanel",
      "8mg",
      "com rev",
      "comprimido"
    ],
    "Perampanel 10mg": [
      "Perampanel",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Perampanel 12mg": [
      "Perampanel",
      "12mg",
      "com rev",
      "comprimido"
    ],
    "Periciazina 10mg/mL": [
      "Periciazina",
      "10mg/mL",
      "sol oral",
      "frasco"
    ],
    "Periciazina 40mg/mL": [
      "Periciazina",
      "40mg/mL",
      "sol oral",
      "frasco"
    ],
    "Periciazina 10mg": [
      "Periciazina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Perindopril Erbumina 4mg": [
      "Perindopril Erbumina",
      "4mg",
      "com",
      "comprimido"
    ],
    "Perindopril Erbumina 8mg": [
      "Perindopril Erbumina",
      "8mg",
      "com",
      "comprimido"
    ],
    "Perindorpil Arginina 5mg": [
      "Perindorpil Arginina",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Perindorpil Arginina 10mg": [
      "Perindorpil Arginina",
      "10mg",
      "com ver",
      "comprimido"
    ],
    "Permetrina 10mg/g": [
      "Permetrina",
      "10mg/g",
      "loç",
      "frasco"
    ],
    "Permetrina 10mg/g": [
      "Permetrina",
      "10mg/g",
      "sab",
      "unidade"
    ],
    "Permetrina 10mg/mL": [
      "Permetrina",
      "10mg/mL",
      "xamp",
      "frasco"
    ],
    "Permetrina 50mg/mL": [
      "Permetrina",
      "50mg/mL",
      "loç cremosa",
      "frasco"
    ],
    "Petidina (Cloridrato) 50mg/mL": [
      "Petidina (Cloridrato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Picossulfato Sódico Monoidratado 7,5mg": [
      "Picossulfato Sódico Monoidratado",
      "7,5mg",
      "sol oral",
      "frasco"
    ],
    "Pilocarpina (Cloridrato) 10mg/mL": [
      "Pilocarpina (Cloridrato)",
      "10mg/mL",
      "sol oft",
      "frasco"
    ],
    "Pilocarpina (Cloridrato) 20mg/mL": [
      "Pilocarpina (Cloridrato)",
      "20mg/mL",
      "sol oft",
      "frasco"
    ],
    "Pilocarpina (Cloridrato) 40mg/mL": [
      "Pilocarpina (Cloridrato)",
      "40mg/mL",
      "sol oft",
      "frasco"
    ],
    "Pimecrolimo 10mg/g": [
      "Pimecrolimo",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Pinavério (Brometo) 50mg": [
      "Pinavério (Brometo)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Pinavério (Brometo) 100 mg": [
      "Pinavério (Brometo)",
      "100 mg",
      "com rev",
      "comprimido"
    ],
    "Pioglitazona (Cloridrato) 15mg": [
      "Pioglitazona (Cloridrato)",
      "15mg",
      "com",
      "comprimido"
    ],
    "Pioglitazona (Cloridrato) 30mg": [
      "Pioglitazona (Cloridrato)",
      "30mg",
      "com",
      "comprimido"
    ],
    "Pioglitazona (Cloridrato) 45mg": [
      "Pioglitazona (Cloridrato)",
      "45mg",
      "com",
      "comprimido"
    ],
    "Piracetam 200mg/mL": [
      "Piracetam",
      "200mg/mL",
      "sol inj",
      "frasco"
    ],
    "Piracetam 800mg": [
      "Piracetam",
      "800mg",
      "com rev",
      "comprimido"
    ],
    "Pirenoxina Sódica 0,85mg": [
      "Pirenoxina Sódica",
      "0,85mg",
      "com oft",
      "comprimido"
    ],
    "Pirfenidona 267mg": [
      "Pirfenidona",
      "267mg",
      "cap dura",
      "cápsula"
    ],
    "Piroxicam 20mg": [
      "Piroxicam",
      "20mg",
      "cap dura",
      "cápsula"
    ],
    "Piroxicam 20mg": [
      "Piroxicam",
      "20mg",
      "com sol",
      "comprimido"
    ],
    "Piroxicam 20mg": [
      "Piroxicam",
      "20mg",
      "com dissol inst",
      "comprimido"
    ],
    "Pitavastatina 2mg": [
      "Pitavastatina",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Pitavastatina 4mg": [
      "Pitavastatina",
      "4mg",
      "com rev",
      "comprimido"
    ],
    "Plerixafor 20mg/mL": [
      "Plerixafor",
      "20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ácido Poliacrílico 2mg/g": [
      "Ácido Poliacrílico",
      "2mg/g",
      "gel oft",
      "frasco"
    ],
    "Policresuleno 18mg/g": [
      "Policresuleno",
      "18mg/g",
      "gel",
      "frasco"
    ],
    "Policresuleno 360mg/mL": [
      "Policresuleno",
      "360mg/mL",
      "sol ginecológica",
      "frasco"
    ],
    "Poliestirenossulfonato de Cálcio 900mg/g": [
      "Poliestirenossulfonato de Cálcio",
      "900mg/g",
      "po sus",
      "unidade"
    ],
    "Polimixina B (Sulfato) 500.000UI": [
      "Polimixina B (Sulfato)",
      "500.000UI",
      "po liof",
      "unidade"
    ],
    "Polimixina B (Sulfato) 1.000.000UI": [
      "Polimixina B (Sulfato)",
      "1.000.000UI",
      "po liof",
      "unidade"
    ],
    "Polimixina B (Sulfato) 1.500.000UI": [
      "Polimixina B (Sulfato)",
      "1.500.000UI",
      "po liof",
      "unidade"
    ],
    "Pramipexol (Dicloridrato) 0,125mg": [
      "Pramipexol (Dicloridrato)",
      "0,125mg",
      "com",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 0,25mg": [
      "Pramipexol (Dicloridrato)",
      "0,25mg",
      "com",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 1mg": [
      "Pramipexol (Dicloridrato)",
      "1mg",
      "com",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 0,375mg": [
      "Pramipexol (Dicloridrato)",
      "0,375mg",
      "com  lib prol",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 0,75mg": [
      "Pramipexol (Dicloridrato)",
      "0,75mg",
      "com  lib prol",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 1,5mg": [
      "Pramipexol (Dicloridrato)",
      "1,5mg",
      "com  lib prol",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 3mg": [
      "Pramipexol (Dicloridrato)",
      "3mg",
      "com  lib prol",
      "comprimido"
    ],
    "Pramipexol (Dicloridrato) 4,5mg": [
      "Pramipexol (Dicloridrato)",
      "4,5mg",
      "com  lib prol",
      "comprimido"
    ],
    "Prasugrel (Cloridrato) 5mg": [
      "Prasugrel (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Prasugrel (Cloridrato) 10mg": [
      "Prasugrel (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Pravastatina Sódica 10mg": [
      "Pravastatina Sódica",
      "10mg",
      "com",
      "comprimido"
    ],
    "Pravastatina Sódica 20mg": [
      "Pravastatina Sódica",
      "20mg",
      "com",
      "comprimido"
    ],
    "Pravastatina Sódica 40mg": [
      "Pravastatina Sódica",
      "40mg",
      "com",
      "comprimido"
    ],
    "Prazosina (Cloridrato) 1mg": [
      "Prazosina (Cloridrato)",
      "1mg",
      "cap dura lib lenta",
      "cápsula"
    ],
    "Prazosina (Cloridrato) 2mg": [
      "Prazosina (Cloridrato)",
      "2mg",
      "cap dura lib lenta",
      "cápsula"
    ],
    "Prazosina (Cloridrato) 4mg": [
      "Prazosina (Cloridrato)",
      "4mg",
      "cap dura lib lenta",
      "cápsula"
    ],
    "Prednisolona 5mg": [
      "Prednisolona",
      "5mg",
      "com",
      "comprimido"
    ],
    "Prednisolona 20mg": [
      "Prednisolona",
      "20mg",
      "com",
      "comprimido"
    ],
    "Prednisolona 3mg/mL": [
      "Prednisolona",
      "3mg/mL",
      "sol oral",
      "frasco"
    ],
    "Prednisolona 11mg/mL": [
      "Prednisolona",
      "11mg/mL",
      "sol oral",
      "frasco"
    ],
    "Prednisolona 40mg": [
      "Prednisolona",
      "40mg",
      "com",
      "comprimido"
    ],
    "Prednisolona (Acetato) 10mg/mL": [
      "Prednisolona (Acetato)",
      "10mg/mL",
      "sus oft",
      "frasco"
    ],
    "Prednisolona (Acetato) 1,2mg/mL": [
      "Prednisolona (Acetato)",
      "1,2mg/mL",
      "sus oft",
      "frasco"
    ],
    "Prednisolona (Fosfato Sódico) 1mg/mL": [
      "Prednisolona (Fosfato Sódico)",
      "1mg/mL",
      "sol oral",
      "frasco"
    ],
    "Prednisona 5mg": [
      "Prednisona",
      "5mg",
      "com",
      "comprimido"
    ],
    "Prednisona 20mg": [
      "Prednisona",
      "20mg",
      "com",
      "comprimido"
    ],
    "Pregabalina 25mg": [
      "Pregabalina",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 75mg": [
      "Pregabalina",
      "75mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 150mg": [
      "Pregabalina",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 50mg": [
      "Pregabalina",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 100mg": [
      "Pregabalina",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 35mg": [
      "Pregabalina",
      "35mg",
      "cap dura",
      "cápsula"
    ],
    "Pregabalina 75mg": [
      "Pregabalina",
      "75mg",
      "com",
      "comprimido"
    ],
    "Pregabalina 150mg": [
      "Pregabalina",
      "150mg",
      "com",
      "comprimido"
    ],
    "Progesterona 100mg": [
      "Progesterona",
      "100mg",
      "cap mole",
      "cápsula"
    ],
    "Progesterona 200mg": [
      "Progesterona",
      "200mg",
      "cap mole",
      "cápsula"
    ],
    "Progesterona 80mg/g": [
      "Progesterona",
      "80mg/g",
      "gel vag",
      "frasco"
    ],
    "Promestrieno 10mg": [
      "Promestrieno",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Promestrieno 10mg/g": [
      "Promestrieno",
      "10mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Prometazina 0,02g/g": [
      "Prometazina",
      "0,02g/g",
      "crem derm",
      "bisnaga"
    ],
    "Prometazina (Cloridrato) 25mg": [
      "Prometazina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Prometazina (Cloridrato) 25mg/mL": [
      "Prometazina (Cloridrato)",
      "25mg/mL",
      "sol inj",
      "frasco"
    ],
    "Propafenona (Cloridrato) 300mg": [
      "Propafenona (Cloridrato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Propafenona (Cloridrato) 150mg": [
      "Propafenona (Cloridrato)",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Propatilnitrato 10mg": [
      "Propatilnitrato",
      "10mg",
      "com",
      "comprimido"
    ],
    "Propiltiouracila 100mg": [
      "Propiltiouracila",
      "100mg",
      "com",
      "comprimido"
    ],
    "Propofol 10mg/mL": [
      "Propofol",
      "10mg/mL",
      "emul  inj",
      "frasco"
    ],
    "Propofol 20mg/mL": [
      "Propofol",
      "20mg/mL",
      "emul  inj",
      "frasco"
    ],
    "Propranolol (Cloridrato) 40mg": [
      "Propranolol (Cloridrato)",
      "40mg",
      "com",
      "comprimido"
    ],
    "Propranolol (Cloridrato) 80mg": [
      "Propranolol (Cloridrato)",
      "80mg",
      "com",
      "comprimido"
    ],
    "Proprionato de Halobetasol 0,5mg/g": [
      "Proprionato de Halobetasol",
      "0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Prucaloprida 1mg": [
      "Prucaloprida",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Prucaloprida 2mg": [
      "Prucaloprida",
      "2mg",
      "com rev",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 25mg": [
      "Quetiapina (Hemifumarato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 100mg": [
      "Quetiapina (Hemifumarato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 200mg": [
      "Quetiapina (Hemifumarato)",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 300mg": [
      "Quetiapina (Hemifumarato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 50mg": [
      "Quetiapina (Hemifumarato)",
      "50mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 200mg": [
      "Quetiapina (Hemifumarato)",
      "200mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 300mg": [
      "Quetiapina (Hemifumarato)",
      "300mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Quetiapina (Hemifumarato) 400mg": [
      "Quetiapina (Hemifumarato)",
      "400mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Rabeprazol Sódico 10mg": [
      "Rabeprazol Sódico",
      "10mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Rabeprazol Sódico 20mg": [
      "Rabeprazol Sódico",
      "20mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Racecadotrila 100mg": [
      "Racecadotrila",
      "100mg",
      "cap",
      "cápsula"
    ],
    "Racecadotrila 10mg": [
      "Racecadotrila",
      "10mg",
      "po sol or",
      "unidade"
    ],
    "Racecadotrila 30mg": [
      "Racecadotrila",
      "30mg",
      "po sol or",
      "unidade"
    ],
    "Raloxifeno (Cloridrato) 60mg": [
      "Raloxifeno (Cloridrato)",
      "60mg",
      "com rev",
      "comprimido"
    ],
    "Raltegravir Potássico 400mg": [
      "Raltegravir Potássico",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Ramelteona 8mg": [
      "Ramelteona",
      "8mg",
      "com rev",
      "comprimido"
    ],
    "Ramipril 2,5mg": [
      "Ramipril",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Ramipril 5mg": [
      "Ramipril",
      "5mg",
      "com",
      "comprimido"
    ],
    "Ramipril 10mg": [
      "Ramipril",
      "10mg",
      "com",
      "comprimido"
    ],
    "Ranelato de Estrôncio 2g/30mL": [
      "Ranelato de Estrôncio",
      "2g/30mL",
      "pó gran sus or",
      "unidade"
    ],
    "Ranitidina (Cloridrato) 40mg/mL": [
      "Ranitidina (Cloridrato)",
      "40mg/mL",
      "sol oral",
      "frasco"
    ],
    "Ranolazina 500mg": [
      "Ranolazina",
      "500mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Ranolazina 1.000mg": [
      "Ranolazina",
      "1.000mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Regorafenibe 40mg": [
      "Regorafenibe",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Remifentanila (Cloridrato) 1,0mg": [
      "Remifentanila (Cloridrato)",
      "1,0mg",
      "po liof sol inj",
      "unidade"
    ],
    "Remifentanila (Cloridrato) 2,0mg": [
      "Remifentanila (Cloridrato)",
      "2,0mg",
      "po liof sol inj",
      "unidade"
    ],
    "Remifentanila (Cloridrato) 5,0mg": [
      "Remifentanila (Cloridrato)",
      "5,0mg",
      "po liof sol inj",
      "unidade"
    ],
    "Repaglinida 0,5mg": [
      "Repaglinida",
      "0,5mg",
      "com",
      "comprimido"
    ],
    "Repaglinida 1mg": [
      "Repaglinida",
      "1mg",
      "com",
      "comprimido"
    ],
    "Repaglinida 2mg": [
      "Repaglinida",
      "2mg",
      "com",
      "comprimido"
    ],
    "Rifamicina Sv Sódica 10mg/mL": [
      "Rifamicina Sv Sódica",
      "10mg/mL",
      "sol top (spr)",
      "frasco"
    ],
    "Rifampicina 20mg/mL": [
      "Rifampicina",
      "20mg/mL",
      "sus or",
      "frasco"
    ],
    "Rifampicina 300mg": [
      "Rifampicina",
      "300mg",
      "cap dura",
      "cápsula"
    ],
    "Rifaximina 550mg": [
      "Rifaximina",
      "550mg",
      "com rev",
      "comprimido"
    ],
    "Risedronato Sódico 150mg": [
      "Risedronato Sódico",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Risedronato Sódico 35mg": [
      "Risedronato Sódico",
      "35mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Risperidona 1mg/mL": [
      "Risperidona",
      "1mg/mL",
      "sol oral",
      "frasco"
    ],
    "Risperidona 0,25mg": [
      "Risperidona",
      "0,25mg",
      "com rev",
      "comprimido"
    ],
    "Risperidona 0,50mg": [
      "Risperidona",
      "0,50mg",
      "com rev",
      "comprimido"
    ],
    "Risperidona 1,0mg": [
      "Risperidona",
      "1,0mg",
      "com rev",
      "comprimido"
    ],
    "Risperidona 2,0mg": [
      "Risperidona",
      "2,0mg",
      "com rev",
      "comprimido"
    ],
    "Risperidona 3,0mg": [
      "Risperidona",
      "3,0mg",
      "com rev",
      "comprimido"
    ],
    "Ritonavir 80mg/mL": [
      "Ritonavir",
      "80mg/mL",
      "sol oral",
      "frasco"
    ],
    "Ritonavir 100mg": [
      "Ritonavir",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Rivaroxabana 2,5mg": [
      "Rivaroxabana",
      "2,5mg",
      "com ver",
      "comprimido"
    ],
    "Rivaroxabana 10mg": [
      "Rivaroxabana",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Rivaroxabana 15mg": [
      "Rivaroxabana",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Rivaroxabana 20mg": [
      "Rivaroxabana",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Rivastigmina 9,0mg": [
      "Rivastigmina",
      "9,0mg",
      "ades",
      "adesivo"
    ],
    "Rivastigmina 18mg": [
      "Rivastigmina",
      "18mg",
      "ades",
      "adesivo"
    ],
    "Rivastigmina 27mg": [
      "Rivastigmina",
      "27mg",
      "ades",
      "adesivo"
    ],
    "Rivastigmina (Hemitartarato) 2mg/mL": [
      "Rivastigmina (Hemitartarato)",
      "2mg/mL",
      "sol oral",
      "frasco"
    ],
    "Rivastigmina (Hemitartarato) 1,5mg": [
      "Rivastigmina (Hemitartarato)",
      "1,5mg",
      "cap dura",
      "cápsula"
    ],
    "Rivastigmina (Hemitartarato) 3,0mg": [
      "Rivastigmina (Hemitartarato)",
      "3,0mg",
      "cap dura",
      "cápsula"
    ],
    "Rivastigmina (Hemitartarato) 4,5mg": [
      "Rivastigmina (Hemitartarato)",
      "4,5mg",
      "cap dura",
      "cápsula"
    ],
    "Rivastigmina (Hemitartarato) 6,0mg": [
      "Rivastigmina (Hemitartarato)",
      "6,0mg",
      "cap dura",
      "cápsula"
    ],
    "Rizatriptano (Benzoato) 10mg": [
      "Rizatriptano (Benzoato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Rocurônio (Brometo) 10mg/mL": [
      "Rocurônio (Brometo)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Roflumilaste 500mcg": [
      "Roflumilaste",
      "500mcg",
      "com rev",
      "comprimido"
    ],
    "Ropivacaína (Cloridrato) 2,0mg/mL": [
      "Ropivacaína (Cloridrato)",
      "2,0mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ropivacaína (Cloridrato) 7,5mg/mL": [
      "Ropivacaína (Cloridrato)",
      "7,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Ropivacaína (Cloridrato) 10mg/mL": [
      "Ropivacaína (Cloridrato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Rosuvastatina Cálcica 5,0mg": [
      "Rosuvastatina Cálcica",
      "5,0mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica 10,0mg": [
      "Rosuvastatina Cálcica",
      "10,0mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica 20mg": [
      "Rosuvastatina Cálcica",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica 40mg": [
      "Rosuvastatina Cálcica",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Rotigotina 4,5mg": [
      "Rotigotina",
      "4,5mg",
      "ades transd",
      "adesivo"
    ],
    "Rotigotina 9mg": [
      "Rotigotina",
      "9mg",
      "ades transd",
      "adesivo"
    ],
    "Rotigotina 13,5mg": [
      "Rotigotina",
      "13,5mg",
      "ades transd",
      "adesivo"
    ],
    "Rotigotina 18mg": [
      "Rotigotina",
      "18mg",
      "ades transd",
      "adesivo"
    ],
    "Rupatadina (Fumarato) 10mg": [
      "Rupatadina (Fumarato)",
      "10mg",
      "com",
      "comprimido"
    ],
    "Ruxolitinibe (Fosfato) 5mg": [
      "Ruxolitinibe (Fosfato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Ruxolitinibe (Fosfato) 15mg": [
      "Ruxolitinibe (Fosfato)",
      "15mg",
      "com",
      "comprimido"
    ],
    "Ruxolitinibe (Fosfato) 20mg": [
      "Ruxolitinibe (Fosfato)",
      "20mg",
      "com",
      "comprimido"
    ],
    "Sacubitril Valsartana Sódica Hidratada 50mg": [
      "Sacubitril Valsartana Sódica Hidratada",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Sacubitril Valsartana Sódica Hidratada 100mg": [
      "Sacubitril Valsartana Sódica Hidratada",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Sacubitril Valsartana Sódica Hidratada 200mg": [
      "Sacubitril Valsartana Sódica Hidratada",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Safinamida (Mesilato) 50mg": [
      "Safinamida (Mesilato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Safinamida (Mesilato) 100mg": [
      "Safinamida (Mesilato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Salbutamol (Sulfato) 1mg/mL": [
      "Salbutamol (Sulfato)",
      "1mg/mL",
      "sol p/ neb",
      "frasco"
    ],
    "Salbutamol (Sulfato) 5mg/mL": [
      "Salbutamol (Sulfato)",
      "5mg/mL",
      "sol p/ neb",
      "frasco"
    ],
    "Salbutamol (Sulfato) 120,5mcg/dose": [
      "Salbutamol (Sulfato)",
      "120,5mcg/dose",
      "sus era inal or + inal",
      "frasco"
    ],
    "Salbutamol (Sulfato) 0,48mg/mL": [
      "Salbutamol (Sulfato)",
      "0,48mg/mL",
      "xpe",
      "frasco"
    ],
    "Salbutamol (Sulfato) 0,5mg/mL": [
      "Salbutamol (Sulfato)",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Salbutamol (Sulfato) 2,4mg": [
      "Salbutamol (Sulfato)",
      "2,4mg",
      "com",
      "comprimido"
    ],
    "Salbutamol (Sulfato) 4,8mg": [
      "Salbutamol (Sulfato)",
      "4,8mg",
      "com",
      "comprimido"
    ],
    "Salbutamol (Sulfato) 6,0mg/mL": [
      "Salbutamol (Sulfato)",
      "6,0mg/mL",
      "sol inal got",
      "frasco"
    ],
    "Saquinavir 200mg": [
      "Saquinavir",
      "200mg",
      "cap mole",
      "cápsula"
    ],
    "Saxagliptina (Cloridrato) 5mg": [
      "Saxagliptina (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Saxagliptina (Cloridrato) 2,5mg": [
      "Saxagliptina (Cloridrato)",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Secnidazol 500mg": [
      "Secnidazol",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Secnidazol 1000mg": [
      "Secnidazol",
      "1000mg",
      "com rev",
      "comprimido"
    ],
    "Selumetinibe (Sulfato) 10mg": [
      "Selumetinibe (Sulfato)",
      "10mg",
      "cap dura",
      "cápsula"
    ],
    "Selumetinibe (Sulfato) 25mg": [
      "Selumetinibe (Sulfato)",
      "25mg",
      "cap dura",
      "cápsula"
    ],
    "Sertralina (Cloridrato) 25mg": [
      "Sertralina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Sertralina (Cloridrato) 75mg": [
      "Sertralina (Cloridrato)",
      "75mg",
      "com rev",
      "comprimido"
    ],
    "Sertralina (Cloridrato) 50mg": [
      "Sertralina (Cloridrato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Sertralina (Cloridrato) 100mg": [
      "Sertralina (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Sevelamer (Cloridrato) 800mg": [
      "Sevelamer (Cloridrato)",
      "800mg",
      "com rev",
      "comprimido"
    ],
    "Sevoflurano 1mL/mL": [
      "Sevoflurano",
      "1mL/mL",
      "sol inal",
      "frasco"
    ],
    "Sildenafil (Citrato) 20mg": [
      "Sildenafil (Citrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Sildenafil (Citrato) 25mg": [
      "Sildenafil (Citrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Sildenafil (Citrato) 50mg": [
      "Sildenafil (Citrato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Sildenafil (Citrato) 100mg": [
      "Sildenafil (Citrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Simeprevir Sódico 150mg": [
      "Simeprevir Sódico",
      "150mg",
      "cap gel dura",
      "cápsula"
    ],
    "Simeticona 40mg": [
      "Simeticona",
      "40mg",
      "com",
      "comprimido"
    ],
    "Simeticona 75mg/mL": [
      "Simeticona",
      "75mg/mL",
      "emul got",
      "frasco"
    ],
    "Simeticona 150mg/mL": [
      "Simeticona",
      "150mg/mL",
      "emul got",
      "frasco"
    ],
    "Simeticona 80mg": [
      "Simeticona",
      "80mg",
      "com",
      "comprimido"
    ],
    "Simeticona 150mg": [
      "Simeticona",
      "150mg",
      "com",
      "comprimido"
    ],
    "Sinvastatina 10mg": [
      "Sinvastatina",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Sinvastatina 20mg": [
      "Sinvastatina",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Sinvastatina 40mg": [
      "Sinvastatina",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Sirolimo 1mg": [
      "Sirolimo",
      "1mg",
      "drag",
      "drágea"
    ],
    "Sirolimo 2mg": [
      "Sirolimo",
      "2mg",
      "drag",
      "drágea"
    ],
    "Sitagliptina (Fosfato) 25mg": [
      "Sitagliptina (Fosfato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Sitagliptina (Fosfato) 50mg": [
      "Sitagliptina (Fosfato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Sitagliptina (Fosfato) 100mg": [
      "Sitagliptina (Fosfato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Sofosbuvir 400mg": [
      "Sofosbuvir",
      "400mg",
      "com rev",
      "comprimido"
    ],
    "Solifenacina (Succinato) 5mg": [
      "Solifenacina (Succinato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Solifenacina (Succinato) 10mg": [
      "Solifenacina (Succinato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Somatostatina 3mg/1mL": [
      "Somatostatina",
      "3mg/1mL",
      "po liof sol inj",
      "unidade"
    ],
    "Sorafenibe (Tosilato) 200mg": [
      "Sorafenibe (Tosilato)",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Sotalol (Cloridrato) 120mg": [
      "Sotalol (Cloridrato)",
      "120mg",
      "com",
      "comprimido"
    ],
    "Sotalol (Cloridrato) 160mg": [
      "Sotalol (Cloridrato)",
      "160mg",
      "com",
      "comprimido"
    ],
    "Succinato de Sumatriptana 25mg": [
      "Succinato de Sumatriptana",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Succinato Sódico de Metilprednisolona 500mg/8mL": [
      "Succinato Sódico de Metilprednisolona",
      "500mg/8mL",
      "po sol inj",
      "unidade"
    ],
    "Succinato Sódico de Metilprednisolona 125mg/2mL": [
      "Succinato Sódico de Metilprednisolona",
      "125mg/2mL",
      "po sol inj",
      "unidade"
    ],
    "Sufentanila (Citrato) 5mcg/mL": [
      "Sufentanila (Citrato)",
      "5mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Sufentanila (Citrato) 50mcg/mL": [
      "Sufentanila (Citrato)",
      "50mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Sugamadex Sódico 100mg/mL": [
      "Sugamadex Sódico",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Sulfadiazina de Prata 10mg/g": [
      "Sulfadiazina de Prata",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Sulpirida 200mg": [
      "Sulpirida",
      "200mg",
      "com",
      "comprimido"
    ],
    "Sulpirida 50mg": [
      "Sulpirida",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Sumatripano (Succinato) 50mg": [
      "Sumatripano (Succinato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Sumatripano (Succinato) 100mg": [
      "Sumatripano (Succinato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Sumatripano (Succinato) 6mg/mL": [
      "Sumatripano (Succinato)",
      "6mg/mL",
      "sol inj",
      "frasco"
    ],
    "Suxametônio (Cloreto) 100mg": [
      "Suxametônio (Cloreto)",
      "100mg",
      "po liof  inj",
      "unidade"
    ],
    "Suxametônio (Cloreto) 500mg": [
      "Suxametônio (Cloreto)",
      "500mg",
      "po liof  inj",
      "unidade"
    ],
    "Tacrolimo 0,3mg/g": [
      "Tacrolimo",
      "0,3mg/g",
      "pom",
      "bisnaga"
    ],
    "Tacrolimo 1mg/g": [
      "Tacrolimo",
      "1mg/g",
      "pom",
      "bisnaga"
    ],
    "Tacrolimo 1mg": [
      "Tacrolimo",
      "1mg",
      "cap dura",
      "cápsula"
    ],
    "Tacrolimo 5mg": [
      "Tacrolimo",
      "5mg",
      "cap dura",
      "cápsula"
    ],
    "Tacrolimo 5mg/mL": [
      "Tacrolimo",
      "5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Tadalafila 5mg": [
      "Tadalafila",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Tadalafila 20mg": [
      "Tadalafila",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Tafamidis Meglumina 20mg": [
      "Tafamidis Meglumina",
      "20mg",
      "cap mole",
      "cápsula"
    ],
    "Tafenoquina (Succinato) 150mg": [
      "Tafenoquina (Succinato)",
      "150mg",
      "com rev",
      "comprimido"
    ],
    "Tafluprosta 15mcg/mL": [
      "Tafluprosta",
      "15mcg/mL",
      "sol oft",
      "frasco"
    ],
    "Tamoxifeno (Citrato) 10mg": [
      "Tamoxifeno (Citrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Tamoxifeno (Citrato) 20mg": [
      "Tamoxifeno (Citrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Tansulosina (Cloridrato) 0,40mg": [
      "Tansulosina (Cloridrato)",
      "0,40mg",
      "cap",
      "cápsula"
    ],
    "Tansulosina (Cloridrato) 0,4mg": [
      "Tansulosina (Cloridrato)",
      "0,4mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 25mg": [
      "Tapentadol (Cloridrato)",
      "25mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 50mg": [
      "Tapentadol (Cloridrato)",
      "50mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 100mg": [
      "Tapentadol (Cloridrato)",
      "100mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 150mg": [
      "Tapentadol (Cloridrato)",
      "150mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 200mg": [
      "Tapentadol (Cloridrato)",
      "200mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tapentadol (Cloridrato) 250mg": [
      "Tapentadol (Cloridrato)",
      "250mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Tartarato de Vareniclina 0,5mg": [
      "Tartarato de Vareniclina",
      "0,5mg",
      "com rev",
      "comprimido"
    ],
    "Tartarato de Vareniclina 1mg": [
      "Tartarato de Vareniclina",
      "1mg",
      "com rev",
      "comprimido"
    ],
    "Tegaserode (Maleato) 6mg": [
      "Tegaserode (Maleato)",
      "6mg",
      "com",
      "comprimido"
    ],
    "Teicoplanina 200mg/3mL": [
      "Teicoplanina",
      "200mg/3mL",
      "po liof sol inj",
      "unidade"
    ],
    "Teicoplanina 400mg/3mL": [
      "Teicoplanina",
      "400mg/3mL",
      "po liof sol inj",
      "unidade"
    ],
    "Telmisartana 40mg/8mL": [
      "Telmisartana",
      "40mg/8mL",
      "po liof sol inj",
      "unidade"
    ],
    "Telmisartana 40mg": [
      "Telmisartana",
      "40mg",
      "com",
      "comprimido"
    ],
    "Telmisartana 80mg": [
      "Telmisartana",
      "80mg",
      "com",
      "comprimido"
    ],
    "Temozolomida 5mg": [
      "Temozolomida",
      "5mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 20mg": [
      "Temozolomida",
      "20mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 100mg": [
      "Temozolomida",
      "100mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 140mg": [
      "Temozolomida",
      "140mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 180mg": [
      "Temozolomida",
      "180mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 250mg": [
      "Temozolomida",
      "250mg",
      "cap dura",
      "cápsula"
    ],
    "Temozolomida 100mg": [
      "Temozolomida",
      "100mg",
      "po liof sol inj",
      "unidade"
    ],
    "Tenofovir Alafenamida (Hemifumarato) 25mg": [
      "Tenofovir Alafenamida (Hemifumarato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Tenofovir Desoproxila (Fumarato) 300mg": [
      "Tenofovir Desoproxila (Fumarato)",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Tenoxicam 20mg": [
      "Tenoxicam",
      "20mg",
      "pó liófilo sol inj",
      "unidade"
    ],
    "Tenoxicam 40mg": [
      "Tenoxicam",
      "40mg",
      "pó liófilo sol inj",
      "unidade"
    ],
    "Tenoxicam 20mg": [
      "Tenoxicam",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Teofilina 100mg": [
      "Teofilina",
      "100mg",
      "cap microgran",
      "cápsula"
    ],
    "Teofilina 200mg": [
      "Teofilina",
      "200mg",
      "cap microgran",
      "cápsula"
    ],
    "Teofilina 300mg": [
      "Teofilina",
      "300mg",
      "cap microgran",
      "cápsula"
    ],
    "Terazosina (Cloridrato) 2mg": [
      "Terazosina (Cloridrato)",
      "2mg",
      "com",
      "comprimido"
    ],
    "Terazosina (Cloridrato) 5mg": [
      "Terazosina (Cloridrato)",
      "5mg",
      "com",
      "comprimido"
    ],
    "Terbinafina 10mg/g": [
      "Terbinafina",
      "10mg/g",
      "gel",
      "frasco"
    ],
    "Terbinafina (Cloridrato) 250mg": [
      "Terbinafina (Cloridrato)",
      "250mg",
      "com",
      "comprimido"
    ],
    "Terbinafina (Cloridrato) 10mg/g": [
      "Terbinafina (Cloridrato)",
      "10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Terbinafina (Cloridrato) 10mg/mL": [
      "Terbinafina (Cloridrato)",
      "10mg/mL",
      "sol top (spr)",
      "frasco"
    ],
    "Terbutalina (Sulfato) 0,5mg/mL": [
      "Terbutalina (Sulfato)",
      "0,5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Terbutalina (Sulfato) 0,30mg/mL": [
      "Terbutalina (Sulfato)",
      "0,30mg/mL",
      "xpe",
      "frasco"
    ],
    "Terconazol 8,0mg/g": [
      "Terconazol",
      "8,0mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Teriflunomida 14mg": [
      "Teriflunomida",
      "14mg",
      "com rev",
      "comprimido"
    ],
    "Terlipressina (Acetato) 1mg/5mL": [
      "Terlipressina (Acetato)",
      "1mg/5mL",
      "po liof sol inj",
      "unidade"
    ],
    "Terlipressina (Acetato) 0,12mg/mL": [
      "Terlipressina (Acetato)",
      "0,12mg/mL",
      "sol inj",
      "frasco"
    ],
    "Testosterona 10mg/mL": [
      "Testosterona",
      "10mg/mL",
      "gel",
      "frasco"
    ],
    "Testosterona (Cipionato) 100mg/mL": [
      "Testosterona (Cipionato)",
      "100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Tetraciclina (Cloridrato) 500mg": [
      "Tetraciclina (Cloridrato)",
      "500mg",
      "cap dura",
      "cápsula"
    ],
    "Tiabendazol 50mg/g": [
      "Tiabendazol",
      "50mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Tiabendazol 50mg/mL": [
      "Tiabendazol",
      "50mg/mL",
      "loç",
      "frasco"
    ],
    "Tianfenicol 500mg": [
      "Tianfenicol",
      "500mg",
      "cap mole",
      "cápsula"
    ],
    "Tibolona 1,25mg": [
      "Tibolona",
      "1,25mg",
      "com",
      "comprimido"
    ],
    "Tibolona 2,5mg": [
      "Tibolona",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Ticagrelor 90mg": [
      "Ticagrelor",
      "90mg",
      "com rev",
      "comprimido"
    ],
    "Ticlopidina (Cloridrato) 250mg": [
      "Ticlopidina (Cloridrato)",
      "250mg",
      "com rev",
      "comprimido"
    ],
    "Tigeciclina 50mg": [
      "Tigeciclina",
      "50mg",
      "po liof sol inj",
      "unidade"
    ],
    "Timolol (Maleato) 5mg/mL": [
      "Timolol (Maleato)",
      "5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Timolol (Maleato) 5mg/mL": [
      "Timolol (Maleato)",
      "5mg/mL",
      "gel oft",
      "frasco"
    ],
    "Tiocolchicosídeo 4mg": [
      "Tiocolchicosídeo",
      "4mg",
      "com",
      "comprimido"
    ],
    "Tiocolchicosídeo 2mg/mL": [
      "Tiocolchicosídeo",
      "2mg/mL",
      "sol inj",
      "frasco"
    ],
    "Tioconazol 10mg/mL": [
      "Tioconazol",
      "10mg/mL",
      "crem derm",
      "bisnaga"
    ],
    "Tioconazol 10mg/g": [
      "Tioconazol",
      "10mg/g",
      "po dermat",
      "unidade"
    ],
    "Tioconazol 280mg/g": [
      "Tioconazol",
      "280mg/g",
      "sol top",
      "frasco"
    ],
    "Tioguanina 40mg": [
      "Tioguanina",
      "40mg",
      "com",
      "comprimido"
    ],
    "Tiopental Sódico 500mg": [
      "Tiopental Sódico",
      "500mg",
      "po liof inj",
      "unidade"
    ],
    "Tiopental Sódico 1g": [
      "Tiopental Sódico",
      "1g",
      "po liof inj",
      "unidade"
    ],
    "Tioridazina (Cloridrato) 10mg": [
      "Tioridazina (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Tioridazina (Cloridrato) 25mg": [
      "Tioridazina (Cloridrato)",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Tioridazina (Cloridrato) 50mg": [
      "Tioridazina (Cloridrato)",
      "50mg",
      "drag",
      "drágea"
    ],
    "Tioridazina (Cloridrato) 100mg": [
      "Tioridazina (Cloridrato)",
      "100mg",
      "drag",
      "drágea"
    ],
    "Tioridazina (Cloridrato) 200mg": [
      "Tioridazina (Cloridrato)",
      "200mg",
      "com lib retard",
      "comprimido"
    ],
    "Tiotrópio (Brometo) Monohidratado 2,5mcg/dose": [
      "Tiotrópio (Brometo) Monohidratado",
      "2,5mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Tirofibana (Cloridrato) 0,25mg/mL": [
      "Tirofibana (Cloridrato)",
      "0,25mg/mL",
      "sol inj",
      "frasco"
    ],
    "Tizanidina (Cloridrato) 2mg": [
      "Tizanidina (Cloridrato)",
      "2mg",
      "com",
      "comprimido"
    ],
    "Tobramicina 75mg/mL": [
      "Tobramicina",
      "75mg/mL",
      "sol inal",
      "frasco"
    ],
    "Tobramicina 60mg/mL": [
      "Tobramicina",
      "60mg/mL",
      "sol inal",
      "frasco"
    ],
    "Tobramicina 3mg/mL": [
      "Tobramicina",
      "3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Tobramicina 3mg/mL": [
      "Tobramicina",
      "3mg/mL",
      "pom oft",
      "bisnaga"
    ],
    "Tobramicina 28mcg/dose": [
      "Tobramicina",
      "28mcg/dose",
      "cap dura po inal or + inal",
      "cápsula"
    ],
    "Tofacitinibe (Citrato) 5mg": [
      "Tofacitinibe (Citrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Tolterodina (Tartarato) 4,0mg": [
      "Tolterodina (Tartarato)",
      "4,0mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Topiramato 25mg": [
      "Topiramato",
      "25mg",
      "com rev",
      "comprimido"
    ],
    "Topiramato 50mg": [
      "Topiramato",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Topiramato 100mg": [
      "Topiramato",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Topotecano (Cloridrato) 4mg/4mL": [
      "Topotecano (Cloridrato)",
      "4mg/4mL",
      "po liof sol inj",
      "unidade"
    ],
    "Tramadol (Cloridrato) 100mg/mL": [
      "Tramadol (Cloridrato)",
      "100mg/mL",
      "sol oral",
      "frasco"
    ],
    "Tramadol (Cloridrato) 50mg": [
      "Tramadol (Cloridrato)",
      "50mg",
      "cap dura",
      "cápsula"
    ],
    "Tramadol (Cloridrato) 50mg/mL": [
      "Tramadol (Cloridrato)",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Tramadol (Cloridrato) 50mg": [
      "Tramadol (Cloridrato)",
      "50mg",
      "com rev  lib prol",
      "comprimido"
    ],
    "Tramadol (Cloridrato) 100mg": [
      "Tramadol (Cloridrato)",
      "100mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Ácido Tranexâmico 50mg/mL": [
      "Ácido Tranexâmico",
      "50mg/mL",
      "sol inj",
      "frasco"
    ],
    "Travoprosta 0,04mg/mL": [
      "Travoprosta",
      "0,04mg/mL",
      "sol oft",
      "frasco"
    ],
    "Trazodona (Cloridrato) 50mg": [
      "Trazodona (Cloridrato)",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Trazodona (Cloridrato) 100mg": [
      "Trazodona (Cloridrato)",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Trazodona (Cloridrato) 150mg": [
      "Trazodona (Cloridrato)",
      "150mg",
      "com lib cont",
      "comprimido"
    ],
    "Tretinoína 0,25mg/g": [
      "Tretinoína",
      "0,25mg/g",
      "gel",
      "frasco"
    ],
    "Tretinoína 0,5mg/g": [
      "Tretinoína",
      "0,5mg/g",
      "gel",
      "frasco"
    ],
    "Tretinoína 0,25mg/g": [
      "Tretinoína",
      "0,25mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Tretinoína 0,5mg/g": [
      "Tretinoína",
      "0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Tretinoína 1mg/g": [
      "Tretinoína",
      "1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Tretinoína 10mg": [
      "Tretinoína",
      "10mg",
      "cap mole",
      "cápsula"
    ],
    "Triancinolona Acetonida 0,5mcg/dose": [
      "Triancinolona Acetonida",
      "0,5mcg/dose",
      "sol spr nas",
      "frasco"
    ],
    "Triancinolona Acetonida 550mcg/mL": [
      "Triancinolona Acetonida",
      "550mcg/mL",
      "sus spr nas",
      "frasco"
    ],
    "Triancinolona Acetonida 1mg/g": [
      "Triancinolona Acetonida",
      "1mg/g",
      "pasta",
      "frasco"
    ],
    "Trimebutina (Maleato) 200mg": [
      "Trimebutina (Maleato)",
      "200mg",
      "cap mole",
      "cápsula"
    ],
    "Trimetazidina (Dicloridrato) 35mg": [
      "Trimetazidina (Dicloridrato)",
      "35mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Trimetazidina ( Dicloridrato) 80mg": [
      "Trimetazidina ( Dicloridrato)",
      "80mg",
      "cap lib prol",
      "cápsula"
    ],
    "Trióxido de Arsênio 1mg/mL": [
      "Trióxido de Arsênio",
      "1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Triptorrelina(Acetato) 0,1mg/mL": [
      "Triptorrelina(Acetato)",
      "0,1mg/mL",
      "sol inj",
      "frasco"
    ],
    "Triptorrelina(Acetato) 3,75mg": [
      "Triptorrelina(Acetato)",
      "3,75mg",
      "po liof sus inj + diluente",
      "unidade"
    ],
    "Triptorrelina(Embonato) 3,75mg/2mL": [
      "Triptorrelina(Embonato)",
      "3,75mg/2mL",
      "po liof sus inj + diluente",
      "unidade"
    ],
    "Triptorrelina(Embonato) 11,25mg": [
      "Triptorrelina(Embonato)",
      "11,25mg",
      "po liof sus inj",
      "unidade"
    ],
    "Triptorrelina(Embonato) 22,5mg": [
      "Triptorrelina(Embonato)",
      "22,5mg",
      "po liof sus inj",
      "unidade"
    ],
    "Trometamol (Fosfomicina) 3g": [
      "Trometamol (Fosfomicina)",
      "3g",
      "gran",
      "unidade"
    ],
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 30mg/mL": [
      "Trometamol Cetorolaco (Cetorolaco Trometamina)",
      "30mg/mL",
      "sol inj",
      "frasco"
    ],
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 5,0mg/mL": [
      "Trometamol Cetorolaco (Cetorolaco Trometamina)",
      "5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 4,0mg/mL": [
      "Trometamol Cetorolaco (Cetorolaco Trometamina)",
      "4,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 10mg": [
      "Trometamol Cetorolaco (Cetorolaco Trometamina)",
      "10mg",
      "com sub lingual",
      "comprimido"
    ],
    "Trometamol Cetorolaco (Cetorolaco Trometamina) 20mg/mL": [
      "Trometamol Cetorolaco (Cetorolaco Trometamina)",
      "20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Tropicamica 10mg/mL": [
      "Tropicamica",
      "10mg/mL",
      "sol oft",
      "frasco"
    ],
    "Undecilato de Testosterona 250mg/mL": [
      "Undecilato de Testosterona",
      "250mg/mL",
      "sol inj",
      "frasco"
    ],
    "Uréia 100mg/g": [
      "Uréia",
      "100mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Uréia 100mg/mL": [
      "Uréia",
      "100mg/mL",
      "loç derm",
      "frasco"
    ],
    "Uréia 200mg/g": [
      "Uréia",
      "200mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Valaciclovir (Cloridrato) 500mg": [
      "Valaciclovir (Cloridrato)",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Valerato de Estradiol 2mg": [
      "Valerato de Estradiol",
      "2mg",
      "drag",
      "drágea"
    ],
    "Valerato de Estradiol 1mg": [
      "Valerato de Estradiol",
      "1mg",
      "drag",
      "drágea"
    ],
    "Valproato de Sódio 50mg/mL": [
      "Valproato de Sódio",
      "50mg/mL",
      "xpe",
      "frasco"
    ],
    "Valproato de Sódio 300mg": [
      "Valproato de Sódio",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Valproato de Sódio 500mg": [
      "Valproato de Sódio",
      "500mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana 40mg": [
      "Valsartana",
      "40mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana 80mg": [
      "Valsartana",
      "80mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana 160mg": [
      "Valsartana",
      "160mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana 320mg": [
      "Valsartana",
      "320mg",
      "com rev",
      "comprimido"
    ],
    "Vancomicina (Cloridrato) 500mg": [
      "Vancomicina (Cloridrato)",
      "500mg",
      "po liof sol inj",
      "unidade"
    ],
    "Vancomicina (Cloridrato) 1000mg": [
      "Vancomicina (Cloridrato)",
      "1000mg",
      "po liof sol inj",
      "unidade"
    ],
    "Vandetanibe 100mg": [
      "Vandetanibe",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Vandetanibe 300mg": [
      "Vandetanibe",
      "300mg",
      "com rev",
      "comprimido"
    ],
    "Vardenafil (Cloridrato) 5mg": [
      "Vardenafil (Cloridrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Vardenafil (Cloridrato) 10mg": [
      "Vardenafil (Cloridrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Vardenafil (Cloridrato) 20mg": [
      "Vardenafil (Cloridrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Varfarina Sódica 1mg": [
      "Varfarina Sódica",
      "1mg",
      "com",
      "comprimido"
    ],
    "Varfarina Sódica 2mg": [
      "Varfarina Sódica",
      "2mg",
      "com",
      "comprimido"
    ],
    "Varfarina Sódica 2,5mg": [
      "Varfarina Sódica",
      "2,5mg",
      "com",
      "comprimido"
    ],
    "Varfarina Sódica 5mg": [
      "Varfarina Sódica",
      "5mg",
      "com",
      "comprimido"
    ],
    "Varfarina Sódica 7,5mg": [
      "Varfarina Sódica",
      "7,5mg",
      "com",
      "comprimido"
    ],
    "Varfarina Sódica 10mg": [
      "Varfarina Sódica",
      "10mg",
      "com",
      "comprimido"
    ],
    "Vecurônio (Brometo) 4mg/mL": [
      "Vecurônio (Brometo)",
      "4mg/mL",
      "pó liófilo com diluente",
      "unidade"
    ],
    "Vecurônio (Brometo) 10mg": [
      "Vecurônio (Brometo)",
      "10mg",
      "pó liófilo",
      "unidade"
    ],
    "Vemurafenibe 240mg": [
      "Vemurafenibe",
      "240mg",
      "com rev",
      "comprimido"
    ],
    "Venetoclax 10mg": [
      "Venetoclax",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Venetoclax 50mg": [
      "Venetoclax",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Venetoclax 100mg": [
      "Venetoclax",
      "100mg",
      "com rev",
      "comprimido"
    ],
    "Venlafaxina (Cloridrato) 37,5mg": [
      "Venlafaxina (Cloridrato)",
      "37,5mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Venlafaxina (Cloridrato) 75mg": [
      "Venlafaxina (Cloridrato)",
      "75mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Venlafaxina (Cloridrato) 150mg": [
      "Venlafaxina (Cloridrato)",
      "150mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Venlafaxina (Cloridrato) 37,5mg": [
      "Venlafaxina (Cloridrato)",
      "37,5mg",
      "com lib prol",
      "comprimido"
    ],
    "Venlafaxina (Cloridrato) 75mg": [
      "Venlafaxina (Cloridrato)",
      "75mg",
      "com lib prol",
      "comprimido"
    ],
    "Venlafaxina (Cloridrato) 150mg": [
      "Venlafaxina (Cloridrato)",
      "150mg",
      "com lib prol",
      "comprimido"
    ],
    "Verapamil (Cloridrato) 120mg": [
      "Verapamil (Cloridrato)",
      "120mg",
      "com rev retard",
      "comprimido"
    ],
    "Verapamil (Cloridrato) 240mg": [
      "Verapamil (Cloridrato)",
      "240mg",
      "com rev retard",
      "comprimido"
    ],
    "Verapamil (Cloridrato) 80mg": [
      "Verapamil (Cloridrato)",
      "80mg",
      "com rev",
      "comprimido"
    ],
    "Verteporfina 15mg/30mL": [
      "Verteporfina",
      "15mg/30mL",
      "po liof sol inj",
      "unidade"
    ],
    "Vildagliptina 50mg": [
      "Vildagliptina",
      "50mg",
      "com",
      "comprimido"
    ],
    "Vimblastina (Sulfato) 10mg": [
      "Vimblastina (Sulfato)",
      "10mg",
      "po liof sol inj",
      "unidade"
    ],
    "Vimblastina (Sulfato) 1mg/1mL": [
      "Vimblastina (Sulfato)",
      "1mg/1mL",
      "sol inj",
      "frasco"
    ],
    "Viminol (Hidroxibenzoato) 70mg": [
      "Viminol (Hidroxibenzoato)",
      "70mg",
      "cap dura",
      "cápsula"
    ],
    "Vimpocetina 5mg": [
      "Vimpocetina",
      "5mg",
      "com",
      "comprimido"
    ],
    "Vinorelbina (Tartarato) 10mg/mL": [
      "Vinorelbina (Tartarato)",
      "10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Vinorelbina (Tartarato) 20mg": [
      "Vinorelbina (Tartarato)",
      "20mg",
      "cap gel mole",
      "cápsula"
    ],
    "Vinorelbina (Tartarato) 30mg": [
      "Vinorelbina (Tartarato)",
      "30mg",
      "cap gel mole",
      "cápsula"
    ],
    "Vismodegibe 150mg": [
      "Vismodegibe",
      "150mg",
      "cap dura",
      "cápsula"
    ],
    "Vonoprazana (Fumarato) 10mg": [
      "Vonoprazana (Fumarato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Vonoprazana (Fumarato) 20mg": [
      "Vonoprazana (Fumarato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Voriconazol 50mg": [
      "Voriconazol",
      "50mg",
      "com rev",
      "comprimido"
    ],
    "Voriconazol 200mg": [
      "Voriconazol",
      "200mg",
      "com rev",
      "comprimido"
    ],
    "Voriconazol 200mg/19mL": [
      "Voriconazol",
      "200mg/19mL",
      "po liof sol inj",
      "unidade"
    ],
    "Vortioxetina (Bromidrato) 5mg": [
      "Vortioxetina (Bromidrato)",
      "5mg",
      "com rev",
      "comprimido"
    ],
    "Vortioxetina (Bromidrato) 10mg": [
      "Vortioxetina (Bromidrato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Vortioxetina (Bromidrato) 15mg": [
      "Vortioxetina (Bromidrato)",
      "15mg",
      "com rev",
      "comprimido"
    ],
    "Vortioxetina (Bromidrato) 20mg": [
      "Vortioxetina (Bromidrato)",
      "20mg",
      "com rev",
      "comprimido"
    ],
    "Xilometazolina (Cloridrato) 1mg/mL": [
      "Xilometazolina (Cloridrato)",
      "1mg/mL",
      "sol got nas",
      "frasco"
    ],
    "Zidovudina 100mg": [
      "Zidovudina",
      "100mg",
      "cap gel dura",
      "cápsula"
    ],
    "Zidovudina 10mg/mL": [
      "Zidovudina",
      "10mg/mL",
      "xpe",
      "frasco"
    ],
    "Ziprasidona (Cloridrato Monoidratado) 40mg": [
      "Ziprasidona (Cloridrato Monoidratado)",
      "40mg",
      "cap dura",
      "cápsula"
    ],
    "Ziprasidona (Cloridrato Monoidratado) 80mg": [
      "Ziprasidona (Cloridrato Monoidratado)",
      "80mg",
      "cap dura",
      "cápsula"
    ],
    "Ácido Zoledrônico 4mg/5mL": [
      "Ácido Zoledrônico",
      "4mg/5mL",
      "sol inj",
      "frasco"
    ],
    "Ácido Zoledrônico 4mg/5mL": [
      "Ácido Zoledrônico",
      "4mg/5mL",
      "po liof sol inj",
      "unidade"
    ],
    "Ácido Zoledrônico 5mg/100mL": [
      "Ácido Zoledrônico",
      "5mg/100mL",
      "sol inj",
      "frasco"
    ],
    "Ácido Zoledrônico 4mg/100mL": [
      "Ácido Zoledrônico",
      "4mg/100mL",
      "sol inj",
      "frasco"
    ],
    "Zolmitriptana 2,5mg": [
      "Zolmitriptana",
      "2,5mg",
      "com rev",
      "comprimido"
    ],
    "Zolmitriptana 2,5mg": [
      "Zolmitriptana",
      "2,5mg",
      "com orodisp",
      "comprimido"
    ],
    "Zolpidem (Hemitartarato) 5mg": [
      "Zolpidem (Hemitartarato)",
      "5mg",
      "com subl",
      "comprimido"
    ],
    "Zolpidem (Hemitartarato) 5mg": [
      "Zolpidem (Hemitartarato)",
      "5mg",
      "com orodisp",
      "comprimido"
    ],
    "Zolpidem (Hemitartarato) 10mg": [
      "Zolpidem (Hemitartarato)",
      "10mg",
      "com rev",
      "comprimido"
    ],
    "Zolpidem (Hemitartarato) 6,25mg": [
      "Zolpidem (Hemitartarato)",
      "6,25mg",
      "com multicamada de lib prol",
      "comprimido"
    ],
    "Zolpidem (Hemitartarato) 12,5mg": [
      "Zolpidem (Hemitartarato)",
      "12,5mg",
      "com multicamada de lib prol",
      "comprimido"
    ],
    "Zopiclona 7,5mg": [
      "Zopiclona",
      "7,5mg",
      "com rev",
      "comprimido"
    ],
    "Acetato de Betametasona + Fosfato Dissódico de Betametasona 3mg/mL + 3,945mg/mL": [
      "Acetato de Betametasona + Fosfato Dissódico de Betametasona",
      "3mg/mL + 3,945mg/mL",
      "sus inj",
      "frasco"
    ],
    "Acetato de Ciproterona + Etinilestradiol 2mg + 0,035mg": [
      "Acetato de Ciproterona + Etinilestradiol",
      "2mg + 0,035mg",
      "drag",
      "drágea"
    ],
    "Valerato de Estradiol 2mg": [
      "Valerato de Estradiol",
      "2mg",
      "drag",
      "drágea"
    ],
    "Acetato de Ciproterona + Valerato de Estradiol 1mg + 2mg": [
      "Acetato de Ciproterona + Valerato de Estradiol",
      "1mg + 2mg",
      "drag",
      "drágea"
    ],
    "Acetato de Clormadinona + Etinilestradiol 2mg + 0,03mg": [
      "Acetato de Clormadinona + Etinilestradiol",
      "2mg + 0,03mg",
      "com rev",
      "comprimido"
    ],
    "Acetato de Clormadinona + Etinilestradiol 2mg + 0,02mg": [
      "Acetato de Clormadinona + Etinilestradiol",
      "2mg + 0,02mg",
      "com rev",
      "comprimido"
    ],
    "Acetato de Clostebol + Sulfato de Neomicina 5mg + 5mg": [
      "Acetato de Clostebol + Sulfato de Neomicina",
      "5mg + 5mg",
      "crem derm",
      "bisnaga"
    ],
    "Acetato de Clostebol + Sulfato de Neomicina 5mg + 5mg": [
      "Acetato de Clostebol + Sulfato de Neomicina",
      "5mg + 5mg",
      "crem vag",
      "bisnaga"
    ],
    "Acetato de Hidrocortisona + Lidocaína + Óxido de Zinco + Subacetato de Alumínio 50mg + 2.5mg + 180mg + 35mg": [
      "Acetato de Hidrocortisona + Lidocaína + Óxido de Zinco + Subacetato de Alumínio",
      "50mg + 2.5mg + 180mg + 35mg",
      "pom ret",
      "bisnaga"
    ],
    "Acetato de Nomegestrol + Estradiol Hemihidratado 2,5mg + 1,5mg": [
      "Acetato de Nomegestrol + Estradiol Hemihidratado",
      "2,5mg + 1,5mg",
      "com rev",
      "comprimido"
    ],
    "Acetato de Noretisterona + Estradiol 0,5mg + 1mg": [
      "Acetato de Noretisterona + Estradiol",
      "0,5mg + 1mg",
      "com rev",
      "comprimido"
    ],
    "Acetato de Noretisterona + Etinilestradiol 2mg + 0,01mg": [
      "Acetato de Noretisterona + Etinilestradiol",
      "2mg + 0,01mg",
      "com",
      "comprimido"
    ],
    "Ácido Acetilsalicílico + Ácido Ascórbico 400mg + 240mg": [
      "Ácido Acetilsalicílico + Ácido Ascórbico",
      "400mg + 240mg",
      "com efev",
      "comprimido"
    ],
    "Ácido Acetilsalicílico + Bicarbonato de Sódio + Ácido Cítrico 324mg + 1.625mg + 965mg": [
      "Ácido Acetilsalicílico + Bicarbonato de Sódio + Ácido Cítrico",
      "324mg + 1.625mg + 965mg",
      "com efev",
      "comprimido"
    ],
    "Ácido Acetilsalicílico + Cafeína 500mg + 30mg": [
      "Ácido Acetilsalicílico + Cafeína",
      "500mg + 30mg",
      "com",
      "comprimido"
    ],
    "Ácido Acetilsalicílico + Maleato de Dexclorfeniramina + Cloridrato de Fenilefrina + Cafeína 400mg + 1mg + 10mg + 30mg": [
      "Ácido Acetilsalicílico + Maleato de Dexclorfeniramina + Cloridrato de Fenilefrina + Cafeína",
      "400mg + 1mg + 10mg + 30mg",
      "com",
      "comprimido"
    ],
    "Ácido Bórico + Ácido Salicílico + Enxofre + Óxido de Zinco 11,735g + 0,352g + 17,602g + 11,735g": [
      "Ácido Bórico + Ácido Salicílico + Enxofre + Óxido de Zinco",
      "11,735g + 0,352g + 17,602g + 11,735g",
      "po top",
      "unidade"
    ],
    "Ácido Fusídico + Valerato de Betametasona 20mg/g + 1mg/g": [
      "Ácido Fusídico + Valerato de Betametasona",
      "20mg/g + 1mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Ácido Valpróico + Valproato de Sódio 300mg (87mg + 199,80mg)": [
      "Ácido Valpróico + Valproato de Sódio",
      "300mg (87mg + 199,80mg)",
      "com lib prolong",
      "comprimido"
    ],
    "Ácido Valpróico + Valproato de Sódio 500mg (145mg + 333mg)": [
      "Ácido Valpróico + Valproato de Sódio",
      "500mg (145mg + 333mg)",
      "com lib prolong",
      "comprimido"
    ],
    "Adapaleno + Fosfato de Clindamicina 1mg/g + 10mg/g": [
      "Adapaleno + Fosfato de Clindamicina",
      "1mg/g + 10mg/g",
      "gel",
      "frasco"
    ],
    "Adapaleno + Fosfato de Clindamicina 1mg/g + 10mg/g": [
      "Adapaleno + Fosfato de Clindamicina",
      "1mg/g + 10mg/g",
      "gel derm lib prol",
      "frasco"
    ],
    "Adapaleno + Peróxido de Benzoíla 1mg/g + 25mg/g": [
      "Adapaleno + Peróxido de Benzoíla",
      "1mg/g + 25mg/g",
      "gel",
      "frasco"
    ],
    "Alendronato de Sódio + Carbonato de Cálcio + Colecalciferol 70mg + 500mg + 2mg": [
      "Alendronato de Sódio + Carbonato de Cálcio + Colecalciferol",
      "70mg + 500mg + 2mg",
      "com + com rev",
      "comprimido"
    ],
    "Alendronato de Sódio + Colecalciferol 70mg (ác. alendrônico) + 5.600UI": [
      "Alendronato de Sódio + Colecalciferol",
      "70mg (ác. alendrônico) + 5.600UI",
      "com",
      "comprimido"
    ],
    "Alendronato de Sódio + Colecalciferol 70mg (ác. alendrônico) + 2.800UI": [
      "Alendronato de Sódio + Colecalciferol",
      "70mg (ác. alendrônico) + 2.800UI",
      "com",
      "comprimido"
    ],
    "Algestona Acetofenida + Enantato de Estradiol 150mg/mL + 10mg/mL": [
      "Algestona Acetofenida + Enantato de Estradiol",
      "150mg/mL + 10mg/mL",
      "sol inj",
      "frasco"
    ],
    "Alginato de Sódio + Bicarbonato de Potássio 100mg/mL + 20mg/mL": [
      "Alginato de Sódio + Bicarbonato de Potássio",
      "100mg/mL + 20mg/mL",
      "sus or",
      "frasco"
    ],
    "Amoxicilina Tri-Hidratada + Claritromicina + Esomeprazol Magnésico Tri-Hidratado 500mg + 500mg + 20mg": [
      "Amoxicilina Tri-Hidratada + Claritromicina + Esomeprazol Magnésico Tri-Hidratado",
      "500mg + 500mg + 20mg",
      "cap dura + com rev + com rev lib retard",
      "cápsula"
    ],
    "Amoxicilina + Clavulanato de Potássio 125mg/5mL + 31,25mg/5mL": [
      "Amoxicilina + Clavulanato de Potássio",
      "125mg/5mL + 31,25mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Amoxicilina + Clavulanato de Potássio 250mg/5mL + 62,5mg/5mL": [
      "Amoxicilina + Clavulanato de Potássio",
      "250mg/5mL + 62,5mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Amoxicilina + Clavulanato de Potássio 500mg + 125mg": [
      "Amoxicilina + Clavulanato de Potássio",
      "500mg + 125mg",
      "com rev",
      "comprimido"
    ],
    "Amoxicilina + Clavulanato de Potássio 200mg/5mL + 28,5mg/5mL": [
      "Amoxicilina + Clavulanato de Potássio",
      "200mg/5mL + 28,5mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Amoxicilina + Clavulanato de Potássio 400mg/5mL + 57mg/5mL": [
      "Amoxicilina + Clavulanato de Potássio",
      "400mg/5mL + 57mg/5mL",
      "po sus or",
      "unidade"
    ],
    "Amoxicilina + Clavulanato de Potássio 875mg + 125mg": [
      "Amoxicilina + Clavulanato de Potássio",
      "875mg + 125mg",
      "com rev",
      "comprimido"
    ],
    "Amoxicilina + Clavulanato de Potássio 600mg + 42,9mg": [
      "Amoxicilina + Clavulanato de Potássio",
      "600mg + 42,9mg",
      "po sus or",
      "unidade"
    ],
    "Amoxicilina + Clavulanato de Potássio 1.000mg + 200mg": [
      "Amoxicilina + Clavulanato de Potássio",
      "1.000mg + 200mg",
      "po sol inj",
      "unidade"
    ],
    "Amoxicilina + Sulbactam 1.000mg + 500mg": [
      "Amoxicilina + Sulbactam",
      "1.000mg + 500mg",
      "po sol inj",
      "unidade"
    ],
    "Amoxicilina + Sulbactam 500mg + 250mg": [
      "Amoxicilina + Sulbactam",
      "500mg + 250mg",
      "po sol inj",
      "unidade"
    ],
    "Amoxicilina + Sulbactam 200mg/mL + 50mg/mL": [
      "Amoxicilina + Sulbactam",
      "200mg/mL + 50mg/mL",
      "po prep extemp",
      "unidade"
    ],
    "Amoxicilina + Sulbactam 875 mg + 125 mg": [
      "Amoxicilina + Sulbactam",
      "875 mg + 125 mg",
      "com rev",
      "comprimido"
    ],
    "Ampicilina Sódica + Sulbactam Sódico 1g + 0,5g": [
      "Ampicilina Sódica + Sulbactam Sódico",
      "1g + 0,5g",
      "po sol inj",
      "unidade"
    ],
    "Ampicilina Sódica + Sulbactam Sódico 2g + 1g": [
      "Ampicilina Sódica + Sulbactam Sódico",
      "2g + 1g",
      "po sol inj",
      "unidade"
    ],
    "Arteméter + Lumefantrina 20mg + 120mg": [
      "Arteméter + Lumefantrina",
      "20mg + 120mg",
      "com",
      "comprimido"
    ],
    "Artesunato + Mefloquina 100mg + 220mg": [
      "Artesunato + Mefloquina",
      "100mg + 220mg",
      "com rev",
      "comprimido"
    ],
    "Artesunato + Mefloquina 25mg + 55mg": [
      "Artesunato + Mefloquina",
      "25mg + 55mg",
      "com rev",
      "comprimido"
    ],
    "Atenolol + Clortalidona 100mg + 25mg": [
      "Atenolol + Clortalidona",
      "100mg + 25mg",
      "com",
      "comprimido"
    ],
    "Atenolol + Clortalidona 50mg + 12,5mg": [
      "Atenolol + Clortalidona",
      "50mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Atenolol + Clortalidona 25mg + 12,5mg": [
      "Atenolol + Clortalidona",
      "25mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 500mg": [
      "Benzoato de Alogliptina + Cloridrato de Metformina",
      "12,5mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 850mg": [
      "Benzoato de Alogliptina + Cloridrato de Metformina",
      "12,5mg + 850mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Metformina 12,5mg + 1000mg": [
      "Benzoato de Alogliptina + Cloridrato de Metformina",
      "12,5mg + 1000mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 15mg": [
      "Benzoato de Alogliptina + Cloridrato de Pioglitazona",
      "25mg + 15mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 30mg": [
      "Benzoato de Alogliptina + Cloridrato de Pioglitazona",
      "25mg + 30mg",
      "com rev",
      "comprimido"
    ],
    "Benzoato de Alogliptina + Cloridrato de Pioglitazona 25mg + 45mg": [
      "Benzoato de Alogliptina + Cloridrato de Pioglitazona",
      "25mg + 45mg",
      "com rev",
      "comprimido"
    ],
    "Benzoilmetronidazol + Nistatina + Cloreto de Benzalcônico 62,5mg/g + 25.000UI/g + 1,25mg/g": [
      "Benzoilmetronidazol + Nistatina + Cloreto de Benzalcônico",
      "62,5mg/g + 25.000UI/g + 1,25mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Besilato de Anlodipino + Atenolol 5,0mg + 25mg": [
      "Besilato de Anlodipino + Atenolol",
      "5,0mg + 25mg",
      "cap dura",
      "cápsula"
    ],
    "Besilato de Anlodipino + Atenolol 5,0mg + 50mg": [
      "Besilato de Anlodipino + Atenolol",
      "5,0mg + 50mg",
      "cap dura",
      "cápsula"
    ],
    "Besilato de Anlodipino + Losartana Potássica 2,5mg + 50mg": [
      "Besilato de Anlodipino + Losartana Potássica",
      "2,5mg + 50mg",
      "cap dura",
      "cápsula"
    ],
    "Besilato de Anlodipino + Losartana Potássica 5,0mg + 50mg": [
      "Besilato de Anlodipino + Losartana Potássica",
      "5,0mg + 50mg",
      "cap dura",
      "cápsula"
    ],
    "Besilato de Anlodipino + Losartana Potássica 5,0mg + 100mg": [
      "Besilato de Anlodipino + Losartana Potássica",
      "5,0mg + 100mg",
      "cap dura",
      "cápsula"
    ],
    "Besilato de Anlodipino + Perindopril Arginina 3,5mg + 2,5mg": [
      "Besilato de Anlodipino + Perindopril Arginina",
      "3,5mg + 2,5mg",
      "com",
      "comprimido"
    ],
    "Besilato de Anlodipino + Perindopril Arginina 7mg + 5mg": [
      "Besilato de Anlodipino + Perindopril Arginina",
      "7mg + 5mg",
      "com",
      "comprimido"
    ],
    "Besilato de Anlodipino + Perindopril Arginina 14mg + 10mg": [
      "Besilato de Anlodipino + Perindopril Arginina",
      "14mg + 10mg",
      "com",
      "comprimido"
    ],
    "Betametasona + Maleato de Dexclorfeniramina 0,05mg/mL + 0,4mg/mL": [
      "Betametasona + Maleato de Dexclorfeniramina",
      "0,05mg/mL + 0,4mg/mL",
      "xpe",
      "frasco"
    ],
    "Betametasona + Maleato de Dexclorfeniramina 0,25mg + 2mg": [
      "Betametasona + Maleato de Dexclorfeniramina",
      "0,25mg + 2mg",
      "sol or",
      "frasco"
    ],
    "Bimatoprosta + Dextrotartarato de Brimonidina + Maleato de Timolol 0,1mg/mL + 1,5mg/mL + 6,83mg/mL": [
      "Bimatoprosta + Dextrotartarato de Brimonidina + Maleato de Timolol",
      "0,1mg/mL + 1,5mg/mL + 6,83mg/mL",
      "sol oft",
      "frasco"
    ],
    "Bimatoprosta + Maleato de Timolol 0,3mg/mL + 5,0mg/mL": [
      "Bimatoprosta + Maleato de Timolol",
      "0,3mg/mL + 5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Bisacodil + Docusato de Sódio 5mg + 60mg": [
      "Bisacodil + Docusato de Sódio",
      "5mg + 60mg",
      "com rev",
      "comprimido"
    ],
    "Brinzolamida + Dextrotartarato de Brimodina 10mg/mL + 2mg/mL": [
      "Brinzolamida + Dextrotartarato de Brimodina",
      "10mg/mL + 2mg/mL",
      "sus oft",
      "frasco"
    ],
    "Brinzolamida + Maleato de Timolol 10mg/mL + 5mg/mL": [
      "Brinzolamida + Maleato de Timolol",
      "10mg/mL + 5mg/mL",
      "sus oft",
      "frasco"
    ],
    "Bromazepam + Sulpirida 1mg + 25mg": [
      "Bromazepam + Sulpirida",
      "1mg + 25mg",
      "cap dura",
      "cápsula"
    ],
    "Brometo de Tiotrópio Monoidratado  + Cloridrato de Olodaterol 2,5mcg + 2,5mcg": [
      "Brometo de Tiotrópio Monoidratado  + Cloridrato de Olodaterol",
      "2,5mcg + 2,5mcg",
      "sol inal (oral)",
      "frasco"
    ],
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 10mg + 250mg": [
      "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada",
      "10mg + 250mg",
      "com rev",
      "comprimido"
    ],
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 4mg/mL + 500mgmL": [
      "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada",
      "4mg/mL + 500mgmL",
      "sol inj",
      "frasco"
    ],
    "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada 6,67mg/mL + 333,4mg/mL": [
      "Butilbrometo de Escopolamina + Dipirona Sódica Mono-Hidratada",
      "6,67mg/mL + 333,4mg/mL",
      "sol or (got)",
      "frasco"
    ],
    "Butilbrometo de Escopolamina + Paracetamol 10mg + 500mg": [
      "Butilbrometo de Escopolamina + Paracetamol",
      "10mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Cafeína Anidra + Dipirona Sódica + Cloridrato de Isometepteno 30mg/mL + 300mg/mL + 50mg/mL": [
      "Cafeína Anidra + Dipirona Sódica + Cloridrato de Isometepteno",
      "30mg/mL + 300mg/mL + 50mg/mL",
      "sol or",
      "frasco"
    ],
    "Cafeína Anidra + Dipirona Sódica + Mucato de Isometepteno 30mg + 300mg + 30mg": [
      "Cafeína Anidra + Dipirona Sódica + Mucato de Isometepteno",
      "30mg + 300mg + 30mg",
      "com rev",
      "comprimido"
    ],
    "Cafeina Anidra + Orfenadrina (Citrato) + Paracetamol 50mg + 35mg + 450mg": [
      "Cafeina Anidra + Orfenadrina (Citrato) + Paracetamol",
      "50mg + 35mg + 450mg",
      "com",
      "comprimido"
    ],
    "Calamina + Cloridrato de Difenidramina + Cânfora 80mg/mL + 10mg/mL + 1mg/mL": [
      "Calamina + Cloridrato de Difenidramina + Cânfora",
      "80mg/mL + 10mg/mL + 1mg/mL",
      "loç derm",
      "frasco"
    ],
    "Candesartana Cilexetila + Felodipino 16mg + 2,5mg": [
      "Candesartana Cilexetila + Felodipino",
      "16mg + 2,5mg",
      "com + com lib prol",
      "comprimido"
    ],
    "Candesartana Cilexetila + Felodipino 16mg + 5mg": [
      "Candesartana Cilexetila + Felodipino",
      "16mg + 5mg",
      "com + com lib prol",
      "comprimido"
    ],
    "Candesartana Cilexetila + Hidroclorotiazida 16mg + 12,5mg": [
      "Candesartana Cilexetila + Hidroclorotiazida",
      "16mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Candesartana Cilexetila + Hidroclorotiazida 8,0mg + 12,5mg": [
      "Candesartana Cilexetila + Hidroclorotiazida",
      "8,0mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Caproato de Hidroxiprogesterona + Valerato de Estradiol 250mg/mL + 5mg/mL": [
      "Caproato de Hidroxiprogesterona + Valerato de Estradiol",
      "250mg/mL + 5mg/mL",
      "sol inj",
      "frasco"
    ],
    "Carbidopa + Levodopa 25mg + 250mg": [
      "Carbidopa + Levodopa",
      "25mg + 250mg",
      "com",
      "comprimido"
    ],
    "Ceftazidima Pentaidratada + Avibactam Sódico 2.000mg + 500mg": [
      "Ceftazidima Pentaidratada + Avibactam Sódico",
      "2.000mg + 500mg",
      "pó sol inf",
      "unidade"
    ],
    "Cetoconazol + Dipropionato de Betametasona 20mg/g + 0,64mg/g": [
      "Cetoconazol + Dipropionato de Betametasona",
      "20mg/g + 0,64mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Cetoconazol + Dipropionato de Betametasona 20mg/g + 0,64mg/g": [
      "Cetoconazol + Dipropionato de Betametasona",
      "20mg/g + 0,64mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina 20mg/g + 0,64mg/g + 2,5mg/g": [
      "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina",
      "20mg/g + 0,64mg/g + 2,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina 20mg/g + 0,64mg/g + 2,5mg/g": [
      "Cetoconazol + Dipropionato de Betametasona + Sulfato de Neomicina",
      "20mg/g + 0,64mg/g + 2,5mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Cetoprofeno + Omeprazol 200mg + 20mg": [
      "Cetoprofeno + Omeprazol",
      "200mg + 20mg",
      "cap dura microg lib prol + microg gastrorresistentes",
      "cápsula"
    ],
    "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico 1mg + 50mg + 50mg + 50mg": [
      "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico",
      "1mg + 50mg + 50mg + 50mg",
      "com rev",
      "comprimido"
    ],
    "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico 1mg + 100mg + 100mg + 100mg": [
      "Cianocobalamina + Cloridrato de Piridoxina + Nitrato de Tiamina + Diclofenaco Sódico",
      "1mg + 100mg + 100mg + 100mg",
      "com rev lib retard",
      "comprimido"
    ],
    "Cianocobalamina + Diclofenaco Sódico + Cloridrato de Piridoxina + Cloridrato de Tiamina 5.000mcg + 75mg + 100mg + 100mg": [
      "Cianocobalamina + Diclofenaco Sódico + Cloridrato de Piridoxina + Cloridrato de Tiamina",
      "5.000mcg + 75mg + 100mg + 100mg",
      "sol inj (kit 2 ampolas)",
      "kit 2 ampolas"
    ],
    "Clindamicina + Peróxido de Benzoíla 10mg/g + 50mg/g": [
      "Clindamicina + Peróxido de Benzoíla",
      "10mg/g + 50mg/g",
      "gel",
      "frasco"
    ],
    "Clonixinato de Lisina + Cloridrato de Ciclobenzaprina 125mg + 5mg": [
      "Clonixinato de Lisina + Cloridrato de Ciclobenzaprina",
      "125mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Cloranfenicol + Acetato de Retinol + Aminoácidos + Metionina 5,0mg + 10.000UI + 25mg + 5,0mg": [
      "Cloranfenicol + Acetato de Retinol + Aminoácidos + Metionina",
      "5,0mg + 10.000UI + 25mg + 5,0mg",
      "pom oft",
      "bisnaga"
    ],
    "Cloreto de Cetilpiridínio + Benzocaína 1,466mg + 10mg": [
      "Cloreto de Cetilpiridínio + Benzocaína",
      "1,466mg + 10mg",
      "past",
      "frasco"
    ],
    "Cloreto de Cetilpiridínio + Benzocaína 0,5mg/mL + 4mg/mL": [
      "Cloreto de Cetilpiridínio + Benzocaína",
      "0,5mg/mL + 4mg/mL",
      "sol oral",
      "frasco"
    ],
    "Cloridrato de Amilorida + Hidroclorotiazida 2,5mg + 25mg": [
      "Cloridrato de Amilorida + Hidroclorotiazida",
      "2,5mg + 25mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Oxomemazina + Iodeto de Potássio + Benzoato de Sódio + Guaifenesina 0,4mg/mL + 20mg/mL + 4mg/mL + 6mg/mL": [
      "Cloridrato de Oxomemazina + Iodeto de Potássio + Benzoato de Sódio + Guaifenesina",
      "0,4mg/mL + 20mg/mL + 4mg/mL + 6mg/mL",
      "xarope",
      "frasco"
    ],
    "Cloridrato de Azelastina + Propionato de Fluticasona 137mcg + 50mcg": [
      "Cloridrato de Azelastina + Propionato de Fluticasona",
      "137mcg + 50mcg",
      "Susp spray inal",
      "frasco"
    ],
    "Cloridrato de Amilorida + Hidroclorotiazida 5mg + 50mg": [
      "Cloridrato de Amilorida + Hidroclorotiazida",
      "5mg + 50mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Benazepril + Hidroclorotiazida 10mg + 12,5mg": [
      "Cloridrato de Benazepril + Hidroclorotiazida",
      "10mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Benazepril + Hidroclorotiazida 5mg + 6,25mg": [
      "Cloridrato de Benazepril + Hidroclorotiazida",
      "5mg + 6,25mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Bupivacaína + Glicose 5mg/mL + 80mg/mL": [
      "Cloridrato de Bupivacaína + Glicose",
      "5mg/mL + 80mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Ciclobenzaprina + Cafeína 5mg + 30mg": [
      "Cloridrato de Ciclobenzaprina + Cafeína",
      "5mg + 30mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Ciclobenzaprina + Cafeína 10mg + 60mg": [
      "Cloridrato de Ciclobenzaprina + Cafeína",
      "10mg + 60mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Ciproeptadina + Cloridrato de Tiamina + Riboflavina + Cloridrato de Piridoxina + Nicotinamida + Ácido Ascórbico 0,8mg/mL + 0,12mg/mL + 0,15mg/mL + 0,134mg/mL + 1,334mg/mL + 4,334mg/mL": [
      "Cloridrato de Ciproeptadina + Cloridrato de Tiamina + Riboflavina + Cloridrato de Piridoxina + Nicotinamida + Ácido Ascórbico",
      "0,8mg/mL + 0,12mg/mL + 0,15mg/mL + 0,134mg/mL + 1,334mg/mL + 4,334mg/mL",
      "xarope",
      "frasco"
    ],
    "Cloridrato de Ciprofloxacino + Dexametasona 3,5mg/mL eq a 3mg/mL base + 1,0mg/mL": [
      "Cloridrato de Ciprofloxacino + Dexametasona",
      "3,5mg/mL eq a 3mg/mL base + 1,0mg/mL",
      "sus oft",
      "frasco"
    ],
    "Cloridrato de Ciprofloxacino + Dexametasona 3,0mg/mL + 1,0mg/mL": [
      "Cloridrato de Ciprofloxacino + Dexametasona",
      "3,0mg/mL + 1,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Clobutinol + Succinato de Doxilamina 4mg/mL + 0,75mg/mL": [
      "Cloridrato de Clobutinol + Succinato de Doxilamina",
      "4mg/mL + 0,75mg/mL",
      "xpe",
      "frasco"
    ],
    "Cloridrato de Clobutinol + Succinato de Doxilamina 48mg/mL + 9mg/mL": [
      "Cloridrato de Clobutinol + Succinato de Doxilamina",
      "48mg/mL + 9mg/mL",
      "sol oral",
      "frasco"
    ],
    "Cloridrato de Delapril + Dicloridrato de Manidipino 30mg + 10mg": [
      "Cloridrato de Delapril + Dicloridrato de Manidipino",
      "30mg + 10mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Delapril + Dicloridrato de Manidipino 30mg + 10mg": [
      "Cloridrato de Delapril + Dicloridrato de Manidipino",
      "30mg + 10mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Difenidramina + Cloreto de Amônio + Citrato de Sódio 5mg + 50mg + 10mg": [
      "Cloridrato de Difenidramina + Cloreto de Amônio + Citrato de Sódio",
      "5mg + 50mg + 10mg",
      "past",
      "frasco"
    ],
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 5mg": [
      "Cloridrato de Donepezila + Cloridrato de Memantina",
      "10mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 10mg": [
      "Cloridrato de Donepezila + Cloridrato de Memantina",
      "10mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 15mg": [
      "Cloridrato de Donepezila + Cloridrato de Memantina",
      "10mg + 15mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Donepezila + Cloridrato de Memantina 10mg + 20mg": [
      "Cloridrato de Donepezila + Cloridrato de Memantina",
      "10mg + 20mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Dorzolamida + Maleato de Timolol 20mg/mL + 5,0mg/mL": [
      "Cloridrato de Dorzolamida + Maleato de Timolol",
      "20mg/mL + 5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina 60mg + 120mg": [
      "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina",
      "60mg + 120mg",
      "com rev camada dupla",
      "comprimido"
    ],
    "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina 180mg + 240mg": [
      "Cloridrato de Fexofenadina + Cloridrato de Pseudoefedrina",
      "180mg + 240mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,25% + 9,1mcg/mL": [
      "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina",
      "0,25% + 9,1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,5% + 9,1mcg/mL": [
      "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina",
      "0,5% + 9,1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina 0,75% + 9,1mcg/mL": [
      "Cloridrato de Levobupivacaína + Hemitartarato de Epinefrina",
      "0,75% + 9,1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Lidocaína + Cloreto de Benzalcônio 25mg/mL + 1,30mg/mL": [
      "Cloridrato de Lidocaína + Cloreto de Benzalcônio",
      "25mg/mL + 1,30mg/mL",
      "sol top (spr)",
      "frasco"
    ],
    "Cloridrato de Lidocaína + Hemitartarato de Epinefrina 10mg/mL + 9,1mcg/mL": [
      "Cloridrato de Lidocaína + Hemitartarato de Epinefrina",
      "10mg/mL + 9,1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Lidocaína + Hemitartarato de Epinefrina 20mg/mL + 9,1mcg/mL": [
      "Cloridrato de Lidocaína + Hemitartarato de Epinefrina",
      "20mg/mL + 9,1mcg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Mepivacaína + Epinefrina 20mg/mL + 0,01mg/mL": [
      "Cloridrato de Mepivacaína + Epinefrina",
      "20mg/mL + 0,01mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Metformina + Glibenclamida 250mg + 1,25mg": [
      "Cloridrato de Metformina + Glibenclamida",
      "250mg + 1,25mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metformina + Glibenclamida 500mg + 2,5mg": [
      "Cloridrato de Metformina + Glibenclamida",
      "500mg + 2,5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metformina + Glibenclamida 500mg + 5,0mg": [
      "Cloridrato de Metformina + Glibenclamida",
      "500mg + 5,0mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metformina + Glicazida 500mg + 30mg": [
      "Cloridrato de Metformina + Glicazida",
      "500mg + 30mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Metformina + Linagliptina 500mg + 2,5mg": [
      "Cloridrato de Metformina + Linagliptina",
      "500mg + 2,5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metformina + Linagliptina 850mg + 2,5mg": [
      "Cloridrato de Metformina + Linagliptina",
      "850mg + 2,5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metformina + Linagliptina 1.000mg + 2,5mg": [
      "Cloridrato de Metformina + Linagliptina",
      "1.000mg + 2,5mg",
      "com rev",
      "comprimido"
    ],
    "Cloridrato de Metoclopramida + Dimeticona + Pepsina 7mg + 40mg + 50mg": [
      "Cloridrato de Metoclopramida + Dimeticona + Pepsina",
      "7mg + 40mg + 50mg",
      "cap dura",
      "cápsula"
    ],
    "Cloridrato de Moxifloxacino + Fosfato de Dexametasona 5mg/mL + 1mg/mL": [
      "Cloridrato de Moxifloxacino + Fosfato de Dexametasona",
      "5mg/mL + 1mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Nafazolina + Maleato de Feniramina 0,25mg/mL + 3mg/mL": [
      "Cloridrato de Nafazolina + Maleato de Feniramina",
      "0,25mg/mL + 3mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Nafazolina + Sulfato de Zinco Heptaidratado 0,15mg/mL + 0,30mg/mL": [
      "Cloridrato de Nafazolina + Sulfato de Zinco Heptaidratado",
      "0,15mg/mL + 0,30mg/mL",
      "sol oft",
      "frasco"
    ],
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 5mg + 2,5mg": [
      "Cloridrato de Oxicodona + Cloridrato de Naloxona",
      "5mg + 2,5mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 10mg + 5mg": [
      "Cloridrato de Oxicodona + Cloridrato de Naloxona",
      "10mg + 5mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 20mg + 10mg": [
      "Cloridrato de Oxicodona + Cloridrato de Naloxona",
      "20mg + 10mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxicodona + Cloridrato de Naloxona 40mg + 20mg": [
      "Cloridrato de Oxicodona + Cloridrato de Naloxona",
      "40mg + 20mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Oxitetraciclina + Hidrocortisona 30mg/g + 10mg/g": [
      "Cloridrato de Oxitetraciclina + Hidrocortisona",
      "30mg/g + 10mg/g",
      "pom top",
      "bisnaga"
    ],
    "Cloridrato de Oxitetraciclina + Lidocaína 100mg/mL + 20mg/mL": [
      "Cloridrato de Oxitetraciclina + Lidocaína",
      "100mg/mL + 20mg/mL",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B 30mg/g + 10.000U/g": [
      "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B",
      "30mg/g + 10.000U/g",
      "pom top",
      "bisnaga"
    ],
    "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B 5mg/g + 10.000U/g": [
      "Cloridrato de Oxitetraciclina + Sulfato de Polimixina B",
      "5mg/g + 10.000U/g",
      "pom oft",
      "bisnaga"
    ],
    "Cloridrato de Palonosetrona + Netupitanto 0,56mg + 300mg": [
      "Cloridrato de Palonosetrona + Netupitanto",
      "0,56mg + 300mg",
      "cap dura",
      "cápsula"
    ],
    "Cloridrato de Piridoxina + Cloridrato de Tiamina (Ampola 1) + Cianocobalamina + Fosfato de Dexametasona (Ampola 2) 100mg + 100mg (ampola 1) + 5mg + 4,37mg (ampola 2)": [
      "Cloridrato de Piridoxina + Cloridrato de Tiamina (Ampola 1) + Cianocobalamina + Fosfato de Dexametasona (Ampola 2)",
      "100mg + 100mg (ampola 1) + 5mg + 4,37mg (ampola 2)",
      "sol inj (kit 2 ampolas)",
      "kit 2 ampolas"
    ],
    "Cloridrato de Prilocaína + Felipressina 30mg/mL + 0,03UI/mL (0,54mcg/mL)": [
      "Cloridrato de Prilocaína + Felipressina",
      "30mg/mL + 0,03UI/mL (0,54mcg/mL)",
      "sol inj",
      "frasco"
    ],
    "Cloridrato de Propranolol + Hidroclorotiazida 40mg + 12,5mg": [
      "Cloridrato de Propranolol + Hidroclorotiazida",
      "40mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Propranolol + Hidroclorotiazida 80mg + 12,5mg": [
      "Cloridrato de Propranolol + Hidroclorotiazida",
      "80mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Tansulosina + Succinato de Solifenacina 0,4mg + 6mg": [
      "Cloridrato de Tansulosina + Succinato de Solifenacina",
      "0,4mg + 6mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Cloridrato de Tramadol + Diclofenaco Sódico 25mg + 25mg": [
      "Cloridrato de Tramadol + Diclofenaco Sódico",
      "25mg + 25mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Tramadol + Diclofenaco Sódico 50mg + 50mg": [
      "Cloridrato de Tramadol + Diclofenaco Sódico",
      "50mg + 50mg",
      "com",
      "comprimido"
    ],
    "Cloridrato de Tramadol + Paracetamol 37,5mg + 325mg": [
      "Cloridrato de Tramadol + Paracetamol",
      "37,5mg + 325mg",
      "com rev",
      "comprimido"
    ],
    "Clortalidona + Cloridrato de Amilorida 25mg + 5mg": [
      "Clortalidona + Cloridrato de Amilorida",
      "25mg + 5mg",
      "com",
      "comprimido"
    ],
    "Clotrimazol + Acetato de Dexametasona 10mg/g + 0,443mg/g": [
      "Clotrimazol + Acetato de Dexametasona",
      "10mg/g + 0,443mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Dapagliflozina + Cloridrato de Metformina 5mg + 500mg": [
      "Dapagliflozina + Cloridrato de Metformina",
      "5mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Dapagliflozina + Cloridrato de Metformina 5mg + 1.000mg": [
      "Dapagliflozina + Cloridrato de Metformina",
      "5mg + 1.000mg",
      "com rev",
      "comprimido"
    ],
    "Dapagliflozina + Cloridrato de Metformina 10mg + 500mg": [
      "Dapagliflozina + Cloridrato de Metformina",
      "10mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Dapagliflozina + Cloridrato de Metformina 10mg + 1.000mg": [
      "Dapagliflozina + Cloridrato de Metformina",
      "10mg + 1.000mg",
      "com rev",
      "comprimido"
    ],
    "Desloratadina + Sulfato de Pseudoefedrina 2,5mg + 120mg": [
      "Desloratadina + Sulfato de Pseudoefedrina",
      "2,5mg + 120mg",
      "com lib modificada",
      "comprimido"
    ],
    "Desogestrel + Etinilestradiol 0,025mg + 0,04mg (com branco) + 0,125mg + 0,03mg (com azul)": [
      "Desogestrel + Etinilestradiol",
      "0,025mg + 0,04mg (com branco) + 0,125mg + 0,03mg (com azul)",
      "com",
      "comprimido"
    ],
    "Desogestrel + Etinilestradiol 150mcg + 20mcg (com branco) / 0mcg + 10mcg (com amarelo)": [
      "Desogestrel + Etinilestradiol",
      "150mcg + 20mcg (com branco) / 0mcg + 10mcg (com amarelo)",
      "com rev",
      "comprimido"
    ],
    "Desoximetasona + Sulfato de Neomicina 2,5mg + 7,1mg": [
      "Desoximetasona + Sulfato de Neomicina",
      "2,5mg + 7,1mg",
      "pom derm",
      "bisnaga"
    ],
    "Dexametasona (Fosfato Dissódico) + Sulfato de Neomicina 1mg/mL + 3,5mg/mL": [
      "Dexametasona (Fosfato Dissódico) + Sulfato de Neomicina",
      "1mg/mL + 3,5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B 1mg/mL + 5,0 mg/mL + 6.000UI/mL": [
      "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B",
      "1mg/mL + 5,0 mg/mL + 6.000UI/mL",
      "sus oft",
      "frasco"
    ],
    "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B 1mg/g + 5,0 mg/g + 6.000 UI/g": [
      "Dexametasona + Sulfato de Neomicina + Sulfato de Polimixina B",
      "1mg/g + 5,0 mg/g + 6.000 UI/g",
      "pom oft",
      "bisnaga"
    ],
    "Diclofenado Sódico + Fosfato de Codeína 50mg + 50mg": [
      "Diclofenado Sódico + Fosfato de Codeína",
      "50mg + 50mg",
      "com rev",
      "comprimido"
    ],
    "Diisetionato de Hexamidina + Cloridrato de Tetracaina 1mg/mL + 0,5mg/mL": [
      "Diisetionato de Hexamidina + Cloridrato de Tetracaina",
      "1mg/mL + 0,5mg/mL",
      "colut spr",
      "frasco"
    ],
    "Dimenidrinato + Cloridrato de Piridoxina 25mg/mL + 5mg/mL": [
      "Dimenidrinato + Cloridrato de Piridoxina",
      "25mg/mL + 5mg/mL",
      "sol or",
      "frasco"
    ],
    "Dimenidrinato + Cloridrato de Piridoxina 50mg + 10mg": [
      "Dimenidrinato + Cloridrato de Piridoxina",
      "50mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Dimenidrinato + Cloridrato de Piridoxina + Glicose + Frutose 3mg/mL + 5mg/mL + 100mg/mL + 100mg/mL": [
      "Dimenidrinato + Cloridrato de Piridoxina + Glicose + Frutose",
      "3mg/mL + 5mg/mL + 100mg/mL + 100mg/mL",
      "sol inj",
      "frasco"
    ],
    "Dipirona Sódica + Cafeína 500mg + 65mg": [
      "Dipirona Sódica + Cafeína",
      "500mg + 65mg",
      "com",
      "comprimido"
    ],
    "Dipirona Sódica + Cafeína + Dipirona Sódica + Maleato de Clorfenamina 250mg + 30mg (verde) + 250mg + 2,0mg (amarelo)": [
      "Dipirona Sódica + Cafeína + Dipirona Sódica + Maleato de Clorfenamina",
      "250mg + 30mg (verde) + 250mg + 2,0mg (amarelo)",
      "com rev",
      "comprimido"
    ],
    "Dipirona Sodica + Cloridrato Prometazina + Cloridrato de Adifenina 500mg + 5mg + 10mg": [
      "Dipirona Sodica + Cloridrato Prometazina + Cloridrato de Adifenina",
      "500mg + 5mg + 10mg",
      "com",
      "comprimido"
    ],
    "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina 300mg + 50mg + 35mg": [
      "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina",
      "300mg + 50mg + 35mg",
      "com",
      "comprimido"
    ],
    "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina 300mg/mL + 50mg/mL + 35mg/mL": [
      "Dipirona Sódica Mono-Hidratada + Cafeína Anidra + Citrato de Orfenadrina",
      "300mg/mL + 50mg/mL + 35mg/mL",
      "sol or",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado 100mcg/dose + 6mcg/dose": [
      "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado",
      "100mcg/dose + 6mcg/dose",
      "aer or + disp or",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado 100mcg/dose + 6mcg/dose": [
      "Dipropionato de Beclometasona + Fumarato de Formotorol Diidratado",
      "100mcg/dose + 6mcg/dose",
      "pó inal + disp or",
      "cp"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "50mcg/dose + 100mcg/dose",
      "sol aer inal or + inal",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "50mcg/dose + 100mcg/dose",
      "sol aer inal or + espç",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 50mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "50mcg/dose + 100mcg/dose",
      "sol aer inal + inal + espç",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "250mcg/dose + 100mcg/dose",
      "sol aer inal or + espç",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "250mcg/dose + 100mcg/dose",
      "sol aer inal + inal + espç",
      "frasco"
    ],
    "Dipropionato de Beclometasona + Sulfato de Salbutamol 250mcg/dose + 100mcg/dose": [
      "Dipropionato de Beclometasona + Sulfato de Salbutamol",
      "250mcg/dose + 100mcg/dose",
      "sol  aer inal or+ inal",
      "frasco"
    ],
    "Dipropionato de Betametasona  + Ácido Salicílico 0,64mg + 30mg": [
      "Dipropionato de Betametasona  + Ácido Salicílico",
      "0,64mg + 30mg",
      "pom derm",
      "bisnaga"
    ],
    "Dipropionato de Betametasona + Ácido Salicílico 0,64mg + 20mg": [
      "Dipropionato de Betametasona + Ácido Salicílico",
      "0,64mg + 20mg",
      "sol top",
      "frasco"
    ],
    "Dipropionato de Betametasona + Fosfato Dissódico de Betametasona 5,0mg/mL + 2,0mg/mL": [
      "Dipropionato de Betametasona + Fosfato Dissódico de Betametasona",
      "5,0mg/mL + 2,0mg/mL",
      "sus inj",
      "frasco"
    ],
    "Dipropionato de Betametasona + Sulfato de Gentamicina 0,64mg  + 1mg": [
      "Dipropionato de Betametasona + Sulfato de Gentamicina",
      "0,64mg  + 1mg",
      "crem derm",
      "bisnaga"
    ],
    "Dipropionato de Betametasona + Sulfato de Gentamicina 0,64mg + 1mg": [
      "Dipropionato de Betametasona + Sulfato de Gentamicina",
      "0,64mg + 1mg",
      "pom derm",
      "bisnaga"
    ],
    "Drospirenona + Clatrato de Etinilestradiol Betaciclodextrina 3mg + 0,02mg": [
      "Drospirenona + Clatrato de Etinilestradiol Betaciclodextrina",
      "3mg + 0,02mg",
      "com rev",
      "comprimido"
    ],
    "Drospirenona + Etinilestradiol 3mg + 0,03mg": [
      "Drospirenona + Etinilestradiol",
      "3mg + 0,03mg",
      "com rev",
      "comprimido"
    ],
    "Drospirenona + Etinilestradiol 3mg + 0,03mg": [
      "Drospirenona + Etinilestradiol",
      "3mg + 0,03mg",
      "com rev uso contínuo",
      "comprimido"
    ],
    "Dutasterida + Cloridrato de Tansulosina 0,5mg + 0,4mg": [
      "Dutasterida + Cloridrato de Tansulosina",
      "0,5mg + 0,4mg",
      "cap dura lib prol",
      "cápsula"
    ],
    "Empagliflozina + Linagliptina 10mg + 5mg": [
      "Empagliflozina + Linagliptina",
      "10mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Empagliflozina + Linagliptina 25mg + 5mg": [
      "Empagliflozina + Linagliptina",
      "25mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Enantato de Noretisterona + Valerato de Estradiol 50mg/1mL + 5mg/1mL": [
      "Enantato de Noretisterona + Valerato de Estradiol",
      "50mg/1mL + 5mg/1mL",
      "sol ole inj",
      "frasco"
    ],
    "Entricitabina + Fumarato de Tenofovir Desoproxila 200mg + 300mg": [
      "Entricitabina + Fumarato de Tenofovir Desoproxila",
      "200mg + 300mg",
      "com rev",
      "comprimido"
    ],
    "Estradiol (Valerato) + Dienogeste 3mg + 0mg / 2mg + 2mg / 3mg + 1mg": [
      "Estradiol (Valerato) + Dienogeste",
      "3mg + 0mg / 2mg + 2mg / 3mg + 1mg",
      "com rev",
      "comprimido"
    ],
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 50mcg + 140mcg": [
      "Estradiol (Hemihidrato) + Acetato de Noretisterona",
      "50mcg + 140mcg",
      "ades transd",
      "adesivo"
    ],
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 3,2mg + 11,2mg": [
      "Estradiol (Hemihidrato) + Acetato de Noretisterona",
      "3,2mg + 11,2mg",
      "ades transd",
      "adesivo"
    ],
    "Estradiol (Hemihidrato) + Acetato de Noretisterona 0,5mg + 0,1mg": [
      "Estradiol (Hemihidrato) + Acetato de Noretisterona",
      "0,5mg + 0,1mg",
      "com rev",
      "comprimido"
    ],
    "Estradiol + Didrogesterona 1mg + 5mg": [
      "Estradiol + Didrogesterona",
      "1mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Estradiol + Didrogesterona 1mg + 0mg (com branco) / 1mg + 10mg (com cinza)": [
      "Estradiol + Didrogesterona",
      "1mg + 0mg (com branco) / 1mg + 10mg (com cinza)",
      "com rev",
      "comprimido"
    ],
    "Estradiol Hemiidratado + Drospirenona 1mg + 2mg": [
      "Estradiol Hemiidratado + Drospirenona",
      "1mg + 2mg",
      "com rev",
      "comprimido"
    ],
    "Estradiol + Estradiol + Trimegestona 1mg + 1mg + 0,250mg": [
      "Estradiol + Estradiol + Trimegestona",
      "1mg + 1mg + 0,250mg",
      "drag",
      "drágea"
    ],
    "Etinilestradiol + Desogestrel 0,02mg + 0,15mg": [
      "Etinilestradiol + Desogestrel",
      "0,02mg + 0,15mg",
      "com",
      "comprimido"
    ],
    "Etinilestradiol + Desogestrel 0,03mg + 0,15mg": [
      "Etinilestradiol + Desogestrel",
      "0,03mg + 0,15mg",
      "com",
      "comprimido"
    ],
    "Etinilestradiol + Etonogestrel 2,7mg + 11,7mg": [
      "Etinilestradiol + Etonogestrel",
      "2,7mg + 11,7mg",
      "anel vag",
      "anel"
    ],
    "Etinilestradiol + Gestodeno 0,020mg + 0,075mg": [
      "Etinilestradiol + Gestodeno",
      "0,020mg + 0,075mg",
      "drag",
      "drágea"
    ],
    "Etinilestradiol + Gestodeno 0,03mg + 0,075mg": [
      "Etinilestradiol + Gestodeno",
      "0,03mg + 0,075mg",
      "com rev",
      "comprimido"
    ],
    "Etinilestradiol + Norelgestromina 0,6mg + 6mg": [
      "Etinilestradiol + Norelgestromina",
      "0,6mg + 6mg",
      "ades",
      "adesivo"
    ],
    "Etinilestradiol + Noretindrona 0,05mg + 0,25mg": [
      "Etinilestradiol + Noretindrona",
      "0,05mg + 0,25mg",
      "com",
      "comprimido"
    ],
    "Ezetimiba + Sinvastatina 10mg + 10mg": [
      "Ezetimiba + Sinvastatina",
      "10mg + 10mg",
      "com",
      "comprimido"
    ],
    "Ezetimiba + Sinvastatina 10mg + 20mg": [
      "Ezetimiba + Sinvastatina",
      "10mg + 20mg",
      "com",
      "comprimido"
    ],
    "Ezetimiba + Sinvastatina 10mg + 40mg": [
      "Ezetimiba + Sinvastatina",
      "10mg + 40mg",
      "com",
      "comprimido"
    ],
    "Ezetimiba + Sinvastatina 10mg + 80mg": [
      "Ezetimiba + Sinvastatina",
      "10mg + 80mg",
      "com",
      "comprimido"
    ],
    "Felodipino + Succinato de Metoprolol 5mg + 50mg": [
      "Felodipino + Succinato de Metoprolol",
      "5mg + 50mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 500mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "50mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50 mg + 850 mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "50 mg + 850 mg",
      "com rev",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50 mg + 1.000 mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "50 mg + 1.000 mg",
      "com rev",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 500mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "50mg + 500mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 50mg + 1.000mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "50mg + 1.000mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Fosfato de Sitagliptina + Cloridrato de Metformina 100mg + 1.000mg": [
      "Fosfato de Sitagliptina + Cloridrato de Metformina",
      "100mg + 1.000mg",
      "com rev lib prol",
      "comprimido"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "12mcg/dose + 400mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 100mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 200mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 100mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 200mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "12mcg/dose + 400mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 200mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "12mcg/dose + 200mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 12mcg/dose + 400mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "12mcg/dose + 400mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 100mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 100mcg/dose",
      "inal sus aer inal or",
      "unidade"
    ],
    "Fumarato de Formoterol Diidratado + Budesonida 6mcg/dose + 200mcg/dose": [
      "Fumarato de Formoterol Diidratado + Budesonida",
      "6mcg/dose + 200mcg/dose",
      "inal sus aer inal or",
      "unidade"
    ],
    "Fumarato de Formoterol Diidratado + Propionato de Fluticasona 12mcg/dose + 250mcg/dose": [
      "Fumarato de Formoterol Diidratado + Propionato de Fluticasona",
      "12mcg/dose + 250mcg/dose",
      "cap dura po inal",
      "cápsula"
    ],
    "Furoato de Fluticasona + Trifenatato de Vilanterol 100mcg + 25mcg": [
      "Furoato de Fluticasona + Trifenatato de Vilanterol",
      "100mcg + 25mcg",
      "pó inal",
      "cp"
    ],
    "Furoato de Fluticasona + Trifenatato de Vilanterol 200mcg + 25mcg": [
      "Furoato de Fluticasona + Trifenatato de Vilanterol",
      "200mcg + 25mcg",
      "pó inal",
      "cp"
    ],
    "Gatifloxacino + Acetato de Prednisolona 3mg/mL + 10mg/mL": [
      "Gatifloxacino + Acetato de Prednisolona",
      "3mg/mL + 10mg/mL",
      "sus oft",
      "frasco"
    ],
    "Gestodeno + Etinilestradiol 0,075mg + 0,03mg": [
      "Gestodeno + Etinilestradiol",
      "0,075mg + 0,03mg",
      "com rev uso contínuo",
      "comprimido"
    ],
    "Gestodeno + Etinilestradiol 0,06mg + 0,015mg": [
      "Gestodeno + Etinilestradiol",
      "0,06mg + 0,015mg",
      "com rev",
      "comprimido"
    ],
    "Glimepirida + Metformina (Cloridrato) 2,0mg + 1.000 mg": [
      "Glimepirida + Metformina (Cloridrato)",
      "2,0mg + 1.000 mg",
      "com rev",
      "comprimido"
    ],
    "Glimepirida + Metformina (Cloridrato) 4,0mg + 1.000 mg": [
      "Glimepirida + Metformina (Cloridrato)",
      "4,0mg + 1.000 mg",
      "com rev",
      "comprimido"
    ],
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 10mg + 6,25mg": [
      "Hemifumarato de Bisoprolol + Hidroclorotiazida",
      "10mg + 6,25mg",
      "com rev",
      "comprimido"
    ],
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 2,5mg + 6,25mg": [
      "Hemifumarato de Bisoprolol + Hidroclorotiazida",
      "2,5mg + 6,25mg",
      "com rev",
      "comprimido"
    ],
    "Hemifumarato de Bisoprolol + Hidroclorotiazida 5mg + 6,25mg": [
      "Hemifumarato de Bisoprolol + Hidroclorotiazida",
      "5mg + 6,25mg",
      "com rev",
      "comprimido"
    ],
    "Hialuronidase + Valerato de Betametasona 150UTR/g + 2,5mg/g": [
      "Hialuronidase + Valerato de Betametasona",
      "150UTR/g + 2,5mg/g",
      "pom",
      "bisnaga"
    ],
    "Hidrato de Calcipotriol + Dipropionato de Betametasona 50mcg/g + 0,5mg/g": [
      "Hidrato de Calcipotriol + Dipropionato de Betametasona",
      "50mcg/g + 0,5mg/g",
      "gel",
      "frasco"
    ],
    "Hidrato de Calcipotriol + Dipropionato de Betametasona 50mcg/g + 0,5mg/g": [
      "Hidrato de Calcipotriol + Dipropionato de Betametasona",
      "50mcg/g + 0,5mg/g",
      "pom",
      "bisnaga"
    ],
    "Hidrocortisona + Sulfato de Neomicina + Sulfato de Polimixina B 10.000UI + 5mg/mL + 10mg/mL": [
      "Hidrocortisona + Sulfato de Neomicina + Sulfato de Polimixina B",
      "10.000UI + 5mg/mL + 10mg/mL",
      "sups otol",
      "frasco"
    ],
    "Hidroquinona + Fluocinolona Acetonida + Tretinoína 40mg/g + 0,1mg/g + 0,5mg/g": [
      "Hidroquinona + Fluocinolona Acetonida + Tretinoína",
      "40mg/g + 0,1mg/g + 0,5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Imipenem + Cilastatina Sódica 500mg + 500mg": [
      "Imipenem + Cilastatina Sódica",
      "500mg + 500mg",
      "po sol inj",
      "unidade"
    ],
    "Ipratrópio (Brometo) + Fenoterol (Bromidrato) 0,02mg/dose + 0,05mg/dose": [
      "Ipratrópio (Brometo) + Fenoterol (Bromidrato)",
      "0,02mg/dose + 0,05mg/dose",
      "sol aer inal or+ inal",
      "frasco"
    ],
    "Irbesartana + Hidroclorotiazida 150mg + 12,5mg": [
      "Irbesartana + Hidroclorotiazida",
      "150mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Irbesartana + Hidroclorotiazida 300mg + 12,5mg": [
      "Irbesartana + Hidroclorotiazida",
      "300mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Irbesartana + Hidroclorotiazida 300mg + 25mg": [
      "Irbesartana + Hidroclorotiazida",
      "300mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Isetionato de Hexamidina + Cloridrato de Tetracaína 1mg/mL + 0,5mg/mL": [
      "Isetionato de Hexamidina + Cloridrato de Tetracaína",
      "1mg/mL + 0,5mg/mL",
      "spr or",
      "frasco"
    ],
    "Isotretinoina + Eritromicina 0,5mg/g + 20,0mg/g": [
      "Isotretinoina + Eritromicina",
      "0,5mg/g + 20,0mg/g",
      "gel",
      "frasco"
    ],
    "Isoniazida + Rifampicina 150 mg + 300 mg": [
      "Isoniazida + Rifampicina",
      "150 mg + 300 mg",
      "com ver",
      "comprimido"
    ],
    "Lamivudina + Fumarato de Tenofovir  Desoproxila 300mg + 300mg": [
      "Lamivudina + Fumarato de Tenofovir  Desoproxila",
      "300mg + 300mg",
      "com rev",
      "comprimido"
    ],
    "Lamivudina + Zidovudina 150mg + 300mg": [
      "Lamivudina + Zidovudina",
      "150mg + 300mg",
      "com rev",
      "comprimido"
    ],
    "Lansoprazol + Levofloxacino + Amoxicilina (Triidratada) 30mg + 500mg + 500mg": [
      "Lansoprazol + Levofloxacino + Amoxicilina (Triidratada)",
      "30mg + 500mg + 500mg",
      "cap dura  lib retard + comp rev + cap dura",
      "cápsula"
    ],
    "Lansoprazol + Claritromicina + Amoxicilina (Triidratada) 30mg + 500mg + 500mg": [
      "Lansoprazol + Claritromicina + Amoxicilina (Triidratada)",
      "30mg + 500mg + 500mg",
      "cap dura lib retard + comp rev + cap dura",
      "cápsula"
    ],
    "Latanoprosta + Maleato de Timolol 50mcg/mL + 5mg/mL": [
      "Latanoprosta + Maleato de Timolol",
      "50mcg/mL + 5mg/mL",
      "sol oft",
      "frasco"
    ],
    "Levodopa + Carbidopa + Entacapona 50mg + 12,5mg + 200mg": [
      "Levodopa + Carbidopa + Entacapona",
      "50mg + 12,5mg + 200mg",
      "com rev",
      "comprimido"
    ],
    "Levodopa + Carbidopa + Entacapona 100mg + 25mg + 200mg": [
      "Levodopa + Carbidopa + Entacapona",
      "100mg + 25mg + 200mg",
      "com rev",
      "comprimido"
    ],
    "Levodopa + Carbidopa + Entacapona 150mg + 37,5mg + 200mg": [
      "Levodopa + Carbidopa + Entacapona",
      "150mg + 37,5mg + 200mg",
      "com rev",
      "comprimido"
    ],
    "Levodopa + Cloridrato de Benserazida 200mg + 50mg": [
      "Levodopa + Cloridrato de Benserazida",
      "200mg + 50mg",
      "com",
      "comprimido"
    ],
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg": [
      "Levodopa + Cloridrato de Benserazida",
      "100mg + 25mg",
      "com",
      "comprimido"
    ],
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg": [
      "Levodopa + Cloridrato de Benserazida",
      "100mg + 25mg",
      "com sus",
      "comprimido"
    ],
    "Levodopa + Cloridrato de Benserazida 100mg + 25mg": [
      "Levodopa + Cloridrato de Benserazida",
      "100mg + 25mg",
      "cap dura",
      "cápsula"
    ],
    "Levodopa + Levodopa + Cloridrato de Benserazida 150mg + 50mg + 50mg": [
      "Levodopa + Levodopa + Cloridrato de Benserazida",
      "150mg + 50mg + 50mg",
      "com camada tripla",
      "comprimido"
    ],
    "Levonogestrel + Etinilestradiol 0,25mg + 0,05mg": [
      "Levonogestrel + Etinilestradiol",
      "0,25mg + 0,05mg",
      "drag",
      "drágea"
    ],
    "Levonorgestrel + Etinilestradiol 0,10mg + 0,02mg": [
      "Levonorgestrel + Etinilestradiol",
      "0,10mg + 0,02mg",
      "com rev",
      "comprimido"
    ],
    "Levonorgestrel + Etinilestradiol 0,15mg + 0,03mg": [
      "Levonorgestrel + Etinilestradiol",
      "0,15mg + 0,03mg",
      "drag",
      "drágea"
    ],
    "Levonorgestrel + Etinilestradiol 0,25mg + 0,05mg": [
      "Levonorgestrel + Etinilestradiol",
      "0,25mg + 0,05mg",
      "com",
      "comprimido"
    ],
    "Levonorgestrel + Etinilestradiol 0,05mg + 0,03mg / 0,075mg + 0,04mg / 0,125mg + 0,03mg": [
      "Levonorgestrel + Etinilestradiol",
      "0,05mg + 0,03mg / 0,075mg + 0,04mg / 0,125mg + 0,03mg",
      "drag",
      "drágea"
    ],
    "Lidocaína + Prilocaína 25mg/g + 25mg/g": [
      "Lidocaína + Prilocaína",
      "25mg/g + 25mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Lidocaína + Tetracaína 70mg/g + 70mg/g": [
      "Lidocaína + Tetracaína",
      "70mg/g + 70mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Lopinavir + Ritonavir 100mg + 25mg": [
      "Lopinavir + Ritonavir",
      "100mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Lopinavir + Ritonavir 200 mg + 50mg": [
      "Lopinavir + Ritonavir",
      "200 mg + 50mg",
      "com rev",
      "comprimido"
    ],
    "Lopinavir + Ritonavir 80mg/mL + 20mg/mL": [
      "Lopinavir + Ritonavir",
      "80mg/mL + 20mg/mL",
      "sol or",
      "frasco"
    ],
    "Loratadina + Sulfato de Pseudoefedrina 1mg/mL + 12mg/mL": [
      "Loratadina + Sulfato de Pseudoefedrina",
      "1mg/mL + 12mg/mL",
      "xpe",
      "frasco"
    ],
    "Losartana Potássica + Hidroclorotiazida 100mg + 25mg": [
      "Losartana Potássica + Hidroclorotiazida",
      "100mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Losartana Potássica + Hidroclorotiazida 50mg + 12,5mg": [
      "Losartana Potássica + Hidroclorotiazida",
      "50mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Losartana Potássica + Besilato de Anlodipino 50mg + 5mg": [
      "Losartana Potássica + Besilato de Anlodipino",
      "50mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 0,4mg/mL + 1mg/mL": [
      "Maleato de Bronfeniramina + Cloridrato de Fenilefrina",
      "0,4mg/mL + 1mg/mL",
      "xarope",
      "frasco"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 2mg/mL + 2,5mg/mL": [
      "Maleato de Bronfeniramina + Cloridrato de Fenilefrina",
      "2mg/mL + 2,5mg/mL",
      "sol oral",
      "frasco"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Fenilefrina 12mg + 15mg": [
      "Maleato de Bronfeniramina + Cloridrato de Fenilefrina",
      "12mg + 15mg",
      "com ver lib prol",
      "comprimido"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 0,2mg/mL + 3mg/mL": [
      "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina",
      "0,2mg/mL + 3mg/mL",
      "elx",
      "frasco"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 4mg + 60mg": [
      "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina",
      "4mg + 60mg",
      "cap mole",
      "cápsula"
    ],
    "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina 0,2mg/mL + 3mg/mL": [
      "Maleato de Bronfeniramina + Cloridrato de Pseudoefedrina",
      "0,2mg/mL + 3mg/mL",
      "sol or",
      "frasco"
    ],
    "Maleato de Dexclorfeniramina + Betametasona 2,0mg + 0,25mg": [
      "Maleato de Dexclorfeniramina + Betametasona",
      "2,0mg + 0,25mg",
      "com",
      "comprimido"
    ],
    "Maleato de Dexclorfeniramina + Betametasona 0,4mg/mL + 0,05mg/mL": [
      "Maleato de Dexclorfeniramina + Betametasona",
      "0,4mg/mL + 0,05mg/mL",
      "xpe",
      "frasco"
    ],
    "Maleato de Dexclorfeniramina + Sulfato de Pseudoefedrina + Guaifenesina 0,4mg/mL + 4mg/mL + 20mg/mL": [
      "Maleato de Dexclorfeniramina + Sulfato de Pseudoefedrina + Guaifenesina",
      "0,4mg/mL + 4mg/mL + 20mg/mL",
      "sol oral",
      "frasco"
    ],
    "Maleato de Enalapril + Besilato de Anlodipino 2,5mg + 10mg": [
      "Maleato de Enalapril + Besilato de Anlodipino",
      "2,5mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Maleato de Enalapril + Besilato de Anlodipino 5,0mg + 10mg": [
      "Maleato de Enalapril + Besilato de Anlodipino",
      "5,0mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Maleato de Enalapril + Besilato de Anlodipino 5,0mg + 20mg": [
      "Maleato de Enalapril + Besilato de Anlodipino",
      "5,0mg + 20mg",
      "cap dura",
      "cápsula"
    ],
    "Maleato de Indacaterol + Brometo de Glicopirrônio 110mcg + 50mcg/dose": [
      "Maleato de Indacaterol + Brometo de Glicopirrônio",
      "110mcg + 50mcg/dose",
      "cap dura  po inal or + inal",
      "cápsula"
    ],
    "Maleato de Mepiramina + Hidróxido de Alumínio + Ácido Acetilsalicílico + Cafeína 15mg + 150mg + 150mg + 50mg": [
      "Maleato de Mepiramina + Hidróxido de Alumínio + Ácido Acetilsalicílico + Cafeína",
      "15mg + 150mg + 150mg + 50mg",
      "com",
      "comprimido"
    ],
    "Medroxiprogesterona + Estradiol 25mg/0,5mL + 5mg/0,5mL": [
      "Medroxiprogesterona + Estradiol",
      "25mg/0,5mL + 5mg/0,5mL",
      "sus inj",
      "frasco"
    ],
    "Mepartricina + Cloridrato de Tetraciclina 5.000UI/g + 20mg/g": [
      "Mepartricina + Cloridrato de Tetraciclina",
      "5.000UI/g + 20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Mesilato de Diidroergotamina + Paracetamol + Cafeína 1mg + 450mg + 40mg": [
      "Mesilato de Diidroergotamina + Paracetamol + Cafeína",
      "1mg + 450mg + 40mg",
      "drag",
      "drágea"
    ],
    "Mesilato de Diidroergotamina + Paracetamol + Cafeína + Cloridrato de Metoclopramida 1mg + 450mg + 75mg + 10mg": [
      "Mesilato de Diidroergotamina + Paracetamol + Cafeína + Cloridrato de Metoclopramida",
      "1mg + 450mg + 75mg + 10mg",
      "com",
      "comprimido"
    ],
    "Mesilato de Doxasozina + Finasterida 2mg + 5mg": [
      "Mesilato de Doxasozina + Finasterida",
      "2mg + 5mg",
      "cap dura",
      "cápsula"
    ],
    "Metronidazol + Nitrato de Miconazol 750mg + 200mg": [
      "Metronidazol + Nitrato de Miconazol",
      "750mg + 200mg",
      "ovl vag",
      "óvulo"
    ],
    "Montelucaste de Sódio + Dicloridrato de Levocetirizina 10mg + 5mg": [
      "Montelucaste de Sódio + Dicloridrato de Levocetirizina",
      "10mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Naproxeno + Esomeprazol Magnésio Tri-Hidratado 500mg + 20mg": [
      "Naproxeno + Esomeprazol Magnésio Tri-Hidratado",
      "500mg + 20mg",
      "com rev",
      "comprimido"
    ],
    "Nimesulida + Pantoprazol Sódico 100mg + 20mg": [
      "Nimesulida + Pantoprazol Sódico",
      "100mg + 20mg",
      "com",
      "comprimido"
    ],
    "Nistatina + Óxido de Zinco 100.000U/g + 200mg/g": [
      "Nistatina + Óxido de Zinco",
      "100.000U/g + 200mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Nitrato de Miconazol + Tinidazol 30mg/g + 20mg/g": [
      "Nitrato de Miconazol + Tinidazol",
      "30mg/g + 20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Noretisterona + Valerato de Estradiol Micronizado 2mg + 0,7mg": [
      "Noretisterona + Valerato de Estradiol Micronizado",
      "2mg + 0,7mg",
      "com rev",
      "comprimido"
    ],
    "Norgestrel + Etinilestradiol 0,5mg + 0,05mg": [
      "Norgestrel + Etinilestradiol",
      "0,5mg + 0,05mg",
      "com",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Anlodipino 20mg + 5mg": [
      "Olmesartana Medoxomila + Anlodipino",
      "20mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Anlodipino 40mg + 5mg": [
      "Olmesartana Medoxomila + Anlodipino",
      "40mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Anlodipino 40mg + 10mg": [
      "Olmesartana Medoxomila + Anlodipino",
      "40mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida 20mg + 12,5mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida",
      "20mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida 40mg + 12,5mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida",
      "40mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida 40mg + 25mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida",
      "40mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 20mg + 12,5mg + 5mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino",
      "20mg + 12,5mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 40mg + 12,5mg + 5mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino",
      "40mg + 12,5mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino 40mg + 25mg + 10mg": [
      "Olmesartana Medoxomila + Hidroclorotiazida + Anlodipino",
      "40mg + 25mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Omeprazol + Claritromicina + Amoxicilina 20mg + 500mg + 500mg": [
      "Omeprazol + Claritromicina + Amoxicilina",
      "20mg + 500mg + 500mg",
      "cap gel dur + comp ver + cap gel du",
      "cápsula"
    ],
    "Paracetamol + Ácido Acetilsalicilico + Cafeína 250mg + 250mg + 65mg": [
      "Paracetamol + Ácido Acetilsalicilico + Cafeína",
      "250mg + 250mg + 65mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol + Cafeína 500mg + 65mg": [
      "Paracetamol + Cafeína",
      "500mg + 65mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol + Cafeína Anidra 500mg + 65mg": [
      "Paracetamol + Cafeína Anidra",
      "500mg + 65mg",
      "com efev",
      "comprimido"
    ],
    "Paracetamol + Ibuprofeno 500mg + 200mg": [
      "Paracetamol + Ibuprofeno",
      "500mg + 200mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol + Carisoprodol + Diclofenaco Sódico + Cafeína Anidra 300mg + 125mg + 50mg + 30mg": [
      "Paracetamol + Carisoprodol + Diclofenaco Sódico + Cafeína Anidra",
      "300mg + 125mg + 50mg + 30mg",
      "com",
      "comprimido"
    ],
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol (Com Branco) 400mg + 20mg (com amarelo) / 400mg (com branco)": [
      "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol (Com Branco)",
      "400mg + 20mg (com amarelo) / 400mg (com branco)",
      "com",
      "comprimido"
    ],
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja) 400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja)": [
      "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja)",
      "400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja)",
      "com",
      "comprimido"
    ],
    "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja) + Paracetamol (Com Branco) 400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja) + 400mg (com branco)": [
      "Paracetamol + Cloridrato de Fenilefrina (Com Amarelo) + Paracetamol + Maleato de Carbinoxamina (Com Laranja) + Paracetamol (Com Branco)",
      "400mg + 20mg (com amarelo) / 400mg + 4mg (com laranja) + 400mg (com branco)",
      "com",
      "comprimido"
    ],
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 400mg/5g + 4mg/5g + 4mg/5g": [
      "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina",
      "400mg/5g + 4mg/5g + 4mg/5g",
      "po sol or",
      "unidade"
    ],
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 400mg + 4mg + 4mg": [
      "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina",
      "400mg + 4mg + 4mg",
      "cap dura",
      "cápsula"
    ],
    "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina 40mg/mL + 0,6mg/mL + 0,6mg/mL": [
      "Paracetamol + Cloridrato de Fenilefrina + Maleato de Clorfeniramina",
      "40mg/mL + 0,6mg/mL + 0,6mg/mL",
      "sol or",
      "frasco"
    ],
    "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina 40mg/mL + 1mg/mL + 0,4 mg/mL": [
      "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina",
      "40mg/mL + 1mg/mL + 0,4 mg/mL",
      "sol or",
      "frasco"
    ],
    "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina 13,3mg/mL + 0,33mg/mL + 0,13mg/mL": [
      "Paracetamol + Cloridrato de Fenilefrina+ Maleato de Carbinoxamina",
      "13,3mg/mL + 0,33mg/mL + 0,13mg/mL",
      "sol or",
      "frasco"
    ],
    "Paracetamol + Cloridrato de Pseudoefedrina 500mg + 30mg": [
      "Paracetamol + Cloridrato de Pseudoefedrina",
      "500mg + 30mg",
      "com rev",
      "comprimido"
    ],
    "Paracetamol + Fosfato de Codeina 500mg + 30mg": [
      "Paracetamol + Fosfato de Codeina",
      "500mg + 30mg",
      "com",
      "comprimido"
    ],
    "Paracetamol + Fosfato de Codeína 500mg + 7,5mg": [
      "Paracetamol + Fosfato de Codeína",
      "500mg + 7,5mg",
      "com",
      "comprimido"
    ],
    "Paracetamol + Propifenazona + Cafeína 250mg + 150mg + 50mg": [
      "Paracetamol + Propifenazona + Cafeína",
      "250mg + 150mg + 50mg",
      "com",
      "comprimido"
    ],
    "Paracetamol + Clorzoxazona 300mg + 200mg": [
      "Paracetamol + Clorzoxazona",
      "300mg + 200mg",
      "com",
      "comprimido"
    ],
    "Perindopril + Indapamida 4mg + 1,25mg": [
      "Perindopril + Indapamida",
      "4mg + 1,25mg",
      "com",
      "comprimido"
    ],
    "Perindopril Arginina + Indapamida 5mg + 1,25mg": [
      "Perindopril Arginina + Indapamida",
      "5mg + 1,25mg",
      "com rev",
      "comprimido"
    ],
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 5mg + 1,25mg + 5mg": [
      "Perindopril Arginina + Indapamida + Besilato de Anlodipino",
      "5mg + 1,25mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 5mg + 1,25mg + 10mg": [
      "Perindopril Arginina + Indapamida + Besilato de Anlodipino",
      "5mg + 1,25mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 10mg + 2,5mg + 5mg": [
      "Perindopril Arginina + Indapamida + Besilato de Anlodipino",
      "10mg + 2,5mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Perindopril Arginina + Indapamida + Besilato de Anlodipino 10mg + 2,5mg + 10mg": [
      "Perindopril Arginina + Indapamida + Besilato de Anlodipino",
      "10mg + 2,5mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Picossulfato de Sódio + Óxido de Magnésio + Ácido Cítrico Anidro 10mg + 3,5g + 12g": [
      "Picossulfato de Sódio + Óxido de Magnésio + Ácido Cítrico Anidro",
      "10mg + 3,5g + 12g",
      "pó prep ext",
      "unidade"
    ],
    "Piperacilina Sódica + Tazobactam Sódica 2g + 250mg": [
      "Piperacilina Sódica + Tazobactam Sódica",
      "2g + 250mg",
      "po liof sol inj",
      "unidade"
    ],
    "Piperacilina Sódica + Tazobactam Sódica 4g + 500mg": [
      "Piperacilina Sódica + Tazobactam Sódica",
      "4g + 500mg",
      "po liof sol inj",
      "unidade"
    ],
    "Pivalato de Fluocortolona + Cloridrato de Lidocaína 1mg/g + 20mg/g": [
      "Pivalato de Fluocortolona + Cloridrato de Lidocaína",
      "1mg/g + 20mg/g",
      "crem ret",
      "bisnaga"
    ],
    "Policresuleno + Cloridrato de Cinchocaína 50mg/g + 10mg/g": [
      "Policresuleno + Cloridrato de Cinchocaína",
      "50mg/g + 10mg/g",
      "pom ret",
      "bisnaga"
    ],
    "Policresuleno + Cloridrato de Cinchocaína 100mg/g + 27mg/g": [
      "Policresuleno + Cloridrato de Cinchocaína",
      "100mg/g + 27mg/g",
      "sup",
      "supositório"
    ],
    "Propilenoglicolato de Dapaglifozina Monoidratado + Cloridrato de Saxagliptina Di-Hidratada 10mg + 05mg": [
      "Propilenoglicolato de Dapaglifozina Monoidratado + Cloridrato de Saxagliptina Di-Hidratada",
      "10mg + 05mg",
      "com rev lib ret",
      "comprimido"
    ],
    "Propionato de Testosterona + Isocaproato de Testosterona + Decanoato de Testosterona + Fempropionato de Testosterona 30mg + 60mg + 100mg + 60mg": [
      "Propionato de Testosterona + Isocaproato de Testosterona + Decanoato de Testosterona + Fempropionato de Testosterona",
      "30mg + 60mg + 100mg + 60mg",
      "sol inj",
      "frasco"
    ],
    "Ramipril + Hidroclorotiazida 5mg + 12,5mg": [
      "Ramipril + Hidroclorotiazida",
      "5mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Ramipril + Hidroclorotiazida 5mg + 25mg": [
      "Ramipril + Hidroclorotiazida",
      "5mg + 25mg",
      "cap dura",
      "cápsula"
    ],
    "Ramipril + Besilato de Anlodipino 10mg + 10mg": [
      "Ramipril + Besilato de Anlodipino",
      "10mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Ramipril + Besilato de Anlodipino 2,5mg + 5mg": [
      "Ramipril + Besilato de Anlodipino",
      "2,5mg + 5mg",
      "cap dura",
      "cápsula"
    ],
    "Ramipril + Besilato de Anlodipino 10mg + 5mg": [
      "Ramipril + Besilato de Anlodipino",
      "10mg + 5mg",
      "cap dura",
      "cápsula"
    ],
    "Ramipril + Besilato de Anlodipino 5mg + 5mg": [
      "Ramipril + Besilato de Anlodipino",
      "5mg + 5mg",
      "cap dura",
      "cápsula"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 10mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "10mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 20mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "20mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 40mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "40mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 5mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "5mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 10mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "10mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Rosuvastatina Cálcica + Ezetimiba 20mg + 10mg": [
      "Rosuvastatina Cálcica + Ezetimiba",
      "20mg + 10mg",
      "cap dura",
      "cápsula"
    ],
    "Saxagliptina + Cloridrato de Metformina 2,5mg + 1.000mg": [
      "Saxagliptina + Cloridrato de Metformina",
      "2,5mg + 1.000mg",
      "com rev",
      "comprimido"
    ],
    "Saxagliptina + Cloridrato de Metformina 5mg + 500mg": [
      "Saxagliptina + Cloridrato de Metformina",
      "5mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Saxagliptina + Cloridrato de Metformina 5mg + 1.000mg": [
      "Saxagliptina + Cloridrato de Metformina",
      "5mg + 1.000mg",
      "com rev",
      "comprimido"
    ],
    "Succinato de Sumatriptana + Naproxeno Sódico 85mg + 500mg": [
      "Succinato de Sumatriptana + Naproxeno Sódico",
      "85mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Succinato de Sumatriptana + Naproxeno Sódico 50mg + 500mg": [
      "Succinato de Sumatriptana + Naproxeno Sódico",
      "50mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Sulfadiazina de Prata  + Nitrato de Cério 10mg/g + 4mg/g": [
      "Sulfadiazina de Prata  + Nitrato de Cério",
      "10mg/g + 4mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Sulfametoxazol + Trimetoprima 400mg + 80mg": [
      "Sulfametoxazol + Trimetoprima",
      "400mg + 80mg",
      "com",
      "comprimido"
    ],
    "Sulfametoxazol + Trimetoprima 40mg/mL + 8mg/mL": [
      "Sulfametoxazol + Trimetoprima",
      "40mg/mL + 8mg/mL",
      "sups or",
      "frasco"
    ],
    "Sulfametoxazol + Trimetoprima 800mg + 160mg": [
      "Sulfametoxazol + Trimetoprima",
      "800mg + 160mg",
      "com",
      "comprimido"
    ],
    "Sulfametoxazol + Trimetoprima 80mg/mL + 16mg/mL": [
      "Sulfametoxazol + Trimetoprima",
      "80mg/mL + 16mg/mL",
      "sups or",
      "frasco"
    ],
    "Sulfato de Ceftolozana + Tazobactam Sódico 1g + 0,5g": [
      "Sulfato de Ceftolozana + Tazobactam Sódico",
      "1g + 0,5g",
      "pó sol inf",
      "unidade"
    ],
    "Sulfato de Gentamicina + Fosfato Dissódico de Betametasona 3mg/mL + 1mg/mL": [
      "Sulfato de Gentamicina + Fosfato Dissódico de Betametasona",
      "3mg/mL + 1mg/mL",
      "sol oft (got)",
      "frasco"
    ],
    "Sulfato de Neomicina + Acetato de Clostebol 5mg/g + 5mg/g": [
      "Sulfato de Neomicina + Acetato de Clostebol",
      "5mg/g + 5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Sulfato de Neomicina + Acetato de Clostebol 5mg/g + 5mg/g": [
      "Sulfato de Neomicina + Acetato de Clostebol",
      "5mg/g + 5mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Sulfato de Neomicina + Bacitracina Zíncica 5mg/g + 250UI/g": [
      "Sulfato de Neomicina + Bacitracina Zíncica",
      "5mg/g + 250UI/g",
      "pom derm",
      "bisnaga"
    ],
    "Sulfato de Neomicina + Sulfato de Polimixina + Nistatina + Tinidazol 35.000UI + 35.000UI + 100.000UI + 150mg": [
      "Sulfato de Neomicina + Sulfato de Polimixina + Nistatina + Tinidazol",
      "35.000UI + 35.000UI + 100.000UI + 150mg",
      "crem vag",
      "bisnaga"
    ],
    "Sulfato de Salbutamol + Guaifenesina 0,48mg/mL + 20mg/mL": [
      "Sulfato de Salbutamol + Guaifenesina",
      "0,48mg/mL + 20mg/mL",
      "sol or",
      "frasco"
    ],
    "Tartarato de Brimonidina + Maleato de Timolol 2,0mg/mL + 5,0mg/mL": [
      "Tartarato de Brimonidina + Maleato de Timolol",
      "2,0mg/mL + 5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Telmisartana + Besilato de Anlodipino 40mg + 5mg": [
      "Telmisartana + Besilato de Anlodipino",
      "40mg + 5mg",
      "com",
      "comprimido"
    ],
    "Telmisartana + Besilato de Anlodipino 80mg + 5mg": [
      "Telmisartana + Besilato de Anlodipino",
      "80mg + 5mg",
      "com",
      "comprimido"
    ],
    "Telmisartana + Besilato de Anlodipino 80mg + 10mg": [
      "Telmisartana + Besilato de Anlodipino",
      "80mg + 10mg",
      "com",
      "comprimido"
    ],
    "Telmisartana + Hidroclorotiazida 80mg + 25mg": [
      "Telmisartana + Hidroclorotiazida",
      "80mg + 25mg",
      "com",
      "comprimido"
    ],
    "Telmisartana + Hidroclorotiazida 40mg + 12,5mg": [
      "Telmisartana + Hidroclorotiazida",
      "40mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Telmisartana + Hidroclorotiazida 80mg + 12,5mg": [
      "Telmisartana + Hidroclorotiazida",
      "80mg + 12,5mg",
      "com",
      "comprimido"
    ],
    "Tetraciclina + Anfotericina B 25mg/g + 12,5mg/g": [
      "Tetraciclina + Anfotericina B",
      "25mg/g + 12,5mg/g",
      "creme vag",
      "bisnaga"
    ],
    "Ticarcilina + Ácido Clavulânico 3,34g + 0,119g": [
      "Ticarcilina + Ácido Clavulânico",
      "3,34g + 0,119g",
      "pó sol inj",
      "unidade"
    ],
    "Tinidazol + Tioconazol 30mg/g + 20mg/g": [
      "Tinidazol + Tioconazol",
      "30mg/g + 20mg/g",
      "crem vag",
      "bisnaga"
    ],
    "Tioconazol + Tinidazol + Secnidazol 20mg/g + 30mg/g + 1g (2 comp)": [
      "Tioconazol + Tinidazol + Secnidazol",
      "20mg/g + 30mg/g + 1g (2 comp)",
      "crem vag + comp rev",
      "bisnaga"
    ],
    "Tioconazol + Tinidazol + Secnidazol 20mg/g + 30mg/g + 1g (4 comp)": [
      "Tioconazol + Tinidazol + Secnidazol",
      "20mg/g + 30mg/g + 1g (4 comp)",
      "crem vag + comp rev",
      "bisnaga"
    ],
    "Tobramicina + Dexametasona 3mg + 1,0mg": [
      "Tobramicina + Dexametasona",
      "3mg + 1,0mg",
      "sus oft",
      "frasco"
    ],
    "Tobramicina + Dexametasona 3mg + 1,0mg": [
      "Tobramicina + Dexametasona",
      "3mg + 1,0mg",
      "pom oft",
      "bisnaga"
    ],
    "Travoprosta + Maleato de Timolol 0,04mg/mL + 5,0mg/mL": [
      "Travoprosta + Maleato de Timolol",
      "0,04mg/mL + 5,0mg/mL",
      "sol oft",
      "frasco"
    ],
    "Tretinoína + Fosfato de Clindamicina 0,25mg/g + 12mg/g (eq. 10mg/g)": [
      "Tretinoína + Fosfato de Clindamicina",
      "0,25mg/g + 12mg/g (eq. 10mg/g)",
      "gel",
      "frasco"
    ],
    "Tribenosídeo + Cloridrato de Lidocaína 50mg/g + 20mg/g": [
      "Tribenosídeo + Cloridrato de Lidocaína",
      "50mg/g + 20mg/g",
      "crem",
      "bisnaga"
    ],
    "Valerato de Betametasona + Clioquinol 1mg/g + 30mg/g": [
      "Valerato de Betametasona + Clioquinol",
      "1mg/g + 30mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Valerato de Betametasona + Clioquinol 1mg/g + 30mg/g": [
      "Valerato de Betametasona + Clioquinol",
      "1mg/g + 30mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g": [
      "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol",
      "0,5mg/g + 1mg/g + 10mg/g + 10mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol 0,5mg/g + 1mg/g + 10mg/g + 10mg/g": [
      "Valerato de Betametasona + Sulfato de Gentamicina + Tolnaftato + Clioquinol",
      "0,5mg/g + 1mg/g + 10mg/g + 10mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Valerato de Betametasona + Sulfato de Neomicina 1mg/g + 5mg/g": [
      "Valerato de Betametasona + Sulfato de Neomicina",
      "1mg/g + 5mg/g",
      "pom derm",
      "bisnaga"
    ],
    "Valerato de Betametasona + Sulfato de Neomicina 1mg/g + 5mg/g": [
      "Valerato de Betametasona + Sulfato de Neomicina",
      "1mg/g + 5mg/g",
      "crem derm",
      "bisnaga"
    ],
    "Valerato de Diflucortolona + Nitrato de Isoconazol 1mg/g + 10mg/g": [
      "Valerato de Diflucortolona + Nitrato de Isoconazol",
      "1mg/g + 10mg/g",
      "creme",
      "bisnaga"
    ],
    "Valsartana + Besilato de Anlodipino 80mg + 5mg": [
      "Valsartana + Besilato de Anlodipino",
      "80mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Besilato de Anlodipino 160mg + 5,0mg": [
      "Valsartana + Besilato de Anlodipino",
      "160mg + 5,0mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Besilato de Anlodipino 160mg + 10,0mg": [
      "Valsartana + Besilato de Anlodipino",
      "160mg + 10,0mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Besilato de Anlodipino 320mg + 5,0mg": [
      "Valsartana + Besilato de Anlodipino",
      "320mg + 5,0mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Besilato de Anlodipino 320mg + 10,0mg": [
      "Valsartana + Besilato de Anlodipino",
      "320mg + 10,0mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida 160mg + 12,5mg": [
      "Valsartana + Hidroclorotiazida",
      "160mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida 160mg + 25mg": [
      "Valsartana + Hidroclorotiazida",
      "160mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida 80mg + 12,5mg": [
      "Valsartana + Hidroclorotiazida",
      "80mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida 320mg + 12,5mg": [
      "Valsartana + Hidroclorotiazida",
      "320mg + 12,5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida 320mg + 25mg": [
      "Valsartana + Hidroclorotiazida",
      "320mg + 25mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 5mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 12,5mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 10mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 12,5mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 5mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 25mg + 5mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 10mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 25mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 320mg + 25mg + 10mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "320mg + 25mg + 10mg",
      "com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 80mg + 12,5mg + 5mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "80mg + 12,5mg + 5mg",
      "com + com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 5mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 12,5mg + 5mg",
      "com + com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 12,5mg + 10mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 12,5mg + 10mg",
      "com + com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 5mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 25mg + 5mg",
      "com + com rev",
      "comprimido"
    ],
    "Valsartana + Hidroclorotiazida + Besilato de Anlodipino 160mg + 25mg + 10mg": [
      "Valsartana + Hidroclorotiazida + Besilato de Anlodipino",
      "160mg + 25mg + 10mg",
      "com + com rev",
      "comprimido"
    ],
    "Vildagliptina + Cloridrato de Metformina 50mg + 500mg": [
      "Vildagliptina + Cloridrato de Metformina",
      "50mg + 500mg",
      "com rev",
      "comprimido"
    ],
    "Vildagliptina + Cloridrato de Metformina 50mg + 850mg": [
      "Vildagliptina + Cloridrato de Metformina",
      "50mg + 850mg",
      "com rev",
      "comprimido"
    ],
    "Vildagliptina + Cloridrato de Metformina 50mg + 1.000mg": [
      "Vildagliptina + Cloridrato de Metformina",
      "50mg + 1.000mg",
      "com rev",
      "comprimido"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 100mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "50mcg/dose + 100mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 250mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "50mcg/dose + 250mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 50mcg/dose + 500mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "50mcg/dose + 500mcg/dose",
      "inal po inal or",
      "unidade"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 125mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "25mcg/dose + 125mcg/dose",
      "sups aer inal or + inal",
      "frasco"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 250mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "25mcg/dose + 250mcg/dose",
      "sups aer inal or + inal",
      "frasco"
    ],
    "Xinafoato de Salmeterol + Propionato de Fluticasona 25mcg/dose + 50mcg/dose": [
      "Xinafoato de Salmeterol + Propionato de Fluticasona",
      "25mcg/dose + 50mcg/dose",
      "sups aer inal or + inal",
      "frasco"
    ],
    "Imunoglobulina Humana Anti-D (Rho) 300mcg/2mL": [
      "Imunoglobulina Humana Anti-D (Rho)",
      "300mcg/2mL",
      "sol inj",
      "frasco"
    ],
    "Albumina Humana 1g/50mL (20%)": [
      "Albumina Humana",
      "1g/50mL (20%)",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Regular 100UI/mL": [
      "Insulina Humana Regular",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Isófana (NPH) 100UI/mL": [
      "Insulina Humana Isófana (NPH)",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Análoga Asparte 100UI/mL": [
      "Insulina Humana Análoga Asparte",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Análoga Glargina 100UI/mL": [
      "Insulina Humana Análoga Glargina",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Análoga Lispro 100UI/mL": [
      "Insulina Humana Análoga Lispro",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Análoga Detemir 100UI/mL": [
      "Insulina Humana Análoga Detemir",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Insulina Humana Análoga Glulisina 100UI/mL": [
      "Insulina Humana Análoga Glulisina",
      "100UI/mL",
      "sol inj",
      "frasco"
    ],
    "Caneta de Insulina Humana Regular 100UI/mL": [
      "Caneta de Insulina Humana Regular",
      "100UI/mL",
      "caneta sol inj",
      "caneta"
    ],
    "Caneta de Insulina Humana Isófana (NPH) 100UI/mL": [
      "Caneta de Insulina Humana Isófana (NPH)",
      "100UI/mL",
      "caneta sol inj",
      "caneta"
    ]
  };

  var guides = {
    "Ciclo Rápido (apresentação combinada CI+B2)": "Em caso de falta de ar, usar a dose habitual 03 (três) vezes a cada 20 minutos.\nSe, ao fim da 01 hora total, não melhorar da falta de ar, buscar atendimento médico.",
    "Ciclo Rápido (CI separado de B2)": "Em caso de falta de ar, usar a dose acima 03 (três) vezes a cada 20 minutos.\nSe, ao fim da 01 hora total, não melhorar da falta de ar, buscar atendimento médico.",
    "SRO Vs. Gatorade": "Caso você prefira, é possível substituir o soro de reidratação pelo mesmo volume de qualquer bebida isotônica da sua preferência."
  };

  var predefineds = {
    "Resfriado/Gripe (dip)": [
      [
        "Ibuprofeno",
        "400mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        " por 5 dias",
        "",
        ""
      ],
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Soro Fisiológico",
        "0,9%",
        "Via Nasal",
        "",
        "Lavar cada narina com",
        "20",
        "mL de soro",
        "6",
        "horas",
        "",
        "",
        "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana."
      ]
    ],
    "Resfriado/Gripe (dip+parac)": [
      [
        "Ibuprofeno",
        "400mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        " por 5 dias",
        "",
        ""
      ],
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Soro Fisiológico",
        "0,9%",
        "Via Nasal",
        "",
        "Lavar cada narina com",
        "20",
        "mL de soro",
        "6",
        "horas",
        "",
        "",
        "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana."
      ]
    ],
    "Resfriado/Gripe (parac)": [
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Soro Fisiológico",
        "0,9%",
        "Via Nasal",
        "",
        "Lavar cada narina com",
        "20",
        "mL de soro",
        "6",
        "horas",
        "",
        "",
        "Usar seringa plástica de 20mL SEM agulhas. Preencher a seringa até o volume prévio e injetar sem forçar o volume em cada narina. Guardar seringa e recipiente do soro (caso garrafa) em ambiente seco, fresco e protegido de luz solar direta. Trocar seringa a cada semana."
      ]
    ],
    "Dengue (dip)": [
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Sais para Reidratação Oral",
        "--",
        "Via Oral",
        "",
        "Tomar",
        "600",
        "mL (aprox. 03 copos americanos) de soro",
        "8",
        "horas",
        " intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada",
        "",
        "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados."
      ]
    ],
    "Dengue (dip+parac)": [
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Sais para Reidratação Oral",
        "--",
        "Via Oral",
        "",
        "Tomar",
        "600",
        "mL (aprox. 03 copos americanos) de soro",
        "8",
        "horas",
        " intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada",
        "",
        "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados."
      ]
    ],
    "Dengue (parac)": [
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Sais para Reidratação Oral",
        "--",
        "Via Oral",
        "",
        "Tomar",
        "600",
        "mL (aprox. 03 copos americanos) de soro",
        "8",
        "horas",
        " intercalado por 1.200mL (aprox. 06 copos americanos) de água filtrada",
        "",
        "O soro acima pode ser substituído por água de coco e bebidas isotônicas. A água filtrada pode ser qualquer líquido, exceto refrigerantes e outros ultraprocessados."
      ]
    ],
    "GECA (buscopam)": [
      [
        "Dipirona + Escopolamina",
        "500+10mg",
        "Via Oral",
        "",
        "Tomar",
        "2",
        "cps",
        "8",
        "horas",
        "",
        ", se dor ou cólicas",
        ""
      ],
      [
        "Ondansetrona",
        "4mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se náuseas",
        ""
      ],
      [
        "Sais para Reidratação Oral",
        "--",
        "Via Oral",
        "",
        "Tomar",
        "300",
        "mL (aprox. 02 copos americanos) de soro",
        "8",
        "horas",
        " ou se diarreias",
        "",
        "O soro acima pode ser substituído por água de coco e bebidas isotônicas."
      ]
    ],
    "GECA (parac)": [
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor",
        ""
      ],
      [
        "Escopolamina",
        "10mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se cólicas",
        ""
      ],
      [
        "Ondansetrona",
        "4mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se náuseas",
        ""
      ],
      [
        "Sais para Reidratação Oral",
        "--",
        "Via Oral",
        "",
        "Tomar",
        "300",
        "mL (aprox. 02 copos americanos) de soro",
        "8",
        "horas",
        " ou se diarreias",
        "",
        "O soro acima pode ser substituído por água de coco e bebidas isotônicas."
      ]
    ],
    "Cistite (macrodantina)": [
      [
        "Nitrofurantoína",
        "100mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        " por 03 dias",
        "",
        ""
      ],
      [
        "Fenazopiridina",
        "100mg",
        "Via Oral",
        "",
        "Tomar",
        "1 a 2",
        "cp(s)",
        "8",
        "horas",
        "",
        ", se dor no canal da urina",
        ""
      ]
    ],
    "Cistite (cefalexina)": [
      [
        "Cefalexina",
        "500mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        " por 03 dias",
        "",
        ""
      ],
      [
        "Fenazopiridina",
        "100mg",
        "Via Oral",
        "",
        "Tomar",
        "1 a 2",
        "cp(s)",
        "8",
        "horas",
        "",
        ", se dor no canal da urina",
        ""
      ]
    ],
    "IC": [
      [
        "Furosemida",
        "40mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "12",
        "horas",
        "",
        "",
        ""
      ]
    ],
    "Dor Osteomuscular (dip)": [
      [
        "Ibuprofeno",
        "400mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        " por 5 dias",
        "",
        ""
      ],
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Ciclobenzaprina",
        "5mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        " por 1 semana",
        "",
        "Tomar 30 minutos antes de dormir."
      ],
      [
        "Codeína",
        "30mg",
        "Via Oral",
        "30 cps",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se dor que não melhora mesmo após 30 minutos de uso de analgésico simples",
        ""
      ]
    ],
    "Dor Osteomuscular (parac)": [
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Ciclobenzaprina",
        "5mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        " por 1 semana",
        "",
        "Tomar 30 minutos antes de dormir."
      ],
      [
        "Codeína",
        "30mg",
        "Via Oral",
        "30 cps",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se dor que não melhora mesmo após 30 minutos de uso de analgésico simples",
        ""
      ]
    ],
    "Dor Neuropática (dip)": [
      [
        "Ibuprofeno",
        "400mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        " por 5 dias",
        "",
        ""
      ],
      [
        "Dipirona",
        "1.000mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Ciclobenzaprina",
        "5mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        " por 1 semana",
        "",
        "Tomar 30 minutos antes de dormir."
      ],
      [
        "Codeína",
        "30mg",
        "Via Oral",
        "30 cps",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se dor que não melhora mesmo após 30 minutos de uso de analgésico simples",
        ""
      ],
      [
        "Amitriptilina",
        "25mg",
        "Via Oral",
        "60 cps",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        "",
        "",
        ""
      ]
    ],
    "Dor Neuropática (parac)": [
      [
        "Paracetamol",
        "750mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "6",
        "horas",
        "",
        ", se dor, febre ou calafrios",
        ""
      ],
      [
        "Ciclobenzaprina",
        "5mg",
        "Via Oral",
        "",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        " por 1 semana",
        "",
        "Tomar 30 minutos antes de dormir."
      ],
      [
        "Codeína",
        "30mg",
        "Via Oral",
        "30 cps",
        "Tomar",
        "1",
        "cp",
        "8",
        "horas",
        "",
        ", se dor que não melhora mesmo após 30 minutos de uso de analgésico simples",
        ""
      ],
      [
        "Amitriptilina",
        "25mg",
        "Via Oral",
        "60 cps",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        "",
        "",
        ""
      ]
    ],
    "Herpes Zóster (adulto)": [
      [
        "Aciclovir",
        "200mg",
        "Via Oral",
        "56 cps",
        "Tomar",
        "2",
        "cps",
        "6",
        "horas",
        " por 7 dias",
        "",
        ""
      ],
      [
        "Hidróxido de Alumínio",
        "60mg/mL",
        "Via Oral",
        "",
        "Tomar",
        "10",
        "mL",
        "6",
        "horas",
        "",
        ", se queimação no estômago",
        ""
      ],
      [
        "Pregabalina",
        "75mg",
        "Via Oral",
        "180 cps",
        "Tomar",
        "1",
        "cp",
        "12",
        "horas",
        " por 3 meses",
        "",
        "Caso persista a dor mesmo após os 3 meses de uso, buscar aconselhamento junto a neurologista ou médico especializado em dor."
      ]
    ],
    "Herpes Zóster (idoso)": [
      [
        "Aciclovir",
        "200mg",
        "Via Oral",
        "56 cps",
        "Tomar",
        "2",
        "cps",
        "6",
        "horas",
        " por 7 dias",
        "",
        ""
      ],
      [
        "Hidróxido de Alumínio",
        "60mg/mL",
        "Via Oral",
        "",
        "Tomar",
        "10",
        "mL",
        "6",
        "horas",
        "",
        ", se queimação no estômago",
        ""
      ],
      [
        "Pregabalina",
        "75mg",
        "Via Oral",
        "90 cps",
        "Tomar",
        "1",
        "cp",
        "1",
        "dia",
        " por 3 meses",
        "",
        "Caso persista a dor mesmo após os 3 meses de uso, buscar aconselhamento junto a neurologista ou médico especializado em dor."
      ]
    ]
  };

  function addMed(data, clear = false) {
    // Create div element to represent the medication added
    var addy = $("<div>", {class: "notification item"});
    addy.append( $("<button>", {class: "delete"}) );
    addy.append( $("<p>").html("<strong>#.</strong> <span class=\"med-name\"></span> <span class=\"med-concentration\"></span> --- <span class=\"med-via\"></span> ------------------------------------------------------------------------ <span class=\"med-qtt\"></span>") );
    addy.append( $("<p>").html("<span class=\"med-act\"></span> <span class=\"med-cps\"></span> <span class=\"med-unity\"></span><span class=\"med-interval\"></span><span class=\"med-interval-time\"></span><span class=\"med-duration\"></span><span class=\"med-duration-time\"></span><span class=\"med-if\"></span>.") );
    addy.append( $("<p>").html("<span class=\"med-guide\"></span>") );
    addy.find("button.delete").on("click", function() { $(this).parent().remove(); });
    // Fill `addy` element
    addy.find(".med-name").html( data[0] );
    addy.find(".med-concentration").html( data[1] );
    addy.find(".med-via").html( data[2] );
    addy.find(".med-qtt").html( data[3] );
    addy.find(".med-act").html( data[4] );
    addy.find(".med-cps").html( data[5] );
    addy.find(".med-unity").html( data[6] );
    if ( data[9] != "DU" ) {
      addy.find(".med-interval").html( " a cada " + data[7] );
      addy.find(".med-interval-time").html( " " + data[8] );
      addy.find(".med-duration").html( data[9] );
      addy.find(".med-if").html( data[10] );
    } else {
      addy.find(".med-interval").html( " em DOSE ÚNICA" );
    }
    addy.find(".med-guide").html( data[11] );
    // Append `addy` element to the medication list
    $("#prescription").append( addy );

    // Empty form, if asked to
    if (clear) {
      $("#med-search").val("").focus();
      $("#med-name").val("");
      $("#med-concentration").val("");
      $("#med-via").val("Oral");
      $("#med-qtt").val("");
      $("#med-act").val("Tomar");
      $("#med-interval").val("");
      $("#med-interval-time").val("hora(s)");
      $("#med-cps").val("");
      $("#med-unity").val("cp(s)").trigger("change");
      $("#med-duration").val("");
      $("#med-duration-time").val("dia(s)");
      $("#med-if").val("");
      $("#med-defaultguides").val("");
      $("#med-guide").val("");
    }
  }

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

  // Initialize medication autocomplete
  $("#med-search").autocomplete({
    source: med_list,
    minLength: 3,
    classes: { "ui-autocomplete": "box" }
  });
  // Initialize default guidances
  $.each(guides, function(i, v) {
    $("#med-defaultguides").append( $("<option>", { text: i, value: v}) );
  });
  // Initialize predefs
  $.each(predefineds, function(i, v) {
    $("#predefineds").append( $("<option>", { text: i, value: i}) );
  });
  // Add checking method for required fields
  $("[required]").on("input change", function() {
    if ( $(this).val() == "" ) { $(this).addClass("is-danger"); }
    else { $(this).removeClass("is-danger"); }
  });

  // Change usage unity on select update
  $("#med-unity").on("change", function() {
    $("#btn-unity").html( $("#med-unity").val() );
  });

  // Fill guide textarea on default selection
  $("#med-defaultguides").on("change", function() {
    $("#med-guide").val( $("#med-defaultguides").val() );
  });

  // Add prescription item
  $("#add").on("click", function() {
    var valid_med = false;
    var valid_sub = false;

    // Check if the medication is valid
    if (
      $("#med-search").val() != "" &&
      $.inArray($("#med-search").val(), med_list)
    ) { valid_med = "list"; }
    else if (
      $("#med-name").val() != "" &&
      $("#med-concentration").val() != ""
    ) { valid_med = "custom"; }
    // Check if the subscript is valid
    if (
      $("#med-via").val() != "" &&
      $("#med-act").val() != "" &&
      $("#med-cps").val() != "" &&
      $("#med-unity").val() != "" && (
        (
          $("#med-duration-time").val() == "dose única"
        ) || (
          $("#med-interval").val() != "" &&
          $("#med-interval-time").val() != ""
        )
      )
    ) { valid_sub = true; }

    if (valid_med && valid_sub) {
      var data = [];
      if ( valid_med == "list" ) {
        data.push( meds[ $("#med-search").val() ][0] );
        data.push( meds[ $("#med-search").val() ][1] );
      } else {
        data.push( $("#med-name").val() );
        data.push( $("#med-concentration").val() );
      }
      data.push( "Via " + $("#med-via").val() );
      if ( $("#med-qtt").val() != "" ) { data.push( $("#med-qtt").val() + " " + $("#med-unity").val() ); }
      else { data.push( "" ); }
      if ( $("#med-continuous").is(":checked") ) { data.push(" - USO CONTÍNUO"); }
      else { data.push( "" ); }
      data.push( $("#med-act").val() );
      data.push( $("#med-cps").val() );
      data.push( $("#med-unity").val() );
      data.push( $("#med-interval").val() );
      data.push( $("#med-interval-time").val() );
      if ( $("#med-duration-time").val() != "dose única" ) { data.push( " por " + $("#med-duration").val() + " " + $("#med-duration-time").val() ); }
      else { data.push( "DU" ); }
      if ( $("#med-if").val() != "" ) { data.push( ", se " + $("#med-if").val() ); }
      else { data.push( "" ); }
      if ( $("#med-guide").val() != "" ) { data.push( $("#med-guide").val() ); }
      else { data.push( "" ); }

      addMed(data, true);
    } else { $("[required]").trigger("change"); }
  });
  // Set predefined prescription from select menu
  $("#predefineds").on("change", function() {
    $("#prescription").html("");
    $.each(predefineds[ $("#predefineds").val() ], function(i, v) {
      addMed(v);
    });
  });
  // Update final output
  $("#prescription").on("DOMSubtreeModified", function() {
    // Run each prescription item and add it to the output
    var i = 0;
    var items = [];
    $("#prescription div.item").each(function() {
      i++;
      var item = [];
      var med_name = $(this).find(".med-name").html();
      var med_concentration = $(this).find(".med-concentration").html();
      var med_via = $(this).find(".med-via").html();
      var med_qtt = $(this).find(".med-qtt").html();
      var med_continuous = $(this).find(".med-continuous").html();
      var med_act = $(this).find(".med-act").html();
      var med_cps = $(this).find(".med-cps").html();
      var med_unity = $(this).find(".med-unity").html();
      var med_interval = $(this).find(".med-interval").html();
      var med_interval_time = $(this).find(".med-interval-time").html();
      var med_duration = $(this).find(".med-duration").html();
      var med_if = $(this).find(".med-if").html();
      var med_guide = $(this).find(".med-guide").html();

      item.push(
        i + ". " +
        med_name + " " + med_concentration + med_continuous + " --- " +
        med_via + " ------------------------------------------------------------------------ " +
        med_qtt );
      subscript = "    " + med_act + " " + med_cps + " " + med_unity;
      if ( med_interval == " em DOSE ÚNICA" ) { subscript += med_interval + "."; }
      else { subscript += med_interval + med_interval_time + med_duration + med_if + "."; }
      item.push(subscript);
      if ( med_guide ) { item.push( "    " + med_guide ); }

      items.push( item.join("\n") );
    });

    $("#copy").attr("data-clipboard-text", items.join("\n\n"));
  });

  // Check if there was a predefined model requested (through GET)
  if ( $("#get-predefined").val() ) {
    $("#predefineds").val( $("#get-predefined").val() );//
    $("#predefineds").trigger("change");
  }
});

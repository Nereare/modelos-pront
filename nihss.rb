nihss = [
  {
    number: "1a",
    title: "Nível de Consciência",
    tooltip: "O investigador deve escolher uma resposta mesmo se uma avaliação completa é prejudicada. Um 3 é dado apenas se o paciente não faz nenhum movimento.",
    options: [
      {
        pt: 0,
        text: "Alerta; reponde com entusiasmo"
      },
      {
        pt: 1,
        text: "Não alerta, mas ao ser acordado por mínima estimulação obedece, responde ou reage"
      },
      {
        pt: 2,
        text: "Não alerta, requer repetida estimulação ou estimulação dolorosa para realizar movimentos (não estereotipados)"
      },
      {
        pt: 3,
        text: "Responde somente com reflexo motor ou reações autonômicas, ou totalmente irresponsivo, flácido e arreflexo"
      }
    ]
  },
  {
    number: "1b",
    title: "Perguntas de NdC",
    tooltip: "O paciente é questionado sobre o mês e sua idade. Pacientes incapacitados de falar devido a intubação orotraqueal, trauma orotraqueal, disartria grave de qualquer causa, barreiras de linguagem ou qualquer outro problema não secundário a afasia receberão um 1.",
    options: [
      {
        pt: 0,
        text: "Responde ambas as questões corretamente"
      },
      {
        pt: 1,
        text: "Responde uma questão corretamente"
      },
      {
        pt: 2,
        text: "Não responde nenhuma questão corretamente"
      }
    ]
  },
  {
    number: "1c",
    title: "Comandos de NdC",
    tooltip: "O paciente é solicitado a abrir e fechar os olhos e então abrir e fechar a mão não parética. É dado credito se uma tentativa inequívoca é feita, mas não completada devido à fraqueza.",
    options: [
      {
        pt: 0,
        text: "Realiza ambas as tarefas corretamente"
      },
      {
        pt: 1,
        text: "Realiza uma tarefa corretamente"
      },
      {
        pt: 2,
        text: "Não realiza nenhuma tarefa corretamente"
      }
    ]
  },
  {
    number: "2",
    title: "Melhor Olhar Conjugado",
    tooltip: "Somente os movimentos oculares horizontais são testados. Movimentos oculares voluntários ou reflexos (óculo-cefálico) recebem nota, mas a prova calórica não é usada.",
    options: [
      {
        pt: 0,
        text: "Normal"
      },
      {
        pt: 1,
        text: "Paralisia parcial do olhar"
      },
      {
        pt: 2,
        text: "Desvio forçado ou paralisia total do olhar que não podem ser vencidos"
      }
    ]
  },
  {
    number: "3",
    title: "Visual",
    tooltip: "OS campos visuais (quadrantes superiores e inferiores) são testados por confrontação, utilizando contagem de dedos ou ameaça visual, conforme apropriado.",
    options: [
      {
        pt: 0,
        text: "Sem perda visual"
      },
      {
        pt: 1,
        text: "Hemianopsia parcial"
      },
      {
        pt: 2,
        text: "Hemianopsia completa"
      },
      {
        pt: 3,
        text: "Hemianopsia bilateral"
      }
    ]
  },
  {
    number: "4",
    title: "Paralisia Facial",
    tooltip: "Pergunte ou use pantomima para encorajar o paciente a mostrar os dentes ou sorrir e fechar os olhos.",
    options: [
      {
        pt: 0,
        text: "Movimentos normais simétricos"
      },
      {
        pt: 1,
        text: "Paralisia facial leve"
      },
      {
        pt: 2,
        text: "Paralisia facial central evidente"
      },
      {
        pt: 3,
        text: "Paralisia facial completa"
      }
    ]
  },
  {
    number: "5a",
    title: "Motor MSE",
    tooltip: "O braço é colocado na posição apropriada: extensão dos braços (palmas para baixo) a 90° (se sentado) ou a 45° (se deitado). É valorizada queda se esta ocorre antes de 10s.",
    options: [
      {
        pt: 0,
        text: "Sem queda; mantém o braço por 10s completos"
      },
      {
        pt: 1,
        text: "Queda; braço apresenta queda incompleta antes dos 10s completos; não toca a cama ou outro suporte"
      },
      {
        pt: 2,
        text: "Algum esforço contra a gravidade; o braço extende, cai na cama, mas tem alguma força contra a gravidade"
      },
      {
        pt: 3,
        text: "Nenhum esforço contra a gravidade; braço despenca"
      },
      {
        pt: 4,
        text: "Nenhum movimento"
      },
      {
        pt: 100,
        text: "Amputação ou fusão articular"
      }
    ]
  },
  {
    number: "5b",
    title: "Motor MSD",
    tooltip: "O braço é colocado na posição apropriada: extensão dos braços (palmas para baixo) a 90° (se sentado) ou a 45° (se deitado). É valorizada queda se esta ocorre antes de 10s.",
    options: [
      {
        pt: 0,
        text: "Sem queda; mantém o braço por 10s completos"
      },
      {
        pt: 1,
        text: "Queda; braço apresenta queda incompleta antes dos 10s completos; não toca a cama ou outro suporte"
      },
      {
        pt: 2,
        text: "Algum esforço contra a gravidade; o braço extende, cai na cama, mas tem alguma força contra a gravidade"
      },
      {
        pt: 3,
        text: "Nenhum esforço contra a gravidade; braço despenca"
      },
      {
        pt: 4,
        text: "Nenhum movimento"
      },
      {
        pt: 100,
        text: "Amputação ou fusão articular"
      }
    ]
  },
  {
    number: "5a",
    title: "Motor MSE",
    tooltip: "A perna é colocada na posição apropriada:  extensão a 30º (sempre na posição supina). É valorizada queda se esta ocorre antes de 5s.",
    options: [
      {
        pt: 0,
        text: "Sem queda; mantém o perna por 10s completos"
      },
      {
        pt: 1,
        text: "Queda; perna apresenta queda incompleta antes dos 10s completos; não toca a cama ou outro suporte"
      },
      {
        pt: 2,
        text: "Algum esforço contra a gravidade; o perna extende, cai na cama, mas tem alguma força contra a gravidade"
      },
      {
        pt: 3,
        text: "Nenhum esforço contra a gravidade; perna despenca"
      },
      {
        pt: 4,
        text: "Nenhum movimento"
      },
      {
        pt: 100,
        text: "Amputação ou fusão articular"
      }
    ]
  },
  {
    number: "5b",
    title: "Motor MSD",
    tooltip: "A perna é colocada na posição apropriada:  extensão a 30º (sempre na posição supina). É valorizada queda se esta ocorre antes de 5s.",
    options: [
      {
        pt: 0,
        text: "Sem queda; mantém o perna por 10s completos"
      },
      {
        pt: 1,
        text: "Queda; perna apresenta queda incompleta antes dos 10s completos; não toca a cama ou outro suporte"
      },
      {
        pt: 2,
        text: "Algum esforço contra a gravidade; o perna extende, cai na cama, mas tem alguma força contra a gravidade"
      },
      {
        pt: 3,
        text: "Nenhum esforço contra a gravidade; perna despenca"
      },
      {
        pt: 4,
        text: "Nenhum movimento"
      },
      {
        pt: 100,
        text: "Amputação ou fusão articular"
      }
    ]
  },
  {
    number: "7",
    title: "Ataxia de Membros",
    tooltip: "Testar se existe evidência de uma lesão cerebelar unilateral. Teste com os olhos abertos. Os testes índex-nariz e calcanhar-joelho são realizados bilateralmente, ataxia é valorizada somente se for desproporcional á fraqueza e se paciente ENTENDER.",
    options: [
      {
        pt: 0,
        text: "Ausente"
      },
      {
        pt: 1,
        text: "Presente em 1 membro"
      },
      {
        pt: 2,
        text: "Presente em 2 membros"
      },
      {
        pt: 100,
        text: "Amputação ou fusão articular"
      }
    ]
  },
  {
    number: "8",
    title: "Sensibilidade",
    tooltip: "Avalie sensibilidade ou mímica facial ao beliscar ou retirada do estímulo doloroso em paciente torporoso ou afásico. Somente perda de sensibilidade atribuída ao AVC é registrada como anormal, examinar tantas áreas do corpo (braços exceto mãos, pernas, tronco e face) quanto forem necessárias.",
    options: [
      {
        pt: 0,
        text: "Normal; nenhuma perda"
      },
      {
        pt: 1,
        text: "Perda leve a moderada; sensibilidade é diminuída do lado afetado, mas paciente ciente de que está sendo tocado"
      },
      {
        pt: 2,
        text: "Perda grave ou total; paciente não sente que está sendo tocado"
      }
    ]
  },
  {
    number: "9",
    title: "Melhor Linguagem",
    tooltip: "Paciente é solicitado a descrever o que está acontecendo no quadro (pdf9/p3), a nomear os itens na lista de identificação (pdf9/p2), e a ler da lista de sentenças (pdf9/p1).",
    options: [
      {
        pt: 0,
        text: "Sem afasia; normal"
      },
      {
        pt: 1,
        text: "Afasia leve a moderada; alguma perda óbvia da fluência ou compreensão, sem limitação significativa das idéias ou expressão"
      },
      {
        pt: 2,
        text: "Afasia grave; comunicação feita através de expressões fragmentadas; grande necessidade de interferência, questionamento e adivinhação"
      },
      {
        pt: 3,
        text: "Mudo, afasia global"
      }
    ]
  },
  {
    number: "10",
    title: "Disartria",
    tooltip: "Testar pedindo ao paciente que leia ou repita palavras da lista (pdf10).",
    options: [
      {
        pt: 0,
        text: "Normal"
      },
      {
        pt: 1,
        text: "Disartria leve a moderada; paciente arrasta pelo menos algumas palavras"
      },
      {
        pt: 2,
        text: "Disartria grave; fala do paciente chega a ser ininteligível"
      },
      {
        pt: 100,
        text: "Intubado ou outra barreira física"
      }
    ]
  },
  {
    number: "11",
    title: "Extinção ou Desatenção",
    tooltip: "A presença de negligência espacial visual ou anosagnosia pode também ser considerada como evidência de negligência.",
    options: [
      {
        pt: 0,
        text: "Nenhuma anormalidade"
      },
      {
        pt: 1,
        text: "Desatenção visual, táctil, auditiva, espacial OU pessoal"
      },
      {
        pt: 2,
        text: "Profunda hemi-desatenção ou hemidesatenção para mais de uma modalidade"
      }
    ]
  }
]

################################################
#                    SCRIPT                    #
# Here the script begins.                      #
# Any change below is made at your own risk.   #
################################################

system("clear") || system("cls")

def to_the_hills(val)
  puts "(Press any key to exit)"
  gets
  exit val
end
def get_field(f)
  # Set field DIV
  field = "<div class=\"field has-addons\">\n  <div class=\"control has-tooltip-arrow has-tooltip-multiline\"data-tooltip=\"{{TOOLTIP}}\">\n    <button class=\"button is-static\"tabindex=\"-1\">\n      {{NUMBER}}. {{TITLE}}\n    </button>\n  </div>\n  <div class=\"control is-expanded\">\n    <div class=\"select is-fullwidth\">\n      <select id=\"nihss-{{NUMBER}}\">\n{{OPTIONS}}\n      </select>\n    </div>\n  </div>\n</div>"
  # Replace strings
  field.gsub!(/{{NUMBER}}/, f[:number].to_s)
  field.gsub!(/{{TITLE}}/, f[:title])
  field.gsub!(/{{TOOLTIP}}/, f[:tooltip])
  # Get OPTIONs and replace them
  options = get_options(f[:options])
  field.gsub!(/{{OPTIONS}}/, options)
  # Return imploded field
  return field
end
def get_options(opts)
  # Initiate options
  options = []
  # Iterate through options
  opts.each_with_index do |o, i|
    # Start OPTION
    option = "       <option value=\"{{PT}}\"{{SELECTED}}>{{TEXT}}</option>"
    # Replace strings
    option.gsub!(/{{PT}}/, o[:pt].to_s)
    option.gsub!(/{{TEXT}}/, o[:text])
    # Check if first option
    if i == 0
      option.gsub!(/{{SELECTED}}/, " selected")
    else
      option.gsub!(/{{SELECTED}}/, "")
    end
    # Push to array
    options.push(option)
  end
  # Return imploded options
  return options.join("\n")
end

def get_parsing(i)
  c = "// Parse item \#{{NUMBER}}\npt = parseInt($(\"#nihss-{{NUMBER}}\").val());\npt = isNaN(pt) ? 0 : pt;\nif (pt == 100) {\n  desc.push(\"{{NUMBER}}=NT\");\n} else {\n  score += pt;\n  if (pt != 0) { desc.push(\"{{NUMBER}}=\" + pt); }\n}"
  # Replace string
  c.gsub!(/{{NUMBER}}/, i[:number].to_s)
  return c
end

# Check which to process
puts "> Criar HTML ou JS? (HTML = padrão)"
foobar = gets.strip.downcase
if foobar != "js"
  # Set file name
  filename = "nihss.html"
  # Initiate array
  items = []
  # Iterate through items
  nihss.each do |i|
    items.push(get_field(i))
  end
  # Set file contents
  writable = items.join("\n\n")
else
  # Set file name
  filename = "nihss.js"
  # Initiate array
  commands = []
  # Iterate through items
  nihss.each do |i|
    commands.push(get_parsing(i))
  end
  # Set file contents
  writable = commands.join("\n")
end

# Write to file
File.open(filename, "w") { |file|
  file.write(writable)
}

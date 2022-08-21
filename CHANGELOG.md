# [Modelo de Prontuários](https://github.com/Nereare/modelos-pront) Changelog

Todas as mudanças significativas nesse projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Não Publicado][Unreleased]
### Adicionado
- Medicações pré-definidas agora incluem duas possibilidades para enxaqueca.
### Modificado
- Geração de UUIDv4 para biblioteca externa, para compatibilidade restrospectiva - obrigado PCs velhos de hospitais.
- Descrição de acompanhante em *Sintomáticos Respiratórios*.

## [2.5.3] - 2022-07-19
### Adicionado
- *Sintomáticos Respiratórios*:
  - Resultado em forma compilada (evolução tradicional) em adição a SOAP;
  - Dose 12/12h para amoxicilina;
  - Amoxicilina dobrada para adultos;
  - **Novos sintomas (disfonia e afonia).**
- *Exame Físico*:
  - Exame neurológico.
- Função para reiniciar *cookies* e variáveis de sessão.
- Configuração de cabeçalho para *Sintomáticos Respiratórios*.
### Corrigido
- *Sintomáticos Respiratórios*:
  - Processamento de diagnóstico.
  - Mudança de cabeçalho entre "Mantém" e "Pioraram" (reavaliação).
  - Processamento de dados de trabalho/família (reavaliação).

## [2.4.12] - 2022-07-10
### Adicionado
- *Pré-Natal*:
  - Opção de exames de Coombs Indireto e VDRL de seguimento;
  - Opção de prescrição de Rhogam; e
  - Opção de solicitação de Implanon.
### Modificado
- *Sintomáticos Respiratórios*:
  - Campos de vacinas e infecção prévia por SARS-CoV-2 agora são opcionais.
  - Redesenhado distribuição de campos de definição de tosse e febre.
### Corrigido
- *Sintomáticos Respiratórios*:
  - Campo de anamnese miscelânea agora não processado (comportamento pretendido para v3, mas não implementado);
  - Processamento de outras comorbidades; e
  - Processamento de resultados de exames prévios para Covid e Influenza.

## [2.4.11] - 2022-06-11
### Adicionado
- Opção de "uso contínuo" em *Prescrições*.
### Corrigido
- Links de comparação de *tags* deste arquivo.
- Erros quanto ao processamento de *output* de medicações em *Prescrições*.

## [2.4.10] - 2022-05-27
### Adicionado
- Instruções para instalação do site.
- Modelos de prescrição pré-definidos.
- Habilidade da página de *Prescrições* de receber parâmetros (via `GET`) para já preparar prescrição pré-definida;
  - E botão-link na página de *Sintomáticos Respiratórios* levando até esta, com pré-definição de receita definida.
### Modificado
- Informações sobre *cookies* atualizadas para refletir os dois novos introduzidos desde última atualização destas informações.
### Corrigido
- Processamento de medicações "dose única" na página de *Prescrições*.
- Capitalização das grafias de referências a métodos `GET` (maiúsculo) nas invocações de `AJAX`.

## [2.3.8] - 2022-05-26
### Adicionado
- Possibilidade de configurar dados de local de emissão de SADTs.
- Possibilidade de incluir dados pessoais médicos para uso em ferramentas.
  - No momento, suportado apenas no *Sintomáticos Respiratórios v3*.
- Versão 3 da página de *Sintomáticos Respiratórios*.
### Corrigido
- Falta de "Prescrições" como opção no menu de configurações.
- Referência a *cookies*.
- Falta de avaliação de atividade/reatividade em *Puericultura*.

## [2.2.5] - 2022-05-21
### Adicionado
- Página de prescrição.
### Modificado
- Estilo das páginas.
- Alguns pontos de funcionalidade de *scripts*.
### Corrigido
- Alguns bugs de execução e referência de *scripts*.

## [1.25.22] - 2022-03-27
### Adicionado
- Código de Conduta de [Contributor Covenant v1.4.1](https://www.contributor-covenant.org/).
- [Licença](LICENSE.md).
- Meta-arquivos git (`.gitignore` and `.gitattributes`).
- Templates do GitHub:
  - *Issues*;
  - Solicitação de melhoria;
  - Pergunta;
  - *Pull request*.
- Arquivo Leia-Me.
- Arquivo de Changelog.
- Arquivo de Guidelines de Contribuição.
- Arquivo de Termos de Uso e página HTML associada.
- Arquivo de Política de Privacidade e página HTML associada.
- Página de Sintomáticos Respiratórios:
  - Modificado dias de sintoma para contar primeiro dia como D1, segundo informativo da Secretaria Municipal de Saúde da Cidade de São Paulo.
- Página de Pré-Natal.
- Página de 404.
- Página de Puericultura.
- Página de Requisição de Implanon.
- Página de Exame Físico genérico.

[Unreleased]: https://github.com/Nereare/modelos-pront/compare/v2.5.3...HEAD
[2.5.3]: https://github.com/Nereare/modelos-pront/compare/v2.4.12...v2.5.3
[2.4.12]: https://github.com/Nereare/modelos-pront/compare/v2.4.11...v2.4.12
[2.4.11]: https://github.com/Nereare/modelos-pront/compare/v2.4.10...v2.4.11
[2.4.10]: https://github.com/Nereare/modelos-pront/compare/v2.3.8...v2.4.10
[2.3.8]: https://github.com/Nereare/modelos-pront/compare/v2.2.5...v2.3.8
[2.2.5]: https://github.com/Nereare/modelos-pront/compare/v1.25.22...v2.2.5
[1.25.22]: https://github.com/Nereare/modelos-pront/releases/tag/v1.25.22

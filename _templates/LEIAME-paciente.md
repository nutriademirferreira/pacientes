# [NOME COMPLETO]

**Início:** [DATA] · **Objetivo:** [OBJETIVO] · **Médico:** [NOME/ESPECIALIDADE]
**Link:** https://nutriademirferreira.github.io/pacientes/[nome-sobrenome]/

## Dados clínicos
[IDADE] anos · [ALTURA] cm · [CONTEXTO: cirurgias, medicamentos, diagnósticos, alergias, esporte]
Peso inicial: [PESO] kg · IMC [IMC]

## Contexto e achados
- [exames alterados com valores, hipóteses, cartas existentes, protocolos pontuais]

## Suplementação prescrita
- [nome · dose · horário]

## Abas existentes na página
[Meu plano / Suplementos / Evolução / Carta ao médico / Carta ao Personal / Progresso]

## Arquivos principais
- `plano-alimentar.html` → dossiê/plano fixo (sempre atualizado)
- `pontuais/` → protocolos especiais
- `index.html` → redireciona automaticamente

## Para ativar protocolo pontual
No index.html, alterar:
- PONTUAL_ATIVO = true
- PONTUAL_ARQUIVO = 'pontuais/[nome-evento].html'
- PONTUAL_LABEL = '[Label do evento]'

## Pendências
- [ ] [o que falta: exames a arquivar, macros a preencher, carta a escrever]

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| [DATA] | [PESO] | plano-alimentar.html | [NOTAS] |

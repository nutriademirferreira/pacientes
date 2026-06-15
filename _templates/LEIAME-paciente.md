# [NOME COMPLETO]

**Início:** [DATA] · **Objetivo:** [OBJETIVO] · **Médico:** [NOME/ESPECIALIDADE]
**Link:** https://nutriademirferreira.github.io/pacientes/[nome-sobrenome]/

## Dados clínicos
[IDADE] anos · [ALTURA] cm · [CONTEXTO]
Peso inicial: [PESO] kg · IMC [IMC]

## Arquivos principais
- `plano-alimentar.html` → plano fixo (sempre atualizado)
- `pontuais/` → protocolos especiais
- `index.html` → redireciona automaticamente

## Para ativar protocolo pontual
No index.html, alterar:
- PONTUAL_ATIVO = true
- PONTUAL_ARQUIVO = 'pontuais/[nome-evento].html'
- PONTUAL_LABEL = '[Label do evento]'

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| [DATA] | [PESO] | plano-alimentar.html | [NOTAS] |

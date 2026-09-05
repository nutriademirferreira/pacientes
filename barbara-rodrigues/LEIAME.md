# Bárbara Rodrigues da Silva

**Início:** Janeiro/2025 (data mais antiga citada na página — primeiro exame do histórico comparativo; data de início do acompanhamento nutricional não informada na página) · **Objetivo:** Emagrecimento · **Médico:** a confirmar (carta ao médico é endereçada de forma genérica a "Dr./Dra. responsável pelo acompanhamento médico" — nome não informado na página)
**Link:** https://nutriademirferreira.github.io/pacientes/barbara-rodrigues/

## Dados clínicos
26 anos, feminino, nascida em 04/11/1999. Faz uso de **tirzepatida** (dose definida pelo médico assistente). Musculação 4 a 6x/semana + cardio 150 min/semana (20–25 min pós-treino + restante nos fins de semana). Altura não informada na página. Peso e IMC não informados na página (aba Evolução vazia).
Peso inicial: a confirmar · IMC a confirmar

## Contexto e achados
- Plano alimentar: 1252 kcal/dia · 129g proteína · 140g carboidrato · 23g gordura · 17g fibras.
- Exames (Hospital Villa Lobos · Rede D'Or, coleta 17/06/2026, comparados com jan/2025 e mar/2026):
  - PCR Quantitativa 3,40 mg/dL (crítico, ref < 1,00) — inflamação sistêmica ativa, sem histórico anterior.
  - Glicemia de jejum caiu de 92 (jan/25) → 86 (mar/26) → 80 mg/dL (jun/26); HbA1c caiu de 5,8% para 5,4%.
  - HOMA-IR 3,8 (insulina 19,34 mU/mL) — resistência insulínica persistente apesar da glicemia melhorada.
  - Colesterol Total 213 mg/dL (elevado) · LDL 134 mg/dL elevado nas 3 coletas consecutivas (130→130→134) · HDL caiu de 64 (mar/26) para 57 (jun/26) · Triglicerídeos 109 mg/dL normal.
  - TGP/ALT em progressão: 17 (jan/25) → 21 (mar/26) → 39 U/L (jun/26), próximo do limite superior (41); TGO estável em 23 U/L, GGT normal 23 U/L.
  - TSH normalizou: 4,71 (jan/25) → 2,54 (mar/26) → 2,45 µIU/mL (jun/26); T4 Livre normal e estável (1,26 ng/dL).
  - Vitamina C 1,1 mg/L — deficiência severa (ref 4,6–15,0), primeira medição.
  - Vitamina D 25-OH 25,37 ng/mL — insuficiente mesmo com 5000 UI/dia em uso.
  - Ácido Fólico caiu de 17,3 (mar/26) para 9,2 ng/mL (jun/26); Homocisteína 11,69 µmol/L no limite superior da referência.
  - Ferritina melhorou de 54,2/54,0 (jan/25, mar/26) para 82,9 ng/mL (jun/26); Hemoglobina subiu de 12,8 para 13,9 g/dL; Ferro sérico saiu de 37 (crítico) para 51 µg/dL (limite inferior).
  - PTH 18,4 pg/mL no piso da referência (18,4–80,1) associado a vitamina D insuficiente e cálcio iônico no limite superior — padrão invertido, sinalizado ao médico para avaliação.
  - Creatinina normal e estável em todas as coletas (0,70 → 0,58 → 0,80 mg/dL).
- Carta ao médico enviada em julho/2026 (endocrinologista/clínico que acompanha a tirzepatida) reportando os achados acima e solicitando reavaliação em setembro/2026.
- Próxima coleta programada para setembro/2026: Vitamina D, Vitamina C, PCR, lipidograma completo, TGP+TGO, ferritina, insulina+HOMA-IR, ácido fólico+homocisteína, PTH.

## Suplementação prescrita
- Vitamina D3 + K2 · 7.000 UI D3 + 100 mcg K2 · almoço, com refeição com gordura (dose ajustada em jun/26)
- Vitamina C · 1.000 mg/dia (500 mg manhã + 500 mg almoço) · água ou suco (dose dobrada em jun/26)
- Ômega-3 · 2g EPA+DHA · almoço, com refeição principal
- Magnésio Bisglicinato · 300 mg · 21h, com água sem cálcio
- Creatina Monohidratada · 3g · pós-treino, com água ou shake
- Zinco Bisglicinato · 15 mg · jantar, com refeição (longe do cálcio) — novo em jun/2026
- Observação da página: não foram prescritos berberina ou cromo neste protocolo, pela interação de risco com a tirzepatida (hipoglicemia).

## Abas existentes na página
Meu plano / Suplementos / Exames / Carta ao médico / Evolução / Carta ao personal / Progresso

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
- [ ] Arquivar PDFs de exames em `exames/` e avaliações em `avaliacao-fisica/` (nenhum arquivado)
- [ ] Aba "Evolução" vazia ("Esta seção será preenchida em breve pelo nutri")
- [ ] Aba "Carta ao personal" vazia
- [ ] Aba "Progresso" vazia
- [ ] Padrão PTH baixo + vitamina D insuficiente + cálcio iônico no limite superior sinalizado na carta ao médico, aguardando avaliação médica

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| Janeiro/2025 | — | — | Primeiro exame do histórico: TSH 4,71 (alterado), TGP 17, ferritina 54,2, LDL 130, ferro sérico 37 (crítico) |
| Março/2026 | — | — | Reavaliação parcial: TSH 2,54 (melhora), TGP 21, ferritina 54,0, LDL 130, folato 17,3 |
| 17/06/2026 | — | plano-alimentar.html | Painel completo (Hospital Villa Lobos): PCR 3,40 crítico, Vit. C 1,1 deficiência severa, Vit. D 25,37 insuficiente, TGP 39, PTH 18,4 no piso |
| Julho/2026 | — | plano-alimentar.html | Suplementação ajustada (D3 para 7000 UI, Vit. C dobrada, Zinco novo) e carta ao médico enviada |

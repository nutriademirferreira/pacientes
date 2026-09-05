# Natasha Casarini Terzi

**Início:** Outubro/2024 (data mais antiga citada — ponto inicial da série histórica de TSH) · **Objetivo:** Dossiê Clínico (header-dossiê da página; não há campo "Emagrecimento/objetivo" padrão nesta página) · **Médico:** a confirmar (página cita "endocrinologista", "ginecologista" e "médico do implante" genericamente, sem nomes)
**Link:** https://nutriademirferreira.github.io/pacientes/natasha-casarini-terzi/

## Dados clínicos
43 anos · Feminino · São Paulo, SP. Pós-tireoidectomia total, em uso de Levotiroxina (dose a confirmar — não informada na página), Tirzepatida, Estradiol (HRT) e Implante de testosterona. Queixas principais: queda de cabelo e desejo de melhorar performance nos treinos. Sem alergias alimentares (IgE caseína e painel FX5 negativos), dieta sem restrições. Exames de referência: 22/06/2026 · Análise clínica: 16/07/2026.
Peso inicial: a confirmar (não consta na página) · IMC a confirmar (não consta na página)

## Contexto e achados
- Pós-tireoidectomia total; anticorpos tireoidianos negativos (Anti-TPO <10,4 U/mL, Anti-TgII <1,3 UI/mL) — sem recidiva autoimune.
- TSH em queda progressiva e abrupta: 1,45 (out/24) → 2,08 (jan/25) → 1,84 (mar/25) → 1,76 (set/25) → 0,35 (jun/26), com T4 Livre subindo de 1,01 para 1,41 no mesmo período — TSH abaixo da referência (0,40–4,30). Hipóteses levantadas: dose de levotiroxina alta demais ou artefato por biotina em suplemento capilar. Encaminhamento urgente ao endocrinologista.
- ASLO (Antiestreptolisina O) em 269 UI/mL, acima da referência (≤200) — indica infecção estreptocócica recente ou em curso; encaminhado para investigação médica.
- Testosterona Total em ascensão acelerada: 13,07 ng/dL (dez/24) → 26,48 (mar/25) → 52,68 (jun/26) — já em 89% do teto feminino (59,46 ng/dL), com implante ativo; monitorar para não agravar queda de cabelo androgênica. DHT dentro da faixa normal (120,5 pg/mL).
- FSH 12,7 mUI/mL, acima da referência folicular (2,5–10,2), mesmo com estradiol exógeno em nível terapêutico (107,1 pg/mL) — sinaliza reserva ovariana diminuída / início de perimenopausa (43 anos). Progesterona indetectável (<0,21 ng/mL) — sem progesterona no protocolo atual.
- Zinco (71,8 µg/dL) e Magnésio (1,9 mg/dL) no limite inferior da referência — clinicamente relevante para a queixa de queda de cabelo; tirzepatida reduzindo a ingestão alimentar é fator associado.
- Metabolismo glicídico excelente: HbA1c 5,1%, HOMA-IR 1,03.
- HDL subiu de 40 para 65 mg/dL em 13 meses (+62,5%) — atribuído à combinação tirzepatida + estradiol + melhora alimentar. Demais lipídios excelentes (TG 75, CT 188, LDL 107).
- Cálcio ionizado normal (1,13 mmol/L) — paratireoides preservadas pós-tireoidectomia (marcador crítico para hipoparatireoidismo).
- Ferritina 87,8 ng/mL — considerada adequada para saúde capilar (acima do threshold de 50–70 ng/mL); não é apontada como causa da queda de cabelo.
- Vitamina B12 muito elevada (1138 pg/mL, acima da referência 223–672) — suplementação de B12 deve ser suspensa; risco de hipervitaminose B12 crônica.
- Ureia (21 mg/dL, baixo-normal) e creatinina em queda (0,82 → 0,70 mg/dL) — sinal de ingestão proteica insuficiente e possível perda de massa muscular associada à tirzepatida; meta mínima definida de 2,0 g/kg/dia de proteína.
- CPK muito baixo (90 U/L vs. 404 U/L em 2023) — interpretado como queda na intensidade/volume de treino, coerente com menor ingestão calórica.
- Leitura da queda de cabelo: multifatorial — componente androgênico (testosterona subindo), possível TSH suprimido, zinco marginal e possível estresse metabólico da tirzepatida (eflúvio telógeno). Ferritina e B12 descartados como causa principal.

## Suplementação prescrita
- Zinco Quelado · 15 mg/dia · No almoço, com alimento — Urgente (reavaliar zinco sérico em 90 dias)
- Magnésio Glicinato · 300–400 mg/dia · À noite, antes de dormir — Urgente
- Proteína em Pó (Whey isolado ou concentrado) · 20–30 g/dia (1 scoop) · Pós-treino ou no lanche — Urgente
- Vitamina D · manter dose atual (52 ng/mL, adequada) · Com a refeição maior (almoço ou jantar) — Manutenção
- Suspender: Vitamina B12 (já em 1138 pg/mL, acima do limite superior)
- Investigar antes de usar: Biotina em altas doses (pode causar artefato laboratorial no TSH — checar rótulo do suplemento capilar em uso)

## Abas existentes na página
Resumo / Histórico Clínico / Suplementação / Plano de Ação

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
- [ ] Arquivar PDFs de exames em `exames/` e avaliações em `avaliacao-fisica/` (pastas já existem na estrutura do paciente, mas conteúdo não conferido nesta leitura)
- [ ] Endocrinologista — investigar TSH 0,35 (urgente, antes da próxima coleta; checar uso de biotina)
- [ ] Médico — investigar ASLO 269 (urgente, 1–2 semanas)
- [ ] Reavaliar Zinco e Magnésio em 90 dias
- [ ] Confirmar dose atual de Levotiroxina (página registra "dose a confirmar")
- [ ] Próxima bateria sugerida na página (90 dias): TSH+T4L (biotina suspensa 48h antes), Testosterona Total+DHT, Zinco sérico, Magnésio, Ureia+Creatinina, ASLO (confirmar resolução), Albumina
- [ ] Página não segue o template padrão de plano alimentar (não há abas "Meu plano" / "Carta ao médico" no formato usual)

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| Outubro/2024 | — | plano-alimentar.html | TSH 1,45 (ponto mais antigo da série histórica) |
| Dezembro/2024 | — | plano-alimentar.html | Testosterona Total 13,07 ng/dL |
| Janeiro/2025 | — | plano-alimentar.html | TSH 2,08 |
| Março/2025 | — | plano-alimentar.html | TSH 1,84; Testosterona Total 26,48 ng/dL |
| Maio/2025 | — | plano-alimentar.html | HDL 40 mg/dL |
| Setembro/2025 | — | plano-alimentar.html | TSH 1,76 |
| 22/06/2026 | — | plano-alimentar.html | Bateria completa de exames: TSH 0,35 (abaixo do normal), Testosterona 52,68, HDL 65, ASLO 269, Zinco/Magnésio no limite inferior, creatinina 0,70 |
| 16/07/2026 | — | plano-alimentar.html | Data da análise clínica / elaboração do dossiê |

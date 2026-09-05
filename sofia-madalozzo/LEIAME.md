# Sofia Bedinote Madalozzo — Ficha Clínica

**Início:** ago/2026 · **Objetivo:** Recomposição corporal · **Médica:** Dra. Simone Arenzon
**Link:** https://nutriademirferreira.github.io/pacientes/sofia-madalozzo/

## Dados gerais
- **Idade:** 26 anos (nascida 23/09/1999)
- **Altura:** 164 cm
- **Peso atual:** 70,5 kg (ago/2026)
- **IMC:** 26,2 (classificação enganosa — alta massa muscular)
- **Treino:** Crossfit diário (praticamente todos os dias)

## Contexto clínico
- Mulher saudável, sem condições clínicas ativas
- Processo de emagrecimento em 2024: perdeu 10 kg
- Atualmente em fase de recomposição corporal
- Sem uso de medicamentos relatados
- HCG indetectável em múltiplas coletas desde 2018

## Composição corporal
| Data | Peso | MLG | Massa Musc. | % Gordura | Somatório |
|---|---|---|---|---|---|
| Jun/2026 | 68,8 kg | 53,4 kg | 26,5 kg | 22,4% | 116,1 mm |
| Ago/2026 | 70,5 kg | 56,0 kg | 28,8 kg | 20,5% | 102,8 mm |

**Destaque:** +2,3 kg de músculo e -0,9 kg de gordura em 51 dias.

## Exames laboratoriais — jun/2026 (Fleury/Weinmann)
- **CT:** 211 mg/dL ⚠️ | **HDL:** 43 mg/dL ⚠️ | **TG:** 140 mg/dL ⚠️ | **LDL estimado:** ~140
- **TGO:** 17 ✅ | **TGP:** 14 ✅ | **GGT:** 12 ✅
- **CK:** 86 U/L ✅ | **Hemoglobina:** 14,1 ✅ | Hemograma normal
- Suspeita de coleta sem jejum ideal para o lipidograma de jun/26 — repetir

## Lacunas laboratoriais (nunca avaliadas)
- Ferritina / ferro sérico | Vitamina D | TSH + T4L | Insulina + HOMA-IR | Zinco | Magnésio

## Suplementação prescrita (ago/2026)
- Ômega-3 2–3g/dia — almoço
- Creatina monoidratada 3–5g/dia — pós-treino
- Magnésio bisglicinato 300–400mg/dia — jantar
- Vitamina D3 + K2 2.000–4.000 UI/dia — almoço (aguardar dosagem)
- Whey isolate 25–30g — pós-treino (se necessário)

## Meta proteica
1,8–2,2g/kg/dia = 127–155g/dia para 70,5 kg

## Abas existentes na página
Evolução / Exames / Suplementos / Solicitar / Progresso

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
- [ ] Repetir lipidograma com 12h de jejum e 72h de abstinência alcoólica (queda suspeita de HDL 55→43 e subida de TG 90→140 entre mai/26 e jun/26)
- [ ] Solicitar painel de exames faltantes: ferritina + ferro sérico + saturação de transferrina, vitamina D (25-OH), TSH + T4 livre, insulina de jejum + HOMA-IR, zinco sérico, magnésio sérico
- [ ] Monitorar dobra suprailíaca (única que subiu, +1,0mm) na próxima avaliação
- [ ] Monitorar circunferência abdominal (+3,1cm apesar da dobra abdominal ter caído — possível hipertrofia muscular local, mas acompanhar)
- [ ] Ajustar dose de Vitamina D3+K2 assim que sair a dosagem de 25-OH-vitamina D (atualmente sem valor de referência)
- [ ] Página não possui abas de Carta ao médico, Carta ao personal ou Meu plano

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| Set/2020 | a confirmar | plano-alimentar.html | Exame laboratorial: TGO 21 U/L, TGP 20 U/L (função hepática normal) |
| Fev/2022 | a confirmar | plano-alimentar.html | Exame laboratorial: hemoglobina 13,8 g/dL |
| Nov/2022 | a confirmar | plano-alimentar.html | Exame laboratorial: CT 223 mg/dL (elevado), HDL 49, TG 132, TGO 22, TGP 20, CK 181 e 123 U/L (duas coletas), hemoglobina 13,7 g/dL |
| Dez/2024 | a confirmar | plano-alimentar.html | Processo de emagrecimento: perdeu 10 kg. Exame: CT 166 mg/dL (mínimo histórico), HDL 40, TG 79, TGO 16, TGP 13, hemoglobina 13,7 g/dL. Início do crossfit como modalidade principal |
| Fev/2026 | a confirmar | plano-alimentar.html | Exame laboratorial: CT 198 mg/dL, HDL 48, TG 132, TGO 19, TGP 16, CK 145, hemoglobina 14,0 g/dL |
| Mai/2026 | a confirmar | plano-alimentar.html | Exame laboratorial: CT 197 mg/dL, HDL 55 (meta de atleta atingida), TG 90 — padrão compatível com atleta de crossfit saudável |
| Jun/2026 | 68,8 kg | plano-alimentar.html | Baseline composição corporal (avaliação 13/06/2026). Exames Fleury/Weinmann coletados 10/06/2026: CT 211 (elevado), HDL 43 (queda suspeita), TG 140 (subida suspeita), TGO 17, TGP 14, GGT 12, CK 86, hemoglobina 14,1, hemograma e hepatograma normais, HCG indetectável — suspeita de coleta sem jejum ideal, recomendado repetir |
| Ago/2026 | 70,5 kg | plano-alimentar.html | Segunda avaliação (03/08/2026), 51 dias após baseline. Recomposição confirmada: +2,3 kg músculo, -0,9 kg gordura, somatório de dobras -13,3mm. Webapp criado. Suplementação prescrita. |

# Alberth Vinícius

**Início:** 09/02/2026 (data mais antiga citada — ultrassons de tireoide e abdome) · **Objetivo:** Análise Cardiológica e TRT (header-dossiê da página; não há campo "Emagrecimento/objetivo" padrão nesta página) · **Médico:** a confirmar (página cita "endocrinologista" e "equipe médica" genericamente, sem nome)
**Link:** https://nutriademirferreira.github.io/pacientes/alberth-vinicius/

## Dados clínicos
33 anos · Masculino · São Paulo, SP. Perda de peso massiva já realizada: peso atual 100 kg (−33 kg desde o pico), IMC 32,8 (era 43,9 no início), % gordura 12,5% (zona de atleta), massa magra 84,8 kg (−12,2 kg desde o pico), CMB 34,0 cm (−1,7 cm recentemente). Contexto clínico: avaliação de elegibilidade para TRT (Terapia de Reposição de Testosterona com Deposteron), atualmente contraindicada até resolução de 3 pendências (ver abaixo). Exames laboratoriais em 03/03/2026; ECG e ecocardiograma em 10/02/2026; doppler de carótidas em 19/02/2026; ultrassons de tireoide e abdome em 09/02/2026.
Peso inicial: a confirmar (não informado em kg; apenas delta de −33 kg desde o pico) · IMC inicial 43,9 (atual: 32,8)

## Contexto e achados
- Perda de massa magra concomitante à perda de peso: MLG caiu 12,2 kg desde o pico e CMB caiu 1,7 cm recentemente — ponto de atenção nutricional ativo.
- ECG (10/02/2026): normal, 66 bpm, ritmo sinusal, sem bloqueios nem arritmias. Ecocardiograma (10/02/2026): fração de ejeção 68% (acima do normal), sem hipertrofia ventricular, função diastólica conservada — coração liberado do ponto de vista cardiovascular para TRT.
- Doppler de carótidas (19/02/2026): CMI direita 0,62mm (normal), CMI esquerda 0,73mm (borderline, referência <0,70mm para 33 anos), sem placas — combinado com homocisteína elevada, sugere processo aterosclerótico em estágio inicial.
- Ultrassons (09/02/2026): tireoide normal (11,6 cm³, sem nódulos); abdome normal (fígado sem esteatose, vesícula e rins normais).
- Exames laboratoriais (03/03/2026): metabolismo glicídico excelente (glicemia 95, HbA1c 5,3%, HOMA-IR 1,20); função hepática excelente (GGT caiu de 61 para 22 em 4 anos, −64%; TGP de 26 para 16); perfil lipídico bom, exceto HDL limítrofe (43,9 mg/dL, referência >40).
- Achado principal 1: Testosterona Total 863,39 ng/dL, acima da referência (165–753) — impede início seguro de TRT sem antes colher LH e FSH para entender a origem.
- Achado principal 2: Homocisteína 15,72 µmol/L, acima da referência (3,7–13,9) — considerado o achado cardiovascular mais relevante do painel, agravado pelo espessamento de carótida esquerda.
- Achado principal 3: Ferritina 341 ng/mL, acima da referência masculina (22–322) — risco de policitemia se TRT com Deposteron for iniciada sem controle.
- Outros achados de atenção: TSH 0,67 (limite inferior), DHEA 2,0 ng/mL (terço inferior), PTH 16,7 pg/mL (abaixo da referência), Magnésio 1,8 mg/dL (limite inferior), Vitamina C 36,70 µmol/L (baixo-normal).
- Veredito da página: TRT cardiovascularmente liberada; TRT global "aguardar" até resolução das 3 condições pendentes.

## Suplementação prescrita
- Metilfolato · 800 mcg · Manhã, junto com a primeira refeição — para reduzir homocisteína
- Metilcobalamina (B12) · 1.000 mcg · Manhã, junto com a primeira refeição — para reduzir homocisteína
- Vitamina B6 · 50 mg · Manhã, junto com a primeira refeição — para reduzir homocisteína
- Magnésio Citrato · 300 mg · À noite, antes de dormir — magnésio estava no limite inferior
- Vitamina C · aumentar para 500 mg/dia · horário não especificado — proteção endotelial enquanto homocisteína está elevada

## Abas existentes na página
Resumo / Histórico Clínico / Imagens / Plano de Ação

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
- [ ] Arquivar PDFs de exames em `exames/` e avaliações em `avaliacao-fisica/` (pastas já existem na estrutura do paciente, mas conteúdo não conferido nesta leitura — anexar os PDFs de 03/03/2026, 10/02/2026, 19/02/2026 e 09/02/2026)
- [ ] Colher LH, FSH, Testosterona livre e PSA (marcado como "imediato" no Plano de Ação; sem data de retorno registrada na página)
- [ ] Reavaliar homocisteína em 90 dias (meta: abaixo de 13,9 µmol/L)
- [ ] Monitorar ferritina, hematócrito e composição corporal (perda de massa magra) na próxima bateria
- [ ] Página não segue o template padrão de plano alimentar (não há abas "Meu plano" / "Suplementos" / "Carta ao médico" no formato usual) — suplementação está descrita apenas dentro da aba Plano de Ação

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| 09/02/2026 | — | plano-alimentar.html | Ultrassom de tireoide (normal) e abdome (normal, fígado sem esteatose) |
| 10/02/2026 | — | plano-alimentar.html | ECG normal (66 bpm) e Ecocardiograma (FE 68%, sem hipertrofia) — coração liberado para TRT |
| 19/02/2026 | — | plano-alimentar.html | Doppler de carótidas: CMI esquerda 0,73mm (borderline), sem placas |
| 03/03/2026 | 100 kg | plano-alimentar.html | Exames laboratoriais completos; testosterona 863,39, ferritina 341, homocisteína 15,72 — TRT pendente de 3 condições |

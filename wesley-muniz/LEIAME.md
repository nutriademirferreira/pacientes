# Wesley Muniz Jacinto

**Início:** 19/07/2025 (única data citada na página — montagem do plano) · **Objetivo:** Emagrecimento · Atualizado em 19/07/2025 · **Médico:** a confirmar
**Link:** https://nutriademirferreira.github.io/pacientes/wesley-muniz/

## Dados clínicos
Idade, altura, sexo e peso: a confirmar (não constam na página). Sem exames, diagnósticos, alergias ou medicações citados. Treino diário às 07:00 (indicado na barra do plano alimentar). Objetivo declarado: emagrecimento com preservação de massa magra.
Peso inicial: a confirmar (aba Evolução mostra "peso atual: a medir" — 1ª avaliação física ainda não realizada) · IMC a confirmar

## Contexto e achados
- Ainda sem avaliação física registrada: aba Evolução mostra todos os campos como "a medir" (1ª avaliação pendente).
- Meta calórica prescrita: 2.306 kcal/dia · 206g PTN/dia · 264g CHO/dia · 52g LIP/dia.
- Foco central do protocolo é uma extensa lista de "proibidos" por categoria (carnes gordurosas/embutidos, frituras/ultraprocessados, fast food, doces/açúcares fora do plano, bebidas calóricas), com a lógica de que "bater os macros" não basta se a qualidade dos alimentos for ruim (ex.: comparativo salsicha vs. filé de frango, batata frita vs. batata-doce assada).
- "Felicidade planejada" incluída no plano: doce de leite 30g, leite condensado 30g, chocolate ao leite 20g — não deve ser somada a mais doces fora do plano.
- Projeção de resultado estruturada em Semana 4 / Semana 8 / Semana 12 / Meta Final, todas com peso "a medir" — sem dados reais lançados ainda.
- Abas "Carta ao médico", "Carta ao Personal" e "Progresso": estado vazio (nenhum conteúdo redigido, aguardando 1ª avaliação física).

## Suplementação prescrita
- Whey Protein Concentrado · 30g por uso · Café da manhã + Lanche + Almoço (se necessário), com iogurte ou água — Prioritário
- Hipercalórico · 80g · 18:00, com água ou leite desnatado — Importante

## Abas existentes na página
Proibidos / Meu plano / Suplementos / Evolução / Carta ao médico / Carta ao Personal / Progresso

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
- [ ] Primeira avaliação física ainda não realizada (peso, evolução e progresso "a medir")
- [ ] Idade, altura, sexo e dados clínicos básicos não constam na página — coletar na próxima consulta
- [ ] Aba "Carta ao médico" em estado vazio
- [ ] Aba "Carta ao Personal" em estado vazio
- [ ] Aba "Progresso" em estado vazio

## Histórico de consultas

| Data | Peso | Arquivo | Notas |
|---|---|---|---|
| 19/07/2025 | a medir | plano-alimentar.html | Primeiro plano alimentar montado (2.306 kcal, 206g PTN/dia); foco em eliminar "proibidos" da dieta; 1ª avaliação física ainda pendente |

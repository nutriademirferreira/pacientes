# SPEC — Guia mestre de construção de páginas de paciente
> Leia este arquivo em vez do template completo. Economiza ~900 linhas por sessão.

---

## IDENTIDADE VISUAL (CSS vars — nunca alterar)
```
--verde:#536147  --ouro:#B8956A  --carvao:#272520
--creme:#F4EFE4  --creme-suv:#FDFAF5  --bege:#EBE4D5
--cinza:#706B63  --sage:#8A9B78  --alerta:#C2785A
```
Fontes: `Cormorant Garamond` (títulos) + `Jost` (corpo) via Google Fonts.

---

## ESTRUTURA DO ARQUIVO HTML

```
<head>
  OG meta tags (og:title, og:description, og:image, og:image:width=1200, og:image:height=630, og:type)
  og:image = https://nutriademirferreira.github.io/pacientes/_assets/og-image.jpg
</head>
<body>
  .nav-sticky > .header + nav.nav
  .conteudo > abas (.aba / .aba.ativa)
  .banner-instalar (fixo no bottom)
  #modal-instalar
  #modal-receita
  <script> (receitas + mudarAba + toggleRefeicao + toggleSubs + banner + imprimirCarta)
</body>
```

---

## ABAS PADRÃO (ordem no nav)
| id | label |
|----|-------|
| meu-plano | Meu plano |
| suplementos | Suplementos |
| evolucao | Evolução |
| carta-medico | Carta ao médico |
| carta-personal | Carta ao Personal |
| progresso | Progresso |

Aba ativa padrão: `meu-plano`. Para pacientes só com suplementação: ativar `suplementos`.  
Classe ativa: `.aba.ativa` no div + `.nav-btn.ativo` no botão.

---

## COMPONENTES — CLASSES E ESTRUTURA

### Header
```html
<div class="header-nutri">Ademir Ferreira Junior</div>
<div class="header-crn">Nutricionista · CRN-3 72295</div>
<div class="header-paciente">[NOME]</div>
<div class="header-meta">[META] · Atualizado em [DATA]</div>
```

### Cards de macros (.macros — grid 5 colunas)
```html
<div class="macros">
  <div class="macro-card destaque">   <!-- calorias, fundo verde -->
  <div class="macro-card">           <!-- PTN, CHO, LIP, FIB -->
```
Classes internas: `.macro-label` `.macro-valor` (Cormorant 26px ouro) `.macro-unidade`

### Refeição colapsável
```html
<div class="refeicao" id="ref-N">
  <div class="refeicao-header" onclick="toggleRefeicao('ref-N')">
    <div class="refeicao-hora">   <!-- ex: 07:00 -->
    <div class="refeicao-nome">   <!-- Cormorant verde -->
    <div class="refeicao-kcal">   <!-- "265 kcal · 18g PTN · 8g CHO · 12g LIP" -->
    <span class="refeicao-chevron">⌄</span>
  <div class="refeicao-corpo">   <!-- display:none, abre com .aberta -->
    <div class="alimento"> × N
    <button class="btn-receita">
```

### Alimento
```html
<div class="alimento">
  <div class="alimento-top">
    <div>
      <div class="alimento-nome">   <!-- SEMPRE com forma de preparo: "Frango grelhado" -->
      <div class="alimento-macros"> <!-- "18g PTN · 0g CHO · 5g LIP" -->
    <div class="alimento-qtd">      <!-- "100g" — verde, negrito -->
  <button class="subs-toggle" onclick="toggleSubs(this)">↕ Ver substituições</button>
  <div class="subs-lista">
    <div class="subs-titulo">Pode substituir por:</div>
    <div class="sub-item"><span class="sub-nome">X</span><span class="sub-qtd">Xg</span></div>
```
**REGRA:** macros sempre do alimento preparado (nunca cru). Usar TACO/TBCA. Nunca estimar.

### Suplemento
```html
<div class="supl-item">
  <div class="supl-top">
    <div class="supl-nome">[NOME]</div>
    <span class="badge badge-urgente">Prioritário</span>   <!-- ou badge-importante / badge-complementar -->
  <div class="supl-grid">   <!-- 3 colunas -->
    <div class="supl-campo"><div class="supl-campo-label">Dose</div><div class="supl-campo-valor">X</div></div>
    <div class="supl-campo">Horário</div>
    <div class="supl-campo">Com</div>
  <div class="supl-just">[justificativa clínica — font-size:12px cinza]</div>
```
Badges: `badge-urgente` (#FAE8E4 / #993C1D) · `badge-importante` (#FFF3E0 / #854F0B) · `badge-complementar` (creme/cinza)

### Evolução
```html
<div class="evolucao-grid">  <!-- grid 2 colunas -->
  <div class="evolucao-card">
    <div class="evolucao-label">  <!-- uppercase 10px cinza -->
    <div class="evolucao-valor">  <!-- Cormorant 28px verde -->
    <div class="evolucao-delta delta-pos">  <!-- delta-pos=verde / delta-neg=alerta -->
```
Projeção: `.semanas-grid` (2 col) > `.semana-card` / `.semana-card.evento` (borda ouro)

### Carta (médico / personal)
Estado vazio (padrão):
```html
<div class="carta-vazia">
  <div class="carta-vazia-titulo">Nenhuma carta disponível</div>
  <p>O nutri ainda não escreveu...</p>
```
Com carta: `.carta-wrapper` > `.carta-header` (verde) + `.carta-linha-ouro` + `.carta-corpo`  
Botão PDF: `<button class="btn-imprimir" onclick="imprimirCarta('id-do-elemento')">`

### Dobras cutâneas (tabela)
Thead fundo verde, colunas: Dobra | Atual (mm) | Anterior | Delta  
Linhas alternam `var(--creme-suv)` e `var(--creme)`.  
Delta classes: `delta-pos` (verde) / `delta-neg` (alerta)

### Banner instalar (fixo bottom)
`localStorage` key = `'banner-instalar-fechado-[SLUG_PACIENTE]'` — usar slug único por paciente para evitar colisão.

---

## REGRAS DE NEGÓCIO

1. **Sem travessão nos textos** — nunca usar — em textos visíveis ao paciente. Substituir por vírgula, ponto ou reescrever.
2. **Macros sempre preparados** — peso e macros referem ao alimento após preparo.
2. **TACO/TBCA obrigatório** — nunca estimar valores nutricionais.
3. **Calorias do plano** — conferir soma antes de publicar (erro Kelly: 1.637 vs 1.200 declarados).
4. **localStorage slug único** — `banner-instalar-fechado-[slug]` para cada paciente.
5. **OG image** — sempre apontar para `_assets/og-image.jpg` (já existe no repo).
6. **Projeção de peso** — valor único por semana, nunca faixa ("78,5kg", não "78–79kg").
7. **Cartas** — estado vazio por padrão; descomentar bloco quando carta for escrita.

---

## GITHUB PAGES
- Repo: `nutriademirferreira/pacientes`
- URL base: `https://nutriademirferreira.github.io/pacientes/`
- Arquivo: `[slug-paciente]/plano-alimentar.html`
- Push: `git -C "..." push` (remote já configurado)

---

## WORKFLOW PARA NOVO PACIENTE
1. Ler este SPEC.md (não o template completo)
2. Criar `[slug]/plano-alimentar.html` usando as classes/estrutura acima
3. Substituir `banner-instalar-fechado` pelo slug do paciente
4. Preencher OG title com nome do paciente
5. Commit + push

## WORKFLOW PARA EDIÇÃO
1. `grep -n "termo"` no arquivo para localizar linha exata
2. `Read` com `offset` e `limit` só no trecho necessário
3. `Edit` cirúrgico — nunca reler o arquivo inteiro

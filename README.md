# Nutri Ademir Ferreira — Consultório

Repositório central dos webapps de pacientes, publicados via GitHub Pages.

Site: https://nutriademirferreira.github.io/pacientes/
Link de cada paciente: `https://nutriademirferreira.github.io/pacientes/[slug]/`

## Estrutura

```
nutri-consultorio/
├── CLAUDE.md                  ← instruções permanentes (fluxos, regras clínicas, identidade visual)
├── _templates/
│   ├── SPEC.md                ← guia mestre de construção de página (ler ANTES de criar/editar)
│   ├── index-paciente.html    ← index canônico (redirect + config de protocolo pontual)
│   ├── LEIAME-paciente.md     ← modelo de ficha clínica
│   ├── template-plano-fixo.html
│   └── template-pontual.html
├── _scripts/
│   ├── novo-paciente.sh       ← cria pasta completa do paciente
│   └── publicar.sh            ← commit + push
├── _config/pwa-manifest.json  ← manifest PWA compartilhado
├── _assets/                   ← og-image.jpg, icon-192.png, icon-512.png
└── [slug-paciente]/           ← UMA pasta por paciente, NA RAIZ
    ├── LEIAME.md              ← ficha clínica + histórico de consultas (fonte de contexto)
    ├── index.html             ← redireciona para plano fixo ou pontual ativo
    ├── plano-alimentar.html   ← dossiê/plano fixo (sempre atualizado)
    ├── pontuais/              ← protocolos especiais (evento, viagem)
    ├── avaliacao-fisica/      ← PDFs de composição corporal
    ├── exames/                ← PDFs de exames laboratoriais
    ├── cartas-medicas/        ← encaminhamentos
    └── devolutivas/           ← protocolos de suplementação
```

## Padrão canônico de página

Definido em `_templates/SPEC.md`. Referências vivas: `kelly-christianne/` e `camila-conceicao-pereira/`.
Abas fixas: Meu plano · Suplementos · Evolução · Carta ao médico · Carta ao Personal · Progresso.

## Novo paciente

```bash
bash _scripts/novo-paciente.sh nome-sobrenome "Nome Completo"
```

Depois: preencher `LEIAME.md`, criar `plano-alimentar.html` conforme SPEC, publicar.

## Publicar

```bash
bash _scripts/publicar.sh "mensagem"
```

Um pre-commit hook bloqueia commits se alguma pasta de paciente estiver sem `index.html`.

## Pacientes

Lista viva: cada pasta na raiz é um paciente. A ficha de cada um está no `LEIAME.md` da pasta.

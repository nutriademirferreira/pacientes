#!/bin/bash
# Uso: bash _scripts/novo-paciente.sh nome-sobrenome "Nome Completo"
SLUG=$1
NOME=${2:-"[NOME_PACIENTE]"}
if [ -z "$SLUG" ]; then echo "Uso: bash _scripts/novo-paciente.sh nome-sobrenome \"Nome Completo\""; exit 1; fi
BASE="$(cd "$(dirname "$0")/.." && pwd)"
PASTA="$BASE/$SLUG"
if [ -d "$PASTA" ]; then echo "⚠ Pasta já existe: $SLUG/"; exit 1; fi

mkdir -p "$PASTA"/{pontuais,avaliacao-fisica,exames,cartas-medicas,devolutivas}

# LEIAME a partir do modelo
sed -e "s/\[NOME COMPLETO\]/$NOME/" -e "s/\[nome-sobrenome\]/$SLUG/" "$BASE/_templates/LEIAME-paciente.md" > "$PASTA/LEIAME.md"

# index.html canônico (redirect + config de pontual) a partir do template
PRIMEIRO=$(echo "$NOME" | awk '{print $1}')
sed -e "s/\[NOME_PACIENTE\]/$NOME/" -e "s/\[PRIMEIRO_NOME\]/$PRIMEIRO/" "$BASE/_templates/index-paciente.html" > "$PASTA/index.html"

echo "✓ Criado: $SLUG/ ($NOME)"
echo "✓ Subpastas: pontuais/ avaliacao-fisica/ exames/ cartas-medicas/ devolutivas/"
echo "✓ index.html canônico + LEIAME.md gerados"
echo "→ Próximo: criar $SLUG/plano-alimentar.html seguindo _templates/SPEC.md"
echo "→ Depois: preencher LEIAME.md e publicar com _scripts/publicar.sh"

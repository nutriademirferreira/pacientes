#!/bin/bash
# Uso: ./publicar.sh "mensagem"
MENSAGEM=${1:-"atualização $(date '+%d/%m/%Y %H:%M')"}
cd "$(cd "$(dirname "$0")/.." && pwd)" || exit
git add .
git commit -m "$MENSAGEM"
git push
echo "✓ Publicado: $MENSAGEM"
echo "→ Aguarde ~1 min para o link atualizar"

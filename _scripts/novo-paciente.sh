#!/bin/bash
# Uso: ./novo-paciente.sh ana-caroline
PACIENTE=$1
if [ -z "$PACIENTE" ]; then echo "Uso: ./novo-paciente.sh nome-sobrenome"; exit 1; fi
BASE="$(cd "$(dirname "$0")/.." && pwd)"
PASTA="$BASE/pacientes/$PACIENTE"
mkdir -p "$PASTA"/{protocolo,avaliacao-fisica,exames,cartas-medicas,devolutivas}
cp "$BASE/_templates/LEIAME-paciente.md" "$PASTA/LEIAME.md"
echo "✓ Criado: pacientes/$PACIENTE"
echo "→ Preencha o LEIAME.md com os dados do paciente"

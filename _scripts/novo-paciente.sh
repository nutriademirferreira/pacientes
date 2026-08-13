#!/bin/bash
# Uso: ./novo-paciente.sh ana-caroline
PACIENTE=$1
if [ -z "$PACIENTE" ]; then echo "Uso: ./novo-paciente.sh nome-sobrenome"; exit 1; fi
BASE="$(cd "$(dirname "$0")/.." && pwd)"
PASTA="$BASE/$PACIENTE"
mkdir -p "$PASTA"/{pontuais,avaliacao-fisica,exames,cartas-medicas,devolutivas}
cp "$BASE/_templates/LEIAME-paciente.md" "$PASTA/LEIAME.md"

# index.html — redirect obrigatório para o webapp funcionar no GitHub Pages
cat > "$PASTA/index.html" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0; url=plano-alimentar.html">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#536147">
<title>Nutri Ademir Ferreira</title>
<script>window.location.replace('plano-alimentar.html');</script>
</head>
<body style="background:#F4EFE4;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0">
<p style="color:#536147">Redirecionando...</p>
</body>
</html>
HTMLEOF

echo "✓ Criado: $PACIENTE/"
echo "✓ index.html gerado (redirect para plano-alimentar.html)"
echo "→ Preencha o LEIAME.md com os dados do paciente"

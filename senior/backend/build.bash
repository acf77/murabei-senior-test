#!/bin/bash
echo "🔧 Iniciando build da imagem Docker do backend..."

docker build -t backend:latest .

if [ $? -eq 0 ]; then
  echo "✅ Imagem backend:latest criada com sucesso."
else
  echo "❌ Erro ao criar a imagem Docker do backend."
  exit 1
fi

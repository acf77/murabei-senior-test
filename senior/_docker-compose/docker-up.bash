#!/bin/bash

echo "🧼 Removendo containers antigos..."
docker-compose rm -f

echo "🚀 Subindo containers com Docker Compose..."
COMPOSE_HTTP_TIMEOUT=200 docker compose up --force-recreate --remove-orphans > docker.log &

echo "📜 Logs estão sendo gravados em docker.log"
echo "✅ Containers em processo de inicialização."

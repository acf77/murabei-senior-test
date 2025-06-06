#!/bin/bash

echo "Iniciando build do frontend..."
docker build -t frontend:latest .

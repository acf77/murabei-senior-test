# Etapa 1 - Imagem base leve do Python
FROM python:3.9-slim AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas o arquivo de dependências
COPY requirements.txt .

# Instala as dependências (evita cache do pip)
RUN pip install --no-cache-dir -r requirements.txt

# Copia os arquivos da aplicação
COPY . .

# Expõe a porta da API Flask
EXPOSE 5000

# Comando padrão para rodar a API
CMD ["python", "app.py"]

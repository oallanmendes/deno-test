# Use a imagem base mais leve do Node.js
FROM node:22-bullseye

# Atualize pacotes necessários e instale dependências em uma única camada
RUN apt update &&\
    apt upgrade -y

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos necessários para instalar as dependências
COPY package*.json yarn.lock ./

# Instale as dependências
RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos do projeto
COPY . .

EXPOSE 3000

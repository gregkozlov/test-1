FROM node:16-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000

СMD ["npm","start"]










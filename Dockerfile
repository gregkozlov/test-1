FROM node:16-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]

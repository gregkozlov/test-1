FROM node:16-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
 
FROM nginx:1.19-alpine 
COPY ./nginx/nginxl.conf

CMD [ "npm", "start" ]

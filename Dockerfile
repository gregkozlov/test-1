FROM node:16-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 80

RUN npm start


FROM nginx:1.19-alpine 

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .










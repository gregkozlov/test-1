FROM node:16-slim as public

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
 
FROM nginx:1.19-alpine 
COPY ./nginx/nginx.conf etc/nginx/nginx.conf
COPY --from=public /app/public usr/share/nginx

CMD [ "npm", "start" ]

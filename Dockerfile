FROM node:16-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 80

RUN npm run build


FROM nginx:1.19-alpine 

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/build .


CMD ["npm","start"]









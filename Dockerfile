FROM node:16-slim 

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000:80

CMD [ "npm", "start" ]




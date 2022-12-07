FROM node:16-slim

WORKDIR /app
RUN npm install express
COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]

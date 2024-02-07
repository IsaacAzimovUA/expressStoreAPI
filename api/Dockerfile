FROM node:10.4.0-alpine

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package*.json ./ 

RUN npm install
COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

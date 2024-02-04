ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine

RUN addgroup api && adduser -S -G api api
USER api

WORKDIR /api
COPY package.json ./ 
#! Check the error with the package-lock.json
RUN npm install
COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

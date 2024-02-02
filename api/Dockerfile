ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

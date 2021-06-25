FROM node:14.11.0-alpine3.10

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

CMD ["npm", "start"]
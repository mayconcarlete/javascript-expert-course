FROM  node:17-alpine

WORKDIR /home/app

COPY . .

RUN npm install

CMD node --inspect=0.0.0.0 server.js
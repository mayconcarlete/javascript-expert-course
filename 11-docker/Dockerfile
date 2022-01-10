FROM node:17-alpine as build

WORKDIR /home/app

COPY . .

RUN npm install

RUN npm run build

RUN echo "valor: $NAME"

FROM node:17-alpine

WORKDIR /home/app

COPY --from=build '/home/app/dist' .
COPY --from=build '/home/app/package.json' .
COPY --from=build  '/home/app/package-lock.json' .

RUN npm install --only=prod
RUN ls

CMD ["node", "index.js"]

# docker image build --build-arg NAME=FOO -t nodetest . para passar variavel por linha de comando
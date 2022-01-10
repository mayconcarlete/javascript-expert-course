FROM node:17-alpine

WORKDIR /home/app

ARG NAME

ENV NAME=$NAME

RUN echo "valor: $$NAME"

RUN echo Maykerops

# docker image build --build-arg NAME=FOO -t nodetest . para passar variavel por linha de comando
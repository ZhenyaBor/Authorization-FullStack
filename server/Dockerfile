FROM node:18

WORKDIR /app

COPY ./server /app

COPY .env .env

RUN yarn

EXPOSE 7070

CMD ["yarn", "start:dev"]

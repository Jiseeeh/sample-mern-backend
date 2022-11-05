# my token in package.json start script is only 7 days (Nov 12 expire)
FROM node:fermium-alpine3.16

RUN addgroup app && adduser -S -G app app

USER app
WORKDIR /sample-mern-backend

COPY package*.json ./
RUN npm install

COPY --chown=app:app . /sample-mern-backend

EXPOSE 3000

RUN npx prisma generate

CMD [ "npm", "run", "start" ]

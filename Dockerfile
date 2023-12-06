FROM node:alpine
WORKDIR /app

COPY . .
RUN cd ./frontend/server && npm i
RUN cp ./frontend/dist/tables/* ./frontend/server/public

EXPOSE 3001

CMD [ "npm", "run", "express" ]

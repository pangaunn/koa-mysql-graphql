FROM node:8.5.0-alpine
RUN npm install -g nodemon

WORKDIR /node/app
COPY package.json .
# COPY package-lock.json .
RUN npm install

COPY . .

ENTRYPOINT ["nodemon", "./src/server.js"]

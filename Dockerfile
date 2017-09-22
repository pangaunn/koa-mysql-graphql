# docker run -p 3000:3000 -v ${pwd}/:/node/app -d mynode
# docker run -p 3000:3000 -v c:/Users/aunn/Desktop/koa-mysql-graphql:/node/app -d mynode
FROM node:8.5.0-alpine
RUN npm install -g nodemon

WORKDIR /node/app
COPY package.json .
# COPY package-lock.json .
RUN npm install

COPY . .
EXPOSE 3000

ENTRYPOINT ["nodemon", "-L", "./src/server.js"]

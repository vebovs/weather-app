FROM node:14.15.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "start"]
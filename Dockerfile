FROM node:18.18.1

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
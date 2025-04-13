FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "ts-node", "src/main.ts"]

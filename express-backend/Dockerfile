FROM node:24.2.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx tsc -b
EXPOSE 3000

CMD ["node", "dist/index.js"]
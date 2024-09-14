FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npx prisma generate

RUN docker compose up

RUN npx prisma migrate deploy

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
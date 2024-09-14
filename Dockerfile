FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

RUN npx prisma generate

RUN npx prisma migrate deploy

CMD ["npm", "run", "start:prod"]
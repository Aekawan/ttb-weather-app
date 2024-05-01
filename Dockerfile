FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production=false

COPY . .

RUN npm run build

FROM node:20 AS production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --from=build /app/.next ./.next

ENV PORT=3000

CMD ["npm", "start"]
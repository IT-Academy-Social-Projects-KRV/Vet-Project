FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

EXPOSE 3200

CMD ["yarn", "serve"]

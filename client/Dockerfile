FROM node:16-alpine AS build

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/client /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# build image
FROM node:9.4

WORKDIR /app
COPY ./package.json /app/
RUN npm install

COPY . /app
RUN $(npm bin)/ng build --prod


# run image
FROM bitnami/minideb:stretch
RUN apt-get update; apt-get install -y curl
RUN curl -L -o /caddy.tar.gz https://github.com/mholt/caddy/releases/download/v0.10.10/caddy_v0.10.10_linux_amd64.tar.gz
RUN tar -xzf /caddy.tar.gz caddy

WORKDIR /app
COPY Caddyfile /app/
COPY --from=0 /app/dist /app/dist

# COMMENTS backend api server
ENV COMMENTS_API = "http://guestbook-backend:3000"

ENTRYPOINT [ "/caddy" ]

# build stage
FROM node:lts as build-stage
WORKDIR /app
# prerender param
ARG VUE_APP_DOMAIN_NAME=localhost
# mailjs args
ARG VUE_APP_MAIL_SERVICE_ID=none
ARG VUE_APP_MAIL_TEMPLATE_ID=none
ARG VUE_APP_MAIL_USER_ID=none
ARG VUE_APP_RECAPTCHA_ID=none
# prerender deps
RUN apt-get update && \
    apt-get -y install ca-certificates fonts-liberation                         \
    libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6          \
    libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1             \
    libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0             \
    libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1                 \
    libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6           \
    libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=build-stage /app/dist .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]

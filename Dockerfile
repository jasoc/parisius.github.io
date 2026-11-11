# Local preview of exactly what GitHub Pages will serve.
FROM node:24-alpine AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && cp dist/site/browser/index.html dist/site/browser/404.html

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/site/browser /usr/share/nginx/html

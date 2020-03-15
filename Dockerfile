#stage 1
FROM node:13.3.0 AS compile-image
WORKDIR /opt/ng
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:1.17.1-alpine
COPY --from=compile-image /opt/ng/dist/my-app /usr/share/nginx/html



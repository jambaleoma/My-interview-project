# Stage 1: Compile and Build angular codebase

# FROM node:latest as build
FROM node:14-alpine
WORKDIR /usr/app
COPY ./ /usr/app/

RUN npm cache clean --force
RUN npm cache verify

RUN npm install -g @angular/cli
RUN npm install
RUN npm run build --prod

EXPOSE 4200
CMD [ "node", "index.js" ]

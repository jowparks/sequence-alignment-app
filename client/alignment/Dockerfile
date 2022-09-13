#FROM node:alpine
#WORKDIR /app
#COPY package.json ./
#COPY package-lock.json ./
#COPY ./ ./
#RUN npm i
#CMD ["npm", "run", "start"]

# Build step #1: build the React front end
FROM node:18-alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build

# Build step #2: build an nginx container
FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
FROM node:16
RUN apt-get update && apt-get install libvips-dev -y
RUN mkdir -p /app
ARG NODE_ENV=production
WORKDIR /app
COPY ./package*.json ./yarn.lock /app/
COPY ./.env /app/
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
COPY ./ /app
EXPOSE 1337
ENV NODE_ENV=${NODE_ENV}
RUN yarn build
CMD ["yarn", "start"]
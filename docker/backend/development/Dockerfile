FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev vim -y

# where our Strapi app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY ./web2023_be_strapi/package*.json ./web2023_be_strapi/yarn.lock /app/
COPY ./.env /app/

ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies in /app
RUN yarn config set network-timeout 600000 -g && yarn install

# Copy the rest of our Strapi folder into /app
COPY ./web2023_be_strapi /app

EXPOSE 1337

# Build Strapi admin
RUN yarn build

# Run yarn dev, as we would via the command line 
CMD ["yarn", "develop"]
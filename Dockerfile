# Fetching the latest node image on alpine linux
FROM node:20-alpine

WORKDIR /XO

COPY ./package*.json /XO

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]
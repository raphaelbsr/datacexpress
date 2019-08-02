FROM node:alpine

RUN mkdir /usr/app
WORKDIR /usr/app
ADD .env ./
EXPOSE 3000
COPY package.json ./
#RUN npm install --only=production
RUN npm install
COPY . ./
CMD ["npm", "start"]

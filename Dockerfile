FROM node:16-alpine 
WORKDIR /app
COPY . .

RUN npm install npm@8.5.0 -g
RUN npm install -g node-gyp
RUN npm i

EXPOSE 3000
CMD [ "npm", "run", "start" ]
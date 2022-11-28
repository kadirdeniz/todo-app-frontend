FROM node:16-15-0-alpine 
WORKDIR /app
COPY . .

RUN npm install npm@8.5.0 -g
RUN npm i

EXPOSE 3000
CMD [ "npm", "run", "start" ]
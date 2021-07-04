FROM node:alpine
WORKDIR /usr/valoriza-api
COPY package.json .
RUN npm install\
    && npm install tsc -g
COPY . .
RUN tsc
CMD ["node", "./src/server.js"]
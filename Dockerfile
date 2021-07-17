FROM node:alpine
WORKDIR /usr/valoriza-api
COPY package.json .
COPY tsconfig.json .
RUN npm install\
    && npm install tsc -g
COPY . .
RUN tsc
CMD ["node", "./dist/server.js"]
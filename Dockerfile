FROM node:12-slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci --production
COPY . /app
CMD  ["node", "index.js"]

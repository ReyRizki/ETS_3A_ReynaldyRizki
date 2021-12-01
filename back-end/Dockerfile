FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli
RUN npm install -g typescript
RUN npm install -g ts-node

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start:prod"]

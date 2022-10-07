FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN if [ -f package.json ]; then npm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY .env .
COPY .env.development.sample .env.development

CMD yarn dev

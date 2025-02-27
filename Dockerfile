FROM node:lts-alpine as build 

ARG NEXT_PUBLIC_NOTION_TOKEN
ARG NEXT_PUBLIC_NOTION_DB_ID

WORKDIR /app
ADD /app /app

RUN echo "NEXT_PUBLIC_NOTION_TOKEN=$NEXT_PUBLIC_NOTION_TOKEN" > /app/.env && \
    echo "NEXT_PUBLIC_NOTION_DB_ID=$NEXT_PUBLIC_NOTION_DB_ID" >> /app/.env

RUN yarn && yarn build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "yarn", "start" ]

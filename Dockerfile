FROM node:14.19.0 as build 

ARG NEXT_PUBLIC_NOTION_TOKEN
ARG NEXT_PUBLIC_NOTION_DB_ID

RUN mkdir -p /app
WORKDIR /app
ADD /app /app/

RUN echo "NEXT_PUBLIC_NOTION_TOKEN=$NEXT_PUBLIC_NOTION_TOKEN" > /app/.env
RUN echo "NEXT_PUBLIC_NOTION_DB_ID=$NEXT_PUBLIC_NOTION_DB_ID" >> /app/.env
RUN ls /app -la

RUN rm yarn.lock || true
RUN rm package-lock.json || true
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "yarn", "start" ]

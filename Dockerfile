FROM node:alpine AS development

ENV NODE_ENV development

ENV REACT_APP_URL_API https://steinmeier.space/backend

WORKDIR /app

COPY /app/financas/package.json .

RUN npm install --force

EXPOSE 3000

CMD ["HTTPS=true","npm", "start", "--host=0.0.0.0", "--reload"]

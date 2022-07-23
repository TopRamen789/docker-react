# tagging as builder phase
FROM node:16-alpine as builder

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./
RUN npm run build 

# runner phase
# just a note: /app/build <---- ALL THE STUFF
FROM nginx
EXPOSE 80
COPY --from=builder /home/node/app/build /usr/share/nginx/html
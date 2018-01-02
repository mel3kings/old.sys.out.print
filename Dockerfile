FROM node:6.12
ADD ui/ src/
WORKDIR src/
RUN node -v
RUN npm install

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start" ]
# Personal Website

This is a Sandbox site. contains different experiments and ramblings.
## Technology Stack

* React
* Redux
* Node
* Docker

## Building Dockerized React App

Dockerfile sets the command default as NPM start
```
CMD [ "npm", "start" ]
```
package.json exposes the app to outside using host:
```
"start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js  --host 0.0.0.0",

```

docker commands ui:
```
docker build -t mel3kings/sysdotoutdotprint .
docker run --name service -p 80:8080 -p 3000:3000 -d mel3kings/sysdotoutdotprint                                                                                                                                                               /sysdotoutdotprint
```
docker commands node:
```
docker build -t mel3kings/nodejssysoutprint .

```
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

docker commands:
```
docker network create mynetwork
docker build -t mel3kings/sysdotoutdotprint .
docker run --name ui -p 80:8080 -d --network mynetwork mel3kings/sysdotoutdotprint 
docker run --name node -p 3000:3000 -d --network mynetwork mel3kings/nodesysoutprint 
```

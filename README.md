# Technical Notes Sites
This is a Sandbox site, that contains different experiments and ramblings on technical things
##Architecture Notes

![alt text](https://github.com/mel3kings/sys.out.print/blob/master/sysout_architecture.png)
<br/>
As the Architecture diagram shows, user hits a React website, which in at the backend has NodeJS serving out the contents.


## Technology Stack

* React/Redux - front end UI, Single Page Application
* Node JS - Contains Back-end API, that servers HTML pages
* Bootstrap 4 - CSS stuff
* Docker - Containerized Application
* Jenkins - Continuous Integration/Continuous Delivery



## Building Dockerized React App - Through Jenkins
Docker Commands:

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

docker run --rm --name ui -p 80:8080 -d --network mynetwork mel3kings/sysdotoutdotprint 
docker run --rm --name node -p 3000:3000 -d --network mynetwork mel3kings/nodesysoutprint 
docker run -u root --restart unless-stopped -d -p 8081:8080 -p 50000:50000 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean
```
deployment:
Docker pull all: <br/>
```docker images | awk '(NR>1) && ($2!~/none/) {print $1":"$2}' | xargs -L1 docker pull```

stop and delete all containers:<br/>
```docker rm -f $(docker ps -a -q) ```

remove all docker images <br/>
```docker rmi $(docker images -q)```

See how I use Jenkins to automate all the build and deploy for this project:
http://sysdotoutdotprint.com/technologies/tools/57


### Known Issues
CSS is not as good as I want it to be, pending redesign.

###Site Details:
* URL: http://sysdotoutdotprint.com/
* Author: Melchor Tatlonghari

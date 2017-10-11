export CONCUR_SRC="/d/dev/git_concur2"
export CONCUR_LOCAL=$CONCUR_SRC"/local-env"

NOTESTS="-DskipTests=true -Dnoit"
NOUI="-pl '!ui' -pl '!ui-app'"
NOINFRA="-pl '!cass-app' -pl '!cass-api' -pl '!kafka-app' -pl '!zookeeper-app' -pl '!mysql-app' -pl '!domain'"
NOSOLUTIONSTEST="-pl '!cucumber' -pl '!solution-tests'"
NOEXTRAS="-pl '!base-images/base-cass-image' -pl '!base-images/base-app-image' -pl '!pubsub-gateway-api' -pl '!pubsub-gateway-app' -pl '!pubsub-gateway-impl' -pl '!capture-app'"
DOCKERADDRESS="-Ddocker.host.address=192.168.99.100" 
#LOCALIP="-Dlocal.ip.address=$(hostname -I | awk '{ print $2 }')"
LOCALIP="-Dlocal.ip.address=$(ipconfig | grep 'IPv4' | cut -c 40-51 | head -1) -Dtag=latest"
#NOBUILDTOOLS="-pl '!tools/rancher-cli-image'"

#cd
alias ccd="cd $CONCUR_SRC $@"
alias ccdl="cd $CONCUR_LOCAL $@"
#services
alias cms="ccd && mvn $NOTESTS $NOUI $NOINFRA $NOSOLUTIONSTEST $NOEXTRAS clean install $DOCKERADDRESS $@"
#ui
alias cmui="ccd && mvn $NOTESTS -pl 'ui' -pl 'ui-app' $NOSOLUTIONSTEST clean install"
#all
alias cmall="ccd && mvn clean install $DOCKERADDRESS"
#it
alias cit="ccd && mvn install -pl 'solution-tests' $DOCKERADDRESS"
#custom build
alias build=build_custom;
#start or stop services
alias start="ccdl && mvn docker:start $DOCKERADDRESS $LOCALIP -Dtag=latest"
alias stop="ccdl && mvn docker:stop $DOCKERADDRESS $LOCALIP && docker stop $(docker ps -a -q)"
alias delete="docker rm $(docker ps -a -q)"
alias watch="docker run -d -p 9011:9000 --name docker-ui --privileged -v /var/run/docker.sock:/var/run/docker.sock uifd/ui-for-docker"
function build_custom(){
	echo  'running ' $1-impl $1-api $1-app
	cd $CONCUR_SRC
	mvn clean install -pl base-images/base-app-image -pl $1-impl -pl $1-api -pl $1-app $DOCKERADDRESS
}

echo ============= SETUP DONE v3 =================
echo please confirm the below config before proceeding:
echo CONCUR LOCAL SRC : $CONCUR_SRC
echo LOCAL-ENV : $CONCUR_LOCAL
echo LOCAL IP : $LOCALIP
echo DOCKER ADDRESS : $DOCKERADDRESS
echo ==========================================
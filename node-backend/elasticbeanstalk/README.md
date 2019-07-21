## Elastic
create with vpc configs:

eb create --vpc.id vpc-c13781a5
--vpc.elbsubnets subnet-b356d7c6,subnet-02f74b0c --vpc.ec2subnets subnet-0bb7f0cd,subnet-3b6697c1 --vpc.securitygroup sg-70cff265

## installation
brew install awsebcli
eb init -p node node
aws sts get-caller-identity (get user)

(move config yml to .elasticbeanstalk)
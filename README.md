# Docker build

1. `Dockerfile`

```
FROM node:14.19.0

RUN mkdir -p /app
WORKDIR /app
ADD . /app/

RUN rm yarn.lock || true
RUN rm package-lock.json || true
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start"]
```

2. `.dockerignore`

```
node_modules/
dist/
```

3. `docker build --tag lucetre.xyz:0.0.1 .`
4. `docker run --name lucetre.xyz -d -p 3000:3000 lucetre.xyz:0.0.1`

# Connect ec2 instance

1. `chmod 400 lucetre.pem`
2. `ssh -i "lucetre.pem" ec2-user@ec2-3-39-237-30.ap-northeast-2.compute.amazonaws.com`

# Install docker

1. https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/create-container-image.html

# Create self-hosted runner

1. Follow the linux guidelines.
2. Enter any additional labels: `label-go`
3. [ec2] `nohup ./run.sh &`
4. [ec2] `tail -f nohup.out`

# Register DNS record

1. `@ IP_ADDR`
2. `www IP_ADDR`
3. https://dnschecker.org/#A/lucetre.xyz
4. `http://lucetre.xyz/`
5. `ssh -i "lucetre.pem" ec2-user@lucetre.xyz`

# Http 2 Https

### Install nginx @ ec2

1. `amazon-linux-extras list | grep nginx`
2. `sudo amazon-linux-extras install -y nginx1`
3. `nginx -v`
4. `sudo systemctl start nginx`

### Certbot

1. `sudo yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm`
2. `sudo yum-config-manager --enable epel* `
3. `sudo yum install certbot python2-certbot-nginx -y`
4. `sudo certbot --nginx`
5. `crontab -e`
   - `0 12 * * * /usr/bin/certbot renew --quiet`

# ec2 Restart
1. `cd actions-runner`
1. `nohup ./run.sh &`
2. `tail -f nohup.out`
3. `sudo systemctl start nginx`

# Reference

- https://codegear.tistory.com/84
- https://www.youtube.com/watch?v=Sm8GbC02MlE
- https://www.youtube.com/watch?v=ehITvx8VPFI
- https://medium.com/today-i-solved/how-to-deploy-next-js-on-aws-ec2-with-ssl-https-7980ec6fe8d3


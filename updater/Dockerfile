FROM ubuntu:16.04 as slashe-ubuntu-node-ssh-base

RUN apt-get update
RUN apt-get install -y openssh-client
RUN apt-get install -y sshpass
RUN ssh-keygen -t rsa -N "" -f ~/.ssh/id_rsa
RUN apt-get install -y net-tools
RUN apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_4.x | bash
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

FROM slashe-ubuntu-node-ssh-base as main

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
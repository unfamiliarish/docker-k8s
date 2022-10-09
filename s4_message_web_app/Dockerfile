FROM node:18-alpine

# specifies the working directory within the container 
WORKDIR /usr/app

# copy files from current working dir outside containerc
# to the current working dir inside container
COPY ./package.json ./
RUN npm install 
COPY ./ ./

CMD ["npm", "start"]

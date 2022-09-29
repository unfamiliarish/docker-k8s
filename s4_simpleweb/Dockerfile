FROM node:16-alpine
WORKDIR /usr/app

# copy files from current working dir outside containerc
# to the current working dir inside container
COPY ./ ./
RUN npm install 

CMD ["npm", "start"]

FROM node:18-alpine

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]


# docker build -t gchwalik/visits:latest .
# docker run -p 8081:8080 gchwalik/visits
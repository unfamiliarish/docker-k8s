const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

/* redis.createClient() reqs specifying location
    of the redis server. host, port, etc */
/* since node-app and redis-server are on the same 
    network, docker-compose allows us to access it 
    simply by service name */
/* express and redis don't recognize 'redis-server'.
    when request leaves node-app, docker recognizes
    redis-server and routes it to the service container
*/
const client = redis.createClient({
    host: 'redis-server',
    /* default port for redis-server
        can omit - added for completion */
    port: 6379
});

client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);

    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
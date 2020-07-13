const express = require('express');
const hubsRouter = require('./hubs/hubs-router.js')


const server = express();
server.use(express.json());
// .use matches all HTTP mehods (GET< DELETE< PUT, Whatever)
//no path matches ALL paths...if you want to use a oath 
server.use('/api/posts', hubsRouter);
//server.use('/something/anything', hubsRouter)
//Change the URL here  ^^ mounting syntax

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Posts API</h>
    <p>Welcome to the Lambda Posts API</p>
  `);
});

module.exports = server;
// add an endpoint for adding new message to a hub
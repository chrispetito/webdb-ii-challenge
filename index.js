const server = require('./api/server');
const express = require('express')

server.use(express.json());

// endpoints here

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

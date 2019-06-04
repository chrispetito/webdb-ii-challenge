const express = require('express');

const zoosRouter = require('../zoos/zoos-router');

const server = express();
server.use(express.json());

server.use('/api/zoos', zoosRouter);

module.exports = server;
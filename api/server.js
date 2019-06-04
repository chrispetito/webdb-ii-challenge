const express = require('express');

const zoosRouter = require('../zoos/zoos-router');
const bearsRouter = require('../bears/bears-router');

const server = express();
server.use(express.json());

server.use('/api/zoos', zoosRouter);
server.use('/api/bears', bearsRouter)

module.exports = server;
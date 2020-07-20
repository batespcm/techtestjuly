const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./routes/apiRouter.js');

app.use(cors());

app.use(express.json());

app.use('/api', apiRouter);

module.exports = app;

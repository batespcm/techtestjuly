const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./routes/apiRouter.js');
const { handleInternalErrors } = require('./controllers/error.controllers');

app.use(cors());

app.use(express.json());

app.use('/api', apiRouter);

app.use(handleInternalErrors);

module.exports = app;

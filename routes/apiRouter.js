const apiRouter = require('express').Router();
const londonRouter = require('./londonRouter');

apiRouter.use('/listedinlondon', londonRouter);

module.exports = apiRouter;

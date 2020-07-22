const apiRouter = require('express').Router();
const usersInLondonRouter = require('./usersInLondonRouter');
const usersRadiusFromLondonRouter = require('./usersRadiusFromLondonRouter');
const combinedRouter = require('./combinedRouter');

apiRouter.use('/usersinlondon', usersInLondonRouter);
apiRouter.use('/usersradius', usersRadiusFromLondonRouter);
apiRouter.use('/londoncombined', combinedRouter);

module.exports = apiRouter;

// use the word users in the file names

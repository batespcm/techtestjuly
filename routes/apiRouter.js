const apiRouter = require('express').Router();
const usersInLondonRouter = require('./usersInLondonRouter');
const usersWithinFiftyOfLondonRouter = require('./usersWithinFiftyOfLondonRouter');
const combinedRouter = require('./combinedRouter');

apiRouter.use('/usersinlondon', usersInLondonRouter);
apiRouter.use('/userswithinfiftyoflondon', usersWithinFiftyOfLondonRouter);
apiRouter.use('/londoncombined', combinedRouter);

module.exports = apiRouter;

// use the word users in the file names

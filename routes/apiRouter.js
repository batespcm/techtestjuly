const apiRouter = require('express').Router();
const listedLondonRouter = require('./listedlondonRouter');
const withinFiftyOfLondonRouter = require('./withinFiftyOfLondonRouter');
const combinedRouter = require('./combinedRouter');

apiRouter.use('/listedinlondon', listedLondonRouter);
apiRouter.use('/withinfiftyoflondon', withinFiftyOfLondonRouter);
apiRouter.use('/combined', combinedRouter);

module.exports = apiRouter;

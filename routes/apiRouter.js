const apiRouter = require('express').Router();
const listedLondonRouter = require('./listedlondonRouter');
const withinFiftyOfLondonRouter = require('./withinFiftyOfLondonRouter');

apiRouter.use('/listedinlondon', listedLondonRouter);
apiRouter.use('/withinfiftyoflondon', withinFiftyOfLondonRouter);

module.exports = apiRouter;

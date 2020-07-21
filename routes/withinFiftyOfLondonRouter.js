const withinFiftyOfLondonRouter = require('express').Router();
const { withinFiftyMilesOfLondon } = require('../controllers/cityOfLondon');

withinFiftyOfLondonRouter.route('/').get(withinFiftyMilesOfLondon);

module.exports = withinFiftyOfLondonRouter;

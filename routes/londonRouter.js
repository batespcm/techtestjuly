const londonRouter = require('express').Router();
const {
  listedInLondon,
  withinFiftyMilesOfLondon
} = require('../controllers/cityOfLondon');

londonRouter.route('/').get(listedInLondon);

londonRouter.route('/latlonglondon').get(withinFiftyMilesOfLondon);

module.exports = londonRouter;

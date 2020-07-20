const listedLondonRouter = require('express').Router();
const { listedInLondon } = require('../controllers/cityOfLondon');

listedLondonRouter.route('/').get(listedInLondon);

module.exports = listedLondonRouter;

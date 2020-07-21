const combinedRouter = require('express').Router();
const { bothCombined } = require('../controllers/cityOfLondon');

combinedRouter.route('/').get(bothCombined);

module.exports = combinedRouter;

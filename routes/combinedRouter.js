const combinedRouter = require('express').Router();
const { bothCombined } = require('../controllers/users.controller');

combinedRouter.route('/').get(bothCombined);

module.exports = combinedRouter;

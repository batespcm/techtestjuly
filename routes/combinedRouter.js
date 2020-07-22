const combinedRouter = require('express').Router();
const { bothCombined } = require('../controllers/users.controller');

combinedRouter.route('/:miles').get(bothCombined);

module.exports = combinedRouter;

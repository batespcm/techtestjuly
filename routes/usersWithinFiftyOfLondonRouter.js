const usersWithinFiftyOfLondonRouter = require('express').Router();
const {
  usersWithinFiftyMilesOfLondon
} = require('../controllers/users.controller');

usersWithinFiftyOfLondonRouter.route('/').get(usersWithinFiftyMilesOfLondon);

module.exports = usersWithinFiftyOfLondonRouter;

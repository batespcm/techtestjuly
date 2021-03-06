const usersRouter = require('express').Router();
const {
  getUsersInCity,
  getWithinRadiusOfLondon
} = require('../controllers/users.controller');

usersRouter.route('/city/:city').get(getUsersInCity);
usersRouter.route('/radius/:miles').get(getWithinRadiusOfLondon);

module.exports = usersRouter;

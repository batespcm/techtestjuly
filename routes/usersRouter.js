const usersRouter = require('express').Router();
const {
  usersWithinRadiusOfLondon,
  getUsersInCity
} = require('../controllers/users.controller');

usersRouter.route('/:city_name', getUsersInCity);

module.exports = usersRouter;

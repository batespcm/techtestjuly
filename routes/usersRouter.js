const usersRouter = require('express').Router();
const { getUsersInCity } = require('../controllers/users.controller');

usersRouter.route('/:city_name').get(getUsersInCity);

module.exports = usersRouter;

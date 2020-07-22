const usersInLondonRouter = require('express').Router();
const { usersInLondon } = require('../controllers/users.controller');

usersInLondonRouter.route('/').get(usersInLondon);

module.exports = usersInLondonRouter;

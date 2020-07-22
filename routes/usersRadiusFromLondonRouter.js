const usersRadiusFromLondonRouter = require('express').Router();
const {
  usersWithinRadiusOfLondon
} = require('../controllers/users.controller');

usersRadiusFromLondonRouter.route('/:miles').get(usersWithinRadiusOfLondon);

module.exports = usersRadiusFromLondonRouter;

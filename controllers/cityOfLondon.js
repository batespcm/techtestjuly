const { londonListed, allUsers } = require('../models/users.model');

const latNorth = 52.2332;
const latSouth = 50.78653;
const longWest = -1.2802;
const longEast = 1.044016;

exports.listedInLondon = (req, res) => {
  londonListed().then(users => {
    res.status(200).send({ users });
  });
};

exports.withinFiftyMilesOfLondon = (req, res, next) => {
  allUsers().then(users => {
    const withinFifty = users.filter(user => {
      return (
        parseFloat(user.latitude) >= latSouth &&
        parseFloat(user.latitude) <= latNorth &&
        parseFloat(user.longitude) >= longWest &&
        parseFloat(user.longitude) <= longEast
      );
    });
    res.status(200).send({ users: withinFifty });
  });
};

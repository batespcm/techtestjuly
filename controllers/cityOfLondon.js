const { londonListed, allUsers } = require('../models/users.model');

exports.listedInLondon = (req, res) => {
  londonListed().then(users => {
    res.status(200).send({ users });
  });
};

exports.withinFiftyMilesOfLondon = (req, res, next) => {
  allUsers().then(users => {
    const withinFifty = users.filter(user => {
      return (
        parseFloat(user.latitude) >= 50.78653 &&
        parseFloat(user.latitude) <= 52.2332 &&
        parseFloat(user.longitude) >= -1.2802 &&
        parseFloat(user.longitude) <= 1.044016
      );
    });
    res.status(200).send({ users: withinFifty });
  });
};

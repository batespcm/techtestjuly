const { londonListed, allUsersWithinFifty } = require('../models/users.model');

exports.listedInLondon = (req, res) => {
  londonListed().then(users => {
    res.status(200).send({ users });
  });
};

exports.withinFiftyMilesOfLondon = (req, res, next) => {
  allUsersWithinFifty().then(users => {
    res.status(200).send({ users });
  });
};

exports.bothCombined = (req, res, next) => {
  const withinRadius = allUsersWithinFifty();
  const cityLondon = londonListed();
  Promise.all([withinRadius, cityLondon]).then(([fiftyRadius, londonBased]) => {
    const users = [...fiftyRadius, ...londonBased];
    return res.status(200).send({ users });
  });
};

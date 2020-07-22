const { londonListed, allUsersWithinFifty } = require('../utils/apiCalls');

exports.usersInLondon = (req, res) => {
  londonListed().then(users => {
    res.status(200).send({ users });
  });
};

exports.usersWithinFiftyMilesOfLondon = (req, res, next) => {
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

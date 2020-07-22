const { londonListed, allUsersWithinRadius } = require('../utils/apiCalls');

exports.usersInLondon = (req, res) => {
  londonListed().then(users => {
    res.status(200).send({ users });
  });
};

exports.usersWithinRadiusOfLondon = (req, res, next) => {
  const { miles } = req.params;
  const distance = parseInt(miles, 10);
  allUsersWithinRadius(distance).then(users => {
    if (users.length === 0) {
      res.status(404).send({ msg: 'Please enter a number and try again' });
    } else {
      res.status(200).send({ users });
    }
  });
};

exports.bothCombined = (req, res, next) => {
  const { miles } = req.params;
  const withinRadius = allUsersWithinRadius(miles);
  const cityLondon = londonListed();
  Promise.all([withinRadius, cityLondon]).then(([fiftyRadius, londonBased]) => {
    const users = [...fiftyRadius, ...londonBased];
    return res.status(200).send({ users });
  });
};

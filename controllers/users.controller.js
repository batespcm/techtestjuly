const { londonListed, allUsersWithinRadius } = require('../utils/apiClient');

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
  const distance = parseInt(miles, 10);
  if (distance === 'NaN') {
    distance = 0;
    console.log(distance);
  }
  const withinRadius = allUsersWithinRadius(distance);
  const cityLondon = londonListed();
  Promise.all([withinRadius, cityLondon]).then(([radius, londonBased]) => {
    const users = [...radius, ...londonBased];
    res.status(200).send({ users });
  });
};

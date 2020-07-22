const { getUsersByCity, allUsersWithinRadius } = require('../utils/apiClient');

const getUsersInCity = (req, res) => {
  const { city_name } = req.params;
  getUsersByCity(city_name).then(users => {
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
  }
  const withinRadius = allUsersWithinRadius(distance);
  const cityLondon = londonListed();
  Promise.all([withinRadius, cityLondon]).then(([radius, londonBased]) => {
    const users = [...radius, ...londonBased];
    res.status(200).send({ users });
  });
};

module.exports = { getUsersInCity };

const { getUsersByCity, getUsersWithinRadius } = require('../utils/apiClient');

const getUsersInCity = (req, res) => {
  const { city } = req.params;

  const city_name = city.charAt(0).toUpperCase() + city.slice(1);

  getUsersByCity(city_name).then(users => {
    if (users.length === 0) {
      res
        .status(404)
        .send({ msg: 'Please enter a valid city_name and try again' });
    } else {
      res.status(200).send({ users });
    }
  });
};

const getWithinRadiusOfLondon = (req, res, next) => {
  const { miles } = req.params;
  const distance = parseInt(miles, 10);
  if (distance === 'NaN') {
    distance = 0;
  }
  getUsersWithinRadius(distance).then(users => {
    if (users.length === 0) {
      res.status(404).send({ msg: 'Please enter a number and try again' });
    } else {
      res.status(200).send({ users });
    }
  });
};

module.exports = { getUsersInCity, getWithinRadiusOfLondon };

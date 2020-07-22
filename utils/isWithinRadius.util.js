const geolib = require('geolib');

exports.isWithinRadius = (users, distance) => {
  const latitudeLondon = 51.509865;

  const longitudeLondon = 0.118092;

  const milesToMetres = distance * 1609;

  const filteredUsers = users.filter(user => {
    return geolib.isPointWithinRadius(
      { latitude: latitudeLondon, longitude: longitudeLondon },

      { latitude: user.latitude, longitude: user.longitude },

      milesToMetres
    );
  });
  return filteredUsers;
};

// Latitude of 51.509865 & Longitude 0.118092 taken from latlong.net

const latNorth = 52.2332;
const latSouth = 50.78653;
const longWest = -1.2802;
const longEast = 1.044016;

exports.isWithinFifty = users => {
  const filteredUsers = users.filter(user => {
    return (
      parseFloat(user.latitude) >= latSouth &&
      parseFloat(user.latitude) <= latNorth &&
      parseFloat(user.longitude) >= longWest &&
      parseFloat(user.longitude) <= longEast
    );
  });
  return filteredUsers;
};

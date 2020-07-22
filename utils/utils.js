const geolib = require('geolib');

// Latitude of 51.509865 & Longitude 0.118092 taken from latlong.net

// exports.isWithinFifty = users => {
//   let miles = 50;
//   const milesToMetres = miles * 1609;
//   return axios.get('https://bpdts-test-app.herokuapp.com/users').then(res => {
//     const withinFifty = res.data.filter(user => {
//       return geolib.isPointWithinRadius(
//         { latitude: 51.509865, longitude: 0.118092 },
//         { latitude: user.latitude, longitude: user.longitude },
//         milesToMetres
//       );
//     });
//     return withinFifty;
//   });
// };

exports.isWithinRadius = users => {
  const latitudeLondon = 51.509865;
  const longitudeLondon = 0.118092;
  let miles = 50;
  const milesToMetres = miles * 1609;
  const filteredUsers = users.filter(user => {
    return geolib.isPointWithinRadius(
      { latitude: latitudeLondon, longitude: longitudeLondon },
      { latitude: user.latitude, longitude: user.longitude },
      milesToMetres
    );
  });
  return filteredUsers;
};

// const latNorth = 52.2332;
// const latSouth = 50.78653;
// const longWest = -1.2802;
// const longEast = 1.044016;

// exports.isWithinFifty = users => {
//   const filteredUsers = users.filter(user => {
//     return (
//       parseFloat(user.latitude) >= latSouth &&
//       parseFloat(user.latitude) <= latNorth &&
//       parseFloat(user.longitude) >= longWest &&
//       parseFloat(user.longitude) <= longEast
//     );
//   });
//   return filteredUsers;
// };

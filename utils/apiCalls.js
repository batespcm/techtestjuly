const axios = require('axios');
const { isWithinFifty } = require('../utils/utils');

// prevent CORS Error when running Jest Test
axios.defaults.adapter = require('axios/lib/adapters/http');

exports.londonListed = () => {
  return axios
    .get('https://bpdts-test-app.herokuapp.com/city/London/users')
    .then(res => {
      return res.data;
    });
};

// exports.allUsersWithinFifty = () => {
//   // Latitude of 51.509865 & Longitude 0.118092 taken from latlong.net
//   const latNorth = 52.2332;
//   const latSouth = 50.78653;
//   const longWest = -1.2802;
//   const longEast = 1.044016;

//   return axios.get('https://bpdts-test-app.herokuapp.com/users').then(res => {
//     const withinFifty = res.data.filter(user => {
//       return (
//         parseFloat(user.latitude) >= latSouth &&
//         parseFloat(user.latitude) <= latNorth &&
//         parseFloat(user.longitude) >= longWest &&
//         parseFloat(user.longitude) <= longEast
//       );
//     });
//     return withinFifty;
//   });
// };

exports.allUsersWithinFifty = () => {
  // Latitude of 51.509865 & Longitude 0.118092 taken from latlong.net
  const latNorth = 52.2332;
  const latSouth = 50.78653;
  const longWest = -1.2802;
  const longEast = 1.044016;

  return axios.get('https://bpdts-test-app.herokuapp.com/users').then(res => {
    return isWithinFifty(res.data);
  });
};

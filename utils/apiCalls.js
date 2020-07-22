const axios = require('axios');
const { isWithinRadius } = require('../utils/utils');

// prevent CORS Error when running Jest Test
axios.defaults.adapter = require('axios/lib/adapters/http');

exports.londonListed = () => {
  return axios
    .get('https://bpdts-test-app.herokuapp.com/city/London/users')
    .then(res => {
      return res.data;
    });
};

exports.allUsersWithinFifty = () => {
  return axios.get('https://bpdts-test-app.herokuapp.com/users').then(res => {
    return isWithinRadius(res.data);
  });
};

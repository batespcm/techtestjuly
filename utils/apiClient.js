const axios = require('axios');
const { isWithinRadius } = require('./isWithinRadius.util');

// prevent CORS Error when running Jest Test
axios.defaults.adapter = require('axios/lib/adapters/http');

const baseUrl = 'https://bpdts-test-app.herokuapp.com';

const londonListed = () => {
  // code this to take city as a param
  return axios.get(`${baseUrl}/city/London/users`).then(res => {
    return res.data;
  });
};

const allUsersWithinRadius = distance => {
  return axios.get(`${baseUrl}/users`).then(res => {
    return isWithinRadius(res.data, distance);
  });
};

module.exports = { londonListed, allUsersWithinRadius };

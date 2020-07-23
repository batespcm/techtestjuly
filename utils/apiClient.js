const axios = require('axios');
const { isWithinRadius } = require('./isWithinRadius.util');

// prevent CORS Error when running Jest Test
axios.defaults.adapter = require('axios/lib/adapters/http');

const baseUrl = 'https://bpdts-test-app.herokuapp.com';

const getUsersByCity = city_name => {
  return axios.get(`${baseUrl}/city/${city_name}/users`).then(res => {
    return res.data;
  });
};

const getUsersWithinRadius = distance => {
  return axios.get(`${baseUrl}/users`).then(res => {
    return isWithinRadius(res.data, distance);
  });
};

module.exports = { getUsersByCity, getUsersWithinRadius };

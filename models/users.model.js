const axios = require('axios');

// prevent CORS Error when running Jest Test
axios.defaults.adapter = require('axios/lib/adapters/http');

exports.londonListed = () => {
  return axios
    .get('https://bpdts-test-app.herokuapp.com/city/London/users')
    .then(res => {
      return res.data;
    });
};

exports.allUsers = () => {
  return axios.get('https://bpdts-test-app.herokuapp.com/users').then(res => {
    return res.data;
  });
};

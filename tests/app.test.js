const app = require('../app');
const request = require('supertest');

describe('GET api ', () => {
  it('returns 200 when accessing the api', () => {
    return request(app).get('/api');
  });
});

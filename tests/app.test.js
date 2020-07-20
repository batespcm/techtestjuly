const app = require('../app');
const request = require('supertest');

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/listedinlondon')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('users');
      });
  });
});

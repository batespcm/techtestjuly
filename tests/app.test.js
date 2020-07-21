const app = require('../app');
const request = require('supertest');

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/listedinlondon')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('users');
        body.users.forEach(user => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('first_name');
          expect(user).toHaveProperty('last_name');
          expect(user).toHaveProperty('email');
          expect(user).toHaveProperty('ip_address');
          expect(user).toHaveProperty('latitude');
          expect(user).toHaveProperty('longitude');
        });
      });
  });
});

describe('GET users within 50 miles of london', () => {
  it('returns 200 and a list of users within 50 miles of london', () => {
    return request(app)
      .get('/api/withinfiftyoflondon')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('users');
        body.users.forEach(user => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('first_name');
          expect(user).toHaveProperty('last_name');
          expect(user).toHaveProperty('email');
          expect(user).toHaveProperty('ip_address');
          expect(user).toHaveProperty('latitude');
          expect(user).toHaveProperty('longitude');
        });
      });
  });
});

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/combined')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('users');
        body.users.forEach(user => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('first_name');
          expect(user).toHaveProperty('last_name');
          expect(user).toHaveProperty('email');
          expect(user).toHaveProperty('ip_address');
          expect(user).toHaveProperty('latitude');
          expect(user).toHaveProperty('longitude');
        });
      });
  });
});

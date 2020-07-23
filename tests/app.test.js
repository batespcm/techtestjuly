const app = require('../app');
const request = require('supertest');

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/users/london')
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

// describe('When radius is given an either as a word or a number with no results returns a 404', () => {
//   test('returns a status: 404 for an invalid path', () => {
//     return request(app)
//       .get('/api/usersradius/dd')
//       .expect(404)
//       .then(({ body }) => {
//         expect(body.msg).toEqual('Please enter a number and try again');
//       });
//   });
// });

// describe('When radius is given an either as a word or a number with no results returns a 404', () => {
//   test('returns a status: 404 for an invalid path', () => {
//     return request(app)
//       .get('/api/londoncombined/dd')
//       .expect(404)
//       .then(({ body }) => {
//         expect(body.msg).toEqual('Please enter a number and try again');
//       });
//   });
// });

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/users/london')
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

// describe('GET users within 50 miles of london', () => {
//   it('returns 200 and a list of users within 50 miles of london', () => {
//     return request(app)
//       .get('/api//usersradius/50')
//       .expect(200)
//       .then(({ body }) => {
//         expect(body).toHaveProperty('users');
//         body.users.forEach(user => {
//           expect(user).toHaveProperty('id');
//           expect(user).toHaveProperty('first_name');
//           expect(user).toHaveProperty('last_name');
//           expect(user).toHaveProperty('email');
//           expect(user).toHaveProperty('ip_address');
//           expect(user).toHaveProperty('latitude');
//           expect(user).toHaveProperty('longitude');
//         });
//       });
//   });
// });

// describe('GET users listed as living in london or within a 50 mile radius', () => {
//   it('returns 200 and a list of users under London city or within a 50 mile radius', () => {
//     return request(app)
//       .get('/api/londoncombined/50')
//       .expect(200)
//       .then(({ body }) => {
//         expect(body).toHaveProperty('users');
//         expect(body.users.length).toEqual(9);
//         body.users.forEach(user => {
//           expect(user).toHaveProperty('id');
//           expect(user).toHaveProperty('first_name');
//           expect(user).toHaveProperty('last_name');
//           expect(user).toHaveProperty('email');
//           expect(user).toHaveProperty('ip_address');
//           expect(user).toHaveProperty('latitude');
//           expect(user).toHaveProperty('longitude');
//         });
//       });
//   });
// });

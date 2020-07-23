const app = require('../app');
const request = require('supertest');

describe('GET  When the city of london is requested', () => {
  it('Then the users will return a status 200 and a list of uuers with the', () => {
    return request(app)
      .get('/api/users/city/london')
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

  it('Then it returns 200 and a list of users with city listed as London', () => {
    return request(app)
      .get('/api/users/city/london')
      .expect(200)
      .then(({ body }) => {
        expect(body.users[0]).toEqual({
          id: 135,
          first_name: 'Mechelle',
          last_name: 'Boam',
          email: 'mboam3q@thetimes.co.uk',
          ip_address: '113.71.242.187',
          latitude: -6.5115909,
          longitude: 105.652983
        });
      });
  });

  it('Then when given a different city with a white space character and a lower case it handles it and returns a 200 and a list of users registered as living in Kosaya Gora', () => {
    return request(app)
      .get('/api/users/city/Kosaya gora')
      .expect(200)
      .then(({ body }) => {
        expect(body.users).toEqual([
          {
            id: 49,
            first_name: 'Nikolai',
            last_name: 'McGarrie',
            email: 'nmcgarrie1c@techcrunch.com',
            ip_address: '141.121.121.91',
            latitude: 57.6814887,
            longitude: 39.8556491
          }
        ]);
      });
  });

  it('Then when given a different city it returns a 200 and a list of users registered as living in Kosaya Gora', () => {
    return request(app)
      .get('/api/users/city/Kosaya Gora')
      .expect(200)
      .then(({ body }) => {
        expect(body.users).toEqual([
          {
            id: 49,
            first_name: 'Nikolai',
            last_name: 'McGarrie',
            email: 'nmcgarrie1c@techcrunch.com',
            ip_address: '141.121.121.91',
            latitude: 57.6814887,
            longitude: 39.8556491
          }
        ]);
      });
  });
});

describe('GET When given a radius of users within 50 miles of london', () => {
  it('Then it returns a status 200 and a list of users within 50 miles of londo with the following properties', () => {
    return request(app)
      .get('/api//users/radius/50')
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

  it('Then when given a radius of 50 miles it returns a 200 and a list of users with a latitude and longitude with a 50 mile radius of London', () => {
    return request(app)
      .get('/api/users/radius/50')
      .expect(200)
      .then(({ body }) => {
        expect(body.users.length).toBe(3);
        expect(body.users[0]).toEqual({
          id: 266,
          first_name: 'Ancell',
          last_name: 'Garnsworthy',
          email: 'agarnsworthy7d@seattletimes.com',
          ip_address: '67.4.69.137',
          latitude: 51.6553959,
          longitude: 0.0572553
        });
      });
  });
});

describe('When radius is given an either as a word or a number with no results', () => {
  it('Then returns a status: 404 with instructions in the message body', () => {
    return request(app)
      .get('/api/users/radius/dd')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual('Please enter a number and try again');
      });
  });
});

describe('When radius is given an either as a word or a number with no results returns a 404', () => {
  it('Then returns a status: 404 with instructions in the message body', () => {
    return request(app)
      .get('/api/users/city/dd')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual('Please enter a valid city and try again');
      });
  });
});

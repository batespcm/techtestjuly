const app = require('../app');
const request = require('supertest');
const { isWithinRadius } = require('../utils/utils');

describe('When radius is given an invalid path returns a 404', () => {
  test('returns a status: 404 for an invalid path', () => {
    return request(app)
      .get('/api/usersradius/dd')
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toEqual('Please enter a number and try again');
      });
  });
});

describe('GET users listed as living in london', () => {
  it('returns 200 and a list of users registed as living in london', () => {
    return request(app)
      .get('/api/usersinlondon')
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
      .get('/api//usersradius/50')
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

describe('GET users listed as living in london or within a 50 mile radius', () => {
  it('returns 200 and a list of users under London city or within a 50 mile radius', () => {
    return request(app)
      .get('/api/londoncombined/50')
      .expect(200)
      .then(({ body }) => {
        expect(body).toHaveProperty('users');
        expect(body.users.length).toEqual(9);
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

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes one user who is not within fifty and returns an empty array', () => {
    const miles = 50;
    const user = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 10.0572553
      }
    ];
    expect(isWithinRadius(user, miles)).toEqual([]);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes one user who is not within fifty and returns that user', () => {
    const miles = 50;
    const user = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 0.0572553
      }
    ];
    expect(isWithinRadius(user, miles)).toEqual(user);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes two users one within 50 and one not within fifty and returns only the valid user', () => {
    const miles = 50;
    const users = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 0.0572553
      },
      {
        id: 366,
        first_name: 'Alan',
        last_name: 'Partridge',
        email: 'partridged@northnorfolkdigital.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 10.0572553
      }
    ];
    expect(isWithinRadius(users, miles)).toEqual([
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 0.0572553
      }
    ]);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes two users not within 50 and returns an empty array', () => {
    const miles = 50;
    const users = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 10.0572553
      },
      {
        id: 366,
        first_name: 'Alan',
        last_name: 'Partridge',
        email: 'partridged@northnorfolkdigital.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 10.0572553
      }
    ];
    expect(isWithinRadius(users, miles)).toEqual([]);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes multiple correct users and returns them all', () => {
    const miles = 50;
    const users = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 0.0572553
      },
      {
        id: 322,
        first_name: 'Hugo',
        last_name: 'Lynd',
        email: 'hlynd8x@merriam-webster.com',
        ip_address: '109.0.153.166',
        latitude: 51.6710832,
        longitude: 0.8078532
      },
      {
        id: 554,
        first_name: 'Phyllys',
        last_name: 'Hebbs',
        email: 'phebbsfd@umn.edu',
        ip_address: '100.89.186.13',
        latitude: 51.5489435,
        longitude: 0.3860497
      }
    ];
    expect(isWithinRadius(users, miles)).toEqual(users);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('check it does not mutate the original array', () => {
    const miles = 50;
    const users = [
      {
        id: 266,
        first_name: 'Ancell',
        last_name: 'Garnsworthy',
        email: 'agarnsworthy7d@seattletimes.com',
        ip_address: '67.4.69.137',
        latitude: 51.6553959,
        longitude: 0.0572553
      },
      {
        id: 322,
        first_name: 'Hugo',
        last_name: 'Lynd',
        email: 'hlynd8x@merriam-webster.com',
        ip_address: '109.0.153.166',
        latitude: 51.6710832,
        longitude: 0.8078532
      },
      {
        id: 554,
        first_name: 'Phyllys',
        last_name: 'Hebbs',
        email: 'phebbsfd@umn.edu',
        ip_address: '100.89.186.13',
        latitude: 51.5489435,
        longitude: 0.3860497
      }
    ];
    expect(isWithinRadius(users, miles)).not.toBe(users);
  });
});

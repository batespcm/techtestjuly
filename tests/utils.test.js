const { withinFifty } = require('../utils/utils');

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes one user who is not within fifty and returns an empty array', () => {
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
    expect(withinFifty(user)).toEqual([]);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes one user who is not within fifty and returns that user', () => {
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
    expect(withinFifty(user)).toEqual(user);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes two users one within 50 and one not within fifty and returns only the valid user', () => {
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
    expect(withinFifty(users)).toEqual([
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
    expect(withinFifty(users)).toEqual([]);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('it takes multiple correct users and returns them all', () => {
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
    expect(withinFifty(users)).toEqual(users);
  });
});

describe('filters out the users who are not within fifty miles of london', () => {
  it('check it does not mutate the original array', () => {
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
    expect(withinFifty(users)).not.toBe(users);
  });
});

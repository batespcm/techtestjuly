const { isWithinRadius } = require('../utils/isWithinRadius.util');
const { capitaliseEveryWord } = require('../utils/stringToUppercase.util');

describe('Given an array of users, when provided a radius ', () => {
  it('Then it filters out those who are outside that radius, here return no users', () => {
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

  it('Then it takes one user who is not within fifty and returns that user', () => {
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

  it('Then it takes two users one within 50 and one not within fifty and returns only the valid user', () => {
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

  it('Then it takes two users not within 50 and returns an empty array', () => {
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

  it('Tnen it takes multiple correct users and returns them all', () => {
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

  it('Then it does not mutate the original array', () => {
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

describe('When given a word a word it capitalises it ', () => {
  it('Then it takes the single word london and returns London', () => {
    const word = 'london';
    expect(capitaliseEveryWord(word)).toEqual('London');
  });

  it('Then it takes the multiple words Cape verde and returns Cape Verde', () => {
    const word = 'Cape verde';
    expect(capitaliseEveryWord(word)).toEqual('Cape Verde');
  });

  it('Then it takes the multiple words cape verde and returns Cape Verde', () => {
    const word = 'cape verde';
    expect(capitaliseEveryWord(word)).toEqual('Cape Verde');
  });
});

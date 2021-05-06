const expect = require('expect');

const MAX_MINS_UNTIL_AWAY = 10;

/**
 * Add a value to the array in the given key.
 *
 * @param {object} obj
 * @param {string} key
 * @param {string} val
 * @return {object}
 */
function addValue(obj, key, val) {
  if (obj[key] !== undefined) {
    obj[key] = [...obj[key], val];
    return obj;
  }
  return {...obj, [key]: [val]};
}

/**
 * Check who is online, away, or offline.
 *
 * @param {Array<object>} friends
 * @return {Array<object>}
 */
function whosOnline(friends) {
  return friends.reduce(function reducer (acc, friend) {
    const {username, status, lastActivity} = friend;

    if (status === 'online') {
      const key = lastActivity <= MAX_MINS_UNTIL_AWAY ? 'online' : 'away';
      return addValue(acc, key, username);
    }

    return addValue(acc, 'offline', username);
  }, {});
}

////
// One is online, one is away, and one is offline.
//
const oneOfEach = friends = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
];

expect(
  whosOnline(oneOfEach)
).toEqual({
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
});

////
// Bob status says ‘online’ but last activity is 104 minutes, which
// as per the instructions means he is away. He is online but away.
//
const noOneOnline = [
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
]

expect(
  whosOnline(noOneOnline)
).toEqual({
  offline: ['Lucy'],
  away: ['Bob']
});


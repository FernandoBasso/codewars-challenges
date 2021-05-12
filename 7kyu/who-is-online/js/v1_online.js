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
export function whosOnline(friends) {
  return friends.reduce(function reducer (acc, friend) {
    const {username, status, lastActivity} = friend;

    if (status === 'online') {
      const key = lastActivity <= MAX_MINS_UNTIL_AWAY ? 'online' : 'away';
      return addValue(acc, key, username);
    }

    return addValue(acc, 'offline', username);
  }, {});
};

# Who's Online‽

- [Who's Online](https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript) Codewars challenge



See the JS push.txt vs spread.txt. Using spreads to make new copies of objects times out when submitting on Codewars. 12000ms are not enough even for 100,000 friends, while less than 5000ms are enough using .push() to 500,000 firends.

## JavaScript

See the JS push.txt vs spread.txt. Using spreads to make new copies of objects times out when submitting on Codewars. 12000ms are not enough even for 100,000 friends, while less than 5000ms are enough using .push() to 500,000 firends.

### slower solution with spreads

This solution looks a bit more elegant, but it is much slower.

```javascript
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
```



### faster solution with .push()

Because we use `Array.prototype.push()`, (which don't create new copies every time) the code runs much faster.

```js
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
    obj[key].push(val);
    return obj;
  }

  obj[key] = [val];

  return obj;
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
```


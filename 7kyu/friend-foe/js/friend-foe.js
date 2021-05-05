const expect = require('expect');

const REQUIRED_LENGHT = 4;

// /**
//  * Checks if a given name is a friend.
//  *
//  * @ASSUME: ‘names’ is valid.
//  *
//  * @param {Array<string>} names
//  * @return {Array<string>}
//  */
// function friend(names) {
//   return names.reduce(function isFriend(acc, name) {
//     if (name.length !== REQUIRED_LENGHT) return acc;
//     return [...acc, name];
//   }, []);
// }

/**
 * Checks if a given name is a friend.
 *
 * @ASSUME: ‘names’ is valid.
 *
 * @param {Array<string>} names
 * @return {Array<string>}
 */
function friend(names) {
  return names.filter(name => name.length === REQUIRED_LENGHT);
}

expect(friend([])).toEqual([]);
expect(friend(['K', 'Mu', 'Mia'])).toEqual([]);

expect(friend(['Goku', 'Lara'])).toEqual(['Goku', 'Lara']);

expect(
  friend(['Ryan', 'Kieran', 'Mark'])
).toEqual(['Ryan', 'Mark']);

expect(
  friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])
).toEqual(['Ryan']);

expect(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
).toEqual(['Jimm', 'Cari', 'aret']);

expect(
  friend(['Love', 'Your', 'Face', '😄'])
).toEqual(['Love', 'Your', 'Face']);


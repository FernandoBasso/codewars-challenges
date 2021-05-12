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
export function friend(names) {
  return names.filter(name => name.length === REQUIRED_LENGHT);
};


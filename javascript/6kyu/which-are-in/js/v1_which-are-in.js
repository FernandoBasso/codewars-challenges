/**
 * Finds maching substrings from strings in haystack.
 *
 * ASSUME: parameters are valid arrays of strings.
 *
 * @param {Array<string>} substrs
 * @param {Array<string>} haystack
 * @return {Array<string>}
 */
function inArray(substrs, haystack) {
  return substrs.filter(function f (substr) {
    return haystack.find(function g (str) {
      return str.includes(substr);
    });
  }).sort();
}

export { inArray };

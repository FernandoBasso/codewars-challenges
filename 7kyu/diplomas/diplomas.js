const expect = require('expect');

/**
 * Finds square size that can pack given number of rectangles.
 *
 * This is an example of a “packing rectangles” problem.
 *
 * • https://en.wikipedia.org/wiki/Rectangle_packing#Packing_different_rectangles_in_a_minimum-area_rectangle
 * • https://stackoverflow.com/questions/1213394/what-algorithm-can-be-used-for-packing-rectangles-of-different-sizes-into-the-sm
 *
 * @param {number} height
 * @param {number} width
 * @param {number} count
 * @return {number}
 */
function diplomas(height, width, count) {
  let _h, _w, side = 0;

  for (;;) {
    _h = Math.floor(side / height);
    _w = Math.floor(side / width);

    if (_h * _w >= count) return side;

    ++side;
  }
}

expect(diplomas(2, 3, 10)).toEqual(9);
expect(diplomas(1, 1, 1)).toEqual(1);
expect(diplomas(3, 4, 12)).toEqual(12);
expect(diplomas(567, 120, 129)).toEqual(3120);
expect(diplomas(17, 21, 0)).toEqual(0);
expect(diplomas(1, 239, 7)).toEqual(239);
expect(diplomas(239, 239, 7)).toEqual(717);

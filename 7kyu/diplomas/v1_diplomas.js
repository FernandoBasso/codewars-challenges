/**
 * Finds square size that can pack given number of rectangles.
 *
 * This is an example of a “packing rectangles” problem.
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

export { diplomas };

function floor(x) {
  return Math.floor(x);
}

/**
 * Finds square size that can pack given number of rectangles.
 *
 * This is an example of a “packing rectangles” problem.
 *
 * @param {number} h The height of each diploma.
 * @param {number} w The width of each diploma.
 * @param {number} c The number of diplomas.
 * @return {number}
 */
function diplomas(h, w, n) {
  if (n === 0) return 0;

  let side = 1;

  // I cannot deny my C background 😅.
  while (1) {
    if (floor((side / h)) * floor((side / w)) >= n)
      return side;

    ++side;
  }
}

export { diplomas };

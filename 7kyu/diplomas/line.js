/**
 * Finds the minimum length of line to pack the given segments.
 *
 * Computes the minimum length of a line that can pack
 * (fit/accommodate/contain) `n` segments of the given length.
 *
 * ASSUME: `segLen` >= 0, `n` >= 0.
 *
 * @param {number} segLen Length of the segment.
 * @param {number} n Number of segments that need to fit the line.
 * @return {number}
 */
function minLength(segLen, n) {
  if (n === 0) return 0;

  let lineLen = 1;

  // I cannot deny my C background 😅.
  while (1) {
    if (Math.floor(lineLen / segLen) >= n)
      return lineLen;

    ++lineLen;
  }
}

export { minLength };

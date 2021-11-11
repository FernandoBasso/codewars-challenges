/**
 * Count the number of 1 in the binary representation of `n`.
 *
 * ASSUME: `n` is positivive.
 *
 * @param n The number in decimal.
 * @return The number of 1 bits.
 */
function countBits(n: number): number {
  return [...n.toString(2)].filter(bit => {
    return Number(bit) === 1;
  }).length;
}

export { countBits };

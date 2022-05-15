/**
 * Checks whether the **integer** `n` is even.
 *
 * NOTE: Strictly speaking, only integers can be classified as even
 * or odd. Decimals cannot.
 *
 * ASSUME: `n` is an integer.
 *
 * • https://en.wikipedia.org/wiki/Parity_(mathematics)
 *
 * @param n The number to check for evenness.
 * @returns A boolean indicating whether `n` is even or not.
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

import { containsDigit } from "/lib/index.ts";

/**
 * Returns the number of numbers in range, excluding numbers that
 * include 5 as one of its digits.
 *
 * This solution DOES NOT rely on converting the number to string.
 * It instead relies on pure (yet simple) maths.
 *
 * ASSUME: ini <= end
 *
 * @param ini
 * @param end
 * @returns
 */
export function dontGiveMeFive(
  ini: number,
  end: number,
): number {
  let count = 0;

  while (ini <= end)
    if (!containsDigit(5, ini++))
      ++count;

  return count;
}

import { englishAlphabetLower as alpha } from "/lib/index.ts";
import { toLower } from "/lib/index.ts";

//
// Version 2 using an FP, declarative approach.
//

/**
 * Count the number of matching positions of `str` chars with respect their
 * position in the alphabet.
 *
 * @param str The input string to count matching positions.
 * @returns The number of matching positions for that string.
 */
export function countMatching(str: string): number {
  return str.split("").reduce((acc: number, chr: string, idx: number) => {
    return alpha[idx] === toLower(chr) ? ++acc : acc;
  }, 0);
}

/**
 * Count the number of matching positions of chars in the input string with
 * respect to the chars position in the alphabet.
 *
 * @param strs The array of strings to find the symmetry.
 * @returns An array with corresponding match count.
 */
export function alphaSym(strs: string[]): number[] {
  return strs.map(countMatching);
}

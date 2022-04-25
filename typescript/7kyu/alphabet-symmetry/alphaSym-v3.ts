import { toLower } from "/lib/index.ts";

//
// Version 3 not having a pre-built alphabet, and relying on their
// ascii/utf-8 decimal representations instead.
//

//
// "a" is 97 in decimal, both in ASCII and UTF-8 encodings.
//
const lowerCaseADecimal = "a".charCodeAt(0);

/**
 * Checks whether `chr` is in the given `pos` in the alphabet.
 *
 * @param chr The char to check for matching position.
 * @param pos The position that char is in the English alphabet
 * @returns A boolean indicating whether the char matches its position
 *   in the alphabet.
 */
function isAlphabetPosMatch(chr: string, pos: number): boolean {
  return chr.charCodeAt(0) - lowerCaseADecimal === pos;
}

/**
 * Count the number of matching positions of `str` chars with respect
 * their position in the alphabet.
 *
 * @param str The input string to count matching positions.
 * @returns The number of matching positions for that string.
 */
export function countMatching(str: string): number {
  return toLower(str).split("").filter(isAlphabetPosMatch).length;
}

/**
 * Count the number of matching positions of chars in the input string
 * with respect to the chars position in the alphabet.
 *
 * @param strs The array of strings to find the symmetry.
 * @returns An array with corresponding match count.
 */
export function alphaSym(strs: string[]): number[] {
  return strs.map(countMatching);
}

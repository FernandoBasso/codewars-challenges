import { englishAlphabetLower } from "/lib/index.ts";

//
// Version 1 using an more procedural, imperative style.
//

/**
 * Count the number of matching positions of `str` chars with respect their
 * position in the alphabet.
 *
 * @param str The input string to count matching positions.
 * @returns The number of matching positions for that string.
 */
export function countMatching(str: string): number {
  let count = 0;

  str.split("").forEach((char: string, i: number) => {
    if (englishAlphabetLower[i] === char.toLowerCase()) ++count;
  });

  return count;
}

/*
 * Count the number of matching positions of chars in the input string with
 * respect to the chars position in the alphabet.
 *
 * @param strs The array of strings to find the symmetry.
 * @returns An array with corresponding match count.
 */
export function alphaSym(strs: string[]): number[] {
  const counts: number[] = [];

  strs.forEach((str: string) => {
    counts.push(countMatching(str));
  });

  return counts;
}

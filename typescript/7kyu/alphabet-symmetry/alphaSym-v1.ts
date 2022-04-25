import { englishAlphabetLower } from "/lib/index.ts";

//
// Version 1 using an more procedural, imperative style.
//

export function countMatching(str: string): number {
  let count = 0;

  str.split("").forEach((char: string, i: number) => {
    if (englishAlphabetLower[i] === char.toLowerCase()) ++count;
  });

  return count;
}

export function alphaSym(strs: string[]): number[] {
  const counts: number[] = [];

  strs.forEach((str: string) => {
    counts.push(countMatching(str));
  });

  return counts;
}

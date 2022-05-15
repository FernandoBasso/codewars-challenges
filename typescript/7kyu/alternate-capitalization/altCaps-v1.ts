import { isEven } from "/lib/index.ts";
/**
 * Alternate capitalize the input string.
 *
 * ASSUME: The input string is a “single word” containing only
 * alphabetic chars.
 *
 * @param s The input string.
 * @returns The resulting string.
 */
export function altCaps(s: string): string[] {
  const s1: string = s.split("").reduce(
    (acc: string[], chr: string, idx: number) => {
      return [...acc, isEven(idx) ? chr.toUpperCase() : chr];
    },
  []).join("");


  const s2: string = s.split("").reduce(
    (acc: string[], chr: string, idx: number) => {
      return [...acc, isEven(idx) ? chr : chr.toUpperCase()];
    },
  []).join("");

  return [s1, s2];
}

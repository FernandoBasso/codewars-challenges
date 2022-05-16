import { isEven, toUpper } from "/lib/index.ts";

/**
 * Alternate capitalize the input string.
 *
 * ASSUME: The input string is a “single word” containing only
 * alphabetic chars.
 *
 * This solution uses a single loop.
 *
 * @param s The input string.
 * @returns The resulting string.
 */
export function altCaps(s: string): [string, string] {
  const alts: [string[], string[]] = [...s].reduce(
    (
      acc: [string[], string[]],
      chr: string,
      idx: number,
    ): [string[], string[]] => {
      return [
        [...acc[0], isEven(idx) ? toUpper(chr) : chr],
        [...acc[1], isEven(idx) ? chr : toUpper(chr)],
      ];
    },
    [[], []],
  );

  return [alts[0].join(""), alts[1].join("")];
}

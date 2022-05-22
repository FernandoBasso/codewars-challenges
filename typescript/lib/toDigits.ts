/**
 * Turns the input integer into an array of digits.
 *
 * If the number is negative, the sign is discarded and treated as a
 * non-negative number. We only care about the digits, not the sign.
 *
 * @param num The number to turn into an array of digits.
 * @returns The array of digits from the input number.
 */
export function toDigits(num: number): number[] {
  let lead: number = num < 0 ? num * -1 : num;
  const digits: number[] = [];

  if (num === 0) return [0];

  while (lead !== 0) {
    const rem = lead % 10;
    lead = (lead - rem) / 10;
    digits.unshift(rem);
  }

  return digits;
}

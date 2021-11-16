import { inArray } from './v1_which-are-in';

describe('inArray()', () => {
  const haystack = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

  it('should find the correct substrings, if any', () => {
    [
      [['tarp', 'mice', 'bull'], []],
      [['xyz', 'live', 'strong'], ['live', 'strong']],
      [['live', 'strong', 'arp'], ['arp', 'live', 'strong']],
    ].forEach(([input, output]) => {
      expect(inArray(input, haystack)).toEqual(output);
    });
  });
});

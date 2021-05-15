import { evensRangeAvg } from './v1_evens-range-average';

describe('evensRangeAvg()', () => {
  it('should produce the proper average', () => {
    [
      [0, 0],
      [2, 2],
      [4, 6.666],
      [42, 602],
    ].forEach(([input, output]) => {
      expect(evensRangeAvg(input)).toBeCloseTo(output);
    });
  });
});

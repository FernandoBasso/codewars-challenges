import { minLength } from './line';

describe('line.js', () => {
  it('should find the minimumn length of line to pack n line segments', () => {
    [
      [[1, 0], 0],
      [[1, 1], 1],
      [[2, 1], 2],
      [[2, 2], 4],
      [[5, 5], 25],
    ].forEach(([input, output]) => {
      expect(minLength(...input)).toEqual(output);
    });
  });
});

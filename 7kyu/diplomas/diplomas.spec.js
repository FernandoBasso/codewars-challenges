import { diplomas } from './v2_diplomas';

describe('diplomas()', () => {
  it('should find the correct value', () => {
    [
      [[1, 4, 1], 4],
      [[2, 3, 10], 9],
      [[1, 1, 1], 1],
      [[1, 239, 7], 239],
      [[17, 21, 0], 0],
      [[3, 4, 12], 12],
      [[2, 1, 4], 4],
      [[4, 4, 2], 8],
      [[567, 120, 129], 3120],
      [[239, 239, 7], 717],
    ].forEach(([input, output]) => {
      expect(diplomas(...input)).toEqual(output);
    });
  });
});

const bingoRange = require('./bingoRange');

describe('bingoRange', () => {
  test('returns array with correct numbers for B', () => {
    expect(bingoRange('B')).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
  test.skip('returns array with correct numbers for I', () => {
    expect(bingoRange('I')).toBe([16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
  });
  test.skip('returns array with correct numbers for N', () => {
    expect(bingoRange('N')).toBe([31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
  });
  test.skip('returns array with correct numbers for G', () => {
    expect(bingoRange('G')).toBe([46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]);
  });
  test.skip('returns array with correct numbers for O', () => {
    expect(bingoRange('O')).toBe([61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]);
  });
})
const sleepDebt = require('./sleepDebt');

describe('sleepDebt', () => {
  test('returns correct number of hours to eliminate sleep debt', () => {
    expect(sleepDebt([6, 6, 6, 6, 6, 6], 8)).toBe(20);
  });
  test.skip('returns correct number of hours to eliminate sleep debt', () => {
    expect(sleepDebt([6, 7, 8, 4, 8, 6], 7)).toBe(10);
  });
  test.skip('returns correct number of hours to eliminate sleep debt', () => {
    expect(sleepDebt([10, 10, 9, 10, 9, 11], 9)).toBe(4);
  });
  test.skip('returns correct number of hours to eliminate sleep debt', () => {
    expect(sleepDebt([8, 7, 6, 7, 6, 8], 6)).toBe(0);
  });
  test.skip('returns correct number of hours to eliminate sleep debt', () => {
    expect(sleepDebt([8, 9, 10, 9, 10, 7], 7)).toBe(0);
  });
});

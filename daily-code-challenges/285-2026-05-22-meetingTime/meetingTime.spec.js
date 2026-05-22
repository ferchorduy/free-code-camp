const meetingTime = require('./meetingTime');

describe('meetingTime', () => {
  test.skip('returns earliest shared free hour', () => {
    expect(meetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]])).toBe(11);
  });
  test.skip('returns earliest shared free hour', () => {
    expect(meetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]])).toBe(13);
  });
  test.skip('returns earliest shared free hour', () => {
    expect(meetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]])).toBe(9);
  });
  test.skip('returns earliest shared free hour', () => {
    expect(meetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]])).toBe('None');
  });
  test.skip('returns earliest shared free hour', () => {
    expect(meetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]])).toBe(21);
  });
});

const mongoIDDate = require('./mongoIDDate');

describe('mongoIDDate', () => {
  test('returns correct ISO 8601 string time', () => {
    expect(mongoIDDate('6a094b50bcf86cd799439011')).toBe('2026-05-17T05:00:00.000Z');
  });
  test.skip('returns correct ISO 8601 string time', () => {
    expect(mongoIDDate('695344eb1f4a4c1123042128')).toBe('2025-12-30T03:20:11.000Z');
  });
  test.skip('returns correct ISO 8601 string time', () => {
    expect(mongoIDDate('386da62df34123ac54617e56')).toBe('2000-01-01T07:01:01.000Z');
  });
  test.skip('returns correct ISO 8601 string time', () => {
    expect(mongoIDDate('69f571c3d7711807afd3dd55')).toBe('2026-05-02T03:38:43.000Z');
  });
  test.skip('returns correct ISO 8601 string time', () => {
    expect(mongoIDDate('68adce01c0e1144d0a90295a')).toBe('2025-08-26T15:08:49.000Z');
  });
});
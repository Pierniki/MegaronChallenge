import { getDatesArray } from './date';

describe('getDatesArray function', () => {
  it('should return array of dates', () => {
    const dates = getDatesArray();
    expect(Array.isArray(dates)).toBeTruthy();
    expect(dates[0]).toBeInstanceOf(Date);
  });
  it('should return 7 dates by default', () => {
    const dates = getDatesArray();
    expect(dates.length).toEqual(7);
  });
  it('should return correct dates in array', () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const dates = getDatesArray();
    expect(dates[0]).toEqual(today);
    expect(dates[1]).toEqual(tomorrow);
  });
});

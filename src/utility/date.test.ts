import { getDatesArray, getFormatedDateString } from './date';

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

describe('getFormatedDateString function', () => {
  it("should add 0's if month or day are one digit", () => {
    const date = new Date('January 1, 1995');
    const formatedDate = getFormatedDateString(date);
    expect(formatedDate).toEqual('1995-01-01');
  });

  it("should not add 0's on double digit months and days", () => {
    const date = new Date('December 12, 1995');
    const formatedDate = getFormatedDateString(date);
    expect(formatedDate).toEqual('1995-12-12');
  });
});

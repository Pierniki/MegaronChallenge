export const getDatesArray = (daysAhead: number = 7) => {
  const today = new Date();
  return Array.from({ length: daysAhead }, (_, idx) => {
    const date = new Date();
    date.setDate(today.getDate() + idx);
    return date;
  });
};

export const getFormatedDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${(month > 9 ? '' : '0') + month}-${
    (day > 9 ? '' : '0') + day
  }`;
};

export const convertDateToUtc = (date: any) => {
  let newDate = Math.floor(new Date(date).getTime() / 1000);
  return newDate;
};

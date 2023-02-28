export const getWeeksDays = () => {
  const res = [];
  var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  for (let i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() + i);
    var dayName = days[d.getDay()];
    var date = d.getDate();
    res.push({ date: { date: date, day: dayName } });
  }
  return res;
};

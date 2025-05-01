/////////////////////////////////////////////////
// 189-Operations-with-Dates

const fatima = new Date(2029, 9, 13, 8);
console.log(Number(fatima)); // number of milliseconds
console.log(+fatima);

const calcDaysBetween = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysBetween(new Date(2029, 9, 13), new Date(2029, 9, 4));
console.log(days1);

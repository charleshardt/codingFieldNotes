/////////////////////////////////////////////////
// 186-Creating-Dates

// Four ways to create a date

// right now
const now = new Date();
console.log(now);

// Parse from a string
console.log(new Date('Apr 30 2025 14:52:38'));

// Write our own string. Don't do this unreliable thing, tho.
console.log(new Date('April 30, 2025'));
console.log(new Date(account1.movementsDates.at(0)));

// Pass in Yr Mo Day Hr Min Sec
console.log(new Date(25, 3, 30, 15, 1, 34.254)); // 0-based month
console.log(new Date(25, 10, 33, 15, 1, 34.254)); // it autocorrects

// Unix timestamp: milliseconds after Jan 1, 1970.
console.log(new Date(0)); // Wed Dec 31 1969 19:00:00 GMT-0500 (Eastern Standard Time)

// Three days after this, i.e. 3d x 24hrs x 60min x 60sec x 1000 thousandths of a sec
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Dates are objects and have methods
const fatima = new Date(2029, 9, 13, 8);
console.log(fatima.getFullYear()); // never use .getYear()
console.log(fatima.getMonth()); // 0-based
console.log(fatima.getDate()); // day of the month
console.log(fatima.getDay()); // day of the week
console.log(fatima.getHours());
console.log(fatima.getMinutes());
console.log(fatima.getSeconds());
console.log(fatima.toISOString());
console.log(fatima.getTime()); // Unix timestamp
console.log(new Date(1886601600000)); // Unix timestamp

// Timestamps are so important that there is a special method for getting the timestamp for righ now.
console.log(Date.now());

// Set methods
fatima.setFullYear(1929);
console.log(fatima);

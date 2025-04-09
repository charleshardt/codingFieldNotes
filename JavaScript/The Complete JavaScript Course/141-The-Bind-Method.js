///////////////////////////////////////
// Lesson 141. The Bind Method

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LM",
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });

    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}.`
    );
  }
};
const eurowings = { airline: "Eurowings", iataCode: "EW", bookings: [] };
const book = lufthansa.book; 

// bind() returns a new function to which <this> is bound
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookLH(239, "Sarah Williams");
bookEW(23, "Steven Williams");

// Partial Application: part of the arguments already applied
// bind <this> to eurowings and set in stone just the first arg
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Charles Hardt");
bookEW23("Elke De La Cruz");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// bind() often used in partial application. Don't care about <this>, just pre-setting parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.065, 100));

const addVAT = addTax.bind(null, 0.23); // Don't care about <this>. Just setting rate.
console.log(addVAT(100));
// The order of the args is important!

// Same as:
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(143)); // Compare to:
console.log(addVAT(143));

///////////////////////////////////////
// Lesson 138. Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });

    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}.`
    );
  },
};
lufthansa.book(239, 'Charles Hardt');
lufthansa.book(239, 'Elke De La Hardt');
console.log(lufthansa);

const eurowings = { name: 'Eurowings', iataCode: 'EW', bookings: [] };

// this is possible because Js has 1st-class functions:
const book = lufthansa.book;

// book(23, 'Sarah Goldmark');
// This won't work because book is no longer a method; it is a regular function call, and <this> points to undefined

// There are 3 ways to make <this> point to what we want manually: call(), apply(), and bind()

// Major premise: All objects have methods.
// Minor premise: Functions are objects.
// Conclusion: Therefore, functions have methods.

// the call() method:
book.call(eurowings, 23, 'Sarah Goldmark'); // 1st arg is new <this>
console.log(eurowings);

// The call method calls the book function, setting <this> to the eurowings object.

book.call(lufthansa, 47, 'Mark Zingleberd');
console.log(lufthansa);

// the apply() method
// same as call(), but receives the arguments as an array
const flightData = [638, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// apply() not used much anymore. just use spread operator
book.call(lufthansa, ...flightData);
console.log(lufthansa);

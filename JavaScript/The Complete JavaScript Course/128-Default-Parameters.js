///////////////////////////////////////
// Lesson 128. Default Parameters

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 2,
  price = 199 * numPassengers // must be in order for calculation
) {
  // numPassengers = numPassengers || 1; // Old clunky ES5 way
  // price = price || 199; // Old clunky ES5 way

  const booking = {
    // use enhanced object literal syntax
    flightNum,
    numPassengers,
    price
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 399);
createBooking("LH123", 3);
// workaround for skipping an argument: use undefined
createBooking("HL345", undefined, 333);

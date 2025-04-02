///////////////////////////////////////
// Lesson 134. Value vs. Reference
// cf. Lesson 101. Primitives vs. Objects

const flight = 'LH234';
const charles = { name: 'Charles Hardt', passport: 'A00048392' };

const checkIn = function (flightNum, passenger) {
  flightNum = 'TA870';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 'A00048392') {
    alert('Checked in.');
  } else {
    alert('Wrong passport.');
  }
};
checkIn(flight, charles);

// console.log(flight);
// flight was passed into checkIn and called flightNum, but changing flightNum obviously doesn't change flight. In the heap, flightNum is basically a copy of flight. It's the same thing as:
// const flightNum = flight;

// console.log(charles);
// However, the object <passenger> points to the same object in the heap as <charles>. We are passing into the function a reference to the same object, so changing it in the function scope changes the actual object. It's pointing to the same memory address in the heap, not a copy. CAUTION, esp. when working with a large code base with multiple devs. It's the same thing as:
// const passenger = charles;

// Example of how things can go horribly awry:
const newPassport = function (person) {
  person.passport = 'A000' + Math.trunc(100000 * Math.random());
};
newPassport(charles);
checkIn(flight, charles);

// Javascript only has "passing by value." Even a reference to an object in the heap is a memory address expressed by a value. It is not "passing by reference" like in C++. Javascript does not have "passing by reference."

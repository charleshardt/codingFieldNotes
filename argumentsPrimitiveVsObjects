/**
 * Passing Arguments into Functions
 *
 * Primitive values vs. objects
 */

const flight = 'LH234';

const charles = {
  name: 'Charles Hardt',
  passport: 2892398,
};
console.log(flight, charles);

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //hmm, will this change flight?
  passenger.name = 'Mr. ' + passenger.name;
};

checkIn(flight, charles);
console.log(flight, charles);

//flightNum is a primitive value--the value of flight just gets copied to flightNum. Changing flightNum does not change flight. Because flight is a primitive value.

//charles is an object. passenger is just copying a reference to the object charles. It is pointing to the original object, not copying it. Changing passenger.name also changes charles.name. 

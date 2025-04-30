/////////////////////////////////////////////////
// 182-Math-Rounding

// Roots (**)
console.log(Math.sqrt(3 ** 2 + 4 ** 2)); // 5
console.log((3 ** 2 + 4 ** 2) ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Max and Min do type coercion but not parsing
console.log(Math.max(1, 0, '1000000000', -2.3, 1.1)); // 1000000000
console.log(Math.max('1rem', 0, '1000000000', -2.3, 1.1)); // NaN
console.log(Math.min(1, 0, '1000000000', 2.3, -1.1)); // -1.1

// PI
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Must generate good random numbers as needed
// Between 1 and 6 (dice)
console.log(Math.floor(Math.random() * 6) + 1);

// A random number generator to implement in your code:

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(223.2)); // take off the decimal
console.log(Math.round(2.49)); // round to the nearest int

console.log(Math.ceil('43.1')); // round up
console.log(Math.ceil(43.9)); // round up

console.log(Math.floor(67.1)); // round down
console.log(Math.floor('67.9')); // round down

// floor and trunc are only the same with positive numbers ;)

// Rounding to decimals
console.log((3.14159).toFixed(0)); // returns a string
console.log(+(3.14159).toFixed(2));
console.log(+(3.14159).toFixed(4));
console.log(+(3.14159).toFixed(30)); // starting to be weird

// Behind-the-scenes. Primitives don't have methods. Boxing: it has to be converted to an object, calculated, then converted back.

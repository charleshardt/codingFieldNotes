/////////////////////////////////////////////////
// 181-Converting-Checking-Numbers

// In Js, all numbers are represented internally as floating point numbers
console.log(23 === 23.0);

// Numbers are represented internally in a 64 base 2 format, and some numbers are difficult to represent as such:
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// in base 10, 3/10 is difficult to represent (0.3333333333 etc.)
// in base 2, 1/10 is difficult to represent similarly
// Do not use Js for very precise scientific calculations:
// PHP and Ruby are similar

// Convert a string to a number:
console.log(Number('23'));
console.log(+'23'); // easier and cleaner, forces type conversion

// Parsing
// PSA: Every function is also an object
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10)); // must start with a number
// always pass in the radix to avoid bugs

console.log(Number.parseFloat('  2.5rem')); // 2.5
console.log(Number.parseInt(' 2.5rem    ')); // 2

// works, too, but discouraged in modern Js: use the Number namespace
console.log(parseInt(' 2.5rem    '));

// Only use isNaN() to check specifically for NaN value.
console.log(Number.isNaN(20)); // false, because is a number
console.log(Number.isNaN('20')); // false, because is regular value
console.log(Number.isNaN(+'20X')); // true, because type conversion on a string
console.log(Number.isNaN(23 / 0)); // infinity is not NaN

// isFinite() should be your go-to for checking if something is actually a number or not.
console.log(Number.isFinite(20)); // true, is a number
console.log(Number.isFinite('20')); // false, is a string
console.log(Number.isFinite(+'20X')); // false, is NaN
console.log(Number.isFinite(23 / 0)); // false because infinity

// or isInteger() if using integers
console.log(Number.isInteger(21));
console.log(Number.isInteger('21.0'));
console.log(Number.isInteger(+'21X'));
console.log(Number.isInteger(21 / 0));

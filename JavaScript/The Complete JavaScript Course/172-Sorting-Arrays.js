/////////////////////////////////////////////////
// 172-Sorting-Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // mutates original array

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // converts to strings and sorts

// sort() compares adjacent elements, a and b, and returns a positive or negative:
// A negative value indicates that a should stay before b.
// A positive value indicates that a should be put after b.

// Ascending
movements.sort((a, b) => {
  // if a is larger than b
  if (a > b) return 1; // returns positive: put b before a

  // if b is larger than a
  if (b > a) return -1; // returns negative: keep a before b
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements);

// Cleaned up
movements.sort((a, b) => a - b); // a - b = ascending
console.log(movements);

movements.sort((a, b) => b - a); // b - a = descending
console.log(movements);

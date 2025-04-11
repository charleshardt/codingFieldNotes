/////////////////////////////////////////////////
// 149-Simple-Array-Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// --------------------------slice()
// makes a shallow copy, does not mutate the original array
console.log(arr.slice(2)); // returns array from Index 2 to end
console.log(arr.slice(1, 3)); // returns array from Index 2 to 4
console.log(arr.slice(-2)); // returns last two elements from end
console.log(arr.slice(-1)); // returns last element from end
console.log(arr.slice(1, -1)); // returns array from Index 1, leaving off 1 from the end

// use slice() to make a shallow copy of an array
console.log(arr.slice());
console.log([...arr]); // same thing
// use slice if you want to chain methods together, other than that, doesn't matter

arr = ['a', 'b', 'c', 'd', 'e']; // reset

// --------------------------splice()
// extracts from the original array

console.log(arr.splice(2)); // looks the same as above
console.log(arr); // except it actually took away from arr

// splice usually used to delete elements from an array and we don't care what it returns. Remove the last element:
console.log(arr.splice(-1));

arr = ['a', 'b', 'c', 'd', 'e']; // reset
console.log('original array:', arr);
console.log('elements deleted:', arr.splice(1, 2)); // second parameter: how many elements to delete
console.log('elements remaining:', arr);

arr = ['a', 'b', 'c', 'd', 'e']; // reset

// --------------------------reverse()
// mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// --------------------------concat()
const tenLetters = arr.concat(arr2);
console.log(tenLetters);
console.log([...arr, ...arr2]); // same exact thing

// --------------------------join()
console.log(tenLetters.join(' \u035C  '));

// we already know push(), unshift(), pop(), shift(), indexOf(), and includes()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

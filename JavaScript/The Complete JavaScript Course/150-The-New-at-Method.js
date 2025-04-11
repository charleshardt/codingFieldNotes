/////////////////////////////////////////////////
// 150-The-New-at-Method

const arr = [3, 4, 5, 7, 9, 12, 15, 108];
console.log(arr[0]); // log the first element
console.log(arr.at(0)); // at() method FTW, say: "array at 0"

// you can replace outdated bracket notation with the modern "at" notation

// Get the last element. The 2 most common ways:
console.log('Brackets', arr[arr.length - 1]);
console.log('slice()', arr.slice(-1)[0]);

// Way easier with at():
console.log('at()', arr.at(-1));

// Use on strings:
console.log('hardt'.at(-1));

// Use at() for: getting the last element, method chaining
// Use brackets for: getting the first element

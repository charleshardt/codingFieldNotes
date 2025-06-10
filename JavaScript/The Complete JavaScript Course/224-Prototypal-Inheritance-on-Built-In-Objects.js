const Person = function (firstName, birthYear) {
  // instanceOf properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const charlie = new Person('Charlie', 1977);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Person.prototype.genus = 'forest-animal';

/////////////////////////////////////////////////
// 224-Prototypal-Inheritance-on-Built-In-Objects

console.log(charlie.__proto__);

// Object.prototype (top of prototype chain)
console.log(charlie.__proto__.__proto__);

console.log(charlie.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

// Prototype of an array. Each array will get access to all of the methods in the prototype.

// A Fibonacci stutter
const arr = [0, 1, 1, 1, 1, 1, 2, 3, 5, 8, 8, 8, 8, 13, 21, 34];
// const arr = new Array(0, 1, 1, 2, 3, 5, 8, 13, 21, 34); // same

// See all the Array methods here
console.log(arr.__proto__);

// Prototype of arr is the prototype property of the Array constructor
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // Object.prototype

// Extend the functionality of Array(). (<this> is the array the method will be called on)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// Removes Fibonacci's stutter. All arrays inherit the method.
console.log(arr.unique());

// BTW, this is just a fun experiment. Don't extend built-in functionality. It will cause uncountable bugs when working with a team or when ECMA updates later.

const h1 = document.querySelector('h1');
console.log('\r\n-------------Follow the Prototype Chain----------');
console.dir(h1.__proto__);
console.dir(h1.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.dir(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);

// Prototype of a function
console.dir(x => x + 1);



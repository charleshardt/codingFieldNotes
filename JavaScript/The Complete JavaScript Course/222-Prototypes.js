/////////////////////////////////////////////////
// 222-Prototypes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor fn
  // this.calcAge = function () {
  //   console.log(2025 - this.birthYear);
  // };
};

const charlie = new Person('Charlie', 1977);
const elke = new Person('Elke', 1972);
const jonathan = new Person('Jonathan', 1981);

console.log(elke instanceof Person);

// Add a method to the object prototype and your objects will have access to the method due to prototypal inheritance.

// Empty
console.log(Person.prototype);

// Add a function to the prototype property of the constuctor fn.
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

console.log(Person.prototype);

// Available to the objects
elke.calcAge();
charlie.calcAge();
jonathan.calcAge();

// The prototype itself of the charlie object, which now has the calcAge fn.
console.log(charlie.__proto__);

// Person.prototype is not the prototype of Person, but rather the prototype of all objects created by the Person constructor.

// The prototype of the object is the prototype property of the constructor function.
console.log(charlie.__proto__ === Person.prototype);

// Proven with isPrototypeOf()
console.log(Person.prototype.isPrototypeOf(charlie));
console.log(Person.prototype.isPrototypeOf(jonathan));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects would be a better name for this property

Person.prototype.genus = 'forest-animal';
console.log(charlie, elke);

// Both objects inherit the property from the __proto__
console.log(charlie.genus, elke.genus);

// Check to see if property is own or inherited
console.log(charlie.hasOwnProperty('firstName'));
console.log(charlie.hasOwnProperty('genus'));

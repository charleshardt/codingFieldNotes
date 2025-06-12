/////////////////////////////////////////////////
// 226-ES6-Classes

// Js classes are syntactic sugar to make it easier for developers coming from languages like C++ and PHP. Despite the class keyword, classes are still functions behind the scenes.

// Class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  } // No commas

  calcAge() {
    // Methods will be on the .prototype property of the PersonCL, not the objects
    console.log(2025 - this.birthYear);
  }
}

const william = new PersonCl('Billybobjoe', 1957);
console.log(william);
william.calcAge();

console.log(william.__proto__ === PersonCl.prototype);

// Manually add a method to the prototype
PersonCl.prototype.greet = function () {
  console.log(`Greetings and salutations, ${this.firstName}!`);
};
william.greet();

// 1. Classes are not hoisted.
// 2. Classes are first-class citizens, like functions.
// 3. Classes are executed in strict mode.

// Classes or Constructor Functions?
// - Constr. Fns are not deprecated or old.
// - Don't use classes unless you understand prototypal inheritance.
// - Classes advantage: visually tidier to see the code in blocks

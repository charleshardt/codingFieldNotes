/**
 * Lesson 44: Object Methods
 *
 *
 */

/* Functions are just values. */
/* Key-Value pairs: values can be functions. */
/* So we can add functions to objects. */
/* An object property that is a function expression is called a "method." 
Function declarations won't work. */

const charlie = {
  firstName: "Charles",
  lastName: "Hardt",
  nickname: "Charlie",
  birthYear: 1997,
  job: "web developer",
  friends: ["Fr. Jonathan", "Jeff Davis", "Glenn Basham", "Capt. Bob Elmore"],
  hasDL: true,

  // v1: Creates a method
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },

  // v2: DRY code with this keyword
  // calcAge: function () {
  //   return new Date().getFullYear() - this.birthYear;
  // },
  /* keyword "this" is equal to the object that is calling the method. */

  // v3: Create a new property on the object "charlie."
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};

console.log(charlie.calcAge());

/* calcAge created a property ('age'). Now you can use that as many times
as necessary. Useful for resource-heavy computations that need to be 
called often. */
console.log(charlie.age);
console.log(charlie.age);
console.log(charlie.age);

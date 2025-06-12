/////////////////////////////////////////////////
// 229-Object.create

// Third way of implementing prototypal inheritance/delegation, after Constructor Functions and ES6 Classes. The most straightforward but least used way.

// Important for linking prototypes to implement inheritance between classes.

// No .prototype, __proto__, constructor(), or new operator.

// Use Object.create to manually set prototype of an object to any other object

// Create a prototype of all the Person objects. This will be an object literal.
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  // similar to constructor() but has nothing to do with it because there is no new operator
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// pass in object prototype
const coastie = Object.create(PersonProto);
console.log(coastie);
coastie.name = 'Coastie S. Turtle II';
coastie.birthYear = '2017';
coastie.calcAge();

// prototype of coastie is exactly PersonProto
console.log(coastie.__proto__);
console.log(coastie.__proto__ === PersonProto); // true

const richie = Object.create(PersonProto);

// a manual method does the same work as a constructor() fn
richie.init('Richie', 2019);
richie.calcAge();

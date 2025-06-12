/////////////////////////////////////////////////
// 227-Setters-Getters

// Assessor properties, common to all Js objects.
// Data properties are the normal properties.

// Setters and Getters are useful for data validation.

const account = {
  owner: 'Walter the Dinosaur',
  movements: [300, -23.31, 500, 135.98],

  // make the fn into a getter by adding get
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // make a setter by writing set and using exactly 1 paramenter
  set latest(mov) {
    this.movements.push(mov);
  },
};

// write the getter as if it were just a property
console.log(account.latest);

// a method you'd have to set like:
// account.latest(45.13);

// a setter you set like a property
account.latest = 45.13;
console.log(account.movements);

// Classes have setters and getters
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get elevatorPitch() {
    return `I am ${this._fullName}, a AAA certified hugger of the first-class. If you need a hug, don't hesitate to contact me.`;
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exists, must use underscore to define new property, and use get after.
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }
}

const walter = new Person('Walter Raleigh', 2020);

console.log(
  `${walter.elevatorPitch} I am a grown-ass dinosaur of ${walter.age} years.`
);

console.log(walter);


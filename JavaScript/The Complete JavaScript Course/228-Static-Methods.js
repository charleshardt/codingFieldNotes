
/////////////////////////////////////////////////
// 228-Static-Methods

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods will be added to the .prototype property
  get elevatorPitch() {
    return `I am ${this._fullName}, a AAA certified hugger of the first-class. If you need a hug, don't hesitate to contact me.`;
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Static methods do not get added to the .prototype property
  static hey() {
    console.log('Hey! 🙋‍♂️');
    console.log(this);
  }
}

const walter = new Person('Walter Raleigh', 2020);

// Person.hey = function () {
// console.log('Hey! 🙋‍♂️');
// console.log(this);
// };

Person.hey();
// but not walter.hey();

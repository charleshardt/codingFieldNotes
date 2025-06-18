/////////////////////////////////////////////////
// 233-Inheritance-Between-ES6-Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super() always happens first because it creates this.
    super(fullName, birthYear);
    this.course = course;
  }

  elevatorPitch() {
    console.log(
      `I am ${this._fullName}. I like ${this.course}. I was born in ${this.birthYear}. Give me your business.`
    );
  }

  // this calcAge() is shadowing the one in the parent class.
  calcAge() {
    console.log(
      `I identify as a ${
        new Date().getFullYear() - this.birthYear
      } year old person because that corresponds to reality.`
    );
  }
}

const marsha = new StudentCl('Marsha Herder', 1952, 'Home Economics');

marsha.elevatorPitch();
marsha.calcAge();

// Inheritance can be a real problem in the real world. Will talk more about it in the Functional Programming section.

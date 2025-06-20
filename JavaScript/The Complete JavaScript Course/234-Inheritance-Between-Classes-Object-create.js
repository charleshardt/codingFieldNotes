/////////////////////////////////////////////////
// 234-Inheritance-Between-Classes-Object-create

// ES6 classes and constuctor functions are more prevalent in the wild.

// However, a common opinion is that the Object.create pattern is better than trying to "fake" classes in Js. There is no fooling with the `new` keyword, constructors, or prototype properties. We're just linking up objects in a logical, simple, and beautiful way.

// Object to be prototype
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

// Object.create a __proto__ chain: Person > Student > Object
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, major) {
  PersonProto.init.call(this, firstName, birthYear);
  this.major = major;
};

// jordan will have access to all the methods up the chain
const jordan = Object.create(StudentProto);

// Create an init method
jordan.init('Jordan Patterson', 1989, 'Zarathustran Deckineering');

// Create another method, let's do an elevator pitch again
StudentProto.elevatorPitch = function () {
  console.log(
    `My name is ${this.firstName}. I study ${this.major}. I was born in ${this.birthYear}. I love you and want to marry you immediately. Would you like to go swimming with me?`
  );
};

jordan.elevatorPitch();
jordan.calcAge();

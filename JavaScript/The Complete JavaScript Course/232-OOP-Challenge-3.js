
/////////////////////////////////////////////////
// 232-OOP-Challenge-3

// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉

// Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}, go FASTER! Speed is now...${this.speed} kph`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make}, SLOW DOWN! Speed is now...${this.speed} kph`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Polymorphism: the EV child class .accelerate method will override the Car parent class .accelerate method.
EV.prototype.accelerate = function () {
  this.speed += 16;
  this.charge--;
  console.log(
    `Speed was increased to ${this.speed} and battery reduced to ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery = 94;
tesla.brake();
tesla.accelerate();
tesla.accelerate();
console.log(tesla);

/////////////////////////////////////////////////
// 225-OOP-Challenge-1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make}, go FASTER! Speed is now ${this.speed} mph`);
};

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make}, SLOW DOWN! Speed is now ${this.speed} mph`);
};

// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
const bmw = new Car('BMW', 96);
const mercedes = new Car('Mercedes', 35);
const audi = new Car('Audi', 55);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
audi.accelerate();
audi.accelerate();
audi.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

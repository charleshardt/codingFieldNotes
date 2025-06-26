/////////////////////////////////////////////////
// 239-OOP-Challenge-4

// 1. Recreate Challenge 3, but this time using ES6 classes: create an EVCl child class of the 'CarCl' class.

// 2. Make the 'charge' property private.

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the Car class. Then experiment with chaining.

// Data Car 1: 'Rivian' going at 120 km/h, with a charge of 23%.

// CarCl from Challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}, go FASTER! Speed is now...${this.speed} kph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}, SLOW DOWN! Speed is now...${this.speed} kph`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(kph) {
    this.speed = kph * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 16;
    this.#charge--;
    console.log(
      `Speed was increased to ${this.speed} and battery reduced to ${
        this.#charge
      }`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(
      `Speed was decreased to ${this.speed} and battery is holding at ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(75)
  .accelerate()
  .brake();
console.log(rivian);
console.log(`Currently operating at ${rivian.speedUS} mph.`);

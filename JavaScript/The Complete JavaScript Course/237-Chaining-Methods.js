/////////////////////////////////////////////////
// 237-Chaining-Methods

class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.#pin = pin;
    this.owner = owner;
    this.currency = currency;
    console.log(`${owner}, you are awesome!`);
  }

  getMovements() {
    return this.#movements; // not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // return the object to make chainable
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan disbursed`);
    }
    return this;
  }
}

const acc1 = new Account('Charles', 'USD', 1285);

// Here is a common pattern you will see in OOP, especially when using external libraries. To make a method chainable, you must return the object at the end of the method.
acc1
  .deposit(5000)
  .withdraw(328)
  .withdraw(1205)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements(); // this method will only work at the end because an array, not the object, is not returned by the method

console.log(acc1);


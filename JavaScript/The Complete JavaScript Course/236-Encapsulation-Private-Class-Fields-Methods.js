/////////////////////////////////////////////////
// 236-Encapsulation-Private-Class-Fields-Methods
// Introduced in ES2022

// Encapsulation: keep private some properties/methods inside a class. An essential aspect of Data Privacy.

// 1. Public fields

// A field is a property that will be on all class instances. We can declare everything as a field that we want in all of the instances, but NOT on the prototype.

// Using fields makes code more self-documenting

// 2. Private fields
// Private means you cannot access (read or mutate) the data outside of the class. It is not hidden.

// 3. Public methods

// 4. Private methods

// Plus STATIC version of all four.

class Account {
  // Create fields before the constructor()
  locale = navigator.language; // semi-colon required
  bank = 'Bankist';
  #movements = []; // the hast makes the field private
  #pin;

  constructor(owner, currency, pin) {
    // this.locale = navigator.language; // changed to fields above
    // this.bank = 'Bankist';
    // this.movements = [];
    this.#pin = pin;
    this.owner = owner;
    this.currency = currency;
    console.log(`${owner}, you are awesome!`);
  }

  // Public Interface (API), our public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Fake method. A real one would have an algorithm which approves a loan.
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan disbursed`);
    }
  }

  // Static method gets used directly on a class for something, not on the object instance.
  static testPublic() {
    console.log(`Static method: testPublic successful.`);
  }

  // Here is a private one.
  static #testPrivate() {
    console.log(`Static method: test successful.`);
  }
}

const acc1 = new Account('Charles', 'USD', 1285);
acc1.deposit(5000);
acc1.withdraw(328);
acc1.withdraw(1205);

// console.log(acc1.#movements); // Error: can only access the private field inside of the class. You can still see the data outside. Private only means you cannot do read or mutate it.

// acc1.#approveLoan(1000); // Error: can only access the private method inside of the class.

Account.testPublic();
// Account.#testPrivate(); // Error: can only access the private static method inside of the class.

console.log(acc1);

/////////////////////////////////////////////////
// 235-Another-Class-Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thank you, ${owner}!`);
  }

  // Public interface of our objects (API)
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan disbursed`);
    }
  }
}

const acc1 = new Account('Charles', 'USD', 1285);
console.log(acc1);

// This is a terrible idea:
// acc1.movements.push(250);
// acc1.movements.push(-58);

// Better to write methods that do it:
acc1.deposit(250);
acc1.withdraw(62);

// We don't want the pin accessible:
console.log(acc1.pin); // yikes

acc1.requestLoan(1000);
acc1.approveLoan(1000); // But this should not be accessible. Data encapsulation and data privacy necessary.

/////////////////////////////////////////////////
// 169-some-and-every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const acct12Movements = [430, 1000, 700, 50, 90];

// Eqality. Does the array contain the number -130?
console.log(movements.includes(-130)); // true

// Some
// Condition. Is there some value in the array greater than 0?
const anyDeposits = movements.some(mov => mov > 0); // true
console.log(anyDeposits);

// Every
console.log(acct12Movements.every(mov => mov > 0)); // false

// Separate callback
const deposits = mov => mov > 0;
console.log(movements.filter(deposits));
console.log(movements.some(deposits));
console.log(acct12Movements.every(deposits));

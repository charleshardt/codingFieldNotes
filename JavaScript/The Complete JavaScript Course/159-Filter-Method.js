
/////////////////////////////////////////////////
// 159-Filter-Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('movements:', movements);

// let's make an array of only the deposits:
const deposits = movements.filter(function (mov) {
  // we need a boolean value
  return mov > 0;
});

console.log('filter:', deposits);

// just try it with a for-of loop:
const depositsForOf = [];
for (const mov of movements) {
  if (mov > 0) depositsForOf.push(mov);
}
console.log('for-of:', depositsForOf);
// pick up all your legos, kiddos.

// Again, let's clean it up to 1 line with an arrow:
const depositsArrow = movements.filter(mov => mov > 0);

console.log('arrow:', depositsArrow);

// While we're here, make an array of the withdrawals:
const withdrawals = movements.filter(mov => mov < 0);
console.log('withdrawals:', withdrawals);

// Big advantage of using the methods over the loops is the ability to chain them together.

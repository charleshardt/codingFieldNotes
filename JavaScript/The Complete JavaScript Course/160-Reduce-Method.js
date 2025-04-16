/////////////////////////////////////////////////
// 160-Reduce-Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('movements:', movements);

// reduce() loops over the entire array and performs callback fn each iteration.
// The callback fn receives arguments for an accumulator, current value, current Index, and original array.
// accumulator -> SNOWBALL
// The reduce() method receives 2 args: fn and initial value of accumulator.
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log('reduce:', balance);

// with a for-of loop:
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;

console.log('for-of:', balanceFor);

// clean up with arrow:
const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);

console.log('arrow:', balanceArrow);

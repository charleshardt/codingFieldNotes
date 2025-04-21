/////////////////////////////////////////////////
// 162-Chaining-Methods

// Take all movements over 0 (deposits), convert to dollars, and sum.
const eurToUsd = 1.15;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)

  // .map(mov => eurToUsd * mov)

// or debug by adding i, arr, curly braces, and return
  .map((mov, i, arr) => {
    console.log(arr);
    return eurToUsd * mov;
  })
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD);

// Do not overuse chaining. If there are huge arrays, it can cause serious performance issues. Try to compress methods into as few as possible. Especially with map() methods.

// It is bad practice to use chains that mutate the original array e.g. splice() or revers().

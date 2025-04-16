/////////////////////////////////////////////////
// 157-Map-Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// more like functional programming: this uses a function to solve the problem. Modern Js is moving in this direction.
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

// this just loops over the thing to solve it
let movementsUSDForOf = [];
for (const [i, mov] of movements.entries()) {
  movementsUSDForOf.push(mov * eurToUsd);
  // movementsUSDForOf[i] = mov * eurToUsd; // or this
}
console.log(movementsUSDForOf);

// Simplify it more:
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDArrow);
// This is smaller and cleaner. Arrow functions are perfect for small callback functions. But it lacks the function and return keywords, so it reduces readability. Remember that the arrow points at the thing you return.

const movementDescriptions = movements.map(
  (mov, i) =>
    `${i + 1}. ${mov > 0 ? 'Deposit' : 'Withdrawal'}: ${Math.abs(mov)}`
);
console.log(movementDescriptions);

// The forEach loop logs things as they happen--it creates side effects. The map() method puts it all into an array which you can use later.

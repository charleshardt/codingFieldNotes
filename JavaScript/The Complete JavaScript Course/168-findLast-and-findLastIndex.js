/////////////////////////////////////////////////
// 168-findLast() and findLastIndex()
// Introduced in ES 2023

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);

console.log(lastWithdrawal);

// 'Your latest large movement [over 1000] was N movements ago'
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);

console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

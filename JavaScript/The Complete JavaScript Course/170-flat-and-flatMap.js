/////////////////////////////////////////////////
// 170-flat-and-flatMap
// New in ES2019

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// Pass in how many levels down. Default is 1.
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// Add up all movements from all accounts
// Get just the movements from all accounts in an array of arrays
const accountMovements = accounts.map(acc => acc.movements);

// Flatten it into one array
const allMovements = accountMovements.flat();
console.log(allMovements);

// Reduce
const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);

// Or do it all in one go with chaining
const overallBalanceChain1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalanceChain1);
// Getting a map and flattening it is a common operation

// flatMap combines the methods with better performance:
const overallBalanceChain2 = accounts
  .flatMap(acc => acc.movements) // can only go 1 level deep
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalanceChain2);

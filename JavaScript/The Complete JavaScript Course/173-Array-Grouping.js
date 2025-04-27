/////////////////////////////////////////////////
// 173-Array-Grouping

// Data
const account1 = {
  owner: 'Bear Captain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1234,
  type: 'premium',
};

const account2 = {
  owner: 'Elke De La Hardt',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2345,
  type: 'premium',
};

const account3 = {
  owner: 'Coastie Turtle',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3456,
  type: 'basic',
};

const account4 = {
  owner: 'Walter Raleigh',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4567,
  type: 'basic',
};

const account5 = {
  owner: 'Bro the Rrabbit',
  movements: [1430, -99, 2700, 503, 900, -30, 1132, -23],
  interestRate: 5.5,
  pin: 5678,
  type: 'standard',
};

const accounts = [account1, account2, account3, account4, account5];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Not a method, creates an object
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);

// Common use-case
// const groupedAccounts = Object.groupBy(accounts, account => account.type);

// Same thing simplified by destructuring:
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);

console.log(groupedAccounts);

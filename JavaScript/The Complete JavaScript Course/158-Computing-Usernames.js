/////////////////////////////////////////////////
// 158-Computing-Usernames

// Data
const account1 = {
  owner: 'Bear Captain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1234,
};

const account2 = {
  owner: 'Elke De La Hardt',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2345,
};

const account3 = {
  owner: 'Coastie Turtle',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3456,
};

const account4 = {
  owner: 'Walter Raleigh',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4567,
};

const account5 = {
  owner: 'Brother Rabbit',
  movements: [1430, -1000, 2700, 50, 900],
  interestRate: 0.5,
  pin: 5678,
};

const accounts = [account1, account2, account3, account4, account5];

// create username from the account owner names
const createUsernames = function (accs) {
  // use forEach because we want to modify an existing array, we do not want to return a new array.
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.at(0))
      .join('');
    console.log(acc);
  });
};
createUsernames(accounts);

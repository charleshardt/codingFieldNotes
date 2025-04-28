
/////////////////////////////////////////////////
// 177-Array-Methods-Practice

// Using Bankist App accounts

// Task 1. Get a sum of all the deposits from all accounts
const bankSumAllDeposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log('Sum of all deposits: ', bankSumAllDeposits);

// Task 2. Count how many deposits there have been in the bank with at least 1,000

// Easier solution:
const numDeposits1000Filter = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log('Number of deposits over 1,000: (filter) ', numDeposits1000Filter);

// More elegant solution:
const numDeposits1000Reduce = accounts
  .flatMap(acc => acc.movements)

  // Postfix increment (++) operator returns old value.
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// works fine

// Prefix increment (++) operator returns new value.
// .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0); // nope

console.log('Number of deposits over 1,000: (reduce) ', numDeposits1000Reduce);

// Task 3. Use a new object to add all deposits and withdrawals.

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // cleaner here with bracket notation
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// Challenge: reproduce map() and filter() examples with reduce().

// Task 4. Change Any String to Title Case.

const changeToTitleCase = function (title) {
  const capitalize = str => str.at(0).toUpperCase() + str.slice(1);

  const minorWords = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'in',
    'of',
    'on',
    'or',
    'the',
    'to',
    'up',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (minorWords.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(changeToTitleCase('a portrait of the arTist as A yoUng maN'));
console.log(changeToTitleCase('one hUndred years of solitude'));
console.log(changeToTitleCase('the hoBbit, oR, there and back again'));
console.log(changeToTitleCase('madame bovarY: pattErns of provincial life'));
console.log(changeToTitleCase('frankenstein, or, tHe mOdern prometheus'));

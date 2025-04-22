///////////////////////////////////////
// 163-Challenge-3-Array-Methods

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

const calcAverageHumanAge = function (ages) {
  const agesHuman = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const dogsOver18 = agesHuman.filter(function (humanAge) {
    return humanAge > 18;
  });
  const avgAdultAge =
    dogsOver18.reduce((acc, cur, i, arr) => acc + cur/arr.length, 0);
};

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {
  const avgAdultAge = ages
  .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age > 18)
  .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  console.log('result:', avgAdultAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

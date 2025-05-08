///////////////////////////////////////
// 18-Decisions-if-else-Statements

const age = 15;
if (age >= 18) {
  console.log(`Sarah can begin learning to drive! 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2001;
let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const country = 'USA';
const population = 130;
const populationAvg = 33;

if (population > populationAvg) {
  console.log(
    `${country}'s population is ` +
      (population - populationAvg) +
      ` million above average.`
  );
} else {
  console.log(
    `${country}'s population is ` +
      (populationAvg - population) +
      ` million below average.`
  );
}

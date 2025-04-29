///////////////////////////////////////
// 178-Coding-Challenge-5

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
*/

// TEST DATA:
const dogs = [
  { weight: 22, feedTracker: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, feedTracker: 200, owners: ['Matilda'] },
  { weight: 13, feedTracker: 275, owners: ['Sarah', 'John'] },
  { weight: 32, feedTracker: 340, owners: ['Michael'] },
  { weight: 18, feedTracker: 244, owners: ['Mark'] },
];

/*
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
*/

dogs.forEach(dog => (dog.feedTarget = Math.floor(dog.weight ** 0.75 * 28)));

/*
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
*/

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eats too dang ${
    sarahsDog.feedTracker > sarahsDog.feedTarget ? 'much' : 'little'
  }.`
);

/*
3. Create an array containing all owners of dogs who eat too much ('ownersOfHeavyEaters') and an array with all owners of dogs who eat too little ('ownersOfLightEaters').
*/

const ownersOfHeavyEaters = dogs
  .filter(dog => dog.feedTracker > dog.feedTarget)
  .flatMap(dog => dog.owners);

const ownersOfLightEaters = dogs
  .filter(dog => dog.feedTracker < dog.feedTarget)
  .flatMap(dog => dog.owners);

console.log(ownersOfHeavyEaters.at(0, -1));
console.log(ownersOfHeavyEaters.slice(0, -1));

/*
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
*/

console.log(`${ownersOfHeavyEaters.join(' and ')}'s dogs eat too dang much!`);

console.log(
  `${ownersOfLightEaters.join(' and ')}'s dogs aren't eating enough!`
);

/*
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
*/

console.log(
  'Any dogs with exactly right food amount?',
  dogs.some(dog => dog.feedTracker === dog.feedTarget)
);

/*
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
*/

const foodAmtIsOkay = dog =>
  dog.feedTracker > 0.9 * dog.feedTarget &&
  dog.feedTracker < dog.feedTarget * 1.1;

console.log(
  'Any dogs with food amount okay?',
  dogs.some(dog => foodAmtIsOkay(dog))
);

/*
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
*/

const dogsWithOkayAmt = dogs.filter(dog => foodAmtIsOkay(dog));
console.log(dogsWithOkayAmt);

/*
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
*/

const dogsSortedRecAsc = dogs
  .slice()
  .sort((a, b) => a.feedTarget - b.feedTarget);
console.log('dogs Sorted by recommended food:', dogsSortedRecAsc);

/*
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉

HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

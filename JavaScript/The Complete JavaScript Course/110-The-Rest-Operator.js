////////////////////////////////////////////////////////
// 110. The Rest Operator

// Example data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


// 1. Destructuring

// SPREAD, because on the RIGHT of the ASSIGNMENT operator :
const arrB = [1, 2, ...[3, 4]];
// console.log(arrB); // Bears, Beets, Battlestar Gallactica

// REST, because on the LEFT of the ASSIGNMENT operator :
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// Dots on both sides
// REST must be last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// It works with objects, too
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions

// Get multiple arguments into a function all at once
// Rest pattern collects all parameters into an array
const add = function (...numbers) {
  // here we unpack the values
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 2, 5, 7, 1, 2, 9, 6, 4, 2);

// Next Level
const x = [23, 5, 7, 5];

// Spread passes all array elements in as arguments
add(...x); // here we pack the values

restaurant.orderPizza('pepperoni', 'sausage', 'mushrooms', 'black olives');
restaurant.orderPizza('cheese');

// SPREAD is used where we would otherwise write VALUES separated by commas

// REST is used where we would otherwise write VARIABLE NAMES separated by commas

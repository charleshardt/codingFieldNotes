////////////////////////////////////////////////////////
// 109. The Spread Operator

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ mainIndex = 0, starterIndex = 1, address, time = '20:00' }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 1,
  starterIndex: 1,
});

// Expands an array into its individual elements
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(...newArr);

// Spread operator does not create variables
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

// Two Important Use Cases

// Create a shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];

// Merge two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Works on all iterables
// Most data structures in Js are iterables: arrays, strings, maps, sets, but not objects.

const str = 'Charles';
console.log(...str);
//console.log(`${...str} Hardt`); // Error

// Real life example
const ingredients = ['pepperoni', 'sausage', 'mushroom'];
restaurant.orderPasta(...ingredients);

// It works on objects, too
const newRestaurant = {
  foundingYear: 1998, //order is not important with objects
  ...restaurant,
  founder: 'Giuseppe',
};

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

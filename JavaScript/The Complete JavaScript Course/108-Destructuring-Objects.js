////////////////////////////////////////////////////////
// 108. Destructuring Objects
// a life-saver for dealing with APIs

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

// Use the property names exactly as defined in the object
const { name, openingHours, categories } = restaurant;

// Or your own names
const {
  name: restaurantName,
  openingHours: hours,
  categories: cats,
} = restaurant;

// Default values in case the element doesn't exist and we don't want an undefined.
// menu doesn't exist but starterMenu does.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring objects have to be wrapped in ().
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b); // 111, 999

({ a, b } = obj);
console.log(a, b); // 23, 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Call an object into a method as an argument and let the method destructure it

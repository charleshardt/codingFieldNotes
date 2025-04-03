////////////////////////////////////////////////////////
// 112. The Nullish Coalescing Operator
// Introduced in 2020

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// We want to register 0 guests
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 13;
console.log(guests); // but 0 is falsy so we get 13. Bug.

// Enter ?? Nullish (null, undefined), not falsy (0, '')
const guestsCorrect = restaurant.numGuests ?? 12;
console.log(guestsCorrect);

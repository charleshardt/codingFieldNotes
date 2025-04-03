////////////////////////////////////////////////////////
// 115. The for-of Loop
// No counters or conditions needed
// Continue and Break keywords still work

// Example Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log('----------------- for-of -----------------');
for (const item of menu) console.log(item);
// loops over the entire array
// at each iteration, it gives access to the current array element
// array element can be named anything: 'horseFeathers'

// Getting current index is a pain
console.log('----------------- current index -----------------');
for (const item of menu.entries()) console.log(item);

// entries() is an array "iterator."
// Access by spreading into an array of arrays
console.log('----------------- iterator -----------------');
console.log([...menu.entries()]);

// A nice menu (but ugly code)...
console.log('----------------- nice but ugly -----------------');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// ...better to destructure it
console.log('----------------- destructured -----------------');
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

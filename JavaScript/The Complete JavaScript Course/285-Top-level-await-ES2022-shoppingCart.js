/////////////////////////////////////////////////
// 285-Top-level-await-ES2022-shoppingCart.js

// 1. NAMED IMPORTS AND EXPORTS

// exporting module
console.log('Exporting module');

// This top-level await will block the code in script.js from running until this is complete. A helpful tool but take great care when using.
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

// in modules, variables are automatically private
const shippingCost = 10;
export const cart = [];

// a named export from this module
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Main use case is exporting multiple things.
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as qtyTotal };

// 2. DEFAULT EXPORTS

// export the value itself, not the variable, then name it in the file that imports it
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

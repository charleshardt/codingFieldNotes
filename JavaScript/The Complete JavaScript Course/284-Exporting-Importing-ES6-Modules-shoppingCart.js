/////////////////////////////////////////////////
// 284-Exporting-Importing-ES6-Modules-shoppingCart.js

// 1. NAMED IMPORTS AND EXPORTS

// exporting module
console.log('Exporting module');

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

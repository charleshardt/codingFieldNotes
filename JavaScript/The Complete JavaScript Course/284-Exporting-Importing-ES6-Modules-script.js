/////////////////////////////////////////////////
// 284-Exporting-Importing-ES6-Modules-script.js

// THIS IS THE FOUNDATION OF HOW WE ORGANIZE A MODERN JAVASCRIPT CODE BASE.

// 1. NAMED IMPORTS AND EXPORTS

// importing module
// import './shoppingCart.js'; // hoisted

console.log('Importing module');

// console.log(shippingCost); // won't work: variables in modules are private

// A named import has to be the same name as in the module, and has to be in curly braces. But names can be changed as needed.
// import { addToCart, totalPrice as price, qtyTotal } from './shoppingCart.js';

// But it must be in top-level code. Would not work inside an if block

// we can call the fn as if it was defined in this scope:
// addToCart('bees', 5);
// console.log(price, qtyTotal);

// console.log(totalPrice); // not defined

// When importing everything, name it like a class name convention. It creates an object.
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('chicken butts', 8);

// i.e. the module is now exporting a public API similar to a class.
// console.log(ShoppingCart.totalPrice);

// 2. DEFAULT EXPORTS

// It is not desirable or standard to mix default and named imports, but it is possible.
// import add, { totalPrice as priceTotal, qtyTotal } from './shoppingCart.js';
// console.log(priceTotal);

// this will import the default export, whatever it's called. We are giving it the name 'add'. No curly braces needed. Standard practice is to import only 1 default per module.
// import add from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

// Imports are live connections to exports, not just shallow copies of them. They point to the same place in memory.
add('chocolates', 3);
add('can of Raid', 1);
add('possum eggs', 3000);

console.log(cart);

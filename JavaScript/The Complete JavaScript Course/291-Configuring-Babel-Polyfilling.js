/////////////////////////////////////////////////
// 291-Configuring-Babel-Polyfilling.js

import add, { cart } from './shoppingCart.js';
add('chocolates', 3);
add('can of Raid', 2);
add('possum eggs', 3000);

console.log(cart);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'hot dogs', qty: 6 },
    { product: 'buns', qty: 8 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

if (module.hot) {
  module.hot.accept();
}

console.log('Object.assign():', stateClone.user);
console.log('lodash deepClone:', stateDeepClone.user);

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

// syntax improvements in ES6 can be converted back to pre-ES6 syntax, e.g. const to var
const charlie = new Person('Charlie');
console.log('charlie' ?? null);

// but features that were new in ES6 cannot be transpiled
console.log(cart.filter(el => el.quantity >= 4));
Promise.resolve('TEST').then(x => console.log(x));

// for features like Promises and array methods, we use polyfilling

// import part of a library
// normally put these imports at the top of the file, but they will be hoisted anyway.

// $ 'npm i core-js'
import 'core-js/stable';

// polyfilling creates a method on the Array prototype that does the same thing as these ES6 features like .filter()

// this will bring in every ES6 enhancement, while we are only using a couple, so you can cherry pick just the ones you are using. This is more work, but will reduce the bundle size and lead to better performance. For example:
// import 'core-js/stable/array/filter';
// import 'core-js/stable/promise';

// We also have to always install for polyfilling async functions:
// $ npm i regenerator-runtime
import 'regenerator-runtime/runtime';

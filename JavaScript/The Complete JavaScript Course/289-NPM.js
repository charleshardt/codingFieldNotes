/////////////////////////////////////////////////
// 289-NPM

// 'node -v'
// 'npm -v'
// 'npm i lodash-es'
// delete node modules directory: 'npm i' rebuilds it

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

state.user.loggedIn = false; // this shows that Object.assign() does not create a deep clone but lodash cloneDeep() does.

console.log('Object.assign():', stateClone.user);
console.log('lodash deepClone:', stateDeepClone.user);

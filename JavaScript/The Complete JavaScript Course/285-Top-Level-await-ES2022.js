/////////////////////////////////////////////////
// 285-Top-Level-await-ES2022.js

// This only works in modules

import './shoppingCart.js'; // hoisted

console.log('Importing module');

// console.log('start fetching...');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// // it blocks this
// console.log('something more');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
// console.log(lastPost); // returns a promise, not the object

// Not very clean
// lastPost.then(last => console.log(last));

// Cleaner
const lastPost2 = await getLastPost();
console.log(lastPost2);

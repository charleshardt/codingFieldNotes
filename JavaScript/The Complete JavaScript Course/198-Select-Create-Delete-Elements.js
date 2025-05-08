/////////////////////////////////////////////////
// 198-Select-Create-Delete-Elements
// A quick reference guide.

// HOW TO SELECT ELEMENTS

// document is not enough. Must select the HTMLelement.
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// the most used ways to select elements
// available on the document and on the elements
document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns a node list

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // returns an HTMLCollection

// an HTMLCollection is a "live" collection, because if the DOM changes, the collection is immediately updated automatically. Useful when writing programmaticaly instead of manually.

console.log(document.getElementsByClassName('btn')); // returns a live HTMLCollection

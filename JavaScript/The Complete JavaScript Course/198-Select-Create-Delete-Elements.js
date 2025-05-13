/////////////////////////////////////////////////
// 198-Select-Create-Delete-Elements
// A quick reference guide.

// HOW TO SELECT ELEMENTS

// document is not enough. Must select the HTMLelement.
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// most common ways to select elements

// available on the document and on the elements
const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns a node list

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // returns an HTMLCollection

// an HTMLCollection is a "live" collection, because if the DOM changes, the collection is immediately updated automatically. Useful when writing programmaticaly instead of manually.

console.log(document.getElementsByClassName('btn')); // returns a live HTMLCollection

// HOW TO CREATE AND INSERT ELEMENTS
// Quick and easy way: .insertAdjacentHTML;

// Build more programmatically:

const message = document.createElement('div');
// It's not in the DOM yet

message.classList.add('cookie-message');
message.textContent =
  'We use cookies for enhanced functionality and analytics.';
message.innerHTML =
  'We use cookies for enhanced functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // moved to first position as child element
header.append(message); // moved to last position as child element

// message is a live HTMLCollection object, so it can't be in 2 places at the same time. So what happened was, it prepended it at first, but when the .append() method called it, it moved the element.

// since a DOM element is unique, .prepend() and .append() can be used to move in addition to creating.

// header.prepend(message); // move it back
// header.append(message.cloneNode(true));
// to have more than once instance, clone it. true means we clone child elements, too.

// header.before(message); // moved before as sibling element
// header.after(message); // moved after as sibling element

// Recall also the .insertAdjacentHTML() method with position properties of beforebegin, afterbegin, beforeend, and afterend

// HOW TO DELETE ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // Old Way, DOM traversing (moving up and down in the DOM tree)
    // message.parentElement.removeChild(message);

    // New Way
    message.remove();
  });

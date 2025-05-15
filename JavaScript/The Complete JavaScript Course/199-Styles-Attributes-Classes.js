/////////////////////////////////////////////////
// Includes data from 198-Select-Create-Delete-Elements
// Scroll down to line 69: 199-Styles-Attributes-Classes
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

/////////////////////////////////////////////////
// 199-Styles-Attributes-Classes

// STYLES

// These are set as inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // nope, cannot read something that has not been set inline
console.log(message.style.width); // yup, because we set it

// but we can get computed styles:
console.log(message.style.color); // nope
console.log(getComputedStyle(message).color); // this returns the color property of the huge computed style object
console.log(getComputedStyle(message).height); // the style as computed on the screen

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// CSS custom properties (variables)
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ELEMENT ATTRIBUTES (src, alt, class, href, etc.)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
logo.designer = 'Charles Hardt';

// Non-standard
console.log(logo.designer); // only works on standard attributes
logo.setAttribute('company', 'Acme Co.'); // only works on standard attributes

console.log(logo.src); // absolute URL
console.log(logo.getAttribute('src')); // relative URL

// DATA ATTRIBUTES

console.log(logo.dataset.versionNumber); // attr begins with data, convert-dashes-after into camelCase

// CLASSES
logo.classList.add('foo', 'bar');
logo.classList.remove('foo', 'bar');
logo.classList.toggle('foo', 'bar');
logo.classList.contains('foo', 'bar'); // not "includes" like arrays

// Don't use this because it overrides all existing classes:
// logo.className = 'Charlie';

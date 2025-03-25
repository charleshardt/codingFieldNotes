////////////////////////////////////////////////////////
// Lesson 122. Map Fundamentals
// Maps are a lot more useful than sets. They map values to keys.
// Object keys are always strings. Map keys are any type.
// CRUD: new(), get(), set(), delete() and clear()

// First create an empty map. Here is my favorite cafe in Budapest:
const cafe = new Map();

// Then update: set some key=>value pairs:
cafe.set('name', 'S. Crouton');
cafe.set(1, 'Budapest, Hungary');

// the set() method updates the map and returns the map:
console.log(cafe.set(2, 'Philadelphia, USA'));

// Because of that, we can chain the method:
cafe
  .set('categories', [
    'Coffee',
    'Workspace',
    'Library',
    'Sandwiches',
    'Dessert',
    'Venue',
  ])
  .set('open', 9)
  .set('close', 22)
  .set(true, 'We are open 😋')
  .set(false, 'We are closed 😥');

// read each key-value with get(). Types matter.
console.log(cafe.get('name'));
console.log(cafe.get(true));
console.log(cafe.get(1));
console.log(cafe.get('1')); // undefined

// The power of boolean keys.
const time = 19;
console.log(cafe.get(time > cafe.get('open') && time < cafe.get('close')));
// File under "clever but unreadable."

// Check for a key:
console.log(cafe.has('categories'));

// Delete a key=>value pair or clear the whole map
cafe.delete(2);
// cafe.clear();

// Size
console.log('Number of items', cafe.size);

// Arrays as keys
cafe.set([1, 2], 'Found it!');
console.log('Look up array [1, 2]:', cafe.get([1, 2]));
// undefined because [1, 2] points to a different object in the heap.

// Instead, use a variable to point to the same object in the heap:
const cafeArr = [3, 4];
cafe.set(cafeArr, 'Found it!');
console.log('Look up cafeArr:', cafe.get(cafeArr));

// DOM elements
// cafe.set(document.querySelector('h1').innerHTML, 'heading 1');
// console.log(cafe);

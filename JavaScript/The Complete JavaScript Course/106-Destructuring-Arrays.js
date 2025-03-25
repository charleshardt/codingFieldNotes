/////////////////////////////////////////////////
// Lesson 106. Destructuring Arrays

// Sample Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/////////////////////////////////////////////////
// Look Jane, see an array! The elements come out!
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Oh, Jane, out come the elements! Out, out, out!

// Destructuring
const [x, y, z] = arr;

// Leave out the elements you don't need
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switch them with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Function returns multiple things by returning an array which is immediately destructured
const [starterCourse, mainCourse] = restaurant.order(1, 1);
console.log(starterCourse, mainCourse);

// A nested array
const nestedArr = [2, 4, [5, 6]];
const [i, , j] = nestedArr;
console.log(i, j); // 2 [5, 6]

// git innare nahs 'n deep lahk...
const [k, , [l, m]] = nestedArr;
console.log(k, l, m); // 2 5 6

// Set default values, esp. if we don't know the length of the array.
const unknownArr = [8, 9];

// no default values
const [n, o, p] = unknownArr;
console.log(n, o, p); // 8 9 undefined

// default values
const [q = 1, r = 1, s = 1] = unknownArr;
console.log(q, r, s); // 1 1 1

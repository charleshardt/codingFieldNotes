////////////////////////////////////////////////////////
// 113. Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 20,
  firstTimeGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// The OR assignment operator
// assigns a value if a var is falsy

// rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10; // same thing

// rest2.numGuests = rest2.numGuests || 10;
rest2.numGuests ||= 10; // same thing

// The NULLISH assignment operator (null, undefined)
rest1.firstTimeGuests ??= 5; // same thing
rest2.firstTimeGuests ??= 2; // same thing

// The AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1.numGuests);
console.log(rest2.numGuests);
console.log(rest1.firstTimeGuests);
console.log(rest2.firstTimeGuests);
console.log(rest1); // undefined
console.log(rest2); // <ANONYMOUS>

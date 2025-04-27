/////////////////////////////////////////////////
// 174-Creating-Filling-Arrays

// Already have data:
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Create empty array
const x = new Array(7); // Creates empty arr with 7 elements
console.log(x);
// console.log(x.map(() => 5)); // Nope. Nothing happens.

console.log(x.fill(1)); // Only fill() can work here
// mutates array

// Fill an array
x.fill(1, 3, 5); // like slice(), specify where to start and end fill (first index to include and first index to not include)
console.log(x);

const xx = [1, 2, 3, 4, 5, 6, 7];
console.log(xx.fill(23112, 2, 6));

// Array.from() acts on the Array object
const y = Array.from({ length: 7 }, () => 1); // no arguments, just return 1

console.log(y);
// Array.from() is cleaner than new Array(x)

const z = Array.from({ length: 7 }, (_, i) => i + 1); // callback is the same as map method. Underscore is convention for throwaway variable (current).
console.log(z);

/*
// Example applied to Bankist app
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')]; // This can create an array, too, but the mapping function would have to be done separately.
});
*/

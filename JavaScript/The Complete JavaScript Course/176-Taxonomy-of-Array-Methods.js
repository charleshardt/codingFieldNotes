/////////////////////////////////////////////////
// 176-Taxonomy-of-Array-Methods

// Arrays are the most-used data structure in Js
// So far, we know 30 array methods.

/* 

How to choose a method:
Ask yourself: "Self, what do I actually want from this method?"

1) Mutate the original? 
[Careful with these (try to avoid), Js is moving to a more functional, non-destructive approach.]
  - Add to original:
      .push() [end]
      .unshift() [start]
  - Remove from original:
      .pop() [end]
      .shift() [start]
      .splice() [any]
  - Other:
      .reverse()
      .sort()
      .fill()
2) A new array based on the original?
  .map() [loop] [same length as original]
  .filter() [for a condition]
  .slice() [take portion of the original]
  .with() [one item is replaced]
  .flat() [flattened]
  .flatMap()
  .toReversed() [avoids mutation]
  .toSorted() [avoids mutation]
  .toSpliced() [avoids mutation]
  .concat() [join 2 arrays]
3) An array index?
  .indexOf() [based on value]
  .findIndex() [based on test condition]
  .findLastIndex()
4) Retrieve an array element?
  .find() [based on test condition]
  .findLast() [based on test condition]
  .at() [based on already-known position]
5) Know if it includes an element?
  .includes() [based on value]
  .some() [based on test condition]
  .every() [based on test condition]
6) Create a new string?
  .join() [based on separator]
7) Transform to a value?
  .reduce() [boil down to 1 value, whether number, string, boolean, array, or object]
8) Loop over the array without returning a value?
  .forEach()

More Tools and Techniques

1) Group arrays by categories by leveraging Object
  Object.groupBy() function
2) Create an array from scratch
  - Array.from() function [pass in desired length and map() callback] [preferred way]
  - new Array(n) constructor [pass in number of empty elements, later fill up with .fill() method]
3) Join arrays with spread operator
  - [...arr1, ...arr2, ...arr3]
4) Create new array with unique values
  - [...new Set(arr)]

...and now the most complex technique of all...

5) Return a new array with elements that are present in 2 arrays:
[...new Set(arr1).intersection(new Set(arr2))]

 */

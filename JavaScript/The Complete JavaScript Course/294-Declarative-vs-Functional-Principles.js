/////////////////////////////////////////////////
// 294-Declarative-vs-Functional-Principles.js

const arr = [2, 4, 6, 8];

// Imperative
const doubledImperative = [];
for (let i = 0; i < arr.length; i++) doubledImperative[i] = arr[i] * 2;

// Declarative
const doubledDeclarative = arr.map(n => n * 2);

console.log(doubledImperative);
console.log(doubledDeclarative);

/* FUNCTIONAL PROGRAMMING

- Declarative programming paradigm
- Based on writing software by combining many *pure functions* while avoiding *side effects* and *mutating data*. 

Side Effect: modification of any data *outside* of the function (mutating external variables, logging to the console, writing to the DOM, etc.)

Pure Function: function without side effects. Does not depend on external variables. Given the same inputs, always returns the same outputs.

Immutability: State (data) is *never* modified! Instead, state is *copied* and the copy mutated and returned.

Incorporate Functional Programming Techniques:
- Try to avoid data mutations.
- Prefer built-in methods that don't produce side effects.
- Do data transformations with methods such as .map(), .filter(), and .reduce().
- Try to avoid side effects in functions.

Incorporate Declarative Syntax:
- Use array and object destructuring.
- Use the spread operator (...).
- Use the ternary (conditional) operator.
- Use template literals.

*/


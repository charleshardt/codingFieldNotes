/////////////////////////////////////////////////
// 192-Timers-setTimeout-setInterval

// Welcome to Asynchronous javaScript!
// <arg 1>: ()=>console.log('Here is your sandwich! 🥪') is a callback that is registered to be called after the time in <arg 2>. As it counts in the background, engine moves to the next line and continues executing code.
// <arg 2> is the time in milliseconds
// naming allows us to reference it to clear it

const sandwichDone = setTimeout(
  () => console.log('Here is your sandwich! 🥪'),
  5000
);
const coming = setTimeout(() => console.log('🎵 coming...'), 3000);
console.log('Where is my sandwich?! ⚡');

// How to pass in arguments:
// Store variables in an array for easy access
const sandwichIngredients = ['steak', 'cheese'];
const sandwichTimer = setTimeout(
  (ingredient1, ingredient2) =>
    console.log(
      `It's your favorite: ${ingredient1} and ${ingredient2}! Mmmmm...😋`
    ),
  6000,
  ...sandwichIngredients // spread variable array to access
);

// Clear the timeout if condition
const dontBother = 'snake';
if (sandwichIngredients.includes(dontBother)) {
  console.log(`\t(Don't bother if it has ${dontBother}.)`);
  clearTimeout(sandwichDone);
  clearTimeout(coming);
  clearTimeout(sandwichTimer);
}

// Use setTimeout in Banking app to simulate loan approval

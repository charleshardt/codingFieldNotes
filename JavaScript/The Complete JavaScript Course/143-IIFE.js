///////////////////////////////////////
// Lesson 143. Immediately Invoked Function Expression (IIFE)

const runOnce = function () {
  console.log('This function can run again.');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again.');
  const isPrivate = true; // is "private", or "encapsulated" inside this function scope. Welcome to the world of "Data Privacy" and "Data Encapsulation"
})();
// console.log(isPrivate); // can't access inner scope

// Arrow IIFE
(() => console.log('This arrow will also never run again.'))();

// const was invented to take care of this, so IIFE not used much anymore. Just declare variables with const
{
  const isPrivate = 23;
  var notPrivate = 26;
}
// console.log(isPrivate); // const not available
console.log(notPrivate); // var ignores block scoping--problematic

// IIFE is still the way to go if you just need to run something once

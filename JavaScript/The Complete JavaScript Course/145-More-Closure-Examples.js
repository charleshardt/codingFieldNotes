///////////////////////////////////////
// Lesson 145. Two More Closure Examples

// ---------------------Example 1: Redefining functions, even without returning them, will create a closure:
let f;

const g = function () {
  const a = 7;
  f = function () {
    console.log(`You shall forgive your brother till ${70 * a} times.`);
  };
};

const h = function () {
  const b = 666;
  const c = 12;
  const d = 108;
  f = function () {
    console.log(`And the number of the beast is ${b}.`);
    console.log(
      `They that were come out of captivity offered holocausts to the God of Israel, including ${
        c * 8
      } rams.`
    );
    console.log(
      `${d / 3} Heavenly Spirits and ${
        (d / 3) * 2
      } Earthly Fiends, in all ${d} Stars of Destiny gathered in Mount Liang.`
    );
  };
};

g();
f(); // This proves that f really does "close over" all variables in the g Execution Context. It is even true when f is not defined (created) inside of g. But it was assigned the function inside g. Variable a is inside the backpack of the f function
console.dir(f);

h(); // f function is re-assigned
f();

console.dir(f); // variables c and d show up in [[scopes]]. d is not used and does not show up.

// ---------------------Example 2: A Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // Three boarding groups

  // This function will run completely independently from the boardPassengers function. The only way the following timed-out function could have access to variables n and perGroup is if a closure is created.
  setTimeout(function () {
    console.log(`The ${n} passengers go boarding, 2 by 2, hurrah...hurrah...`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(
    `On a lighter note (440Hz), we will start boarding in ${wait} seconds.`
  );
};

// Closures have priority over the scope chain
const perGroup = 1000; // if scope chain had priority over closures, then this value would be used. It is not used.

boardPassengers(180, 3);

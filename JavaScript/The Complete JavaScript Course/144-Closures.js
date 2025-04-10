///////////////////////////////////////
// Lesson 144. Closures
// A beautiful, magical, mystical feature that many Js programmers fail to understand

// Teacher: What is the hardest Js concept to understand?
// Most Students: Closures
// Review Execution Contexts, the Call Stack, Scope Chain, Garbage Collection

// Recognize the situation where a closure is created
const secureBooking = function () {
  let passengerCount = 0; // private variable cannot be accessed from outside

  // inner function:
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// how can this access private variable passengerCount?
const booker = secureBooking(); // booker is the function in the global scope

// Why does this work?
booker();
booker();
booker();

// A closure makes a function remember all the variables that existed at the functions birthplace (secureBooking). Cannot be explained solely by the Scope Chain.

// When the inner function completed running, the secureBooking() EC (Execution Context)--with its VE (Variable Environment) containing passengerCount--was popped off the call stack. But garbage collection does not happen when a Closure is present. Because of the closure present here, secureBooking() was moved to the heap, but not garbage collected. It will stay in the heap indefinitely. This applies to objects in the heap and also variable environments in the stack, as long as they are accessible to a closure.

// ANY FUNCTION ALWAYS HAS ACCESS TO THE VARIABLE ENVIRONMENT OF THE EXECUTION CONTEXT IN WHICH THE FUNCTION WAS CREATED, EVEN WHEN THAT EC HAS ALREADY BEEN POPPED OFF THE STACK.

// So booker() will get access to passengerCount, and that connection IS THE CLOSURE. The closure is the variable environment (passengerCount) attached to the function (booker) exactly as it was at the time and place where the function was created.

// The booker function "closed over its parent scope," or "closed over its parent environment," which would also include any function arguments. This closed-over variable environment stays with the function forever.

// In other words, thanks to the closure, the function will never lose connection to the variables that existed at the function's birthplace.

// Definition: A closure is the closed-over *variable environment* of the execution context *in which a function was created*, even *after* that execution context is gone.

// Definition: A closure gives a function access to all the variables *of its parent function*, even *after* that parent function has returned. The function keeps a *reference* to its outer scope, which *preserves* the scope chain thoughout time.

// Definition: A closure makes sure a function never loses connection to the *variables that existed at the function's birth place*.

// Definition. A closure is a *backpack* that a function carries around wherever it goes. The backpack contains all the *variables that were present in the environment where the function was created*. If JavaScript cannot find a variable in the function scope, it will look for it in the backpack and take the missing variable from there. :)

// Closures are NOT tangible objects, and we cannot manually create them. They are a feature of JavaScript and happen automatically under specific conditions.

console.dir(booker);
// [[Scopes]] is the internal property (not accessible from our code) and is basically the variable environment of booker.


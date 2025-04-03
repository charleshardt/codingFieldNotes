///////////////////////////////////////
// Lesson 137. Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Charlie');
greeterHey('Elke');

// This works because of closures, one of the most misunderstood topics in Javascript.

greet('Hello')('Norman');

// This becomes useful in functional programming.

// Rewritten in arrow (more confusing)
const hail = salutation => interlocutor =>
  console.log(`${salutation}, ${interlocutor}!`);
hail('Yo')('Norm');

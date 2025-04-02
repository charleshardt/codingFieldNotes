/**
 * Lesson 42-43. Introduction to objects.
 *
 * Dots vs. Brackets notation.
 */

const captHardt = {
  firstName: "Charles",
  lastName: "Hardt",
  nickname: "Charlie",
  age: new Date().getFullYear() - 2003,
  job: "Boat Captain",
  friends: ["Fr. Jonathan", "Jeff Davis", "Glenn Basham", "Capt. Bob Elmore"],
};

console.log(captHardt);
console.log(captHardt.nickname, captHardt["nickname"]);

/* The big difference: bracket notation is an expression, so it can be computed. Remember, an operation is an expression. */
const identifier = "Name";
const clan = "last";
const person = "first";

console.log(captHardt[person + identifier]);
console.log(captHardt[clan + identifier]);

/* Compute the property from user input: */
const query = prompt(
  "What do you want to know about Capt.  Hardt? Choose one: \r\rfirstName \rlastName \rnickname \rage \rjob \rfriends"
);

/* Check to see if the query exists as an object property. */
captHardt[query]
  ? console.log(captHardt[query])
  : console.log("wutn tarnation...");

/* Add properties on the fly, whether dot or bracket. */
captHardt.location = "Norfolk, VA";
captHardt["domain"] = "charleshardt.com";
console.log(captHardt);

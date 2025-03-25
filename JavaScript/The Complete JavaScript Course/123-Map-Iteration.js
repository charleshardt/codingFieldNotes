const openingHours = {
  Thu: {
    open: 9,
    close: 20
  },
  Fri: {
    open: 12,
    close: 22
  },
  Sat: {
    open: 11,
    close: 23
  }
};

////////////////////////////////////////////////////////
// Lesson 123. Map Iteration
// A better way to populate a map
// set() is cumbersome when there are a lot of values.

// So use an array of arrays. Let's make a quiz.
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, 'Correct! Why you take so long answer?! Stoooopid!'],
  [false, 'No! You lose! Soooo Stoooopid!'],
]);
console.log(question);
// This array of arrays structure is the same as Object.entries()

// Useful tool: convert an object to a map:
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// ITERATION with a for-of loop
// Quiz app
console.log(question.get("question"));
// print the answers (keys are numbers) from question
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("Enter 1, 2, or 3:"));
const response = question.get(answer === question.get("correct"));
console.log(response);

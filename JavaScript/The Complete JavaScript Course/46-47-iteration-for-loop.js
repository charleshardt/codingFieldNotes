/**
 * Lesson 46-47. Iteration: The for Loop, Arrays,
 * Breaking and Continuing
 */

/* A for Loop is a loop with a counter */

/* for (initial value of counter; loop keeps running while this condition is TRUE; update counter after each iteration) {code to repeat} */

/* for (let variable = counter value; variable compared to a number; counter++) {code to repeat} */

/* A simple for loop */
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

/* Doh, here's the dirt on all my Russian collusion derr derr. */
const fbiFileCharlie = [
  "Hardt", //a string
  "Charles", //a string
  "React Developer", //a string
  1992, //a number
  ["Fr. Jonathan", "Jeff Davis", "Glenn Basham"], //an array
  true, //a boolean
  ["gulag", "cancel", "smear", "disappear", "suicide"], //an array
];

/* Loop through array and populate another array */
console.log("\n-----LOOP THROUGH MY FBI FILE AND MESS AROUND-----");
const types = [];

for (let i = 0; i < fbiFileCharlie.length; i++) {
  console.log(fbiFileCharlie[i], typeof fbiFileCharlie[i]);
  types[i] = typeof fbiFileCharlie[i];
  types.push(typeof fbiFileCharlie[i]);
}
console.log(types);

/* A more real-world example */
console.log("\n-----LOOP THROUGH DATES ARRAY AND CALCULATE AGE-----");
const years = [1990, 1977, 1972, 1974, 1950, 1951];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}
console.log(ages);

/* Two important statements: continue and break */

/* Continue exits current iteration of loop */
console.log("\n-----SKIP ANYTHING THAT'S NOT A STRING-----");
for (let i = 0; i < fbiFileCharlie.length; i++) {
  if (typeof fbiFileCharlie[i] !== "string") continue;
  console.log(fbiFileCharlie[i], typeof fbiFileCharlie[i]);
}

/* Break stops the whole dang loop */
console.log("\n-----BREAK WITH NUMBER-----");
for (let i = 0; i < fbiFileCharlie.length; i++) {
  if (typeof fbiFileCharlie[i] === "number") break;
  console.log(fbiFileCharlie[i], typeof fbiFileCharlie[i]);
}

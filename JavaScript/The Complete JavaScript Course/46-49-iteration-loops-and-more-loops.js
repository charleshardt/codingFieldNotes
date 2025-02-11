/**
 * Lesson 46-49. Iteration: The for Loop, Arrays,
 * Breaking and Continuing, Looping Backwards,
 * Loops inside loops, the while Loop
 *
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
////////////////////////////////////////////////////////////////

const bruce = [
  "Bruce",
  "Morris",
  "Mack",
  2025 - 1995,
  "wealth manager",
  [
    "mysogenist",
    "Nazi",
    "white supremecist",
    "grandma killer",
    "puppy hater",
    "all around good guy",
  ],
];

/* Backwards loop because...no reason. */
console.log(`\nDisplaying an array backwards for no reason.`);
for (let i = bruce.length - 1; i >= 0; i--) {
  console.log(i, bruce[i]);
}

/* A Loop within a Loop */
console.log(`\nHoly mackerel, a loop inside a loop! 3 sets of 5!`);
for (let set = 1; set < 4; set++) {
  console.log(`----------------Starting set ${set}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Getting up rep ${rep}`);
  }
}

/* While loops are more versatile than for loops. We used a 
counter in this case, but they only need the condition to work. */
console.log(`\nHere's a while loop for more fun!`);
let rep = 1;
while (rep <= 4) {
  console.log(`Getting up rep ${rep}`);
  rep++;
}
console.log(`mrrrr, fuggit...`);

/* Here's one that doesn't need a counter. */
console.log(`\nIf you roll a 6, all your wildest dreams will come true...`);
let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) console.log(`A 6 on your first try...los santos favor you.`);

while (dice !== 6) {
  console.log(`No, wey, that was a ${dice}...`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Okay bro, you finally rolled a 6...`);
}
////////////////////////////////////////////////////////////////

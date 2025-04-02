"use strict";

/* Functions allow us to write DRY code. Don't Repeat Yourself. */

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I believe I can drive!");

/* Function expression
   (expressions return values)
   functions ARE values, so you can store them in a variable
   forces you to define them first and write clean, structured code. */
////////////////////////////////////////////////////////////////

/**
 * LECTURE 34: Function Declarations vs Expressions
 *
 *
 */

/* A Function Declaration */
/* (they can be called BEFORE being defined) */

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}

const age1 = calcAge1(1972);
console.log(age1);

/* A "parameter" is the variable passed into the function (birthYear). */
/* An argument is the actual value passed into a parameter (1977). */

/* A Function Expression */

const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const age2 = calcAge2(1974);
console.log(age2);

/* This is also called an "anonymous function" because it doesn't have a name. */

/* Arrow functions */

const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 65 - age;

  return retirement > 0
    ? `${firstName} can retire at age 65 in ${retirement} years.`
    : `${firstName} is ${age}-years-old and already retired.`;
};

console.log(
  "\n------------ALL NAMES HAVE BEEN CHANGED TO PROTECT THE INNOCENT------------"
);
console.log(yearsUntilRetirement(1948, "Zelda"));
console.log(yearsUntilRetirement(1944, "Ted"));
console.log(yearsUntilRetirement(1977, "Chadlie"));
console.log(yearsUntilRetirement(1972, "Elkmonster"));

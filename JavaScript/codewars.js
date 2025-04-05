//////////////////////////////////////////////////////////////////////////
/**
 * Codewars: A Kronicle of Kata I have k-nown and pwned.
 *
 * 
 */
//////////////////////////////////////////////////////////////////////////

/**
 * Calculate average: 8 kyu
 *
 * Kata: Write a function which calculates the average of
 * the numbers in a given array. Empty arrays should
 * return 0.
 *
 * Four solutions:
 * For Loop, For-Of Loop, Reduce Method, Ternary Function
 * I just learned the reduce method while working on this.
 */

const arr = [167, 247, 290, 342, 404, 415, 460, 500, 508];

/* For Loop */
const findAvgFor = (arr) => {
  if (arr.length === 0) return `The average is 0.`;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(findAvgFor(arr), "For Loop");

/* For-Of Loop */
const findAvgForOf = (arr) => {
  if (arr.length === 0) return `The average is 0.`;

  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum / arr.length;
};
console.log(findAvgForOf(arr), "For-Of Loop");

/* Reduce Method */
const findAvgReduce = (arr) => {
  //Initial value must be set in case of empty array
  const sum = arr.reduce((a, b) => a + b, 0);

  //If empty array, switch to 0, NaN is falsy
  const avg = sum / arr.length || 0;

  return avg;
};
console.log(findAvgReduce(arr), "Reduce Method");

/* Ternary Function/Reduce Method */
const findAvgTern = (arr) => {
  return arr.length === 0
    ? 0
    : arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
};
console.log(findAvgTern(arr), "Ternary Function");
//////////////////////////////////////////////////////////////////////////

/**
 * Is it a palindrome? 8 kyu
 *
 * Kata: Write a function which calculates the average of
 * the numbers in a given array. Empty arrays should
 * return 0.
 *
 * Four solutions:
 * For Loop, For-Of Loop, Reduce Method, Ternary Function
 * I just learned the reduce method while working on this.
 */

const checkPalindrome = function (x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
};
//////////////////////////////////////////////////////////////////////////

/**
 * Parse nice int from char problem: 8 kyu
 *
 * Kata: You ask a small girl,"How old are you?" She always
 * says, "x years old", where x is a random number between
 * 0 and 9.
 *
 * Write a program that returns the girl's age (0-9) as an
 * integer. Assume the test input string is always a valid
 * string. For example, the test input may be "1 year old"
 * or "5 years old". The first character in the string is
 * always a number.
 */

function getAge(inputString) {
  return Number(inputString.slice(0, 1));
}

console.log(getAge("2 years old."));
//////////////////////////////////////////////////////////////////////////

/**
 * Exclamation marks series #1:  
 * Remove an exclamation mark from the end of string: 8 kyu
 *
 * Kata: Remove an exclamation mark from the end of a string. For a 
 * beginner kata, you can assume that the input data is always a string, 
 * no need to verify it.
 * 
 */

const remove = (string) => (string.endsWith("!")) ? string.slice(0, string.length - 1) : string;

console.log(remove("Hello!"));
console.log(remove("Hi!"));
console.log(remove("!Hi"));
//////////////////////////////////////////////////////////////////////////

/** 
 * Find the stray number

 * Kata: You are given an odd-length array of integers, in
 * which all of them are the same, except for one single number.
 *
 * Complete the method which accepts such an array, and returns
 * that single different number.
 *
 * The input array will always be valid! (odd-length >= 3)
 */

// const numbers = [1, 2, 2]; // Test data
// const numbers = [2, 1, 2];
// const numbers = [2, 2, 1];
// const numbers = [2, 2, 2, 2, 1, 2, 2];

const stray = numbers => {
  const [a, b, c] = numbers;
  const ordinary =
    a === b // which number is the ordinary one?
      ? b
      : b === c || a === c
      ? c
      : 'You have died of dysentery'; // careful

  // which number is not ordinary?
  for (const element of numbers) {
    if (element !== ordinary) {
      return element;
    }
  }
};

console.log(numbers + '\nThe stray number is: ' + stray(numbers));
//////////////////////////////////////////////////////////////////////////

/** 
 * Reversed Strings

 * Kata: Complete the solution so that it reverses the string 
 * passed into it.
 *
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 */

const solution = (str) => [...str].reverse().join('');
console.log(solution(`5tep on no petS`))

// Doesn't work on palindromes :(
// `Mr. Owl ate my metal worm`
// `Was it a car or a cat I saw`
// `Do geese see God?`

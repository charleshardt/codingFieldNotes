/**
 * LECTURE 40: Basic Array Operations (Methods)
 *
 *
 */

/* Here is an array of some of my friends */
const friends = ["Fr. Jonathan", "Sifu Robert", "Glenn Basham"];
console.log(friends);

/* Push adds a new friend to the end. */
/* These methods also returns a value, the length of the new array. Here we captured that in a new variable. */
const newLength = friends.push("Capt. Bob Elmore");
console.log(friends);
console.log(`\tNew length of array: ` + newLength);

/* Unshift adds to the beginning. */
friends.unshift("Alejandro");
console.log(friends);

/* Pop pops one off the end. */
friends.pop();
console.log(friends);

/* Shift deletes the first one. */
friends.shift();
console.log(friends);

/* Includes searches for a string and returns a boolean. */
console.log(friends.includes("Jeff Davis"));

/* indexOf returns the index of a search string. -1 if not found. */
console.log(friends.indexOf("Jeff Davis"));


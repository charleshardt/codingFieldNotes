////////////////////////////////////////////////////////
// Lesson 126. Strings Part 1

const airline = "Turkish Airlines";
const plane = "A350";

console.log(plane[0]);
console.log(plane[1]);
console.log("B777"[0]);
console.log(airline.length);
console.log("B777".length);

// Methods

console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("Air"));
console.log(airline.indexOf("air")); // case sensitive

// Extract a part with slice()
console.log(airline.slice(8)); // returns a substring that begins at position 8
console.log(airline.slice(0, 4)); // end position, not inclusive
// length of substring is always (end - beginning)

// First word: begin at 0, find the space
console.log(airline.slice(0, airline.indexOf(" ")));

// Last word: find the last space and move 1 to the right
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// Negatives count left from the end
console.log(airline.slice(-8, -2));
console.log(airline.slice(1, -1));

// 'B' and 'E' are middle seats
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got a middle seat.");
  } else {
    console.log("You got lucky. 😎");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// "Boxing": when we call a method on a string primitive, Js automatically converts it into a string object with the same content. Like:
console.log(new String("Charlie"));
console.log(typeof new String("Charlie"));

// When the method is completed, it is converted back to a primitive:
console.log(typeof new String("Charlie").slice(1));

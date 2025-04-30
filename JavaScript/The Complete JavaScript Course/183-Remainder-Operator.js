/////////////////////////////////////////////////
// 183-Remainder-Operator

console.log(7 % 2); // 7 = 2 + 2 + 2 ( remainder: ) + 1
console.log(5 % 2); // 5 = 2 + 2 ( remainder: ) + 1
console.log(8 % 3); // 8 = 3 * 2 ( remainder: ) + 2

// Is n even or is it odd? It is even when divisible by 2
console.log(6 % 2); // remainder 0 means even
console.log(7 % 2); // remainder 1 means odd

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;


// Let's play with the rows of our bankist transaction movements
// const getMovRows = document
//   .querySelector('.logo') // must do after logging in
//   .addEventListener('click', () => {
//     const x = [...document.querySelectorAll('.movements__row')]
//       // set every other (or every 3rd) row a different color
//       .forEach(function (row, i) {
//         if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//         if (i % 3 === 0) row.style.backgroundColor = 'blue';
//       });
//   });

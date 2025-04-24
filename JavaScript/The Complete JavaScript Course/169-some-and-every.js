/////////////////////////////////////////////////
// 169-some-and-every

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Eqality. Does the array contain the number -130?
console.log(movements.includes(-130)); // true

// Condition. Is there some value in the array greater than 0?
const anyDeposits = movements.some(mov => mov > 0); // true
console.log(anyDeposits);

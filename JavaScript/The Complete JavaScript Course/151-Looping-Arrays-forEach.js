/////////////////////////////////////////////////
// 151-Looping-Arrays-forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// With for-of:
console.log('\n.................................for-of');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}. Deposit: ${Math.abs(movement)}`);
  } else {
    console.log(`${i + 1}. Withdrawal: ${Math.abs(movement)}`);
  }
}

// Easier with forEach:
console.log('\n.................................forEach()');

// forEach is a higher-order function and requires a call-back function to tell it what to do. forEach calls the call-back; I don't call it.

// Parameters must be in the correct order: current element, current index, array being looped over
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`${i + 1}. Deposit: ${Math.abs(mov)}`);
  } else {
    console.log(`${i + 1}. Withdrawal: ${Math.abs(mov)}`);
  }
});

// for-of vs. forEach: totally personal preference, except for one thing, viz., you can't break out of a forEach loop. Continue and break do not apply.

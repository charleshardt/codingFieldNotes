/////////////////////////////////////////////////
// 175-Nondestructive-alternatives
// toReversed, toSorted, toSpliced

// methods that mutate the original array are destructive and often undesirable:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let reversedMovements = movements.reverse();
console.log({ reversedMovements });
console.log({ movements }); // mutated
reversedMovements = movements.reverse(); // reset

// possible workaround:
const reversedMovementsSlice = movements.slice().reverse();
console.log({ reversedMovementsSlice });
// but now we have quality-of-life improvement:
const reversedMovementsToReversed = movements.toReversed();
console.log({ reversedMovementsToReversed });

// toSorted() instead of sort()
// toSpliced() instead of splice()

// with() can change specific elements, does not mutate
movements[1] = 12345678;
console.log(movements);
const newMovements = movements.with(1, 87654321);
console.log(newMovements);
console.log(movements); // but non-destructive

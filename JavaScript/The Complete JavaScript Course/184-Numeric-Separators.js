/////////////////////////////////////////////////
// 184-Numeric-Separators
// Since ES2021

// 287,460,000,000
const diameterSolorSystem = 287_460_000_000; // Js ignores them
const price = 349_99;
const transferFee1 = 15_00; // Looks like dollars and cents.
const transferFee2 = 1_500; // Looks like dollars.
// const PI = 3._1415; // illegal @ decimal, another _, beginning, end

// only use on numbers or it will get weird
console.log(Number('238_173')); // NaN
console.log(parseInt('238_173')); // 238

/////////////////////////////////////////////////
// 185-BigInt
// Added ES2020
// You won't use this much, but there it is...

// Welcome BigInt. You are a primitive data type. JavaScript numbers are represented with 64 ones and zeros. But only 53 of them are used for the numbers; the rest of them are used for storing the decimal and sign. Those 53 bits mean we are insured up to only...

console.log(2 ** 53 - 1); // 9007199254740991

// about $9 quadrillion ($9,007,199,254,740,991). That's Max Safe Integer.

console.log(Number.MAX_SAFE_INTEGER);

// Try adding to it and it gets all weird.
console.log('Added 1:', 2 ** 53 - 0); // 9007199254740992
console.log('Added 2:', 2 ** 53 + 1); // 9007199254740992
console.log('Added 3:', 2 ** 53 + 2); // 9007199254740994
console.log('Added 4:', 2 ** 53 + 3); // 9007199254740996
console.log('Added 5:', 2 ** 53 + 4); // 9007199254740996

// n transforms to BigInt.
console.log(588007199254740991n); // Milky Way diameter in miles
console.log(BigInt(588007199254740991)); // Still a bit different

// Operations BigInt on BigInt only
console.log(10001n + 10002n);
console.log(588007199254740991n * 1160934n); // Milky Way diameter, convert mi to cm

// Convert Int to BigInt to do operations
const milkyWayMiles = 588007199254740991n;
const milesToCentimeters = 1160934;
console.log(milkyWayMiles * BigInt(milesToCentimeters));

// Math.operations won't work because they are not BigInt
// console.log(Math.sqrt(milkyWayMiles)); // illegal

// Except logical operators do work
console.log(milkyWayMiles > milesToCentimeters); // true
console.log(20n === 20); // but false because (===) different types
console.log(20n == '20'); // true, but don't use

// And str concats
console.log(milkyWayMiles + ' miles up hill both ways.');

// Division returns the closest BigInt
console.log('number: ', 10 / 3);
console.log('bigint: ', 10n / 3n);

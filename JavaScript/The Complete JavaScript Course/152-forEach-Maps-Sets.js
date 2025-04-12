/////////////////////////////////////////////////
// 152-forEach-Maps-Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
console.log('................................Map');

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
console.log('................................Set');

const currenciesUnique = new Set([
  'USD',
  'USD',
  'GBP',
  'EUR',
  'EUR',
  'EUR',
  'EUR',
  'USD',
]);

// Argument signature is the same to reduce confusion. Begin a variable name with underscore to designate it a throw-away variable
currenciesUnique.forEach(function (value, _value, map) {
  console.log(value);
});

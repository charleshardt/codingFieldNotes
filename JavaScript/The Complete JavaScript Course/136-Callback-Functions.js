///////////////////////////////////////
// Lesson 136. Callback Functions

// This is the most important lecture of the course because it introduces callback functions and therefore layers of abstraction.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWords] = str.split(' ');
  return [first.toUpperCase(), ...otherWords].join(' ');
};

// Here comes a higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: '${str}'`);
  console.log(`Transformed string: '${fn(str)}'`);
  console.log(`Transformed by callback: ${fn.name}`);
};
transformer('Javascript is neat.', upperFirstWord);
transformer('Javascript is cool.', oneWord);

// Js uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Charlie', 'Elke', 'Edward', 'Darleen'].forEach(high5);

// Callbacks allow greater ABSTRACTION

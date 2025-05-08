///////////////////////////////////////
// 17-Strings-Template-Literals

const firstName = 'Charlie';
const job = 'captain';
const birthYear = 1977;
const year = 2025;

const charlieString =
  "I'm " + firstName + ', a ' + (year - birthYear) + '-year-old ' + job + '.';
console.log(charlieString);

const charlieTemplateLiteral = `I'm ${firstName}, a ${
  year - birthYear
}-year-old ${job}.`;
console.log(charlieTemplateLiteral);

console.log(`Just a regular string with backticks.`);
console.log('Just a string \nwith \nmultiple \nlines.');
console.log(`Here's a string with backticks and
multiple
lines.`);

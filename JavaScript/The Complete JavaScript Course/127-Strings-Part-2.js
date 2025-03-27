////////////////////////////////////////////////////////
// Lesson 127. Strings Part 2

const airline = 'Turkish Airlines';

// Change case method
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in a name:
const capitalizeFirst = name1 => {
  const nLower = name1.toLowerCase();
  const corrected = nLower[0].toUpperCase() + nLower.slice(1);
  console.log(corrected);
};

capitalizeFirst('eLkE');

// Compare emails
const email = 'hello@charlie.com';
const loginEmail = '  Hello@Charlie.Com    \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// Better to chain it.
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

const compareEmails = (email1, email2) => {
  const normalized1 = email1.toLowerCase().trim();
  const normalized2 = email2.toLowerCase().trim();
  return normalized1 === normalized2;
};

console.log(compareEmails(email, loginEmail));

// Replacing
const symbolGBP = '£288,97';
const symbolUSD = symbolGBP.replace('£', '$').replace(',', '.');
console.log(symbolUSD);

const announcementSaid =
  'All passengers please board at door 23, door 23. Thank you for your patience, ladies and gentlemen. We are still on schedule.';

const announcementHeard = announcementSaid
  // .replaceAll('door', 'gate')
  .replace(/door/g, 'gate')
  .replace('board at', 'rush')
  .replace(
    'Thank you for your patience, ladies and gentlemen.',
    'Push and shove, folks, push and shove!'
  )
  .replace(
    'We are still on schedule.',
    'This is the last helicopter out of VIETNAM!!!'
  );
console.log('Boarding announcement:', announcementSaid);
console.log('How it comes out:', announcementHeard);

// Booleans: use includes(), startsWith(), and endsWith()
const plane320 = 'Airbus A320neo';
console.log(plane320.includes('A320'));
console.log(plane320.includes('Boeing'));
console.log(plane320.startsWith('Air'));

if (plane320.startsWith('Airbus') && plane320.endsWith('neo')) {
  console.log('Part of the new Airbus family.');
}

// Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // standard practice
  if (
    baggage.includes('knife') ||
    baggage.includes('sharp object') ||
    baggage.includes('firearm') ||
    baggage.includes('pocket knife') ||
    baggage.includes('gun') ||
    baggage.includes('camping equipment') ||
    baggage.includes('flammeable liquids')
  ) {
    console.log('You are not allowed onboard.');
  } else {
    console.log('Welcome aboard.');
  }
};

checkBaggage('I have a LAPTOP, some FOOD, and a SHARP OBJECT.');
checkBaggage(
  'I have some baseball cards, a baseball glove, and an ice cream cone.'
);
checkBaggage(
  'I have some cheese, some flammeable liquids, and pajamas that say "juicy."'
);

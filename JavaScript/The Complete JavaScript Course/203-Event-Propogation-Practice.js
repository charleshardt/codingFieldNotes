/////////////////////////////////////////////////
// 203-Event-Propogation-Practice
// Requires Bankist-DOM index.html and style.css files

// Generate a random color in RGB(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// The event bubbles up to parent elements, but not down of course
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  // target is where the event origininated
  console.log('LINK event originates:', e.target);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LIST event originates:', e.target);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('DIV event originates:', e.target);
});
// In all 3 handlers, the target (where the event originates) is the same, proving that they are all handling the exact same event. That is because of Event Bubbling.

'use strict';

let upperLimit = document.querySelector('.upper-limit').value;
const randomNumber = () => Math.trunc(Math.random() * upperLimit) + 1;
let secretNumber = randomNumber();

// Variables
let score = 20;
let highScore = 0;

const theMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const theGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.highscore').textContent = highScore;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';

// Allow users to change upper limit.
document.querySelector('.upper-limit').addEventListener('change', function () {
  upperLimit = this.value;
});

document.querySelector('.enter').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input.
  if (!guess) {
    theMessage('⛔ Gee whiz, enter a number, yo...');

    // When guess is right
  } else if (guess === secretNumber) {
    // Player wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('h1').textContent = '🔥 NAILED it! 🔥';
    theMessage('Bravo, Svengali.');

    // Check if this is the highest score to date
    if (score > highScore) highScore = score;
    document.querySelector('body').style.backgroundColor = '#171717 ';
    document.querySelector('.guess').style.border = '4px #FCE100 solid';
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.label-highscore').classList.add('blink');
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.number').style.border = '20px #FCE100 solid';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').style.color = '#F7630C ';
    document.querySelector('.number').style.border = '15px #FCE100solid';

    // When guess is wrong
  } else {
    if (score > 1) {
      guess > secretNumber
        ? theMessage("👇 You're too HIGH")
        : theMessage("👆 You're too LOW");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('h1').textContent =
        'You have died of Dysentery, Yo';
      document.querySelector('.again').style.border = '6px red solid';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.enter').style.backgroundColor = '#333';
      document.querySelector('.enter').disabled = true;
      document.querySelector('.overlay').classList.remove('hidden');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset values
  score = 20; // score is a state variable
  secretNumber = randomNumber();

  // Reset message, score, number, and guess
  theMessage('Start guessing, Bucko...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  theGuess('');

  // Reset body background color
  document.querySelector('h1').textContent = 'Guess My Number, Yo';
  document.querySelector('.again').style.border = '4px #eee solid';
  document.querySelector('.again').focus(); //why doesn't this work?
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('.number').style.border = '20px #333 solid';
  document.querySelector('.guess').style.border = '4px #eee solid';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('.number').style.color = '#333 ';
  document.querySelector('.enter').style.backgroundColor = '#ccc';
  document.querySelector('.enter').disabled = false;
  document.querySelector('.label-highscore').classList.remove('blink');
});

// Animations

// Click Enter button
document.querySelector('.enter').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Spin if guess box is not empty
  if (guess) console.log('Enter pressed, guess is not empty.');

  // Bump if guess box is empty
  if (!guess) console.log('Enter pressed, guess is empty.');
});

// Press Enter when in the guess box

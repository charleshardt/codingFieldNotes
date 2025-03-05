'use strict';

// Variables
let upperLimit = document.querySelector('.upper-limit').value;
const randomNumber = () => Math.trunc(Math.random() * upperLimit) + 1;
let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

const upperLimitBox = document.querySelector('.upper-limit');
const bigMessageBox = document.querySelector('h1');
const numberBox = document.querySelector('.number');
const scoreCard = document.querySelector('.score');
const highScoreCard = document.querySelector('.highscore');
const highScoreBoard = document.querySelector('.label-highscore');
const guessBox = document.querySelector('.guess');
const messageBox = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const submitButton = document.querySelector('.enter');
const againButton = document.querySelector('.again');

const displayMessage = function (message) {
  messageBox.textContent = message;
};

const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

highScoreCard.textContent = highScore;
scoreCard.textContent = score;
numberBox.textContent = '?';

// Some Basic Functionality

// Key press "Enter" from inside the guess box
guessBox.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') submitButton.click();
});

// Allow users to change upper limit.
upperLimitBox.addEventListener('change', function () {
  upperLimit = this.value;
  guessBox.setAttribute('max', this.value);
  againButton.click();
});

// Game Play: Player clicks the submit button.
submitButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Guess box is empty
  if (!guess) {
    nudge(guessBox);
    messageBox.textContent = '⛔ Gee whiz, enter a number, yo...';

    // Player WINS.
  } else if (guess === secretNumber) {
    numberBox.textContent = secretNumber;
    bigMessageBox.textContent = '🔥 NAILED it! 🔥';
    displayMessage('Bravo, Svengali.');

    // Change the styles.
    guessBox.style.border = '4px #FCE100 solid';
    messageBox.style.fontSize = '3rem';
    numberBox.style.border = '20px #FCE100 solid';
    numberBox.style.width = '40rem';
    numberBox.style.color = '#F7630C ';
    numberBox.style.border = '15px #FCE100solid';
    againButton.focus();

    // Is it a high score?
    if (score > highScore) {
      highScore = score;
      highScoreBoard.classList.add('blink');
      highScoreCard.textContent = highScore;
    }

    // Player guesses wrong.
  } else {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("👇 You're too HIGH")
        : displayMessage("👆 You're too LOW");
      score--;
      scoreCard.textContent = score;

      // Player LOSES.
    } else {
      scoreCard.textContent = 0;
      submitButton.disabled = true;
      overlay.classList.remove('hidden');
      bigMessageBox.textContent = 'You have died of Dysentery, Yo';
      againButton.style.border = '6px red solid';
      submitButton.style.backgroundColor = '#333';
      againButton.focus();
    }
  }
});

// The "Again!" button resets everything.
againButton.addEventListener('click', function () {
  // Reset values
  score = 20;
  secretNumber = randomNumber();

  // Reset score, message box, number box, and guess box
  scoreCard.textContent = score;
  displayMessage('Start guessing, Bucko...');
  numberBox.textContent = '?';
  guessBox.value = '';

  // Reset styles
  againButton.style.border = '4px #eee solid';
  submitButton.style.backgroundColor = '#ccc';
  submitButton.disabled = false;
  guessBox.style.border = '4px #eee solid';
  bigMessageBox.textContent = 'Guess My Number, Yo';
  numberBox.style.border = '20px #333 solid';
  numberBox.style.width = '20rem';
  numberBox.style.color = '#333 ';
  overlay.classList.add('hidden');
  highScoreBoard.classList.remove('blink');
  // guessBox.focus(); // not working. triggers enter button.
  // guessBox.select();
});

// Animations

// Nudge an element
const nudge = function (element) {
  element.animate(
    [
      // keyframes
      { transform: 'rotate(-4deg)' },
      { transform: 'rotate(4deg)' },
      { transform: 'rotate(-4deg)' },
    ],
    {
      // timing
      duration: 250,
    }
  );
};

// Click Enter button
submitButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Spin if guess box is not empty
  if (guess) console.log('Enter pressed, guess is not empty.');

  // Bump if guess box is empty
  if (!guess) console.log('Enter pressed, guess is empty.');
});

// Press Enter when in the guess box

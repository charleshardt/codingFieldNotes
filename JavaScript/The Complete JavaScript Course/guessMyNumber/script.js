'use strict';

let upperLimit = document.querySelector('.upper-limit').value;
const randomNumber = () => Math.trunc(Math.random() * upperLimit) + 1;
let secretNumber = randomNumber();

// Variables
let score = 20;
let highScore = 0;
let guess = document.querySelector('.guess').value;

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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input.
  if (!guess) {
    theMessage('⛔ Gee whiz, enter a number, yo...');

    // When guess is right
  } else if (guess === secretNumber) {
    // Player wins
    document.querySelector('.number').textContent = secretNumber;
    theMessage('🔥 NAILED it! 🔥');

    // Check if this is the highest score to date
    if (score > highScore) highScore = score;
    document.querySelector('body').style.backgroundColor = '#171717 ';
    document.querySelector('.guess').style.border = '4px #FCE100 solid';
    document.querySelector('.highscore').textContent = highScore;
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
      document.querySelector('.score').textContent = 0;
      theMessage('You have died of Dysentery.');
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
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('.number').style.border = '20px #333 solid';
  document.querySelector('.guess').style.border = '4px #eee solid';
  document.querySelector('.number').style.width = '20rem';
  document.querySelector('.number').style.color = '#333 ';
});

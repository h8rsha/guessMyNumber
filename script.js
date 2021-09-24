'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

// function to handle wrong guesses
function wrongGuess(message) {
  if (score > 1) {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!!';
    document.querySelector('.score').textContent = 0;
  }
}

// function to handle correct guess
function correctGuess() {
  document.querySelector('.message').textContent = 'Correct Number !!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}

// function to reset code
function resetCode() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number !!';
  }
  // When guess is correct
  else if (guess === secretNumber) {
    correctGuess();
  }
  // When guess is wrong
  else {
    let str = guess > secretNumber ? 'Too High !!' : 'Too Low !!';
    wrongGuess(str);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetCode();
});

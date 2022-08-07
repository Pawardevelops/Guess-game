'use strict';

let number = Math.trunc(Math.random() * 20);
let score = 20;
let highscore=0;

document.querySelector('.again').addEventListener('click', function () {
  console.log('again');
  number = Math.trunc(Math.random() * 20);
  score = 20;
  document.querySelector('.message').textContent = 'guess number';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (guess == '') {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'correct answer';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score>highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!!!';
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!!!';
    }
  }
});

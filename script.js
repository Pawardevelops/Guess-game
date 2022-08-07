"use strict";

let number = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;
const mssg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20);
  score = 20;
  mssg("start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (guess == "") {
    mssg("no number");
  } else if (guess == number) {
    mssg("correct number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      mssg(guess > number ? "too high!!!" : "too low!!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      mssg("GAME OVER!!!");

    }
  }
});

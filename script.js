"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 7;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	// when there is no input
	if (!guess) {
		displayMessage("no number!");

		// when player wins
	} else if (guess === secretNumber) {
		displayMessage("correct number!");

		//secret number
		document.querySelector(".number1").textContent = secretNumber;

		document.querySelector(".number").style.backgroundColor = "#a0d095";

		// High Score
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// when guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "too high!" : "too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("you lost!");
			document.querySelector(".score").textContent = 0;
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 7;
	document.querySelector(".score").textContent = score;

	secretNumber = Math.trunc(Math.random() * 20) + 1;

	displayMessage("Start Guessing!");
	document.querySelector(".number").style.backgroundColor = "#DEDDDD";
	document.querySelector(".guess").value = null;
	document.querySelector(".number1").textContent = "?";
});

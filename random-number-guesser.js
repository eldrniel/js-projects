const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 90);
console.log(target);

let guesses = 0;

while (true) {
  guesses++;

  const guess = Number(prompt("Enter your guess (between 1 and 100): "));

  if (guess > target) {
    console.log("Too high!");
  } else if (guess < target) {
    console.log("Too low!");
  } else {
    console.log("You got it!");
    break;
  }
}

console.log("You guessed the number in", guesses, "tries");

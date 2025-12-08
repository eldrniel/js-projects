const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

// Helper function for input validation + normalization
function getValidatedInput(prompText) {
  while (true) {
    let userInput = prompt(prompText);
    userInput = userInput.trim();

    if (userInput.length === 0) {
      console.log("Please enter something");
      continue;
    }

    userInput = userInput.toLowerCase();
    return userInput;
  }
}

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = getValidatedInput("What is the brain of the computer? ");
const correctAnswer1 = "cpu";

if (answer1 === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!");
}

const answer2 = getValidatedInput("What is better... a 3090ti or a 4080ti? ");
const correctAnswer2 = "3090ti";

if (answer2 === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!");
}

const answer3 = getValidatedInput(
  "What is the recommended amount of RAM in 2023? "
);
const correctAnswer3 = "16gb";

if (answer3 === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong!");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);
console.log("You got", correctAnswers, "questions correct!");
console.log("You score", percent + "%");

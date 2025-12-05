const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardware Quiz!");

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (correct_answer1 === answer1) {
  console.log("You got it correct!");
}

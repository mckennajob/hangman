var inquirer = require("inquirer");
var prompt = require("prompt");

// Randomly selects a word and uses the Word constructor to store it


// Prompts the user for each guess and keeps track of the user's remaining guesses
function gameTime(word, guess, response){


  inquirer
  .prompt ([
    {
      name: "letter",
      type: "input",
      message: "Choose a letter!",
    }
  ])
}

gameTime();

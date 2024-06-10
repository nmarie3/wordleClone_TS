"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var animalData = require('./animalWords.json');
console.log(animalData);
//let MAX_GUESSES: number = 6;
//let prevGuesses: string[] = [];
var randomIndex = Math.floor(Math.random() * animalData.length);
var animalToGuess = animalData[randomIndex];
console.log(animalToGuess);
function countLetters(str) {
    var count = str.split("");
    return count.length;
}
function startGame() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Guess a 5-letter animal: ', function (answer) {
        var letterCount = countLetters(answer);
        if (letterCount !== 5) {
            console.log('Must be a 5-letter word!');
            rl.close();
            startGame();
        }
        else if (answer === animalToGuess) {
            console.log('You got it!');
            rl.close();
        }
        else {
            console.log('Wrong answer, try again!');
            rl.close();
            startGame();
        }
    });
}
startGame();

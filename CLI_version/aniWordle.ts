import * as readline from 'readline';
const animalData = require('./animalWords.json')

console.log(animalData);


//let MAX_GUESSES: number = 6;
//let prevGuesses: string[] = [];
const randomIndex: number = Math.floor(Math.random() * animalData.length);
let animalToGuess: string = animalData[randomIndex];
console.log(animalToGuess)

function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Guess a 5-letter animal: ', (answer: string) => {
        if (answer === animalToGuess) {
        console.log('You got it!');
        rl.close();
        } else {
            console.log('Wrong answer, try again!')
            rl.close();
            startGame();
        }
    });
}

startGame()
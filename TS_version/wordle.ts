let WORDS: string[];

fetch('words.json')
    .then(response => response.json())
    .then(data => {
        WORDS = data;
    })
    .catch(error => console.error('Error fetching words', error))

const NUMBER_OF_GUESSES: number = 6;
let guessRemaining: number = NUMBER_OF_GUESSES;
let currentGuess: number[];
let nextLetter: number = 0;
let rightGuessString: string = WORDS![Math.floor(Math.random() * WORDS!.length)];
//adding the ! before WORDS tells TS that WORDS will deff not be null or undefined so it ignores the check

const checkGuess = () => {
    let guessString: string = '';
    let rightGuess = Array.from(rightGuessString);

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString === rightGuessString) {
        console.log("You guessed right! Game over!")
        guessRemaining = 0
        return
    } else {
        guessRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessRemaining === 0) {
            console.log("You've run out of guesses! Game Over!")
            console.log(`The correct word was: "${rightGuessString}"`)
        }
    }
}

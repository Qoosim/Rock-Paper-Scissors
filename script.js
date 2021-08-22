const guess = ['ROCK', 'PAPER', 'SCISSORS'];

function computerGuess(guess) {
    return guess[Math.floor(Math.random() * guess.length)];
}

console.log(computerGuess(guess));



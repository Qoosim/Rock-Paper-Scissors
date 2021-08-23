const prompt = require('prompt-sync')({sigint: true});

const guess = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return guess[Math.floor(Math.random() * guess.length)];
}

function playRound(playerSelection, computerSelection) {
    // Validation
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'Invalid input';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won. Rock crunches scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won. Paper covers rock';
    } else if (playerSelection === 'scissors' && 'computerSelection' === 'paper') {
        return 'You won. Scissors cuts paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer won. Rock cruches scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer won. Paper covers rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer won. Scissors cuts paper';
    } else {
        return 'The ended in tie. Please try again.'
    }
}

const playerSelection = prompt('Make your selection: ');
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection.toLowerCase(), computerSelection));


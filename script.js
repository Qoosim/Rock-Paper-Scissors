//const prompt = require('prompt-sync')({sigint: true});

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

//const playerSelection = prompt('Make your selection: ');
//const computerSelection = computerPlay();
//console.log(computerSelection);

function game() {
    const btnRock = document.createElement('button');
    btnRock.setAttribute('class', 'rockBtn');
    btnRock.textContent = 'Rock';
    const btnPaper = document.createElement('button');
    btnPaper.setAttribute('class', 'paperBtn');
    btnPaper.textContent = 'Paper';
    const btnScissors = document.createElement('button')
    btnScissors.setAttribute('class', 'scissorsBtn');
    btnScissors.textContent = 'Scissors';
    
    document.body.appendChild(btnRock);

}

game();

    /*
    let playerScores = 0;
    let computerScores = 0;

    for(let i = 1; i <= times; i++) {
        const playerSelection = prompt('Make your selection: ');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        let result = playRound(playerSelection, computerSelection).toLowerCase();
        if (result.includes('you won')) {
            playerScores += 1;
        } else if (result.includes('computer won')) {
            computerScores += 1;
        }
    }

    if (playerScores > computerScores) {
        console.log('Player won!.');
    } else if(playerScores < computerScores) {
        console.log('Computer won!.');
    } else {
        console.log('Game ended in tie!. Try again.');
    }
    */




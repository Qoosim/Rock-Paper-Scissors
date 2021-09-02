//const prompt = require('prompt-sync')({sigint: true});
// Variables declarations;

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const guess = ['rock', 'paper', 'scissors'];

// Logic
function computerPlay() {
    return guess[Math.floor(Math.random() * guess.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && 'computerSelection' === 'paper') 
    ) { 
        playerScore++;
        roundWinner = 'player';
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
}

// UI SECTION //

const body = document.querySelector('body');
const headerDiv = document.createElement('div');
headerDiv.setAttribute('class', 'header');

const headerMessage = document.createElement('h1');
headerMessage.setAttribute('class', 'title');

headerMessage.textContent = 'Welcome to Rock Paper Scissors Fun Game!';
headerDiv.appendChild(headerMessage);
body.appendChild(headerDiv);

const infoDiv = document.createElement('div');
infoDiv.setAttribute('class', 'info-div');

const scoreInfo = document.createElement('h2');
scoreInfo.setAttribute('class', 'score-info');
scoreInfo.textContent = 'Score'

const playerComputerDiv = document.createElement('div');
playerComputerDiv.setAttribute('class', 'cp-div')

const playerScorePara = document.createElement('p');
playerScorePara.textContent = `Player: ${playerScore}`;
playerScorePara.setAttribute('class', 'player');

const computerScorePara = document.createElement('p');
computerScorePara.setAttribute('class', 'computer');
computerScorePara.textContent = `Computer: ${computerScore}`;
playerComputerDiv.appendChild(playerScorePara);
playerComputerDiv.appendChild(computerScorePara);
infoDiv.appendChild(scoreInfo);
infoDiv.appendChild(playerComputerDiv);
body.appendChild(infoDiv);

const btnRock = document.createElement('button');
btnRock.setAttribute('class', 'rockBtn');
btnRock.textContent = 'Rock';

const btnPaper = document.createElement('button');
btnPaper.setAttribute('class', 'paperBtn');
btnPaper.textContent = 'Paper';

const btnScissors = document.createElement('button')
btnScissors.setAttribute('class', 'scissorsBtn');
btnScissors.textContent = 'Scissors';

const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'main');

containerDiv.appendChild(btnRock);
containerDiv.appendChild(btnPaper);
containerDiv.appendChild(btnScissors);
body.appendChild(containerDiv);

// Modal
const endgameModal = document.createElement('div');
endgameModal.setAttribute('class', 'modal')

const winnerMsg = document.createElement('p');
winnerMsg.setAttribute('class', 'message makeBold');
winnerMsg.setAttribute('id', 'endgameMsg');

const tryAgainMsg = document.createElement('p');
tryAgainMsg.setAttribute('class', 'message');
tryAgainMsg.textContent = 'Would you like to try again?';

const restartBtn = document.createElement('button');
restartBtn.setAttribute('class', 'btn-restart');
restartBtn.textContent = 'Restart';
restartBtn.addEventListener('click', restartGame);

// Create and select overlay
const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay');
overlay.addEventListener('click', closeEndgameModal);

endgameModal.appendChild(winnerMsg);
endgameModal.appendChild(tryAgainMsg);
endgameModal.appendChild(restartBtn);
body.appendChild(endgameModal);
body.appendChild(overlay);

btnRock.addEventListener('click', function() {
    game('rock');
});
btnPaper.addEventListener('click', function() {
    game('paper');
});
btnScissors.addEventListener('click', function() {
    game('scissors');
});

function scoreUpdate() {
    if(roundWinner === 'tie') {
       scoreInfo.textContent = 'It\'s a tie!'; 
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!';
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!';
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function setWinnerMessage() {
    return playerScore > computerScore
        ? (winnerMsg.textContent = 'You won!')
        : (winnerMsg.textContent = 'You lost!');
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active')
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Score'
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function game(playerSelection) {
    if (gameOver()) {
        openEndgameModal();
        return;
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreUpdate();

    if (gameOver()) {
        openEndgameModal();
        setWinnerMessage();
    }
}


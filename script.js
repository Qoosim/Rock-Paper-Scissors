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
headerDiv.style.cssText = 'padding: 40px; background: #393e46; border-bottom: 2px solid #ffa500;';

const headerMessage = document.createElement('h1');
headerMessage.setAttribute('class', 'title');

headerMessage.textContent = 'Welcome to Rock Paper Scissors Fun Game!';
headerMessage.style.cssText = 'font-size: 40px; color: #ffa500; text-align: center;'
headerDiv.appendChild(headerMessage);
body.appendChild(headerDiv);

const infoDiv = document.createElement('div');
infoDiv.style.cssText = 'padding: 30px;'
const scoreInfo = document.createElement('h1');
scoreInfo.textContent = 'Score'
scoreInfo.style.cssText = 'font-size: 40px; text-align: center; color: #fff; margin-bottom: 20px;';
const playerComputerDiv = document.createElement('div');
playerComputerDiv.style.cssText = 'width: 40%; margin: 0 auto; display: flex; justify-content: space-evenly;';
const playerScorePara = document.createElement('p');
playerScorePara.textContent = `Player: ${playerScore}`;
playerScorePara.style.cssText = 'font-size: 25px; color: #fff;';
const computerScorePara = document.createElement('p');
computerScorePara.textContent = `Computer: ${computerScore}`;
computerScorePara.style.cssText = 'font-size: 25px; color: #fff;';
playerComputerDiv.appendChild(playerScorePara);
playerComputerDiv.appendChild(computerScorePara);
infoDiv.appendChild(scoreInfo);
infoDiv.appendChild(playerComputerDiv);
body.appendChild(infoDiv);

const btnRock = document.createElement('button');
btnRock.setAttribute('class', 'rockBtn');
btnRock.textContent = 'Rock';
btnRock.style.cssText = 'font-size: 20px; padding: 20px 30px; cursor: pointer;';

const btnPaper = document.createElement('button');
btnPaper.setAttribute('class', 'paperBtn');
btnPaper.textContent = 'Paper';
btnPaper.style.cssText = 'font-size: 20px; padding: 20px 30px; cursor: pointer;';

const btnScissors = document.createElement('button')
btnScissors.setAttribute('class', 'scissorsBtn');
btnScissors.textContent = 'Scissors';
btnScissors.style.cssText = 'font-size: 20px; padding: 20px 30px; cursor: pointer;';

const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'main');
containerDiv.style.cssText = 'width: 50%; display: flex; justify-content: space-evenly; margin: 20px auto 0 auto;';

containerDiv.appendChild(btnRock);
containerDiv.appendChild(btnPaper);
containerDiv.appendChild(btnScissors);
body.appendChild(containerDiv);

// Modal
//const modalContainer = document.createElement('div');
//modalContainer.setAttribute('class', 'modal');
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
restartBtn.setAttribute('id', 'restartBtn');
restartBtn.textContent = 'Restart';
restartBtn.style.cssText = 'padding: 10px; border: none; border-radius: 10px;  font-size: 25px;'
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


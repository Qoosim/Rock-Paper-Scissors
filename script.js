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

const winnerMessageDiv = document.createElement('div');
winnerMessageDiv.style.cssText = 'width: 100%;';
const msgPara = document.createElement('p');
msgPara.textContent = 'Winner Message!';
msgPara.style.cssText = 'text-align: center; color: #fff; margin-top: 100px;';
winnerMessageDiv.appendChild(msgPara);
body.appendChild(winnerMessageDiv);

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

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function setWinnerMessage() {
    return playerScore > computerScore
        ? (msgPara.textContent = 'You won!')
        : (msgPara.textContent = 'You lost!');
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreUpdate();

    if (isGameOver()) {
        setWinnerMessage();
        return;
    }
}



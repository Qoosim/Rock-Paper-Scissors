//const prompt = require('prompt-sync')({sigint: true});
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const guess = ['rock', 'paper', 'scissors'];

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
const scorePara = document.createElement('h1');
scorePara.textContent = 'Score'
scorePara.style.cssText = 'font-size: 40px; text-align: center; color: #fff; margin-bottom: 20px;';
const playerComputerDiv = document.createElement('div');
playerComputerDiv.style.cssText = 'width: 40%; margin: 0 auto; display: flex; justify-content: space-evenly;';
const playerPara = document.createElement('p');
playerPara.textContent = `Player: ${playerScore}`;
playerPara.style.cssText = 'font-size: 25px; color: #fff;';
const computerPara = document.createElement('p');
computerPara.textContent = `Computer: ${computerScore}`;
computerPara.style.cssText = 'font-size: 25px; color: #fff;';
playerComputerDiv.appendChild(playerPara);
playerComputerDiv.appendChild(computerPara);
infoDiv.appendChild(scorePara);
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
const para = document.createElement('p');
para.textContent = 'Winner Message!';
para.style.cssText = 'text-align: center; color: #fff; margin-top: 100px;';
winnerMessageDiv.appendChild(para);
body.appendChild(winnerMessageDiv);

const computerSelection = computerPlay();

function game() {
    btnRock.addEventListener('click', function() {
        const playerSelection = btnRock.innerText.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    });

    btnPaper.addEventListener('click', function() {
        const playerSelection = btnPaper.innerText.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    })

    btnScissors.addEventListener('click', function() {
        const playerSelection = btnScissors.innerText.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    })
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




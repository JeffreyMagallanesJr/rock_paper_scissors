console.log("My Rock, Paper, Scissors Program \n by Jeffrey");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (randomNumber == 1) {
        choice = "rock";
    } else if (randomNumber == 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function playRound(selection) {
    // playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = selection;
    computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();

    console.log(`Round ${roundNumber}! Fight!`);
    roundNumber++;
    showChoices(playerSelection,computerSelection);

    if (playerSelection == computerSelection) {
        results.innerText += "\nIt's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        computer_score_display.innerText = `Computer Score: ${computerScore}`;
        results.innerText += "\nYou Lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        player_score_display.innerText = `Player Score: ${playerScore}`;
        results.innerText += "\nYou Win! Rock beats Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        player_score_display.innerText = `Player Score: ${playerScore}`;
        results.innerText += "\nYou Win! Paper beats Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        computer_score_display.innerText = `Computer Score: ${computerScore}`;
        results.innerText += "\nYou Lose! Scissors beats Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        computer_score_display.innerText = `Computer Score: ${computerScore}`;
        results.innerText += "\nYou Lose! Rock beats Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        player_score_display.innerText = `Player Score: ${playerScore}`;
        results.innerText += "\nYou Win! Scissors beats Paper!";
    }

    showWinner(playerScore,computerScore)
}

function showChoices(playerSelection,computerSelection) {
    console.log(`Player Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);
}

function showWinner(playerScore,computerScore) {
    if (playerScore == 5) {
        results.innerText += '\nYou reached 5 points first! You Win!';
    }
    if (computerScore == 5) {
        results.innerText += '\nComputer reached 5 points first! You Lose!';
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');
let player_score_display = document.querySelector('.playerScoreDisplay');
let computer_score_display = document.querySelector('.computerScoreDisplay');

rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));
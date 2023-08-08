/*
function getComputerChoice()
    return random(rock,paper,scissors)

function playRound(playerSelection,computerSelection)
    if playerSelection == rock AND computerSelection == paper
        print "You Lose! Paper beats Rock!"
        computerScore = computerScore + 1
    else if playerSelection == rock AND computerSelection == scissors
        print "You Win! Rock beats Scissors!"
        playerScore = playerScore + 1
    else if playerSelection == rock AND computerSelection == rock
        print "It's a draw!"
    else if playerSelection == paper AND computerSelection == rock
        print "You Win! Paper beats Rock!"
        playerScore = playerScore + 1
    else if playerSelection == paper AND computerSelection == scissors
        print "You Lose! Scissors beats Paper!"
        computerScore = computerScore + 1
    else if playerSelection == paper AND computerSelection == paper
        print "It's a draw!"
    else if playerSelection == scissors AND computerSelection == rock
        print "You Lose! Rock beats Scissors!"
        computerScore = computerScore + 1
    else if playerSelection == scissors AND computerSelection == paper
        print "You Win! Scissors beats Paper!"
        playerScore = playerScore + 1
    else if playerSelection == scissors AND computerSelection == scissors
        print "It's a draw!"

function displayScore()
    print "Your score is {playerScore}"
    print "Computer's Score is {computerScore}"

function game()
    playRound()
    displayScore()
    playRound()
    displayScore()
    playRound()
    displayScore()
    playRound()
    displayScore()
    playRound()
    displayScore()

playerSelection = input("Rock, Paper or Scissors?")
computerSelection = getComputerChoice()
playerScore = 0
computerScore = 0
*/
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

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();

    console.log(`Round ${roundNumber}! Fight!`);
    roundNumber++;
    showChoices(playerSelection,computerSelection);

    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper!"
    }
}

function showChoices(playerSelection,computerSelection) {
    console.log(`Player Choice: ${playerSelection}`);
    console.log(`Computer Choice: ${computerSelection}`);
}

function showWinner(playerScore,computerScore) {
    if (playerScore > computerScore) {
        return `You have ${playerScore} points compared to ${computerScore} points. You've won!`;
    } else if (playerScore < computerScore) {
        return `You have ${playerScore} points compared to ${computerScore} points. You've lost!`;
    } else {
        return `You have ${playerScore} points compared to ${computerScore} points. It's a draw!`;
    }
}

function game() {
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(showWinner(playerScore,computerScore));
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

game();
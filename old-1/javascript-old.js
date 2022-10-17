function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?");
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function playRound(playerSelection, computerSelection) {
    if (getWinner(playerSelection, computerSelection) == "tie") {
        return "It's a tie!"
    } else if (getWinner(playerSelection, computerSelection) == "player") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (getWinner(playerSelection, computerSelection) == "computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else {
        return "Something is wrong";
    }
}

function game() {
    console.log("Welcome");
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (getWinner(playerSelection, computerSelection) == 'player') {
            playerScore++;
        } else if (getWinner(playerSelection, computerSelection) == 'computer') {
            computerScore++;
        }
    } console.log("End of the Game");
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!")
    }
}

game()
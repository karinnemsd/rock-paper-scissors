function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());

const playerSelection = prompt("Rock, paper or scissors?");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const playerSelecConvertion = playerSelection.toLowerCase();

    if (
        playerSelecConvertion == "rock" && computerSelection == "scissors" ||
        playerSelecConvertion == "paper" && computerSelection == "rock" ||
        playerSelecConvertion == "scissors" && computerSelection == "paper"
    ) {
        return "You win!"
    } else if (
        playerSelecConvertion == "rock" && computerSelection == "paper" ||
        playerSelecConvertion == "paper" && computerSelection == "scissors" ||
        playerSelecConvertion == "scissors" && computerSelection == "rock"
    ) {
        return "You lost!"
    } else if (playerSelecConvertion == computerSelection) {
        return "It's a draw!"
    } else {
        return "Something is not right, please try again"
    }
}

console.log(playRound(playerSelection, computerSelection));
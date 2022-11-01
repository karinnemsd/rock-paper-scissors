//Buttons:
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Initial score:
let playerScore = 0;
let computerScore = 0;

//Computer Choice:
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Player choice & start the game:
function rockListener() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    playRound(computerSelection, playerSelection);
}
rock.addEventListener('click', rockListener);

function paperListener() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    playRound(computerSelection, playerSelection);
}
paper.addEventListener('click', paperListener);

function scissorsListener() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'scissors';
    playRound(computerSelection, playerSelection);
}
scissors.addEventListener('click', scissorsListener);


//Check round winner:
function getWinner(computerSelection, playerSelection) {
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

//Play 1 round:
function playRound(computerSelection, playerSelection) {
    //Round status:
    const status = document.getElementById('status');
  
    if (getWinner(computerSelection, playerSelection) == "tie") {
        status.textContent = "It's a tie."
    } else if (getWinner(computerSelection, playerSelection) == "computer") {
        status.textContent = `You lost, ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    } else if (getWinner(computerSelection, playerSelection) == "player") {
        status.textContent = `You won, ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        status.textContent = "Something is wrong";
    }

    //Display score:
    let playerScoreDisplay = document.getElementById('player-score-value');
    playerScoreDisplay.textContent = playerScore;
    let computerScoreDisplay = document.getElementById('computer-score-value');
    computerScoreDisplay.textContent = computerScore;

    gameOver();
}

//Game over:
function gameOver() {
    
    if (playerScore == 5 || computerScore == 5) {
        //Remove button functions
        rock.removeEventListener('click', rockListener);
        paper.removeEventListener('click', paperListener);
        scissors.removeEventListener('click', scissorsListener);

        //Remove hover
        rock.classList.remove("hover");
        paper.classList.remove("hover");
        scissors.classList.remove("hover");
    
        //Next step (check final winner):
        getFinalWinner();

        //Add refresh button:
        const refreshBtn = document.createElement('button');
        refreshBtn.textContent = 'Restart';
        let div = document.getElementById('div');
        div.appendChild(refreshBtn);

        refreshBtn.addEventListener('click', function() {
            window.location.reload();
        })
    }
}

//Final Winner:
function getFinalWinner(){
    const finalStatus = document.getElementById('final-status');

    if (playerScore > computerScore) {
        finalStatus.textContent = "Game over, you won!";
    } else if (computerScore > playerScore) {
        finalStatus.textContent = "Game over, you lost!";
    } else {
        finalStatus.textContent = "Game over, it's a tie!";
    }
}
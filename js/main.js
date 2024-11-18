// declare starting variables
let humanScore = 0;
let computerScore = 0;
let winner;
let rounds;
let currentRound = 1;

// declare DOM elements
let containerGame, containerGameOver, winnerDisplay, finalScoreDisplay;

document.addEventListener("DOMContentLoaded", () => {
    containerOpening = document.querySelector(".container-opening");
    containerGame = document.querySelector(".container-game");
    containerGameOver = document.querySelector(".game-over");
    roundInfo = document.querySelector(".round-info");

    // get button play again and add event listener
    document.querySelector("#play-again").addEventListener("click", () => {
        location.reload();
    });


    // get button start-game
    const btnStartGame = document.getElementById("play-game");

    // add eventlistener to start-game
    btnStartGame.addEventListener("click", () => {
        rounds = parseInt(document.getElementById("input-rounds").value);

        if (isNaN(rounds)) {
            rounds = 5;
        }

        containerOpening.style.display = "none";
        containerGame.style.display = "flex";
        roundInfo.textContent = `Round ${currentRound} / ${rounds}`;
    })


    // get rps-icons and add event listener
    document.querySelectorAll(".rps-icon-game").forEach(icon => {
        icon.addEventListener("click", () => {
            playRound(icon);
        });
    });

})

function playRound(icon) {
    let humanChoice = icon.id;
    console.log(humanChoice);
    let computerChoice = getComputerChoice();
    winner = getRoundWinner(humanChoice, computerChoice);

    if (winner === 1) {
        humanScore++;
    } else if (winner === 2) {
        computerScore++;
    }

    // update score
    document.querySelector("#human-score").textContent = `${humanScore}`;
    document.querySelector("#computer-score").textContent = `${computerScore}`;
    
    // update round
    currentRound++;
    if (currentRound === rounds) {
        roundInfo.textContent = "Last Round!";
    } else if (currentRound < rounds) {
        roundInfo.textContent = `Round ${currentRound} / ${rounds}`;
    } else if (currentRound > rounds) {
        announceWinner();
    }
}


function announceWinner() {
    containerGame.style.display = "none";
    containerGameOver.style.display = "flex";

    const winner = document.querySelector("#winner");
    const finalScoreDisplay = document.querySelector("#final-score");
    console.log(finalScoreDisplay);

    if (humanScore > computerScore) {
        winner.textContent = "You won!";
        finalScoreDisplay.textContent = `${humanScore} to ${computerScore}`;
        document.querySelector("body").style.backgroundColor = "lightgreen";
    } else if (computerScore > humanScore) {
        winner.textContent = "You lose! Try again!";
        finalScoreDisplay.textContent = `${computerScore} to ${humanScore}`;
        document.querySelector("body").style.backgroundColor = "lightcoral";
    } else {
        winner.textContent = "It's a Draw. Try again!";
        finalScoreDisplay.textContent = `${humanScore} to ${computerScore}`;
    }
}


function getRoundWinner(humanChoice, computerChoice) {

    let roundResultInfo = document.querySelector("#round-result-info");

    // Draw
    if (humanChoice === computerChoice) {
        roundResultInfo.textContent = "It's a Draw. Go again!";
        return winner = 0;
    }

    // rock beats scissor
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundResultInfo.textContent = "You win! Rock beats Scissors.";
        return winner = 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        roundResultInfo.textContent = "You lose! Rock beats Scissors.";
        return winner = 2;
    }

    // paper beats rock
    else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResultInfo.textContent = "You win! Paper beats Rock.";
        return winner = 1
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        roundResultInfo.textContent = "You lose! Paper beats Rock.";
        return winner = 2;
    }

    // scissor beats paper
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResultInfo.textContent = "You win! Scissors beat Paper.";
        return winner = 1
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        roundResultInfo.textContent = "You lose! Scissors beat Paper.";
        return winner = 2;
    }
}


function getComputerChoice() {
    // get random number
    let number = Math.floor(Math.random() * 3);

    // create empty string
    let computerChoice;

    if (number === 0) {
        computerChoice = "rock"
    } else if (number === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    console.log(`Computer chooses ${computerChoice}`);
    
    return computerChoice;
}


function getComputerChoice() {
    // get random number
    let number = Math.random();

    // create empty string
    let computerChoice;

    if (number > 0 && number <= 0.33) {
        computerChoice = "rock"
    } else if (number > 0.33 && number <= 0.66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }

    console.log(`Computer chooses ${computerChoice}`);
    
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt("Choose rock, paper or scissor: ").trim().toLowerCase();
    }
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor");

    console.log(`Player chooses ${humanChoice}`);
    
    return humanChoice; 
}

function playRound(humanChoice, computerChoice) {

    // Draw
    if (humanChoice === computerChoice) {
        console.log("It's a Draw. Go again!");
    }

    // rock beats scissor
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats Scissor.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose! Rock beats Scissor.");
        computerScore++;
    }

    // paper beats rock
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }

    // scissor beats paper
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats Paper.");
        humanScore++;
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
        console.log("You lose! Scissor beats Paper.");
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
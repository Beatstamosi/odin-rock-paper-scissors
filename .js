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
    let winner;

    // Draw
    if (humanChoice === computerChoice) {
        console.log("It's a Draw. Go again!");
        return winner = 0;
    }

    // rock beats scissor
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats Scissor.");
        return winner = 1;
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose! Rock beats Scissor.");
        return winner = 2;
    }

    // paper beats rock
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        return winner = 1
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! Paper beats Rock.");
        return winner = 2;
    }

    // scissor beats paper
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats Paper.");
        return winner = 1
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
        console.log("You lose! Scissor beats Paper.");
        return winner = 2;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;
    let rounds;

    // ask user how long he wants to play the game 
    do {
        rounds = parseInt(prompt("How many rounds would you like to play? Please enter a number: "));
    }
    while (!Number.isInteger(rounds));
    

    for (let i = 0; i < rounds; i++) {

        if (i > 0) {
            console.log("");
        }
        
        console.log(`Round ${i + 1}/${rounds}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        winner = playRound(humanChoice, computerChoice);

        if (winner === 1) {
            humanScore++;
        } else if (winner === 2) {
            computerScore++;
        }

        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    // add empty line for readability
    console.log("");

    if (humanScore > computerScore) {
        console.log("You won!")
    } else if (computerScore > humanScore) {
        console.log("The Computer won! Refresh to try again")
    } else {
        console.log("It's a Draw! Refresh to try again")
    }
}

playGame();

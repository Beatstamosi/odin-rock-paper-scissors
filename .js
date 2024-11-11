function getComputerChoice() {
    // get random number
    let number = Math.random();

    // create empty string
    let choice;

    if (number > 0 && number <= 0.33) {
        choice = "rock"
    } else if (number > 0.33 && number <= 0.66) {
        choice = "paper"
    } else {
        choice = "scissor"
    }

    console.log(number);
    console.log(choice);
}

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt("Choose rock, paper or scissor: ").trim().toLowerCase();
    }
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor");

    console.log(humanChoice);
    
    return humanChoice;
    
}

getHumanChoice();
getComputerChoice();
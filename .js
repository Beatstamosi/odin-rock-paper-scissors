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


getComputerChoice();
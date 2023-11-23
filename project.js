// deposit money
// determine a number of lines
// collect a bet
// spin slot machine
// check if user won
// give the user their winnings
// play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount. Try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on: ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Try again.")
        } else {
            return numberOfLines;
        }
    }
}

let bill = deposit();

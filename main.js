#! usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);
if (pinanswer.pin === mypin) {
    console.log("You entered a correct pin");
    let operationans = await inquirer.prompt([{
            name: "operation",
            message: "What action do you want to perform",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        mybalance -= amountans.amount;
        console.log("Your remaining balance is " + mybalance);
        if (amountans.amount >= mybalance) {
            console.log("Your amount is insufficient");
        }
    }
    else if (operationans.operation === "check balance") {
        console.log("Your balance is " + mybalance);
    }
    else if (operationans.operation === "fast cash") {
        let fastcashamount = await inquirer.prompt([{
                name: "fastcash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: ["1000", "3000", "5000"]
            }]);
        console.log("Your fast cash is " + fastcashamount.fastcash);
    }
}
else {
    console.log("Your pin is incorrect");
}

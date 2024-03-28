let pinCode = 2533;
let myBalance = 60000;
import inquirer from "inquirer";
let userLogin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Pin Code :",
    },
]);
if (userLogin.pin === pinCode) {
    let operations = await inquirer.prompt([
        {
            name: "operationChoices",
            type: "list",
            message: "Select one of any to perform operation :",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operations.operationChoices === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawCash",
                type: "number",
                message: "Enter Amout :",
            },
        ]);
        if (WithdrawAmount.withdrawCash > myBalance) {
            console.log("You dont have insufficient balance for this operation .");
        }
        else {
            myBalance -= WithdrawAmount.withdrawCash;
            console.log("Your remainig balance is :" + myBalance);
        }
    }
    else if (operations.operationChoices === "Check Balance") {
        console.log("Your Available Balance is : " + myBalance);
    }
    else if (operations.operationChoices === "Fast Cash") {
        const fastCash = await inquirer.prompt([
            {
                name: "optionFastCash",
                type: "list",
                message: "Select one of any to perform fast cash operation :",
                choices: ["10000", "15000", "25000", "35000", "40000", "50000"]
            },
        ]);
        myBalance -= fastCash.optionFastCash;
        console.log("Your remaining balance is : " + myBalance);
    }
    ;
}
else {
    console.log("Invalid Pin Code .!!");
}

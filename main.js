#! /usr/bin/env node
import inquirer from "inquirer";
let exchange_rate = {
    "USD": 1, //Base Currency
    "EUR": 0.9, //European Currency
    "JYP": 113, //Japanese Currency
    "CAD": 1.3, //Canadian Currency
    "AUD": 1.65, //Australian Dollar
    "PKR": 278.45, //Pakistani Rupees
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency from: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);

#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9120521173,
    INR: 93.3333333333,
    PKR: 280,
};
let userAnswwer = await inquirer.prompt([
    {
        name: `from`,
        message: `Enter From Currency`,
        type: `list`,
        choices: ["USD", `EUR`, `INR`, `PKR`],
    },
    {
        name: `to`,
        message: `Enter To Currency`,
        type: `list`,
        choices: ["USD", `EUR`, `INR`, `PKR`],
    },
    {
        name: `amount`,
        message: `Enter Your Amount`,
        type: `number`,
    },
]);
let fromAmount = currency[userAnswwer.from];
let toAmount = currency[userAnswwer.to];
let amount = userAnswwer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

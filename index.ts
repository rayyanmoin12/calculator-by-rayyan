#! /usr/bin/env node

import inquirer from "inquirer"

console.log("Welcome to Rayyan's calculator!");

const ans = await inquirer.prompt([
    {
        type: "number",
        name: "first_number",
        message: "Write your first number: "  
    },
    {
        type: "number",
        name: "second_number",
        message: "Write your second number: "  
    },
    {
        type: "list",
        name: "operator",
        message: "Pick your preferred operation.",
        choices: ["Addition", "Subtraction" ,"Multiplication", "Division"]
    },
])

if(ans.operator === "Addition")
    {
    console.log(ans.first_number + ans.second_number);
}
else if(ans.operator === "Subtraction")
    {
    console.log(ans.first_number - ans.second_number);
}
else if(ans.operator === "Multiplication")
    {
    console.log(ans.first_number * ans.second_number);
}
else 
{
    console.log(ans.first_number / ans.second_number);
}
#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.magentaBright("\n \t \t \t \t Tayyaba's Word Counter \n"))
let input = await inquirer.prompt(
    {
        name: "data",
        message: chalk.magenta("Enter your sentence/ paragraph \n"),
        type: "input"
    }
)

let data = input.data.trim().split(" ");
let wordcount = data.length;

console.log(chalk.bold.magenta(`Word Count: ${chalk.bold.magentaBright(wordcount)}`));

import inquirer from "inquirer";
//
const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = ans.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the  words counts of the sentence to the console
console.log(`your sentence word count is ${words.length}`);

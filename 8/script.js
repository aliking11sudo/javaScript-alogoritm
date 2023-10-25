let redlineSync = require("readline-sync");
let userInput = +redlineSync.question("Input your number :");
console.log(parseInt(userInput,2));
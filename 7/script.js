let redlineSync = require("readline-sync");
let userInput = +redlineSync.question("Input your number :");
let userInputSeconde = +redlineSync.question("input your number 2 :");

if (userInput > userInputSeconde) {

  for (let index = userInputSeconde; index <= userInput; index++) {
    if (index %3===0) {
        console.log(index);
    }
    
  }
  
}

let redlineSync = require("readline-sync");
let userInput = redlineSync.question("Input your number :");
switch (userInput) {
  case "0":
    console.log("false userINput> 1");
    break;

  default:
    let jam = 0;
    for (let index = 1; index <= userInput; index++) {
      jam += index;
    }
    console.log(jam);
    if (jam % userInput === 0) {
      console.log("true");
    } else {
      console.log("false");
    }
    break;
}

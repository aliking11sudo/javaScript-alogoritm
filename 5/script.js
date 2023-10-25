let redlineSync = require("readline-sync");
let userInput = redlineSync.question("daramad ?:");
if (userInput < 5000) {
  console.log("moaf");
} else if (userInput < 100000 && userInput > 5000) {
  const maliat = (userInput / 100) * 10;
  console.log(`mailat ${maliat}`);
} else if (userInput >= 100000) {
  const maliat = (userInput / 100) * 15;
  console.log(`mailat ${maliat}`);
}

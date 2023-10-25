let redlineSync = require("readline-sync");
let userInput = redlineSync.question("adat tabiei !lees than 1000 :");
let resultOne = 0;
let soratOne = 1;
for (let adadTabiei = 1; adadTabiei <= userInput; adadTabiei++) {
  let kasr = soratOne / userInput;
  resultOne += kasr;
  console.log(resultOne);
}

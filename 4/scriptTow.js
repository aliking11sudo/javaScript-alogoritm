let redlineSync = require("readline-sync");
let userInput = redlineSync.question("input num :");
let first = 1;
let sum = 0;
let tavanInput = redlineSync.question("input tavan");
for (let tavan = 1; tavan <= tavanInput; tavan++) {
  let kasr = first / userInput;
  let result = kasr ** tavan;
  console.log(result);
  sum += result;
}
console.log(`javab soal = ${sum}`);

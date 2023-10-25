let redlineSync = require("readline-sync");
let userInput = +redlineSync.question("Input your number :");
let sum = 0;
let jam = 0;
for (let index = 1; index <= userInput; index++) {
  if (index % 4 == 0) {
    console.log(index);
    jam += index;
    sum++;
  }
}
console.log(`${sum} tedad mazareb`);
console.log(`${jam} jame mazareb`);

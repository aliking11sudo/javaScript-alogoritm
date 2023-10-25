let redlineSync = require("readline-sync");
let inputa = parseInt(redlineSync.question("input num A ="));
let inputb = parseInt(redlineSync.question("input num b ="));
let inputc = parseInt(redlineSync.question("input num c ="));
let inputd = parseInt(redlineSync.question("input num d ="));

if (inputa > inputc + inputd) {
  let result = inputa * inputc;
  console.log(result);
} else {
  let result = inputb * inputd;
  console.log(result);
}

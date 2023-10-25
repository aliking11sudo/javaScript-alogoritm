let readlineSync = require("readline-sync");
function getCent() {
  let cent;
  do {
    cent = readlineSync.question("input cash : ");
  } while (cent < 0);
  return cent;
}

function calculateQuarter(cent) {
  let quarter = 0;
  while (cent >= 25) {
    cent -= 25;
    quarter++;
  }
  return quarter;
}

function calculateDimes(cent) {
  let dimes = 0;
  while (cent >= 10) {
    cent -= 10;
    dimes++;
  }
  return dimes;
}

function calculateNickels(cent) {
  let nickels = 0;
  while (cent >= 5) {
    cent -= 5;
    nickels++;
  }
  return nickels;
}

function calculatePen(cent) {
  let pen = 0;
  while (cent >= 1) {
    cent -= 1;
    pen++;
  }
  return pen;
}

function main() {
  let cent = getCent();
  let quarter = calculateQuarter(cent);
  cent -= quarter * 25;
  let dimes = calculateDimes(cent);
  cent -= dimes * 10;
  let nickels = calculateNickels(cent);
  cent -= nickels * 5;
  let pen = calculatePen(cent);
  cent -= pen * 1;
  if (quarter > 0) {
    console.log(`25 cent = ${quarter}`);
  }
  if (dimes > 0) {
    console.log(`10 cent = ${dimes}`);
  }
  if (nickels > 0) {
    console.log(`5 cent = ${nickels}`);
  }
  if (pen > 0) {
    console.log(`1 cent = ${pen}`);
  }
}

main();

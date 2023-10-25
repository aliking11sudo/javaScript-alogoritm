let readlineSync = require("readline-sync");
let number = readlineSync.question("Enter a number: ");
let zoj = 0;
let fard = 0;
let sefr = 0;
for (let adad of number) {
  if (adad % 2 == 0) {
    zoj++;
  }
  if (adad % 2 > 0) {
    fard++;
  }
  if (adad == 0) {
    sefr++;
  }
}
console.log("tedad zoj ", zoj - sefr);
console.log("tedd fard:", fard);
console.log("tedad sefr", sefr);

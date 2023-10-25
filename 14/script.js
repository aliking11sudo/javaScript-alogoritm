let redlineSync = require("readline-sync");
let merajeKonande = {
  firstName: redlineSync.question("whats your name ?"),
  lastName: redlineSync.question("whats your lastName ?"),
  davaatMorajee: redlineSync.question("davaatMorajee ?"),
  jameVarizha: +redlineSync.question("jameVarizha ?"),
  jameBardashtha: +redlineSync.question("jameBardashtha ?"),
  mojodiKol: 1000,
}
const final= merajeKonande.mojodiKol + merajeKonande.jameVarizha-merajeKonande.jameBardashtha;
console.log(final);
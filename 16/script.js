let redlineSync = require("readline-sync");
let froshgah = [
  {
    forshGah: console.log("amiran"),
    forosh: +redlineSync.question("mizan forosh : "),
  },
  {
    forshGah: console.log("kurosh"),
    forosh: +redlineSync.question("mizan forosh : "),
  },
];
froshgah.map((item) => {
  if (item.forosh < 500000) {
    console.log("amiran");
    console.log(`miazan pardakht : ${(item.forosh / 100) * 3}`);
  }
  if (700000 > item.forosh > 500000) {
    console.log("kurosh");
    console.log(`miazan pardakht : ${(item.forosh / 100) * 5}`);
  }
});

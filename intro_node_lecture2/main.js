//import fs from "fs";
const fs = require("fs");

// * codice assincrono
fs.readFile("./test1.txt", { encoding: "utf-8" }, (err, content) => {
  // * funzione di callback
  if (err) {
    console.error(err);
    return;
  }
  console.log(content);
});

const content2 = fs.readFileSync("./test2.txt", { encoding: "utf-8" });

console.log(content2);

// * Create a new file using appendFile() method:

// fs.appendFile("mynewfile.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

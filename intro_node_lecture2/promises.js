const fs = require("fs/promises");

function promiseFs(filePath, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, options, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

promiseFs("./test1.txt", { encoding: "utf-8" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const filePromise = fs.readFile("./test2.txt", { encoding: "utf-8" });

filePromise
  .then((content) => {
    console.log(content);
    return fs
      .readFile("./mynewfile.txt", { encoding: "utf-8" })
      .catch((err) => {
        return "default config";
      });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
/* ?
console.log(filePromise);

const thenPromise = filePromise.then(...)
console.log(thenPromise);

const catchPromise = thenPromise.catch(...)
console.log(catchPromise);
*/

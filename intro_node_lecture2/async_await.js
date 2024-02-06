const fs = require("fs/promises");

// * async/await

console.log("First output");
async function mainFn() {
  try {
    const content1 = await fs.readFile("./test1.txt", { encoding: "utf-8" });

    console.log(content1);

    let content2;
    try {
      content2 = await fs.readFile("./test.txt", { encoding: "utf-8" });
    } catch (err) {
      content2 = "default content";
    }

    console.log(content2);
  } catch (err) {
    console.log("errori nella lettura dei file");
    throw err;
  }
}

mainFn().catch((err) => console.error(err));

console.log("last operation");

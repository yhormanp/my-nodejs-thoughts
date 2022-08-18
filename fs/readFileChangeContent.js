const { rename } = require("fs");
const fs = require("fs/promises");

async function findAndChangeContent() {
  let filename = "./before.json";

  try {
    const data = await fs.readFile(filename);
    console.log("data found", data.toString());

    const newContent = [
      { name: "Miss", data: "123" },
      { name: "AKS", data: "346" },
    ];
    await fs.writeFile(filename, JSON.stringify( newContent));

    const readNewData = await fs.readFile(filename);
    console.log("updated data", readNewData.toString());
  } catch (error) {
    console.log("Error found updat a file content", error);
  }
}
findAndChangeContent();

const fs = require("fs");

const file = process.argv[2];
console.log("file", file);
if (!file) {
  throw new Error("Debes indicar el archivo que quieres leer");
}

const content = fs.readFile(file, function (error, content) {
  if (error) {
    return console.log(error);
  }

  const lines = content.toString()  .split("\n").length;

  console.log("Number of lines ", lines);
});

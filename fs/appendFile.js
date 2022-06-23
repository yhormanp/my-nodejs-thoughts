/*
A handy method to append content to the end of a file is fs.appendFile() (and its fs.appendFileSync() counterpart):

All those methods write the full content to the file before returning the control back to your program (in the async version, this means executing the callback)

In this case, a better option is to write the file content using streams.
*/

//creating an initial file
const fs = require("fs");
let content = "initial text to be added";
fs.writeFile("./file1.txt", content, (err) => {
  if (err) {
    console.log(err);
  }
});

//append additional text
const newContent = "this is the second text to be added";
fs.appendFile("./file1.txt", newContent, (err) => {
  if (err) {
    console.log(err);
  }
});



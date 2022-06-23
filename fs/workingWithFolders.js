/*
The Node.js fs core module provides many handy methods you can use to work with folders.
*/

/*
creatin a new folder
Use fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new folder
*/

const fs = require("fs");
const folderName = "./myNewFolder";

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdir(folderName, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
} catch (error) {
  console.log(error);
}


/*
read the content of a subdirectory
Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.

This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:
*/


const folderPath = '../fs';

console.log(fs.readdirSync(folderPath, (err)=>{
    if(err){
        console.log(err)
    }
}));

/*
The simplest way to read a file in Node.js is to use the fs.readFile() method, 
passing it the file path, encoding and a callback function that will be called 
with the file data (and the error):

All three of fs.readFile(), fs.readFileSync() and fsPromises.readFile() read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.

*/

//READFILE
const fs = require('fs');

fs.readFile('../so-archivos/cancion.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('content of the file in asynchronous way, ', data);
});

//READFILESYNC
//Alternatively, you can use the synchronous version fs.readFileSync():
try {
    const data = fs.readFileSync('../so-archivos/cancion.txt', 'utf8');
    console.log('content of the file in Synchronous way, ', data);
  } catch (err) {
    console.error(err);
  }


  //FS.PROMISES
  // You can also use the promise-based fsPromises.readFile() 
  // method offered by the fs/promises module:

  const fs2 = require('fs/promises');

async function example() {
  try {
    const data = await fs2.readFile('../so-archivos/cancion.txt', { encoding: 'utf8' });
    console.log('content of the file using promises, ', data);
  } catch (err) {
    console.log(err);
  }
}
example();



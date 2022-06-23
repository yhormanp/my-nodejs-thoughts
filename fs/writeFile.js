/* 
The easiest way to write to files in Node.js is to use the fs.writeFile() API.
*/

const fs = require('fs');
const content = 'this is some random content';

fs.writeFile('./file1.txt', content, (err)=>{
    if(err){
        console.log((err))
    }
})


// Alternatively, you can use the synchronous version fs.writeFileSync():
const fs = require('fs');

const content = 'Some content!';

try {
  fs.writeFileSync('./file2', content);
  // file written successfully
} catch (err) {
  console.error(err);
}

// You can also use the promise-based fsPromises.writeFile() method offered by the fs/promises module:

const fsp = require('fs/promises');

async function example() {
  try {
    const content = 'Some content with promises!';
    await fsp.writeFile('./file3', content);
  } catch (err) {
    console.log(err);
  }
}
example();



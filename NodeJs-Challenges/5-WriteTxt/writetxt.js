const fs = require('node:fs/promises');
const path = require('node:path');

const fileName = 'textToWrite.txt';
const filePath = path.join('.', fileName);

const textToWrite =
  'Lorem ipsum, Lorem ipsum,Lorem ipsum, Lorem ipsum,Lorem ipsum, Lorem ipsum,Lorem ipsum, Lorem ipsum';

try {
  fs.writeFile(filePath, textToWrite)
  .then((res)=> console.log('file has been saved'))
} catch (error) {
  console.log('no se pudo encontrar el archivo');
}

try {
  fs.readFile(filePath, 'utf8').then((contentFile) => console.log('content of the file ', contentFile))
} catch (error) {
  console.log('no se pudo encontrar el archivo');
}

import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
  console.log('primer texto: ', text);
  console.log('segundo  texto: ', secondText);
});

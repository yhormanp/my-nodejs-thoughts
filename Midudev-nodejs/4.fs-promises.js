const fs = require('node:fs/promises');

console.log('leyendo el primer archivo en modo async');

fs.readFile('./archivo.txt', 'utf-8')
  .then((result) => {
    console.log('prrimer texto: ', result);
  })
  .catch((err) => {});

console.log('hacer cosas mientras lee el archivo ');

console.log('leyendo el segundo archivo en modo async');
fs.readFile('./archivo2.txt', 'utf-8')
  .then((result) => {
    console.log('segundo text: ', result);
  })
  .catch((err) => {});

// Hay librerias en las que no se tiene promises por lo que se pueden convertir a la 
// funcionalidad de promesas usando promisify. Solo en los modulos nativos que no tienen promesass
const fsNew = require('node:fs');

const { promisify } = require('node:util');

const readFilePromise = promisify(fsNew.readFile);

console.log('leyendo el primer archivo');

fsNew
  .readFilePromise('./archivo.txt', 'utf-8')
  .then((result) => {
    console.log('prrimer texto: ', result);
  })
  .catch((err) => {});

console.log('hacer cosas mientras lee el archivo ');

console.log('leyendo el segundo archivo');
fsNew
  .readFilePromise('./archivo2.txt', 'utf-8')
  .then((result) => {
    console.log('segundo texto: ', result);
  })
  .catch((err) => {});

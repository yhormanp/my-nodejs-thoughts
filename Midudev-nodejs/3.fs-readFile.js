const fs = require('node:fs')

console.log('leyendo el primer archivo')

const firstText = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(firstText)

console.log('hacer cosas mientras lee el archivo '); 


console.log('leyendo el segundo archivo')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText)


//hasta aqui va a leer todo de una forma secuencial, de un modo sincrono, por lo que se bloquea hasta terminar el proceso

console.log('leyendo el primer archivo en modo async')

fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log(text)
});


console.log('hacer cosas mientras lee el archivo '); 


console.log('leyendo el segundo archivo en modo async')
fs.readFile('./archivo2.txt', 'utf-8', (err,text) => {
    console.log(text)
});

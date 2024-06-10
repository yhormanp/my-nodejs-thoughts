const fs = require('node:fs');

// modo sincrono
const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un dierctorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes

)
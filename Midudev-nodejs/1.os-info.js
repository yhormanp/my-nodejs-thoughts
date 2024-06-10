const os = require('node:os');


console.log('nombre del sistema operativo', os.platform())

console.log('version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('memoria libre', os.freemem())
console.log('memoria total', os.totalmem())
const os = require('node:os');



// console.log("Cpu info", os.cpus())
// console.log("Ip address", os.networkInterfaces().en0.map( i => i.address))
//memoria libre

const SIZE = 1024;
function kb (bytes){ return bytes/SIZE};
function mb (bytes){ return kb(bytes) /SIZE};
function gb (bytes){ return mb(bytes) /SIZE};

console.log('arquitectura', os.arch())
console.log('nucleos', os.cpus().length)
console.log('BE o LE bigEndigan o  little Endigan', os.endianness())
console.log("memoria libre en bytes", os.freemem())
console.log('home director path', os.homedir());
console.log('host Name', os.hostname())
console.log("so presente", os.type());
console.log('Plataforma en la que nodejs fue compilada', os.platform())
console.log("so version", os.release())
console.log("usr info", os.userInfo())
console.log('tipo sistema operativo', os.type())
console.log('memoria libre', gb(os.freemem()))
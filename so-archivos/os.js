const os = require('os');



// console.log("Cpu info", os.cpus())
// console.log("Ip address", os.networkInterfaces().en0.map( i => i.address))
//memoria libre

const SIZE = 1024;
function kb (bytes){ return bytes/SIZE};
function mb (bytes){ return kb(bytes) /SIZE};
function gb (bytes){ return mb(bytes) /SIZE};

console.log('arquitectura', os.arch())
console.log("memoria libre en bytes", os.freemem())
console.log("so presente", os.type());
console.log("so version", os.release())
console.log("usr info", os.userInfo())
console.log('nucleos', os.cpus().length)
console.log('memoria libre', gb(os.freemem()))
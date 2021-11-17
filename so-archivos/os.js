const os = require('os');



// console.log("Cpu info", os.cpus())
// console.log("Ip address", os.networkInterfaces().en0.map( i => i.address))
//memoria libre
console.log("memoria libre en bytes", os.freemem())
console.log("so presente", os.type());
console.log("so version", os.release())
console.log("usr info", os.userInfo())
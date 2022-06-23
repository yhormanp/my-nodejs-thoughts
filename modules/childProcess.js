const { exec , spawn} = require("child_process");

// exec("ls -l", (err, stdout, sterror) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log("todo bien", stdout);
// });

/*Invocar un proceso nuevo de nodejs */
let proceso = spawn('ls', ['-la']);

console.log(proceso)
console.log('id del proceso', proceso.pid)
console.log('esta conectado?', proceso.connected)
console.log('esta muerto?', proceso.killed)
proceso.stdout.on('data', (dato) => {
    console.log('dato', dato.toString())
})


/*detectar cuando se termina*/
proceso.on('exit', () => {
    console.log('el proceso ha terminado')
    console.log('esta muerto?', proceso.killed)
})
 
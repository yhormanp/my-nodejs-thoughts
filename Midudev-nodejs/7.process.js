//process, para revisar cosas con el proceso actual
// aqui visualizamos todos los parametros usados al ejecutar el comando en la terminal
// node 7.process.js twitch curso node hola --uuu midu
console.log(process.argv);
// 'C:\\Program Files\\nodejs\\node.exe',
//   'F:\\ESTUDIO\\NodeJs\\my-nodejs-thoughts\\Midudev-nodejs\\7.process.js',
//   'twitch',
//   'curso',
//   'node',
//   'hola',
//   '--uuu',
//   'midu'

//controlar el proceso y su salida
// process.exit(1);

//desde donde estamos ejecutando el proceso
// console.log('carpeta: ', process.cwd())

// para imprimir variables de entorno
// Se manda a ejecutar el comando de node pasandole una variable de entorno "node 7.process.js PEPITO=Bonjour"
console.log('variable de entorno pepito', process.env.PEPITO)



const fs = require("fs");

/* todos los metodos tienen una alternativa sincrona, no recomendadas,
 por eso todos los procesos de nodejs funcionan en modo asincrono */

 function leer (ruta, callback){
    fs.readFile(ruta, (error, data) => {
        console.log('data', data.toString())
    })
 }

 leer(__dirname + '/cancion.txt')

 /*
 escribir
 */

 function escribir(ruta, contenido){
     fs.writeFile(ruta, contenido, (err) => {
         if(err){
             console.log('no he podido escribir el archivo');
         } else {
             console.log('se ha escrito correctamente')
         }
     })
 }


 escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo' )


 /*
 Eliminar un archivo
 */

 function borrar(ruta, callback) {
     fs.unlink(ruta, callback);
 }

 borrar(__dirname + '/archivo1.txt', console.log)
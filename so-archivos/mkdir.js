const fs = require('fs');

// se pueden crear diferentes rutas a la vez
fs.mkdir("platzi/escuela-js/node", {recursive: true}, (err)=> {
    if(err){
        console.log(err);
    }
})
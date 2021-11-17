const fs = require('fs');


fs.copyFile("cancion.txt", "chau.txt", err => {
    if(err){
        console.log(err);
    }

    console.log("nuestro archivo  cancion.txt ha sido copia a chau.txt")
})
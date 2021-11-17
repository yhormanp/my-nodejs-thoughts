const fs = require ('fs');
const file = fs.createWriteStream('./big');


for (let index = 0; index < 1e6; index++) {
    file.write('Estaba la pajara pinta, sentada en un verde limón, con el pico picaba la rama, con la rama picaba la flor')
    
}


file.end();
const fs = require('node:fs');

fs.readFile('./', (err, files) => {
  if (err) {
    console.log('Error al leer el directorio: ', err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});

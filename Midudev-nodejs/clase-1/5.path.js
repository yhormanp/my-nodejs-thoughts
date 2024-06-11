const path = require('node:path');
console.log(
  'barras usadas en las direcciones en el sistema opeartivo actual ',
  path.sep
);

// unir rutas con path join

const filePath = path.join('content', 'subfolder', 'test.txt');
console.log('ruta unida', filePath);

const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log('nombre del fichero', base);

const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log('nombre del fichero sin extension', fileName);

const extension = path.extname('image.jpg');
console.log('extesion del archivo: ', extension);

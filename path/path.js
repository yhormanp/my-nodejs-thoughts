/*
This module allows you extract information out of it using those methods:
    dirname: get the parent folder of a file
    basename: get the filename part
    extname: get the file extension
*/

const path = require('path');
const  notes = './notes.txt'
const cancion= '../so-archivos/cancion.txt'
//dirname
console.log( path.dirname (notes) ); // prints '.' cause it's located in the same file 
console.log( path.dirname(cancion)) // prints '../so-archivos'
//basename
console.log(path.basename(notes)); // notes.txt
console.log(path.basename(cancion)); // cancion.txt
//extension
console.log( path.extname(notes)); // . txt
console.log( path.extname(cancion)); // .txt

// You can get the file name without the extension by specifying a second argument to basename:
console.log( path.basename(notes, path.extname(notes)) ); // notes)
console.log( path.basename(cancion, path.extname(cancion)) ); // notes)

// You can join two or more parts of a path by using path.join():
const name = 'joe';
console.log( path.join('/', 'users', name, 'notes.txt')); // '/users/joe/notes.txt'

//You can get the absolute path calculation of a relative path using path.resolve():
 console.log( path.resolve('../so-archivos/cancion.txt')); // '/Users/yhorman_perez/Documents/Estudio/NODEJS/my-nodejs-thoughts/so-archivos/cancion.txt' if run from my home folder


 // If the first parameter starts with a slash, that means it's an absolute path
 console.log( path.resolve('/etc', 'joe.txt')); // '/etc/joe.txt'

 /*path.normalize() is another useful function, that will try and calculate the actual path, when it contains relative 
 specifiers like . or .., or double slashes:
 */

 console.log( path.normalize('/users/joe/..//test.txt') ); // '/users/test.txt'


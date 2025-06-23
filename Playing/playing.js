// function hola(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hola " + nombre);
//       resolve(nombre);
//     }, 1500);
//   });
// }

// function adios(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Adios", nombre);
//       resolve(nombre);
//     }, 1000);
//   });
// }

// function hablar(nombre) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("bla bla bla bla bla ");
//       //   resolve(nombre);
//       reject("hay un error ");
//     }, 1000);
//   });
// }

// console.log("iniciando el proceso");
// hola("yhorman")
//   .then(hablar)
//   .then(hablar)
//   .then((nombre) => {
//     return adios(nombre);
//   })
//   .then((nombre) => console.log("terminado el proceso " + nombre))
//   .catch((error) => {
//     console.error("ha habido un error");
//     console.error(error);
//   });


// ++++++++++++++++++++++++++++++++++++++++++++

//probando como leer un archivo

// const fs = require('fs');

// async function getData (){
//   const datos = await fs.promises.readFile('../so-archivos/cancion.txt');
//   console.log('val', datos.toString())
// }

// getData()


str = 'Hello World!';
console.log(global.str);

module.exports 



const fs = require('node:fs/promises');
async function example() {
  try {
    const data = await fs.readFile('../destino/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  console.log('fin del proceso');
}
example();


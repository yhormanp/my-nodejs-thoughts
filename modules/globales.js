
// let i = 0 ;
// let intervalo = setInterval(() => {
//     console.log('hola ', i)
//     if(i === 3){
//         clearInterval(intervalo)
//     }
//     i++
// }, 1000);
/*checking environment variables */
console.log('process', process);

/* Locations */
console.log('my directory', __dirname)
console.log('my directory', __filename)

/* global variables, not recommended*/
global.mivariable='elValor';

console.log(mivariable)
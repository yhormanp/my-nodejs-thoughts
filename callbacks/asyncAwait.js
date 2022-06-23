const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello error"));
      }
    }, 500);
  });



async function  asyncAwait () {
    try {
        const msg = await promiseFunction();
        console.log('message:', msg)
    } catch (error) {
        console.error('error:', error);
    }
}

asyncAwait();


async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios", nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla bla bla ");
        resolve(nombre);
      // reject<("hay un error ");
    }, 1000);
  });
}


async function  main (){
  let nombre = await hola('yhorman');
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('terminamos el proceso')
}

console.log('iniciamos el proceso')
main()



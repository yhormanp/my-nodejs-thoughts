const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error("hello error"));
    }
  }, 2000);
});

promise
  .then((msg) => {
    return msg.toUpperCase();
  })
  .then((msg) => console.log("message", msg))
  .catch((error) => console.error("Error:", error));

  // another example


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
      //   resolve(nombre);
      reject("hay un error ");
    }, 1000);
  });
}

console.log("iniciando el proceso");
hola("yhorman")
  .then(hablar)
  .then(hablar)
  .then((nombre) => {
    return adios(nombre);
  })
  .then((nombre) => console.log("terminado el proceso " + nombre))
  .catch((error) => {
    console.error("ha habido un error");
    console.error(error);
  });

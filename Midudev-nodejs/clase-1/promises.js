async function saludar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 2000);
  });
}

async function hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} dice: Bla Bla Bla Bla Bla`);
      resolve(nombre);
    }, 2000);
  });
}

async function despedirse (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} se despide, ha sido un placer`);
      //   resolve(nombre);
      reject(new Error('hola soy un error'));
    }, 1000);
  });
}

saludar('Yhorman')
  .then(hablar)
  .then(hablar)
  .then(despedirse)
  .then((nombre) => console.log(`terminado el proceso de ${nombre} `))
  .catch((error) => {
    console.error('ha habido un error');
    console.error(error);
  });

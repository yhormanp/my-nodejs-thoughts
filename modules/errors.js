function otraFunction() {
  generarError();
}

function generarError() {
  return 3 + z;
}

function seRompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("error en mi  funcion asincrona");
      callback(error);
    }
  });
}

/*
try to use try catch to catch every function or method that could crash*/
try {
  // generarError()
  // otraFunction()
  seRompeAsincrona(function (error) {
    console.log("hay error", error.message);
  }); // lo mas logico para capturar un error en una funcion asincrona es poner el try catch dentro de su ejecucion
} catch (error) {
  console.error("vaya algo se ha roto");
  console.error(error.message);
  console.log("Pero no pasa nada, lo hemos capturado");
}

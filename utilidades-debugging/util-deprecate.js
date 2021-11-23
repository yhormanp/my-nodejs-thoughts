    const util= require('util');

    // como crear un metodo que se puede marcar como deprecado, dado que en versiones futuras va  a ser removido

    const helloPluto = util.deprecate(() => {
        console.log("Hello pluto")
    }, "Pluto is deprecated, It is not a planet anymore");

    helloPluto();
const util = require('util');


const customConsole = new console.Console(process.stdout, process.stderr);

const emojis = {
    log: "  \u001b[37m ☺",
    danger: "  \u001b[31m ☠",
    info: "  \u001b[34m ℹ",
    warning: "  \u001b[33m ⚠",
    love: "  \u001b[35m ❤"
  };


customConsole.info = (msg = '') => {
    console.log(`${emojis.log}`, msg)
}


customConsole.log('Hola este es mi log personalizado')

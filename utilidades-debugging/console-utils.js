// placeholders
// %s - String
// %d - Number
// %i - parseInt(value, 10)
// %f - parseFloat(value)
// %j - JSON
// %o - Object
// %c - Css
// %% - signo de '%'
console.log("un %s y un %s", "perrito", "gatitos")

const util = require('util');
const debugLog =  util.debuglog("dev");


debugLog("hello from debug log when Dev"); // solo se imprime cuando se corre el comando con la variable NODE_DEBUG=dev
//NODE_DEBUG=dev node console-utils.js
/*
Returns an array listing the events for which the emitter has registered listeners.
 The values in the array are strings or Symbols
*/

const EventEmitter = require("events");
const myEE = new EventEmitter();
myEE.on("foo", () => {});
myEE.on("bar", () => {});

const sym = Symbol("symbol");
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]

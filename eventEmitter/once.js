/*
Adds a one-time listener function for the event named eventName. 
The next time eventName is triggered, this listener is removed and then invoked.
*/

const EventEmitter = require("events");
const server = new EventEmitter();

server.once("connection", (stream) => {
  console.log("Ah, we have our first user!");
});

server.emit('connection'); // prints Ah, we have our first user
server.emit('connection'); // prints nothing because the event was removed
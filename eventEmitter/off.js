/* 
.removeListener / .off
Removes the specified listener from the listener array for the event named eventName.
*/

const callback = ()=>{
    console.log('someone just connected')
}

const EventEmitter = require('events');
const server = new EventEmitter();

server.on('connection', callback);

server.emit('connection') // prints someone just connected
// server.removeListener('connection', callback);
server.off('connection', callback);
server.emit('connection') // prints nothing because the event was removed
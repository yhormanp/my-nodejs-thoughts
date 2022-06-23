/*
The EventEmitter instance will emit its own 'newListener' event before a 
listener is added to its internal array of listeners.

In this example the new listener will be checking new events created and print by console a message
when a testing event is added

After a second, the event testing will be called to print by console a message
*/


const EventEmitter = require('events');

const myEmmiter = new EventEmitter();

myEmmiter.on('newListener', (event, listener)=>{
    if(event === 'testing'){
        console.log('simple log catching the testing event created')
    }
})

myEmmiter.on('testing', ()=>{
    console.log('this is the response from the event testing')
});

setTimeout(() => {
    myEmmiter.emit('testing')
}, 1000);
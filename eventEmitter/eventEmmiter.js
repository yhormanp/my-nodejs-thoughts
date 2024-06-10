/*
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: 
mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the events module.

This module, in particular, offers the EventEmitter class, which we'll use to handle our events.

You initialize that using
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

This object exposes, among many others, the on and emit methods.

emit is used to trigger an event
on is used to add a callback function that's going to be executed when the event is triggered

*/

const EventEmitter = require('events');
const  myEmitter = new EventEmitter();

// this is the same that myEmitter.addListener()
myEmitter.on('test-event', ()=>{
    console.log('this is the event raised when test-event was called')
})

myEmitter.on('test-event', ()=>{
    console.log('this is test to check events with the same name')
})

myEmitter.emit('test-event') // triggering the call

// Return an array of strings that represent the events registered on the current EventEmitter object:
console.log('list of events registered', myEmitter.eventNames()); // print  [ 'test-event' ] // only 1 event with the same name is registered, but triggered all the instances created



// additional examples


// Get the count of listeners of the event passed as parameter
console.log('Listener count', myEmitter.listenerCount('test-event'))  // there are 2 listeners
 
// Gets an array of listeners of the event passed as parameter:
console.log('array of listeners of the event test-event', myEmitter.listeners('test-event')); 

// Adds a callback function that's called when an event is emitted for the first time after registering this.
// This callback is only going to be called once, never again.
myEmitter.once('test-event-once', ()=> {
    console.log('this is an event that will be triggered just once')
});

myEmitter.emit('test-event-once') // this is print just once    
myEmitter.emit('test-event-once')

// Remove a specific listener. You can do this by saving the callback function to a variable, 
// when added, so you can reference it later:

const openAction = ()=>{
    console.log('this  a new event called open')
}
myEmitter.on('open', openAction);
myEmitter.emit('open')
myEmitter.removeListener('open', openAction);
myEmitter.emit('open')

// myEmitter.removeListener()



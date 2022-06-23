/*
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

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
const  myEmmiter = new EventEmitter();


myEmmiter.on('test-event', ()=>{
    console.log('this is the event raised when test-event was called')
})

myEmmiter.on('test-event', ()=>{
    console.log('this is test to check events with the same name')
})

myEmmiter.emit('test-event')

console.log('list of events registered', myEmmiter.eventNames()); // only 1 event with the same name is registered, but triggered all the instances created
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', ()=>{
    console.log('data received 1');
})
customEmitter.on('response', ()=>{
    console.log('data receieved 2');
})

customEmitter.emit('response')
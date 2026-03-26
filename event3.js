const { emit } = require('cluster');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('order', () => {
  console.log('Order received');
});

emitter.on('order', () => {
  console.log('Preparing food');
});

emitter.on('order', () => {
  console.log("order delivered");
});

emitter.emit('order');
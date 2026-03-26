const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('UserLogin', (name) => {
  console.log(name + ' logged in...');
});

emitter.emit('UserLogin', 'Shaon');
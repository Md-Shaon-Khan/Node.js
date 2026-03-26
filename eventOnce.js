const EventEmitter = require('events')
const emitter = new EventEmitter();

emitter.once('test', () => {
  console.log("Run only once");
});

emitter.emit('test');
emitter.emit('test');
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('greet', () => {
//   console.log("Hello Shaon!");
// })

// emitter.emit('greet');


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', (name, age) => {
//   console.log(`Hello ${name}, Age: ${age}`);
// });

// emitter.emit('greet', 'Shaon', 22);


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('login', () => {
  console.log('user logged in');
});

emitter.on('login', () => {
  console.log('Send welcome email.');
});

emitter.once('login', () => {
  console.log("This runs only once");
});

emitter.emit('login');
emitter.emit('login');
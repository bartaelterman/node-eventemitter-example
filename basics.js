var EventEmitter2 = require('eventemitter2').EventEmitter2;

var server = new EventEmitter2();

function eventAction (value1, value2) {
    console.log('value1:');
    console.log(value1);
    console.log('value2:');
    console.log(value2);
}

server.on('my-id', eventAction);


// Emit an event with a different name => no listeners subsribed
console.log('Emitting an event with a different name');
server.emit('my-id2');
console.log('===========\n');

console.log('That should not give any output.\n');

// Emit an event with the `my-id` name => that should cause `eventAction` to be invoced
console.log('Emitting an event with the correct name');
server.emit('my-id');
console.log('===========\n');

// The number of arguments to `.emit` is unlimited. However, `eventAction` expects 2.
// As you can see above, if they are not specified, they become undefined in the function.
// If more arguments are given, they are ignored.
console.log('Emitting an event with the correct name, but too many arguments');
server.emit('my-id', 'arg1', 'arg2', 'arg3');
console.log('===========\n');

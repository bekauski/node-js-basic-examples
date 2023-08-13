const fs = require('fs');
const dns = require('dns');

function info(text, action) {
    console.log(text, performance.now().toFixed(2));
    return action
};

info('Program start  |');

// Close events
fs.writeFile(
    './test.js',
    'console.log(`TEXT.JS START`)',
    () => info('File written   |')
);

//Promises
Promise.resolve().then(() => info('Promise: 1     |'));

// Next Tick
process.nextTick(() => info('Next tick: 1   |'));


// setImmediate
setImmediate(() => info('Immediate: 1   |') );

// Timeouts
setTimeout(() => info('Timeout: 1     |'), 0);
setTimeout(() => {
    process.nextTick(() => info('Next tick: 2   |'));
    info('Timeout: 2     |');
}, 10);

// Intervals
let intervalCount = 1;
const intervalId = setInterval(() => {
    if (intervalCount === 5) {
        clearInterval(intervalId)
        setTimeout(() => console.log('=========================='), 100);
    } info(`Invterval: [${intervalCount++}] |`);
}, 100);

// I/O Events
dns.lookup('localhost', (err, address, family) => {
    info(`DNS: localhost, ${address} |`);
    Promise.resolve().then(() => info('Promise: 2     |'));
    process.nextTick(() => info('Next Tick: 3   |'));
});

info('Program end    |');

console.log('==========================');
console.log('ACTIONS        | TIMESTAMP');
console.log('--------------------------');
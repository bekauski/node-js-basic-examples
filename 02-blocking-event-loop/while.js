let isRunning = true;

const fibonachi = require('./fibonachi-linear-complexity.js')

process.nextTick(() => console.log(fibonachi(10)))



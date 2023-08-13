// 0, 1, 1, 2, 3 ,5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
function info(text, action) {
    console.log(text, performance.now().toFixed(2));
    return action
};

info('Start');

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
};

console.log(fib(100));

info('End');

module.exports = fib;
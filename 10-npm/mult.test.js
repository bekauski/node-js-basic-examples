const mult = require('./mult.js');

test('Should multiply 5 & 10 and return 50', () => {
    expect(mult(5, 10)).toBe(50);
});
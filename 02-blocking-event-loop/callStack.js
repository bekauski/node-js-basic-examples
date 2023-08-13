function thirdFunction() {
    console.log('3')
    return 10;
}

function secondFunction() {
    console.log('2')
    return thirdFunction();
}

function firstFunction() {
    console.log('1')
    return secondFunction();
}

console.log(firstFunction()); // 10
const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies
} = require('./export-and-import');
const greetingConsole = require('./my-modules/single-export');

// DON'T USE ABSOLUTE PATHS
// const greetingConsole = require('/Users/bekovski/Desktop/node/03-commonjs-modules/single-export');

// Import form single-export
console.log('');
console.log(greetingConsole);
greetingConsole(myName);

// Imports from multiple-exports
console.log('');
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);
console.log('');

// Mutates array in the multiple-exports module
myHobbies.push('climbing');

// Imports from export-and-import
console.log('');
console.log(myOtherName, myFriendsName);
console.log(myGreatHobbies);
console.log('');
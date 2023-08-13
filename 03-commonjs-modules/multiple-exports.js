const myName = 'Bekovski';
const myHobbies = ['swimming', 'hiking', 'dacning', 'cycling'];
const myFavoriteNumber = 17;

console.log('')
console.log('MULTIPLE-EXPORTS COMMONJS MODULE')

// module.exports and export reference the same object in memory
module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
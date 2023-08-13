const path = require('path');

const filePath = '/Users/bekovski/Desktop/node/index.js';
const textFilePath = '/Users/bekovski/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log('isApsolute :', path.isAbsolute(filePath));     // true
console.log('isApsolute :', path.isAbsolute(relativePath)); // false

console.log('basename   :', path.basename(filePath));       // index.js
console.log('basename   :', path.basename(directoryPath));  // subfolder

console.log('dirname    :',path.dirname(filePath));         // /Users/bekovski/Desktop/node
console.log('dirname    :',path.dirname(directoryPath));    // ./node

console.log('resolve    :',path.resolve(relativePath));    // /Users/bekovski/Desktop/node/07-path/node/movie.mov

console.log('extname    :', path.extname(textFilePath));    // .txt
console.log('extname    :', path.extname(directoryPath));   // ''

console.log('parse      :', path.parse(filePath));          // Object:
/*  {
      root: '/',
      dir: '/Users/bekovski/Desktop/node',
      base: 'index.js',
      ext: '.js',
      name: 'index'
} */

const parsedPath = path.parse(filePath);
console.log('filePath   :', filePath); // /Users/bekovski/Desktop/node/index.js
console.log('join       :', path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// /Users/bekovski/Desktop/node/renamed-index.mjs
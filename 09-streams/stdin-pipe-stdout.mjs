import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    }
});

const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
        const arrayChars = chunk.toString().split('');
        const lastChar = arrayChars.pop();
        const reversed = arrayChars.reverse().concat(lastChar).join('');
        cb(null, reversed);
    }
});

process.stdin
    .pipe(upperCaseStream)
    .pipe(reverseStream)
    .pipe(process.stdout)

// // Pipe to file
// const filePath = './files/stdin-dump.txt'
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);
//
// // Pipe to stdout
// process.stdin.pipe(process.stdout);
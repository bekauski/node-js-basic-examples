const fs = require('fs');

// Avoid using SYNC versions! They block EVENT LOOP
try {
    fs.writeFileSync('./first.txt', 'First file text ...')
    console.log('File first.txt was written')
    fs.appendFileSync('./first.txt', '\nOne more line')
    console.log('Appended text to the first.txt')
    fs.renameSync('./first.txt', './renamed-file.txt')
    console.log('File first.txt was renamed on renamed-file.txt')

} catch (error) {
    console.log(error);
}



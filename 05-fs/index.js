const fs = require('fs');

fs.writeFile('./first.txt', 'File text ...', (err) => {
    if (err) console.log(err)
    else {
        console.log('File first.txt was written')
        fs.appendFile('./first.txt', '\nOne more line', (err) => {
            if (err) console.log(err)
            else {
                console.log('Appended text to the first.txt')
                fs.rename('./first.txt', './renamed-file.txt', (err) => {
                    if (err) console.log(err)
                    else console.log('File first.txt was renamed on renamed-file.txt')
                })
            }
        })
    }
})
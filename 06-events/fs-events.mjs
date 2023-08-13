import fs from "fs";
import EventEmitter from "events";

const fileEmmiter = new EventEmitter();

const filePath = './first.txt';

fileEmmiter.on('writeComplete', (req, res) => {
    console.log(`File ${filePath} was written`)
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmmiter.emit('appendComplete')
    })

})

fileEmmiter.on('appendComplete', () => {
    console.log(`Appended text to the ${filePath}`)
    fs.rename(filePath, './renamed-file.txt', () => {
        fileEmmiter.emit('renameComplete')
    })

})

fileEmmiter.on('renameComplete', () => {
    console.log(`File ${filePath} was renamed on renamed-file.txt`)
})


fs.writeFile(filePath, 'First file text ...', () => {
    fileEmmiter.emit('writeComplete')
})
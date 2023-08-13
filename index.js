const { URL, USERNAME, PASSWORD } = require('./constants')

function terminalLogInfo() {
    setTimeout(() => {
        console.log(`......................`)
        console.log(`URL      : ${URL}     `)
        console.log(`USERNAME : ${USERNAME}`)
        console.log(`PASSWORD : ${PASSWORD}`)
        console.log(`......................`)
    }, 100)
}

terminalLogInfo();


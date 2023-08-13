import http from 'http';
import fs from 'fs';

const FILE_PATH = './files/index.html';

const server = http.createServer((req, res) => {
    // With streams.
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(FILE_PATH);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    // Without streams. We read entire file and send it to the client
    if (req.url === '/no-stream' && req.method === 'GET') {
            fs.readFile(FILE_PATH, (err, data) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Error reading file from the server');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                }
            })
    }
});

server.listen(5050, 'localhost', () => {
    console.log('Server is listening on 5050 port');
});
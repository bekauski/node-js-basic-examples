const http = require('http');
const {
    getHome,
    getHTML,
    getText,
    getComments,
    handleNotFound,
    postComment
} = require('./handlers')

const PORT = 5001;

const server = http.createServer((req, res) => {
    console.log(`A ${req.method} request has been sent to your server`)

    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getComments(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postComment(req, res);
    }

    handleNotFound(req, res);
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server was launched on port ${PORT}`);
});
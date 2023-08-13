const fs = require('fs');
const qs = require('querystring');
const comments = require('./comments.json');

function getHome(req, res) {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loading HTML file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en"><body><div>');
    res.write('<h1>HTTP server</h1>');
    res.write('</div></body></html>');
    res.end();
}

function getText(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Plain text');
}

function getComments(req, res) {
    fs.readFile('./comments.json', (err) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loading HTML file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(comments);
        }
    })
}

function postComment(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let commentObj = qs.parse(body);
            const comment = JSON.stringify(commentObj, (key, value) => {
            });

            if (commentObj.text && commentObj.author) {
                try {
                    fs.appendFile('./comments.json',comment, () => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        res.write('<h1>Comment has been sent</h1>')
                        res.write('<a href="/">Submit one more comment</a>')
                        res.end();
                    })
                } catch (error) {
                    res.statusCode = 400;
                    res.end('Invalid Form data');
                }
            } else {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Please fill the required fields</h1>')
                res.write('<a href="/">Try again</a>')
                res.end();
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = '';

        req.on('data', (chunk) => commentJSON += chunk);

        req.on('end', () => {
            const comment = JSON.parse(commentJSON);
            if (comment.text && comment.author) {
                try {
                    comment.id = comments.length + 1;
                    comments.push(comment);
                    res.statusCode = 200;
                    res.end('New comment has been received');
                } catch (error) {
                    res.statusCode = 400;
                    res.end('Invalid JSON')
                }
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be on the JSON format or as Form');
    }
}

function handleNotFound(req, res) {
    res.statusCode = 404; // If the statusCode starting on '4' - usually means that there's a client mistake
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Error</h1>' + '<h2>Page not found</h2>');
}

module.exports = {
    getHome,
    getHTML,
    getText,
    getComments,
    postComment,
    handleNotFound
};
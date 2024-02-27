// 4-http.js
const http = require('http');

/**
 * This function creates a new HTTP server that listens on port 1245.
 * The server responds with "Hello Holberton School!" for any endpoint.
 * @returns {http.Server} The HTTP server.
 */
function createServer() {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    });

    return server;
}

const app = createServer();

app.listen(1245);

module.exports = app;

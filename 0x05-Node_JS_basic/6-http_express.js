// 6-http_express.js
const express = require('express');

/**
 * This function creates a new HTTP server that listens on port 1245.
 * The server responds with "Hello Holberton School!" for the '/' endpoint.
 * @returns {express.Application} The Express application.
 */
function createServer() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello Holberton School!');
    });

    return app;
}

const app = createServer();

app.listen(1245);

module.exports = app;

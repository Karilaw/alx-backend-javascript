// 5-http.js
const http = require('http');
const fs = require('fs').promises;

/**
 * This function reads a CSV file asynchronously and logs the number of students and their names by field.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} A promise that resolves when the operation is complete.
 */
async function countStudents(path) {
    let data;

    try {
        data = await fs.readFile(path, 'utf8');
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    const students = lines.slice(1).map(line => line.split(',')).filter(student => student.length > 1);

    console.log(`Number of students: ${students.length}`);

    const fields = [...new Set(students.map(student => student[3]))];

    fields.forEach(field => {
        const studentsInField = students.filter(student => student[3] === field);
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map(student => student[0]).join(', ')}`);
    });
}

/**
 * This function creates a new HTTP server that listens on port 1245.
 * The server responds with "Hello Holberton School!" for the '/' endpoint,
 * and with the list of students for the '/students' endpoint.
 * @returns {http.Server} The HTTP server.
 */
function createServer() {
    const server = http.createServer(async (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        if (req.url === '/') {
            res.end('Hello Holberton School!');
        } else if (req.url === '/students') {
            try {
                await countStudents('database.csv');
                res.end();
            } catch (err) {
                res.end(err.message);
            }
        } else {
            res.end();
        }
    });

    return server;
}

const app = createServer();

app.listen(1245);

module.exports = app;

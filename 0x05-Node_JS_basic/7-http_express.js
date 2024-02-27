// 7-http_express.js
const express = require('express');
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
 * @returns {express.Application} The Express application.
 */
function createServer() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello Holberton School!');
    });

    app.get('/students', async (req, res) => {
        try {
            await countStudents('database.csv');
            res.end();
        } catch (err) {
            res.end(err.message);
        }
    });

    return app;
}

const app = createServer();

app.listen(1245);

module.exports = app;

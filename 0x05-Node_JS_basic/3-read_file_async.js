// 3-read_file_async.js
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

module.exports = countStudents;

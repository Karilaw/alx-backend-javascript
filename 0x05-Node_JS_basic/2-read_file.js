// 2-read_file.js
const fs = require('fs');

/**
 * This function reads a CSV file synchronously and logs the number of students and their names by field.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
    let data;

    try {
        data = fs.readFileSync(path, 'utf8');
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

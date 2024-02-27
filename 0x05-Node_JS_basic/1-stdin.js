// 1-stdin.js
const readline = require('readline');

/**
 * This function interacts with the user through the command line.
 */
function interact() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
        console.log(`Your name is: ${name}`);
        rl.close();
    });

    rl.on('close', () => {
        console.log('This important software is now closing\n');
    });
}

module.exports = interact;

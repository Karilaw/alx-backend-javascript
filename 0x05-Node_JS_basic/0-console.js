/**
 * This function prints a message to the console.
 * @param {string} message - The message to be printed.
 */
function displayMessage(message) {
    if (typeof message !== 'string') {
        throw new Error('The argument must be a string.');
    }
    console.log(message);
}

module.exports = displayMessage;

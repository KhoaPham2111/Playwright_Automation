const readlineSync = require('readline-sync');
function getInputArray() {
    let array = [];
    while (true) {
        input = readlineSync.question('Enter a value (or type "exit" to finish): ');

        if (input.toLowerCase() === 'exit') {
            break;
        }

        // Convert input to a number if it is a numeric value
        if (!isNaN(input) && input.trim() !== '') {
            input = Number(input);
        }

        // Add input to array using array length property
        array[array.length] = input;
    }
    return array;
}
module.exports = {getInputArray};
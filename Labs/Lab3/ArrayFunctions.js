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
function bubbleSortArray(array) {
    let unsortedPosition = array.length - 1;
    for (; unsortedPosition > 0; unsortedPosition--) {
        for (let index = 0; index < unsortedPosition; index++) {
            const leftValue = array[index];
            const rightValue = array[index + 1];
            if (leftValue > rightValue) {
                // Swap without using a temp variable
                //a = a+b; 
                //b = a-b; 
                //a = a-b;
                array[index] = array[index] + array[index + 1];
                array[index + 1] = array[index] - array[index + 1];
                array[index] = array[index] - array[index + 1];
            }
        }
    } return array;
}
module.exports = {getInputArray, bubbleSortArray};

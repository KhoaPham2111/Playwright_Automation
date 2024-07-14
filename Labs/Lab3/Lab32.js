//Array Declare
const { getInputArray } = require('./inputArray.js');
const userArray = getInputArray();
console.log('Final array:', userArray);

let minValue = intArr[0];
let maxValue = intArr[0];

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] < minValue) {
        minValue = intArr[index];
    } else if (intArr[index] > maxValue) {
        maxValue = intArr[index];
    }
}
console.log(`Min value: ${minValue}`);
console.log(`Max value: ${maxValue}`);
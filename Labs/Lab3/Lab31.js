//const intArr = [1, 2, 3, 4, 5];

//Array Declare
const { getInputArray } = require('./inputArray.js');
const userArray = getInputArray();
console.log('Final array:', userArray);
let evenNumbs = 0;
let oddNumbs = 0;

for (let index = 0; index < userArray.length; index++) {
    if (userArray[index] % 2 === 0) {
        evenNumbs++;
    } else {
        oddNumbs++;
    }
}
console.log(`Even numbs: ${evenNumbs}`);
console.log(`Even numbs: ${oddNumbs}`);
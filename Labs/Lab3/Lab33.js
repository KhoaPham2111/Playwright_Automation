// let temp = leftValue;
// leftValue = rightValue;
// rightValue = temp;
// console.log(temp);
// console.log(leftValue);
// console.log(rightValue);
// const intArray = [12, 34, 1, 16, 28];
// let total = intArray.length;
// for (let index = 0; index < total; index++) {
//     for (let i = 0; i < index; i++) {
//         if (intArray[i + 1] < intArray[i]) {
//             let currentValue = intArray[i];
//             intArray[i] = intArray[i + 1];
//             intArray[i + 1] = currentValue;
//         }
//     }
// }

// console.log(intArray);

//Array Declare
const { getInputArray, bubbleSortArray } = require('./inputArray.js');
const userArray = getInputArray();
console.log('Final array:', userArray);
bubbleSortArray(userArray)
console.log(userArray);
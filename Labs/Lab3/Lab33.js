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
const { getInputArray } = require('./inputArray.js');
const userArray = getInputArray();
console.log('Final array:', userArray);
const intArr = [12, 34, 1, 16, 28];

let unsortedPosition = intArr.length - 1;
// BigO: n^2

for (; unsortedPosition > 0; unsortedPosition--) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = intArr[index];
        const rightValue = intArr[index + 1];
        if (leftValue > rightValue) {
            // Swap without using a temp variable
            //a = a+b; 
            //b = a-b; 
            //a = a-b;
            intArr[index] = intArr[index] + intArr[index + 1];
            intArr[index + 1] = intArr[index] - intArr[index + 1];
            intArr[index] = intArr[index] - intArr[index + 1];
        }
    }
}
console.log(intArr);
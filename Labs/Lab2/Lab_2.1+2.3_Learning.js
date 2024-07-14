const readline = require('readline-sync');
const UtilMethods = require('../../Lessions/Day_05/UtilMethods.js');
const { getWeight } = require('../../Lessions/Day_05/UtilMethods.js');



// Input user data
let userWeight = Number(readline.question('Please input your weight (kg):'));
console.log(`${userWeight}kg`);
let userHeight = Number(readline.question('Please input your height (m):'));
console.log(`${userHeight}m`);
if (Number.isNaN(userWeight) || Number.isNaN(userHeight)) {
    console.log('Your input is invalid, please try again');
}

// Calculate BMI
let yourCurrentBMI = (userWeight / (userHeight ** 2)).toFixed(1);
console.log(`Your BMI is: ${yourCurrentBMI}`);

const minIdealBMI = 18.5;
const maxIdealBMI = 24.9;

if (yourCurrentBMI < minIdealBMI) {
    const diffWeight = getWeight(yourCurrentBMI, userHeight, minIdealBMI);
    console.log(`You are Underweight, you should increase atleast ${diffWeight}kg`);
} else if (yourCurrentBMI < maxIdealBMI) {
    console.log('You are Normal weigh, keep it up');
} else if (yourCurrentBMI < 29.9) {
    const diffWeight = getWeight(yourCurrentBMI, userHeight, minIdealBMI);
    console.log(`You are Overweigh, you should loss atleast ${diffWeight}kg`);
} else {
    const diffWeight = getWeight(yourCurrentBMI, userHeight, minIdealBMI);
    console.log(`You are Obesity, you should loss atleast ${diffWeight}kg`);
}



// function getWeight(yourCurrentBMI, userHeight, standardBMI) {
//     const diffWeight = (userHeight ** 2) * (standardBMI - yourCurrentBMI);
//     return Math.abs(diffWeight).toFixed(1)
// }
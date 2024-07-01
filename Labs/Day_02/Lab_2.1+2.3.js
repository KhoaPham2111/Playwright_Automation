const readline = require('readline-sync');

// Input user data
let userWeight = Number(readline.question('Please input your weight (kg):'));
console.log(`${userWeight}kg`);
let userHeight = Number(readline.question('Please input your height (m):'));
console.log(`${userHeight}m`);
if (Number.isNaN(userWeight) || Number.isNaN(userHeight)) {
    console.log('Your input is invalid, please try again');
}

// Calculate BMI
let BMI = (userWeight / (userHeight ** 2)).toFixed(1);
console.log(`Your BMI is: ${BMI}`);

// Calculate weight gap
let gapMinNormalWeight = (Math.abs(BMI - 18.5) * (userHeight ** 2)).toFixed(1);
let gapMaxNormalWeight = (Math.abs(BMI - 24.9) * (userHeight ** 2)).toFixed(1);
console.log(gapMinNormalWeight);
console.log(gapMaxNormalWeight);


// Decide User body fatness
if (BMI < 18.5) {
    console.log(`You are Underweight, you should gain atleast from ${gapMinNormalWeight}kg to most ${gapMaxNormalWeight}kg`);
} else if (BMI <= 24.9) {
    console.log('You are Normal weight, you are doing well, please keep your body fit');
} else if (BMI <= 29.9) {
    console.log(`You are Overweight, you should lose atleast from ${gapMaxNormalWeight}kg to most ${gapMinNormalWeight}kg`);
} else {
    console.log(`You are Obesity, you should lose atleast from ${gapMaxNormalWeight}kg to most ${gapMinNormalWeight}kg`);
}
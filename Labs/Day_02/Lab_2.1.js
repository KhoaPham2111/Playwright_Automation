const readline = require('readline-sync');
// Input user data
let userWeight = Number(readline.question('Please input your weight (kg):'));
console.log(`${userWeight} kg`);
let userHeight = Number(readline.question('Please input your height (m):'));
console.log(`${userHeight} m`);

// Calculate BMI
let BMI = (userWeight / (userHeight * 2)).toFixed(1);
console.log(`Your BMI is: ${BMI}`);

// Decide User body fatness
if (BMI <= 18.5) {
    console.log('You are Underweight, you should increase your weight');
} else if (BMI < 24.9) {
    console.log('You are Normal weight, you are doing well, please keep your body fit');
} else if (BMI < 29.9) {
    console.log('You are Overweight, please do more exercises and decrease your weight');
} else {
    console.log('You are Obesity, please decrease your weight immediately or you will have a heart attack');
}
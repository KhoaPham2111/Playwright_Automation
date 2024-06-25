const readline = require('readline-sync');

// Input number
let number = Number(readline.question('Please input a number:'))

// Check number
let decimal = Number(number / 2 - Math.floor(number / 2)).toFixed(1)
console.log(`${number / 2}`);
console.log(`${Math.floor(number / 2)}`);
console.log(`${decimal}`);

// Statement
if (decimal == 0) {
    console.log('Your number is a even number');
} else if (decimal == 0.5) {
    console.log('Your number is a even number');
} else (console.log("Please input a valid interger number"));


if (Number.isInteger(number)) {
    if (number % 2 == 0) {
        console.log('Your number is a even number');
    } else (console.log('Your number is a odd number'));
} else (console.log("Please input a valid interger number"));

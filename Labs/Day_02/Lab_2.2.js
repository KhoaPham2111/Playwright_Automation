const readline = require('readline-sync');

// Input number
let number = readline.question('Please input a number:')

// Check number
let decimal = number / 2 - Math.floor(number / 2)
console.log(`${decimal}`);

// Statement
if (decimal > 0) {
    console.log('Your number is a odd number');
} else console.log('Your number is a even number');

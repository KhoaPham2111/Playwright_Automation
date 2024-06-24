const readline = require('readline-sync');

let number = readline.question('Please input a number:')
let decimal = number / 2 - Math.floor(number / 2)
console.log(`${decimal}`);
if (decimal > 0) {
    console.log('Your number is a odd number');
} else console.log('Your number is a even number');

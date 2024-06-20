
const readline = require('readline-sync');

// let myName = readline.question('Your name: ');
// let myAge = readline.question('Your age: ');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myAge) + 1;
// console.log(`Next year I'll be ${nextYearAge}`);

let arrivalTime = readline.question('arrivalTime: ');
let isHeOnTime = (arrivalTime == 7);
// Comparision operator: >, <, >=, <=, ==, ===, !=, !==, !===
// ! different
if (isHeOnTime) {
    console.log('Let\'s talk');
    // do something here
} else {
    // if (anotherThing){
    // and then so on...
    // }
    console.log('Write a letter!');
}

if (!isHeOnTime) {
    console.log('Write a letter!');
} else {
    console.log('Let\'s talk');
}

// Tenary operator: Toán tử 3 ngôi
let msg = '';
if (isHeOnTime) {
    msg = 'Let\'s talk';
} else {
    msg = 'Write a letter!';
}
console.log(msg);

let msg1 = isHeOnTime ? 'Let\'s talk' : 'Write a letter!';
console.log(msg1);
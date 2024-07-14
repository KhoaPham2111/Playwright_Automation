// Input number
let number = Number(readline.question('Please input a number:'))

// 1st solution: Using %
if (Number.isInteger(number)) {
    if (number % 2 === 0) {
        console.log(`Your number ${number} is a even number`);
    } else (console.log(`Your number ${number} is a odd number`));
} else {
    (console.log("Please input a valid interger number"));
}

// 2nd solution: Calculate the decimal to determine
let decimal = Number(number / 2 - Math.floor(number / 2)).toFixed(1)
console.log(`${number / 2}`);
console.log(`${Math.floor(number / 2)}`);
console.log(decimal);

if (decimal == 0) {
    console.log(`Your number ${number} is a even number`);
} else if (decimal == 0.5) {
    console.log(`Your number ${number} is a odd number`);
} else {
    (console.log("Please input a valid interger number"));
}

// 3rd solution
let devideResult = number / 2;
if (Number.isInteger(devideResult)) {
    console.log(`Your number ${number} is a even number`);
} else {
    console.log(`Your number ${number} is a odd number`);
}

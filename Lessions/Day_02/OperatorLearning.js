let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and left Operand
let result = myNum1 + myNum2;
console.log(result);
console.log('Total value: '+result);
console.log('Total value: ',result);
// String literal, backstick
console.log(`Total value: ${result}`);
result = 5/2;
console.log(`5 / 2 = ${result}`);
console.log(`4 / 2 = ${4/2}`);
console.log(`10 / 2 = ${10/3}`);

// Rounding
let roundingNearest = Math.round(10/3);
console.log(`Rounding nearest: 10 / 3 = ${10/3}`);
console.log(`roundingNearest: 10 / 3 = ${roundingNearest}`);

let roundingFloor = Math.floor(8/3);
console.log(`roundingFloor: 8 / 3 = ${roundingFloor}`);

let roundingCeil = Math.ceil(7/3);
console.log(`roundingCeil: 7 / 3 = ${roundingCeil}`);

result = 10 / 3;
let toFixedNumber = result.toFixed(3);
console.log(`toFixedNumber: ${toFixedNumber}`);
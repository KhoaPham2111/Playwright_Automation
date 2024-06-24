let a = 1;
let b = 2;
let c = ++a + b++;
console.log(`a = ${a}, b = ${b}, c = ${c}`);
// execute in this order: prefix > right operand > assignment > postfix
/**
 * a= 2
 * c = 4
 * b = 3
 */

/**
 * <18: Khong ban
 * 18 -> 55: Unlimited!
 * 56 -> 2: Chai!
 */

const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

if (clientAge < 18) {
    console.log("Khong ban!");
} else if (clientAge >=18 && clientAge <=55){
// else if (clientAge <=55) are the same. Logic from top to bottom, only 1 if match
// So the first condition >=18 is redundant
    console.log('Unlimited!');
} else {
    console.log('2 chai!');
}

/** && giong toan tu AND
 * true && true -> true
 * true && false -> false
 * false && false -> false
 * false && true -> false
 * 
 *  || giong toan tu OR
 * true || true -> true
 * true || false -> true
 * false || false -> false
 * false || true -> false
 * 
 */
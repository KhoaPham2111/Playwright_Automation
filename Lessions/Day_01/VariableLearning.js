console.log ("Hello world")

let myName= "Teo"
console.log(myName);

// [V] Re-assign | [X] Re-declare
myName = "Khoa"
// Kiểu này thì bị lỗi: let myName = Khoa
// Vì có thể Re-assign, ko phải Re-declare
console.log(myName);

//Constant [X] not allowed to be re-assigned: ex: can't PI_NUMBER = 2
const PI_NUMBER = 3.14;

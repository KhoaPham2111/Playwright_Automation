// Function (Hướng ngoại), Method (Hướng nội)
// DRY: Don't Repeat Yourself
// Single Responsibility: Tính đơn nhiệm
// Function name: cameCase: Do something, not a noun. Đa phần bắt đầu = động từ

// Declaration Method 01: Function Declaration | Hoisting (Dâng lên)
let returnValue = functionName();
console.log(returnValue);
function functionName(params) {
    return 1;
}

// Declaration Method 02: Function Expression | No Hoisting
const addNumber = function (firstNum, secondNum){
    return firstNum + secondNum;
}
console.log(addNumber(3, 4));
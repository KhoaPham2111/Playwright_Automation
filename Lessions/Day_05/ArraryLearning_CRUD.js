//CRUD: Create Read Update Delete
// Có 2 cách khởi tạo Array
//Via Array's Constructor: Thông qua khởi tạo Array > Rườm rà ko cần thiết

//Literal Declaration: Khai báo tường minh > Hay/Nên dùng
let myNumArray = [1, 2, 3, 4, 5];
let arrayLength = myNumArray.length;
console.log(`Array Lenght: ${arrayLength}`);
console.log(`Array Lenght: ${myNumArray.length}`);
console.log(`Array value at index 3: ${myNumArray[3]}`);
for (let index = 0; index < myNumArray.length; index++) {
    console.log(`Array value at index ${index}: ${myNumArray[index]}`);
}


/**
 * Cần ghi nhớ: 1 Array có index (vị trí, start =0) và length
 * Index: start from 0
 * Length: final index = length -1
 */


//Convert all elements into even number
for (let index = 0; index < myNumArray.length; index++) {
    myNumArray[index] = myNumArray[index] * 2;
}
console.log(myNumArray);
myNumArray[9] = 90;
myNumArray[10] = 100;
console.log(myNumArray); // Hiển thị tất cả value
console.log(myNumArray.pop()); //Return value cuối của Array bị xóa đi
myNumArray.pop();
console.log(myNumArray); // Return Array sau khi xóa value cuối
myNumArray.push(2000);
console.log(myNumArray);


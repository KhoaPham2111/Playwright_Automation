//Array Declare
const { getInputArray, bubbleSortArray } = require('./inputArray.js');
const foo = getInputArray();
console.log('Final foo array:', foo);
bubbleSortArray(foo)
console.log('Final sorted foo array:', foo);
const bar = getInputArray();
console.log('Final bar array:', bar);
bubbleSortArray(bar)
console.log('Final sorted foo array:', bar);
const merged = [];

// logic
let fooPosition = 0;
let barPosition = 0
let fooLength = foo.length;
let barLength = bar.length;
let mergedPosition = 0;

for (; fooPosition < fooLength && barPosition < barLength; mergedPosition++) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue < barValue) {
        merged[mergedPosition] = fooValue;
        fooPosition++;
    } else {
        merged[mergedPosition] = barValue;
        barPosition++;
    }
}
for (; fooPosition < fooLength; fooPosition++, mergedPosition++) {
    merged[mergedPosition] = foo[fooPosition];
}
for (; barPosition < barLength; barPosition++, mergedPosition++) {
    merged[mergedPosition] = bar[barPosition];
}
console.log(merged);
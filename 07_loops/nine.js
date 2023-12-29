//reduced method in js
const nums = [1, 2, 3, 5];

//let initialvalue = 0;
let values = nums.reduce((accu, currentVal) => accu + currentVal,0 );
console.log(values);
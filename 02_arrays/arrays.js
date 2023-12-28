//arrays
const myArr = [10, 1, 2, 4, 5];
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);
// console.log(myArr[4]);

//==>shalow copy same reference point
//==>deep copy different reference point

// const myHeros =  new Array(1, 2, 3, 5);
// console.log(myHeros);
// myHeros.push(100);
// console.log(myHeros);

let myNum = [1,2,3,4,5,6,8];
//console.log(myNum);
let result = myNum.join(",")
// console.log(result);
// console.log(typeof myNum);//result is in string
// console.log(typeof result)


//slice ,splice
let nm = [2, 4, 6, 8, 10];
//console.log("original",nm);

//slice
// console.log(nm.slice(0,3));// cut the array
// console.log(nm);

//splice// modifed the original array
// console.log(nm.splice(0,3));
// console.log(nm);


console.log();
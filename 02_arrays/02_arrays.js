const marvelHeros = ["thor", "ironman","spiderman"];
const dcHeros = ["flash", "batman","superman"];

//marvelHeros.push(dcHeros);
//console.log(marvelHeros[3][0]);//array into array

// marvelHeros.concat(dcHeros);
// console.log(marvelHeros);

// const temp = marvelHeros.concat(dcHeros);
// console.log(temp);

//spread operator
const all_new = [...marvelHeros,...dcHeros];
//console.log(all_new);


const another_Array = [1, 2, 3, [4,5,6], 7, [8,9,[4,5]]];

const realArrayUsable = another_Array.flat(Infinity);
//console.log(realArrayUsable);

console.log((Array.isArray("amit")));//checking the array
console.log((Array.from("amit")));//forming the array

const temp = Array.of(1,2,4,5,6);
console.log(temp);

console.log("================================")
//Array.From method





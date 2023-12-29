// loops for array

let myArr = [1,2,4,5,6,7,8];

for (const num of myArr) {
    //console.log(num);
}
//console.log("----------------")

const greetings = "hello world";
for (const greet of greetings) {

    if(greet == " "){// if empty space found skip the empty space
        continue;
    }
   // console.log(`each char is ${greet}`);
    
}



const map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",3);

for (const [key,value] of map) {// way to print map
    console.log(key, `:- value`);
}

// const myObjects = {
//     "game1" : "NFS",
//     "game2" : "spiderman"
// }

// for (const object[key,value] of myObjects) {
//     console.log(key, value);
// }




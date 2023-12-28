//stkack for primitive type
//heap for non-primitive type

let myLocal = "delhi";

let myTown = myLocal;

//console.log(myTown);


let obj = {
    name : "amit",
    city :  "delhi"
}

//if i changed the value from one referecne other reference value also chnaged
let obj2 = obj;
obj2.name ="dewal";
console.log(obj.name);
console.log(obj2.name);
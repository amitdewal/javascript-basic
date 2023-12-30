const temp = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(temp);

//  {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI);
// Math.PI = tru;
// console.log(Math.PI);

//const myObj = Object.create(null);

const person = {
    name : "sachin",
    price : 2500,
    isAvailable : true,
    doSomethingMethod : function(){
        console.log("hello there")
    }
}
//console.log(person);



Object.defineProperty(person,"name",{
    writable: false,
  enumerable: false,
  configurable: false
});
// console.log(Object.getOwnPropertyDescriptor(person, "name"));

for (let [key, value] of Object.entries(person)) {

if(typeof value !== 'function'){

    console.log(`${key},${value}`)
}
}
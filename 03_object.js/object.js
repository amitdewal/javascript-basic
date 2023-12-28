//singleton object 
//Object.create();

//object literal
const myKey =  Symbol("key1");
const jsUser = {
    name : "amit",
    age  :5,
    "full name": "amit dewal",
    [myKey] : "symbol as a key",
    email : "amit@hotmail.com"
    
}
//Object.freeze(jsUser);// now we cant change the value of the object
// console.log(jsUser.age);//accessing the objects
// console.log(jsUser.name);
// console.log(jsUser["name"]);//another way to access element in the object but key should be in double quotes
// console.log(jsUser["full name"])
// console.log(jsUser.myKey);//undefined
// console.log(jsUser[myKey]);//symbol uses in the object as a key and accessing the value
//console.log(jsUser);
jsUser.email ="amit@ymail.xyz"
//console.log(jsUser);

jsUser.greeting = function (){
    console.log("hello there");
}

jsUser.greeting2 = function (){
    console.log(`hello js user, ${this.name}`);// this keyword is used for object reference
}

//console.log(jsUser.greeting);//[Function (anonymous)]
console.log(jsUser.greeting());//hello there
console.log(jsUser.greeting2());
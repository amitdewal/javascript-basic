//primitive and non primitive data type

 const score = 100;
 const scoreValue = 100.3;
 const isLoggedIs = false;
 let userEmail;

 const id = Symbol('123');
 const anotherId = Symbol('123');

 //console.log(id === anotherId);
 
 const bigNumber = 84234234834895893458973495345345345345n;
 //console.log(bigNumber);

 //non - primitive data type
 //Array , Object, Functions

 const hero = ["shaktiman", " naagraj", "doga"];

 let obj = {
    name :"amit",
    age  :5
 }

 const myFunction  = function() {
     console.log("hello world");
 }


 console.log(typeof obj);
//normal function iife or simple iife
(function chai(){
    console.log("db connection");
})();



//arrow function iife named iife
((db) =>{
    console.log(`${db} connection`);
})('mongo');
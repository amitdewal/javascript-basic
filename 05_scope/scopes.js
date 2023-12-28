//discussion about scopes

var c = 300;//avoid var use let anc const only 
let a = 10000;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a);//it is fine limited scope
//console.log(b);//it is fine limited scope
//console.log(c);//problem is in the var


//

function one(){
    const username = "amit";

    function two(){
        const website ="youtube"
        //console.log(username);
    }
    //console.log(website);

    two();
}
one();

//


console.log(addMethod1(5));//here we call method first then declare it is allowed here
function addMethod1(num){
    return num + 1;
}

console.log(addMethod2(5));// we cant call here 
const addMethod2 = function (num){
    return num + 2;
}

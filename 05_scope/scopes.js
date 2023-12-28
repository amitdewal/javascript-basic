//discussion about scopes

var c = 300;//avoid var use let anc const only 
let a = 10000;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a);//it is fine limited scope
//console.log(b);//it is fine limited scope
console.log(c);//problem is in the var

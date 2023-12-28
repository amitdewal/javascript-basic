

// function sayMyName(){
//     console.log("a");
//     console.log("m");
//     console.log("i");
//     console.log("t");
// }
// //sayMyName();

//add two number
// function addTwoNumbers(num1, num2){//paramters in the braces
//     console.log(num1 + num2);
// }



function addTwoNumbers(num1, num2){//paramters in the braces
  
    return  num1 + num2;
    //console.log("hello world");//Unreachable code detected.
}
addTwoNumbers(3, 4);// here they called as arguments

const result = addTwoNumbers(3, 4);
//console.log(result);


function loginUserMsg(username = "sam"){//default value is passed
    // if(username === undefined){
    //     console.log("plz enter username");
    //     return;
    // }
    if( !username ){//same as above code but industry standard
       // console.log("plz enter username");
        return;
    }

    return ` ${username} just logged in`
}

//const res = loginUserMsg("amit dewal");

const res = loginUserMsg();
//console.log(res);//undefined 




// function calculateCartPrice(...num1){//rest operator => we can pass multiple value
//     return num1;
// }

//  console.log(calculateCartPrice(200, 300, 400, 2000));//[ 200, 300, 400, 2000 ]


//  function calculateCartPrice(val1, val2, ...num1){//rest operator => we can pass multiple value
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 400, 2000));

const user ={
    username :"amit",
    price :999
}

function handleObject(anyObject){

    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({
    username : "Sam",
    price : 399
});

const myNewArr =[100, 200, 300];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArr))
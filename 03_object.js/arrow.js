const user = {
    username :"amit",
    price : 999,

    welcomeMsg  :function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMsg();
// user.username ="sam";
// user.welcomeMsg();
//console.log(this);//we are in node env so this is {}

// function one (){
//     let username = "Amit";
//     console.log(this.username);//undefined
// }
// one();


//array function  we can not use this keyword
// const one = () =>{
//     let username = "amit";
//     console.log(this.username);//undefined
// }
// one();


// const addTwo= (num1, num2) =>{
//    return num1 + num2;
// }


//const addTwo= (num1, num2) => num1 + num2;

//const addTwo= (num1, num2) => (num1 + num2);//mostly used in react


//const addTwo= (num1, num2) => {username : "amit"};// not allowed if we want to return object


//const addTwo= (num1, num2) => ({username : "amit"});//this syntax is allowed if want to return object
//console.log(addTwo(3, 4));


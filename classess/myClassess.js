//classess in the js

// class User {

//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }


//     encryptPassword(){
//         return  `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const temp = new User("sachin", "sachin@gmail.com", "123");
// console.log(temp.encryptPassword());
// console.log(temp.changeUsername());


//behind the sceen we can do this with the help of function in javascript

function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return  `${this.password}abc`;
}

User.prototype.changeUsername = function  () {
    return `${this.username.toUpperCase()}`;
}

const temp = new User("kohli", "kohli@hotmail.com", "1234");
console.log(temp);
console.log(temp.changeUsername());
console.log(temp.encryptPassword());
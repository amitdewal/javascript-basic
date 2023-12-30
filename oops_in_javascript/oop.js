const user = {

    username :"amit",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function(){
        //console.log("got user details from DB");
        //console.log(`username ${this.username}`);
        console.log(this);
    }


}



//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);//{}



//constructor function in js
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this //==> return keyword is optional to write
}
const userOne = new User  ("dewal", 12, true);

const userTwo = new User ("sachin", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);
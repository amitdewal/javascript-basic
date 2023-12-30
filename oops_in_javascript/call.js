function setUsername(username) {
    //db operation
    this.username = username
    console.log("called");

}

function createUser(username, email, password){
    setUsername.call(this,username);

    this.email = email;
    this.password = password;
}

 const temp = new createUser("suresh", "suresh@y.com","123");
 console.log(temp);
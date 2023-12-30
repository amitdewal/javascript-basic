class User {

    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{

    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const temp = new Teacher("rohit","rohit@gmail.com", "121" );
temp.logMe();
temp.addCourse();


const demo = new User("Raina");
demo.logMe();

console.log(demo instanceof Teacher);
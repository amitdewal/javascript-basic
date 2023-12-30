//properties in js

class User{
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`Usernane: ${this.username}`);
    }

    static createId(){// now this method is not permitted to the instance 
        return `123`;
    }
}

const amit = new User("amit");
//console.log(amit.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
        
    }
}

const temp = new Teacher("Amit", "amit@gmail.com");

temp.logMe();
console.log(temp.createId());// now this method is not permitted to the instance 
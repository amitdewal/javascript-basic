//getter and setter in js


class User{

    constructor(email, password) {
        this.email = email;
        this.password = password;
        
    }

    get password(){
        return `${this._password}amit`
    }

    set password(value){
        return this._password = value;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
       this._email = value
    }
}

const amit = new User("amit@gmail.com", "abc");
// console.log(amit.password);
// console.log(amit.email);
//console.log(amit.email);

const temp2 = Object.create(User);
console.log(temp2.email)
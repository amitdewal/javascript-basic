function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function email() {
            return  this._email.toUpperCase();
        },
        set: function email(value) {
            this._email = value;
        }
    });
    

    Object.defineProperty(this, 'password',{ get: function password() {
        return  this._password.toUpperCase();
    },
    set: function password(value) {
        this._password = value;
    }});
   
}

const temp = new User("amit@gmail.com", "amit");
//console.log(temp.email)



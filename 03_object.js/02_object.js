// const tinderUser = new Object();
// console.log(tinderUser);//singleton user



const tinderUser = {};// normal object
//console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);


//nesting of the object
const regularUser ={
    email : "some@gmail.com",
    fullname:{
        userFullName :{
            firstName :"amit",
            lastName :"dewal"
        }
    }
}

console.log(Object.keys(tinderUser));//accesing keys
console.log(Object.values(tinderUser));//accessing values
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedn"));//checking the values present in the object or not
// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname.userFullName.lastName);


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

//user spred operator to combined both above object

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

//console.log(obj1);
//console.log(obj2);


const obj3 = {...obj1,...obj2};//simple smart and easy way to combined differenct object
//console.log(obj3);

const users =[
    {id:101,
    email:"demo@hotmail.com"
    }
    ,
    {id:101,
        email:"demo@hotmail.com"
        },
        {id:101,
            email:"demo@hotmail.com"
            },
            {id:101,
                email:"demo@hotmail.com"
                },{id:101,
                    email:"demo@hotmail.com"
                    }
]

users[0].id
users[1].email
//console.table(users);
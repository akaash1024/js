const user = {
    username: "Akash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //this is not prototype
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) //using "new" so userTwo cant over-ride userOne data
console.log(userOne.constructor);
//console.log(userTwo);

//creting prototype
User.prototype.Akash = () => {
    console.log("Setting own proto is done")
}

console.log(User.prototype) //return Akash



/////////////////
//working on Array


arr = [1,2,3];

Object.prototype.AkashArr = function(){
    console.log("Object arr done")
    }
Array.prototype.AkashArrayArr = function () {
    console.log("Array arr done")
}
//console in browser and checck differance

//arr > Array > Object > null
/*
singleton // creating object using constructor //shorthand if made by constructor then its singleton

⚠️⚠️⚠️ object.create //constructor method through //
*/


//>>>>>>>>>>>>>>>>>>his is object literals <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ### use from here

const mySym = Symbol("mykey1")
const user = {
    name : "Akash",
    "full name": "Akash Rambahadur Kevat", //thats why you should know about this method. 
    // mySym:"key1", //next line check, we cant use like current line,
    [mySym]:"mykey1", //to use symbol first declare, write in bracket and assign val.
    age : 18,
    location : "Fatehpur",
    email: "akash@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(user.email);
// console.log(user['age']);
// console.log(user["full name"]); //thats why you should know about this method. ⚠️SPACE 

// console.log(user.mySym,typeof user.mySym); //line 16: giving "string" we cant use like that

// console.log(user[mySym]); //using this way for symbols 

// user.email="umeba@gmail.com"
// // Object.freeze(user)
// user.email="again@gmail.com"
// // console.log(user);

user.greeting = function(){
    console.log("Hello JS User");
}

console.log(user);

user.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`); //this refere to current context
}



// console.log(user.greeting); //returns [Function (anonymous)], not excute only returns⚠️ the reference 
// console.log(user.greeting()); 

console.log(user.greetingTwo());






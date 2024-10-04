//chaining two object 


let user = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let workInfo = {
  salary: 100000,
  work: function () {
    console.log("Working");
  },
};

Object.setPrototypeOf(workInfo, user);      //(*)(*)(*)(*)(*) OR

workInfo.work(); // "Working"
workInfo.sayHello(); // "Hello"


//MST READ
//(*)(*)(*)(*)(*)
//__proto__ is an older, informal way to get/set the prototype.

//Object.setPrototypeOf is the modern, preferred method to set an object's prototype.




//++++++++++++++++++++++++++++++++++🔴🔴MUST🔴🔴 REST🔴🔴+++++++++++++++++++++++++++++++++++++++\\

//Good Practice for industry level using 🔴🔴Object.create(user)

let user2 = {
    name: "vivek",
    sayHello: function () {
      console.log("Hello");
    },
  };

  // Create another empty object for workInfo. user2 is set as the prototype of workInfo
  let workInfo2 = Object.create(user2);

  // Add properties and methods to the workInfo2 object
  workInfo2.salary = 100000;
  workInfo2.work = function() {
      console.log("Working");
  };

  workInfo2.work(); // "Working"
  workInfo2.sayHello(); // "Hello"




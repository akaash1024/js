//? Array hain,  ❌array nai
let myHeros = ["thor", "spiderman"];

//? Object hain, ❌object nai
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// * array
// myHeros.hitesh()      // ! at end array is object
// myHeros.heyHitesh()

// * object
// heroPower.hitesh()    // ! of course object
// heroPower.heyHitesh() // ! is set of array not object

// ++++++++++++++++++++++++ inheritance object to object
// ++++++++++++++++++++++++ inheritance object to object
// using Object.setPrototypeOf()

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
};

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

//++++++++++++++++++++++++++++

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea               ".trueLength();

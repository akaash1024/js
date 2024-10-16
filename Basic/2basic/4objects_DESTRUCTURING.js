/*
singleton
object.create //constructor method through 
*/

//this is >>>>>>>>>>>singleton<<<<<<<<<<<<<<<<<<

const tinderUser = new Object() //industry practice
// const tinderUser = {} //both are same 

tinderUser.id = "12ahdfdhs"
tinderUser.name = "Akash"

// console.log(tinderUser);



const regularUser = {
    email : "abc@gmail.com",
    fulName: {
        userFullName:{
            firstName:"Akash",
            lastName: "Kevat",
            middleName: "Rambahadur"
        },
        pseudoName:{
            signPseudoName:"A-Kumar"
        }
    }
}


////optional chaining 

// console.log(regularUser) gives all details 
// console.log(regularUser.fulName.userFullName.lastName)
// console.log(regularUser?.fulName?.userFullName?.lastName)  //when taking response from API 
// console.log(regularUser?.fulName?.pseudoName?.signAkash)  // returning undefined as not exit such key/valuee



const ob1 = {1: "Akash", 2: "Bikas"}
const ob2 = {3: "Adarsh", 4: "Bisvas"}
const ob3 = {5: "Amarjeet", 6: "Bandana"}

// const obMain = Object.assign({}, ob1,ob2,ob3) //you remove this "{}" but using this is good, this is called target and source
// console.log(obMain);

// const obMain = {...ob1,...ob3}
// console.log(obMain);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); //giving output in array 
// console.log(Object.entries(tinderUser)); //return individual


// console.log(tinderUser.hasOwnProperty('name')) //true //check property in object 🔴🔴Need
// console.log(tinderUser.hasOwnProperty('email'))


// -------------------------Object de-structure and JSON API intro


const course = {
    courseName : "js in Hindi",
    price: 10000,
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor); //boring ?! 

// lets' destructuring it this object.

const {courseInstructor : instructor,price} = course  

// console.log(courseinstructor); //this is also works
console.log(instructor); 
console.log(price); 

// // destructuring of object
// let obj = {
//     firstName : "Vivek",
//     greet: function(){},
//     age: 41,
//     address : {
//         city : "Ahmedabad",
//         nearest: "chhaganbhai vadi"
//     }
// }

// let {} = obj  //when it {} sign after var js auto get it has destructer the object "same happening in arr"
// let {age} = obj //



// //optional chaining 

// let cityName = obj?.address?.country?.city //this is optional chaining, if theres; no element after address then it will return undefined.

// let city = cityName || "Odhav"
// console.log(city);

// let {} = obj  //when it {} sign after var js auto get it has destructer the object same happening in arr
// let {age} = obj
// `
// ---------------------------------------------------------------------- ARRAY

// `// ⚠️⚠️⚠️⚠️ARRAY
// // let arr = [
// //     "vivek",
// //     function(){
// //         console.log("Greeing")
// //     },
// //     41
// // ]

// // let [ firstName,  , age ] = arr;
// // console.log(firstName);
// `


// ---------------------------------------------------------------------- VIVEK Sir

//  # Modern Javascript - Object shorthand
```
const userData = (name, email) => ({
    name:name,
    email:email
  })

  const userData = (name, email) => ({
  name,
  email
})

```



let greet = function(name, greeting){  //even  you can give greeting="by default Hello" //so if you not give any value then it will take default val.
    greeting = greeting || "Hello"
    return {
        name:name,
        greeting:greeting,
    };
};
// console.log(greet("Vivek")); //if i not give any argument here then it will take "Hello" as by default
// console.log(greet("Vivek","Hi"));



// //mutuable
// stack handle by js engine while, heap uses garbage collection













//splice: splice(2,4) // start from 2 and remove 4 items //mutuate original array //slice not🔴
//OR splice(2,4 "akash", "akash2","akash3") // this will remove from 2 and remove 4 and add three items.

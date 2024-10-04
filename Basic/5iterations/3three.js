// for of


const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


///////////////////// MAPS, known for unique values only
// const map = new Map()

// map.set("In", "India") //taking In as key and India as value
// map.set("USA", "United States of America")
// map.set("Fr", "France")
// map.set("In", "India") //this would be ignore as mentioned. takes only unique values
// console.log(map);
// console.log(map.__proto__);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }




```

// const object = new Object()
const object = {}
object.game1 = "NFS"
object.game2 = "Spiderman"
console.log(object);

// for (const [key,value] of object) {
//     console.log(key, ":-", value);  //throwing error, we can iterate on MAPS. cant on objects like anyway.. .
// }

```

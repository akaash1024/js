const myArr = [0,1,2,3,4,5]
const myHero = ["Shaktiman", "naagraj"]

const myArray2 = new Array(1,2,4,5)
console.log(myArray2.__proto__);
console.log(myArray2);

console.log(myArr[1]) //1

myArray2.push(6) 
myArray2.push(7) 
console.log((myArray2));

myArray2.pop()
console.log((myArray2));

myArr.unshift(10)
myArr.unshift(1100)
console.log((myArr));

myArr.shift()
console.log((myArr));

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


//slice and splice

//const myArr = [0,1,2,3,4,5]
// console.log("AA",myArr);
// const myn1 = myArr.slice(1,3)
// console.log("Slice returns",myn1);

// const myArr = [0,1,2,3,4,5]
console.log("BB",myArr); // [0,1,2,3,4,5]
const myn2 = myArr.splice(1,3); 
console.log("splice removes from original arr",myn2); //[1,2,3] 
console.log("After splice original arr", myArr) //[0, 4, 5]



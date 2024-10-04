const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums1 = myNumbers.map( (num) => {return num+10}) //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

// const newNums2 = myNumbers.map( (num) => num*10).map( (num) => num+1).filter( (num) => num >= 40)

// console.log(newNums1);
// console.log(newNums2);


//chaining 
const newNums = myNumbers
                        .map( (num) => num*10) // once execute its passing to next  chain
                        .map( (num) => num+1)
                        .filter( (num) => num >= 40)
console.log(newNums);


// myNumbers.forEach( () => {

// })
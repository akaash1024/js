const name = "Akash"
const repoCount = 10

console.log(`Hello my name is ${name} and I have around ${repoCount} in git server`)


const gameName = new String('Akash-Kevat')


console.log(gameName[0]); 
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('z')); //-1 represents not exit

//Akash-kevat
//012345678910 
const newString = gameName.substring(0,7)
console.log(newString) // cant give negetive value to start or end.



const url = "akash.kevat";
console.log(url.replace('kevat','Nishad'))



// 0   1   2  3  4  5  6  7  8  9  10
// a   k   a  s  h  -  k  e  v  a  t
//-11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 


const anotherString1 = gameName.slice(-8, 6) // s h -
const anotherString2 = gameName.slice(-8, 4) // s
console.log(anotherString1);
console.log(anotherString2);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


console.log(gameName);
console.log(gameName.split('-'));
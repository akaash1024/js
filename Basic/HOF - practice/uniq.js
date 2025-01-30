let tem = [1, 2, 2, 3, 4, 4, 4, 5];

// function solve(arr) {
//     return [...new Set(arr)];
// }

// console.log(solve(tem)); // Output: [1, 2, 3, 4, 5]


//elelment  1, 2, 2, 3, 4, 4, 4, 5
//index     0, 1  2  3  4  5  6  7


function solve (arr){
    return arr.filter((ele, index)=> arr.indexOf(ele) === index)

}

console.log(solve(tem)); // Output: [1, 2, 3, 4, 5]
const nestedArray = [1, [2, 3], [4, [5, 6]]];


function solve (arr){
    return arr.flat(Infinity)
}

console.log(solve(nestedArray));

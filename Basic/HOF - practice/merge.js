let a = [3, 1, 2];
let b = [5, 4, 1];

function solution (array1, array2){
    let tem = [...array1,...array2] //1 1 2 3 4 5 6

    let newArr = [...new Set(tem)]

    return newArr.sort((a,b) => a-b)
}

console.log(solution(a,b));

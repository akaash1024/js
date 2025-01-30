let arr = ["hello", "world", "hi", "JavaScript", "is", "fun"];

function solution (arr){

    return arr.filter((ele)=> ele.length>=5)
              .map((ele)=> ele.toUpperCase())
}

console.log(solution(arr));

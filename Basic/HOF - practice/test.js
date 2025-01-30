let arr = [1, 2, 2, 3, 3, 3, 4];

function solve (arr) {
    let ans = {};

    arr.forEach(ele => {
        ans[ele] = (ans[ele] || 0) + 1
    });

    console.log(ans.length);
    
    
    let numm = 0;
    for (let i in ans ){
        console.log(i);
        
    }

}

console.log(solve(arr));
